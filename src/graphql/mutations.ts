/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createV2Action = /* GraphQL */ `mutation CreateV2Action(
  $condition: ModelV2ActionConditionInput
  $input: CreateV2ActionInput!
) {
  createV2Action(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ActionMutationVariables,
  APITypes.CreateV2ActionMutation
>;
export const createV2CommentTickets = /* GraphQL */ `mutation CreateV2CommentTickets(
  $condition: ModelV2CommentTicketsConditionInput
  $input: CreateV2CommentTicketsInput!
) {
  createV2CommentTickets(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2CommentTicketsMutationVariables,
  APITypes.CreateV2CommentTicketsMutation
>;
export const createV2Correlatives = /* GraphQL */ `mutation CreateV2Correlatives(
  $condition: ModelV2CorrelativesConditionInput
  $input: CreateV2CorrelativesInput!
) {
  createV2Correlatives(condition: $condition, input: $input) {
    correlative
    createdAt
    id
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateV2CorrelativesMutationVariables,
  APITypes.CreateV2CorrelativesMutation
>;
export const createV2Customer = /* GraphQL */ `mutation CreateV2Customer(
  $condition: ModelV2CustomerConditionInput
  $input: CreateV2CustomerInput!
) {
  createV2Customer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2CustomerMutationVariables,
  APITypes.CreateV2CustomerMutation
>;
export const createV2CustomerAction = /* GraphQL */ `mutation CreateV2CustomerAction(
  $condition: ModelV2CustomerActionConditionInput
  $input: CreateV2CustomerActionInput!
) {
  createV2CustomerAction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2CustomerActionMutationVariables,
  APITypes.CreateV2CustomerActionMutation
>;
export const createV2EmailSend = /* GraphQL */ `mutation CreateV2EmailSend(
  $condition: ModelV2EmailSendConditionInput
  $input: CreateV2EmailSendInput!
) {
  createV2EmailSend(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2EmailSendMutationVariables,
  APITypes.CreateV2EmailSendMutation
>;
export const createV2GmailInbox = /* GraphQL */ `mutation CreateV2GmailInbox(
  $condition: ModelV2GmailInboxConditionInput
  $input: CreateV2GmailInboxInput!
) {
  createV2GmailInbox(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2GmailInboxMutationVariables,
  APITypes.CreateV2GmailInboxMutation
>;
export const createV2Managers = /* GraphQL */ `mutation CreateV2Managers(
  $condition: ModelV2ManagersConditionInput
  $input: CreateV2ManagersInput!
) {
  createV2Managers(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ManagersMutationVariables,
  APITypes.CreateV2ManagersMutation
>;
export const createV2Message = /* GraphQL */ `mutation CreateV2Message(
  $condition: ModelV2MessageConditionInput
  $input: CreateV2MessageInput!
) {
  createV2Message(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2MessageMutationVariables,
  APITypes.CreateV2MessageMutation
>;
export const createV2Metadata = /* GraphQL */ `mutation CreateV2Metadata(
  $condition: ModelV2MetadataConditionInput
  $input: CreateV2MetadataInput!
) {
  createV2Metadata(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2MetadataMutationVariables,
  APITypes.CreateV2MetadataMutation
>;
export const createV2Parameters = /* GraphQL */ `mutation CreateV2Parameters(
  $condition: ModelV2ParametersConditionInput
  $input: CreateV2ParametersInput!
) {
  createV2Parameters(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ParametersMutationVariables,
  APITypes.CreateV2ParametersMutation
>;
export const createV2ParametersEnc = /* GraphQL */ `mutation CreateV2ParametersEnc(
  $condition: ModelV2ParametersEncConditionInput
  $input: CreateV2ParametersEncInput!
) {
  createV2ParametersEnc(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ParametersEncMutationVariables,
  APITypes.CreateV2ParametersEncMutation
>;
export const createV2PaymentTransactions = /* GraphQL */ `mutation CreateV2PaymentTransactions(
  $condition: ModelV2PaymentTransactionsConditionInput
  $input: CreateV2PaymentTransactionsInput!
) {
  createV2PaymentTransactions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2PaymentTransactionsMutationVariables,
  APITypes.CreateV2PaymentTransactionsMutation
>;
export const createV2Permissions = /* GraphQL */ `mutation CreateV2Permissions(
  $condition: ModelV2PermissionsConditionInput
  $input: CreateV2PermissionsInput!
) {
  createV2Permissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2PermissionsMutationVariables,
  APITypes.CreateV2PermissionsMutation
>;
export const createV2Product = /* GraphQL */ `mutation CreateV2Product(
  $condition: ModelV2ProductConditionInput
  $input: CreateV2ProductInput!
) {
  createV2Product(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ProductMutationVariables,
  APITypes.CreateV2ProductMutation
>;
export const createV2ProfitCenter = /* GraphQL */ `mutation CreateV2ProfitCenter(
  $condition: ModelV2ProfitCenterConditionInput
  $input: CreateV2ProfitCenterInput!
) {
  createV2ProfitCenter(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ProfitCenterMutationVariables,
  APITypes.CreateV2ProfitCenterMutation
>;
export const createV2Relationship = /* GraphQL */ `mutation CreateV2Relationship(
  $condition: ModelV2RelationshipConditionInput
  $input: CreateV2RelationshipInput!
) {
  createV2Relationship(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2RelationshipMutationVariables,
  APITypes.CreateV2RelationshipMutation
>;
export const createV2RolPermissions = /* GraphQL */ `mutation CreateV2RolPermissions(
  $condition: ModelV2RolPermissionsConditionInput
  $input: CreateV2RolPermissionsInput!
) {
  createV2RolPermissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2RolPermissionsMutationVariables,
  APITypes.CreateV2RolPermissionsMutation
>;
export const createV2Roles = /* GraphQL */ `mutation CreateV2Roles(
  $condition: ModelV2RolesConditionInput
  $input: CreateV2RolesInput!
) {
  createV2Roles(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2RolesMutationVariables,
  APITypes.CreateV2RolesMutation
>;
export const createV2SellersCommission = /* GraphQL */ `mutation CreateV2SellersCommission(
  $condition: ModelV2SellersCommissionConditionInput
  $input: CreateV2SellersCommissionInput!
) {
  createV2SellersCommission(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2SellersCommissionMutationVariables,
  APITypes.CreateV2SellersCommissionMutation
>;
export const createV2SentEmail = /* GraphQL */ `mutation CreateV2SentEmail(
  $condition: ModelV2SentEmailConditionInput
  $input: CreateV2SentEmailInput!
) {
  createV2SentEmail(condition: $condition, input: $input) {
    body
    createdAt
    emailState
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateV2SentEmailMutationVariables,
  APITypes.CreateV2SentEmailMutation
>;
export const createV2ShoppingCart = /* GraphQL */ `mutation CreateV2ShoppingCart(
  $condition: ModelV2ShoppingCartConditionInput
  $input: CreateV2ShoppingCartInput!
) {
  createV2ShoppingCart(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ShoppingCartMutationVariables,
  APITypes.CreateV2ShoppingCartMutation
>;
export const createV2ShoppingCartDetail = /* GraphQL */ `mutation CreateV2ShoppingCartDetail(
  $condition: ModelV2ShoppingCartDetailConditionInput
  $input: CreateV2ShoppingCartDetailInput!
) {
  createV2ShoppingCartDetail(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2ShoppingCartDetailMutationVariables,
  APITypes.CreateV2ShoppingCartDetailMutation
>;
export const createV2Supplier = /* GraphQL */ `mutation CreateV2Supplier(
  $condition: ModelV2SupplierConditionInput
  $input: CreateV2SupplierInput!
) {
  createV2Supplier(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2SupplierMutationVariables,
  APITypes.CreateV2SupplierMutation
>;
export const createV2SupportTicket = /* GraphQL */ `mutation CreateV2SupportTicket(
  $condition: ModelV2SupportTicketConditionInput
  $input: CreateV2SupportTicketInput!
) {
  createV2SupportTicket(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2SupportTicketMutationVariables,
  APITypes.CreateV2SupportTicketMutation
>;
export const createV2TicketComment = /* GraphQL */ `mutation CreateV2TicketComment(
  $condition: ModelV2TicketCommentConditionInput
  $input: CreateV2TicketCommentInput!
) {
  createV2TicketComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2TicketCommentMutationVariables,
  APITypes.CreateV2TicketCommentMutation
>;
export const createV2TicketUser = /* GraphQL */ `mutation CreateV2TicketUser(
  $condition: ModelV2TicketUserConditionInput
  $input: CreateV2TicketUserInput!
) {
  createV2TicketUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2TicketUserMutationVariables,
  APITypes.CreateV2TicketUserMutation
>;
export const createV2Transactions = /* GraphQL */ `mutation CreateV2Transactions(
  $condition: ModelV2TransactionsConditionInput
  $input: CreateV2TransactionsInput!
) {
  createV2Transactions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2TransactionsMutationVariables,
  APITypes.CreateV2TransactionsMutation
>;
export const createV2UserPermissions = /* GraphQL */ `mutation CreateV2UserPermissions(
  $condition: ModelV2UserPermissionsConditionInput
  $input: CreateV2UserPermissionsInput!
) {
  createV2UserPermissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2UserPermissionsMutationVariables,
  APITypes.CreateV2UserPermissionsMutation
>;
export const createV2Users = /* GraphQL */ `mutation CreateV2Users(
  $condition: ModelV2UsersConditionInput
  $input: CreateV2UsersInput!
) {
  createV2Users(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateV2UsersMutationVariables,
  APITypes.CreateV2UsersMutation
>;
export const deleteV2Action = /* GraphQL */ `mutation DeleteV2Action(
  $condition: ModelV2ActionConditionInput
  $input: DeleteV2ActionInput!
) {
  deleteV2Action(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ActionMutationVariables,
  APITypes.DeleteV2ActionMutation
>;
export const deleteV2CommentTickets = /* GraphQL */ `mutation DeleteV2CommentTickets(
  $condition: ModelV2CommentTicketsConditionInput
  $input: DeleteV2CommentTicketsInput!
) {
  deleteV2CommentTickets(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2CommentTicketsMutationVariables,
  APITypes.DeleteV2CommentTicketsMutation
>;
export const deleteV2Correlatives = /* GraphQL */ `mutation DeleteV2Correlatives(
  $condition: ModelV2CorrelativesConditionInput
  $input: DeleteV2CorrelativesInput!
) {
  deleteV2Correlatives(condition: $condition, input: $input) {
    correlative
    createdAt
    id
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteV2CorrelativesMutationVariables,
  APITypes.DeleteV2CorrelativesMutation
>;
export const deleteV2Customer = /* GraphQL */ `mutation DeleteV2Customer(
  $condition: ModelV2CustomerConditionInput
  $input: DeleteV2CustomerInput!
) {
  deleteV2Customer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2CustomerMutationVariables,
  APITypes.DeleteV2CustomerMutation
>;
export const deleteV2CustomerAction = /* GraphQL */ `mutation DeleteV2CustomerAction(
  $condition: ModelV2CustomerActionConditionInput
  $input: DeleteV2CustomerActionInput!
) {
  deleteV2CustomerAction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2CustomerActionMutationVariables,
  APITypes.DeleteV2CustomerActionMutation
>;
export const deleteV2EmailSend = /* GraphQL */ `mutation DeleteV2EmailSend(
  $condition: ModelV2EmailSendConditionInput
  $input: DeleteV2EmailSendInput!
) {
  deleteV2EmailSend(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2EmailSendMutationVariables,
  APITypes.DeleteV2EmailSendMutation
>;
export const deleteV2GmailInbox = /* GraphQL */ `mutation DeleteV2GmailInbox(
  $condition: ModelV2GmailInboxConditionInput
  $input: DeleteV2GmailInboxInput!
) {
  deleteV2GmailInbox(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2GmailInboxMutationVariables,
  APITypes.DeleteV2GmailInboxMutation
>;
export const deleteV2Managers = /* GraphQL */ `mutation DeleteV2Managers(
  $condition: ModelV2ManagersConditionInput
  $input: DeleteV2ManagersInput!
) {
  deleteV2Managers(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ManagersMutationVariables,
  APITypes.DeleteV2ManagersMutation
>;
export const deleteV2Message = /* GraphQL */ `mutation DeleteV2Message(
  $condition: ModelV2MessageConditionInput
  $input: DeleteV2MessageInput!
) {
  deleteV2Message(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2MessageMutationVariables,
  APITypes.DeleteV2MessageMutation
>;
export const deleteV2Metadata = /* GraphQL */ `mutation DeleteV2Metadata(
  $condition: ModelV2MetadataConditionInput
  $input: DeleteV2MetadataInput!
) {
  deleteV2Metadata(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2MetadataMutationVariables,
  APITypes.DeleteV2MetadataMutation
>;
export const deleteV2Parameters = /* GraphQL */ `mutation DeleteV2Parameters(
  $condition: ModelV2ParametersConditionInput
  $input: DeleteV2ParametersInput!
) {
  deleteV2Parameters(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ParametersMutationVariables,
  APITypes.DeleteV2ParametersMutation
>;
export const deleteV2ParametersEnc = /* GraphQL */ `mutation DeleteV2ParametersEnc(
  $condition: ModelV2ParametersEncConditionInput
  $input: DeleteV2ParametersEncInput!
) {
  deleteV2ParametersEnc(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ParametersEncMutationVariables,
  APITypes.DeleteV2ParametersEncMutation
>;
export const deleteV2PaymentTransactions = /* GraphQL */ `mutation DeleteV2PaymentTransactions(
  $condition: ModelV2PaymentTransactionsConditionInput
  $input: DeleteV2PaymentTransactionsInput!
) {
  deleteV2PaymentTransactions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2PaymentTransactionsMutationVariables,
  APITypes.DeleteV2PaymentTransactionsMutation
>;
export const deleteV2Permissions = /* GraphQL */ `mutation DeleteV2Permissions(
  $condition: ModelV2PermissionsConditionInput
  $input: DeleteV2PermissionsInput!
) {
  deleteV2Permissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2PermissionsMutationVariables,
  APITypes.DeleteV2PermissionsMutation
>;
export const deleteV2Product = /* GraphQL */ `mutation DeleteV2Product(
  $condition: ModelV2ProductConditionInput
  $input: DeleteV2ProductInput!
) {
  deleteV2Product(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ProductMutationVariables,
  APITypes.DeleteV2ProductMutation
>;
export const deleteV2ProfitCenter = /* GraphQL */ `mutation DeleteV2ProfitCenter(
  $condition: ModelV2ProfitCenterConditionInput
  $input: DeleteV2ProfitCenterInput!
) {
  deleteV2ProfitCenter(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ProfitCenterMutationVariables,
  APITypes.DeleteV2ProfitCenterMutation
>;
export const deleteV2Relationship = /* GraphQL */ `mutation DeleteV2Relationship(
  $condition: ModelV2RelationshipConditionInput
  $input: DeleteV2RelationshipInput!
) {
  deleteV2Relationship(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2RelationshipMutationVariables,
  APITypes.DeleteV2RelationshipMutation
>;
export const deleteV2RolPermissions = /* GraphQL */ `mutation DeleteV2RolPermissions(
  $condition: ModelV2RolPermissionsConditionInput
  $input: DeleteV2RolPermissionsInput!
) {
  deleteV2RolPermissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2RolPermissionsMutationVariables,
  APITypes.DeleteV2RolPermissionsMutation
>;
export const deleteV2Roles = /* GraphQL */ `mutation DeleteV2Roles(
  $condition: ModelV2RolesConditionInput
  $input: DeleteV2RolesInput!
) {
  deleteV2Roles(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2RolesMutationVariables,
  APITypes.DeleteV2RolesMutation
>;
export const deleteV2SellersCommission = /* GraphQL */ `mutation DeleteV2SellersCommission(
  $condition: ModelV2SellersCommissionConditionInput
  $input: DeleteV2SellersCommissionInput!
) {
  deleteV2SellersCommission(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2SellersCommissionMutationVariables,
  APITypes.DeleteV2SellersCommissionMutation
>;
export const deleteV2SentEmail = /* GraphQL */ `mutation DeleteV2SentEmail(
  $condition: ModelV2SentEmailConditionInput
  $input: DeleteV2SentEmailInput!
) {
  deleteV2SentEmail(condition: $condition, input: $input) {
    body
    createdAt
    emailState
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteV2SentEmailMutationVariables,
  APITypes.DeleteV2SentEmailMutation
>;
export const deleteV2ShoppingCart = /* GraphQL */ `mutation DeleteV2ShoppingCart(
  $condition: ModelV2ShoppingCartConditionInput
  $input: DeleteV2ShoppingCartInput!
) {
  deleteV2ShoppingCart(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ShoppingCartMutationVariables,
  APITypes.DeleteV2ShoppingCartMutation
>;
export const deleteV2ShoppingCartDetail = /* GraphQL */ `mutation DeleteV2ShoppingCartDetail(
  $condition: ModelV2ShoppingCartDetailConditionInput
  $input: DeleteV2ShoppingCartDetailInput!
) {
  deleteV2ShoppingCartDetail(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2ShoppingCartDetailMutationVariables,
  APITypes.DeleteV2ShoppingCartDetailMutation
>;
export const deleteV2Supplier = /* GraphQL */ `mutation DeleteV2Supplier(
  $condition: ModelV2SupplierConditionInput
  $input: DeleteV2SupplierInput!
) {
  deleteV2Supplier(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2SupplierMutationVariables,
  APITypes.DeleteV2SupplierMutation
>;
export const deleteV2SupportTicket = /* GraphQL */ `mutation DeleteV2SupportTicket(
  $condition: ModelV2SupportTicketConditionInput
  $input: DeleteV2SupportTicketInput!
) {
  deleteV2SupportTicket(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2SupportTicketMutationVariables,
  APITypes.DeleteV2SupportTicketMutation
>;
export const deleteV2TicketComment = /* GraphQL */ `mutation DeleteV2TicketComment(
  $condition: ModelV2TicketCommentConditionInput
  $input: DeleteV2TicketCommentInput!
) {
  deleteV2TicketComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2TicketCommentMutationVariables,
  APITypes.DeleteV2TicketCommentMutation
>;
export const deleteV2TicketUser = /* GraphQL */ `mutation DeleteV2TicketUser(
  $condition: ModelV2TicketUserConditionInput
  $input: DeleteV2TicketUserInput!
) {
  deleteV2TicketUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2TicketUserMutationVariables,
  APITypes.DeleteV2TicketUserMutation
>;
export const deleteV2Transactions = /* GraphQL */ `mutation DeleteV2Transactions(
  $condition: ModelV2TransactionsConditionInput
  $input: DeleteV2TransactionsInput!
) {
  deleteV2Transactions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2TransactionsMutationVariables,
  APITypes.DeleteV2TransactionsMutation
>;
export const deleteV2UserPermissions = /* GraphQL */ `mutation DeleteV2UserPermissions(
  $condition: ModelV2UserPermissionsConditionInput
  $input: DeleteV2UserPermissionsInput!
) {
  deleteV2UserPermissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2UserPermissionsMutationVariables,
  APITypes.DeleteV2UserPermissionsMutation
>;
export const deleteV2Users = /* GraphQL */ `mutation DeleteV2Users(
  $condition: ModelV2UsersConditionInput
  $input: DeleteV2UsersInput!
) {
  deleteV2Users(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteV2UsersMutationVariables,
  APITypes.DeleteV2UsersMutation
>;
export const updateV2Action = /* GraphQL */ `mutation UpdateV2Action(
  $condition: ModelV2ActionConditionInput
  $input: UpdateV2ActionInput!
) {
  updateV2Action(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ActionMutationVariables,
  APITypes.UpdateV2ActionMutation
>;
export const updateV2CommentTickets = /* GraphQL */ `mutation UpdateV2CommentTickets(
  $condition: ModelV2CommentTicketsConditionInput
  $input: UpdateV2CommentTicketsInput!
) {
  updateV2CommentTickets(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2CommentTicketsMutationVariables,
  APITypes.UpdateV2CommentTicketsMutation
>;
export const updateV2Correlatives = /* GraphQL */ `mutation UpdateV2Correlatives(
  $condition: ModelV2CorrelativesConditionInput
  $input: UpdateV2CorrelativesInput!
) {
  updateV2Correlatives(condition: $condition, input: $input) {
    correlative
    createdAt
    id
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateV2CorrelativesMutationVariables,
  APITypes.UpdateV2CorrelativesMutation
>;
export const updateV2Customer = /* GraphQL */ `mutation UpdateV2Customer(
  $condition: ModelV2CustomerConditionInput
  $input: UpdateV2CustomerInput!
) {
  updateV2Customer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2CustomerMutationVariables,
  APITypes.UpdateV2CustomerMutation
>;
export const updateV2CustomerAction = /* GraphQL */ `mutation UpdateV2CustomerAction(
  $condition: ModelV2CustomerActionConditionInput
  $input: UpdateV2CustomerActionInput!
) {
  updateV2CustomerAction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2CustomerActionMutationVariables,
  APITypes.UpdateV2CustomerActionMutation
>;
export const updateV2EmailSend = /* GraphQL */ `mutation UpdateV2EmailSend(
  $condition: ModelV2EmailSendConditionInput
  $input: UpdateV2EmailSendInput!
) {
  updateV2EmailSend(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2EmailSendMutationVariables,
  APITypes.UpdateV2EmailSendMutation
>;
export const updateV2GmailInbox = /* GraphQL */ `mutation UpdateV2GmailInbox(
  $condition: ModelV2GmailInboxConditionInput
  $input: UpdateV2GmailInboxInput!
) {
  updateV2GmailInbox(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2GmailInboxMutationVariables,
  APITypes.UpdateV2GmailInboxMutation
>;
export const updateV2Managers = /* GraphQL */ `mutation UpdateV2Managers(
  $condition: ModelV2ManagersConditionInput
  $input: UpdateV2ManagersInput!
) {
  updateV2Managers(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ManagersMutationVariables,
  APITypes.UpdateV2ManagersMutation
>;
export const updateV2Message = /* GraphQL */ `mutation UpdateV2Message(
  $condition: ModelV2MessageConditionInput
  $input: UpdateV2MessageInput!
) {
  updateV2Message(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2MessageMutationVariables,
  APITypes.UpdateV2MessageMutation
>;
export const updateV2Metadata = /* GraphQL */ `mutation UpdateV2Metadata(
  $condition: ModelV2MetadataConditionInput
  $input: UpdateV2MetadataInput!
) {
  updateV2Metadata(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2MetadataMutationVariables,
  APITypes.UpdateV2MetadataMutation
>;
export const updateV2Parameters = /* GraphQL */ `mutation UpdateV2Parameters(
  $condition: ModelV2ParametersConditionInput
  $input: UpdateV2ParametersInput!
) {
  updateV2Parameters(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ParametersMutationVariables,
  APITypes.UpdateV2ParametersMutation
>;
export const updateV2ParametersEnc = /* GraphQL */ `mutation UpdateV2ParametersEnc(
  $condition: ModelV2ParametersEncConditionInput
  $input: UpdateV2ParametersEncInput!
) {
  updateV2ParametersEnc(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ParametersEncMutationVariables,
  APITypes.UpdateV2ParametersEncMutation
>;
export const updateV2PaymentTransactions = /* GraphQL */ `mutation UpdateV2PaymentTransactions(
  $condition: ModelV2PaymentTransactionsConditionInput
  $input: UpdateV2PaymentTransactionsInput!
) {
  updateV2PaymentTransactions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2PaymentTransactionsMutationVariables,
  APITypes.UpdateV2PaymentTransactionsMutation
>;
export const updateV2Permissions = /* GraphQL */ `mutation UpdateV2Permissions(
  $condition: ModelV2PermissionsConditionInput
  $input: UpdateV2PermissionsInput!
) {
  updateV2Permissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2PermissionsMutationVariables,
  APITypes.UpdateV2PermissionsMutation
>;
export const updateV2Product = /* GraphQL */ `mutation UpdateV2Product(
  $condition: ModelV2ProductConditionInput
  $input: UpdateV2ProductInput!
) {
  updateV2Product(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ProductMutationVariables,
  APITypes.UpdateV2ProductMutation
>;
export const updateV2ProfitCenter = /* GraphQL */ `mutation UpdateV2ProfitCenter(
  $condition: ModelV2ProfitCenterConditionInput
  $input: UpdateV2ProfitCenterInput!
) {
  updateV2ProfitCenter(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ProfitCenterMutationVariables,
  APITypes.UpdateV2ProfitCenterMutation
>;
export const updateV2Relationship = /* GraphQL */ `mutation UpdateV2Relationship(
  $condition: ModelV2RelationshipConditionInput
  $input: UpdateV2RelationshipInput!
) {
  updateV2Relationship(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2RelationshipMutationVariables,
  APITypes.UpdateV2RelationshipMutation
>;
export const updateV2RolPermissions = /* GraphQL */ `mutation UpdateV2RolPermissions(
  $condition: ModelV2RolPermissionsConditionInput
  $input: UpdateV2RolPermissionsInput!
) {
  updateV2RolPermissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2RolPermissionsMutationVariables,
  APITypes.UpdateV2RolPermissionsMutation
>;
export const updateV2Roles = /* GraphQL */ `mutation UpdateV2Roles(
  $condition: ModelV2RolesConditionInput
  $input: UpdateV2RolesInput!
) {
  updateV2Roles(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2RolesMutationVariables,
  APITypes.UpdateV2RolesMutation
>;
export const updateV2SellersCommission = /* GraphQL */ `mutation UpdateV2SellersCommission(
  $condition: ModelV2SellersCommissionConditionInput
  $input: UpdateV2SellersCommissionInput!
) {
  updateV2SellersCommission(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2SellersCommissionMutationVariables,
  APITypes.UpdateV2SellersCommissionMutation
>;
export const updateV2SentEmail = /* GraphQL */ `mutation UpdateV2SentEmail(
  $condition: ModelV2SentEmailConditionInput
  $input: UpdateV2SentEmailInput!
) {
  updateV2SentEmail(condition: $condition, input: $input) {
    body
    createdAt
    emailState
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateV2SentEmailMutationVariables,
  APITypes.UpdateV2SentEmailMutation
>;
export const updateV2ShoppingCart = /* GraphQL */ `mutation UpdateV2ShoppingCart(
  $condition: ModelV2ShoppingCartConditionInput
  $input: UpdateV2ShoppingCartInput!
) {
  updateV2ShoppingCart(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ShoppingCartMutationVariables,
  APITypes.UpdateV2ShoppingCartMutation
>;
export const updateV2ShoppingCartDetail = /* GraphQL */ `mutation UpdateV2ShoppingCartDetail(
  $condition: ModelV2ShoppingCartDetailConditionInput
  $input: UpdateV2ShoppingCartDetailInput!
) {
  updateV2ShoppingCartDetail(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2ShoppingCartDetailMutationVariables,
  APITypes.UpdateV2ShoppingCartDetailMutation
>;
export const updateV2Supplier = /* GraphQL */ `mutation UpdateV2Supplier(
  $condition: ModelV2SupplierConditionInput
  $input: UpdateV2SupplierInput!
) {
  updateV2Supplier(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2SupplierMutationVariables,
  APITypes.UpdateV2SupplierMutation
>;
export const updateV2SupportTicket = /* GraphQL */ `mutation UpdateV2SupportTicket(
  $condition: ModelV2SupportTicketConditionInput
  $input: UpdateV2SupportTicketInput!
) {
  updateV2SupportTicket(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2SupportTicketMutationVariables,
  APITypes.UpdateV2SupportTicketMutation
>;
export const updateV2TicketComment = /* GraphQL */ `mutation UpdateV2TicketComment(
  $condition: ModelV2TicketCommentConditionInput
  $input: UpdateV2TicketCommentInput!
) {
  updateV2TicketComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2TicketCommentMutationVariables,
  APITypes.UpdateV2TicketCommentMutation
>;
export const updateV2TicketUser = /* GraphQL */ `mutation UpdateV2TicketUser(
  $condition: ModelV2TicketUserConditionInput
  $input: UpdateV2TicketUserInput!
) {
  updateV2TicketUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2TicketUserMutationVariables,
  APITypes.UpdateV2TicketUserMutation
>;
export const updateV2Transactions = /* GraphQL */ `mutation UpdateV2Transactions(
  $condition: ModelV2TransactionsConditionInput
  $input: UpdateV2TransactionsInput!
) {
  updateV2Transactions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2TransactionsMutationVariables,
  APITypes.UpdateV2TransactionsMutation
>;
export const updateV2UserPermissions = /* GraphQL */ `mutation UpdateV2UserPermissions(
  $condition: ModelV2UserPermissionsConditionInput
  $input: UpdateV2UserPermissionsInput!
) {
  updateV2UserPermissions(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2UserPermissionsMutationVariables,
  APITypes.UpdateV2UserPermissionsMutation
>;
export const updateV2Users = /* GraphQL */ `mutation UpdateV2Users(
  $condition: ModelV2UsersConditionInput
  $input: UpdateV2UsersInput!
) {
  updateV2Users(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateV2UsersMutationVariables,
  APITypes.UpdateV2UsersMutation
>;
export const v2CognitoCreateUser = /* GraphQL */ `mutation V2CognitoCreateUser(
  $contactPhone: String
  $email: String!
  $isEmployed: Boolean
  $name: String!
  $roleId: String
  $temporaryPassword: String!
) {
  v2CognitoCreateUser(
    contactPhone: $contactPhone
    email: $email
    isEmployed: $isEmployed
    name: $name
    roleId: $roleId
    temporaryPassword: $temporaryPassword
  ) {
    email
    name
    roleId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.V2CognitoCreateUserMutationVariables,
  APITypes.V2CognitoCreateUserMutation
>;
export const v2CognitoSetPassword = /* GraphQL */ `mutation V2CognitoSetPassword(
  $email: String!
  $password: String!
  $permanent: Boolean
) {
  v2CognitoSetPassword(
    email: $email
    password: $password
    permanent: $permanent
  )
}
` as GeneratedMutation<
  APITypes.V2CognitoSetPasswordMutationVariables,
  APITypes.V2CognitoSetPasswordMutation
>;
export const v2CognitoSetStatus = /* GraphQL */ `mutation V2CognitoSetStatus($email: String!, $enabled: Boolean!) {
  v2CognitoSetStatus(email: $email, enabled: $enabled)
}
` as GeneratedMutation<
  APITypes.V2CognitoSetStatusMutationVariables,
  APITypes.V2CognitoSetStatusMutation
>;
export const v2GmailReply = /* GraphQL */ `mutation V2GmailReply(
  $body: String!
  $fromAccount: String!
  $inReplyToMessageId: String
  $subject: String!
  $threadId: String
  $toEmail: String!
) {
  v2GmailReply(
    body: $body
    fromAccount: $fromAccount
    inReplyToMessageId: $inReplyToMessageId
    subject: $subject
    threadId: $threadId
    toEmail: $toEmail
  ) {
    error
    messageId
    success
    __typename
  }
}
` as GeneratedMutation<
  APITypes.V2GmailReplyMutationVariables,
  APITypes.V2GmailReplyMutation
>;
export const v2GmailSync = /* GraphQL */ `mutation V2GmailSync {
  v2GmailSync
}
` as GeneratedMutation<
  APITypes.V2GmailSyncMutationVariables,
  APITypes.V2GmailSyncMutation
>;
export const v2SendEmail = /* GraphQL */ `mutation V2SendEmail($templateParams: AWSJSON!, $type: String!) {
  v2SendEmail(templateParams: $templateParams, type: $type)
}
` as GeneratedMutation<
  APITypes.V2SendEmailMutationVariables,
  APITypes.V2SendEmailMutation
>;
export const v2SendWhatsapp = /* GraphQL */ `mutation V2SendWhatsapp(
  $message: String!
  $name: String!
  $phoneNumber: String!
) {
  v2SendWhatsapp(message: $message, name: $name, phoneNumber: $phoneNumber)
}
` as GeneratedMutation<
  APITypes.V2SendWhatsappMutationVariables,
  APITypes.V2SendWhatsappMutation
>;
export const v2WebpayCommit = /* GraphQL */ `mutation V2WebpayCommit($token: String!) {
  v2WebpayCommit(token: $token) {
    accounting_date
    amount
    authorization_code
    buy_order
    card_number
    installments_amount
    installments_number
    payment_type_code
    response_code
    session_id
    status
    transaction_date
    vci
    __typename
  }
}
` as GeneratedMutation<
  APITypes.V2WebpayCommitMutationVariables,
  APITypes.V2WebpayCommitMutation
>;
export const v2WebpayStart = /* GraphQL */ `mutation V2WebpayStart(
  $amount: Float!
  $cartId: String!
  $glosa: String!
  $userId: String!
) {
  v2WebpayStart(
    amount: $amount
    cartId: $cartId
    glosa: $glosa
    userId: $userId
  ) {
    orden
    token
    url
    __typename
  }
}
` as GeneratedMutation<
  APITypes.V2WebpayStartMutationVariables,
  APITypes.V2WebpayStartMutation
>;
export const v2WebpayStatus = /* GraphQL */ `mutation V2WebpayStatus($token: String!) {
  v2WebpayStatus(token: $token) {
    accounting_date
    amount
    authorization_code
    buy_order
    card_number
    installments_amount
    installments_number
    payment_type_code
    response_code
    session_id
    status
    transaction_date
    vci
    __typename
  }
}
` as GeneratedMutation<
  APITypes.V2WebpayStatusMutationVariables,
  APITypes.V2WebpayStatusMutation
>;
