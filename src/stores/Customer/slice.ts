import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchCustomer } from '../Customers/services';
import type { Customer } from '../Customers/types';

export interface CustomerState {
  status: 'idle' | 'loading' | 'failed';
  customer: Customer | null;
  errorMessage: string;
}

const initialState: CustomerState = {
  status: 'idle',
  customer: null,
  errorMessage: '',
};

export const getCustomer = createAsyncThunk(
  'customer/get',
  async ({ customerId }: { customerId: string }, { rejectWithValue }) => {
    try {
      return await fetchCustomer(customerId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return rejectWithValue(msg);
    }
  }
);

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    clearCustomer: (state) => {
      state.customer = null;
      state.status = 'idle';
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomer.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = '';
      })
      .addCase(getCustomer.fulfilled, (state, action) => {
        state.status = action.payload ? 'idle' : 'failed';
        state.customer = action.payload;
        if (!action.payload) {
          state.errorMessage = 'Cliente no encontrado';
        }
      })
      .addCase(getCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.errorMessage = String(action.payload ?? 'Error al cargar el cliente');
      });
  },
});

export const selectCustomer = (state: RootState) => state.customer;
export const { clearCustomer } = customerSlice.actions;
export default customerSlice.reducer;
