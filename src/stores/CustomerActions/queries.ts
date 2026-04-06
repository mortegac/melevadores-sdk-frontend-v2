export const listV2CustomerActionsByCustomer = /* GraphQL */ `
  query ListV2CustomerActionsByCustomerDate(
    $customerId: ID!
    $sortDirection: ModelSortDirection
    $limit: Int
    $nextToken: String
  ) {
    listV2CustomerActionsByCustomerDate(
      customerId: $customerId
      sortDirection: $sortDirection
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
