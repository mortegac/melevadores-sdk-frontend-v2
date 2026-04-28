import { generateClient } from 'aws-amplify/api';
import { listAllV2GmailSyncLogs } from './queries';
import type { GmailSyncLog } from './types';

const client = generateClient();

export const fetchAllGmailSyncLogs = async (): Promise<GmailSyncLog[]> => {
  const allItems: GmailSyncLog[] = [];
  let nextToken: string | null = null;

  do {
    const result: any = await client.graphql({
      query: listAllV2GmailSyncLogs,
      variables: { limit: 500, nextToken },
    });
    const page = result?.data?.listV2GmailSyncLogs;
    allItems.push(...(page?.items ?? []));
    nextToken = page?.nextToken ?? null;
  } while (nextToken);

  return allItems.sort((a, b) => b.executedAt.localeCompare(a.executedAt));
};
