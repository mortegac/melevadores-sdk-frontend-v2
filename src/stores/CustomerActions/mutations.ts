export const createCustomerAction = /* GraphQL */ `
  mutation CreateV2CustomerAction($input: CreateV2CustomerActionInput!) {
    createV2CustomerAction(input: $input) {
      id
      customerId
      detail
      date
      userId
      status
      docUrl
      createdAt
      updatedAt
    }
  }
`;

export const updateCustomerAction = /* GraphQL */ `
  mutation UpdateV2CustomerAction($input: UpdateV2CustomerActionInput!) {
    updateV2CustomerAction(input: $input) {
      id
      customerId
      detail
      date
      userId
      status
      docUrl
      createdAt
      updatedAt
    }
  }
`;

export const deleteCustomerAction = /* GraphQL */ `
  mutation DeleteV2CustomerAction($input: DeleteV2CustomerActionInput!) {
    deleteV2CustomerAction(input: $input) {
      id
    }
  }
`;
