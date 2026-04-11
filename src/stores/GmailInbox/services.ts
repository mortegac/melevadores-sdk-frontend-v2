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

const ADMIN_PAGE_SIZE = 100000;

export const fetchGmailInboxPage = async (params: AdminFilterOptions): Promise<AdminPageResult> => {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const dateFrom = params.dateFrom ?? thirtyDaysAgo.toISOString();
  const dateTo   = params.dateTo   ?? now.toISOString();

  const filter: any = {
    dateStr: { between: [dateFrom, dateTo] },
  };

  // Apply type filter when not "ALL"
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

  // DynamoDB applies filters AFTER scanning `limit` records, so a single request
  // may return far fewer items than requested. We loop until we accumulate at
  // least ADMIN_PAGE_SIZE matching items or exhaust the table.
  const allItems: any[] = [];
  let cursor: string | null = params.nextToken ?? null;

  do {
    const result: any = await client.graphql({
      query: listV2GmailInboxes,
      variables: { filter, limit: ADMIN_PAGE_SIZE, nextToken: cursor },
    });
    const page = result?.data?.listV2GmailInboxes;
    allItems.push(...(page?.items ?? []));
    cursor = page?.nextToken ?? null;
  } while (cursor !== null && allItems.length < ADMIN_PAGE_SIZE);

  allItems.sort((a: any, b: any) => b.dateSent.localeCompare(a.dateSent));
  return { items: allItems, nextToken: cursor };
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
