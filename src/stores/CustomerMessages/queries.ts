export const listMessages = /* GraphQL */ `
  query ListV2Messages($limit: Int, $nextToken: String) {
    listV2Messages(limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerId
        message
        type
        source
        createdAt
        updatedAt
        customer {
          id
          name
          email
        }
      }
      nextToken
    }
  }
`;

export const listMessagesByCustomer = /* GraphQL */ `
  query ListV2MessageByCustomerId(
    $customerId: ID!
    $limit: Int
    $nextToken: String
  ) {
    listV2MessageByCustomerId(
      customerId: $customerId
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerId
        message
        type
        source
        createdAt
        updatedAt
        customer {
          id
          name
          email
        }
      }
      nextToken
    }
  }
`;
