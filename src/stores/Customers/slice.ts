import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  fetchCustomers,
  createCustomerService,
  updateCustomerService,
  deleteCustomerService,
  searchCustomersService,
} from './services';
import type { Customer, CustomerFormData } from './types';

export interface CustomersState {
  status: 'idle' | 'loading' | 'failed';
  mutationStatus: 'idle' | 'saving' | 'deleting' | 'failed';
  customers: Customer[];
  searchResults: Customer[];
  searchStatus: 'idle' | 'loading' | 'failed';
  errorMessage: string;
}

const initialState: CustomersState = {
  status: 'idle',
  mutationStatus: 'idle',
  customers: [],
  searchResults: [],
  searchStatus: 'idle',
  errorMessage: '',
};

export const getCustomersThunk = createAsyncThunk(
  'customers/list',
  async (_, { rejectWithValue }) => {
    try { return await fetchCustomers(); }
    catch (err) { return rejectWithValue(String(err)); }
  }
);

export const createCustomerThunk = createAsyncThunk(
  'customers/create',
  async (data: CustomerFormData, { rejectWithValue }) => {
    try { return await createCustomerService(data); }
    catch (err: any) { return rejectWithValue(err?.errors?.[0]?.message ?? String(err)); }
  }
);

export const updateCustomerThunk = createAsyncThunk(
  'customers/update',
  async (data: CustomerFormData & { id: string }, { rejectWithValue }) => {
    try { return await updateCustomerService(data); }
    catch (err: any) { return rejectWithValue(err?.errors?.[0]?.message ?? String(err)); }
  }
);

export const deleteCustomerThunk = createAsyncThunk(
  'customers/delete',
  async (id: string, { rejectWithValue }) => {
    try { await deleteCustomerService(id); return id; }
    catch (err: any) { return rejectWithValue(err?.errors?.[0]?.message ?? String(err)); }
  }
);

export const searchCustomersThunk = createAsyncThunk(
  'customers/search',
  async (query: string, { rejectWithValue }) => {
    try { return await searchCustomersService(query); }
    catch (err: any) { return rejectWithValue(err?.errors?.[0]?.message ?? String(err)); }
  }
);

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    clearCustomerMutationError: (state) => {
      state.errorMessage = '';
      state.mutationStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      // list
      .addCase(getCustomersThunk.pending, (state) => { state.status = 'loading'; state.errorMessage = ''; })
      .addCase(getCustomersThunk.fulfilled, (state, action) => { state.status = 'idle'; state.customers = action.payload; })
      .addCase(getCustomersThunk.rejected, (state, action) => { state.status = 'failed'; state.errorMessage = String(action.payload ?? 'Error al cargar clientes'); })
      // create
      .addCase(createCustomerThunk.pending, (state) => { state.mutationStatus = 'saving'; state.errorMessage = ''; })
      .addCase(createCustomerThunk.fulfilled, (state, action) => { state.mutationStatus = 'idle'; state.customers.push(action.payload); })
      .addCase(createCustomerThunk.rejected, (state, action) => { state.mutationStatus = 'failed'; state.errorMessage = String(action.payload ?? 'Error al crear cliente'); })
      // update
      .addCase(updateCustomerThunk.pending, (state) => { state.mutationStatus = 'saving'; state.errorMessage = ''; })
      .addCase(updateCustomerThunk.fulfilled, (state, action) => {
        state.mutationStatus = 'idle';
        const idx = state.customers.findIndex((c) => c.id === action.payload.id);
        if (idx !== -1) state.customers[idx] = { ...state.customers[idx], ...action.payload };
      })
      .addCase(updateCustomerThunk.rejected, (state, action) => { state.mutationStatus = 'failed'; state.errorMessage = String(action.payload ?? 'Error al actualizar cliente'); })
      // delete
      .addCase(deleteCustomerThunk.pending, (state) => { state.mutationStatus = 'deleting'; state.errorMessage = ''; })
      .addCase(deleteCustomerThunk.fulfilled, (state, action) => { state.mutationStatus = 'idle'; state.customers = state.customers.filter((c) => c.id !== action.payload); })
      .addCase(deleteCustomerThunk.rejected, (state, action) => { state.mutationStatus = 'failed'; state.errorMessage = String(action.payload ?? 'Error al eliminar cliente'); })
      // search
      .addCase(searchCustomersThunk.pending, (state) => { state.searchStatus = 'loading'; })
      .addCase(searchCustomersThunk.fulfilled, (state, action) => { state.searchStatus = 'idle'; state.searchResults = action.payload; })
      .addCase(searchCustomersThunk.rejected, (state) => { state.searchStatus = 'failed'; state.searchResults = []; });
  },
});

export const selectCustomers = (state: RootState) => state.customers;
export const { clearCustomerMutationError } = customersSlice.actions;
export default customersSlice.reducer;
