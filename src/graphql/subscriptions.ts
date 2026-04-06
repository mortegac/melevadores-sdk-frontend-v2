/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateV2Action = /* GraphQL */ `subscription OnCreateV2Action($filter: ModelSubscriptionV2ActionFilterInput) {
  onCreateV2Action(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ActionSubscriptionVariables,
  APITypes.OnCreateV2ActionSubscription
>;
export const onCreateV2CommentTickets = /* GraphQL */ `subscription OnCreateV2CommentTickets(
  $filter: ModelSubscriptionV2CommentTicketsFilterInput
) {
  onCreateV2CommentTickets(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2CommentTicketsSubscriptionVariables,
  APITypes.OnCreateV2CommentTicketsSubscription
>;
export const onCreateV2Correlatives = /* GraphQL */ `subscription OnCreateV2Correlatives(
  $filter: ModelSubscriptionV2CorrelativesFilterInput
) {
  onCreateV2Correlatives(filter: $filter) {
    correlative
    createdAt
    id
    type
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateV2CorrelativesSubscriptionVariables,
  APITypes.OnCreateV2CorrelativesSubscription
>;
export const onCreateV2Customer = /* GraphQL */ `subscription OnCreateV2Customer(
  $filter: ModelSubscriptionV2CustomerFilterInput
) {
  onCreateV2Customer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2CustomerSubscriptionVariables,
  APITypes.OnCreateV2CustomerSubscription
>;
export const onCreateV2CustomerAction = /* GraphQL */ `subscription OnCreateV2CustomerAction(
  $filter: ModelSubscriptionV2CustomerActionFilterInput
) {
  onCreateV2CustomerAction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2CustomerActionSubscriptionVariables,
  APITypes.OnCreateV2CustomerActionSubscription
>;
export const onCreateV2EmailSend = /* GraphQL */ `subscription OnCreateV2EmailSend(
  $filter: ModelSubscriptionV2EmailSendFilterInput
) {
  onCreateV2EmailSend(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2EmailSendSubscriptionVariables,
  APITypes.OnCreateV2EmailSendSubscription
>;
export const onCreateV2GmailInbox = /* GraphQL */ `subscription OnCreateV2GmailInbox(
  $filter: ModelSubscriptionV2GmailInboxFilterInput
) {
  onCreateV2GmailInbox(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2GmailInboxSubscriptionVariables,
  APITypes.OnCreateV2GmailInboxSubscription
>;
export const onCreateV2Managers = /* GraphQL */ `subscription OnCreateV2Managers(
  $filter: ModelSubscriptionV2ManagersFilterInput
) {
  onCreateV2Managers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ManagersSubscriptionVariables,
  APITypes.OnCreateV2ManagersSubscription
>;
export const onCreateV2Message = /* GraphQL */ `subscription OnCreateV2Message($filter: ModelSubscriptionV2MessageFilterInput) {
  onCreateV2Message(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2MessageSubscriptionVariables,
  APITypes.OnCreateV2MessageSubscription
>;
export const onCreateV2Metadata = /* GraphQL */ `subscription OnCreateV2Metadata(
  $filter: ModelSubscriptionV2MetadataFilterInput
) {
  onCreateV2Metadata(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2MetadataSubscriptionVariables,
  APITypes.OnCreateV2MetadataSubscription
>;
export const onCreateV2Parameters = /* GraphQL */ `subscription OnCreateV2Parameters(
  $filter: ModelSubscriptionV2ParametersFilterInput
) {
  onCreateV2Parameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ParametersSubscriptionVariables,
  APITypes.OnCreateV2ParametersSubscription
>;
export const onCreateV2ParametersEnc = /* GraphQL */ `subscription OnCreateV2ParametersEnc(
  $filter: ModelSubscriptionV2ParametersEncFilterInput
) {
  onCreateV2ParametersEnc(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ParametersEncSubscriptionVariables,
  APITypes.OnCreateV2ParametersEncSubscription
>;
export const onCreateV2PaymentTransactions = /* GraphQL */ `subscription OnCreateV2PaymentTransactions(
  $filter: ModelSubscriptionV2PaymentTransactionsFilterInput
) {
  onCreateV2PaymentTransactions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2PaymentTransactionsSubscriptionVariables,
  APITypes.OnCreateV2PaymentTransactionsSubscription
>;
export const onCreateV2Permissions = /* GraphQL */ `subscription OnCreateV2Permissions(
  $filter: ModelSubscriptionV2PermissionsFilterInput
) {
  onCreateV2Permissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2PermissionsSubscriptionVariables,
  APITypes.OnCreateV2PermissionsSubscription
>;
export const onCreateV2Product = /* GraphQL */ `subscription OnCreateV2Product($filter: ModelSubscriptionV2ProductFilterInput) {
  onCreateV2Product(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ProductSubscriptionVariables,
  APITypes.OnCreateV2ProductSubscription
>;
export const onCreateV2ProfitCenter = /* GraphQL */ `subscription OnCreateV2ProfitCenter(
  $filter: ModelSubscriptionV2ProfitCenterFilterInput
) {
  onCreateV2ProfitCenter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ProfitCenterSubscriptionVariables,
  APITypes.OnCreateV2ProfitCenterSubscription
>;
export const onCreateV2Relationship = /* GraphQL */ `subscription OnCreateV2Relationship(
  $filter: ModelSubscriptionV2RelationshipFilterInput
) {
  onCreateV2Relationship(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2RelationshipSubscriptionVariables,
  APITypes.OnCreateV2RelationshipSubscription
>;
export const onCreateV2RolPermissions = /* GraphQL */ `subscription OnCreateV2RolPermissions(
  $filter: ModelSubscriptionV2RolPermissionsFilterInput
) {
  onCreateV2RolPermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2RolPermissionsSubscriptionVariables,
  APITypes.OnCreateV2RolPermissionsSubscription
>;
export const onCreateV2Roles = /* GraphQL */ `subscription OnCreateV2Roles($filter: ModelSubscriptionV2RolesFilterInput) {
  onCreateV2Roles(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2RolesSubscriptionVariables,
  APITypes.OnCreateV2RolesSubscription
>;
export const onCreateV2SellersCommission = /* GraphQL */ `subscription OnCreateV2SellersCommission(
  $filter: ModelSubscriptionV2SellersCommissionFilterInput
) {
  onCreateV2SellersCommission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2SellersCommissionSubscriptionVariables,
  APITypes.OnCreateV2SellersCommissionSubscription
>;
export const onCreateV2SentEmail = /* GraphQL */ `subscription OnCreateV2SentEmail(
  $filter: ModelSubscriptionV2SentEmailFilterInput
) {
  onCreateV2SentEmail(filter: $filter) {
    body
    createdAt
    emailState
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateV2SentEmailSubscriptionVariables,
  APITypes.OnCreateV2SentEmailSubscription
>;
export const onCreateV2ShoppingCart = /* GraphQL */ `subscription OnCreateV2ShoppingCart(
  $filter: ModelSubscriptionV2ShoppingCartFilterInput
) {
  onCreateV2ShoppingCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ShoppingCartSubscriptionVariables,
  APITypes.OnCreateV2ShoppingCartSubscription
>;
export const onCreateV2ShoppingCartDetail = /* GraphQL */ `subscription OnCreateV2ShoppingCartDetail(
  $filter: ModelSubscriptionV2ShoppingCartDetailFilterInput
) {
  onCreateV2ShoppingCartDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2ShoppingCartDetailSubscriptionVariables,
  APITypes.OnCreateV2ShoppingCartDetailSubscription
>;
export const onCreateV2Supplier = /* GraphQL */ `subscription OnCreateV2Supplier(
  $filter: ModelSubscriptionV2SupplierFilterInput
) {
  onCreateV2Supplier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2SupplierSubscriptionVariables,
  APITypes.OnCreateV2SupplierSubscription
>;
export const onCreateV2SupportTicket = /* GraphQL */ `subscription OnCreateV2SupportTicket(
  $filter: ModelSubscriptionV2SupportTicketFilterInput
) {
  onCreateV2SupportTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2SupportTicketSubscriptionVariables,
  APITypes.OnCreateV2SupportTicketSubscription
>;
export const onCreateV2TicketComment = /* GraphQL */ `subscription OnCreateV2TicketComment(
  $filter: ModelSubscriptionV2TicketCommentFilterInput
) {
  onCreateV2TicketComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2TicketCommentSubscriptionVariables,
  APITypes.OnCreateV2TicketCommentSubscription
>;
export const onCreateV2TicketUser = /* GraphQL */ `subscription OnCreateV2TicketUser(
  $filter: ModelSubscriptionV2TicketUserFilterInput
) {
  onCreateV2TicketUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2TicketUserSubscriptionVariables,
  APITypes.OnCreateV2TicketUserSubscription
>;
export const onCreateV2Transactions = /* GraphQL */ `subscription OnCreateV2Transactions(
  $filter: ModelSubscriptionV2TransactionsFilterInput
) {
  onCreateV2Transactions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2TransactionsSubscriptionVariables,
  APITypes.OnCreateV2TransactionsSubscription
>;
export const onCreateV2UserPermissions = /* GraphQL */ `subscription OnCreateV2UserPermissions(
  $filter: ModelSubscriptionV2UserPermissionsFilterInput
) {
  onCreateV2UserPermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2UserPermissionsSubscriptionVariables,
  APITypes.OnCreateV2UserPermissionsSubscription
>;
export const onCreateV2Users = /* GraphQL */ `subscription OnCreateV2Users($filter: ModelSubscriptionV2UsersFilterInput) {
  onCreateV2Users(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateV2UsersSubscriptionVariables,
  APITypes.OnCreateV2UsersSubscription
>;
export const onDeleteV2Action = /* GraphQL */ `subscription OnDeleteV2Action($filter: ModelSubscriptionV2ActionFilterInput) {
  onDeleteV2Action(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ActionSubscriptionVariables,
  APITypes.OnDeleteV2ActionSubscription
>;
export const onDeleteV2CommentTickets = /* GraphQL */ `subscription OnDeleteV2CommentTickets(
  $filter: ModelSubscriptionV2CommentTicketsFilterInput
) {
  onDeleteV2CommentTickets(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2CommentTicketsSubscriptionVariables,
  APITypes.OnDeleteV2CommentTicketsSubscription
>;
export const onDeleteV2Correlatives = /* GraphQL */ `subscription OnDeleteV2Correlatives(
  $filter: ModelSubscriptionV2CorrelativesFilterInput
) {
  onDeleteV2Correlatives(filter: $filter) {
    correlative
    createdAt
    id
    type
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteV2CorrelativesSubscriptionVariables,
  APITypes.OnDeleteV2CorrelativesSubscription
>;
export const onDeleteV2Customer = /* GraphQL */ `subscription OnDeleteV2Customer(
  $filter: ModelSubscriptionV2CustomerFilterInput
) {
  onDeleteV2Customer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2CustomerSubscriptionVariables,
  APITypes.OnDeleteV2CustomerSubscription
>;
export const onDeleteV2CustomerAction = /* GraphQL */ `subscription OnDeleteV2CustomerAction(
  $filter: ModelSubscriptionV2CustomerActionFilterInput
) {
  onDeleteV2CustomerAction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2CustomerActionSubscriptionVariables,
  APITypes.OnDeleteV2CustomerActionSubscription
>;
export const onDeleteV2EmailSend = /* GraphQL */ `subscription OnDeleteV2EmailSend(
  $filter: ModelSubscriptionV2EmailSendFilterInput
) {
  onDeleteV2EmailSend(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2EmailSendSubscriptionVariables,
  APITypes.OnDeleteV2EmailSendSubscription
>;
export const onDeleteV2GmailInbox = /* GraphQL */ `subscription OnDeleteV2GmailInbox(
  $filter: ModelSubscriptionV2GmailInboxFilterInput
) {
  onDeleteV2GmailInbox(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2GmailInboxSubscriptionVariables,
  APITypes.OnDeleteV2GmailInboxSubscription
>;
export const onDeleteV2Managers = /* GraphQL */ `subscription OnDeleteV2Managers(
  $filter: ModelSubscriptionV2ManagersFilterInput
) {
  onDeleteV2Managers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ManagersSubscriptionVariables,
  APITypes.OnDeleteV2ManagersSubscription
>;
export const onDeleteV2Message = /* GraphQL */ `subscription OnDeleteV2Message($filter: ModelSubscriptionV2MessageFilterInput) {
  onDeleteV2Message(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2MessageSubscriptionVariables,
  APITypes.OnDeleteV2MessageSubscription
>;
export const onDeleteV2Metadata = /* GraphQL */ `subscription OnDeleteV2Metadata(
  $filter: ModelSubscriptionV2MetadataFilterInput
) {
  onDeleteV2Metadata(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2MetadataSubscriptionVariables,
  APITypes.OnDeleteV2MetadataSubscription
>;
export const onDeleteV2Parameters = /* GraphQL */ `subscription OnDeleteV2Parameters(
  $filter: ModelSubscriptionV2ParametersFilterInput
) {
  onDeleteV2Parameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ParametersSubscriptionVariables,
  APITypes.OnDeleteV2ParametersSubscription
>;
export const onDeleteV2ParametersEnc = /* GraphQL */ `subscription OnDeleteV2ParametersEnc(
  $filter: ModelSubscriptionV2ParametersEncFilterInput
) {
  onDeleteV2ParametersEnc(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ParametersEncSubscriptionVariables,
  APITypes.OnDeleteV2ParametersEncSubscription
>;
export const onDeleteV2PaymentTransactions = /* GraphQL */ `subscription OnDeleteV2PaymentTransactions(
  $filter: ModelSubscriptionV2PaymentTransactionsFilterInput
) {
  onDeleteV2PaymentTransactions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2PaymentTransactionsSubscriptionVariables,
  APITypes.OnDeleteV2PaymentTransactionsSubscription
>;
export const onDeleteV2Permissions = /* GraphQL */ `subscription OnDeleteV2Permissions(
  $filter: ModelSubscriptionV2PermissionsFilterInput
) {
  onDeleteV2Permissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2PermissionsSubscriptionVariables,
  APITypes.OnDeleteV2PermissionsSubscription
>;
export const onDeleteV2Product = /* GraphQL */ `subscription OnDeleteV2Product($filter: ModelSubscriptionV2ProductFilterInput) {
  onDeleteV2Product(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ProductSubscriptionVariables,
  APITypes.OnDeleteV2ProductSubscription
>;
export const onDeleteV2ProfitCenter = /* GraphQL */ `subscription OnDeleteV2ProfitCenter(
  $filter: ModelSubscriptionV2ProfitCenterFilterInput
) {
  onDeleteV2ProfitCenter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ProfitCenterSubscriptionVariables,
  APITypes.OnDeleteV2ProfitCenterSubscription
>;
export const onDeleteV2Relationship = /* GraphQL */ `subscription OnDeleteV2Relationship(
  $filter: ModelSubscriptionV2RelationshipFilterInput
) {
  onDeleteV2Relationship(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2RelationshipSubscriptionVariables,
  APITypes.OnDeleteV2RelationshipSubscription
>;
export const onDeleteV2RolPermissions = /* GraphQL */ `subscription OnDeleteV2RolPermissions(
  $filter: ModelSubscriptionV2RolPermissionsFilterInput
) {
  onDeleteV2RolPermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2RolPermissionsSubscriptionVariables,
  APITypes.OnDeleteV2RolPermissionsSubscription
>;
export const onDeleteV2Roles = /* GraphQL */ `subscription OnDeleteV2Roles($filter: ModelSubscriptionV2RolesFilterInput) {
  onDeleteV2Roles(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2RolesSubscriptionVariables,
  APITypes.OnDeleteV2RolesSubscription
>;
export const onDeleteV2SellersCommission = /* GraphQL */ `subscription OnDeleteV2SellersCommission(
  $filter: ModelSubscriptionV2SellersCommissionFilterInput
) {
  onDeleteV2SellersCommission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2SellersCommissionSubscriptionVariables,
  APITypes.OnDeleteV2SellersCommissionSubscription
>;
export const onDeleteV2SentEmail = /* GraphQL */ `subscription OnDeleteV2SentEmail(
  $filter: ModelSubscriptionV2SentEmailFilterInput
) {
  onDeleteV2SentEmail(filter: $filter) {
    body
    createdAt
    emailState
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteV2SentEmailSubscriptionVariables,
  APITypes.OnDeleteV2SentEmailSubscription
>;
export const onDeleteV2ShoppingCart = /* GraphQL */ `subscription OnDeleteV2ShoppingCart(
  $filter: ModelSubscriptionV2ShoppingCartFilterInput
) {
  onDeleteV2ShoppingCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ShoppingCartSubscriptionVariables,
  APITypes.OnDeleteV2ShoppingCartSubscription
>;
export const onDeleteV2ShoppingCartDetail = /* GraphQL */ `subscription OnDeleteV2ShoppingCartDetail(
  $filter: ModelSubscriptionV2ShoppingCartDetailFilterInput
) {
  onDeleteV2ShoppingCartDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2ShoppingCartDetailSubscriptionVariables,
  APITypes.OnDeleteV2ShoppingCartDetailSubscription
>;
export const onDeleteV2Supplier = /* GraphQL */ `subscription OnDeleteV2Supplier(
  $filter: ModelSubscriptionV2SupplierFilterInput
) {
  onDeleteV2Supplier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2SupplierSubscriptionVariables,
  APITypes.OnDeleteV2SupplierSubscription
>;
export const onDeleteV2SupportTicket = /* GraphQL */ `subscription OnDeleteV2SupportTicket(
  $filter: ModelSubscriptionV2SupportTicketFilterInput
) {
  onDeleteV2SupportTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2SupportTicketSubscriptionVariables,
  APITypes.OnDeleteV2SupportTicketSubscription
>;
export const onDeleteV2TicketComment = /* GraphQL */ `subscription OnDeleteV2TicketComment(
  $filter: ModelSubscriptionV2TicketCommentFilterInput
) {
  onDeleteV2TicketComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2TicketCommentSubscriptionVariables,
  APITypes.OnDeleteV2TicketCommentSubscription
>;
export const onDeleteV2TicketUser = /* GraphQL */ `subscription OnDeleteV2TicketUser(
  $filter: ModelSubscriptionV2TicketUserFilterInput
) {
  onDeleteV2TicketUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2TicketUserSubscriptionVariables,
  APITypes.OnDeleteV2TicketUserSubscription
>;
export const onDeleteV2Transactions = /* GraphQL */ `subscription OnDeleteV2Transactions(
  $filter: ModelSubscriptionV2TransactionsFilterInput
) {
  onDeleteV2Transactions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2TransactionsSubscriptionVariables,
  APITypes.OnDeleteV2TransactionsSubscription
>;
export const onDeleteV2UserPermissions = /* GraphQL */ `subscription OnDeleteV2UserPermissions(
  $filter: ModelSubscriptionV2UserPermissionsFilterInput
) {
  onDeleteV2UserPermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2UserPermissionsSubscriptionVariables,
  APITypes.OnDeleteV2UserPermissionsSubscription
>;
export const onDeleteV2Users = /* GraphQL */ `subscription OnDeleteV2Users($filter: ModelSubscriptionV2UsersFilterInput) {
  onDeleteV2Users(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteV2UsersSubscriptionVariables,
  APITypes.OnDeleteV2UsersSubscription
>;
export const onUpdateV2Action = /* GraphQL */ `subscription OnUpdateV2Action($filter: ModelSubscriptionV2ActionFilterInput) {
  onUpdateV2Action(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ActionSubscriptionVariables,
  APITypes.OnUpdateV2ActionSubscription
>;
export const onUpdateV2CommentTickets = /* GraphQL */ `subscription OnUpdateV2CommentTickets(
  $filter: ModelSubscriptionV2CommentTicketsFilterInput
) {
  onUpdateV2CommentTickets(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2CommentTicketsSubscriptionVariables,
  APITypes.OnUpdateV2CommentTicketsSubscription
>;
export const onUpdateV2Correlatives = /* GraphQL */ `subscription OnUpdateV2Correlatives(
  $filter: ModelSubscriptionV2CorrelativesFilterInput
) {
  onUpdateV2Correlatives(filter: $filter) {
    correlative
    createdAt
    id
    type
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateV2CorrelativesSubscriptionVariables,
  APITypes.OnUpdateV2CorrelativesSubscription
>;
export const onUpdateV2Customer = /* GraphQL */ `subscription OnUpdateV2Customer(
  $filter: ModelSubscriptionV2CustomerFilterInput
) {
  onUpdateV2Customer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2CustomerSubscriptionVariables,
  APITypes.OnUpdateV2CustomerSubscription
>;
export const onUpdateV2CustomerAction = /* GraphQL */ `subscription OnUpdateV2CustomerAction(
  $filter: ModelSubscriptionV2CustomerActionFilterInput
) {
  onUpdateV2CustomerAction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2CustomerActionSubscriptionVariables,
  APITypes.OnUpdateV2CustomerActionSubscription
>;
export const onUpdateV2EmailSend = /* GraphQL */ `subscription OnUpdateV2EmailSend(
  $filter: ModelSubscriptionV2EmailSendFilterInput
) {
  onUpdateV2EmailSend(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2EmailSendSubscriptionVariables,
  APITypes.OnUpdateV2EmailSendSubscription
>;
export const onUpdateV2GmailInbox = /* GraphQL */ `subscription OnUpdateV2GmailInbox(
  $filter: ModelSubscriptionV2GmailInboxFilterInput
) {
  onUpdateV2GmailInbox(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2GmailInboxSubscriptionVariables,
  APITypes.OnUpdateV2GmailInboxSubscription
>;
export const onUpdateV2Managers = /* GraphQL */ `subscription OnUpdateV2Managers(
  $filter: ModelSubscriptionV2ManagersFilterInput
) {
  onUpdateV2Managers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ManagersSubscriptionVariables,
  APITypes.OnUpdateV2ManagersSubscription
>;
export const onUpdateV2Message = /* GraphQL */ `subscription OnUpdateV2Message($filter: ModelSubscriptionV2MessageFilterInput) {
  onUpdateV2Message(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2MessageSubscriptionVariables,
  APITypes.OnUpdateV2MessageSubscription
>;
export const onUpdateV2Metadata = /* GraphQL */ `subscription OnUpdateV2Metadata(
  $filter: ModelSubscriptionV2MetadataFilterInput
) {
  onUpdateV2Metadata(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2MetadataSubscriptionVariables,
  APITypes.OnUpdateV2MetadataSubscription
>;
export const onUpdateV2Parameters = /* GraphQL */ `subscription OnUpdateV2Parameters(
  $filter: ModelSubscriptionV2ParametersFilterInput
) {
  onUpdateV2Parameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ParametersSubscriptionVariables,
  APITypes.OnUpdateV2ParametersSubscription
>;
export const onUpdateV2ParametersEnc = /* GraphQL */ `subscription OnUpdateV2ParametersEnc(
  $filter: ModelSubscriptionV2ParametersEncFilterInput
) {
  onUpdateV2ParametersEnc(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ParametersEncSubscriptionVariables,
  APITypes.OnUpdateV2ParametersEncSubscription
>;
export const onUpdateV2PaymentTransactions = /* GraphQL */ `subscription OnUpdateV2PaymentTransactions(
  $filter: ModelSubscriptionV2PaymentTransactionsFilterInput
) {
  onUpdateV2PaymentTransactions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2PaymentTransactionsSubscriptionVariables,
  APITypes.OnUpdateV2PaymentTransactionsSubscription
>;
export const onUpdateV2Permissions = /* GraphQL */ `subscription OnUpdateV2Permissions(
  $filter: ModelSubscriptionV2PermissionsFilterInput
) {
  onUpdateV2Permissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2PermissionsSubscriptionVariables,
  APITypes.OnUpdateV2PermissionsSubscription
>;
export const onUpdateV2Product = /* GraphQL */ `subscription OnUpdateV2Product($filter: ModelSubscriptionV2ProductFilterInput) {
  onUpdateV2Product(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ProductSubscriptionVariables,
  APITypes.OnUpdateV2ProductSubscription
>;
export const onUpdateV2ProfitCenter = /* GraphQL */ `subscription OnUpdateV2ProfitCenter(
  $filter: ModelSubscriptionV2ProfitCenterFilterInput
) {
  onUpdateV2ProfitCenter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ProfitCenterSubscriptionVariables,
  APITypes.OnUpdateV2ProfitCenterSubscription
>;
export const onUpdateV2Relationship = /* GraphQL */ `subscription OnUpdateV2Relationship(
  $filter: ModelSubscriptionV2RelationshipFilterInput
) {
  onUpdateV2Relationship(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2RelationshipSubscriptionVariables,
  APITypes.OnUpdateV2RelationshipSubscription
>;
export const onUpdateV2RolPermissions = /* GraphQL */ `subscription OnUpdateV2RolPermissions(
  $filter: ModelSubscriptionV2RolPermissionsFilterInput
) {
  onUpdateV2RolPermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2RolPermissionsSubscriptionVariables,
  APITypes.OnUpdateV2RolPermissionsSubscription
>;
export const onUpdateV2Roles = /* GraphQL */ `subscription OnUpdateV2Roles($filter: ModelSubscriptionV2RolesFilterInput) {
  onUpdateV2Roles(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2RolesSubscriptionVariables,
  APITypes.OnUpdateV2RolesSubscription
>;
export const onUpdateV2SellersCommission = /* GraphQL */ `subscription OnUpdateV2SellersCommission(
  $filter: ModelSubscriptionV2SellersCommissionFilterInput
) {
  onUpdateV2SellersCommission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2SellersCommissionSubscriptionVariables,
  APITypes.OnUpdateV2SellersCommissionSubscription
>;
export const onUpdateV2SentEmail = /* GraphQL */ `subscription OnUpdateV2SentEmail(
  $filter: ModelSubscriptionV2SentEmailFilterInput
) {
  onUpdateV2SentEmail(filter: $filter) {
    body
    createdAt
    emailState
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateV2SentEmailSubscriptionVariables,
  APITypes.OnUpdateV2SentEmailSubscription
>;
export const onUpdateV2ShoppingCart = /* GraphQL */ `subscription OnUpdateV2ShoppingCart(
  $filter: ModelSubscriptionV2ShoppingCartFilterInput
) {
  onUpdateV2ShoppingCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ShoppingCartSubscriptionVariables,
  APITypes.OnUpdateV2ShoppingCartSubscription
>;
export const onUpdateV2ShoppingCartDetail = /* GraphQL */ `subscription OnUpdateV2ShoppingCartDetail(
  $filter: ModelSubscriptionV2ShoppingCartDetailFilterInput
) {
  onUpdateV2ShoppingCartDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2ShoppingCartDetailSubscriptionVariables,
  APITypes.OnUpdateV2ShoppingCartDetailSubscription
>;
export const onUpdateV2Supplier = /* GraphQL */ `subscription OnUpdateV2Supplier(
  $filter: ModelSubscriptionV2SupplierFilterInput
) {
  onUpdateV2Supplier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2SupplierSubscriptionVariables,
  APITypes.OnUpdateV2SupplierSubscription
>;
export const onUpdateV2SupportTicket = /* GraphQL */ `subscription OnUpdateV2SupportTicket(
  $filter: ModelSubscriptionV2SupportTicketFilterInput
) {
  onUpdateV2SupportTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2SupportTicketSubscriptionVariables,
  APITypes.OnUpdateV2SupportTicketSubscription
>;
export const onUpdateV2TicketComment = /* GraphQL */ `subscription OnUpdateV2TicketComment(
  $filter: ModelSubscriptionV2TicketCommentFilterInput
) {
  onUpdateV2TicketComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2TicketCommentSubscriptionVariables,
  APITypes.OnUpdateV2TicketCommentSubscription
>;
export const onUpdateV2TicketUser = /* GraphQL */ `subscription OnUpdateV2TicketUser(
  $filter: ModelSubscriptionV2TicketUserFilterInput
) {
  onUpdateV2TicketUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2TicketUserSubscriptionVariables,
  APITypes.OnUpdateV2TicketUserSubscription
>;
export const onUpdateV2Transactions = /* GraphQL */ `subscription OnUpdateV2Transactions(
  $filter: ModelSubscriptionV2TransactionsFilterInput
) {
  onUpdateV2Transactions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2TransactionsSubscriptionVariables,
  APITypes.OnUpdateV2TransactionsSubscription
>;
export const onUpdateV2UserPermissions = /* GraphQL */ `subscription OnUpdateV2UserPermissions(
  $filter: ModelSubscriptionV2UserPermissionsFilterInput
) {
  onUpdateV2UserPermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2UserPermissionsSubscriptionVariables,
  APITypes.OnUpdateV2UserPermissionsSubscription
>;
export const onUpdateV2Users = /* GraphQL */ `subscription OnUpdateV2Users($filter: ModelSubscriptionV2UsersFilterInput) {
  onUpdateV2Users(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateV2UsersSubscriptionVariables,
  APITypes.OnUpdateV2UsersSubscription
>;
