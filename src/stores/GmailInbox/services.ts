import { generateClient } from 'aws-amplify/api';
import { listV2GmailInboxByCustomerIdAndDateSent, listV2GmailInboxByUserIdAndDateSent, listV2GmailInboxes } from './queries';
import { v2GmailReply, v2GmailSync, updateV2GmailInboxType } from './mutations';
import { FilterOptions, AdminFilterOptions, AdminPageResult, GmailInbox } from './types';

const client = generateClient();

export interface GmailReplyParams {
  fromAccount: string;
  toEmail: string;
  subject: string;
  body: string;
  threadId?: string;
  inReplyToMessageId?: string;
}

export const triggerGmailSync = async (): Promise<void> => {
  await client.graphql({ query: v2GmailSync });
};

export const sendGmailReply = async (params: GmailReplyParams): Promise<{ success: boolean; messageId?: string; error?: string }> => {
  const result: any = await client.graphql({
    query: v2GmailReply,
    variables: params,
  });
  return result?.data?.v2GmailReply ?? { success: false, error: "No response" };
};

// DynamoDB reads this many raw records per request before applying the filter.
// Higher = fewer API calls needed to find matching items; lower = faster first byte.
// With ~2000 emails total, one request at 2000 is enough to cover any date range.
const DYNAMO_SCAN_LIMIT = 2000;

export const fetchGmailInboxPage = async (params: AdminFilterOptions): Promise<AdminPageResult> => {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  // dateStr stores "YYYY-MM-DD" — slice ISO timestamps to match the stored format
  const dateFrom = (params.dateFrom ?? thirtyDaysAgo.toISOString()).slice(0, 10);
  const dateTo   = (params.dateTo   ?? now.toISOString()).slice(0, 10);

  const filter: any = {
    dateStr: { between: [dateFrom, dateTo] },
  };

  if (params.type && params.type !== "ALL") {
    filter.type = { eq: params.type };
  }

  if (params.searchText?.trim()) {
    const text = params.searchText.trim();
    filter.or = [
      { fromEmail: { contains: text } },
      { fromName:  { contains: text } },
      { toEmails:  { contains: text } },
    ];
  }

  // Single request — DynamoDB scans up to DYNAMO_SCAN_LIMIT records and returns
  // all matching items in one round-trip. nextToken is returned only when the
  // table has more records beyond the scan limit (i.e. the mailbox grows > 2000).
  const result: any = await client.graphql({
    query:     listV2GmailInboxes,
    variables: { filter, limit: DYNAMO_SCAN_LIMIT, nextToken: params.nextToken ?? null },
  });

  const page  = result?.data?.listV2GmailInboxes;
  const items = (page?.items ?? []).sort((a: any, b: any) => b.dateSent.localeCompare(a.dateSent));

  return { items, nextToken: page?.nextToken ?? null };
};

export const fetchGmailInboxByCustomerId = async (customerId: string): Promise<GmailInbox[]> => {
  const result: any = await client.graphql({
    query: listV2GmailInboxByCustomerIdAndDateSent,
    variables: { customerId, sortDirection: 'DESC', limit: 200, nextToken: null },
  });
  const items: GmailInbox[] = result?.data?.listV2GmailInboxByCustomerIdAndDateSent?.items ?? [];
  return items.sort((a, b) => b.dateSent.localeCompare(a.dateSent));
};

export const fetchGmailInboxByEmail = async (email: string): Promise<GmailInbox[]> => {
  // Contact-form emails store the customer's email inside the body/snippet,
  // not in fromEmail (which is always the Gmail account itself).
  // We must search snippet and bodyText to find emails related to this customer.
  const filter: any = {
    or: [
      { snippet:   { contains: email } },
      { bodyText:  { contains: email } },
    ],
  };

  const result: any = await client.graphql({
    query: listV2GmailInboxes,
    variables: { filter, limit: 200, nextToken: null },
  });

  const items: GmailInbox[] = result?.data?.listV2GmailInboxes?.items ?? [];
  return items.sort((a, b) => b.dateSent.localeCompare(a.dateSent));
};

export const fetchGmailInboxByUser = async (objFilter: FilterOptions): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const now = new Date();
      const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

      const dateFrom = objFilter.dateFrom ?? oneYearAgo.toISOString();
      const dateTo   = objFilter.dateTo   ?? now.toISOString();

      const getData: any = await client.graphql({
        query: listV2GmailInboxByUserIdAndDateSent,
        variables: {
          userId: objFilter.userId,
          dateSent: { between: [dateFrom, dateTo] },
          sortDirection: 'DESC',
          limit: 200,
        },
      });

      const items = getData?.data?.listV2GmailInboxByUserIdAndDateSent?.items ?? [];
      resolve(items);
    } catch (err) {
      reject({ errorMessage: JSON.stringify(err) });
    }
  });
};

export const updateGmailInboxTypeService = async (id: string, type: string): Promise<void> => {
  await client.graphql({
    query: updateV2GmailInboxType,
    variables: { input: { id, type } },
  });
};
