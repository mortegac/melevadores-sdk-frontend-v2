


export const getUsers = /* GraphQL */ `
  query GetV2Users($id: ID!) {
    getV2Users(id: $id) {
      id
      name
      email
      validated
      contactPhone
      ig
      firstContact
      streetAddress
      city
      state
      zipCode
      country
      isEmployed
      isAcademyStudent
      roleId
      relationships {
        items {
          id
          relationType
          userId
          studentId
        }
      }
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListV2Users(
    $filter: ModelV2UsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listV2Users(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        validated
        contactPhone
        ig
        firstContact
        streetAddress
        city
        state
        zipCode
        country
        isEmployed
        isAcademyStudent
        __typename
        relationships {
          items {
            id
            relationType
            studentId
          }
        }
      }
      nextToken
      __typename
    }
  }
`;