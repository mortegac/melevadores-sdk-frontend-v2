import { generateClient } from 'aws-amplify/api';
import { listCustomers, getCustomer, searchCustomers } from './queries';
import { createCustomer, updateCustomer, deleteCustomer } from './mutations';
import type { Customer, CustomerFormData } from './types';

const client = generateClient();

export const fetchCustomers = async (): Promise<Customer[]> => {
  const allItems: Customer[] = [];
  let nextToken: string | null = null;
  do {
    const result: any = await client.graphql({
      query: listCustomers,
      variables: { limit: 1000, nextToken },
    });
    const page = result?.data?.listV2Customers;
    allItems.push(...(page?.items ?? []));
    nextToken = page?.nextToken ?? null;
  } while (nextToken);
  return allItems;
};

export const fetchCustomer = async (id: string): Promise<Customer | null> => {
  const result: any = await client.graphql({
    query: getCustomer,
    variables: { id },
  });
  return result?.data?.getV2Customer ?? null;
};

export const createCustomerService = async (
  input: CustomerFormData
): Promise<Customer> => {
  const result: any = await client.graphql({
    query: createCustomer,
    variables: {
      input: {
        name: input.name,
        phone: input.phone,
        phone2: input.phone2 || null,
        email: input.email.toLowerCase().trim(),
        status: input.status,
      },
    },
  });
  return result.data.createV2Customer;
};

export const updateCustomerService = async (
  input: CustomerFormData & { id: string }
): Promise<Customer> => {
  const result: any = await client.graphql({
    query: updateCustomer,
    variables: {
      input: {
        id: input.id,
        name: input.name,
        phone: input.phone,
        phone2: input.phone2 || null,
        email: input.email.toLowerCase().trim(),
        status: input.status,
      },
    },
  });
  return result.data.updateV2Customer;
};

export const deleteCustomerService = async (id: string): Promise<void> => {
  await client.graphql({
    query: deleteCustomer,
    variables: { input: { id } },
  });
};

export const searchCustomersService = async (query: string): Promise<Customer[]> => {
  const result: any = await client.graphql({
    query: searchCustomers,
    variables: {
      filter: {
        or: [
          { name: { contains: query } },
          { email: { contains: query } },
        ],
      },
      limit: 20,
    },
  });
  return result?.data?.listV2Customers?.items ?? [];
};
