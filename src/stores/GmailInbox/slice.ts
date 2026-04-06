import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchGmailInboxByCustomerId, fetchGmailInboxByUser, fetchGmailInboxPage, fetchGmailInboxByEmail, triggerGmailSync, updateGmailInboxTypeService } from './services';
import { GmailInbox, emptyGmailInbox, FilterOptions, AdminFilterOptions, AdminPageResult } from './types';

export interface GmailInboxState {
  status: 'idle' | 'loading' | 'failed';
  syncStatus: 'idle' | 'syncing' | 'failed';
  emails: GmailInbox[];
  errorMessage: string;
  adminStatus: 'idle' | 'loading' | 'failed';
  adminEmails: GmailInbox[];
  adminNextToken: string | null;
  adminErrorMessage: string;
  customerEmails: GmailInbox[];
  customerEmailsStatus: 'idle' | 'loading' | 'failed';
  customerEmailsError: string;
  customerIdEmails: GmailInbox[];
  customerIdEmailsStatus: 'idle' | 'loading' | 'failed';
  customerIdEmailsError: string;
}

const initialState: GmailInboxState = {
  status: 'idle',
  syncStatus: 'idle',
  emails: [],
  errorMessage: '',
  adminStatus: 'idle',
  adminEmails: [],
  adminNextToken: null,
  adminErrorMessage: '',
  customerEmails: [],
  customerEmailsStatus: 'idle',
  customerEmailsError: '',
  customerIdEmails: [],
  customerIdEmailsStatus: 'idle',
  customerIdEmailsError: '',
};

export const getGmailInbox = createAsyncThunk(
  'gmailInbox/listByUser',
  async (objFilter: FilterOptions, { rejectWithValue }) => {
    try {
      return await fetchGmailInboxByUser(objFilter);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const triggerSync = createAsyncThunk(
  'gmailInbox/triggerSync',
  async (_, { rejectWithValue }) => {
    try {
      await triggerGmailSync();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGmailInboxPage = createAsyncThunk(
  'gmailInbox/getPage',
  async (params: AdminFilterOptions, { rejectWithValue }) => {
    try {
      return await fetchGmailInboxPage(params);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateGmailTypeThunk = createAsyncThunk(
  'gmailInbox/updateType',
  async ({ id, type }: { id: string; type: string }, { rejectWithValue }) => {
    try {
      await updateGmailInboxTypeService(id, type);
      return { id, type };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGmailByCustomerEmailThunk = createAsyncThunk(
  'gmailInbox/listByCustomerEmail',
  async (email: string, { rejectWithValue }) => {
    try {
      return await fetchGmailInboxByEmail(email);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGmailByCustomerIdThunk = createAsyncThunk(
  'gmailInbox/listByCustomerId',
  async (customerId: string, { rejectWithValue }) => {
    try {
      return await fetchGmailInboxByCustomerId(customerId);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Thunk: llama v2GmailSync (Lambda) y luego recarga el inbox del apoderado
export const syncAndRefreshGmailInbox = createAsyncThunk(
  'gmailInbox/syncAndRefresh',
  async (objFilter: FilterOptions, { dispatch, rejectWithValue }) => {
    try {
      await triggerGmailSync();
      const items = await fetchGmailInboxByUser(objFilter);
      return items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const gmailInboxSlice = createSlice({
  name: 'gmailInbox',
  initialState,
  reducers: {
    clearGmailInbox: (state) => {
      state.emails = [];
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGmailInbox.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = '';
      })
      .addCase(getGmailInbox.fulfilled, (state, action) => {
        state.status = 'idle';
        state.emails = action.payload ?? [];
      })
      .addCase(getGmailInbox.rejected, (state, action) => {
        const payload: any = action.payload;
        state.status = 'failed';
        state.errorMessage = payload?.errorMessage ?? 'Error al cargar emails';
      })
      // triggerSync
      .addCase(triggerSync.pending, (state) => { state.syncStatus = 'syncing'; })
      .addCase(triggerSync.fulfilled, (state) => { state.syncStatus = 'idle'; })
      .addCase(triggerSync.rejected, (state) => { state.syncStatus = 'failed'; })
      // getGmailInboxPage
      .addCase(getGmailInboxPage.pending, (state) => {
        state.adminStatus = 'loading';
        state.adminErrorMessage = '';
      })
      .addCase(getGmailInboxPage.fulfilled, (state, action) => {
        state.adminStatus = 'idle';
        state.adminEmails = (action.payload as AdminPageResult).items;
        state.adminNextToken = (action.payload as AdminPageResult).nextToken;
      })
      .addCase(getGmailInboxPage.rejected, (state, action) => {
        const payload: any = action.payload;
        state.adminStatus = 'failed';
        state.adminErrorMessage = payload?.errorMessage ?? 'Error al cargar emails';
      })
      // syncAndRefreshGmailInbox
      .addCase(syncAndRefreshGmailInbox.pending, (state) => {
        state.syncStatus = 'syncing';
      })
      .addCase(syncAndRefreshGmailInbox.fulfilled, (state, action) => {
        state.syncStatus = 'idle';
        state.emails = action.payload ?? [];
      })
      .addCase(syncAndRefreshGmailInbox.rejected, (state) => {
        state.syncStatus = 'failed';
      })
      // updateGmailTypeThunk — actualización optimista
      .addCase(updateGmailTypeThunk.fulfilled, (state, action) => {
        const { id, type } = action.payload as { id: string; type: string };
        const idx = state.adminEmails.findIndex((e) => e.id === id);
        if (idx !== -1) state.adminEmails[idx] = { ...state.adminEmails[idx], type: type as any };
      })
      // getGmailByCustomerEmailThunk
      .addCase(getGmailByCustomerEmailThunk.pending, (state) => {
        state.customerEmailsStatus = 'loading';
        state.customerEmailsError = '';
      })
      .addCase(getGmailByCustomerEmailThunk.fulfilled, (state, action) => {
        state.customerEmailsStatus = 'idle';
        state.customerEmails = action.payload ?? [];
      })
      .addCase(getGmailByCustomerEmailThunk.rejected, (state, action) => {
        const payload: any = action.payload;
        state.customerEmailsStatus = 'failed';
        state.customerEmailsError = payload?.errorMessage ?? 'Error al cargar emails del cliente';
      })
      // getGmailByCustomerIdThunk
      .addCase(getGmailByCustomerIdThunk.pending, (state) => {
        state.customerIdEmailsStatus = 'loading';
        state.customerIdEmailsError = '';
      })
      .addCase(getGmailByCustomerIdThunk.fulfilled, (state, action) => {
        state.customerIdEmailsStatus = 'idle';
        state.customerIdEmails = action.payload ?? [];
      })
      .addCase(getGmailByCustomerIdThunk.rejected, (state, action) => {
        const payload: any = action.payload;
        state.customerIdEmailsStatus = 'failed';
        state.customerIdEmailsError = payload?.errorMessage ?? 'Error al cargar emails del cliente';
      });
  },
});

export const selectGmailInbox = (state: RootState) => state.gmailInbox;
export const { clearGmailInbox } = gmailInboxSlice.actions;
export default gmailInboxSlice.reducer;
