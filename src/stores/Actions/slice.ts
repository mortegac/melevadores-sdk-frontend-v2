import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createActionService } from './services';
import type { CreateActionInput } from './types';

export const createActionThunk = createAsyncThunk(
  'actions/create',
  async (input: CreateActionInput, { rejectWithValue }) => {
    try {
      return await createActionService(input);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const actionsSlice = createSlice({
  name: 'actions',
  initialState: { status: 'idle' as 'idle' | 'loading' | 'failed' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createActionThunk.pending,   (state) => { state.status = 'loading'; })
      .addCase(createActionThunk.fulfilled, (state) => { state.status = 'idle'; })
      .addCase(createActionThunk.rejected,  (state) => { state.status = 'failed'; });
  },
});

export default actionsSlice.reducer;
