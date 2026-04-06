export type GmailInboxType = "WEB-FORM" | "SPAM";

export type GmailInbox = {
  id: string;
  messageId: string;
  threadId: string;
  subject?: string;
  fromEmail?: string;
  fromName?: string;
  toEmails?: string[];
  dateSent: string;
  dateStr: string;
  snippet?: string;
  bodyText?: string;
  bodyHtml?: string;
  labels?: string[];
  isRead?: boolean;
  hasAttachments?: boolean;
  attachments?: any;
  gmailAccount: string;
  type?: GmailInboxType;
  source?: string;
  customerId?: string;
  customer?: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    phone2?: string;
    status: string;
  };
  userId?: string;
};

export const emptyGmailInbox: GmailInbox = {
  id: "",
  messageId: "",
  threadId: "",
  dateSent: "",
  dateStr: "",
  gmailAccount: "",
};

export type FilterOptions = {
  userId: string;
  dateFrom?: string;
  dateTo?: string;
};

export type AdminFilterOptions = {
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  type?: GmailInboxType | "ALL";
  nextToken?: string | null;
};

export type AdminPageResult = {
  items: GmailInbox[];
  nextToken: string | null;
};
