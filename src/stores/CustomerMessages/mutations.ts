export const createMessage = /* GraphQL */ `
  mutation CreateV2Message($input: CreateV2MessageInput!) {
    createV2Message(input: $input) {
      id
      customerId
      message
      type
      source
      createdAt
      updatedAt
    }
  }
`;

export const updateMessage = /* GraphQL */ `
  mutation UpdateV2Message($input: UpdateV2MessageInput!) {
    updateV2Message(input: $input) {
      id
      customerId
      message
      type
      source
      createdAt
      updatedAt
    }
  }
`;

export const deleteMessage = /* GraphQL */ `
  mutation DeleteV2Message($input: DeleteV2MessageInput!) {
    deleteV2Message(input: $input) {
      id
    }
  }
`;
