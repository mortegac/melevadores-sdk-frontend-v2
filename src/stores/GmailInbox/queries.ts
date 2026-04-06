export const listV2GmailInboxes = /* GraphQL */ `
  query ListV2GmailInboxes(
    $filter: ModelV2GmailInboxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listV2GmailInboxes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        threadId
        subject
        fromEmail
        fromName
        toEmails
        dateSent
        dateStr
        snippet
        bodyText
        bodyHtml
        labels
        isRead
        hasAttachments
        gmailAccount
        type
        source
        customerId
        customer {
          id
          name
          email
          phone
          phone2
          status
        }
        userId
      }
      nextToken
    }
  }
`;

export const listV2GmailInboxByCustomerIdAndDateSent = /* GraphQL */ `
  query ListV2GmailInboxByCustomerIdAndDateSent(
    $customerId: ID!
    $dateSent: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $limit: Int
    $nextToken: String
  ) {
    listV2GmailInboxByCustomerIdAndDateSent(
      customerId: $customerId
      dateSent: $dateSent
      sortDirection: $sortDirection
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        threadId
        subject
        fromEmail
        fromName
        toEmails
        dateSent
        dateStr
        snippet
        bodyText
        bodyHtml
        labels
        isRead
        hasAttachments
        gmailAccount
        type
        source
        customerId
      }
      nextToken
    }
  }
`;

export const listV2GmailInboxByUserIdAndDateSent = /* GraphQL */ `
  query ListV2GmailInboxByUserIdAndDateSent(
    $userId: ID!
    $dateSent: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: Modelv2GmailInboxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listV2GmailInboxByUserIdAndDateSent(
      userId: $userId
      dateSent: $dateSent
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        threadId
        subject
        fromEmail
        fromName
        toEmails
        dateSent
        dateStr
        snippet
        bodyText
        bodyHtml
        labels
        isRead
        hasAttachments
        gmailAccount
        type
        userId
      }
      nextToken
      __typename
    }
  }
`;
