export const listAllV2Actions = /* GraphQL */ `
  query ListAllV2Actions($filter: ModelV2ActionFilterInput, $limit: Int, $nextToken: String) {
    listV2Actions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        message
        urlDocument
        userId
        customerId
        customer {
          name
          email
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listV2ActionsByCustomer = /* GraphQL */ `
  query ListV2ActionByCustomerId(
    $customerId: ID!
    $limit: Int
    $nextToken: String
  ) {
    listV2ActionByCustomerId(
      customerId: $customerId
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        message
        urlDocument
        userId
        customerId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
