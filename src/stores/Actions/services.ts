import { generateClient } from 'aws-amplify/api';
import { createV2Action } from './mutations';
import { listV2ActionsByCustomer, listAllV2Actions } from './queries';
import type { Action, CreateActionInput } from './types';

const client = generateClient();

export const createActionService = async (input: CreateActionInput): Promise<Action> => {
  const result: any = await client.graphql({
    query: createV2Action,
    variables: { input },
  });
  return result.data.createV2Action;
};

export interface FetchAllActionsFilters {
  userId?: string;
  customerId?: string;
  dateFrom?: string;
  dateTo?: string;
}

export const fetchAllActions = async (filters: FetchAllActionsFilters = {}): Promise<Action[]> => {
  const andConditions: any[] = [];

  if (filters.userId) {
    andConditions.push({ userId: { eq: filters.userId } });
  }
  if (filters.customerId) {
    andConditions.push({ customerId: { eq: filters.customerId } });
  }
  if (filters.dateFrom || filters.dateTo) {
    andConditions.push({
      createdAt: {
        between: [
          filters.dateFrom ? `${filters.dateFrom}T00:00:00.000Z` : "2020-01-01T00:00:00.000Z",
          filters.dateTo   ? `${filters.dateTo}T23:59:59.999Z`   : new Date().toISOString(),
        ],
      },
    });
  }

  const filter =
    andConditions.length === 0 ? undefined :
    andConditions.length === 1 ? andConditions[0] :
    { and: andConditions };

  const allItems: Action[] = [];
  let nextToken: string | null = null;
  do {
    const result: any = await client.graphql({
      query: listAllV2Actions,
      variables: { filter, limit: 500, nextToken },
    });
    const page = result?.data?.listV2Actions;
    allItems.push(...(page?.items ?? []));
    nextToken = page?.nextToken ?? null;
  } while (nextToken);

  return allItems.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
};

export const fetchActionsByCustomer = async (customerId: string): Promise<Action[]> => {
  const result: any = await client.graphql({
    query: listV2ActionsByCustomer,
    variables: { customerId, limit: 100 },
  });
  const items: Action[] = result?.data?.listV2ActionByCustomerId?.items ?? [];
  return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
};
