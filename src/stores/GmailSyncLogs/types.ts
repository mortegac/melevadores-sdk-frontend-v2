export type GmailSyncLogStatus = "ejecutada correctamente" | "con errores";

export type AccountSyncDetail = {
  totalFetched:     number;
  newSaved:         number;
  alreadyExisted:   number;
  errors:           number;
  customersCreated: number;
  customersReused:  number;
  byType:           Record<string, number>;
  bySource:         Record<string, number>;
};

export type GmailSyncLog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  executedAt: string;
  status: GmailSyncLogStatus;
  errorMessage?: string | null;
  newEmailsStored: number;
  emailsRead: number;
  gmailAccount?: string | null;
  resultDetail?: string | null;  // JSON string: Record<account, AccountSyncDetail>
};
