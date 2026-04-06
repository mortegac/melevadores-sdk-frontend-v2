export const listCustomers = /* GraphQL */ `
  query ListV2Customers($limit: Int, $nextToken: String) {
    listV2Customers(limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;

export const searchCustomers = /* GraphQL */ `
  query SearchV2Customers($filter: ModelV2CustomerFilterInput, $limit: Int) {
    listV2Customers(filter: $filter, limit: $limit) {
      items {
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
      nextToken
    }
  }
`;

export const getCustomer = /* GraphQL */ `
  query GetV2Customer($id: ID!) {
    getV2Customer(id: $id) {
      id
      name
      phone
      phone2
      email
      status
      createdAt
      updatedAt
    }
  }
`;
