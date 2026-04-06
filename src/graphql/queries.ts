/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getV2Action = /* GraphQL */ `query GetV2Action($id: ID!) {
  getV2Action(id: $id) {
    createdAt
    customer {
      createdAt
      email
      id
      name
      phone
      phone2
      requestDate
      status
      updatedAt
      __typename
    }
    customerId
    id
    message
    status
    updatedAt
    urlDocument
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ActionQueryVariables,
  APITypes.GetV2ActionQuery
>;
export const getV2CommentTickets = /* GraphQL */ `query GetV2CommentTickets($id: ID!) {
  getV2CommentTickets(id: $id) {
    createdAt
    description
    id
    statusModificationIdUser
    statusModificationUser
    ticketComments {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2CommentTicketsQueryVariables,
  APITypes.GetV2CommentTicketsQuery
>;
export const getV2Correlatives = /* GraphQL */ `query GetV2Correlatives($id: ID!) {
  getV2Correlatives(id: $id) {
    correlative
    createdAt
    id
    type
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2CorrelativesQueryVariables,
  APITypes.GetV2CorrelativesQuery
>;
export const getV2Customer = /* GraphQL */ `query GetV2Customer($id: ID!) {
  getV2Customer(id: $id) {
    actions {
      nextToken
      __typename
    }
    createdAt
    email
    id
    inboxItems {
      nextToken
      __typename
    }
    messages {
      nextToken
      __typename
    }
    name
    phone
    phone2
    requestDate
    status
    updatedAt
    v2Actions {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2CustomerQueryVariables,
  APITypes.GetV2CustomerQuery
>;
export const getV2CustomerAction = /* GraphQL */ `query GetV2CustomerAction($id: ID!) {
  getV2CustomerAction(id: $id) {
    createdAt
    customer {
      createdAt
      email
      id
      name
      phone
      phone2
      requestDate
      status
      updatedAt
      __typename
    }
    customerId
    date
    detail
    docUrl
    id
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2CustomerActionQueryVariables,
  APITypes.GetV2CustomerActionQuery
>;
export const getV2EmailSend = /* GraphQL */ `query GetV2EmailSend($id: ID!) {
  getV2EmailSend(id: $id) {
    contentEmail
    contentMessage
    createdAt
    date
    email
    emailState
    enrollmentId
    id
    phone
    phoneState
    privateEnrollmentId
    studentId
    type
    typeSend
    updatedAt
    userSend {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    userSendId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2EmailSendQueryVariables,
  APITypes.GetV2EmailSendQuery
>;
export const getV2GmailInbox = /* GraphQL */ `query GetV2GmailInbox($id: ID!) {
  getV2GmailInbox(id: $id) {
    attachments
    bodyHtml
    bodyText
    createdAt
    customer {
      createdAt
      email
      id
      name
      phone
      phone2
      requestDate
      status
      updatedAt
      __typename
    }
    customerId
    dateSent
    dateStr
    fromEmail
    fromName
    gmailAccount
    hasAttachments
    id
    isRead
    labels
    messageId
    snippet
    source
    subject
    threadId
    toEmails
    type
    updatedAt
    user {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2GmailInboxQueryVariables,
  APITypes.GetV2GmailInboxQuery
>;
export const getV2Managers = /* GraphQL */ `query GetV2Managers($id: ID!) {
  getV2Managers(id: $id) {
    createdAt
    email
    firstName
    id
    isActive
    lastName
    profitCenter {
      code
      createdAt
      description
      id
      isActive
      managerID
      name
      parentProfitCenterID
      updatedAt
      __typename
    }
    profitCenterID
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ManagersQueryVariables,
  APITypes.GetV2ManagersQuery
>;
export const getV2Message = /* GraphQL */ `query GetV2Message($id: ID!) {
  getV2Message(id: $id) {
    createdAt
    customer {
      createdAt
      email
      id
      name
      phone
      phone2
      requestDate
      status
      updatedAt
      __typename
    }
    customerId
    id
    message
    source
    type
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2MessageQueryVariables,
  APITypes.GetV2MessageQuery
>;
export const getV2Metadata = /* GraphQL */ `query GetV2Metadata($id: ID!) {
  getV2Metadata(id: $id) {
    createdAt
    id
    key
    metadata {
      country
      createdAt
      id
      idParent
      label
      typeOfParameterId
      updatedAt
      value
      __typename
    }
    parametersId
    updatedAt
    value
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2MetadataQueryVariables,
  APITypes.GetV2MetadataQuery
>;
export const getV2Parameters = /* GraphQL */ `query GetV2Parameters($id: ID!) {
  getV2Parameters(id: $id) {
    country
    createdAt
    id
    idParent
    label
    metadata {
      nextToken
      __typename
    }
    typeOfParameter {
      createdAt
      description
      id
      updatedAt
      __typename
    }
    typeOfParameterId
    updatedAt
    value
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ParametersQueryVariables,
  APITypes.GetV2ParametersQuery
>;
export const getV2ParametersEnc = /* GraphQL */ `query GetV2ParametersEnc($id: ID!) {
  getV2ParametersEnc(id: $id) {
    createdAt
    description
    id
    typeOfParameter {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ParametersEncQueryVariables,
  APITypes.GetV2ParametersEncQuery
>;
export const getV2PaymentTransactions = /* GraphQL */ `query GetV2PaymentTransactions($id: ID!) {
  getV2PaymentTransactions(id: $id) {
    accounting_date
    amount
    authorization_code
    buy_order
    card_detail
    card_number
    createdAt
    day
    glosa
    hasRefund
    hour
    id
    installments_amount
    installments_number
    month
    payment_type_code
    response_code
    session_id
    shoppingCart {
      createdAt
      id
      sellerId
      sellersCommissionId
      status
      totalPrice
      updatedAt
      userId
      __typename
    }
    shoppingCartId
    status
    token
    transaction_date
    updatedAt
    urlWebpay
    users {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    usersId
    vci
    year
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2PaymentTransactionsQueryVariables,
  APITypes.GetV2PaymentTransactionsQuery
>;
export const getV2Permissions = /* GraphQL */ `query GetV2Permissions($id: ID!) {
  getV2Permissions(id: $id) {
    Padre {
      createdAt
      displayName
      icon
      id
      isLeaf
      isVisible
      name
      order
      padreId
      updatedAt
      __typename
    }
    Submenu {
      nextToken
      __typename
    }
    createdAt
    displayName
    icon
    id
    isLeaf
    isVisible
    name
    order
    padreId
    rolPermissions {
      nextToken
      __typename
    }
    updatedAt
    userPermissions {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2PermissionsQueryVariables,
  APITypes.GetV2PermissionsQuery
>;
export const getV2Product = /* GraphQL */ `query GetV2Product($id: ID!) {
  getV2Product(id: $id) {
    createdAt
    criticalStock
    currentStock
    id
    isActive
    name
    profits
    purchasePrice
    sellingPrice
    sku
    supplier {
      address
      contactPerson
      createdAt
      email
      id
      isActive
      name
      phone
      taxId
      updatedAt
      __typename
    }
    supplierId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ProductQueryVariables,
  APITypes.GetV2ProductQuery
>;
export const getV2ProfitCenter = /* GraphQL */ `query GetV2ProfitCenter($id: ID!) {
  getV2ProfitCenter(id: $id) {
    code
    createdAt
    description
    id
    isActive
    managerID
    managers {
      nextToken
      __typename
    }
    name
    parentProfitCenterID
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ProfitCenterQueryVariables,
  APITypes.GetV2ProfitCenterQuery
>;
export const getV2Relationship = /* GraphQL */ `query GetV2Relationship($id: ID!) {
  getV2Relationship(id: $id) {
    createdAt
    id
    relationType
    studentId
    updatedAt
    user {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2RelationshipQueryVariables,
  APITypes.GetV2RelationshipQuery
>;
export const getV2RolPermissions = /* GraphQL */ `query GetV2RolPermissions($id: ID!) {
  getV2RolPermissions(id: $id) {
    createdAt
    id
    permission {
      createdAt
      displayName
      icon
      id
      isLeaf
      isVisible
      name
      order
      padreId
      updatedAt
      __typename
    }
    permissionId
    role {
      createdAt
      displayName
      icon
      id
      name
      updatedAt
      __typename
    }
    roleId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2RolPermissionsQueryVariables,
  APITypes.GetV2RolPermissionsQuery
>;
export const getV2Roles = /* GraphQL */ `query GetV2Roles($id: ID!) {
  getV2Roles(id: $id) {
    createdAt
    displayName
    icon
    id
    name
    rolPermissions {
      nextToken
      __typename
    }
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2RolesQueryVariables,
  APITypes.GetV2RolesQuery
>;
export const getV2SellersCommission = /* GraphQL */ `query GetV2SellersCommission($id: ID!) {
  getV2SellersCommission(id: $id) {
    amount
    createdAt
    description
    id
    paymentAmount
    salesCommission
    shoppingCart {
      createdAt
      id
      sellerId
      sellersCommissionId
      status
      totalPrice
      updatedAt
      userId
      __typename
    }
    status
    type
    updatedAt
    users {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    usersId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2SellersCommissionQueryVariables,
  APITypes.GetV2SellersCommissionQuery
>;
export const getV2SentEmail = /* GraphQL */ `query GetV2SentEmail($id: ID!) {
  getV2SentEmail(id: $id) {
    body
    createdAt
    emailState
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2SentEmailQueryVariables,
  APITypes.GetV2SentEmailQuery
>;
export const getV2ShoppingCart = /* GraphQL */ `query GetV2ShoppingCart($id: ID!) {
  getV2ShoppingCart(id: $id) {
    cartDetails {
      nextToken
      __typename
    }
    createdAt
    id
    paymentTransactions {
      nextToken
      __typename
    }
    seller {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    sellerId
    sellersCommission {
      amount
      createdAt
      description
      id
      paymentAmount
      salesCommission
      status
      type
      updatedAt
      usersId
      __typename
    }
    sellersCommissionId
    status
    totalPrice
    updatedAt
    user {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ShoppingCartQueryVariables,
  APITypes.GetV2ShoppingCartQuery
>;
export const getV2ShoppingCartDetail = /* GraphQL */ `query GetV2ShoppingCartDetail($id: ID!) {
  getV2ShoppingCartDetail(id: $id) {
    academyEnrollmentId
    amount
    cart {
      createdAt
      id
      sellerId
      sellersCommissionId
      status
      totalPrice
      updatedAt
      userId
      __typename
    }
    cartId
    createdAt
    createdBy {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    createdById
    detail
    enrollmentId
    id
    privateEnrollmentId
    quantity
    type
    updatedAt
    wasDeleted
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2ShoppingCartDetailQueryVariables,
  APITypes.GetV2ShoppingCartDetailQuery
>;
export const getV2Supplier = /* GraphQL */ `query GetV2Supplier($id: ID!) {
  getV2Supplier(id: $id) {
    address
    contactPerson
    createdAt
    email
    id
    isActive
    name
    phone
    products {
      nextToken
      __typename
    }
    taxId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2SupplierQueryVariables,
  APITypes.GetV2SupplierQuery
>;
export const getV2SupportTicket = /* GraphQL */ `query GetV2SupportTicket($id: ID!) {
  getV2SupportTicket(id: $id) {
    createdAt
    date
    day
    description
    email
    id
    lastModificationUser
    month
    name
    phoneNumber
    reason
    statusTicket
    studentId
    ticketComments {
      nextToken
      __typename
    }
    ticketUsers {
      nextToken
      __typename
    }
    updatedAt
    year
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2SupportTicketQueryVariables,
  APITypes.GetV2SupportTicketQuery
>;
export const getV2TicketComment = /* GraphQL */ `query GetV2TicketComment($id: ID!) {
  getV2TicketComment(id: $id) {
    comment {
      createdAt
      description
      id
      statusModificationIdUser
      statusModificationUser
      updatedAt
      __typename
    }
    commentId
    createdAt
    id
    ticket {
      createdAt
      date
      day
      description
      email
      id
      lastModificationUser
      month
      name
      phoneNumber
      reason
      statusTicket
      studentId
      updatedAt
      year
      __typename
    }
    ticketId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2TicketCommentQueryVariables,
  APITypes.GetV2TicketCommentQuery
>;
export const getV2TicketUser = /* GraphQL */ `query GetV2TicketUser($id: ID!) {
  getV2TicketUser(id: $id) {
    createdAt
    id
    ticket {
      createdAt
      date
      day
      description
      email
      id
      lastModificationUser
      month
      name
      phoneNumber
      reason
      statusTicket
      studentId
      updatedAt
      year
      __typename
    }
    ticketId
    updatedAt
    user {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2TicketUserQueryVariables,
  APITypes.GetV2TicketUserQuery
>;
export const getV2Transactions = /* GraphQL */ `query GetV2Transactions($id: ID!) {
  getV2Transactions(id: $id) {
    amount
    categoryID
    categoryType
    createdAt
    date
    description
    id
    month
    profitCenter {
      code
      createdAt
      description
      id
      isActive
      managerID
      name
      parentProfitCenterID
      updatedAt
      __typename
    }
    profitCenterID
    updatedAt
    year
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2TransactionsQueryVariables,
  APITypes.GetV2TransactionsQuery
>;
export const getV2UserPermissions = /* GraphQL */ `query GetV2UserPermissions($id: ID!) {
  getV2UserPermissions(id: $id) {
    createdAt
    id
    permission {
      createdAt
      displayName
      icon
      id
      isLeaf
      isVisible
      name
      order
      padreId
      updatedAt
      __typename
    }
    permissionId
    updatedAt
    user {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2UserPermissionsQueryVariables,
  APITypes.GetV2UserPermissionsQuery
>;
export const getV2Users = /* GraphQL */ `query GetV2Users($id: ID!) {
  getV2Users(id: $id) {
    city
    contactPhone
    country
    createdAt
    email
    emailSend {
      nextToken
      __typename
    }
    firstContact
    gmailMessages {
      nextToken
      __typename
    }
    id
    ig
    isAcademyStudent
    isActive
    isEmployed
    latitude
    longitude
    name
    paymentTransactions {
      nextToken
      __typename
    }
    relationships {
      nextToken
      __typename
    }
    role {
      createdAt
      displayName
      icon
      id
      name
      updatedAt
      __typename
    }
    roleId
    salesCommission
    sellersCommissions {
      nextToken
      __typename
    }
    shoppingCart {
      nextToken
      __typename
    }
    shoppingCartDetails {
      nextToken
      __typename
    }
    shoppingCartSeller {
      nextToken
      __typename
    }
    state
    streetAddress
    ticketUsers {
      nextToken
      __typename
    }
    updatedAt
    userPermissions {
      nextToken
      __typename
    }
    validated
    zipCode
    zoomLevel
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetV2UsersQueryVariables,
  APITypes.GetV2UsersQuery
>;
export const listV2ActionByCustomerId = /* GraphQL */ `query ListV2ActionByCustomerId(
  $customerId: ID!
  $filter: Modelv2ActionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2ActionByCustomerId(
    customerId: $customerId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      customerId
      id
      message
      status
      updatedAt
      urlDocument
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ActionByCustomerIdQueryVariables,
  APITypes.ListV2ActionByCustomerIdQuery
>;
export const listV2Actions = /* GraphQL */ `query ListV2Actions(
  $filter: ModelV2ActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Actions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      customerId
      id
      message
      status
      updatedAt
      urlDocument
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ActionsQueryVariables,
  APITypes.ListV2ActionsQuery
>;
export const listV2CommentTickets = /* GraphQL */ `query ListV2CommentTickets(
  $filter: ModelV2CommentTicketsFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2CommentTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      description
      id
      statusModificationIdUser
      statusModificationUser
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2CommentTicketsQueryVariables,
  APITypes.ListV2CommentTicketsQuery
>;
export const listV2Correlatives = /* GraphQL */ `query ListV2Correlatives(
  $filter: ModelV2CorrelativesFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Correlatives(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      correlative
      createdAt
      id
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2CorrelativesQueryVariables,
  APITypes.ListV2CorrelativesQuery
>;
export const listV2CorrelativesByType = /* GraphQL */ `query ListV2CorrelativesByType(
  $filter: Modelv2CorrelativesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $type: v2ParametersType!
) {
  listV2CorrelativesByType(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    type: $type
  ) {
    items {
      correlative
      createdAt
      id
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2CorrelativesByTypeQueryVariables,
  APITypes.ListV2CorrelativesByTypeQuery
>;
export const listV2CustomerActionByCustomerIdAndDate = /* GraphQL */ `query ListV2CustomerActionByCustomerIdAndDate(
  $customerId: ID!
  $date: ModelStringKeyConditionInput
  $filter: Modelv2CustomerActionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2CustomerActionByCustomerIdAndDate(
    customerId: $customerId
    date: $date
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      customerId
      date
      detail
      docUrl
      id
      status
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2CustomerActionByCustomerIdAndDateQueryVariables,
  APITypes.ListV2CustomerActionByCustomerIdAndDateQuery
>;
export const listV2CustomerActions = /* GraphQL */ `query ListV2CustomerActions(
  $filter: ModelV2CustomerActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2CustomerActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      customerId
      date
      detail
      docUrl
      id
      status
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2CustomerActionsQueryVariables,
  APITypes.ListV2CustomerActionsQuery
>;
export const listV2CustomerByEmail = /* GraphQL */ `query ListV2CustomerByEmail(
  $email: String!
  $filter: Modelv2CustomerFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2CustomerByEmail(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      id
      name
      phone
      phone2
      requestDate
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2CustomerByEmailQueryVariables,
  APITypes.ListV2CustomerByEmailQuery
>;
export const listV2Customers = /* GraphQL */ `query ListV2Customers(
  $filter: ModelV2CustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Customers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      email
      id
      name
      phone
      phone2
      requestDate
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2CustomersQueryVariables,
  APITypes.ListV2CustomersQuery
>;
export const listV2EmailSendByEnrollmentId = /* GraphQL */ `query ListV2EmailSendByEnrollmentId(
  $enrollmentId: ID!
  $filter: Modelv2EmailSendFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2EmailSendByEnrollmentId(
    enrollmentId: $enrollmentId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      contentEmail
      contentMessage
      createdAt
      date
      email
      emailState
      enrollmentId
      id
      phone
      phoneState
      privateEnrollmentId
      studentId
      type
      typeSend
      updatedAt
      userSendId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2EmailSendByEnrollmentIdQueryVariables,
  APITypes.ListV2EmailSendByEnrollmentIdQuery
>;
export const listV2EmailSendByStudentId = /* GraphQL */ `query ListV2EmailSendByStudentId(
  $filter: Modelv2EmailSendFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $studentId: ID!
) {
  listV2EmailSendByStudentId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    studentId: $studentId
  ) {
    items {
      contentEmail
      contentMessage
      createdAt
      date
      email
      emailState
      enrollmentId
      id
      phone
      phoneState
      privateEnrollmentId
      studentId
      type
      typeSend
      updatedAt
      userSendId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2EmailSendByStudentIdQueryVariables,
  APITypes.ListV2EmailSendByStudentIdQuery
>;
export const listV2EmailSendByUserSendId = /* GraphQL */ `query ListV2EmailSendByUserSendId(
  $filter: Modelv2EmailSendFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userSendId: ID!
) {
  listV2EmailSendByUserSendId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userSendId: $userSendId
  ) {
    items {
      contentEmail
      contentMessage
      createdAt
      date
      email
      emailState
      enrollmentId
      id
      phone
      phoneState
      privateEnrollmentId
      studentId
      type
      typeSend
      updatedAt
      userSendId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2EmailSendByUserSendIdQueryVariables,
  APITypes.ListV2EmailSendByUserSendIdQuery
>;
export const listV2EmailSends = /* GraphQL */ `query ListV2EmailSends(
  $filter: ModelV2EmailSendFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2EmailSends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contentEmail
      contentMessage
      createdAt
      date
      email
      emailState
      enrollmentId
      id
      phone
      phoneState
      privateEnrollmentId
      studentId
      type
      typeSend
      updatedAt
      userSendId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2EmailSendsQueryVariables,
  APITypes.ListV2EmailSendsQuery
>;
export const listV2GmailInboxByCustomerIdAndDateSent = /* GraphQL */ `query ListV2GmailInboxByCustomerIdAndDateSent(
  $customerId: ID!
  $dateSent: ModelStringKeyConditionInput
  $filter: Modelv2GmailInboxFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2GmailInboxByCustomerIdAndDateSent(
    customerId: $customerId
    dateSent: $dateSent
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      attachments
      bodyHtml
      bodyText
      createdAt
      customerId
      dateSent
      dateStr
      fromEmail
      fromName
      gmailAccount
      hasAttachments
      id
      isRead
      labels
      messageId
      snippet
      source
      subject
      threadId
      toEmails
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2GmailInboxByCustomerIdAndDateSentQueryVariables,
  APITypes.ListV2GmailInboxByCustomerIdAndDateSentQuery
>;
export const listV2GmailInboxByDateStr = /* GraphQL */ `query ListV2GmailInboxByDateStr(
  $dateStr: String!
  $filter: Modelv2GmailInboxFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2GmailInboxByDateStr(
    dateStr: $dateStr
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      attachments
      bodyHtml
      bodyText
      createdAt
      customerId
      dateSent
      dateStr
      fromEmail
      fromName
      gmailAccount
      hasAttachments
      id
      isRead
      labels
      messageId
      snippet
      source
      subject
      threadId
      toEmails
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2GmailInboxByDateStrQueryVariables,
  APITypes.ListV2GmailInboxByDateStrQuery
>;
export const listV2GmailInboxByFromEmailAndDateSent = /* GraphQL */ `query ListV2GmailInboxByFromEmailAndDateSent(
  $dateSent: ModelStringKeyConditionInput
  $filter: Modelv2GmailInboxFilterInput
  $fromEmail: String!
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2GmailInboxByFromEmailAndDateSent(
    dateSent: $dateSent
    filter: $filter
    fromEmail: $fromEmail
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      attachments
      bodyHtml
      bodyText
      createdAt
      customerId
      dateSent
      dateStr
      fromEmail
      fromName
      gmailAccount
      hasAttachments
      id
      isRead
      labels
      messageId
      snippet
      source
      subject
      threadId
      toEmails
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2GmailInboxByFromEmailAndDateSentQueryVariables,
  APITypes.ListV2GmailInboxByFromEmailAndDateSentQuery
>;
export const listV2GmailInboxByGmailAccountAndDateSent = /* GraphQL */ `query ListV2GmailInboxByGmailAccountAndDateSent(
  $dateSent: ModelStringKeyConditionInput
  $filter: Modelv2GmailInboxFilterInput
  $gmailAccount: String!
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2GmailInboxByGmailAccountAndDateSent(
    dateSent: $dateSent
    filter: $filter
    gmailAccount: $gmailAccount
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      attachments
      bodyHtml
      bodyText
      createdAt
      customerId
      dateSent
      dateStr
      fromEmail
      fromName
      gmailAccount
      hasAttachments
      id
      isRead
      labels
      messageId
      snippet
      source
      subject
      threadId
      toEmails
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2GmailInboxByGmailAccountAndDateSentQueryVariables,
  APITypes.ListV2GmailInboxByGmailAccountAndDateSentQuery
>;
export const listV2GmailInboxByMessageId = /* GraphQL */ `query ListV2GmailInboxByMessageId(
  $filter: Modelv2GmailInboxFilterInput
  $limit: Int
  $messageId: String!
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2GmailInboxByMessageId(
    filter: $filter
    limit: $limit
    messageId: $messageId
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      attachments
      bodyHtml
      bodyText
      createdAt
      customerId
      dateSent
      dateStr
      fromEmail
      fromName
      gmailAccount
      hasAttachments
      id
      isRead
      labels
      messageId
      snippet
      source
      subject
      threadId
      toEmails
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2GmailInboxByMessageIdQueryVariables,
  APITypes.ListV2GmailInboxByMessageIdQuery
>;
export const listV2GmailInboxByUserIdAndDateSent = /* GraphQL */ `query ListV2GmailInboxByUserIdAndDateSent(
  $dateSent: ModelStringKeyConditionInput
  $filter: Modelv2GmailInboxFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID!
) {
  listV2GmailInboxByUserIdAndDateSent(
    dateSent: $dateSent
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      attachments
      bodyHtml
      bodyText
      createdAt
      customerId
      dateSent
      dateStr
      fromEmail
      fromName
      gmailAccount
      hasAttachments
      id
      isRead
      labels
      messageId
      snippet
      source
      subject
      threadId
      toEmails
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2GmailInboxByUserIdAndDateSentQueryVariables,
  APITypes.ListV2GmailInboxByUserIdAndDateSentQuery
>;
export const listV2GmailInboxes = /* GraphQL */ `query ListV2GmailInboxes(
  $filter: ModelV2GmailInboxFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2GmailInboxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      attachments
      bodyHtml
      bodyText
      createdAt
      customerId
      dateSent
      dateStr
      fromEmail
      fromName
      gmailAccount
      hasAttachments
      id
      isRead
      labels
      messageId
      snippet
      source
      subject
      threadId
      toEmails
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2GmailInboxesQueryVariables,
  APITypes.ListV2GmailInboxesQuery
>;
export const listV2Managers = /* GraphQL */ `query ListV2Managers(
  $filter: ModelV2ManagersFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Managers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      email
      firstName
      id
      isActive
      lastName
      profitCenterID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ManagersQueryVariables,
  APITypes.ListV2ManagersQuery
>;
export const listV2ManagersByEmail = /* GraphQL */ `query ListV2ManagersByEmail(
  $email: String!
  $filter: Modelv2ManagersFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2ManagersByEmail(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      firstName
      id
      isActive
      lastName
      profitCenterID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ManagersByEmailQueryVariables,
  APITypes.ListV2ManagersByEmailQuery
>;
export const listV2MessageByCustomerId = /* GraphQL */ `query ListV2MessageByCustomerId(
  $customerId: ID!
  $filter: Modelv2MessageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2MessageByCustomerId(
    customerId: $customerId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      customerId
      id
      message
      source
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2MessageByCustomerIdQueryVariables,
  APITypes.ListV2MessageByCustomerIdQuery
>;
export const listV2Messages = /* GraphQL */ `query ListV2Messages(
  $filter: ModelV2MessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Messages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      customerId
      id
      message
      source
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2MessagesQueryVariables,
  APITypes.ListV2MessagesQuery
>;
export const listV2Metadata = /* GraphQL */ `query ListV2Metadata(
  $filter: ModelV2MetadataFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Metadata(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      key
      parametersId
      updatedAt
      value
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2MetadataQueryVariables,
  APITypes.ListV2MetadataQuery
>;
export const listV2Parameters = /* GraphQL */ `query ListV2Parameters(
  $filter: ModelV2ParametersFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Parameters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      country
      createdAt
      id
      idParent
      label
      typeOfParameterId
      updatedAt
      value
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ParametersQueryVariables,
  APITypes.ListV2ParametersQuery
>;
export const listV2ParametersByCountryAndLabel = /* GraphQL */ `query ListV2ParametersByCountryAndLabel(
  $country: String!
  $filter: Modelv2ParametersFilterInput
  $label: ModelStringKeyConditionInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2ParametersByCountryAndLabel(
    country: $country
    filter: $filter
    label: $label
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      country
      createdAt
      id
      idParent
      label
      typeOfParameterId
      updatedAt
      value
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ParametersByCountryAndLabelQueryVariables,
  APITypes.ListV2ParametersByCountryAndLabelQuery
>;
export const listV2ParametersEncs = /* GraphQL */ `query ListV2ParametersEncs(
  $filter: ModelV2ParametersEncFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2ParametersEncs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      description
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ParametersEncsQueryVariables,
  APITypes.ListV2ParametersEncsQuery
>;
export const listV2PaymentTransactions = /* GraphQL */ `query ListV2PaymentTransactions(
  $filter: ModelV2PaymentTransactionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2PaymentTransactions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      accounting_date
      amount
      authorization_code
      buy_order
      card_detail
      card_number
      createdAt
      day
      glosa
      hasRefund
      hour
      id
      installments_amount
      installments_number
      month
      payment_type_code
      response_code
      session_id
      shoppingCartId
      status
      token
      transaction_date
      updatedAt
      urlWebpay
      usersId
      vci
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2PaymentTransactionsQueryVariables,
  APITypes.ListV2PaymentTransactionsQuery
>;
export const listV2PaymentTransactionsByDayAndMonthAndYearAndHour = /* GraphQL */ `query ListV2PaymentTransactionsByDayAndMonthAndYearAndHour(
  $day: String!
  $filter: Modelv2PaymentTransactionsFilterInput
  $limit: Int
  $monthYearHour: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyConditionInput
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2PaymentTransactionsByDayAndMonthAndYearAndHour(
    day: $day
    filter: $filter
    limit: $limit
    monthYearHour: $monthYearHour
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      accounting_date
      amount
      authorization_code
      buy_order
      card_detail
      card_number
      createdAt
      day
      glosa
      hasRefund
      hour
      id
      installments_amount
      installments_number
      month
      payment_type_code
      response_code
      session_id
      shoppingCartId
      status
      token
      transaction_date
      updatedAt
      urlWebpay
      usersId
      vci
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2PaymentTransactionsByDayAndMonthAndYearAndHourQueryVariables,
  APITypes.ListV2PaymentTransactionsByDayAndMonthAndYearAndHourQuery
>;
export const listV2PaymentTransactionsByToken = /* GraphQL */ `query ListV2PaymentTransactionsByToken(
  $filter: Modelv2PaymentTransactionsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $token: String!
) {
  listV2PaymentTransactionsByToken(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    token: $token
  ) {
    items {
      accounting_date
      amount
      authorization_code
      buy_order
      card_detail
      card_number
      createdAt
      day
      glosa
      hasRefund
      hour
      id
      installments_amount
      installments_number
      month
      payment_type_code
      response_code
      session_id
      shoppingCartId
      status
      token
      transaction_date
      updatedAt
      urlWebpay
      usersId
      vci
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2PaymentTransactionsByTokenQueryVariables,
  APITypes.ListV2PaymentTransactionsByTokenQuery
>;
export const listV2Permissions = /* GraphQL */ `query ListV2Permissions(
  $filter: ModelV2PermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Permissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      displayName
      icon
      id
      isLeaf
      isVisible
      name
      order
      padreId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2PermissionsQueryVariables,
  APITypes.ListV2PermissionsQuery
>;
export const listV2ProductBySku = /* GraphQL */ `query ListV2ProductBySku(
  $filter: Modelv2ProductFilterInput
  $limit: Int
  $nextToken: String
  $sku: String!
  $sortDirection: ModelSortDirection
) {
  listV2ProductBySku(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sku: $sku
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      criticalStock
      currentStock
      id
      isActive
      name
      profits
      purchasePrice
      sellingPrice
      sku
      supplierId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ProductBySkuQueryVariables,
  APITypes.ListV2ProductBySkuQuery
>;
export const listV2Products = /* GraphQL */ `query ListV2Products(
  $filter: ModelV2ProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Products(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      criticalStock
      currentStock
      id
      isActive
      name
      profits
      purchasePrice
      sellingPrice
      sku
      supplierId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ProductsQueryVariables,
  APITypes.ListV2ProductsQuery
>;
export const listV2ProfitCenterByCode = /* GraphQL */ `query ListV2ProfitCenterByCode(
  $code: String!
  $filter: Modelv2ProfitCenterFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2ProfitCenterByCode(
    code: $code
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      code
      createdAt
      description
      id
      isActive
      managerID
      name
      parentProfitCenterID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ProfitCenterByCodeQueryVariables,
  APITypes.ListV2ProfitCenterByCodeQuery
>;
export const listV2ProfitCenters = /* GraphQL */ `query ListV2ProfitCenters(
  $filter: ModelV2ProfitCenterFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2ProfitCenters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      code
      createdAt
      description
      id
      isActive
      managerID
      name
      parentProfitCenterID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ProfitCentersQueryVariables,
  APITypes.ListV2ProfitCentersQuery
>;
export const listV2Relationships = /* GraphQL */ `query ListV2Relationships(
  $filter: ModelV2RelationshipFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Relationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      relationType
      studentId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2RelationshipsQueryVariables,
  APITypes.ListV2RelationshipsQuery
>;
export const listV2RolPermissions = /* GraphQL */ `query ListV2RolPermissions(
  $filter: ModelV2RolPermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2RolPermissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      permissionId
      roleId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2RolPermissionsQueryVariables,
  APITypes.ListV2RolPermissionsQuery
>;
export const listV2Roles = /* GraphQL */ `query ListV2Roles(
  $filter: ModelV2RolesFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Roles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      displayName
      icon
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2RolesQueryVariables,
  APITypes.ListV2RolesQuery
>;
export const listV2SellersCommissions = /* GraphQL */ `query ListV2SellersCommissions(
  $filter: ModelV2SellersCommissionFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2SellersCommissions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      amount
      createdAt
      description
      id
      paymentAmount
      salesCommission
      status
      type
      updatedAt
      usersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2SellersCommissionsQueryVariables,
  APITypes.ListV2SellersCommissionsQuery
>;
export const listV2SentEmails = /* GraphQL */ `query ListV2SentEmails(
  $filter: ModelV2SentEmailFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2SentEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      body
      createdAt
      emailState
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2SentEmailsQueryVariables,
  APITypes.ListV2SentEmailsQuery
>;
export const listV2ShoppingCartDetailByCartId = /* GraphQL */ `query ListV2ShoppingCartDetailByCartId(
  $cartId: ID!
  $filter: Modelv2ShoppingCartDetailFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2ShoppingCartDetailByCartId(
    cartId: $cartId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      academyEnrollmentId
      amount
      cartId
      createdAt
      createdById
      detail
      enrollmentId
      id
      privateEnrollmentId
      quantity
      type
      updatedAt
      wasDeleted
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ShoppingCartDetailByCartIdQueryVariables,
  APITypes.ListV2ShoppingCartDetailByCartIdQuery
>;
export const listV2ShoppingCartDetails = /* GraphQL */ `query ListV2ShoppingCartDetails(
  $filter: ModelV2ShoppingCartDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2ShoppingCartDetails(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      academyEnrollmentId
      amount
      cartId
      createdAt
      createdById
      detail
      enrollmentId
      id
      privateEnrollmentId
      quantity
      type
      updatedAt
      wasDeleted
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ShoppingCartDetailsQueryVariables,
  APITypes.ListV2ShoppingCartDetailsQuery
>;
export const listV2ShoppingCarts = /* GraphQL */ `query ListV2ShoppingCarts(
  $filter: ModelV2ShoppingCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2ShoppingCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      sellerId
      sellersCommissionId
      status
      totalPrice
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2ShoppingCartsQueryVariables,
  APITypes.ListV2ShoppingCartsQuery
>;
export const listV2Suppliers = /* GraphQL */ `query ListV2Suppliers(
  $filter: ModelV2SupplierFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Suppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      address
      contactPerson
      createdAt
      email
      id
      isActive
      name
      phone
      taxId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2SuppliersQueryVariables,
  APITypes.ListV2SuppliersQuery
>;
export const listV2SupportTicketByDate = /* GraphQL */ `query ListV2SupportTicketByDate(
  $date: AWSDateTime!
  $filter: Modelv2SupportTicketFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2SupportTicketByDate(
    date: $date
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      date
      day
      description
      email
      id
      lastModificationUser
      month
      name
      phoneNumber
      reason
      statusTicket
      studentId
      updatedAt
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2SupportTicketByDateQueryVariables,
  APITypes.ListV2SupportTicketByDateQuery
>;
export const listV2SupportTickets = /* GraphQL */ `query ListV2SupportTickets(
  $filter: ModelV2SupportTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2SupportTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      date
      day
      description
      email
      id
      lastModificationUser
      month
      name
      phoneNumber
      reason
      statusTicket
      studentId
      updatedAt
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2SupportTicketsQueryVariables,
  APITypes.ListV2SupportTicketsQuery
>;
export const listV2TicketComments = /* GraphQL */ `query ListV2TicketComments(
  $filter: ModelV2TicketCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2TicketComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      commentId
      createdAt
      id
      ticketId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2TicketCommentsQueryVariables,
  APITypes.ListV2TicketCommentsQuery
>;
export const listV2TicketUsers = /* GraphQL */ `query ListV2TicketUsers(
  $filter: ModelV2TicketUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2TicketUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      ticketId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2TicketUsersQueryVariables,
  APITypes.ListV2TicketUsersQuery
>;
export const listV2Transactions = /* GraphQL */ `query ListV2Transactions(
  $filter: ModelV2TransactionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Transactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      amount
      categoryID
      categoryType
      createdAt
      date
      description
      id
      month
      profitCenterID
      updatedAt
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2TransactionsQueryVariables,
  APITypes.ListV2TransactionsQuery
>;
export const listV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYear = /* GraphQL */ `query ListV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYear(
  $categoryIDMonthYear: Modelv2TransactionsSearchByProfitCenterCompositeKeyConditionInput
  $filter: Modelv2TransactionsFilterInput
  $limit: Int
  $nextToken: String
  $profitCenterID: ID!
  $sortDirection: ModelSortDirection
) {
  listV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYear(
    categoryIDMonthYear: $categoryIDMonthYear
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    profitCenterID: $profitCenterID
    sortDirection: $sortDirection
  ) {
    items {
      amount
      categoryID
      categoryType
      createdAt
      date
      description
      id
      month
      profitCenterID
      updatedAt
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYearQueryVariables,
  APITypes.ListV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYearQuery
>;
export const listV2UserPermissions = /* GraphQL */ `query ListV2UserPermissions(
  $filter: ModelV2UserPermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2UserPermissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      permissionId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2UserPermissionsQueryVariables,
  APITypes.ListV2UserPermissionsQuery
>;
export const listV2Users = /* GraphQL */ `query ListV2Users(
  $filter: ModelV2UsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listV2Users(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2UsersQueryVariables,
  APITypes.ListV2UsersQuery
>;
export const listV2UsersByCountry = /* GraphQL */ `query ListV2UsersByCountry(
  $country: String!
  $filter: Modelv2UsersFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2UsersByCountry(
    country: $country
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2UsersByCountryQueryVariables,
  APITypes.ListV2UsersByCountryQuery
>;
export const listV2UsersByEmail = /* GraphQL */ `query ListV2UsersByEmail(
  $email: String!
  $filter: Modelv2UsersFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listV2UsersByEmail(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      city
      contactPhone
      country
      createdAt
      email
      firstContact
      id
      ig
      isAcademyStudent
      isActive
      isEmployed
      latitude
      longitude
      name
      roleId
      salesCommission
      state
      streetAddress
      updatedAt
      validated
      zipCode
      zoomLevel
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListV2UsersByEmailQueryVariables,
  APITypes.ListV2UsersByEmailQuery
>;
export const v2ListCognitoUsers = /* GraphQL */ `query V2ListCognitoUsers($filter: String, $limit: Int, $nextToken: String) {
  v2ListCognitoUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    nextToken
    users {
      createdAt
      email
      enabled
      name
      status
      sub
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.V2ListCognitoUsersQueryVariables,
  APITypes.V2ListCognitoUsersQuery
>;
