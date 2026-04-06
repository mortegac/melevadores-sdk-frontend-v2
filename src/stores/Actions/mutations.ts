export const createV2Action = /* GraphQL */ `
  mutation CreateV2Action($input: CreateV2ActionInput!) {
    createV2Action(input: $input) {
      id
      status
      message
      urlDocument
      userId
      customerId
      createdAt
      updatedAt
    }
  }
`;

export const updateV2Action = /* GraphQL */ `
  mutation UpdateV2Action($input: UpdateV2ActionInput!) {
    updateV2Action(input: $input) {
      id
      status
      message
      urlDocument
      customerId
      createdAt
      updatedAt
    }
  }
`;

export const deleteV2Action = /* GraphQL */ `
  mutation DeleteV2Action($input: DeleteV2ActionInput!) {
    deleteV2Action(input: $input) {
      id
    }
  }
`;
