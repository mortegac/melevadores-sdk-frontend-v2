export const createCustomer = /* GraphQL */ `
  mutation CreateV2Customer($input: CreateV2CustomerInput!) {
    createV2Customer(input: $input) {
      id
      name
      phone
      phone2
      email
      status
      requestDate
      createdAt
      updatedAt
    }
  }
`;

export const updateCustomer = /* GraphQL */ `
  mutation UpdateV2Customer($input: UpdateV2CustomerInput!) {
    updateV2Customer(input: $input) {
      id
      name
      phone
      phone2
      email
      status
      requestDate
      createdAt
      updatedAt
    }
  }
`;

export const deleteCustomer = /* GraphQL */ `
  mutation DeleteV2Customer($input: DeleteV2CustomerInput!) {
    deleteV2Customer(input: $input) {
      id
    }
  }
`;
