import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  fetchMessages,
  fetchMessagesByCustomer,
  createMessageService,
  deleteMessageService,
} from './services';
import type { CustomerMessage } from './types';

export interface CustomerMessagesState {
  status: 'idle' | 'loading' | 'failed';
  mutationStatus: 'idle' | 'saving' | 'deleting' | 'failed';
  messages: CustomerMessage[];
  errorMessage: string;
}

const initialState: CustomerMessagesState = {
  status: 'idle',
  mutationStatus: 'idle',
  messages: [],
  errorMessage: '',
};

export const getMessagesThunk = createAsyncThunk(
  'customerMessages/list',
  async (_, { rejectWithValue }) => {
    try { return await fetchMessages(); }
    catch (err) { return rejectWithValue(String(err)); }
  }
);

export const getMessagesByCustomerThunk = createAsyncThunk(
  'customerMessages/listByCustomer',
  async (customerId: string, { rejectWithValue }) => {
    try { return await fetchMessagesByCustomer(customerId); }
    catch (err) { return rejectWithValue(String(err)); }
  }
);

export const createMessageThunk = createAsyncThunk(
  'customerMessages/create',
  async (
    input: { customerId: string; message: string; type: string; source: string },
    { rejectWithValue }
  ) => {
    try { return await createMessageService(input); }
    catch (err: any) { return rejectWithValue(err?.errors?.[0]?.message ?? String(err)); }
  }
);

export const deleteMessageThunk = createAsyncThunk(
  'customerMessages/delete',
  async (id: string, { rejectWithValue }) => {
    try { await deleteMessageService(id); return id; }
    catch (err: any) { return rejectWithValue(err?.errors?.[0]?.message ?? String(err)); }
  }
);

export const customerMessagesSlice = createSlice({
  name: 'customerMessages',
  initialState,
  reducers: {
    clearMessageMutationError: (state) => {
      state.errorMessage = '';
      state.mutationStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      // list all
      .addCase(getMessagesThunk.pending, (state) => { state.status = 'loading'; state.errorMessage = ''; })
      .addCase(getMessagesThunk.fulfilled, (state, action) => { state.status = 'idle'; state.messages = action.payload; })
      .addCase(getMessagesThunk.rejected, (state, action) => { state.status = 'failed'; state.errorMessage = String(action.payload ?? 'Error al cargar mensajes'); })
      // list by customer
      .addCase(getMessagesByCustomerThunk.pending, (state) => { state.status = 'loading'; state.errorMessage = ''; })
      .addCase(getMessagesByCustomerThunk.fulfilled, (state, action) => { state.status = 'idle'; state.messages = action.payload; })
      .addCase(getMessagesByCustomerThunk.rejected, (state, action) => { state.status = 'failed'; state.errorMessage = String(action.payload ?? 'Error al cargar mensajes'); })
      // create
      .addCase(createMessageThunk.pending, (state) => { state.mutationStatus = 'saving'; state.errorMessage = ''; })
      .addCase(createMessageThunk.fulfilled, (state, action) => { state.mutationStatus = 'idle'; state.messages.unshift(action.payload); })
      .addCase(createMessageThunk.rejected, (state, action) => { state.mutationStatus = 'failed'; state.errorMessage = String(action.payload ?? 'Error al crear mensaje'); })
      // delete
      .addCase(deleteMessageThunk.pending, (state) => { state.mutationStatus = 'deleting'; state.errorMessage = ''; })
      .addCase(deleteMessageThunk.fulfilled, (state, action) => { state.mutationStatus = 'idle'; state.messages = state.messages.filter((m) => m.id !== action.payload); })
      .addCase(deleteMessageThunk.rejected, (state, action) => { state.mutationStatus = 'failed'; state.errorMessage = String(action.payload ?? 'Error al eliminar mensaje'); });
  },
});

export const selectCustomerMessages = (state: RootState) => state.customerMessages;
export const { clearMessageMutationError } = customerMessagesSlice.actions;
export default customerMessagesSlice.reducer;
