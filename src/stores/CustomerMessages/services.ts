import { generateClient } from 'aws-amplify/api';
import { listMessages, listMessagesByCustomer } from './queries';
import { createMessage, deleteMessage } from './mutations';
import type { CustomerMessage } from './types';

const client = generateClient();

export const fetchMessages = async (): Promise<CustomerMessage[]> => {
  const allItems: CustomerMessage[] = [];
  let nextToken: string | null = null;
  do {
    const result: any = await client.graphql({
      query: listMessages,
      variables: { limit: 1000, nextToken },
    });
    const page = result?.data?.listV2Messages;
    allItems.push(...(page?.items ?? []));
    nextToken = page?.nextToken ?? null;
  } while (nextToken);
  return allItems;
};

export const fetchMessagesByCustomer = async (
  customerId: string
): Promise<CustomerMessage[]> => {
  const allItems: CustomerMessage[] = [];
  let nextToken: string | null = null;
  do {
    const result: any = await client.graphql({
      query: listMessagesByCustomer,
      variables: { customerId, limit: 1000, nextToken },
    });
    const page = result?.data?.listV2MessageByCustomerId;
    allItems.push(...(page?.items ?? []));
    nextToken = page?.nextToken ?? null;
  } while (nextToken);
  return allItems;
};

export const createMessageService = async (input: {
  customerId: string;
  message: string;
  type: string;
  source: string;
}): Promise<CustomerMessage> => {
  const result: any = await client.graphql({
    query: createMessage,
    variables: { input },
  });
  return result.data.createV2Message;
};

export const deleteMessageService = async (id: string): Promise<void> => {
  await client.graphql({
    query: deleteMessage,
    variables: { input: { id } },
  });
};
