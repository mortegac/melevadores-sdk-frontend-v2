import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createCustomerActionService, fetchCustomerActionsByCustomer } from "./services";
import { CreateCustomerActionInput, CustomerActionState } from "./types";

const initialState: CustomerActionState = {
  status: "idle",
  actions: [],
  errorMessage: "",
};

export const createCustomerActionThunk = createAsyncThunk(
  "customerActions/create",
  async (input: CreateCustomerActionInput, { rejectWithValue }) => {
    try {
      return await createCustomerActionService(input);
    } catch (err: any) {
      return rejectWithValue(err?.message ?? "Error al crear acción");
    }
  }
);

export const fetchCustomerActionsThunk = createAsyncThunk(
  "customerActions/fetchByCustomer",
  async (customerId: string, { rejectWithValue }) => {
    try {
      return await fetchCustomerActionsByCustomer(customerId);
    } catch (err: any) {
      return rejectWithValue(err?.message ?? "Error al cargar acciones");
    }
  }
);

const customerActionsSlice = createSlice({
  name: "customerActions",
  initialState,
  reducers: {
    clearCustomerActions(state) {
      state.actions = [];
      state.status = "idle";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerActionsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomerActionsThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.actions = action.payload;
      })
      .addCase(fetchCustomerActionsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.payload as string;
      })
      .addCase(createCustomerActionThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCustomerActionThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.actions = [action.payload, ...state.actions];
      })
      .addCase(createCustomerActionThunk.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.payload as string;
      });
  },
});

export const { clearCustomerActions } = customerActionsSlice.actions;
export const selectCustomerActions = (state: RootState) => state.customerActions;
export default customerActionsSlice.reducer;
