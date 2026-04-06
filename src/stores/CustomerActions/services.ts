import { generateClient } from "aws-amplify/api";
import { createCustomerAction } from "./mutations";
import { listV2CustomerActionsByCustomer } from "./queries";
import { CreateCustomerActionInput, CustomerAction } from "./types";

const client = generateClient();

export const createCustomerActionService = async (
  input: CreateCustomerActionInput
): Promise<CustomerAction> => {
  const result: any = await client.graphql({
    query: createCustomerAction,
    variables: { input },
  });
  return result.data.createV2CustomerAction;
};

export const fetchCustomerActionsByCustomer = async (
  customerId: string
): Promise<CustomerAction[]> => {
  const result: any = await client.graphql({
    query: listV2CustomerActionsByCustomer,
    variables: { customerId, sortDirection: "DESC", limit: 100 },
  });
  return result?.data?.listV2CustomerActionsByCustomerDate?.items ?? [];
};
