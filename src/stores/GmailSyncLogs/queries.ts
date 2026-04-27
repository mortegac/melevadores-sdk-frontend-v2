export const listAllV2GmailSyncLogs = /* GraphQL */ `
  query ListV2GmailSyncLogs(
    $filter: ModelV2GmailSyncLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listV2GmailSyncLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        executedAt
        status
        errorMessage
        newEmailsStored
        emailsRead
        gmailAccount
        resultDetail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
