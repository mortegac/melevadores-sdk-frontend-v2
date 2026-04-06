/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type v2Action = {
  __typename: "v2Action",
  createdAt: string,
  customer?: v2Customer | null,
  customerId: string,
  id: string,
  message: string,
  status: string,
  updatedAt: string,
  urlDocument?: string | null,
  userId?: string | null,
};

export type v2Customer = {
  __typename: "v2Customer",
  actions?: Modelv2CustomerActionConnection | null,
  createdAt: string,
  email: string,
  id: string,
  inboxItems?: Modelv2GmailInboxConnection | null,
  messages?: Modelv2MessageConnection | null,
  name: string,
  phone: string,
  phone2?: string | null,
  requestDate?: string | null,
  status?: string | null,
  updatedAt: string,
  v2Actions?: Modelv2ActionConnection | null,
};

export type Modelv2CustomerActionConnection = {
  __typename: "Modelv2CustomerActionConnection",
  items:  Array<v2CustomerAction | null >,
  nextToken?: string | null,
};

export type v2CustomerAction = {
  __typename: "v2CustomerAction",
  createdAt: string,
  customer?: v2Customer | null,
  customerId: string,
  date: string,
  detail: string,
  docUrl?: string | null,
  id: string,
  status: string,
  updatedAt: string,
  userId?: string | null,
};

export type Modelv2GmailInboxConnection = {
  __typename: "Modelv2GmailInboxConnection",
  items:  Array<v2GmailInbox | null >,
  nextToken?: string | null,
};

export type v2GmailInbox = {
  __typename: "v2GmailInbox",
  attachments?: string | null,
  bodyHtml?: string | null,
  bodyText?: string | null,
  createdAt: string,
  customer?: v2Customer | null,
  customerId?: string | null,
  dateSent: string,
  dateStr: string,
  fromEmail?: string | null,
  fromName?: string | null,
  gmailAccount: string,
  hasAttachments?: boolean | null,
  id: string,
  isRead?: boolean | null,
  labels?: Array< string | null > | null,
  messageId: string,
  snippet?: string | null,
  source?: string | null,
  subject?: string | null,
  threadId: string,
  toEmails?: Array< string | null > | null,
  type?: string | null,
  updatedAt: string,
  user?: v2Users | null,
  userId?: string | null,
};

export type v2Users = {
  __typename: "v2Users",
  city?: string | null,
  contactPhone?: string | null,
  country?: string | null,
  createdAt: string,
  email: string,
  emailSend?: Modelv2EmailSendConnection | null,
  firstContact?: boolean | null,
  gmailMessages?: Modelv2GmailInboxConnection | null,
  id: string,
  ig?: string | null,
  isAcademyStudent?: boolean | null,
  isActive?: boolean | null,
  isEmployed?: boolean | null,
  latitude?: number | null,
  longitude?: number | null,
  name: string,
  paymentTransactions?: Modelv2PaymentTransactionsConnection | null,
  relationships?: Modelv2RelationshipConnection | null,
  role?: v2Roles | null,
  roleId?: string | null,
  salesCommission?: number | null,
  sellersCommissions?: Modelv2SellersCommissionConnection | null,
  shoppingCart?: Modelv2ShoppingCartConnection | null,
  shoppingCartDetails?: Modelv2ShoppingCartDetailConnection | null,
  shoppingCartSeller?: Modelv2ShoppingCartConnection | null,
  state?: string | null,
  streetAddress?: string | null,
  ticketUsers?: Modelv2TicketUserConnection | null,
  updatedAt: string,
  userPermissions?: Modelv2UserPermissionsConnection | null,
  validated?: boolean | null,
  zipCode?: string | null,
  zoomLevel?: number | null,
};

export type Modelv2EmailSendConnection = {
  __typename: "Modelv2EmailSendConnection",
  items:  Array<v2EmailSend | null >,
  nextToken?: string | null,
};

export type v2EmailSend = {
  __typename: "v2EmailSend",
  contentEmail?: string | null,
  contentMessage?: string | null,
  createdAt: string,
  date?: string | null,
  email?: string | null,
  emailState?: v2EmailState | null,
  enrollmentId?: string | null,
  id: string,
  phone?: string | null,
  phoneState?: v2EmailState | null,
  privateEnrollmentId?: string | null,
  studentId: string,
  type: v2TypeOfEmail,
  typeSend: v2TypeSend,
  updatedAt: string,
  userSend?: v2Users | null,
  userSendId: string,
};

export enum v2EmailState {
  BOUNCE = "BOUNCE",
  CLICK = "CLICK",
  COMPLAINT = "COMPLAINT",
  DELIVERY = "DELIVERY",
  DELIVERYDELAY = "DELIVERYDELAY",
  OPEN = "OPEN",
  REJECT = "REJECT",
  RENDERING_FAILURE = "RENDERING_FAILURE",
  SEND = "SEND",
  SUBSCRIPTION = "SUBSCRIPTION",
}


export enum v2TypeOfEmail {
  NOSESSION = "NOSESSION",
  UPDATE_SESSION = "UPDATE_SESSION",
  WELCOME = "WELCOME",
  WHATSAPP = "WHATSAPP",
  WHATSAPP_LINK_PAGO = "WHATSAPP_LINK_PAGO",
  WHATSAPP_LINK_RENOVACION = "WHATSAPP_LINK_RENOVACION",
}


export enum v2TypeSend {
  EMAIL = "EMAIL",
  NONE = "NONE",
  WHATSAPP = "WHATSAPP",
}


export type Modelv2PaymentTransactionsConnection = {
  __typename: "Modelv2PaymentTransactionsConnection",
  items:  Array<v2PaymentTransactions | null >,
  nextToken?: string | null,
};

export type v2PaymentTransactions = {
  __typename: "v2PaymentTransactions",
  accounting_date?: string | null,
  amount?: number | null,
  authorization_code?: string | null,
  buy_order?: string | null,
  card_detail?: string | null,
  card_number?: string | null,
  createdAt: string,
  day: string,
  glosa: string,
  hasRefund?: boolean | null,
  hour?: string | null,
  id: string,
  installments_amount?: string | null,
  installments_number?: string | null,
  month: string,
  payment_type_code?: string | null,
  response_code?: string | null,
  session_id?: string | null,
  shoppingCart?: v2ShoppingCart | null,
  shoppingCartId?: string | null,
  status?: string | null,
  token?: string | null,
  transaction_date?: string | null,
  updatedAt: string,
  urlWebpay?: string | null,
  users?: v2Users | null,
  usersId?: string | null,
  vci?: string | null,
  year?: string | null,
};

export type v2ShoppingCart = {
  __typename: "v2ShoppingCart",
  cartDetails?: Modelv2ShoppingCartDetailConnection | null,
  createdAt: string,
  id: string,
  paymentTransactions?: Modelv2PaymentTransactionsConnection | null,
  seller?: v2Users | null,
  sellerId: string,
  sellersCommission?: v2SellersCommission | null,
  sellersCommissionId?: string | null,
  status?: string | null,
  totalPrice: number,
  updatedAt: string,
  user?: v2Users | null,
  userId: string,
};

export type Modelv2ShoppingCartDetailConnection = {
  __typename: "Modelv2ShoppingCartDetailConnection",
  items:  Array<v2ShoppingCartDetail | null >,
  nextToken?: string | null,
};

export type v2ShoppingCartDetail = {
  __typename: "v2ShoppingCartDetail",
  academyEnrollmentId?: string | null,
  amount: number,
  cart?: v2ShoppingCart | null,
  cartId: string,
  createdAt: string,
  createdBy?: v2Users | null,
  createdById?: string | null,
  detail: string,
  enrollmentId?: string | null,
  id: string,
  privateEnrollmentId?: string | null,
  quantity: number,
  type: v2TypeDetail,
  updatedAt: string,
  wasDeleted?: boolean | null,
};

export enum v2TypeDetail {
  ACADEMY = "ACADEMY",
  COURSE_REGISTRATION = "COURSE_REGISTRATION",
  DISCOUNT = "DISCOUNT",
  ENROLLMENTS = "ENROLLMENTS",
  PRODUCTS = "PRODUCTS",
  SERVICES = "SERVICES",
}


export type v2SellersCommission = {
  __typename: "v2SellersCommission",
  amount?: number | null,
  createdAt: string,
  description?: string | null,
  id: string,
  paymentAmount?: number | null,
  salesCommission?: number | null,
  shoppingCart?: v2ShoppingCart | null,
  status: v2StatusCommission,
  type: v2TypeDetail,
  updatedAt: string,
  users?: v2Users | null,
  usersId?: string | null,
};

export enum v2StatusCommission {
  CREATED = "CREATED",
  PAID = "PAID",
  TO_PAY = "TO_PAY",
}


export type Modelv2RelationshipConnection = {
  __typename: "Modelv2RelationshipConnection",
  items:  Array<v2Relationship | null >,
  nextToken?: string | null,
};

export type v2Relationship = {
  __typename: "v2Relationship",
  createdAt: string,
  id: string,
  relationType: v2RelationType,
  studentId: string,
  updatedAt: string,
  user?: v2Users | null,
  userId: string,
};

export enum v2RelationType {
  AUNT = "AUNT",
  COUSIN = "COUSIN",
  FAMILYS_FRIEND = "FAMILYS_FRIEND",
  FATHER = "FATHER",
  GRANDFATHER = "GRANDFATHER",
  GRANDMOTHER = "GRANDMOTHER",
  MOTHER = "MOTHER",
  NONE = "NONE",
  OTHER = "OTHER",
  UNCLE = "UNCLE",
}


export type v2Roles = {
  __typename: "v2Roles",
  createdAt: string,
  displayName: string,
  icon: string,
  id: string,
  name: string,
  rolPermissions?: Modelv2RolPermissionsConnection | null,
  updatedAt: string,
  users?: Modelv2UsersConnection | null,
};

export type Modelv2RolPermissionsConnection = {
  __typename: "Modelv2RolPermissionsConnection",
  items:  Array<v2RolPermissions | null >,
  nextToken?: string | null,
};

export type v2RolPermissions = {
  __typename: "v2RolPermissions",
  createdAt: string,
  id: string,
  permission?: v2Permissions | null,
  permissionId: string,
  role?: v2Roles | null,
  roleId: string,
  updatedAt: string,
};

export type v2Permissions = {
  __typename: "v2Permissions",
  Padre?: v2Permissions | null,
  Submenu?: Modelv2PermissionsConnection | null,
  createdAt: string,
  displayName: string,
  icon: string,
  id: string,
  isLeaf?: boolean | null,
  isVisible?: boolean | null,
  name: string,
  order?: number | null,
  padreId?: string | null,
  rolPermissions?: Modelv2RolPermissionsConnection | null,
  updatedAt: string,
  userPermissions?: Modelv2UserPermissionsConnection | null,
};

export type Modelv2PermissionsConnection = {
  __typename: "Modelv2PermissionsConnection",
  items:  Array<v2Permissions | null >,
  nextToken?: string | null,
};

export type Modelv2UserPermissionsConnection = {
  __typename: "Modelv2UserPermissionsConnection",
  items:  Array<v2UserPermissions | null >,
  nextToken?: string | null,
};

export type v2UserPermissions = {
  __typename: "v2UserPermissions",
  createdAt: string,
  id: string,
  permission?: v2Permissions | null,
  permissionId: string,
  updatedAt: string,
  user?: v2Users | null,
  userId: string,
};

export type Modelv2UsersConnection = {
  __typename: "Modelv2UsersConnection",
  items:  Array<v2Users | null >,
  nextToken?: string | null,
};

export type Modelv2SellersCommissionConnection = {
  __typename: "Modelv2SellersCommissionConnection",
  items:  Array<v2SellersCommission | null >,
  nextToken?: string | null,
};

export type Modelv2ShoppingCartConnection = {
  __typename: "Modelv2ShoppingCartConnection",
  items:  Array<v2ShoppingCart | null >,
  nextToken?: string | null,
};

export type Modelv2TicketUserConnection = {
  __typename: "Modelv2TicketUserConnection",
  items:  Array<v2TicketUser | null >,
  nextToken?: string | null,
};

export type v2TicketUser = {
  __typename: "v2TicketUser",
  createdAt: string,
  id: string,
  ticket?: v2SupportTicket | null,
  ticketId: string,
  updatedAt: string,
  user?: v2Users | null,
  userId: string,
};

export type v2SupportTicket = {
  __typename: "v2SupportTicket",
  createdAt: string,
  date: string,
  day: string,
  description: string,
  email: string,
  id: string,
  lastModificationUser?: string | null,
  month: string,
  name: string,
  phoneNumber: string,
  reason?: v2reasonType | null,
  statusTicket?: v2statusTicketType | null,
  studentId?: string | null,
  ticketComments?: Modelv2TicketCommentConnection | null,
  ticketUsers?: Modelv2TicketUserConnection | null,
  updatedAt: string,
  year?: string | null,
};

export enum v2reasonType {
  none = "none",
  other = "other",
  payment_problem = "payment_problem",
  return_session = "return_session",
}


export enum v2statusTicketType {
  does_not_apply = "does_not_apply",
  in_progress = "in_progress",
  open = "open",
  resolved = "resolved",
}


export type Modelv2TicketCommentConnection = {
  __typename: "Modelv2TicketCommentConnection",
  items:  Array<v2TicketComment | null >,
  nextToken?: string | null,
};

export type v2TicketComment = {
  __typename: "v2TicketComment",
  comment?: v2CommentTickets | null,
  commentId: string,
  createdAt: string,
  id: string,
  ticket?: v2SupportTicket | null,
  ticketId: string,
  updatedAt: string,
};

export type v2CommentTickets = {
  __typename: "v2CommentTickets",
  createdAt: string,
  description: string,
  id: string,
  statusModificationIdUser?: string | null,
  statusModificationUser?: string | null,
  ticketComments?: Modelv2TicketCommentConnection | null,
  updatedAt: string,
};

export type Modelv2MessageConnection = {
  __typename: "Modelv2MessageConnection",
  items:  Array<v2Message | null >,
  nextToken?: string | null,
};

export type v2Message = {
  __typename: "v2Message",
  createdAt: string,
  customer?: v2Customer | null,
  customerId: string,
  id: string,
  message: string,
  source: string,
  type?: string | null,
  updatedAt: string,
};

export type Modelv2ActionConnection = {
  __typename: "Modelv2ActionConnection",
  items:  Array<v2Action | null >,
  nextToken?: string | null,
};

export type v2Correlatives = {
  __typename: "v2Correlatives",
  correlative?: number | null,
  createdAt: string,
  id: string,
  type?: v2ParametersType | null,
  updatedAt: string,
};

export enum v2ParametersType {
  ORDER_PAYMENTTRANSACTIONS = "ORDER_PAYMENTTRANSACTIONS",
}


export type v2Managers = {
  __typename: "v2Managers",
  createdAt: string,
  email?: string | null,
  firstName?: string | null,
  id: string,
  isActive?: boolean | null,
  lastName?: string | null,
  profitCenter?: v2ProfitCenter | null,
  profitCenterID: string,
  updatedAt: string,
};

export type v2ProfitCenter = {
  __typename: "v2ProfitCenter",
  code?: string | null,
  createdAt: string,
  description?: string | null,
  id: string,
  isActive?: boolean | null,
  managerID?: string | null,
  managers?: Modelv2ManagersConnection | null,
  name?: string | null,
  parentProfitCenterID?: string | null,
  transactions?: Modelv2TransactionsConnection | null,
  updatedAt: string,
};

export type Modelv2ManagersConnection = {
  __typename: "Modelv2ManagersConnection",
  items:  Array<v2Managers | null >,
  nextToken?: string | null,
};

export type Modelv2TransactionsConnection = {
  __typename: "Modelv2TransactionsConnection",
  items:  Array<v2Transactions | null >,
  nextToken?: string | null,
};

export type v2Transactions = {
  __typename: "v2Transactions",
  amount?: number | null,
  categoryID?: string | null,
  categoryType?: v2CategoryType | null,
  createdAt: string,
  date?: string | null,
  description?: string | null,
  id: string,
  month?: string | null,
  profitCenter?: v2ProfitCenter | null,
  profitCenterID: string,
  updatedAt: string,
  year?: string | null,
};

export enum v2CategoryType {
  GASTO = "GASTO",
  INGRESO = "INGRESO",
}


export type v2Metadata = {
  __typename: "v2Metadata",
  createdAt: string,
  id: string,
  key?: string | null,
  metadata?: v2Parameters | null,
  parametersId?: string | null,
  updatedAt: string,
  value?: string | null,
};

export type v2Parameters = {
  __typename: "v2Parameters",
  country: string,
  createdAt: string,
  id: string,
  idParent?: string | null,
  label: string,
  metadata?: Modelv2MetadataConnection | null,
  typeOfParameter?: v2ParametersEnc | null,
  typeOfParameterId?: string | null,
  updatedAt: string,
  value: string,
};

export type Modelv2MetadataConnection = {
  __typename: "Modelv2MetadataConnection",
  items:  Array<v2Metadata | null >,
  nextToken?: string | null,
};

export type v2ParametersEnc = {
  __typename: "v2ParametersEnc",
  createdAt: string,
  description?: string | null,
  id: string,
  typeOfParameter?: Modelv2ParametersConnection | null,
  updatedAt: string,
};

export type Modelv2ParametersConnection = {
  __typename: "Modelv2ParametersConnection",
  items:  Array<v2Parameters | null >,
  nextToken?: string | null,
};

export type v2Product = {
  __typename: "v2Product",
  createdAt: string,
  criticalStock: number,
  currentStock: number,
  id: string,
  isActive?: boolean | null,
  name: string,
  profits: number,
  purchasePrice: number,
  sellingPrice: number,
  sku: string,
  supplier?: v2Supplier | null,
  supplierId: string,
  updatedAt: string,
};

export type v2Supplier = {
  __typename: "v2Supplier",
  address?: string | null,
  contactPerson?: string | null,
  createdAt: string,
  email?: string | null,
  id: string,
  isActive?: boolean | null,
  name: string,
  phone?: string | null,
  products?: Modelv2ProductConnection | null,
  taxId?: string | null,
  updatedAt: string,
};

export type Modelv2ProductConnection = {
  __typename: "Modelv2ProductConnection",
  items:  Array<v2Product | null >,
  nextToken?: string | null,
};

export type v2SentEmail = {
  __typename: "v2SentEmail",
  body?: string | null,
  createdAt: string,
  emailState?: v2EmailState | null,
  id: string,
  updatedAt: string,
};

export type Modelv2ActionFilterInput = {
  and?: Array< Modelv2ActionFilterInput | null > | null,
  customerId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  not?: Modelv2ActionFilterInput | null,
  or?: Array< Modelv2ActionFilterInput | null > | null,
  status?: ModelStringInput | null,
  urlDocument?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelV2ActionFilterInput = {
  and?: Array< ModelV2ActionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  not?: ModelV2ActionFilterInput | null,
  or?: Array< ModelV2ActionFilterInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  urlDocument?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelV2ActionConnection = {
  __typename: "ModelV2ActionConnection",
  items:  Array<v2Action | null >,
  nextToken?: string | null,
};

export type ModelV2CommentTicketsFilterInput = {
  and?: Array< ModelV2CommentTicketsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2CommentTicketsFilterInput | null,
  or?: Array< ModelV2CommentTicketsFilterInput | null > | null,
  statusModificationIdUser?: ModelStringInput | null,
  statusModificationUser?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2CommentTicketsConnection = {
  __typename: "ModelV2CommentTicketsConnection",
  items:  Array<v2CommentTickets | null >,
  nextToken?: string | null,
};

export type ModelV2CorrelativesFilterInput = {
  and?: Array< ModelV2CorrelativesFilterInput | null > | null,
  correlative?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2CorrelativesFilterInput | null,
  or?: Array< ModelV2CorrelativesFilterInput | null > | null,
  type?: Modelv2ParametersTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type Modelv2ParametersTypeInput = {
  eq?: v2ParametersType | null,
  ne?: v2ParametersType | null,
};

export type ModelV2CorrelativesConnection = {
  __typename: "ModelV2CorrelativesConnection",
  items:  Array<v2Correlatives | null >,
  nextToken?: string | null,
};

export type Modelv2CorrelativesFilterInput = {
  and?: Array< Modelv2CorrelativesFilterInput | null > | null,
  correlative?: ModelFloatInput | null,
  not?: Modelv2CorrelativesFilterInput | null,
  or?: Array< Modelv2CorrelativesFilterInput | null > | null,
  type?: Modelv2ParametersTypeInput | null,
};

export type Modelv2CorrelativesConnection = {
  __typename: "Modelv2CorrelativesConnection",
  items:  Array<v2Correlatives | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type Modelv2CustomerActionFilterInput = {
  and?: Array< Modelv2CustomerActionFilterInput | null > | null,
  customerId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  docUrl?: ModelStringInput | null,
  not?: Modelv2CustomerActionFilterInput | null,
  or?: Array< Modelv2CustomerActionFilterInput | null > | null,
  status?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelV2CustomerActionFilterInput = {
  and?: Array< ModelV2CustomerActionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  docUrl?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2CustomerActionFilterInput | null,
  or?: Array< ModelV2CustomerActionFilterInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelV2CustomerActionConnection = {
  __typename: "ModelV2CustomerActionConnection",
  items:  Array<v2CustomerAction | null >,
  nextToken?: string | null,
};

export type Modelv2CustomerFilterInput = {
  and?: Array< Modelv2CustomerFilterInput | null > | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: Modelv2CustomerFilterInput | null,
  or?: Array< Modelv2CustomerFilterInput | null > | null,
  phone?: ModelStringInput | null,
  phone2?: ModelStringInput | null,
  requestDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
};

export type Modelv2CustomerConnection = {
  __typename: "Modelv2CustomerConnection",
  items:  Array<v2Customer | null >,
  nextToken?: string | null,
};

export type ModelV2CustomerFilterInput = {
  and?: Array< ModelV2CustomerFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2CustomerFilterInput | null,
  or?: Array< ModelV2CustomerFilterInput | null > | null,
  phone?: ModelStringInput | null,
  phone2?: ModelStringInput | null,
  requestDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2CustomerConnection = {
  __typename: "ModelV2CustomerConnection",
  items:  Array<v2Customer | null >,
  nextToken?: string | null,
};

export type Modelv2EmailSendFilterInput = {
  and?: Array< Modelv2EmailSendFilterInput | null > | null,
  contentEmail?: ModelStringInput | null,
  contentMessage?: ModelStringInput | null,
  date?: ModelStringInput | null,
  email?: ModelStringInput | null,
  emailState?: Modelv2EmailStateInput | null,
  enrollmentId?: ModelIDInput | null,
  not?: Modelv2EmailSendFilterInput | null,
  or?: Array< Modelv2EmailSendFilterInput | null > | null,
  phone?: ModelStringInput | null,
  phoneState?: Modelv2EmailStateInput | null,
  privateEnrollmentId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  type?: Modelv2TypeOfEmailInput | null,
  typeSend?: Modelv2TypeSendInput | null,
  userSendId?: ModelIDInput | null,
};

export type Modelv2EmailStateInput = {
  eq?: v2EmailState | null,
  ne?: v2EmailState | null,
};

export type Modelv2TypeOfEmailInput = {
  eq?: v2TypeOfEmail | null,
  ne?: v2TypeOfEmail | null,
};

export type Modelv2TypeSendInput = {
  eq?: v2TypeSend | null,
  ne?: v2TypeSend | null,
};

export type ModelV2EmailSendFilterInput = {
  and?: Array< ModelV2EmailSendFilterInput | null > | null,
  contentEmail?: ModelStringInput | null,
  contentMessage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  email?: ModelStringInput | null,
  emailState?: Modelv2EmailStateInput | null,
  enrollmentId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2EmailSendFilterInput | null,
  or?: Array< ModelV2EmailSendFilterInput | null > | null,
  phone?: ModelStringInput | null,
  phoneState?: Modelv2EmailStateInput | null,
  privateEnrollmentId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  type?: Modelv2TypeOfEmailInput | null,
  typeSend?: Modelv2TypeSendInput | null,
  updatedAt?: ModelStringInput | null,
  userSendId?: ModelIDInput | null,
};

export type ModelV2EmailSendConnection = {
  __typename: "ModelV2EmailSendConnection",
  items:  Array<v2EmailSend | null >,
  nextToken?: string | null,
};

export type Modelv2GmailInboxFilterInput = {
  and?: Array< Modelv2GmailInboxFilterInput | null > | null,
  attachments?: ModelStringInput | null,
  bodyHtml?: ModelStringInput | null,
  bodyText?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  dateSent?: ModelStringInput | null,
  dateStr?: ModelStringInput | null,
  fromEmail?: ModelStringInput | null,
  fromName?: ModelStringInput | null,
  gmailAccount?: ModelStringInput | null,
  hasAttachments?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  labels?: ModelStringInput | null,
  messageId?: ModelStringInput | null,
  not?: Modelv2GmailInboxFilterInput | null,
  or?: Array< Modelv2GmailInboxFilterInput | null > | null,
  snippet?: ModelStringInput | null,
  source?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  threadId?: ModelStringInput | null,
  toEmails?: ModelStringInput | null,
  type?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelV2GmailInboxFilterInput = {
  and?: Array< ModelV2GmailInboxFilterInput | null > | null,
  attachments?: ModelStringInput | null,
  bodyHtml?: ModelStringInput | null,
  bodyText?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  dateSent?: ModelStringInput | null,
  dateStr?: ModelStringInput | null,
  fromEmail?: ModelStringInput | null,
  fromName?: ModelStringInput | null,
  gmailAccount?: ModelStringInput | null,
  hasAttachments?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  isRead?: ModelBooleanInput | null,
  labels?: ModelStringInput | null,
  messageId?: ModelStringInput | null,
  not?: ModelV2GmailInboxFilterInput | null,
  or?: Array< ModelV2GmailInboxFilterInput | null > | null,
  snippet?: ModelStringInput | null,
  source?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  threadId?: ModelStringInput | null,
  toEmails?: ModelStringInput | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelV2GmailInboxConnection = {
  __typename: "ModelV2GmailInboxConnection",
  items:  Array<v2GmailInbox | null >,
  nextToken?: string | null,
};

export type ModelV2ManagersFilterInput = {
  and?: Array< ModelV2ManagersFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelV2ManagersFilterInput | null,
  or?: Array< ModelV2ManagersFilterInput | null > | null,
  profitCenterID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2ManagersConnection = {
  __typename: "ModelV2ManagersConnection",
  items:  Array<v2Managers | null >,
  nextToken?: string | null,
};

export type Modelv2ManagersFilterInput = {
  and?: Array< Modelv2ManagersFilterInput | null > | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  lastName?: ModelStringInput | null,
  not?: Modelv2ManagersFilterInput | null,
  or?: Array< Modelv2ManagersFilterInput | null > | null,
  profitCenterID?: ModelIDInput | null,
};

export type Modelv2MessageFilterInput = {
  and?: Array< Modelv2MessageFilterInput | null > | null,
  customerId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  not?: Modelv2MessageFilterInput | null,
  or?: Array< Modelv2MessageFilterInput | null > | null,
  source?: ModelStringInput | null,
  type?: ModelStringInput | null,
};

export type ModelV2MessageFilterInput = {
  and?: Array< ModelV2MessageFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  not?: ModelV2MessageFilterInput | null,
  or?: Array< ModelV2MessageFilterInput | null > | null,
  source?: ModelStringInput | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2MessageConnection = {
  __typename: "ModelV2MessageConnection",
  items:  Array<v2Message | null >,
  nextToken?: string | null,
};

export type ModelV2MetadataFilterInput = {
  and?: Array< ModelV2MetadataFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  key?: ModelStringInput | null,
  not?: ModelV2MetadataFilterInput | null,
  or?: Array< ModelV2MetadataFilterInput | null > | null,
  parametersId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  value?: ModelStringInput | null,
};

export type ModelV2MetadataConnection = {
  __typename: "ModelV2MetadataConnection",
  items:  Array<v2Metadata | null >,
  nextToken?: string | null,
};

export type ModelV2ParametersFilterInput = {
  and?: Array< ModelV2ParametersFilterInput | null > | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  idParent?: ModelStringInput | null,
  label?: ModelStringInput | null,
  not?: ModelV2ParametersFilterInput | null,
  or?: Array< ModelV2ParametersFilterInput | null > | null,
  typeOfParameterId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  value?: ModelStringInput | null,
};

export type ModelV2ParametersConnection = {
  __typename: "ModelV2ParametersConnection",
  items:  Array<v2Parameters | null >,
  nextToken?: string | null,
};

export type Modelv2ParametersFilterInput = {
  and?: Array< Modelv2ParametersFilterInput | null > | null,
  country?: ModelStringInput | null,
  idParent?: ModelStringInput | null,
  label?: ModelStringInput | null,
  not?: Modelv2ParametersFilterInput | null,
  or?: Array< Modelv2ParametersFilterInput | null > | null,
  typeOfParameterId?: ModelIDInput | null,
  value?: ModelStringInput | null,
};

export type ModelV2ParametersEncFilterInput = {
  and?: Array< ModelV2ParametersEncFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2ParametersEncFilterInput | null,
  or?: Array< ModelV2ParametersEncFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2ParametersEncConnection = {
  __typename: "ModelV2ParametersEncConnection",
  items:  Array<v2ParametersEnc | null >,
  nextToken?: string | null,
};

export type ModelV2PaymentTransactionsFilterInput = {
  accounting_date?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2PaymentTransactionsFilterInput | null > | null,
  authorization_code?: ModelStringInput | null,
  buy_order?: ModelStringInput | null,
  card_detail?: ModelStringInput | null,
  card_number?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  day?: ModelStringInput | null,
  glosa?: ModelStringInput | null,
  hasRefund?: ModelBooleanInput | null,
  hour?: ModelStringInput | null,
  id?: ModelIDInput | null,
  installments_amount?: ModelStringInput | null,
  installments_number?: ModelStringInput | null,
  month?: ModelStringInput | null,
  not?: ModelV2PaymentTransactionsFilterInput | null,
  or?: Array< ModelV2PaymentTransactionsFilterInput | null > | null,
  payment_type_code?: ModelStringInput | null,
  response_code?: ModelStringInput | null,
  session_id?: ModelStringInput | null,
  shoppingCartId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  token?: ModelStringInput | null,
  transaction_date?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  urlWebpay?: ModelStringInput | null,
  usersId?: ModelIDInput | null,
  vci?: ModelStringInput | null,
  year?: ModelStringInput | null,
};

export type ModelV2PaymentTransactionsConnection = {
  __typename: "ModelV2PaymentTransactionsConnection",
  items:  Array<v2PaymentTransactions | null >,
  nextToken?: string | null,
};

export type Modelv2PaymentTransactionsFilterInput = {
  accounting_date?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< Modelv2PaymentTransactionsFilterInput | null > | null,
  authorization_code?: ModelStringInput | null,
  buy_order?: ModelStringInput | null,
  card_detail?: ModelStringInput | null,
  card_number?: ModelStringInput | null,
  day?: ModelStringInput | null,
  glosa?: ModelStringInput | null,
  hasRefund?: ModelBooleanInput | null,
  hour?: ModelStringInput | null,
  installments_amount?: ModelStringInput | null,
  installments_number?: ModelStringInput | null,
  month?: ModelStringInput | null,
  not?: Modelv2PaymentTransactionsFilterInput | null,
  or?: Array< Modelv2PaymentTransactionsFilterInput | null > | null,
  payment_type_code?: ModelStringInput | null,
  response_code?: ModelStringInput | null,
  session_id?: ModelStringInput | null,
  shoppingCartId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  token?: ModelStringInput | null,
  transaction_date?: ModelStringInput | null,
  urlWebpay?: ModelStringInput | null,
  usersId?: ModelIDInput | null,
  vci?: ModelStringInput | null,
  year?: ModelStringInput | null,
};

export type Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyConditionInput = {
  beginsWith?: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput | null,
  between?: Array< Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput | null > | null,
  eq?: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput | null,
  ge?: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput | null,
  gt?: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput | null,
  le?: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput | null,
  lt?: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput | null,
};

export type Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyInput = {
  hour?: string | null,
  month?: string | null,
  year?: string | null,
};

export type ModelV2PermissionsFilterInput = {
  and?: Array< ModelV2PermissionsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isLeaf?: ModelBooleanInput | null,
  isVisible?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2PermissionsFilterInput | null,
  or?: Array< ModelV2PermissionsFilterInput | null > | null,
  order?: ModelIntInput | null,
  padreId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelV2PermissionsConnection = {
  __typename: "ModelV2PermissionsConnection",
  items:  Array<v2Permissions | null >,
  nextToken?: string | null,
};

export type Modelv2ProductFilterInput = {
  and?: Array< Modelv2ProductFilterInput | null > | null,
  criticalStock?: ModelIntInput | null,
  currentStock?: ModelIntInput | null,
  isActive?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: Modelv2ProductFilterInput | null,
  or?: Array< Modelv2ProductFilterInput | null > | null,
  profits?: ModelFloatInput | null,
  purchasePrice?: ModelFloatInput | null,
  sellingPrice?: ModelFloatInput | null,
  sku?: ModelStringInput | null,
  supplierId?: ModelIDInput | null,
};

export type ModelV2ProductFilterInput = {
  and?: Array< ModelV2ProductFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  criticalStock?: ModelIntInput | null,
  currentStock?: ModelIntInput | null,
  id?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2ProductFilterInput | null,
  or?: Array< ModelV2ProductFilterInput | null > | null,
  profits?: ModelFloatInput | null,
  purchasePrice?: ModelFloatInput | null,
  sellingPrice?: ModelFloatInput | null,
  sku?: ModelStringInput | null,
  supplierId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2ProductConnection = {
  __typename: "ModelV2ProductConnection",
  items:  Array<v2Product | null >,
  nextToken?: string | null,
};

export type Modelv2ProfitCenterFilterInput = {
  and?: Array< Modelv2ProfitCenterFilterInput | null > | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  managerID?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: Modelv2ProfitCenterFilterInput | null,
  or?: Array< Modelv2ProfitCenterFilterInput | null > | null,
  parentProfitCenterID?: ModelStringInput | null,
};

export type Modelv2ProfitCenterConnection = {
  __typename: "Modelv2ProfitCenterConnection",
  items:  Array<v2ProfitCenter | null >,
  nextToken?: string | null,
};

export type ModelV2ProfitCenterFilterInput = {
  and?: Array< ModelV2ProfitCenterFilterInput | null > | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  managerID?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2ProfitCenterFilterInput | null,
  or?: Array< ModelV2ProfitCenterFilterInput | null > | null,
  parentProfitCenterID?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2ProfitCenterConnection = {
  __typename: "ModelV2ProfitCenterConnection",
  items:  Array<v2ProfitCenter | null >,
  nextToken?: string | null,
};

export type ModelV2RelationshipFilterInput = {
  and?: Array< ModelV2RelationshipFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2RelationshipFilterInput | null,
  or?: Array< ModelV2RelationshipFilterInput | null > | null,
  relationType?: Modelv2RelationTypeInput | null,
  studentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type Modelv2RelationTypeInput = {
  eq?: v2RelationType | null,
  ne?: v2RelationType | null,
};

export type ModelV2RelationshipConnection = {
  __typename: "ModelV2RelationshipConnection",
  items:  Array<v2Relationship | null >,
  nextToken?: string | null,
};

export type ModelV2RolPermissionsFilterInput = {
  and?: Array< ModelV2RolPermissionsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2RolPermissionsFilterInput | null,
  or?: Array< ModelV2RolPermissionsFilterInput | null > | null,
  permissionId?: ModelIDInput | null,
  roleId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2RolPermissionsConnection = {
  __typename: "ModelV2RolPermissionsConnection",
  items:  Array<v2RolPermissions | null >,
  nextToken?: string | null,
};

export type ModelV2RolesFilterInput = {
  and?: Array< ModelV2RolesFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2RolesFilterInput | null,
  or?: Array< ModelV2RolesFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2RolesConnection = {
  __typename: "ModelV2RolesConnection",
  items:  Array<v2Roles | null >,
  nextToken?: string | null,
};

export type ModelV2SellersCommissionFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2SellersCommissionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2SellersCommissionFilterInput | null,
  or?: Array< ModelV2SellersCommissionFilterInput | null > | null,
  paymentAmount?: ModelFloatInput | null,
  salesCommission?: ModelFloatInput | null,
  status?: Modelv2StatusCommissionInput | null,
  type?: Modelv2TypeDetailInput | null,
  updatedAt?: ModelStringInput | null,
  usersId?: ModelIDInput | null,
};

export type Modelv2StatusCommissionInput = {
  eq?: v2StatusCommission | null,
  ne?: v2StatusCommission | null,
};

export type Modelv2TypeDetailInput = {
  eq?: v2TypeDetail | null,
  ne?: v2TypeDetail | null,
};

export type ModelV2SellersCommissionConnection = {
  __typename: "ModelV2SellersCommissionConnection",
  items:  Array<v2SellersCommission | null >,
  nextToken?: string | null,
};

export type ModelV2SentEmailFilterInput = {
  and?: Array< ModelV2SentEmailFilterInput | null > | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  emailState?: Modelv2EmailStateInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2SentEmailFilterInput | null,
  or?: Array< ModelV2SentEmailFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2SentEmailConnection = {
  __typename: "ModelV2SentEmailConnection",
  items:  Array<v2SentEmail | null >,
  nextToken?: string | null,
};

export type Modelv2ShoppingCartDetailFilterInput = {
  academyEnrollmentId?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< Modelv2ShoppingCartDetailFilterInput | null > | null,
  cartId?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  detail?: ModelStringInput | null,
  enrollmentId?: ModelIDInput | null,
  not?: Modelv2ShoppingCartDetailFilterInput | null,
  or?: Array< Modelv2ShoppingCartDetailFilterInput | null > | null,
  privateEnrollmentId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  type?: Modelv2TypeDetailInput | null,
  wasDeleted?: ModelBooleanInput | null,
};

export type ModelV2ShoppingCartDetailFilterInput = {
  academyEnrollmentId?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2ShoppingCartDetailFilterInput | null > | null,
  cartId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  detail?: ModelStringInput | null,
  enrollmentId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2ShoppingCartDetailFilterInput | null,
  or?: Array< ModelV2ShoppingCartDetailFilterInput | null > | null,
  privateEnrollmentId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  type?: Modelv2TypeDetailInput | null,
  updatedAt?: ModelStringInput | null,
  wasDeleted?: ModelBooleanInput | null,
};

export type ModelV2ShoppingCartDetailConnection = {
  __typename: "ModelV2ShoppingCartDetailConnection",
  items:  Array<v2ShoppingCartDetail | null >,
  nextToken?: string | null,
};

export type ModelV2ShoppingCartFilterInput = {
  and?: Array< ModelV2ShoppingCartFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2ShoppingCartFilterInput | null,
  or?: Array< ModelV2ShoppingCartFilterInput | null > | null,
  sellerId?: ModelIDInput | null,
  sellersCommissionId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  totalPrice?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelV2ShoppingCartConnection = {
  __typename: "ModelV2ShoppingCartConnection",
  items:  Array<v2ShoppingCart | null >,
  nextToken?: string | null,
};

export type ModelV2SupplierFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelV2SupplierFilterInput | null > | null,
  contactPerson?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2SupplierFilterInput | null,
  or?: Array< ModelV2SupplierFilterInput | null > | null,
  phone?: ModelStringInput | null,
  taxId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2SupplierConnection = {
  __typename: "ModelV2SupplierConnection",
  items:  Array<v2Supplier | null >,
  nextToken?: string | null,
};

export type Modelv2SupportTicketFilterInput = {
  and?: Array< Modelv2SupportTicketFilterInput | null > | null,
  date?: ModelStringInput | null,
  day?: ModelStringInput | null,
  description?: ModelStringInput | null,
  email?: ModelStringInput | null,
  lastModificationUser?: ModelStringInput | null,
  month?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: Modelv2SupportTicketFilterInput | null,
  or?: Array< Modelv2SupportTicketFilterInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  reason?: Modelv2reasonTypeInput | null,
  statusTicket?: Modelv2statusTicketTypeInput | null,
  studentId?: ModelIDInput | null,
  year?: ModelStringInput | null,
};

export type Modelv2reasonTypeInput = {
  eq?: v2reasonType | null,
  ne?: v2reasonType | null,
};

export type Modelv2statusTicketTypeInput = {
  eq?: v2statusTicketType | null,
  ne?: v2statusTicketType | null,
};

export type Modelv2SupportTicketConnection = {
  __typename: "Modelv2SupportTicketConnection",
  items:  Array<v2SupportTicket | null >,
  nextToken?: string | null,
};

export type ModelV2SupportTicketFilterInput = {
  and?: Array< ModelV2SupportTicketFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  day?: ModelStringInput | null,
  description?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastModificationUser?: ModelStringInput | null,
  month?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2SupportTicketFilterInput | null,
  or?: Array< ModelV2SupportTicketFilterInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  reason?: Modelv2reasonTypeInput | null,
  statusTicket?: Modelv2statusTicketTypeInput | null,
  studentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  year?: ModelStringInput | null,
};

export type ModelV2SupportTicketConnection = {
  __typename: "ModelV2SupportTicketConnection",
  items:  Array<v2SupportTicket | null >,
  nextToken?: string | null,
};

export type ModelV2TicketCommentFilterInput = {
  and?: Array< ModelV2TicketCommentFilterInput | null > | null,
  commentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2TicketCommentFilterInput | null,
  or?: Array< ModelV2TicketCommentFilterInput | null > | null,
  ticketId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelV2TicketCommentConnection = {
  __typename: "ModelV2TicketCommentConnection",
  items:  Array<v2TicketComment | null >,
  nextToken?: string | null,
};

export type ModelV2TicketUserFilterInput = {
  and?: Array< ModelV2TicketUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2TicketUserFilterInput | null,
  or?: Array< ModelV2TicketUserFilterInput | null > | null,
  ticketId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelV2TicketUserConnection = {
  __typename: "ModelV2TicketUserConnection",
  items:  Array<v2TicketUser | null >,
  nextToken?: string | null,
};

export type ModelV2TransactionsFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2TransactionsFilterInput | null > | null,
  categoryID?: ModelStringInput | null,
  categoryType?: Modelv2CategoryTypeInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  month?: ModelStringInput | null,
  not?: ModelV2TransactionsFilterInput | null,
  or?: Array< ModelV2TransactionsFilterInput | null > | null,
  profitCenterID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  year?: ModelStringInput | null,
};

export type Modelv2CategoryTypeInput = {
  eq?: v2CategoryType | null,
  ne?: v2CategoryType | null,
};

export type ModelV2TransactionsConnection = {
  __typename: "ModelV2TransactionsConnection",
  items:  Array<v2Transactions | null >,
  nextToken?: string | null,
};

export type Modelv2TransactionsSearchByProfitCenterCompositeKeyConditionInput = {
  beginsWith?: Modelv2TransactionsSearchByProfitCenterCompositeKeyInput | null,
  between?: Array< Modelv2TransactionsSearchByProfitCenterCompositeKeyInput | null > | null,
  eq?: Modelv2TransactionsSearchByProfitCenterCompositeKeyInput | null,
  ge?: Modelv2TransactionsSearchByProfitCenterCompositeKeyInput | null,
  gt?: Modelv2TransactionsSearchByProfitCenterCompositeKeyInput | null,
  le?: Modelv2TransactionsSearchByProfitCenterCompositeKeyInput | null,
  lt?: Modelv2TransactionsSearchByProfitCenterCompositeKeyInput | null,
};

export type Modelv2TransactionsSearchByProfitCenterCompositeKeyInput = {
  categoryID?: string | null,
  month?: string | null,
  year?: string | null,
};

export type Modelv2TransactionsFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< Modelv2TransactionsFilterInput | null > | null,
  categoryID?: ModelStringInput | null,
  categoryType?: Modelv2CategoryTypeInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  month?: ModelStringInput | null,
  not?: Modelv2TransactionsFilterInput | null,
  or?: Array< Modelv2TransactionsFilterInput | null > | null,
  profitCenterID?: ModelIDInput | null,
  year?: ModelStringInput | null,
};

export type ModelV2UserPermissionsFilterInput = {
  and?: Array< ModelV2UserPermissionsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelV2UserPermissionsFilterInput | null,
  or?: Array< ModelV2UserPermissionsFilterInput | null > | null,
  permissionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelV2UserPermissionsConnection = {
  __typename: "ModelV2UserPermissionsConnection",
  items:  Array<v2UserPermissions | null >,
  nextToken?: string | null,
};

export type ModelV2UsersFilterInput = {
  and?: Array< ModelV2UsersFilterInput | null > | null,
  city?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstContact?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  ig?: ModelStringInput | null,
  isAcademyStudent?: ModelBooleanInput | null,
  isActive?: ModelBooleanInput | null,
  isEmployed?: ModelBooleanInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2UsersFilterInput | null,
  or?: Array< ModelV2UsersFilterInput | null > | null,
  roleId?: ModelIDInput | null,
  salesCommission?: ModelFloatInput | null,
  state?: ModelStringInput | null,
  streetAddress?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  validated?: ModelBooleanInput | null,
  zipCode?: ModelStringInput | null,
  zoomLevel?: ModelIntInput | null,
};

export type ModelV2UsersConnection = {
  __typename: "ModelV2UsersConnection",
  items:  Array<v2Users | null >,
  nextToken?: string | null,
};

export type Modelv2UsersFilterInput = {
  and?: Array< Modelv2UsersFilterInput | null > | null,
  city?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  country?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstContact?: ModelBooleanInput | null,
  ig?: ModelStringInput | null,
  isAcademyStudent?: ModelBooleanInput | null,
  isActive?: ModelBooleanInput | null,
  isEmployed?: ModelBooleanInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  name?: ModelStringInput | null,
  not?: Modelv2UsersFilterInput | null,
  or?: Array< Modelv2UsersFilterInput | null > | null,
  roleId?: ModelIDInput | null,
  salesCommission?: ModelFloatInput | null,
  state?: ModelStringInput | null,
  streetAddress?: ModelStringInput | null,
  validated?: ModelBooleanInput | null,
  zipCode?: ModelStringInput | null,
  zoomLevel?: ModelIntInput | null,
};

export type V2ListCognitoUsersReturnType = {
  __typename: "V2ListCognitoUsersReturnType",
  nextToken?: string | null,
  users:  Array<v2CognitoUser | null >,
};

export type v2CognitoUser = {
  __typename: "v2CognitoUser",
  createdAt: string,
  email: string,
  enabled: boolean,
  name?: string | null,
  status: string,
  sub: string,
};

export type ModelV2ActionConditionInput = {
  and?: Array< ModelV2ActionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  not?: ModelV2ActionConditionInput | null,
  or?: Array< ModelV2ActionConditionInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  urlDocument?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreateV2ActionInput = {
  customerId: string,
  id?: string | null,
  message: string,
  status: string,
  urlDocument?: string | null,
  userId?: string | null,
};

export type ModelV2CommentTicketsConditionInput = {
  and?: Array< ModelV2CommentTicketsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelV2CommentTicketsConditionInput | null,
  or?: Array< ModelV2CommentTicketsConditionInput | null > | null,
  statusModificationIdUser?: ModelStringInput | null,
  statusModificationUser?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2CommentTicketsInput = {
  description: string,
  id?: string | null,
  statusModificationIdUser?: string | null,
  statusModificationUser?: string | null,
};

export type ModelV2CorrelativesConditionInput = {
  and?: Array< ModelV2CorrelativesConditionInput | null > | null,
  correlative?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelV2CorrelativesConditionInput | null,
  or?: Array< ModelV2CorrelativesConditionInput | null > | null,
  type?: Modelv2ParametersTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2CorrelativesInput = {
  correlative?: number | null,
  id?: string | null,
  type?: v2ParametersType | null,
};

export type ModelV2CustomerConditionInput = {
  and?: Array< ModelV2CustomerConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2CustomerConditionInput | null,
  or?: Array< ModelV2CustomerConditionInput | null > | null,
  phone?: ModelStringInput | null,
  phone2?: ModelStringInput | null,
  requestDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2CustomerInput = {
  email: string,
  id?: string | null,
  name: string,
  phone: string,
  phone2?: string | null,
  requestDate?: string | null,
  status?: string | null,
};

export type ModelV2CustomerActionConditionInput = {
  and?: Array< ModelV2CustomerActionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  docUrl?: ModelStringInput | null,
  not?: ModelV2CustomerActionConditionInput | null,
  or?: Array< ModelV2CustomerActionConditionInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateV2CustomerActionInput = {
  customerId: string,
  date: string,
  detail: string,
  docUrl?: string | null,
  id?: string | null,
  status: string,
  userId?: string | null,
};

export type ModelV2EmailSendConditionInput = {
  and?: Array< ModelV2EmailSendConditionInput | null > | null,
  contentEmail?: ModelStringInput | null,
  contentMessage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  email?: ModelStringInput | null,
  emailState?: Modelv2EmailStateInput | null,
  enrollmentId?: ModelIDInput | null,
  not?: ModelV2EmailSendConditionInput | null,
  or?: Array< ModelV2EmailSendConditionInput | null > | null,
  phone?: ModelStringInput | null,
  phoneState?: Modelv2EmailStateInput | null,
  privateEnrollmentId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  type?: Modelv2TypeOfEmailInput | null,
  typeSend?: Modelv2TypeSendInput | null,
  updatedAt?: ModelStringInput | null,
  userSendId?: ModelIDInput | null,
};

export type CreateV2EmailSendInput = {
  contentEmail?: string | null,
  contentMessage?: string | null,
  date?: string | null,
  email?: string | null,
  emailState?: v2EmailState | null,
  enrollmentId?: string | null,
  id?: string | null,
  phone?: string | null,
  phoneState?: v2EmailState | null,
  privateEnrollmentId?: string | null,
  studentId: string,
  type: v2TypeOfEmail,
  typeSend: v2TypeSend,
  userSendId: string,
};

export type ModelV2GmailInboxConditionInput = {
  and?: Array< ModelV2GmailInboxConditionInput | null > | null,
  attachments?: ModelStringInput | null,
  bodyHtml?: ModelStringInput | null,
  bodyText?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  dateSent?: ModelStringInput | null,
  dateStr?: ModelStringInput | null,
  fromEmail?: ModelStringInput | null,
  fromName?: ModelStringInput | null,
  gmailAccount?: ModelStringInput | null,
  hasAttachments?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  labels?: ModelStringInput | null,
  messageId?: ModelStringInput | null,
  not?: ModelV2GmailInboxConditionInput | null,
  or?: Array< ModelV2GmailInboxConditionInput | null > | null,
  snippet?: ModelStringInput | null,
  source?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  threadId?: ModelStringInput | null,
  toEmails?: ModelStringInput | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateV2GmailInboxInput = {
  attachments?: string | null,
  bodyHtml?: string | null,
  bodyText?: string | null,
  customerId?: string | null,
  dateSent: string,
  dateStr: string,
  fromEmail?: string | null,
  fromName?: string | null,
  gmailAccount: string,
  hasAttachments?: boolean | null,
  id?: string | null,
  isRead?: boolean | null,
  labels?: Array< string | null > | null,
  messageId: string,
  snippet?: string | null,
  source?: string | null,
  subject?: string | null,
  threadId: string,
  toEmails?: Array< string | null > | null,
  type?: string | null,
  userId?: string | null,
};

export type ModelV2ManagersConditionInput = {
  and?: Array< ModelV2ManagersConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelV2ManagersConditionInput | null,
  or?: Array< ModelV2ManagersConditionInput | null > | null,
  profitCenterID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2ManagersInput = {
  email?: string | null,
  firstName?: string | null,
  id?: string | null,
  isActive?: boolean | null,
  lastName?: string | null,
  profitCenterID: string,
};

export type ModelV2MessageConditionInput = {
  and?: Array< ModelV2MessageConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  not?: ModelV2MessageConditionInput | null,
  or?: Array< ModelV2MessageConditionInput | null > | null,
  source?: ModelStringInput | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2MessageInput = {
  customerId: string,
  id?: string | null,
  message: string,
  source: string,
  type?: string | null,
};

export type ModelV2MetadataConditionInput = {
  and?: Array< ModelV2MetadataConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  key?: ModelStringInput | null,
  not?: ModelV2MetadataConditionInput | null,
  or?: Array< ModelV2MetadataConditionInput | null > | null,
  parametersId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  value?: ModelStringInput | null,
};

export type CreateV2MetadataInput = {
  id?: string | null,
  key?: string | null,
  parametersId?: string | null,
  value?: string | null,
};

export type ModelV2ParametersConditionInput = {
  and?: Array< ModelV2ParametersConditionInput | null > | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  idParent?: ModelStringInput | null,
  label?: ModelStringInput | null,
  not?: ModelV2ParametersConditionInput | null,
  or?: Array< ModelV2ParametersConditionInput | null > | null,
  typeOfParameterId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  value?: ModelStringInput | null,
};

export type CreateV2ParametersInput = {
  country: string,
  id?: string | null,
  idParent?: string | null,
  label: string,
  typeOfParameterId?: string | null,
  value: string,
};

export type ModelV2ParametersEncConditionInput = {
  and?: Array< ModelV2ParametersEncConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelV2ParametersEncConditionInput | null,
  or?: Array< ModelV2ParametersEncConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2ParametersEncInput = {
  description?: string | null,
  id?: string | null,
};

export type ModelV2PaymentTransactionsConditionInput = {
  accounting_date?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2PaymentTransactionsConditionInput | null > | null,
  authorization_code?: ModelStringInput | null,
  buy_order?: ModelStringInput | null,
  card_detail?: ModelStringInput | null,
  card_number?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  day?: ModelStringInput | null,
  glosa?: ModelStringInput | null,
  hasRefund?: ModelBooleanInput | null,
  hour?: ModelStringInput | null,
  installments_amount?: ModelStringInput | null,
  installments_number?: ModelStringInput | null,
  month?: ModelStringInput | null,
  not?: ModelV2PaymentTransactionsConditionInput | null,
  or?: Array< ModelV2PaymentTransactionsConditionInput | null > | null,
  payment_type_code?: ModelStringInput | null,
  response_code?: ModelStringInput | null,
  session_id?: ModelStringInput | null,
  shoppingCartId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  token?: ModelStringInput | null,
  transaction_date?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  urlWebpay?: ModelStringInput | null,
  usersId?: ModelIDInput | null,
  vci?: ModelStringInput | null,
  year?: ModelStringInput | null,
};

export type CreateV2PaymentTransactionsInput = {
  accounting_date?: string | null,
  amount?: number | null,
  authorization_code?: string | null,
  buy_order?: string | null,
  card_detail?: string | null,
  card_number?: string | null,
  day: string,
  glosa: string,
  hasRefund?: boolean | null,
  hour?: string | null,
  id?: string | null,
  installments_amount?: string | null,
  installments_number?: string | null,
  month: string,
  payment_type_code?: string | null,
  response_code?: string | null,
  session_id?: string | null,
  shoppingCartId?: string | null,
  status?: string | null,
  token?: string | null,
  transaction_date?: string | null,
  urlWebpay?: string | null,
  usersId?: string | null,
  vci?: string | null,
  year?: string | null,
};

export type ModelV2PermissionsConditionInput = {
  and?: Array< ModelV2PermissionsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  isLeaf?: ModelBooleanInput | null,
  isVisible?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2PermissionsConditionInput | null,
  or?: Array< ModelV2PermissionsConditionInput | null > | null,
  order?: ModelIntInput | null,
  padreId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2PermissionsInput = {
  displayName: string,
  icon: string,
  id?: string | null,
  isLeaf?: boolean | null,
  isVisible?: boolean | null,
  name: string,
  order?: number | null,
  padreId?: string | null,
};

export type ModelV2ProductConditionInput = {
  and?: Array< ModelV2ProductConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  criticalStock?: ModelIntInput | null,
  currentStock?: ModelIntInput | null,
  isActive?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2ProductConditionInput | null,
  or?: Array< ModelV2ProductConditionInput | null > | null,
  profits?: ModelFloatInput | null,
  purchasePrice?: ModelFloatInput | null,
  sellingPrice?: ModelFloatInput | null,
  sku?: ModelStringInput | null,
  supplierId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2ProductInput = {
  criticalStock: number,
  currentStock: number,
  id?: string | null,
  isActive?: boolean | null,
  name: string,
  profits: number,
  purchasePrice: number,
  sellingPrice: number,
  sku: string,
  supplierId: string,
};

export type ModelV2ProfitCenterConditionInput = {
  and?: Array< ModelV2ProfitCenterConditionInput | null > | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  managerID?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2ProfitCenterConditionInput | null,
  or?: Array< ModelV2ProfitCenterConditionInput | null > | null,
  parentProfitCenterID?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2ProfitCenterInput = {
  code?: string | null,
  description?: string | null,
  id?: string | null,
  isActive?: boolean | null,
  managerID?: string | null,
  name?: string | null,
  parentProfitCenterID?: string | null,
};

export type ModelV2RelationshipConditionInput = {
  and?: Array< ModelV2RelationshipConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelV2RelationshipConditionInput | null,
  or?: Array< ModelV2RelationshipConditionInput | null > | null,
  relationType?: Modelv2RelationTypeInput | null,
  studentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateV2RelationshipInput = {
  id?: string | null,
  relationType: v2RelationType,
  studentId: string,
  userId: string,
};

export type ModelV2RolPermissionsConditionInput = {
  and?: Array< ModelV2RolPermissionsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelV2RolPermissionsConditionInput | null,
  or?: Array< ModelV2RolPermissionsConditionInput | null > | null,
  permissionId?: ModelIDInput | null,
  roleId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2RolPermissionsInput = {
  id?: string | null,
  permissionId: string,
  roleId: string,
};

export type ModelV2RolesConditionInput = {
  and?: Array< ModelV2RolesConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2RolesConditionInput | null,
  or?: Array< ModelV2RolesConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2RolesInput = {
  displayName: string,
  icon: string,
  id?: string | null,
  name: string,
};

export type ModelV2SellersCommissionConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2SellersCommissionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelV2SellersCommissionConditionInput | null,
  or?: Array< ModelV2SellersCommissionConditionInput | null > | null,
  paymentAmount?: ModelFloatInput | null,
  salesCommission?: ModelFloatInput | null,
  status?: Modelv2StatusCommissionInput | null,
  type?: Modelv2TypeDetailInput | null,
  updatedAt?: ModelStringInput | null,
  usersId?: ModelIDInput | null,
};

export type CreateV2SellersCommissionInput = {
  amount?: number | null,
  description?: string | null,
  id?: string | null,
  paymentAmount?: number | null,
  salesCommission?: number | null,
  status: v2StatusCommission,
  type: v2TypeDetail,
  usersId?: string | null,
};

export type ModelV2SentEmailConditionInput = {
  and?: Array< ModelV2SentEmailConditionInput | null > | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  emailState?: Modelv2EmailStateInput | null,
  not?: ModelV2SentEmailConditionInput | null,
  or?: Array< ModelV2SentEmailConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2SentEmailInput = {
  body?: string | null,
  emailState?: v2EmailState | null,
  id?: string | null,
};

export type ModelV2ShoppingCartConditionInput = {
  and?: Array< ModelV2ShoppingCartConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelV2ShoppingCartConditionInput | null,
  or?: Array< ModelV2ShoppingCartConditionInput | null > | null,
  sellerId?: ModelIDInput | null,
  sellersCommissionId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  totalPrice?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateV2ShoppingCartInput = {
  createdAt?: string | null,
  id?: string | null,
  sellerId: string,
  sellersCommissionId?: string | null,
  status?: string | null,
  totalPrice: number,
  userId: string,
};

export type ModelV2ShoppingCartDetailConditionInput = {
  academyEnrollmentId?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2ShoppingCartDetailConditionInput | null > | null,
  cartId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  detail?: ModelStringInput | null,
  enrollmentId?: ModelIDInput | null,
  not?: ModelV2ShoppingCartDetailConditionInput | null,
  or?: Array< ModelV2ShoppingCartDetailConditionInput | null > | null,
  privateEnrollmentId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  type?: Modelv2TypeDetailInput | null,
  updatedAt?: ModelStringInput | null,
  wasDeleted?: ModelBooleanInput | null,
};

export type CreateV2ShoppingCartDetailInput = {
  academyEnrollmentId?: string | null,
  amount: number,
  cartId: string,
  createdById?: string | null,
  detail: string,
  enrollmentId?: string | null,
  id?: string | null,
  privateEnrollmentId?: string | null,
  quantity: number,
  type: v2TypeDetail,
  wasDeleted?: boolean | null,
};

export type ModelV2SupplierConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelV2SupplierConditionInput | null > | null,
  contactPerson?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2SupplierConditionInput | null,
  or?: Array< ModelV2SupplierConditionInput | null > | null,
  phone?: ModelStringInput | null,
  taxId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2SupplierInput = {
  address?: string | null,
  contactPerson?: string | null,
  email?: string | null,
  id?: string | null,
  isActive?: boolean | null,
  name: string,
  phone?: string | null,
  taxId?: string | null,
};

export type ModelV2SupportTicketConditionInput = {
  and?: Array< ModelV2SupportTicketConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  day?: ModelStringInput | null,
  description?: ModelStringInput | null,
  email?: ModelStringInput | null,
  lastModificationUser?: ModelStringInput | null,
  month?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2SupportTicketConditionInput | null,
  or?: Array< ModelV2SupportTicketConditionInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  reason?: Modelv2reasonTypeInput | null,
  statusTicket?: Modelv2statusTicketTypeInput | null,
  studentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  year?: ModelStringInput | null,
};

export type CreateV2SupportTicketInput = {
  date: string,
  day: string,
  description: string,
  email: string,
  id?: string | null,
  lastModificationUser?: string | null,
  month: string,
  name: string,
  phoneNumber: string,
  reason?: v2reasonType | null,
  statusTicket?: v2statusTicketType | null,
  studentId?: string | null,
  year?: string | null,
};

export type ModelV2TicketCommentConditionInput = {
  and?: Array< ModelV2TicketCommentConditionInput | null > | null,
  commentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelV2TicketCommentConditionInput | null,
  or?: Array< ModelV2TicketCommentConditionInput | null > | null,
  ticketId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateV2TicketCommentInput = {
  commentId: string,
  id?: string | null,
  ticketId: string,
};

export type ModelV2TicketUserConditionInput = {
  and?: Array< ModelV2TicketUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelV2TicketUserConditionInput | null,
  or?: Array< ModelV2TicketUserConditionInput | null > | null,
  ticketId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateV2TicketUserInput = {
  id?: string | null,
  ticketId: string,
  userId: string,
};

export type ModelV2TransactionsConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelV2TransactionsConditionInput | null > | null,
  categoryID?: ModelStringInput | null,
  categoryType?: Modelv2CategoryTypeInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  month?: ModelStringInput | null,
  not?: ModelV2TransactionsConditionInput | null,
  or?: Array< ModelV2TransactionsConditionInput | null > | null,
  profitCenterID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  year?: ModelStringInput | null,
};

export type CreateV2TransactionsInput = {
  amount?: number | null,
  categoryID?: string | null,
  categoryType?: v2CategoryType | null,
  date?: string | null,
  description?: string | null,
  id?: string | null,
  month?: string | null,
  profitCenterID: string,
  year?: string | null,
};

export type ModelV2UserPermissionsConditionInput = {
  and?: Array< ModelV2UserPermissionsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelV2UserPermissionsConditionInput | null,
  or?: Array< ModelV2UserPermissionsConditionInput | null > | null,
  permissionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateV2UserPermissionsInput = {
  id?: string | null,
  permissionId: string,
  userId: string,
};

export type ModelV2UsersConditionInput = {
  and?: Array< ModelV2UsersConditionInput | null > | null,
  city?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstContact?: ModelBooleanInput | null,
  ig?: ModelStringInput | null,
  isAcademyStudent?: ModelBooleanInput | null,
  isActive?: ModelBooleanInput | null,
  isEmployed?: ModelBooleanInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  name?: ModelStringInput | null,
  not?: ModelV2UsersConditionInput | null,
  or?: Array< ModelV2UsersConditionInput | null > | null,
  roleId?: ModelIDInput | null,
  salesCommission?: ModelFloatInput | null,
  state?: ModelStringInput | null,
  streetAddress?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  validated?: ModelBooleanInput | null,
  zipCode?: ModelStringInput | null,
  zoomLevel?: ModelIntInput | null,
};

export type CreateV2UsersInput = {
  city?: string | null,
  contactPhone?: string | null,
  country?: string | null,
  email: string,
  firstContact?: boolean | null,
  id?: string | null,
  ig?: string | null,
  isAcademyStudent?: boolean | null,
  isActive?: boolean | null,
  isEmployed?: boolean | null,
  latitude?: number | null,
  longitude?: number | null,
  name: string,
  roleId?: string | null,
  salesCommission?: number | null,
  state?: string | null,
  streetAddress?: string | null,
  validated?: boolean | null,
  zipCode?: string | null,
  zoomLevel?: number | null,
};

export type DeleteV2ActionInput = {
  id: string,
};

export type DeleteV2CommentTicketsInput = {
  id: string,
};

export type DeleteV2CorrelativesInput = {
  id: string,
};

export type DeleteV2CustomerInput = {
  id: string,
};

export type DeleteV2CustomerActionInput = {
  id: string,
};

export type DeleteV2EmailSendInput = {
  id: string,
};

export type DeleteV2GmailInboxInput = {
  id: string,
};

export type DeleteV2ManagersInput = {
  id: string,
};

export type DeleteV2MessageInput = {
  id: string,
};

export type DeleteV2MetadataInput = {
  id: string,
};

export type DeleteV2ParametersInput = {
  id: string,
};

export type DeleteV2ParametersEncInput = {
  id: string,
};

export type DeleteV2PaymentTransactionsInput = {
  id: string,
};

export type DeleteV2PermissionsInput = {
  id: string,
};

export type DeleteV2ProductInput = {
  id: string,
};

export type DeleteV2ProfitCenterInput = {
  id: string,
};

export type DeleteV2RelationshipInput = {
  id: string,
};

export type DeleteV2RolPermissionsInput = {
  id: string,
};

export type DeleteV2RolesInput = {
  id: string,
};

export type DeleteV2SellersCommissionInput = {
  id: string,
};

export type DeleteV2SentEmailInput = {
  id: string,
};

export type DeleteV2ShoppingCartInput = {
  id: string,
};

export type DeleteV2ShoppingCartDetailInput = {
  id: string,
};

export type DeleteV2SupplierInput = {
  id: string,
};

export type DeleteV2SupportTicketInput = {
  id: string,
};

export type DeleteV2TicketCommentInput = {
  id: string,
};

export type DeleteV2TicketUserInput = {
  id: string,
};

export type DeleteV2TransactionsInput = {
  id: string,
};

export type DeleteV2UserPermissionsInput = {
  id: string,
};

export type DeleteV2UsersInput = {
  id: string,
};

export type UpdateV2ActionInput = {
  customerId?: string | null,
  id: string,
  message?: string | null,
  status?: string | null,
  urlDocument?: string | null,
  userId?: string | null,
};

export type UpdateV2CommentTicketsInput = {
  description?: string | null,
  id: string,
  statusModificationIdUser?: string | null,
  statusModificationUser?: string | null,
};

export type UpdateV2CorrelativesInput = {
  correlative?: number | null,
  id: string,
  type?: v2ParametersType | null,
};

export type UpdateV2CustomerInput = {
  email?: string | null,
  id: string,
  name?: string | null,
  phone?: string | null,
  phone2?: string | null,
  requestDate?: string | null,
  status?: string | null,
};

export type UpdateV2CustomerActionInput = {
  customerId?: string | null,
  date?: string | null,
  detail?: string | null,
  docUrl?: string | null,
  id: string,
  status?: string | null,
  userId?: string | null,
};

export type UpdateV2EmailSendInput = {
  contentEmail?: string | null,
  contentMessage?: string | null,
  date?: string | null,
  email?: string | null,
  emailState?: v2EmailState | null,
  enrollmentId?: string | null,
  id: string,
  phone?: string | null,
  phoneState?: v2EmailState | null,
  privateEnrollmentId?: string | null,
  studentId?: string | null,
  type?: v2TypeOfEmail | null,
  typeSend?: v2TypeSend | null,
  userSendId?: string | null,
};

export type UpdateV2GmailInboxInput = {
  attachments?: string | null,
  bodyHtml?: string | null,
  bodyText?: string | null,
  customerId?: string | null,
  dateSent?: string | null,
  dateStr?: string | null,
  fromEmail?: string | null,
  fromName?: string | null,
  gmailAccount?: string | null,
  hasAttachments?: boolean | null,
  id: string,
  isRead?: boolean | null,
  labels?: Array< string | null > | null,
  messageId?: string | null,
  snippet?: string | null,
  source?: string | null,
  subject?: string | null,
  threadId?: string | null,
  toEmails?: Array< string | null > | null,
  type?: string | null,
  userId?: string | null,
};

export type UpdateV2ManagersInput = {
  email?: string | null,
  firstName?: string | null,
  id: string,
  isActive?: boolean | null,
  lastName?: string | null,
  profitCenterID?: string | null,
};

export type UpdateV2MessageInput = {
  customerId?: string | null,
  id: string,
  message?: string | null,
  source?: string | null,
  type?: string | null,
};

export type UpdateV2MetadataInput = {
  id: string,
  key?: string | null,
  parametersId?: string | null,
  value?: string | null,
};

export type UpdateV2ParametersInput = {
  country?: string | null,
  id: string,
  idParent?: string | null,
  label?: string | null,
  typeOfParameterId?: string | null,
  value?: string | null,
};

export type UpdateV2ParametersEncInput = {
  description?: string | null,
  id: string,
};

export type UpdateV2PaymentTransactionsInput = {
  accounting_date?: string | null,
  amount?: number | null,
  authorization_code?: string | null,
  buy_order?: string | null,
  card_detail?: string | null,
  card_number?: string | null,
  day?: string | null,
  glosa?: string | null,
  hasRefund?: boolean | null,
  hour?: string | null,
  id: string,
  installments_amount?: string | null,
  installments_number?: string | null,
  month?: string | null,
  payment_type_code?: string | null,
  response_code?: string | null,
  session_id?: string | null,
  shoppingCartId?: string | null,
  status?: string | null,
  token?: string | null,
  transaction_date?: string | null,
  urlWebpay?: string | null,
  usersId?: string | null,
  vci?: string | null,
  year?: string | null,
};

export type UpdateV2PermissionsInput = {
  displayName?: string | null,
  icon?: string | null,
  id: string,
  isLeaf?: boolean | null,
  isVisible?: boolean | null,
  name?: string | null,
  order?: number | null,
  padreId?: string | null,
};

export type UpdateV2ProductInput = {
  criticalStock?: number | null,
  currentStock?: number | null,
  id: string,
  isActive?: boolean | null,
  name?: string | null,
  profits?: number | null,
  purchasePrice?: number | null,
  sellingPrice?: number | null,
  sku?: string | null,
  supplierId?: string | null,
};

export type UpdateV2ProfitCenterInput = {
  code?: string | null,
  description?: string | null,
  id: string,
  isActive?: boolean | null,
  managerID?: string | null,
  name?: string | null,
  parentProfitCenterID?: string | null,
};

export type UpdateV2RelationshipInput = {
  id: string,
  relationType?: v2RelationType | null,
  studentId?: string | null,
  userId?: string | null,
};

export type UpdateV2RolPermissionsInput = {
  id: string,
  permissionId?: string | null,
  roleId?: string | null,
};

export type UpdateV2RolesInput = {
  displayName?: string | null,
  icon?: string | null,
  id: string,
  name?: string | null,
};

export type UpdateV2SellersCommissionInput = {
  amount?: number | null,
  description?: string | null,
  id: string,
  paymentAmount?: number | null,
  salesCommission?: number | null,
  status?: v2StatusCommission | null,
  type?: v2TypeDetail | null,
  usersId?: string | null,
};

export type UpdateV2SentEmailInput = {
  body?: string | null,
  emailState?: v2EmailState | null,
  id: string,
};

export type UpdateV2ShoppingCartInput = {
  createdAt?: string | null,
  id: string,
  sellerId?: string | null,
  sellersCommissionId?: string | null,
  status?: string | null,
  totalPrice?: number | null,
  userId?: string | null,
};

export type UpdateV2ShoppingCartDetailInput = {
  academyEnrollmentId?: string | null,
  amount?: number | null,
  cartId?: string | null,
  createdById?: string | null,
  detail?: string | null,
  enrollmentId?: string | null,
  id: string,
  privateEnrollmentId?: string | null,
  quantity?: number | null,
  type?: v2TypeDetail | null,
  wasDeleted?: boolean | null,
};

export type UpdateV2SupplierInput = {
  address?: string | null,
  contactPerson?: string | null,
  email?: string | null,
  id: string,
  isActive?: boolean | null,
  name?: string | null,
  phone?: string | null,
  taxId?: string | null,
};

export type UpdateV2SupportTicketInput = {
  date?: string | null,
  day?: string | null,
  description?: string | null,
  email?: string | null,
  id: string,
  lastModificationUser?: string | null,
  month?: string | null,
  name?: string | null,
  phoneNumber?: string | null,
  reason?: v2reasonType | null,
  statusTicket?: v2statusTicketType | null,
  studentId?: string | null,
  year?: string | null,
};

export type UpdateV2TicketCommentInput = {
  commentId?: string | null,
  id: string,
  ticketId?: string | null,
};

export type UpdateV2TicketUserInput = {
  id: string,
  ticketId?: string | null,
  userId?: string | null,
};

export type UpdateV2TransactionsInput = {
  amount?: number | null,
  categoryID?: string | null,
  categoryType?: v2CategoryType | null,
  date?: string | null,
  description?: string | null,
  id: string,
  month?: string | null,
  profitCenterID?: string | null,
  year?: string | null,
};

export type UpdateV2UserPermissionsInput = {
  id: string,
  permissionId?: string | null,
  userId?: string | null,
};

export type UpdateV2UsersInput = {
  city?: string | null,
  contactPhone?: string | null,
  country?: string | null,
  email?: string | null,
  firstContact?: boolean | null,
  id: string,
  ig?: string | null,
  isAcademyStudent?: boolean | null,
  isActive?: boolean | null,
  isEmployed?: boolean | null,
  latitude?: number | null,
  longitude?: number | null,
  name?: string | null,
  roleId?: string | null,
  salesCommission?: number | null,
  state?: string | null,
  streetAddress?: string | null,
  validated?: boolean | null,
  zipCode?: string | null,
  zoomLevel?: number | null,
};

export type v2CognitoCreateUserResult = {
  __typename: "v2CognitoCreateUserResult",
  email: string,
  name?: string | null,
  roleId?: string | null,
};

export type v2GmailReplyResult = {
  __typename: "v2GmailReplyResult",
  error?: string | null,
  messageId?: string | null,
  success: boolean,
};

export type v2WebpayTransactionResult = {
  __typename: "v2WebpayTransactionResult",
  accounting_date?: string | null,
  amount?: number | null,
  authorization_code?: string | null,
  buy_order?: string | null,
  card_number?: string | null,
  installments_amount?: number | null,
  installments_number?: number | null,
  payment_type_code?: string | null,
  response_code?: number | null,
  session_id?: string | null,
  status?: string | null,
  transaction_date?: string | null,
  vci?: string | null,
};

export type v2WebpayStartResult = {
  __typename: "v2WebpayStartResult",
  orden: number,
  token: string,
  url: string,
};

export type ModelSubscriptionV2ActionFilterInput = {
  and?: Array< ModelSubscriptionV2ActionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2ActionFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  urlDocument?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionV2CommentTicketsFilterInput = {
  and?: Array< ModelSubscriptionV2CommentTicketsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2CommentTicketsFilterInput | null > | null,
  statusModificationIdUser?: ModelSubscriptionStringInput | null,
  statusModificationUser?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2CorrelativesFilterInput = {
  and?: Array< ModelSubscriptionV2CorrelativesFilterInput | null > | null,
  correlative?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2CorrelativesFilterInput | null > | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionV2CustomerFilterInput = {
  and?: Array< ModelSubscriptionV2CustomerFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2CustomerFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  phone2?: ModelSubscriptionStringInput | null,
  requestDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2CustomerActionFilterInput = {
  and?: Array< ModelSubscriptionV2CustomerActionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  detail?: ModelSubscriptionStringInput | null,
  docUrl?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2CustomerActionFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionV2EmailSendFilterInput = {
  and?: Array< ModelSubscriptionV2EmailSendFilterInput | null > | null,
  contentEmail?: ModelSubscriptionStringInput | null,
  contentMessage?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  emailState?: ModelSubscriptionStringInput | null,
  enrollmentId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2EmailSendFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  phoneState?: ModelSubscriptionStringInput | null,
  privateEnrollmentId?: ModelSubscriptionIDInput | null,
  studentId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  typeSend?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userSendId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionV2GmailInboxFilterInput = {
  and?: Array< ModelSubscriptionV2GmailInboxFilterInput | null > | null,
  attachments?: ModelSubscriptionStringInput | null,
  bodyHtml?: ModelSubscriptionStringInput | null,
  bodyText?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  dateSent?: ModelSubscriptionStringInput | null,
  dateStr?: ModelSubscriptionStringInput | null,
  fromEmail?: ModelSubscriptionStringInput | null,
  fromName?: ModelSubscriptionStringInput | null,
  gmailAccount?: ModelSubscriptionStringInput | null,
  hasAttachments?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  labels?: ModelSubscriptionStringInput | null,
  messageId?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2GmailInboxFilterInput | null > | null,
  snippet?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  threadId?: ModelSubscriptionStringInput | null,
  toEmails?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionV2ManagersFilterInput = {
  and?: Array< ModelSubscriptionV2ManagersFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2ManagersFilterInput | null > | null,
  profitCenterID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2MessageFilterInput = {
  and?: Array< ModelSubscriptionV2MessageFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2MessageFilterInput | null > | null,
  source?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2MetadataFilterInput = {
  and?: Array< ModelSubscriptionV2MetadataFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  key?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2MetadataFilterInput | null > | null,
  parametersId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2ParametersFilterInput = {
  and?: Array< ModelSubscriptionV2ParametersFilterInput | null > | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  idParent?: ModelSubscriptionStringInput | null,
  label?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2ParametersFilterInput | null > | null,
  typeOfParameterId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2ParametersEncFilterInput = {
  and?: Array< ModelSubscriptionV2ParametersEncFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2ParametersEncFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2PaymentTransactionsFilterInput = {
  accounting_date?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionV2PaymentTransactionsFilterInput | null > | null,
  authorization_code?: ModelSubscriptionStringInput | null,
  buy_order?: ModelSubscriptionStringInput | null,
  card_detail?: ModelSubscriptionStringInput | null,
  card_number?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  day?: ModelSubscriptionStringInput | null,
  glosa?: ModelSubscriptionStringInput | null,
  hasRefund?: ModelSubscriptionBooleanInput | null,
  hour?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  installments_amount?: ModelSubscriptionStringInput | null,
  installments_number?: ModelSubscriptionStringInput | null,
  month?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2PaymentTransactionsFilterInput | null > | null,
  payment_type_code?: ModelSubscriptionStringInput | null,
  response_code?: ModelSubscriptionStringInput | null,
  session_id?: ModelSubscriptionStringInput | null,
  shoppingCartId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  token?: ModelSubscriptionStringInput | null,
  transaction_date?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  urlWebpay?: ModelSubscriptionStringInput | null,
  usersId?: ModelSubscriptionIDInput | null,
  vci?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2PermissionsFilterInput = {
  and?: Array< ModelSubscriptionV2PermissionsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isLeaf?: ModelSubscriptionBooleanInput | null,
  isVisible?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2PermissionsFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  padreId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionV2ProductFilterInput = {
  and?: Array< ModelSubscriptionV2ProductFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  criticalStock?: ModelSubscriptionIntInput | null,
  currentStock?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2ProductFilterInput | null > | null,
  profits?: ModelSubscriptionFloatInput | null,
  purchasePrice?: ModelSubscriptionFloatInput | null,
  sellingPrice?: ModelSubscriptionFloatInput | null,
  sku?: ModelSubscriptionStringInput | null,
  supplierId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2ProfitCenterFilterInput = {
  and?: Array< ModelSubscriptionV2ProfitCenterFilterInput | null > | null,
  code?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  managerID?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2ProfitCenterFilterInput | null > | null,
  parentProfitCenterID?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2RelationshipFilterInput = {
  and?: Array< ModelSubscriptionV2RelationshipFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2RelationshipFilterInput | null > | null,
  relationType?: ModelSubscriptionStringInput | null,
  studentId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionV2RolPermissionsFilterInput = {
  and?: Array< ModelSubscriptionV2RolPermissionsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2RolPermissionsFilterInput | null > | null,
  permissionId?: ModelSubscriptionIDInput | null,
  roleId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2RolesFilterInput = {
  and?: Array< ModelSubscriptionV2RolesFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2RolesFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2SellersCommissionFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionV2SellersCommissionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2SellersCommissionFilterInput | null > | null,
  paymentAmount?: ModelSubscriptionFloatInput | null,
  salesCommission?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  usersId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionV2SentEmailFilterInput = {
  and?: Array< ModelSubscriptionV2SentEmailFilterInput | null > | null,
  body?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  emailState?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2SentEmailFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2ShoppingCartFilterInput = {
  and?: Array< ModelSubscriptionV2ShoppingCartFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2ShoppingCartFilterInput | null > | null,
  sellerId?: ModelSubscriptionIDInput | null,
  sellersCommissionId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  totalPrice?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionV2ShoppingCartDetailFilterInput = {
  academyEnrollmentId?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionV2ShoppingCartDetailFilterInput | null > | null,
  cartId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdById?: ModelSubscriptionIDInput | null,
  detail?: ModelSubscriptionStringInput | null,
  enrollmentId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2ShoppingCartDetailFilterInput | null > | null,
  privateEnrollmentId?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  wasDeleted?: ModelSubscriptionBooleanInput | null,
};

export type ModelSubscriptionV2SupplierFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionV2SupplierFilterInput | null > | null,
  contactPerson?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2SupplierFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  taxId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2SupportTicketFilterInput = {
  and?: Array< ModelSubscriptionV2SupportTicketFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  day?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastModificationUser?: ModelSubscriptionStringInput | null,
  month?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2SupportTicketFilterInput | null > | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  reason?: ModelSubscriptionStringInput | null,
  statusTicket?: ModelSubscriptionStringInput | null,
  studentId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2TicketCommentFilterInput = {
  and?: Array< ModelSubscriptionV2TicketCommentFilterInput | null > | null,
  commentId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2TicketCommentFilterInput | null > | null,
  ticketId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2TicketUserFilterInput = {
  and?: Array< ModelSubscriptionV2TicketUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2TicketUserFilterInput | null > | null,
  ticketId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionV2TransactionsFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionV2TransactionsFilterInput | null > | null,
  categoryID?: ModelSubscriptionStringInput | null,
  categoryType?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  month?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2TransactionsFilterInput | null > | null,
  profitCenterID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionV2UserPermissionsFilterInput = {
  and?: Array< ModelSubscriptionV2UserPermissionsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionV2UserPermissionsFilterInput | null > | null,
  permissionId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionV2UsersFilterInput = {
  and?: Array< ModelSubscriptionV2UsersFilterInput | null > | null,
  city?: ModelSubscriptionStringInput | null,
  contactPhone?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  firstContact?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  ig?: ModelSubscriptionStringInput | null,
  isAcademyStudent?: ModelSubscriptionBooleanInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  isEmployed?: ModelSubscriptionBooleanInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionV2UsersFilterInput | null > | null,
  roleId?: ModelSubscriptionIDInput | null,
  salesCommission?: ModelSubscriptionFloatInput | null,
  state?: ModelSubscriptionStringInput | null,
  streetAddress?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  validated?: ModelSubscriptionBooleanInput | null,
  zipCode?: ModelSubscriptionStringInput | null,
  zoomLevel?: ModelSubscriptionIntInput | null,
};

export type GetV2ActionQueryVariables = {
  id: string,
};

export type GetV2ActionQuery = {
  getV2Action?:  {
    __typename: "v2Action",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    status: string,
    updatedAt: string,
    urlDocument?: string | null,
    userId?: string | null,
  } | null,
};

export type GetV2CommentTicketsQueryVariables = {
  id: string,
};

export type GetV2CommentTicketsQuery = {
  getV2CommentTickets?:  {
    __typename: "v2CommentTickets",
    createdAt: string,
    description: string,
    id: string,
    statusModificationIdUser?: string | null,
    statusModificationUser?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetV2CorrelativesQueryVariables = {
  id: string,
};

export type GetV2CorrelativesQuery = {
  getV2Correlatives?:  {
    __typename: "v2Correlatives",
    correlative?: number | null,
    createdAt: string,
    id: string,
    type?: v2ParametersType | null,
    updatedAt: string,
  } | null,
};

export type GetV2CustomerQueryVariables = {
  id: string,
};

export type GetV2CustomerQuery = {
  getV2Customer?:  {
    __typename: "v2Customer",
    actions?:  {
      __typename: "Modelv2CustomerActionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    inboxItems?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "Modelv2MessageConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    phone: string,
    phone2?: string | null,
    requestDate?: string | null,
    status?: string | null,
    updatedAt: string,
    v2Actions?:  {
      __typename: "Modelv2ActionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetV2CustomerActionQueryVariables = {
  id: string,
};

export type GetV2CustomerActionQuery = {
  getV2CustomerAction?:  {
    __typename: "v2CustomerAction",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    date: string,
    detail: string,
    docUrl?: string | null,
    id: string,
    status: string,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type GetV2EmailSendQueryVariables = {
  id: string,
};

export type GetV2EmailSendQuery = {
  getV2EmailSend?:  {
    __typename: "v2EmailSend",
    contentEmail?: string | null,
    contentMessage?: string | null,
    createdAt: string,
    date?: string | null,
    email?: string | null,
    emailState?: v2EmailState | null,
    enrollmentId?: string | null,
    id: string,
    phone?: string | null,
    phoneState?: v2EmailState | null,
    privateEnrollmentId?: string | null,
    studentId: string,
    type: v2TypeOfEmail,
    typeSend: v2TypeSend,
    updatedAt: string,
    userSend?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userSendId: string,
  } | null,
};

export type GetV2GmailInboxQueryVariables = {
  id: string,
};

export type GetV2GmailInboxQuery = {
  getV2GmailInbox?:  {
    __typename: "v2GmailInbox",
    attachments?: string | null,
    bodyHtml?: string | null,
    bodyText?: string | null,
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    dateSent: string,
    dateStr: string,
    fromEmail?: string | null,
    fromName?: string | null,
    gmailAccount: string,
    hasAttachments?: boolean | null,
    id: string,
    isRead?: boolean | null,
    labels?: Array< string | null > | null,
    messageId: string,
    snippet?: string | null,
    source?: string | null,
    subject?: string | null,
    threadId: string,
    toEmails?: Array< string | null > | null,
    type?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetV2ManagersQueryVariables = {
  id: string,
};

export type GetV2ManagersQuery = {
  getV2Managers?:  {
    __typename: "v2Managers",
    createdAt: string,
    email?: string | null,
    firstName?: string | null,
    id: string,
    isActive?: boolean | null,
    lastName?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
  } | null,
};

export type GetV2MessageQueryVariables = {
  id: string,
};

export type GetV2MessageQuery = {
  getV2Message?:  {
    __typename: "v2Message",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    source: string,
    type?: string | null,
    updatedAt: string,
  } | null,
};

export type GetV2MetadataQueryVariables = {
  id: string,
};

export type GetV2MetadataQuery = {
  getV2Metadata?:  {
    __typename: "v2Metadata",
    createdAt: string,
    id: string,
    key?: string | null,
    metadata?:  {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null,
    parametersId?: string | null,
    updatedAt: string,
    value?: string | null,
  } | null,
};

export type GetV2ParametersQueryVariables = {
  id: string,
};

export type GetV2ParametersQuery = {
  getV2Parameters?:  {
    __typename: "v2Parameters",
    country: string,
    createdAt: string,
    id: string,
    idParent?: string | null,
    label: string,
    metadata?:  {
      __typename: "Modelv2MetadataConnection",
      nextToken?: string | null,
    } | null,
    typeOfParameter?:  {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null,
    typeOfParameterId?: string | null,
    updatedAt: string,
    value: string,
  } | null,
};

export type GetV2ParametersEncQueryVariables = {
  id: string,
};

export type GetV2ParametersEncQuery = {
  getV2ParametersEnc?:  {
    __typename: "v2ParametersEnc",
    createdAt: string,
    description?: string | null,
    id: string,
    typeOfParameter?:  {
      __typename: "Modelv2ParametersConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetV2PaymentTransactionsQueryVariables = {
  id: string,
};

export type GetV2PaymentTransactionsQuery = {
  getV2PaymentTransactions?:  {
    __typename: "v2PaymentTransactions",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_detail?: string | null,
    card_number?: string | null,
    createdAt: string,
    day: string,
    glosa: string,
    hasRefund?: boolean | null,
    hour?: string | null,
    id: string,
    installments_amount?: string | null,
    installments_number?: string | null,
    month: string,
    payment_type_code?: string | null,
    response_code?: string | null,
    session_id?: string | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    shoppingCartId?: string | null,
    status?: string | null,
    token?: string | null,
    transaction_date?: string | null,
    updatedAt: string,
    urlWebpay?: string | null,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
    vci?: string | null,
    year?: string | null,
  } | null,
};

export type GetV2PermissionsQueryVariables = {
  id: string,
};

export type GetV2PermissionsQuery = {
  getV2Permissions?:  {
    __typename: "v2Permissions",
    Padre?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    Submenu?:  {
      __typename: "Modelv2PermissionsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    isLeaf?: boolean | null,
    isVisible?: boolean | null,
    name: string,
    order?: number | null,
    padreId?: string | null,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetV2ProductQueryVariables = {
  id: string,
};

export type GetV2ProductQuery = {
  getV2Product?:  {
    __typename: "v2Product",
    createdAt: string,
    criticalStock: number,
    currentStock: number,
    id: string,
    isActive?: boolean | null,
    name: string,
    profits: number,
    purchasePrice: number,
    sellingPrice: number,
    sku: string,
    supplier?:  {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null,
    supplierId: string,
    updatedAt: string,
  } | null,
};

export type GetV2ProfitCenterQueryVariables = {
  id: string,
};

export type GetV2ProfitCenterQuery = {
  getV2ProfitCenter?:  {
    __typename: "v2ProfitCenter",
    code?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    isActive?: boolean | null,
    managerID?: string | null,
    managers?:  {
      __typename: "Modelv2ManagersConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    parentProfitCenterID?: string | null,
    transactions?:  {
      __typename: "Modelv2TransactionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetV2RelationshipQueryVariables = {
  id: string,
};

export type GetV2RelationshipQuery = {
  getV2Relationship?:  {
    __typename: "v2Relationship",
    createdAt: string,
    id: string,
    relationType: v2RelationType,
    studentId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type GetV2RolPermissionsQueryVariables = {
  id: string,
};

export type GetV2RolPermissionsQuery = {
  getV2RolPermissions?:  {
    __typename: "v2RolPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId: string,
    updatedAt: string,
  } | null,
};

export type GetV2RolesQueryVariables = {
  id: string,
};

export type GetV2RolesQuery = {
  getV2Roles?:  {
    __typename: "v2Roles",
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    name: string,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "Modelv2UsersConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetV2SellersCommissionQueryVariables = {
  id: string,
};

export type GetV2SellersCommissionQuery = {
  getV2SellersCommission?:  {
    __typename: "v2SellersCommission",
    amount?: number | null,
    createdAt: string,
    description?: string | null,
    id: string,
    paymentAmount?: number | null,
    salesCommission?: number | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    status: v2StatusCommission,
    type: v2TypeDetail,
    updatedAt: string,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
  } | null,
};

export type GetV2SentEmailQueryVariables = {
  id: string,
};

export type GetV2SentEmailQuery = {
  getV2SentEmail?:  {
    __typename: "v2SentEmail",
    body?: string | null,
    createdAt: string,
    emailState?: v2EmailState | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type GetV2ShoppingCartQueryVariables = {
  id: string,
};

export type GetV2ShoppingCartQuery = {
  getV2ShoppingCart?:  {
    __typename: "v2ShoppingCart",
    cartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    seller?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    sellerId: string,
    sellersCommission?:  {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null,
    sellersCommissionId?: string | null,
    status?: string | null,
    totalPrice: number,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type GetV2ShoppingCartDetailQueryVariables = {
  id: string,
};

export type GetV2ShoppingCartDetailQuery = {
  getV2ShoppingCartDetail?:  {
    __typename: "v2ShoppingCartDetail",
    academyEnrollmentId?: string | null,
    amount: number,
    cart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    cartId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    createdById?: string | null,
    detail: string,
    enrollmentId?: string | null,
    id: string,
    privateEnrollmentId?: string | null,
    quantity: number,
    type: v2TypeDetail,
    updatedAt: string,
    wasDeleted?: boolean | null,
  } | null,
};

export type GetV2SupplierQueryVariables = {
  id: string,
};

export type GetV2SupplierQuery = {
  getV2Supplier?:  {
    __typename: "v2Supplier",
    address?: string | null,
    contactPerson?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    name: string,
    phone?: string | null,
    products?:  {
      __typename: "Modelv2ProductConnection",
      nextToken?: string | null,
    } | null,
    taxId?: string | null,
    updatedAt: string,
  } | null,
};

export type GetV2SupportTicketQueryVariables = {
  id: string,
};

export type GetV2SupportTicketQuery = {
  getV2SupportTicket?:  {
    __typename: "v2SupportTicket",
    createdAt: string,
    date: string,
    day: string,
    description: string,
    email: string,
    id: string,
    lastModificationUser?: string | null,
    month: string,
    name: string,
    phoneNumber: string,
    reason?: v2reasonType | null,
    statusTicket?: v2statusTicketType | null,
    studentId?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type GetV2TicketCommentQueryVariables = {
  id: string,
};

export type GetV2TicketCommentQuery = {
  getV2TicketComment?:  {
    __typename: "v2TicketComment",
    comment?:  {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null,
    commentId: string,
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
  } | null,
};

export type GetV2TicketUserQueryVariables = {
  id: string,
};

export type GetV2TicketUserQuery = {
  getV2TicketUser?:  {
    __typename: "v2TicketUser",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type GetV2TransactionsQueryVariables = {
  id: string,
};

export type GetV2TransactionsQuery = {
  getV2Transactions?:  {
    __typename: "v2Transactions",
    amount?: number | null,
    categoryID?: string | null,
    categoryType?: v2CategoryType | null,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    month?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type GetV2UserPermissionsQueryVariables = {
  id: string,
};

export type GetV2UserPermissionsQuery = {
  getV2UserPermissions?:  {
    __typename: "v2UserPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type GetV2UsersQueryVariables = {
  id: string,
};

export type GetV2UsersQuery = {
  getV2Users?:  {
    __typename: "v2Users",
    city?: string | null,
    contactPhone?: string | null,
    country?: string | null,
    createdAt: string,
    email: string,
    emailSend?:  {
      __typename: "Modelv2EmailSendConnection",
      nextToken?: string | null,
    } | null,
    firstContact?: boolean | null,
    gmailMessages?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    ig?: string | null,
    isAcademyStudent?: boolean | null,
    isActive?: boolean | null,
    isEmployed?: boolean | null,
    latitude?: number | null,
    longitude?: number | null,
    name: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    relationships?:  {
      __typename: "Modelv2RelationshipConnection",
      nextToken?: string | null,
    } | null,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId?: string | null,
    salesCommission?: number | null,
    sellersCommissions?:  {
      __typename: "Modelv2SellersCommissionConnection",
      nextToken?: string | null,
    } | null,
    shoppingCart?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartSeller?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    state?: string | null,
    streetAddress?: string | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
    validated?: boolean | null,
    zipCode?: string | null,
    zoomLevel?: number | null,
  } | null,
};

export type ListV2ActionByCustomerIdQueryVariables = {
  customerId: string,
  filter?: Modelv2ActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2ActionByCustomerIdQuery = {
  listV2ActionByCustomerId?:  {
    __typename: "Modelv2ActionConnection",
    items:  Array< {
      __typename: "v2Action",
      createdAt: string,
      customerId: string,
      id: string,
      message: string,
      status: string,
      updatedAt: string,
      urlDocument?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ActionsQueryVariables = {
  filter?: ModelV2ActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ActionsQuery = {
  listV2Actions?:  {
    __typename: "ModelV2ActionConnection",
    items:  Array< {
      __typename: "v2Action",
      createdAt: string,
      customerId: string,
      id: string,
      message: string,
      status: string,
      updatedAt: string,
      urlDocument?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2CommentTicketsQueryVariables = {
  filter?: ModelV2CommentTicketsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2CommentTicketsQuery = {
  listV2CommentTickets?:  {
    __typename: "ModelV2CommentTicketsConnection",
    items:  Array< {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2CorrelativesQueryVariables = {
  filter?: ModelV2CorrelativesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2CorrelativesQuery = {
  listV2Correlatives?:  {
    __typename: "ModelV2CorrelativesConnection",
    items:  Array< {
      __typename: "v2Correlatives",
      correlative?: number | null,
      createdAt: string,
      id: string,
      type?: v2ParametersType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2CorrelativesByTypeQueryVariables = {
  filter?: Modelv2CorrelativesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  type: v2ParametersType,
};

export type ListV2CorrelativesByTypeQuery = {
  listV2CorrelativesByType?:  {
    __typename: "Modelv2CorrelativesConnection",
    items:  Array< {
      __typename: "v2Correlatives",
      correlative?: number | null,
      createdAt: string,
      id: string,
      type?: v2ParametersType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2CustomerActionByCustomerIdAndDateQueryVariables = {
  customerId: string,
  date?: ModelStringKeyConditionInput | null,
  filter?: Modelv2CustomerActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2CustomerActionByCustomerIdAndDateQuery = {
  listV2CustomerActionByCustomerIdAndDate?:  {
    __typename: "Modelv2CustomerActionConnection",
    items:  Array< {
      __typename: "v2CustomerAction",
      createdAt: string,
      customerId: string,
      date: string,
      detail: string,
      docUrl?: string | null,
      id: string,
      status: string,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2CustomerActionsQueryVariables = {
  filter?: ModelV2CustomerActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2CustomerActionsQuery = {
  listV2CustomerActions?:  {
    __typename: "ModelV2CustomerActionConnection",
    items:  Array< {
      __typename: "v2CustomerAction",
      createdAt: string,
      customerId: string,
      date: string,
      detail: string,
      docUrl?: string | null,
      id: string,
      status: string,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2CustomerByEmailQueryVariables = {
  email: string,
  filter?: Modelv2CustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2CustomerByEmailQuery = {
  listV2CustomerByEmail?:  {
    __typename: "Modelv2CustomerConnection",
    items:  Array< {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2CustomersQueryVariables = {
  filter?: ModelV2CustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2CustomersQuery = {
  listV2Customers?:  {
    __typename: "ModelV2CustomerConnection",
    items:  Array< {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2EmailSendByEnrollmentIdQueryVariables = {
  enrollmentId: string,
  filter?: Modelv2EmailSendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2EmailSendByEnrollmentIdQuery = {
  listV2EmailSendByEnrollmentId?:  {
    __typename: "Modelv2EmailSendConnection",
    items:  Array< {
      __typename: "v2EmailSend",
      contentEmail?: string | null,
      contentMessage?: string | null,
      createdAt: string,
      date?: string | null,
      email?: string | null,
      emailState?: v2EmailState | null,
      enrollmentId?: string | null,
      id: string,
      phone?: string | null,
      phoneState?: v2EmailState | null,
      privateEnrollmentId?: string | null,
      studentId: string,
      type: v2TypeOfEmail,
      typeSend: v2TypeSend,
      updatedAt: string,
      userSendId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2EmailSendByStudentIdQueryVariables = {
  filter?: Modelv2EmailSendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  studentId: string,
};

export type ListV2EmailSendByStudentIdQuery = {
  listV2EmailSendByStudentId?:  {
    __typename: "Modelv2EmailSendConnection",
    items:  Array< {
      __typename: "v2EmailSend",
      contentEmail?: string | null,
      contentMessage?: string | null,
      createdAt: string,
      date?: string | null,
      email?: string | null,
      emailState?: v2EmailState | null,
      enrollmentId?: string | null,
      id: string,
      phone?: string | null,
      phoneState?: v2EmailState | null,
      privateEnrollmentId?: string | null,
      studentId: string,
      type: v2TypeOfEmail,
      typeSend: v2TypeSend,
      updatedAt: string,
      userSendId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2EmailSendByUserSendIdQueryVariables = {
  filter?: Modelv2EmailSendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userSendId: string,
};

export type ListV2EmailSendByUserSendIdQuery = {
  listV2EmailSendByUserSendId?:  {
    __typename: "Modelv2EmailSendConnection",
    items:  Array< {
      __typename: "v2EmailSend",
      contentEmail?: string | null,
      contentMessage?: string | null,
      createdAt: string,
      date?: string | null,
      email?: string | null,
      emailState?: v2EmailState | null,
      enrollmentId?: string | null,
      id: string,
      phone?: string | null,
      phoneState?: v2EmailState | null,
      privateEnrollmentId?: string | null,
      studentId: string,
      type: v2TypeOfEmail,
      typeSend: v2TypeSend,
      updatedAt: string,
      userSendId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2EmailSendsQueryVariables = {
  filter?: ModelV2EmailSendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2EmailSendsQuery = {
  listV2EmailSends?:  {
    __typename: "ModelV2EmailSendConnection",
    items:  Array< {
      __typename: "v2EmailSend",
      contentEmail?: string | null,
      contentMessage?: string | null,
      createdAt: string,
      date?: string | null,
      email?: string | null,
      emailState?: v2EmailState | null,
      enrollmentId?: string | null,
      id: string,
      phone?: string | null,
      phoneState?: v2EmailState | null,
      privateEnrollmentId?: string | null,
      studentId: string,
      type: v2TypeOfEmail,
      typeSend: v2TypeSend,
      updatedAt: string,
      userSendId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2GmailInboxByCustomerIdAndDateSentQueryVariables = {
  customerId: string,
  dateSent?: ModelStringKeyConditionInput | null,
  filter?: Modelv2GmailInboxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2GmailInboxByCustomerIdAndDateSentQuery = {
  listV2GmailInboxByCustomerIdAndDateSent?:  {
    __typename: "Modelv2GmailInboxConnection",
    items:  Array< {
      __typename: "v2GmailInbox",
      attachments?: string | null,
      bodyHtml?: string | null,
      bodyText?: string | null,
      createdAt: string,
      customerId?: string | null,
      dateSent: string,
      dateStr: string,
      fromEmail?: string | null,
      fromName?: string | null,
      gmailAccount: string,
      hasAttachments?: boolean | null,
      id: string,
      isRead?: boolean | null,
      labels?: Array< string | null > | null,
      messageId: string,
      snippet?: string | null,
      source?: string | null,
      subject?: string | null,
      threadId: string,
      toEmails?: Array< string | null > | null,
      type?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2GmailInboxByDateStrQueryVariables = {
  dateStr: string,
  filter?: Modelv2GmailInboxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2GmailInboxByDateStrQuery = {
  listV2GmailInboxByDateStr?:  {
    __typename: "Modelv2GmailInboxConnection",
    items:  Array< {
      __typename: "v2GmailInbox",
      attachments?: string | null,
      bodyHtml?: string | null,
      bodyText?: string | null,
      createdAt: string,
      customerId?: string | null,
      dateSent: string,
      dateStr: string,
      fromEmail?: string | null,
      fromName?: string | null,
      gmailAccount: string,
      hasAttachments?: boolean | null,
      id: string,
      isRead?: boolean | null,
      labels?: Array< string | null > | null,
      messageId: string,
      snippet?: string | null,
      source?: string | null,
      subject?: string | null,
      threadId: string,
      toEmails?: Array< string | null > | null,
      type?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2GmailInboxByFromEmailAndDateSentQueryVariables = {
  dateSent?: ModelStringKeyConditionInput | null,
  filter?: Modelv2GmailInboxFilterInput | null,
  fromEmail: string,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2GmailInboxByFromEmailAndDateSentQuery = {
  listV2GmailInboxByFromEmailAndDateSent?:  {
    __typename: "Modelv2GmailInboxConnection",
    items:  Array< {
      __typename: "v2GmailInbox",
      attachments?: string | null,
      bodyHtml?: string | null,
      bodyText?: string | null,
      createdAt: string,
      customerId?: string | null,
      dateSent: string,
      dateStr: string,
      fromEmail?: string | null,
      fromName?: string | null,
      gmailAccount: string,
      hasAttachments?: boolean | null,
      id: string,
      isRead?: boolean | null,
      labels?: Array< string | null > | null,
      messageId: string,
      snippet?: string | null,
      source?: string | null,
      subject?: string | null,
      threadId: string,
      toEmails?: Array< string | null > | null,
      type?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2GmailInboxByGmailAccountAndDateSentQueryVariables = {
  dateSent?: ModelStringKeyConditionInput | null,
  filter?: Modelv2GmailInboxFilterInput | null,
  gmailAccount: string,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2GmailInboxByGmailAccountAndDateSentQuery = {
  listV2GmailInboxByGmailAccountAndDateSent?:  {
    __typename: "Modelv2GmailInboxConnection",
    items:  Array< {
      __typename: "v2GmailInbox",
      attachments?: string | null,
      bodyHtml?: string | null,
      bodyText?: string | null,
      createdAt: string,
      customerId?: string | null,
      dateSent: string,
      dateStr: string,
      fromEmail?: string | null,
      fromName?: string | null,
      gmailAccount: string,
      hasAttachments?: boolean | null,
      id: string,
      isRead?: boolean | null,
      labels?: Array< string | null > | null,
      messageId: string,
      snippet?: string | null,
      source?: string | null,
      subject?: string | null,
      threadId: string,
      toEmails?: Array< string | null > | null,
      type?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2GmailInboxByMessageIdQueryVariables = {
  filter?: Modelv2GmailInboxFilterInput | null,
  limit?: number | null,
  messageId: string,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2GmailInboxByMessageIdQuery = {
  listV2GmailInboxByMessageId?:  {
    __typename: "Modelv2GmailInboxConnection",
    items:  Array< {
      __typename: "v2GmailInbox",
      attachments?: string | null,
      bodyHtml?: string | null,
      bodyText?: string | null,
      createdAt: string,
      customerId?: string | null,
      dateSent: string,
      dateStr: string,
      fromEmail?: string | null,
      fromName?: string | null,
      gmailAccount: string,
      hasAttachments?: boolean | null,
      id: string,
      isRead?: boolean | null,
      labels?: Array< string | null > | null,
      messageId: string,
      snippet?: string | null,
      source?: string | null,
      subject?: string | null,
      threadId: string,
      toEmails?: Array< string | null > | null,
      type?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2GmailInboxByUserIdAndDateSentQueryVariables = {
  dateSent?: ModelStringKeyConditionInput | null,
  filter?: Modelv2GmailInboxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId: string,
};

export type ListV2GmailInboxByUserIdAndDateSentQuery = {
  listV2GmailInboxByUserIdAndDateSent?:  {
    __typename: "Modelv2GmailInboxConnection",
    items:  Array< {
      __typename: "v2GmailInbox",
      attachments?: string | null,
      bodyHtml?: string | null,
      bodyText?: string | null,
      createdAt: string,
      customerId?: string | null,
      dateSent: string,
      dateStr: string,
      fromEmail?: string | null,
      fromName?: string | null,
      gmailAccount: string,
      hasAttachments?: boolean | null,
      id: string,
      isRead?: boolean | null,
      labels?: Array< string | null > | null,
      messageId: string,
      snippet?: string | null,
      source?: string | null,
      subject?: string | null,
      threadId: string,
      toEmails?: Array< string | null > | null,
      type?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2GmailInboxesQueryVariables = {
  filter?: ModelV2GmailInboxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2GmailInboxesQuery = {
  listV2GmailInboxes?:  {
    __typename: "ModelV2GmailInboxConnection",
    items:  Array< {
      __typename: "v2GmailInbox",
      attachments?: string | null,
      bodyHtml?: string | null,
      bodyText?: string | null,
      createdAt: string,
      customerId?: string | null,
      dateSent: string,
      dateStr: string,
      fromEmail?: string | null,
      fromName?: string | null,
      gmailAccount: string,
      hasAttachments?: boolean | null,
      id: string,
      isRead?: boolean | null,
      labels?: Array< string | null > | null,
      messageId: string,
      snippet?: string | null,
      source?: string | null,
      subject?: string | null,
      threadId: string,
      toEmails?: Array< string | null > | null,
      type?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ManagersQueryVariables = {
  filter?: ModelV2ManagersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ManagersQuery = {
  listV2Managers?:  {
    __typename: "ModelV2ManagersConnection",
    items:  Array< {
      __typename: "v2Managers",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id: string,
      isActive?: boolean | null,
      lastName?: string | null,
      profitCenterID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ManagersByEmailQueryVariables = {
  email: string,
  filter?: Modelv2ManagersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2ManagersByEmailQuery = {
  listV2ManagersByEmail?:  {
    __typename: "Modelv2ManagersConnection",
    items:  Array< {
      __typename: "v2Managers",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id: string,
      isActive?: boolean | null,
      lastName?: string | null,
      profitCenterID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2MessageByCustomerIdQueryVariables = {
  customerId: string,
  filter?: Modelv2MessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2MessageByCustomerIdQuery = {
  listV2MessageByCustomerId?:  {
    __typename: "Modelv2MessageConnection",
    items:  Array< {
      __typename: "v2Message",
      createdAt: string,
      customerId: string,
      id: string,
      message: string,
      source: string,
      type?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2MessagesQueryVariables = {
  filter?: ModelV2MessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2MessagesQuery = {
  listV2Messages?:  {
    __typename: "ModelV2MessageConnection",
    items:  Array< {
      __typename: "v2Message",
      createdAt: string,
      customerId: string,
      id: string,
      message: string,
      source: string,
      type?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2MetadataQueryVariables = {
  filter?: ModelV2MetadataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2MetadataQuery = {
  listV2Metadata?:  {
    __typename: "ModelV2MetadataConnection",
    items:  Array< {
      __typename: "v2Metadata",
      createdAt: string,
      id: string,
      key?: string | null,
      parametersId?: string | null,
      updatedAt: string,
      value?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ParametersQueryVariables = {
  filter?: ModelV2ParametersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ParametersQuery = {
  listV2Parameters?:  {
    __typename: "ModelV2ParametersConnection",
    items:  Array< {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ParametersByCountryAndLabelQueryVariables = {
  country: string,
  filter?: Modelv2ParametersFilterInput | null,
  label?: ModelStringKeyConditionInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2ParametersByCountryAndLabelQuery = {
  listV2ParametersByCountryAndLabel?:  {
    __typename: "Modelv2ParametersConnection",
    items:  Array< {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ParametersEncsQueryVariables = {
  filter?: ModelV2ParametersEncFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ParametersEncsQuery = {
  listV2ParametersEncs?:  {
    __typename: "ModelV2ParametersEncConnection",
    items:  Array< {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2PaymentTransactionsQueryVariables = {
  filter?: ModelV2PaymentTransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2PaymentTransactionsQuery = {
  listV2PaymentTransactions?:  {
    __typename: "ModelV2PaymentTransactionsConnection",
    items:  Array< {
      __typename: "v2PaymentTransactions",
      accounting_date?: string | null,
      amount?: number | null,
      authorization_code?: string | null,
      buy_order?: string | null,
      card_detail?: string | null,
      card_number?: string | null,
      createdAt: string,
      day: string,
      glosa: string,
      hasRefund?: boolean | null,
      hour?: string | null,
      id: string,
      installments_amount?: string | null,
      installments_number?: string | null,
      month: string,
      payment_type_code?: string | null,
      response_code?: string | null,
      session_id?: string | null,
      shoppingCartId?: string | null,
      status?: string | null,
      token?: string | null,
      transaction_date?: string | null,
      updatedAt: string,
      urlWebpay?: string | null,
      usersId?: string | null,
      vci?: string | null,
      year?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2PaymentTransactionsByDayAndMonthAndYearAndHourQueryVariables = {
  day: string,
  filter?: Modelv2PaymentTransactionsFilterInput | null,
  limit?: number | null,
  monthYearHour?: Modelv2PaymentTransactionsSearchByDiaMesAnoHourCompositeKeyConditionInput | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2PaymentTransactionsByDayAndMonthAndYearAndHourQuery = {
  listV2PaymentTransactionsByDayAndMonthAndYearAndHour?:  {
    __typename: "Modelv2PaymentTransactionsConnection",
    items:  Array< {
      __typename: "v2PaymentTransactions",
      accounting_date?: string | null,
      amount?: number | null,
      authorization_code?: string | null,
      buy_order?: string | null,
      card_detail?: string | null,
      card_number?: string | null,
      createdAt: string,
      day: string,
      glosa: string,
      hasRefund?: boolean | null,
      hour?: string | null,
      id: string,
      installments_amount?: string | null,
      installments_number?: string | null,
      month: string,
      payment_type_code?: string | null,
      response_code?: string | null,
      session_id?: string | null,
      shoppingCartId?: string | null,
      status?: string | null,
      token?: string | null,
      transaction_date?: string | null,
      updatedAt: string,
      urlWebpay?: string | null,
      usersId?: string | null,
      vci?: string | null,
      year?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2PaymentTransactionsByTokenQueryVariables = {
  filter?: Modelv2PaymentTransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  token: string,
};

export type ListV2PaymentTransactionsByTokenQuery = {
  listV2PaymentTransactionsByToken?:  {
    __typename: "Modelv2PaymentTransactionsConnection",
    items:  Array< {
      __typename: "v2PaymentTransactions",
      accounting_date?: string | null,
      amount?: number | null,
      authorization_code?: string | null,
      buy_order?: string | null,
      card_detail?: string | null,
      card_number?: string | null,
      createdAt: string,
      day: string,
      glosa: string,
      hasRefund?: boolean | null,
      hour?: string | null,
      id: string,
      installments_amount?: string | null,
      installments_number?: string | null,
      month: string,
      payment_type_code?: string | null,
      response_code?: string | null,
      session_id?: string | null,
      shoppingCartId?: string | null,
      status?: string | null,
      token?: string | null,
      transaction_date?: string | null,
      updatedAt: string,
      urlWebpay?: string | null,
      usersId?: string | null,
      vci?: string | null,
      year?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2PermissionsQueryVariables = {
  filter?: ModelV2PermissionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2PermissionsQuery = {
  listV2Permissions?:  {
    __typename: "ModelV2PermissionsConnection",
    items:  Array< {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ProductBySkuQueryVariables = {
  filter?: Modelv2ProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sku: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2ProductBySkuQuery = {
  listV2ProductBySku?:  {
    __typename: "Modelv2ProductConnection",
    items:  Array< {
      __typename: "v2Product",
      createdAt: string,
      criticalStock: number,
      currentStock: number,
      id: string,
      isActive?: boolean | null,
      name: string,
      profits: number,
      purchasePrice: number,
      sellingPrice: number,
      sku: string,
      supplierId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ProductsQueryVariables = {
  filter?: ModelV2ProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ProductsQuery = {
  listV2Products?:  {
    __typename: "ModelV2ProductConnection",
    items:  Array< {
      __typename: "v2Product",
      createdAt: string,
      criticalStock: number,
      currentStock: number,
      id: string,
      isActive?: boolean | null,
      name: string,
      profits: number,
      purchasePrice: number,
      sellingPrice: number,
      sku: string,
      supplierId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ProfitCenterByCodeQueryVariables = {
  code: string,
  filter?: Modelv2ProfitCenterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2ProfitCenterByCodeQuery = {
  listV2ProfitCenterByCode?:  {
    __typename: "Modelv2ProfitCenterConnection",
    items:  Array< {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ProfitCentersQueryVariables = {
  filter?: ModelV2ProfitCenterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ProfitCentersQuery = {
  listV2ProfitCenters?:  {
    __typename: "ModelV2ProfitCenterConnection",
    items:  Array< {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2RelationshipsQueryVariables = {
  filter?: ModelV2RelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2RelationshipsQuery = {
  listV2Relationships?:  {
    __typename: "ModelV2RelationshipConnection",
    items:  Array< {
      __typename: "v2Relationship",
      createdAt: string,
      id: string,
      relationType: v2RelationType,
      studentId: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2RolPermissionsQueryVariables = {
  filter?: ModelV2RolPermissionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2RolPermissionsQuery = {
  listV2RolPermissions?:  {
    __typename: "ModelV2RolPermissionsConnection",
    items:  Array< {
      __typename: "v2RolPermissions",
      createdAt: string,
      id: string,
      permissionId: string,
      roleId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2RolesQueryVariables = {
  filter?: ModelV2RolesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2RolesQuery = {
  listV2Roles?:  {
    __typename: "ModelV2RolesConnection",
    items:  Array< {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2SellersCommissionsQueryVariables = {
  filter?: ModelV2SellersCommissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2SellersCommissionsQuery = {
  listV2SellersCommissions?:  {
    __typename: "ModelV2SellersCommissionConnection",
    items:  Array< {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2SentEmailsQueryVariables = {
  filter?: ModelV2SentEmailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2SentEmailsQuery = {
  listV2SentEmails?:  {
    __typename: "ModelV2SentEmailConnection",
    items:  Array< {
      __typename: "v2SentEmail",
      body?: string | null,
      createdAt: string,
      emailState?: v2EmailState | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ShoppingCartDetailByCartIdQueryVariables = {
  cartId: string,
  filter?: Modelv2ShoppingCartDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2ShoppingCartDetailByCartIdQuery = {
  listV2ShoppingCartDetailByCartId?:  {
    __typename: "Modelv2ShoppingCartDetailConnection",
    items:  Array< {
      __typename: "v2ShoppingCartDetail",
      academyEnrollmentId?: string | null,
      amount: number,
      cartId: string,
      createdAt: string,
      createdById?: string | null,
      detail: string,
      enrollmentId?: string | null,
      id: string,
      privateEnrollmentId?: string | null,
      quantity: number,
      type: v2TypeDetail,
      updatedAt: string,
      wasDeleted?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ShoppingCartDetailsQueryVariables = {
  filter?: ModelV2ShoppingCartDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ShoppingCartDetailsQuery = {
  listV2ShoppingCartDetails?:  {
    __typename: "ModelV2ShoppingCartDetailConnection",
    items:  Array< {
      __typename: "v2ShoppingCartDetail",
      academyEnrollmentId?: string | null,
      amount: number,
      cartId: string,
      createdAt: string,
      createdById?: string | null,
      detail: string,
      enrollmentId?: string | null,
      id: string,
      privateEnrollmentId?: string | null,
      quantity: number,
      type: v2TypeDetail,
      updatedAt: string,
      wasDeleted?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2ShoppingCartsQueryVariables = {
  filter?: ModelV2ShoppingCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2ShoppingCartsQuery = {
  listV2ShoppingCarts?:  {
    __typename: "ModelV2ShoppingCartConnection",
    items:  Array< {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2SuppliersQueryVariables = {
  filter?: ModelV2SupplierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2SuppliersQuery = {
  listV2Suppliers?:  {
    __typename: "ModelV2SupplierConnection",
    items:  Array< {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2SupportTicketByDateQueryVariables = {
  date: string,
  filter?: Modelv2SupportTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2SupportTicketByDateQuery = {
  listV2SupportTicketByDate?:  {
    __typename: "Modelv2SupportTicketConnection",
    items:  Array< {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2SupportTicketsQueryVariables = {
  filter?: ModelV2SupportTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2SupportTicketsQuery = {
  listV2SupportTickets?:  {
    __typename: "ModelV2SupportTicketConnection",
    items:  Array< {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2TicketCommentsQueryVariables = {
  filter?: ModelV2TicketCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2TicketCommentsQuery = {
  listV2TicketComments?:  {
    __typename: "ModelV2TicketCommentConnection",
    items:  Array< {
      __typename: "v2TicketComment",
      commentId: string,
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2TicketUsersQueryVariables = {
  filter?: ModelV2TicketUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2TicketUsersQuery = {
  listV2TicketUsers?:  {
    __typename: "ModelV2TicketUserConnection",
    items:  Array< {
      __typename: "v2TicketUser",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2TransactionsQueryVariables = {
  filter?: ModelV2TransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2TransactionsQuery = {
  listV2Transactions?:  {
    __typename: "ModelV2TransactionsConnection",
    items:  Array< {
      __typename: "v2Transactions",
      amount?: number | null,
      categoryID?: string | null,
      categoryType?: v2CategoryType | null,
      createdAt: string,
      date?: string | null,
      description?: string | null,
      id: string,
      month?: string | null,
      profitCenterID: string,
      updatedAt: string,
      year?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYearQueryVariables = {
  categoryIDMonthYear?: Modelv2TransactionsSearchByProfitCenterCompositeKeyConditionInput | null,
  filter?: Modelv2TransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  profitCenterID: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYearQuery = {
  listV2TransactionsByProfitCenterIDAndCategoryIDAndMonthAndYear?:  {
    __typename: "Modelv2TransactionsConnection",
    items:  Array< {
      __typename: "v2Transactions",
      amount?: number | null,
      categoryID?: string | null,
      categoryType?: v2CategoryType | null,
      createdAt: string,
      date?: string | null,
      description?: string | null,
      id: string,
      month?: string | null,
      profitCenterID: string,
      updatedAt: string,
      year?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2UserPermissionsQueryVariables = {
  filter?: ModelV2UserPermissionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2UserPermissionsQuery = {
  listV2UserPermissions?:  {
    __typename: "ModelV2UserPermissionsConnection",
    items:  Array< {
      __typename: "v2UserPermissions",
      createdAt: string,
      id: string,
      permissionId: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2UsersQueryVariables = {
  filter?: ModelV2UsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListV2UsersQuery = {
  listV2Users?:  {
    __typename: "ModelV2UsersConnection",
    items:  Array< {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2UsersByCountryQueryVariables = {
  country: string,
  filter?: Modelv2UsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2UsersByCountryQuery = {
  listV2UsersByCountry?:  {
    __typename: "Modelv2UsersConnection",
    items:  Array< {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListV2UsersByEmailQueryVariables = {
  email: string,
  filter?: Modelv2UsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListV2UsersByEmailQuery = {
  listV2UsersByEmail?:  {
    __typename: "Modelv2UsersConnection",
    items:  Array< {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type V2ListCognitoUsersQueryVariables = {
  filter?: string | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type V2ListCognitoUsersQuery = {
  v2ListCognitoUsers?:  {
    __typename: "V2ListCognitoUsersReturnType",
    nextToken?: string | null,
    users:  Array< {
      __typename: "v2CognitoUser",
      createdAt: string,
      email: string,
      enabled: boolean,
      name?: string | null,
      status: string,
      sub: string,
    } | null >,
  } | null,
};

export type CreateV2ActionMutationVariables = {
  condition?: ModelV2ActionConditionInput | null,
  input: CreateV2ActionInput,
};

export type CreateV2ActionMutation = {
  createV2Action?:  {
    __typename: "v2Action",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    status: string,
    updatedAt: string,
    urlDocument?: string | null,
    userId?: string | null,
  } | null,
};

export type CreateV2CommentTicketsMutationVariables = {
  condition?: ModelV2CommentTicketsConditionInput | null,
  input: CreateV2CommentTicketsInput,
};

export type CreateV2CommentTicketsMutation = {
  createV2CommentTickets?:  {
    __typename: "v2CommentTickets",
    createdAt: string,
    description: string,
    id: string,
    statusModificationIdUser?: string | null,
    statusModificationUser?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateV2CorrelativesMutationVariables = {
  condition?: ModelV2CorrelativesConditionInput | null,
  input: CreateV2CorrelativesInput,
};

export type CreateV2CorrelativesMutation = {
  createV2Correlatives?:  {
    __typename: "v2Correlatives",
    correlative?: number | null,
    createdAt: string,
    id: string,
    type?: v2ParametersType | null,
    updatedAt: string,
  } | null,
};

export type CreateV2CustomerMutationVariables = {
  condition?: ModelV2CustomerConditionInput | null,
  input: CreateV2CustomerInput,
};

export type CreateV2CustomerMutation = {
  createV2Customer?:  {
    __typename: "v2Customer",
    actions?:  {
      __typename: "Modelv2CustomerActionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    inboxItems?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "Modelv2MessageConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    phone: string,
    phone2?: string | null,
    requestDate?: string | null,
    status?: string | null,
    updatedAt: string,
    v2Actions?:  {
      __typename: "Modelv2ActionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateV2CustomerActionMutationVariables = {
  condition?: ModelV2CustomerActionConditionInput | null,
  input: CreateV2CustomerActionInput,
};

export type CreateV2CustomerActionMutation = {
  createV2CustomerAction?:  {
    __typename: "v2CustomerAction",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    date: string,
    detail: string,
    docUrl?: string | null,
    id: string,
    status: string,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type CreateV2EmailSendMutationVariables = {
  condition?: ModelV2EmailSendConditionInput | null,
  input: CreateV2EmailSendInput,
};

export type CreateV2EmailSendMutation = {
  createV2EmailSend?:  {
    __typename: "v2EmailSend",
    contentEmail?: string | null,
    contentMessage?: string | null,
    createdAt: string,
    date?: string | null,
    email?: string | null,
    emailState?: v2EmailState | null,
    enrollmentId?: string | null,
    id: string,
    phone?: string | null,
    phoneState?: v2EmailState | null,
    privateEnrollmentId?: string | null,
    studentId: string,
    type: v2TypeOfEmail,
    typeSend: v2TypeSend,
    updatedAt: string,
    userSend?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userSendId: string,
  } | null,
};

export type CreateV2GmailInboxMutationVariables = {
  condition?: ModelV2GmailInboxConditionInput | null,
  input: CreateV2GmailInboxInput,
};

export type CreateV2GmailInboxMutation = {
  createV2GmailInbox?:  {
    __typename: "v2GmailInbox",
    attachments?: string | null,
    bodyHtml?: string | null,
    bodyText?: string | null,
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    dateSent: string,
    dateStr: string,
    fromEmail?: string | null,
    fromName?: string | null,
    gmailAccount: string,
    hasAttachments?: boolean | null,
    id: string,
    isRead?: boolean | null,
    labels?: Array< string | null > | null,
    messageId: string,
    snippet?: string | null,
    source?: string | null,
    subject?: string | null,
    threadId: string,
    toEmails?: Array< string | null > | null,
    type?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateV2ManagersMutationVariables = {
  condition?: ModelV2ManagersConditionInput | null,
  input: CreateV2ManagersInput,
};

export type CreateV2ManagersMutation = {
  createV2Managers?:  {
    __typename: "v2Managers",
    createdAt: string,
    email?: string | null,
    firstName?: string | null,
    id: string,
    isActive?: boolean | null,
    lastName?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
  } | null,
};

export type CreateV2MessageMutationVariables = {
  condition?: ModelV2MessageConditionInput | null,
  input: CreateV2MessageInput,
};

export type CreateV2MessageMutation = {
  createV2Message?:  {
    __typename: "v2Message",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    source: string,
    type?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateV2MetadataMutationVariables = {
  condition?: ModelV2MetadataConditionInput | null,
  input: CreateV2MetadataInput,
};

export type CreateV2MetadataMutation = {
  createV2Metadata?:  {
    __typename: "v2Metadata",
    createdAt: string,
    id: string,
    key?: string | null,
    metadata?:  {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null,
    parametersId?: string | null,
    updatedAt: string,
    value?: string | null,
  } | null,
};

export type CreateV2ParametersMutationVariables = {
  condition?: ModelV2ParametersConditionInput | null,
  input: CreateV2ParametersInput,
};

export type CreateV2ParametersMutation = {
  createV2Parameters?:  {
    __typename: "v2Parameters",
    country: string,
    createdAt: string,
    id: string,
    idParent?: string | null,
    label: string,
    metadata?:  {
      __typename: "Modelv2MetadataConnection",
      nextToken?: string | null,
    } | null,
    typeOfParameter?:  {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null,
    typeOfParameterId?: string | null,
    updatedAt: string,
    value: string,
  } | null,
};

export type CreateV2ParametersEncMutationVariables = {
  condition?: ModelV2ParametersEncConditionInput | null,
  input: CreateV2ParametersEncInput,
};

export type CreateV2ParametersEncMutation = {
  createV2ParametersEnc?:  {
    __typename: "v2ParametersEnc",
    createdAt: string,
    description?: string | null,
    id: string,
    typeOfParameter?:  {
      __typename: "Modelv2ParametersConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateV2PaymentTransactionsMutationVariables = {
  condition?: ModelV2PaymentTransactionsConditionInput | null,
  input: CreateV2PaymentTransactionsInput,
};

export type CreateV2PaymentTransactionsMutation = {
  createV2PaymentTransactions?:  {
    __typename: "v2PaymentTransactions",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_detail?: string | null,
    card_number?: string | null,
    createdAt: string,
    day: string,
    glosa: string,
    hasRefund?: boolean | null,
    hour?: string | null,
    id: string,
    installments_amount?: string | null,
    installments_number?: string | null,
    month: string,
    payment_type_code?: string | null,
    response_code?: string | null,
    session_id?: string | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    shoppingCartId?: string | null,
    status?: string | null,
    token?: string | null,
    transaction_date?: string | null,
    updatedAt: string,
    urlWebpay?: string | null,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
    vci?: string | null,
    year?: string | null,
  } | null,
};

export type CreateV2PermissionsMutationVariables = {
  condition?: ModelV2PermissionsConditionInput | null,
  input: CreateV2PermissionsInput,
};

export type CreateV2PermissionsMutation = {
  createV2Permissions?:  {
    __typename: "v2Permissions",
    Padre?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    Submenu?:  {
      __typename: "Modelv2PermissionsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    isLeaf?: boolean | null,
    isVisible?: boolean | null,
    name: string,
    order?: number | null,
    padreId?: string | null,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateV2ProductMutationVariables = {
  condition?: ModelV2ProductConditionInput | null,
  input: CreateV2ProductInput,
};

export type CreateV2ProductMutation = {
  createV2Product?:  {
    __typename: "v2Product",
    createdAt: string,
    criticalStock: number,
    currentStock: number,
    id: string,
    isActive?: boolean | null,
    name: string,
    profits: number,
    purchasePrice: number,
    sellingPrice: number,
    sku: string,
    supplier?:  {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null,
    supplierId: string,
    updatedAt: string,
  } | null,
};

export type CreateV2ProfitCenterMutationVariables = {
  condition?: ModelV2ProfitCenterConditionInput | null,
  input: CreateV2ProfitCenterInput,
};

export type CreateV2ProfitCenterMutation = {
  createV2ProfitCenter?:  {
    __typename: "v2ProfitCenter",
    code?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    isActive?: boolean | null,
    managerID?: string | null,
    managers?:  {
      __typename: "Modelv2ManagersConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    parentProfitCenterID?: string | null,
    transactions?:  {
      __typename: "Modelv2TransactionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateV2RelationshipMutationVariables = {
  condition?: ModelV2RelationshipConditionInput | null,
  input: CreateV2RelationshipInput,
};

export type CreateV2RelationshipMutation = {
  createV2Relationship?:  {
    __typename: "v2Relationship",
    createdAt: string,
    id: string,
    relationType: v2RelationType,
    studentId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type CreateV2RolPermissionsMutationVariables = {
  condition?: ModelV2RolPermissionsConditionInput | null,
  input: CreateV2RolPermissionsInput,
};

export type CreateV2RolPermissionsMutation = {
  createV2RolPermissions?:  {
    __typename: "v2RolPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId: string,
    updatedAt: string,
  } | null,
};

export type CreateV2RolesMutationVariables = {
  condition?: ModelV2RolesConditionInput | null,
  input: CreateV2RolesInput,
};

export type CreateV2RolesMutation = {
  createV2Roles?:  {
    __typename: "v2Roles",
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    name: string,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "Modelv2UsersConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateV2SellersCommissionMutationVariables = {
  condition?: ModelV2SellersCommissionConditionInput | null,
  input: CreateV2SellersCommissionInput,
};

export type CreateV2SellersCommissionMutation = {
  createV2SellersCommission?:  {
    __typename: "v2SellersCommission",
    amount?: number | null,
    createdAt: string,
    description?: string | null,
    id: string,
    paymentAmount?: number | null,
    salesCommission?: number | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    status: v2StatusCommission,
    type: v2TypeDetail,
    updatedAt: string,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
  } | null,
};

export type CreateV2SentEmailMutationVariables = {
  condition?: ModelV2SentEmailConditionInput | null,
  input: CreateV2SentEmailInput,
};

export type CreateV2SentEmailMutation = {
  createV2SentEmail?:  {
    __typename: "v2SentEmail",
    body?: string | null,
    createdAt: string,
    emailState?: v2EmailState | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateV2ShoppingCartMutationVariables = {
  condition?: ModelV2ShoppingCartConditionInput | null,
  input: CreateV2ShoppingCartInput,
};

export type CreateV2ShoppingCartMutation = {
  createV2ShoppingCart?:  {
    __typename: "v2ShoppingCart",
    cartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    seller?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    sellerId: string,
    sellersCommission?:  {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null,
    sellersCommissionId?: string | null,
    status?: string | null,
    totalPrice: number,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type CreateV2ShoppingCartDetailMutationVariables = {
  condition?: ModelV2ShoppingCartDetailConditionInput | null,
  input: CreateV2ShoppingCartDetailInput,
};

export type CreateV2ShoppingCartDetailMutation = {
  createV2ShoppingCartDetail?:  {
    __typename: "v2ShoppingCartDetail",
    academyEnrollmentId?: string | null,
    amount: number,
    cart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    cartId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    createdById?: string | null,
    detail: string,
    enrollmentId?: string | null,
    id: string,
    privateEnrollmentId?: string | null,
    quantity: number,
    type: v2TypeDetail,
    updatedAt: string,
    wasDeleted?: boolean | null,
  } | null,
};

export type CreateV2SupplierMutationVariables = {
  condition?: ModelV2SupplierConditionInput | null,
  input: CreateV2SupplierInput,
};

export type CreateV2SupplierMutation = {
  createV2Supplier?:  {
    __typename: "v2Supplier",
    address?: string | null,
    contactPerson?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    name: string,
    phone?: string | null,
    products?:  {
      __typename: "Modelv2ProductConnection",
      nextToken?: string | null,
    } | null,
    taxId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateV2SupportTicketMutationVariables = {
  condition?: ModelV2SupportTicketConditionInput | null,
  input: CreateV2SupportTicketInput,
};

export type CreateV2SupportTicketMutation = {
  createV2SupportTicket?:  {
    __typename: "v2SupportTicket",
    createdAt: string,
    date: string,
    day: string,
    description: string,
    email: string,
    id: string,
    lastModificationUser?: string | null,
    month: string,
    name: string,
    phoneNumber: string,
    reason?: v2reasonType | null,
    statusTicket?: v2statusTicketType | null,
    studentId?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type CreateV2TicketCommentMutationVariables = {
  condition?: ModelV2TicketCommentConditionInput | null,
  input: CreateV2TicketCommentInput,
};

export type CreateV2TicketCommentMutation = {
  createV2TicketComment?:  {
    __typename: "v2TicketComment",
    comment?:  {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null,
    commentId: string,
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
  } | null,
};

export type CreateV2TicketUserMutationVariables = {
  condition?: ModelV2TicketUserConditionInput | null,
  input: CreateV2TicketUserInput,
};

export type CreateV2TicketUserMutation = {
  createV2TicketUser?:  {
    __typename: "v2TicketUser",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type CreateV2TransactionsMutationVariables = {
  condition?: ModelV2TransactionsConditionInput | null,
  input: CreateV2TransactionsInput,
};

export type CreateV2TransactionsMutation = {
  createV2Transactions?:  {
    __typename: "v2Transactions",
    amount?: number | null,
    categoryID?: string | null,
    categoryType?: v2CategoryType | null,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    month?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type CreateV2UserPermissionsMutationVariables = {
  condition?: ModelV2UserPermissionsConditionInput | null,
  input: CreateV2UserPermissionsInput,
};

export type CreateV2UserPermissionsMutation = {
  createV2UserPermissions?:  {
    __typename: "v2UserPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type CreateV2UsersMutationVariables = {
  condition?: ModelV2UsersConditionInput | null,
  input: CreateV2UsersInput,
};

export type CreateV2UsersMutation = {
  createV2Users?:  {
    __typename: "v2Users",
    city?: string | null,
    contactPhone?: string | null,
    country?: string | null,
    createdAt: string,
    email: string,
    emailSend?:  {
      __typename: "Modelv2EmailSendConnection",
      nextToken?: string | null,
    } | null,
    firstContact?: boolean | null,
    gmailMessages?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    ig?: string | null,
    isAcademyStudent?: boolean | null,
    isActive?: boolean | null,
    isEmployed?: boolean | null,
    latitude?: number | null,
    longitude?: number | null,
    name: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    relationships?:  {
      __typename: "Modelv2RelationshipConnection",
      nextToken?: string | null,
    } | null,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId?: string | null,
    salesCommission?: number | null,
    sellersCommissions?:  {
      __typename: "Modelv2SellersCommissionConnection",
      nextToken?: string | null,
    } | null,
    shoppingCart?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartSeller?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    state?: string | null,
    streetAddress?: string | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
    validated?: boolean | null,
    zipCode?: string | null,
    zoomLevel?: number | null,
  } | null,
};

export type DeleteV2ActionMutationVariables = {
  condition?: ModelV2ActionConditionInput | null,
  input: DeleteV2ActionInput,
};

export type DeleteV2ActionMutation = {
  deleteV2Action?:  {
    __typename: "v2Action",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    status: string,
    updatedAt: string,
    urlDocument?: string | null,
    userId?: string | null,
  } | null,
};

export type DeleteV2CommentTicketsMutationVariables = {
  condition?: ModelV2CommentTicketsConditionInput | null,
  input: DeleteV2CommentTicketsInput,
};

export type DeleteV2CommentTicketsMutation = {
  deleteV2CommentTickets?:  {
    __typename: "v2CommentTickets",
    createdAt: string,
    description: string,
    id: string,
    statusModificationIdUser?: string | null,
    statusModificationUser?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteV2CorrelativesMutationVariables = {
  condition?: ModelV2CorrelativesConditionInput | null,
  input: DeleteV2CorrelativesInput,
};

export type DeleteV2CorrelativesMutation = {
  deleteV2Correlatives?:  {
    __typename: "v2Correlatives",
    correlative?: number | null,
    createdAt: string,
    id: string,
    type?: v2ParametersType | null,
    updatedAt: string,
  } | null,
};

export type DeleteV2CustomerMutationVariables = {
  condition?: ModelV2CustomerConditionInput | null,
  input: DeleteV2CustomerInput,
};

export type DeleteV2CustomerMutation = {
  deleteV2Customer?:  {
    __typename: "v2Customer",
    actions?:  {
      __typename: "Modelv2CustomerActionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    inboxItems?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "Modelv2MessageConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    phone: string,
    phone2?: string | null,
    requestDate?: string | null,
    status?: string | null,
    updatedAt: string,
    v2Actions?:  {
      __typename: "Modelv2ActionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteV2CustomerActionMutationVariables = {
  condition?: ModelV2CustomerActionConditionInput | null,
  input: DeleteV2CustomerActionInput,
};

export type DeleteV2CustomerActionMutation = {
  deleteV2CustomerAction?:  {
    __typename: "v2CustomerAction",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    date: string,
    detail: string,
    docUrl?: string | null,
    id: string,
    status: string,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type DeleteV2EmailSendMutationVariables = {
  condition?: ModelV2EmailSendConditionInput | null,
  input: DeleteV2EmailSendInput,
};

export type DeleteV2EmailSendMutation = {
  deleteV2EmailSend?:  {
    __typename: "v2EmailSend",
    contentEmail?: string | null,
    contentMessage?: string | null,
    createdAt: string,
    date?: string | null,
    email?: string | null,
    emailState?: v2EmailState | null,
    enrollmentId?: string | null,
    id: string,
    phone?: string | null,
    phoneState?: v2EmailState | null,
    privateEnrollmentId?: string | null,
    studentId: string,
    type: v2TypeOfEmail,
    typeSend: v2TypeSend,
    updatedAt: string,
    userSend?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userSendId: string,
  } | null,
};

export type DeleteV2GmailInboxMutationVariables = {
  condition?: ModelV2GmailInboxConditionInput | null,
  input: DeleteV2GmailInboxInput,
};

export type DeleteV2GmailInboxMutation = {
  deleteV2GmailInbox?:  {
    __typename: "v2GmailInbox",
    attachments?: string | null,
    bodyHtml?: string | null,
    bodyText?: string | null,
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    dateSent: string,
    dateStr: string,
    fromEmail?: string | null,
    fromName?: string | null,
    gmailAccount: string,
    hasAttachments?: boolean | null,
    id: string,
    isRead?: boolean | null,
    labels?: Array< string | null > | null,
    messageId: string,
    snippet?: string | null,
    source?: string | null,
    subject?: string | null,
    threadId: string,
    toEmails?: Array< string | null > | null,
    type?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteV2ManagersMutationVariables = {
  condition?: ModelV2ManagersConditionInput | null,
  input: DeleteV2ManagersInput,
};

export type DeleteV2ManagersMutation = {
  deleteV2Managers?:  {
    __typename: "v2Managers",
    createdAt: string,
    email?: string | null,
    firstName?: string | null,
    id: string,
    isActive?: boolean | null,
    lastName?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
  } | null,
};

export type DeleteV2MessageMutationVariables = {
  condition?: ModelV2MessageConditionInput | null,
  input: DeleteV2MessageInput,
};

export type DeleteV2MessageMutation = {
  deleteV2Message?:  {
    __typename: "v2Message",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    source: string,
    type?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteV2MetadataMutationVariables = {
  condition?: ModelV2MetadataConditionInput | null,
  input: DeleteV2MetadataInput,
};

export type DeleteV2MetadataMutation = {
  deleteV2Metadata?:  {
    __typename: "v2Metadata",
    createdAt: string,
    id: string,
    key?: string | null,
    metadata?:  {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null,
    parametersId?: string | null,
    updatedAt: string,
    value?: string | null,
  } | null,
};

export type DeleteV2ParametersMutationVariables = {
  condition?: ModelV2ParametersConditionInput | null,
  input: DeleteV2ParametersInput,
};

export type DeleteV2ParametersMutation = {
  deleteV2Parameters?:  {
    __typename: "v2Parameters",
    country: string,
    createdAt: string,
    id: string,
    idParent?: string | null,
    label: string,
    metadata?:  {
      __typename: "Modelv2MetadataConnection",
      nextToken?: string | null,
    } | null,
    typeOfParameter?:  {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null,
    typeOfParameterId?: string | null,
    updatedAt: string,
    value: string,
  } | null,
};

export type DeleteV2ParametersEncMutationVariables = {
  condition?: ModelV2ParametersEncConditionInput | null,
  input: DeleteV2ParametersEncInput,
};

export type DeleteV2ParametersEncMutation = {
  deleteV2ParametersEnc?:  {
    __typename: "v2ParametersEnc",
    createdAt: string,
    description?: string | null,
    id: string,
    typeOfParameter?:  {
      __typename: "Modelv2ParametersConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteV2PaymentTransactionsMutationVariables = {
  condition?: ModelV2PaymentTransactionsConditionInput | null,
  input: DeleteV2PaymentTransactionsInput,
};

export type DeleteV2PaymentTransactionsMutation = {
  deleteV2PaymentTransactions?:  {
    __typename: "v2PaymentTransactions",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_detail?: string | null,
    card_number?: string | null,
    createdAt: string,
    day: string,
    glosa: string,
    hasRefund?: boolean | null,
    hour?: string | null,
    id: string,
    installments_amount?: string | null,
    installments_number?: string | null,
    month: string,
    payment_type_code?: string | null,
    response_code?: string | null,
    session_id?: string | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    shoppingCartId?: string | null,
    status?: string | null,
    token?: string | null,
    transaction_date?: string | null,
    updatedAt: string,
    urlWebpay?: string | null,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
    vci?: string | null,
    year?: string | null,
  } | null,
};

export type DeleteV2PermissionsMutationVariables = {
  condition?: ModelV2PermissionsConditionInput | null,
  input: DeleteV2PermissionsInput,
};

export type DeleteV2PermissionsMutation = {
  deleteV2Permissions?:  {
    __typename: "v2Permissions",
    Padre?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    Submenu?:  {
      __typename: "Modelv2PermissionsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    isLeaf?: boolean | null,
    isVisible?: boolean | null,
    name: string,
    order?: number | null,
    padreId?: string | null,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteV2ProductMutationVariables = {
  condition?: ModelV2ProductConditionInput | null,
  input: DeleteV2ProductInput,
};

export type DeleteV2ProductMutation = {
  deleteV2Product?:  {
    __typename: "v2Product",
    createdAt: string,
    criticalStock: number,
    currentStock: number,
    id: string,
    isActive?: boolean | null,
    name: string,
    profits: number,
    purchasePrice: number,
    sellingPrice: number,
    sku: string,
    supplier?:  {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null,
    supplierId: string,
    updatedAt: string,
  } | null,
};

export type DeleteV2ProfitCenterMutationVariables = {
  condition?: ModelV2ProfitCenterConditionInput | null,
  input: DeleteV2ProfitCenterInput,
};

export type DeleteV2ProfitCenterMutation = {
  deleteV2ProfitCenter?:  {
    __typename: "v2ProfitCenter",
    code?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    isActive?: boolean | null,
    managerID?: string | null,
    managers?:  {
      __typename: "Modelv2ManagersConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    parentProfitCenterID?: string | null,
    transactions?:  {
      __typename: "Modelv2TransactionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteV2RelationshipMutationVariables = {
  condition?: ModelV2RelationshipConditionInput | null,
  input: DeleteV2RelationshipInput,
};

export type DeleteV2RelationshipMutation = {
  deleteV2Relationship?:  {
    __typename: "v2Relationship",
    createdAt: string,
    id: string,
    relationType: v2RelationType,
    studentId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type DeleteV2RolPermissionsMutationVariables = {
  condition?: ModelV2RolPermissionsConditionInput | null,
  input: DeleteV2RolPermissionsInput,
};

export type DeleteV2RolPermissionsMutation = {
  deleteV2RolPermissions?:  {
    __typename: "v2RolPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId: string,
    updatedAt: string,
  } | null,
};

export type DeleteV2RolesMutationVariables = {
  condition?: ModelV2RolesConditionInput | null,
  input: DeleteV2RolesInput,
};

export type DeleteV2RolesMutation = {
  deleteV2Roles?:  {
    __typename: "v2Roles",
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    name: string,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "Modelv2UsersConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteV2SellersCommissionMutationVariables = {
  condition?: ModelV2SellersCommissionConditionInput | null,
  input: DeleteV2SellersCommissionInput,
};

export type DeleteV2SellersCommissionMutation = {
  deleteV2SellersCommission?:  {
    __typename: "v2SellersCommission",
    amount?: number | null,
    createdAt: string,
    description?: string | null,
    id: string,
    paymentAmount?: number | null,
    salesCommission?: number | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    status: v2StatusCommission,
    type: v2TypeDetail,
    updatedAt: string,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
  } | null,
};

export type DeleteV2SentEmailMutationVariables = {
  condition?: ModelV2SentEmailConditionInput | null,
  input: DeleteV2SentEmailInput,
};

export type DeleteV2SentEmailMutation = {
  deleteV2SentEmail?:  {
    __typename: "v2SentEmail",
    body?: string | null,
    createdAt: string,
    emailState?: v2EmailState | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteV2ShoppingCartMutationVariables = {
  condition?: ModelV2ShoppingCartConditionInput | null,
  input: DeleteV2ShoppingCartInput,
};

export type DeleteV2ShoppingCartMutation = {
  deleteV2ShoppingCart?:  {
    __typename: "v2ShoppingCart",
    cartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    seller?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    sellerId: string,
    sellersCommission?:  {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null,
    sellersCommissionId?: string | null,
    status?: string | null,
    totalPrice: number,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type DeleteV2ShoppingCartDetailMutationVariables = {
  condition?: ModelV2ShoppingCartDetailConditionInput | null,
  input: DeleteV2ShoppingCartDetailInput,
};

export type DeleteV2ShoppingCartDetailMutation = {
  deleteV2ShoppingCartDetail?:  {
    __typename: "v2ShoppingCartDetail",
    academyEnrollmentId?: string | null,
    amount: number,
    cart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    cartId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    createdById?: string | null,
    detail: string,
    enrollmentId?: string | null,
    id: string,
    privateEnrollmentId?: string | null,
    quantity: number,
    type: v2TypeDetail,
    updatedAt: string,
    wasDeleted?: boolean | null,
  } | null,
};

export type DeleteV2SupplierMutationVariables = {
  condition?: ModelV2SupplierConditionInput | null,
  input: DeleteV2SupplierInput,
};

export type DeleteV2SupplierMutation = {
  deleteV2Supplier?:  {
    __typename: "v2Supplier",
    address?: string | null,
    contactPerson?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    name: string,
    phone?: string | null,
    products?:  {
      __typename: "Modelv2ProductConnection",
      nextToken?: string | null,
    } | null,
    taxId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteV2SupportTicketMutationVariables = {
  condition?: ModelV2SupportTicketConditionInput | null,
  input: DeleteV2SupportTicketInput,
};

export type DeleteV2SupportTicketMutation = {
  deleteV2SupportTicket?:  {
    __typename: "v2SupportTicket",
    createdAt: string,
    date: string,
    day: string,
    description: string,
    email: string,
    id: string,
    lastModificationUser?: string | null,
    month: string,
    name: string,
    phoneNumber: string,
    reason?: v2reasonType | null,
    statusTicket?: v2statusTicketType | null,
    studentId?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type DeleteV2TicketCommentMutationVariables = {
  condition?: ModelV2TicketCommentConditionInput | null,
  input: DeleteV2TicketCommentInput,
};

export type DeleteV2TicketCommentMutation = {
  deleteV2TicketComment?:  {
    __typename: "v2TicketComment",
    comment?:  {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null,
    commentId: string,
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
  } | null,
};

export type DeleteV2TicketUserMutationVariables = {
  condition?: ModelV2TicketUserConditionInput | null,
  input: DeleteV2TicketUserInput,
};

export type DeleteV2TicketUserMutation = {
  deleteV2TicketUser?:  {
    __typename: "v2TicketUser",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type DeleteV2TransactionsMutationVariables = {
  condition?: ModelV2TransactionsConditionInput | null,
  input: DeleteV2TransactionsInput,
};

export type DeleteV2TransactionsMutation = {
  deleteV2Transactions?:  {
    __typename: "v2Transactions",
    amount?: number | null,
    categoryID?: string | null,
    categoryType?: v2CategoryType | null,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    month?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type DeleteV2UserPermissionsMutationVariables = {
  condition?: ModelV2UserPermissionsConditionInput | null,
  input: DeleteV2UserPermissionsInput,
};

export type DeleteV2UserPermissionsMutation = {
  deleteV2UserPermissions?:  {
    __typename: "v2UserPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type DeleteV2UsersMutationVariables = {
  condition?: ModelV2UsersConditionInput | null,
  input: DeleteV2UsersInput,
};

export type DeleteV2UsersMutation = {
  deleteV2Users?:  {
    __typename: "v2Users",
    city?: string | null,
    contactPhone?: string | null,
    country?: string | null,
    createdAt: string,
    email: string,
    emailSend?:  {
      __typename: "Modelv2EmailSendConnection",
      nextToken?: string | null,
    } | null,
    firstContact?: boolean | null,
    gmailMessages?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    ig?: string | null,
    isAcademyStudent?: boolean | null,
    isActive?: boolean | null,
    isEmployed?: boolean | null,
    latitude?: number | null,
    longitude?: number | null,
    name: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    relationships?:  {
      __typename: "Modelv2RelationshipConnection",
      nextToken?: string | null,
    } | null,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId?: string | null,
    salesCommission?: number | null,
    sellersCommissions?:  {
      __typename: "Modelv2SellersCommissionConnection",
      nextToken?: string | null,
    } | null,
    shoppingCart?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartSeller?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    state?: string | null,
    streetAddress?: string | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
    validated?: boolean | null,
    zipCode?: string | null,
    zoomLevel?: number | null,
  } | null,
};

export type UpdateV2ActionMutationVariables = {
  condition?: ModelV2ActionConditionInput | null,
  input: UpdateV2ActionInput,
};

export type UpdateV2ActionMutation = {
  updateV2Action?:  {
    __typename: "v2Action",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    status: string,
    updatedAt: string,
    urlDocument?: string | null,
    userId?: string | null,
  } | null,
};

export type UpdateV2CommentTicketsMutationVariables = {
  condition?: ModelV2CommentTicketsConditionInput | null,
  input: UpdateV2CommentTicketsInput,
};

export type UpdateV2CommentTicketsMutation = {
  updateV2CommentTickets?:  {
    __typename: "v2CommentTickets",
    createdAt: string,
    description: string,
    id: string,
    statusModificationIdUser?: string | null,
    statusModificationUser?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateV2CorrelativesMutationVariables = {
  condition?: ModelV2CorrelativesConditionInput | null,
  input: UpdateV2CorrelativesInput,
};

export type UpdateV2CorrelativesMutation = {
  updateV2Correlatives?:  {
    __typename: "v2Correlatives",
    correlative?: number | null,
    createdAt: string,
    id: string,
    type?: v2ParametersType | null,
    updatedAt: string,
  } | null,
};

export type UpdateV2CustomerMutationVariables = {
  condition?: ModelV2CustomerConditionInput | null,
  input: UpdateV2CustomerInput,
};

export type UpdateV2CustomerMutation = {
  updateV2Customer?:  {
    __typename: "v2Customer",
    actions?:  {
      __typename: "Modelv2CustomerActionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    inboxItems?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "Modelv2MessageConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    phone: string,
    phone2?: string | null,
    requestDate?: string | null,
    status?: string | null,
    updatedAt: string,
    v2Actions?:  {
      __typename: "Modelv2ActionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateV2CustomerActionMutationVariables = {
  condition?: ModelV2CustomerActionConditionInput | null,
  input: UpdateV2CustomerActionInput,
};

export type UpdateV2CustomerActionMutation = {
  updateV2CustomerAction?:  {
    __typename: "v2CustomerAction",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    date: string,
    detail: string,
    docUrl?: string | null,
    id: string,
    status: string,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type UpdateV2EmailSendMutationVariables = {
  condition?: ModelV2EmailSendConditionInput | null,
  input: UpdateV2EmailSendInput,
};

export type UpdateV2EmailSendMutation = {
  updateV2EmailSend?:  {
    __typename: "v2EmailSend",
    contentEmail?: string | null,
    contentMessage?: string | null,
    createdAt: string,
    date?: string | null,
    email?: string | null,
    emailState?: v2EmailState | null,
    enrollmentId?: string | null,
    id: string,
    phone?: string | null,
    phoneState?: v2EmailState | null,
    privateEnrollmentId?: string | null,
    studentId: string,
    type: v2TypeOfEmail,
    typeSend: v2TypeSend,
    updatedAt: string,
    userSend?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userSendId: string,
  } | null,
};

export type UpdateV2GmailInboxMutationVariables = {
  condition?: ModelV2GmailInboxConditionInput | null,
  input: UpdateV2GmailInboxInput,
};

export type UpdateV2GmailInboxMutation = {
  updateV2GmailInbox?:  {
    __typename: "v2GmailInbox",
    attachments?: string | null,
    bodyHtml?: string | null,
    bodyText?: string | null,
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    dateSent: string,
    dateStr: string,
    fromEmail?: string | null,
    fromName?: string | null,
    gmailAccount: string,
    hasAttachments?: boolean | null,
    id: string,
    isRead?: boolean | null,
    labels?: Array< string | null > | null,
    messageId: string,
    snippet?: string | null,
    source?: string | null,
    subject?: string | null,
    threadId: string,
    toEmails?: Array< string | null > | null,
    type?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateV2ManagersMutationVariables = {
  condition?: ModelV2ManagersConditionInput | null,
  input: UpdateV2ManagersInput,
};

export type UpdateV2ManagersMutation = {
  updateV2Managers?:  {
    __typename: "v2Managers",
    createdAt: string,
    email?: string | null,
    firstName?: string | null,
    id: string,
    isActive?: boolean | null,
    lastName?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
  } | null,
};

export type UpdateV2MessageMutationVariables = {
  condition?: ModelV2MessageConditionInput | null,
  input: UpdateV2MessageInput,
};

export type UpdateV2MessageMutation = {
  updateV2Message?:  {
    __typename: "v2Message",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    source: string,
    type?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateV2MetadataMutationVariables = {
  condition?: ModelV2MetadataConditionInput | null,
  input: UpdateV2MetadataInput,
};

export type UpdateV2MetadataMutation = {
  updateV2Metadata?:  {
    __typename: "v2Metadata",
    createdAt: string,
    id: string,
    key?: string | null,
    metadata?:  {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null,
    parametersId?: string | null,
    updatedAt: string,
    value?: string | null,
  } | null,
};

export type UpdateV2ParametersMutationVariables = {
  condition?: ModelV2ParametersConditionInput | null,
  input: UpdateV2ParametersInput,
};

export type UpdateV2ParametersMutation = {
  updateV2Parameters?:  {
    __typename: "v2Parameters",
    country: string,
    createdAt: string,
    id: string,
    idParent?: string | null,
    label: string,
    metadata?:  {
      __typename: "Modelv2MetadataConnection",
      nextToken?: string | null,
    } | null,
    typeOfParameter?:  {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null,
    typeOfParameterId?: string | null,
    updatedAt: string,
    value: string,
  } | null,
};

export type UpdateV2ParametersEncMutationVariables = {
  condition?: ModelV2ParametersEncConditionInput | null,
  input: UpdateV2ParametersEncInput,
};

export type UpdateV2ParametersEncMutation = {
  updateV2ParametersEnc?:  {
    __typename: "v2ParametersEnc",
    createdAt: string,
    description?: string | null,
    id: string,
    typeOfParameter?:  {
      __typename: "Modelv2ParametersConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateV2PaymentTransactionsMutationVariables = {
  condition?: ModelV2PaymentTransactionsConditionInput | null,
  input: UpdateV2PaymentTransactionsInput,
};

export type UpdateV2PaymentTransactionsMutation = {
  updateV2PaymentTransactions?:  {
    __typename: "v2PaymentTransactions",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_detail?: string | null,
    card_number?: string | null,
    createdAt: string,
    day: string,
    glosa: string,
    hasRefund?: boolean | null,
    hour?: string | null,
    id: string,
    installments_amount?: string | null,
    installments_number?: string | null,
    month: string,
    payment_type_code?: string | null,
    response_code?: string | null,
    session_id?: string | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    shoppingCartId?: string | null,
    status?: string | null,
    token?: string | null,
    transaction_date?: string | null,
    updatedAt: string,
    urlWebpay?: string | null,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
    vci?: string | null,
    year?: string | null,
  } | null,
};

export type UpdateV2PermissionsMutationVariables = {
  condition?: ModelV2PermissionsConditionInput | null,
  input: UpdateV2PermissionsInput,
};

export type UpdateV2PermissionsMutation = {
  updateV2Permissions?:  {
    __typename: "v2Permissions",
    Padre?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    Submenu?:  {
      __typename: "Modelv2PermissionsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    isLeaf?: boolean | null,
    isVisible?: boolean | null,
    name: string,
    order?: number | null,
    padreId?: string | null,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateV2ProductMutationVariables = {
  condition?: ModelV2ProductConditionInput | null,
  input: UpdateV2ProductInput,
};

export type UpdateV2ProductMutation = {
  updateV2Product?:  {
    __typename: "v2Product",
    createdAt: string,
    criticalStock: number,
    currentStock: number,
    id: string,
    isActive?: boolean | null,
    name: string,
    profits: number,
    purchasePrice: number,
    sellingPrice: number,
    sku: string,
    supplier?:  {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null,
    supplierId: string,
    updatedAt: string,
  } | null,
};

export type UpdateV2ProfitCenterMutationVariables = {
  condition?: ModelV2ProfitCenterConditionInput | null,
  input: UpdateV2ProfitCenterInput,
};

export type UpdateV2ProfitCenterMutation = {
  updateV2ProfitCenter?:  {
    __typename: "v2ProfitCenter",
    code?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    isActive?: boolean | null,
    managerID?: string | null,
    managers?:  {
      __typename: "Modelv2ManagersConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    parentProfitCenterID?: string | null,
    transactions?:  {
      __typename: "Modelv2TransactionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateV2RelationshipMutationVariables = {
  condition?: ModelV2RelationshipConditionInput | null,
  input: UpdateV2RelationshipInput,
};

export type UpdateV2RelationshipMutation = {
  updateV2Relationship?:  {
    __typename: "v2Relationship",
    createdAt: string,
    id: string,
    relationType: v2RelationType,
    studentId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type UpdateV2RolPermissionsMutationVariables = {
  condition?: ModelV2RolPermissionsConditionInput | null,
  input: UpdateV2RolPermissionsInput,
};

export type UpdateV2RolPermissionsMutation = {
  updateV2RolPermissions?:  {
    __typename: "v2RolPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId: string,
    updatedAt: string,
  } | null,
};

export type UpdateV2RolesMutationVariables = {
  condition?: ModelV2RolesConditionInput | null,
  input: UpdateV2RolesInput,
};

export type UpdateV2RolesMutation = {
  updateV2Roles?:  {
    __typename: "v2Roles",
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    name: string,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "Modelv2UsersConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateV2SellersCommissionMutationVariables = {
  condition?: ModelV2SellersCommissionConditionInput | null,
  input: UpdateV2SellersCommissionInput,
};

export type UpdateV2SellersCommissionMutation = {
  updateV2SellersCommission?:  {
    __typename: "v2SellersCommission",
    amount?: number | null,
    createdAt: string,
    description?: string | null,
    id: string,
    paymentAmount?: number | null,
    salesCommission?: number | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    status: v2StatusCommission,
    type: v2TypeDetail,
    updatedAt: string,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
  } | null,
};

export type UpdateV2SentEmailMutationVariables = {
  condition?: ModelV2SentEmailConditionInput | null,
  input: UpdateV2SentEmailInput,
};

export type UpdateV2SentEmailMutation = {
  updateV2SentEmail?:  {
    __typename: "v2SentEmail",
    body?: string | null,
    createdAt: string,
    emailState?: v2EmailState | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateV2ShoppingCartMutationVariables = {
  condition?: ModelV2ShoppingCartConditionInput | null,
  input: UpdateV2ShoppingCartInput,
};

export type UpdateV2ShoppingCartMutation = {
  updateV2ShoppingCart?:  {
    __typename: "v2ShoppingCart",
    cartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    seller?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    sellerId: string,
    sellersCommission?:  {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null,
    sellersCommissionId?: string | null,
    status?: string | null,
    totalPrice: number,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type UpdateV2ShoppingCartDetailMutationVariables = {
  condition?: ModelV2ShoppingCartDetailConditionInput | null,
  input: UpdateV2ShoppingCartDetailInput,
};

export type UpdateV2ShoppingCartDetailMutation = {
  updateV2ShoppingCartDetail?:  {
    __typename: "v2ShoppingCartDetail",
    academyEnrollmentId?: string | null,
    amount: number,
    cart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    cartId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    createdById?: string | null,
    detail: string,
    enrollmentId?: string | null,
    id: string,
    privateEnrollmentId?: string | null,
    quantity: number,
    type: v2TypeDetail,
    updatedAt: string,
    wasDeleted?: boolean | null,
  } | null,
};

export type UpdateV2SupplierMutationVariables = {
  condition?: ModelV2SupplierConditionInput | null,
  input: UpdateV2SupplierInput,
};

export type UpdateV2SupplierMutation = {
  updateV2Supplier?:  {
    __typename: "v2Supplier",
    address?: string | null,
    contactPerson?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    name: string,
    phone?: string | null,
    products?:  {
      __typename: "Modelv2ProductConnection",
      nextToken?: string | null,
    } | null,
    taxId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateV2SupportTicketMutationVariables = {
  condition?: ModelV2SupportTicketConditionInput | null,
  input: UpdateV2SupportTicketInput,
};

export type UpdateV2SupportTicketMutation = {
  updateV2SupportTicket?:  {
    __typename: "v2SupportTicket",
    createdAt: string,
    date: string,
    day: string,
    description: string,
    email: string,
    id: string,
    lastModificationUser?: string | null,
    month: string,
    name: string,
    phoneNumber: string,
    reason?: v2reasonType | null,
    statusTicket?: v2statusTicketType | null,
    studentId?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type UpdateV2TicketCommentMutationVariables = {
  condition?: ModelV2TicketCommentConditionInput | null,
  input: UpdateV2TicketCommentInput,
};

export type UpdateV2TicketCommentMutation = {
  updateV2TicketComment?:  {
    __typename: "v2TicketComment",
    comment?:  {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null,
    commentId: string,
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
  } | null,
};

export type UpdateV2TicketUserMutationVariables = {
  condition?: ModelV2TicketUserConditionInput | null,
  input: UpdateV2TicketUserInput,
};

export type UpdateV2TicketUserMutation = {
  updateV2TicketUser?:  {
    __typename: "v2TicketUser",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type UpdateV2TransactionsMutationVariables = {
  condition?: ModelV2TransactionsConditionInput | null,
  input: UpdateV2TransactionsInput,
};

export type UpdateV2TransactionsMutation = {
  updateV2Transactions?:  {
    __typename: "v2Transactions",
    amount?: number | null,
    categoryID?: string | null,
    categoryType?: v2CategoryType | null,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    month?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type UpdateV2UserPermissionsMutationVariables = {
  condition?: ModelV2UserPermissionsConditionInput | null,
  input: UpdateV2UserPermissionsInput,
};

export type UpdateV2UserPermissionsMutation = {
  updateV2UserPermissions?:  {
    __typename: "v2UserPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type UpdateV2UsersMutationVariables = {
  condition?: ModelV2UsersConditionInput | null,
  input: UpdateV2UsersInput,
};

export type UpdateV2UsersMutation = {
  updateV2Users?:  {
    __typename: "v2Users",
    city?: string | null,
    contactPhone?: string | null,
    country?: string | null,
    createdAt: string,
    email: string,
    emailSend?:  {
      __typename: "Modelv2EmailSendConnection",
      nextToken?: string | null,
    } | null,
    firstContact?: boolean | null,
    gmailMessages?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    ig?: string | null,
    isAcademyStudent?: boolean | null,
    isActive?: boolean | null,
    isEmployed?: boolean | null,
    latitude?: number | null,
    longitude?: number | null,
    name: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    relationships?:  {
      __typename: "Modelv2RelationshipConnection",
      nextToken?: string | null,
    } | null,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId?: string | null,
    salesCommission?: number | null,
    sellersCommissions?:  {
      __typename: "Modelv2SellersCommissionConnection",
      nextToken?: string | null,
    } | null,
    shoppingCart?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartSeller?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    state?: string | null,
    streetAddress?: string | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
    validated?: boolean | null,
    zipCode?: string | null,
    zoomLevel?: number | null,
  } | null,
};

export type V2CognitoCreateUserMutationVariables = {
  contactPhone?: string | null,
  email: string,
  isEmployed?: boolean | null,
  name: string,
  roleId?: string | null,
  temporaryPassword: string,
};

export type V2CognitoCreateUserMutation = {
  v2CognitoCreateUser?:  {
    __typename: "v2CognitoCreateUserResult",
    email: string,
    name?: string | null,
    roleId?: string | null,
  } | null,
};

export type V2CognitoSetPasswordMutationVariables = {
  email: string,
  password: string,
  permanent?: boolean | null,
};

export type V2CognitoSetPasswordMutation = {
  v2CognitoSetPassword?: boolean | null,
};

export type V2CognitoSetStatusMutationVariables = {
  email: string,
  enabled: boolean,
};

export type V2CognitoSetStatusMutation = {
  v2CognitoSetStatus?: boolean | null,
};

export type V2GmailReplyMutationVariables = {
  body: string,
  fromAccount: string,
  inReplyToMessageId?: string | null,
  subject: string,
  threadId?: string | null,
  toEmail: string,
};

export type V2GmailReplyMutation = {
  v2GmailReply?:  {
    __typename: "v2GmailReplyResult",
    error?: string | null,
    messageId?: string | null,
    success: boolean,
  } | null,
};

export type V2GmailSyncMutationVariables = {
};

export type V2GmailSyncMutation = {
  v2GmailSync?: string | null,
};

export type V2SendEmailMutationVariables = {
  templateParams: string,
  type: string,
};

export type V2SendEmailMutation = {
  v2SendEmail?: string | null,
};

export type V2SendWhatsappMutationVariables = {
  message: string,
  name: string,
  phoneNumber: string,
};

export type V2SendWhatsappMutation = {
  v2SendWhatsapp?: string | null,
};

export type V2WebpayCommitMutationVariables = {
  token: string,
};

export type V2WebpayCommitMutation = {
  v2WebpayCommit?:  {
    __typename: "v2WebpayTransactionResult",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_number?: string | null,
    installments_amount?: number | null,
    installments_number?: number | null,
    payment_type_code?: string | null,
    response_code?: number | null,
    session_id?: string | null,
    status?: string | null,
    transaction_date?: string | null,
    vci?: string | null,
  } | null,
};

export type V2WebpayStartMutationVariables = {
  amount: number,
  cartId: string,
  glosa: string,
  userId: string,
};

export type V2WebpayStartMutation = {
  v2WebpayStart?:  {
    __typename: "v2WebpayStartResult",
    orden: number,
    token: string,
    url: string,
  } | null,
};

export type V2WebpayStatusMutationVariables = {
  token: string,
};

export type V2WebpayStatusMutation = {
  v2WebpayStatus?:  {
    __typename: "v2WebpayTransactionResult",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_number?: string | null,
    installments_amount?: number | null,
    installments_number?: number | null,
    payment_type_code?: string | null,
    response_code?: number | null,
    session_id?: string | null,
    status?: string | null,
    transaction_date?: string | null,
    vci?: string | null,
  } | null,
};

export type OnCreateV2ActionSubscriptionVariables = {
  filter?: ModelSubscriptionV2ActionFilterInput | null,
};

export type OnCreateV2ActionSubscription = {
  onCreateV2Action?:  {
    __typename: "v2Action",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    status: string,
    updatedAt: string,
    urlDocument?: string | null,
    userId?: string | null,
  } | null,
};

export type OnCreateV2CommentTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionV2CommentTicketsFilterInput | null,
};

export type OnCreateV2CommentTicketsSubscription = {
  onCreateV2CommentTickets?:  {
    __typename: "v2CommentTickets",
    createdAt: string,
    description: string,
    id: string,
    statusModificationIdUser?: string | null,
    statusModificationUser?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateV2CorrelativesSubscriptionVariables = {
  filter?: ModelSubscriptionV2CorrelativesFilterInput | null,
};

export type OnCreateV2CorrelativesSubscription = {
  onCreateV2Correlatives?:  {
    __typename: "v2Correlatives",
    correlative?: number | null,
    createdAt: string,
    id: string,
    type?: v2ParametersType | null,
    updatedAt: string,
  } | null,
};

export type OnCreateV2CustomerSubscriptionVariables = {
  filter?: ModelSubscriptionV2CustomerFilterInput | null,
};

export type OnCreateV2CustomerSubscription = {
  onCreateV2Customer?:  {
    __typename: "v2Customer",
    actions?:  {
      __typename: "Modelv2CustomerActionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    inboxItems?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "Modelv2MessageConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    phone: string,
    phone2?: string | null,
    requestDate?: string | null,
    status?: string | null,
    updatedAt: string,
    v2Actions?:  {
      __typename: "Modelv2ActionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateV2CustomerActionSubscriptionVariables = {
  filter?: ModelSubscriptionV2CustomerActionFilterInput | null,
};

export type OnCreateV2CustomerActionSubscription = {
  onCreateV2CustomerAction?:  {
    __typename: "v2CustomerAction",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    date: string,
    detail: string,
    docUrl?: string | null,
    id: string,
    status: string,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnCreateV2EmailSendSubscriptionVariables = {
  filter?: ModelSubscriptionV2EmailSendFilterInput | null,
};

export type OnCreateV2EmailSendSubscription = {
  onCreateV2EmailSend?:  {
    __typename: "v2EmailSend",
    contentEmail?: string | null,
    contentMessage?: string | null,
    createdAt: string,
    date?: string | null,
    email?: string | null,
    emailState?: v2EmailState | null,
    enrollmentId?: string | null,
    id: string,
    phone?: string | null,
    phoneState?: v2EmailState | null,
    privateEnrollmentId?: string | null,
    studentId: string,
    type: v2TypeOfEmail,
    typeSend: v2TypeSend,
    updatedAt: string,
    userSend?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userSendId: string,
  } | null,
};

export type OnCreateV2GmailInboxSubscriptionVariables = {
  filter?: ModelSubscriptionV2GmailInboxFilterInput | null,
};

export type OnCreateV2GmailInboxSubscription = {
  onCreateV2GmailInbox?:  {
    __typename: "v2GmailInbox",
    attachments?: string | null,
    bodyHtml?: string | null,
    bodyText?: string | null,
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    dateSent: string,
    dateStr: string,
    fromEmail?: string | null,
    fromName?: string | null,
    gmailAccount: string,
    hasAttachments?: boolean | null,
    id: string,
    isRead?: boolean | null,
    labels?: Array< string | null > | null,
    messageId: string,
    snippet?: string | null,
    source?: string | null,
    subject?: string | null,
    threadId: string,
    toEmails?: Array< string | null > | null,
    type?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateV2ManagersSubscriptionVariables = {
  filter?: ModelSubscriptionV2ManagersFilterInput | null,
};

export type OnCreateV2ManagersSubscription = {
  onCreateV2Managers?:  {
    __typename: "v2Managers",
    createdAt: string,
    email?: string | null,
    firstName?: string | null,
    id: string,
    isActive?: boolean | null,
    lastName?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
  } | null,
};

export type OnCreateV2MessageSubscriptionVariables = {
  filter?: ModelSubscriptionV2MessageFilterInput | null,
};

export type OnCreateV2MessageSubscription = {
  onCreateV2Message?:  {
    __typename: "v2Message",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    source: string,
    type?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateV2MetadataSubscriptionVariables = {
  filter?: ModelSubscriptionV2MetadataFilterInput | null,
};

export type OnCreateV2MetadataSubscription = {
  onCreateV2Metadata?:  {
    __typename: "v2Metadata",
    createdAt: string,
    id: string,
    key?: string | null,
    metadata?:  {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null,
    parametersId?: string | null,
    updatedAt: string,
    value?: string | null,
  } | null,
};

export type OnCreateV2ParametersSubscriptionVariables = {
  filter?: ModelSubscriptionV2ParametersFilterInput | null,
};

export type OnCreateV2ParametersSubscription = {
  onCreateV2Parameters?:  {
    __typename: "v2Parameters",
    country: string,
    createdAt: string,
    id: string,
    idParent?: string | null,
    label: string,
    metadata?:  {
      __typename: "Modelv2MetadataConnection",
      nextToken?: string | null,
    } | null,
    typeOfParameter?:  {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null,
    typeOfParameterId?: string | null,
    updatedAt: string,
    value: string,
  } | null,
};

export type OnCreateV2ParametersEncSubscriptionVariables = {
  filter?: ModelSubscriptionV2ParametersEncFilterInput | null,
};

export type OnCreateV2ParametersEncSubscription = {
  onCreateV2ParametersEnc?:  {
    __typename: "v2ParametersEnc",
    createdAt: string,
    description?: string | null,
    id: string,
    typeOfParameter?:  {
      __typename: "Modelv2ParametersConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateV2PaymentTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2PaymentTransactionsFilterInput | null,
};

export type OnCreateV2PaymentTransactionsSubscription = {
  onCreateV2PaymentTransactions?:  {
    __typename: "v2PaymentTransactions",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_detail?: string | null,
    card_number?: string | null,
    createdAt: string,
    day: string,
    glosa: string,
    hasRefund?: boolean | null,
    hour?: string | null,
    id: string,
    installments_amount?: string | null,
    installments_number?: string | null,
    month: string,
    payment_type_code?: string | null,
    response_code?: string | null,
    session_id?: string | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    shoppingCartId?: string | null,
    status?: string | null,
    token?: string | null,
    transaction_date?: string | null,
    updatedAt: string,
    urlWebpay?: string | null,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
    vci?: string | null,
    year?: string | null,
  } | null,
};

export type OnCreateV2PermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2PermissionsFilterInput | null,
};

export type OnCreateV2PermissionsSubscription = {
  onCreateV2Permissions?:  {
    __typename: "v2Permissions",
    Padre?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    Submenu?:  {
      __typename: "Modelv2PermissionsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    isLeaf?: boolean | null,
    isVisible?: boolean | null,
    name: string,
    order?: number | null,
    padreId?: string | null,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateV2ProductSubscriptionVariables = {
  filter?: ModelSubscriptionV2ProductFilterInput | null,
};

export type OnCreateV2ProductSubscription = {
  onCreateV2Product?:  {
    __typename: "v2Product",
    createdAt: string,
    criticalStock: number,
    currentStock: number,
    id: string,
    isActive?: boolean | null,
    name: string,
    profits: number,
    purchasePrice: number,
    sellingPrice: number,
    sku: string,
    supplier?:  {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null,
    supplierId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateV2ProfitCenterSubscriptionVariables = {
  filter?: ModelSubscriptionV2ProfitCenterFilterInput | null,
};

export type OnCreateV2ProfitCenterSubscription = {
  onCreateV2ProfitCenter?:  {
    __typename: "v2ProfitCenter",
    code?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    isActive?: boolean | null,
    managerID?: string | null,
    managers?:  {
      __typename: "Modelv2ManagersConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    parentProfitCenterID?: string | null,
    transactions?:  {
      __typename: "Modelv2TransactionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateV2RelationshipSubscriptionVariables = {
  filter?: ModelSubscriptionV2RelationshipFilterInput | null,
};

export type OnCreateV2RelationshipSubscription = {
  onCreateV2Relationship?:  {
    __typename: "v2Relationship",
    createdAt: string,
    id: string,
    relationType: v2RelationType,
    studentId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateV2RolPermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2RolPermissionsFilterInput | null,
};

export type OnCreateV2RolPermissionsSubscription = {
  onCreateV2RolPermissions?:  {
    __typename: "v2RolPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateV2RolesSubscriptionVariables = {
  filter?: ModelSubscriptionV2RolesFilterInput | null,
};

export type OnCreateV2RolesSubscription = {
  onCreateV2Roles?:  {
    __typename: "v2Roles",
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    name: string,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "Modelv2UsersConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateV2SellersCommissionSubscriptionVariables = {
  filter?: ModelSubscriptionV2SellersCommissionFilterInput | null,
};

export type OnCreateV2SellersCommissionSubscription = {
  onCreateV2SellersCommission?:  {
    __typename: "v2SellersCommission",
    amount?: number | null,
    createdAt: string,
    description?: string | null,
    id: string,
    paymentAmount?: number | null,
    salesCommission?: number | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    status: v2StatusCommission,
    type: v2TypeDetail,
    updatedAt: string,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
  } | null,
};

export type OnCreateV2SentEmailSubscriptionVariables = {
  filter?: ModelSubscriptionV2SentEmailFilterInput | null,
};

export type OnCreateV2SentEmailSubscription = {
  onCreateV2SentEmail?:  {
    __typename: "v2SentEmail",
    body?: string | null,
    createdAt: string,
    emailState?: v2EmailState | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateV2ShoppingCartSubscriptionVariables = {
  filter?: ModelSubscriptionV2ShoppingCartFilterInput | null,
};

export type OnCreateV2ShoppingCartSubscription = {
  onCreateV2ShoppingCart?:  {
    __typename: "v2ShoppingCart",
    cartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    seller?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    sellerId: string,
    sellersCommission?:  {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null,
    sellersCommissionId?: string | null,
    status?: string | null,
    totalPrice: number,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateV2ShoppingCartDetailSubscriptionVariables = {
  filter?: ModelSubscriptionV2ShoppingCartDetailFilterInput | null,
};

export type OnCreateV2ShoppingCartDetailSubscription = {
  onCreateV2ShoppingCartDetail?:  {
    __typename: "v2ShoppingCartDetail",
    academyEnrollmentId?: string | null,
    amount: number,
    cart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    cartId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    createdById?: string | null,
    detail: string,
    enrollmentId?: string | null,
    id: string,
    privateEnrollmentId?: string | null,
    quantity: number,
    type: v2TypeDetail,
    updatedAt: string,
    wasDeleted?: boolean | null,
  } | null,
};

export type OnCreateV2SupplierSubscriptionVariables = {
  filter?: ModelSubscriptionV2SupplierFilterInput | null,
};

export type OnCreateV2SupplierSubscription = {
  onCreateV2Supplier?:  {
    __typename: "v2Supplier",
    address?: string | null,
    contactPerson?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    name: string,
    phone?: string | null,
    products?:  {
      __typename: "Modelv2ProductConnection",
      nextToken?: string | null,
    } | null,
    taxId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateV2SupportTicketSubscriptionVariables = {
  filter?: ModelSubscriptionV2SupportTicketFilterInput | null,
};

export type OnCreateV2SupportTicketSubscription = {
  onCreateV2SupportTicket?:  {
    __typename: "v2SupportTicket",
    createdAt: string,
    date: string,
    day: string,
    description: string,
    email: string,
    id: string,
    lastModificationUser?: string | null,
    month: string,
    name: string,
    phoneNumber: string,
    reason?: v2reasonType | null,
    statusTicket?: v2statusTicketType | null,
    studentId?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type OnCreateV2TicketCommentSubscriptionVariables = {
  filter?: ModelSubscriptionV2TicketCommentFilterInput | null,
};

export type OnCreateV2TicketCommentSubscription = {
  onCreateV2TicketComment?:  {
    __typename: "v2TicketComment",
    comment?:  {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null,
    commentId: string,
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateV2TicketUserSubscriptionVariables = {
  filter?: ModelSubscriptionV2TicketUserFilterInput | null,
};

export type OnCreateV2TicketUserSubscription = {
  onCreateV2TicketUser?:  {
    __typename: "v2TicketUser",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateV2TransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2TransactionsFilterInput | null,
};

export type OnCreateV2TransactionsSubscription = {
  onCreateV2Transactions?:  {
    __typename: "v2Transactions",
    amount?: number | null,
    categoryID?: string | null,
    categoryType?: v2CategoryType | null,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    month?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type OnCreateV2UserPermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2UserPermissionsFilterInput | null,
};

export type OnCreateV2UserPermissionsSubscription = {
  onCreateV2UserPermissions?:  {
    __typename: "v2UserPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateV2UsersSubscriptionVariables = {
  filter?: ModelSubscriptionV2UsersFilterInput | null,
};

export type OnCreateV2UsersSubscription = {
  onCreateV2Users?:  {
    __typename: "v2Users",
    city?: string | null,
    contactPhone?: string | null,
    country?: string | null,
    createdAt: string,
    email: string,
    emailSend?:  {
      __typename: "Modelv2EmailSendConnection",
      nextToken?: string | null,
    } | null,
    firstContact?: boolean | null,
    gmailMessages?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    ig?: string | null,
    isAcademyStudent?: boolean | null,
    isActive?: boolean | null,
    isEmployed?: boolean | null,
    latitude?: number | null,
    longitude?: number | null,
    name: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    relationships?:  {
      __typename: "Modelv2RelationshipConnection",
      nextToken?: string | null,
    } | null,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId?: string | null,
    salesCommission?: number | null,
    sellersCommissions?:  {
      __typename: "Modelv2SellersCommissionConnection",
      nextToken?: string | null,
    } | null,
    shoppingCart?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartSeller?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    state?: string | null,
    streetAddress?: string | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
    validated?: boolean | null,
    zipCode?: string | null,
    zoomLevel?: number | null,
  } | null,
};

export type OnDeleteV2ActionSubscriptionVariables = {
  filter?: ModelSubscriptionV2ActionFilterInput | null,
};

export type OnDeleteV2ActionSubscription = {
  onDeleteV2Action?:  {
    __typename: "v2Action",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    status: string,
    updatedAt: string,
    urlDocument?: string | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteV2CommentTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionV2CommentTicketsFilterInput | null,
};

export type OnDeleteV2CommentTicketsSubscription = {
  onDeleteV2CommentTickets?:  {
    __typename: "v2CommentTickets",
    createdAt: string,
    description: string,
    id: string,
    statusModificationIdUser?: string | null,
    statusModificationUser?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2CorrelativesSubscriptionVariables = {
  filter?: ModelSubscriptionV2CorrelativesFilterInput | null,
};

export type OnDeleteV2CorrelativesSubscription = {
  onDeleteV2Correlatives?:  {
    __typename: "v2Correlatives",
    correlative?: number | null,
    createdAt: string,
    id: string,
    type?: v2ParametersType | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2CustomerSubscriptionVariables = {
  filter?: ModelSubscriptionV2CustomerFilterInput | null,
};

export type OnDeleteV2CustomerSubscription = {
  onDeleteV2Customer?:  {
    __typename: "v2Customer",
    actions?:  {
      __typename: "Modelv2CustomerActionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    inboxItems?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "Modelv2MessageConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    phone: string,
    phone2?: string | null,
    requestDate?: string | null,
    status?: string | null,
    updatedAt: string,
    v2Actions?:  {
      __typename: "Modelv2ActionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteV2CustomerActionSubscriptionVariables = {
  filter?: ModelSubscriptionV2CustomerActionFilterInput | null,
};

export type OnDeleteV2CustomerActionSubscription = {
  onDeleteV2CustomerAction?:  {
    __typename: "v2CustomerAction",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    date: string,
    detail: string,
    docUrl?: string | null,
    id: string,
    status: string,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnDeleteV2EmailSendSubscriptionVariables = {
  filter?: ModelSubscriptionV2EmailSendFilterInput | null,
};

export type OnDeleteV2EmailSendSubscription = {
  onDeleteV2EmailSend?:  {
    __typename: "v2EmailSend",
    contentEmail?: string | null,
    contentMessage?: string | null,
    createdAt: string,
    date?: string | null,
    email?: string | null,
    emailState?: v2EmailState | null,
    enrollmentId?: string | null,
    id: string,
    phone?: string | null,
    phoneState?: v2EmailState | null,
    privateEnrollmentId?: string | null,
    studentId: string,
    type: v2TypeOfEmail,
    typeSend: v2TypeSend,
    updatedAt: string,
    userSend?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userSendId: string,
  } | null,
};

export type OnDeleteV2GmailInboxSubscriptionVariables = {
  filter?: ModelSubscriptionV2GmailInboxFilterInput | null,
};

export type OnDeleteV2GmailInboxSubscription = {
  onDeleteV2GmailInbox?:  {
    __typename: "v2GmailInbox",
    attachments?: string | null,
    bodyHtml?: string | null,
    bodyText?: string | null,
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    dateSent: string,
    dateStr: string,
    fromEmail?: string | null,
    fromName?: string | null,
    gmailAccount: string,
    hasAttachments?: boolean | null,
    id: string,
    isRead?: boolean | null,
    labels?: Array< string | null > | null,
    messageId: string,
    snippet?: string | null,
    source?: string | null,
    subject?: string | null,
    threadId: string,
    toEmails?: Array< string | null > | null,
    type?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteV2ManagersSubscriptionVariables = {
  filter?: ModelSubscriptionV2ManagersFilterInput | null,
};

export type OnDeleteV2ManagersSubscription = {
  onDeleteV2Managers?:  {
    __typename: "v2Managers",
    createdAt: string,
    email?: string | null,
    firstName?: string | null,
    id: string,
    isActive?: boolean | null,
    lastName?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2MessageSubscriptionVariables = {
  filter?: ModelSubscriptionV2MessageFilterInput | null,
};

export type OnDeleteV2MessageSubscription = {
  onDeleteV2Message?:  {
    __typename: "v2Message",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    source: string,
    type?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2MetadataSubscriptionVariables = {
  filter?: ModelSubscriptionV2MetadataFilterInput | null,
};

export type OnDeleteV2MetadataSubscription = {
  onDeleteV2Metadata?:  {
    __typename: "v2Metadata",
    createdAt: string,
    id: string,
    key?: string | null,
    metadata?:  {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null,
    parametersId?: string | null,
    updatedAt: string,
    value?: string | null,
  } | null,
};

export type OnDeleteV2ParametersSubscriptionVariables = {
  filter?: ModelSubscriptionV2ParametersFilterInput | null,
};

export type OnDeleteV2ParametersSubscription = {
  onDeleteV2Parameters?:  {
    __typename: "v2Parameters",
    country: string,
    createdAt: string,
    id: string,
    idParent?: string | null,
    label: string,
    metadata?:  {
      __typename: "Modelv2MetadataConnection",
      nextToken?: string | null,
    } | null,
    typeOfParameter?:  {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null,
    typeOfParameterId?: string | null,
    updatedAt: string,
    value: string,
  } | null,
};

export type OnDeleteV2ParametersEncSubscriptionVariables = {
  filter?: ModelSubscriptionV2ParametersEncFilterInput | null,
};

export type OnDeleteV2ParametersEncSubscription = {
  onDeleteV2ParametersEnc?:  {
    __typename: "v2ParametersEnc",
    createdAt: string,
    description?: string | null,
    id: string,
    typeOfParameter?:  {
      __typename: "Modelv2ParametersConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2PaymentTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2PaymentTransactionsFilterInput | null,
};

export type OnDeleteV2PaymentTransactionsSubscription = {
  onDeleteV2PaymentTransactions?:  {
    __typename: "v2PaymentTransactions",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_detail?: string | null,
    card_number?: string | null,
    createdAt: string,
    day: string,
    glosa: string,
    hasRefund?: boolean | null,
    hour?: string | null,
    id: string,
    installments_amount?: string | null,
    installments_number?: string | null,
    month: string,
    payment_type_code?: string | null,
    response_code?: string | null,
    session_id?: string | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    shoppingCartId?: string | null,
    status?: string | null,
    token?: string | null,
    transaction_date?: string | null,
    updatedAt: string,
    urlWebpay?: string | null,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
    vci?: string | null,
    year?: string | null,
  } | null,
};

export type OnDeleteV2PermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2PermissionsFilterInput | null,
};

export type OnDeleteV2PermissionsSubscription = {
  onDeleteV2Permissions?:  {
    __typename: "v2Permissions",
    Padre?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    Submenu?:  {
      __typename: "Modelv2PermissionsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    isLeaf?: boolean | null,
    isVisible?: boolean | null,
    name: string,
    order?: number | null,
    padreId?: string | null,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteV2ProductSubscriptionVariables = {
  filter?: ModelSubscriptionV2ProductFilterInput | null,
};

export type OnDeleteV2ProductSubscription = {
  onDeleteV2Product?:  {
    __typename: "v2Product",
    createdAt: string,
    criticalStock: number,
    currentStock: number,
    id: string,
    isActive?: boolean | null,
    name: string,
    profits: number,
    purchasePrice: number,
    sellingPrice: number,
    sku: string,
    supplier?:  {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null,
    supplierId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2ProfitCenterSubscriptionVariables = {
  filter?: ModelSubscriptionV2ProfitCenterFilterInput | null,
};

export type OnDeleteV2ProfitCenterSubscription = {
  onDeleteV2ProfitCenter?:  {
    __typename: "v2ProfitCenter",
    code?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    isActive?: boolean | null,
    managerID?: string | null,
    managers?:  {
      __typename: "Modelv2ManagersConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    parentProfitCenterID?: string | null,
    transactions?:  {
      __typename: "Modelv2TransactionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2RelationshipSubscriptionVariables = {
  filter?: ModelSubscriptionV2RelationshipFilterInput | null,
};

export type OnDeleteV2RelationshipSubscription = {
  onDeleteV2Relationship?:  {
    __typename: "v2Relationship",
    createdAt: string,
    id: string,
    relationType: v2RelationType,
    studentId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteV2RolPermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2RolPermissionsFilterInput | null,
};

export type OnDeleteV2RolPermissionsSubscription = {
  onDeleteV2RolPermissions?:  {
    __typename: "v2RolPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2RolesSubscriptionVariables = {
  filter?: ModelSubscriptionV2RolesFilterInput | null,
};

export type OnDeleteV2RolesSubscription = {
  onDeleteV2Roles?:  {
    __typename: "v2Roles",
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    name: string,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "Modelv2UsersConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteV2SellersCommissionSubscriptionVariables = {
  filter?: ModelSubscriptionV2SellersCommissionFilterInput | null,
};

export type OnDeleteV2SellersCommissionSubscription = {
  onDeleteV2SellersCommission?:  {
    __typename: "v2SellersCommission",
    amount?: number | null,
    createdAt: string,
    description?: string | null,
    id: string,
    paymentAmount?: number | null,
    salesCommission?: number | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    status: v2StatusCommission,
    type: v2TypeDetail,
    updatedAt: string,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
  } | null,
};

export type OnDeleteV2SentEmailSubscriptionVariables = {
  filter?: ModelSubscriptionV2SentEmailFilterInput | null,
};

export type OnDeleteV2SentEmailSubscription = {
  onDeleteV2SentEmail?:  {
    __typename: "v2SentEmail",
    body?: string | null,
    createdAt: string,
    emailState?: v2EmailState | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2ShoppingCartSubscriptionVariables = {
  filter?: ModelSubscriptionV2ShoppingCartFilterInput | null,
};

export type OnDeleteV2ShoppingCartSubscription = {
  onDeleteV2ShoppingCart?:  {
    __typename: "v2ShoppingCart",
    cartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    seller?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    sellerId: string,
    sellersCommission?:  {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null,
    sellersCommissionId?: string | null,
    status?: string | null,
    totalPrice: number,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteV2ShoppingCartDetailSubscriptionVariables = {
  filter?: ModelSubscriptionV2ShoppingCartDetailFilterInput | null,
};

export type OnDeleteV2ShoppingCartDetailSubscription = {
  onDeleteV2ShoppingCartDetail?:  {
    __typename: "v2ShoppingCartDetail",
    academyEnrollmentId?: string | null,
    amount: number,
    cart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    cartId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    createdById?: string | null,
    detail: string,
    enrollmentId?: string | null,
    id: string,
    privateEnrollmentId?: string | null,
    quantity: number,
    type: v2TypeDetail,
    updatedAt: string,
    wasDeleted?: boolean | null,
  } | null,
};

export type OnDeleteV2SupplierSubscriptionVariables = {
  filter?: ModelSubscriptionV2SupplierFilterInput | null,
};

export type OnDeleteV2SupplierSubscription = {
  onDeleteV2Supplier?:  {
    __typename: "v2Supplier",
    address?: string | null,
    contactPerson?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    name: string,
    phone?: string | null,
    products?:  {
      __typename: "Modelv2ProductConnection",
      nextToken?: string | null,
    } | null,
    taxId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2SupportTicketSubscriptionVariables = {
  filter?: ModelSubscriptionV2SupportTicketFilterInput | null,
};

export type OnDeleteV2SupportTicketSubscription = {
  onDeleteV2SupportTicket?:  {
    __typename: "v2SupportTicket",
    createdAt: string,
    date: string,
    day: string,
    description: string,
    email: string,
    id: string,
    lastModificationUser?: string | null,
    month: string,
    name: string,
    phoneNumber: string,
    reason?: v2reasonType | null,
    statusTicket?: v2statusTicketType | null,
    studentId?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type OnDeleteV2TicketCommentSubscriptionVariables = {
  filter?: ModelSubscriptionV2TicketCommentFilterInput | null,
};

export type OnDeleteV2TicketCommentSubscription = {
  onDeleteV2TicketComment?:  {
    __typename: "v2TicketComment",
    comment?:  {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null,
    commentId: string,
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteV2TicketUserSubscriptionVariables = {
  filter?: ModelSubscriptionV2TicketUserFilterInput | null,
};

export type OnDeleteV2TicketUserSubscription = {
  onDeleteV2TicketUser?:  {
    __typename: "v2TicketUser",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteV2TransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2TransactionsFilterInput | null,
};

export type OnDeleteV2TransactionsSubscription = {
  onDeleteV2Transactions?:  {
    __typename: "v2Transactions",
    amount?: number | null,
    categoryID?: string | null,
    categoryType?: v2CategoryType | null,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    month?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type OnDeleteV2UserPermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2UserPermissionsFilterInput | null,
};

export type OnDeleteV2UserPermissionsSubscription = {
  onDeleteV2UserPermissions?:  {
    __typename: "v2UserPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteV2UsersSubscriptionVariables = {
  filter?: ModelSubscriptionV2UsersFilterInput | null,
};

export type OnDeleteV2UsersSubscription = {
  onDeleteV2Users?:  {
    __typename: "v2Users",
    city?: string | null,
    contactPhone?: string | null,
    country?: string | null,
    createdAt: string,
    email: string,
    emailSend?:  {
      __typename: "Modelv2EmailSendConnection",
      nextToken?: string | null,
    } | null,
    firstContact?: boolean | null,
    gmailMessages?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    ig?: string | null,
    isAcademyStudent?: boolean | null,
    isActive?: boolean | null,
    isEmployed?: boolean | null,
    latitude?: number | null,
    longitude?: number | null,
    name: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    relationships?:  {
      __typename: "Modelv2RelationshipConnection",
      nextToken?: string | null,
    } | null,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId?: string | null,
    salesCommission?: number | null,
    sellersCommissions?:  {
      __typename: "Modelv2SellersCommissionConnection",
      nextToken?: string | null,
    } | null,
    shoppingCart?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartSeller?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    state?: string | null,
    streetAddress?: string | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
    validated?: boolean | null,
    zipCode?: string | null,
    zoomLevel?: number | null,
  } | null,
};

export type OnUpdateV2ActionSubscriptionVariables = {
  filter?: ModelSubscriptionV2ActionFilterInput | null,
};

export type OnUpdateV2ActionSubscription = {
  onUpdateV2Action?:  {
    __typename: "v2Action",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    status: string,
    updatedAt: string,
    urlDocument?: string | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateV2CommentTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionV2CommentTicketsFilterInput | null,
};

export type OnUpdateV2CommentTicketsSubscription = {
  onUpdateV2CommentTickets?:  {
    __typename: "v2CommentTickets",
    createdAt: string,
    description: string,
    id: string,
    statusModificationIdUser?: string | null,
    statusModificationUser?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2CorrelativesSubscriptionVariables = {
  filter?: ModelSubscriptionV2CorrelativesFilterInput | null,
};

export type OnUpdateV2CorrelativesSubscription = {
  onUpdateV2Correlatives?:  {
    __typename: "v2Correlatives",
    correlative?: number | null,
    createdAt: string,
    id: string,
    type?: v2ParametersType | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2CustomerSubscriptionVariables = {
  filter?: ModelSubscriptionV2CustomerFilterInput | null,
};

export type OnUpdateV2CustomerSubscription = {
  onUpdateV2Customer?:  {
    __typename: "v2Customer",
    actions?:  {
      __typename: "Modelv2CustomerActionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    inboxItems?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "Modelv2MessageConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    phone: string,
    phone2?: string | null,
    requestDate?: string | null,
    status?: string | null,
    updatedAt: string,
    v2Actions?:  {
      __typename: "Modelv2ActionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateV2CustomerActionSubscriptionVariables = {
  filter?: ModelSubscriptionV2CustomerActionFilterInput | null,
};

export type OnUpdateV2CustomerActionSubscription = {
  onUpdateV2CustomerAction?:  {
    __typename: "v2CustomerAction",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    date: string,
    detail: string,
    docUrl?: string | null,
    id: string,
    status: string,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnUpdateV2EmailSendSubscriptionVariables = {
  filter?: ModelSubscriptionV2EmailSendFilterInput | null,
};

export type OnUpdateV2EmailSendSubscription = {
  onUpdateV2EmailSend?:  {
    __typename: "v2EmailSend",
    contentEmail?: string | null,
    contentMessage?: string | null,
    createdAt: string,
    date?: string | null,
    email?: string | null,
    emailState?: v2EmailState | null,
    enrollmentId?: string | null,
    id: string,
    phone?: string | null,
    phoneState?: v2EmailState | null,
    privateEnrollmentId?: string | null,
    studentId: string,
    type: v2TypeOfEmail,
    typeSend: v2TypeSend,
    updatedAt: string,
    userSend?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userSendId: string,
  } | null,
};

export type OnUpdateV2GmailInboxSubscriptionVariables = {
  filter?: ModelSubscriptionV2GmailInboxFilterInput | null,
};

export type OnUpdateV2GmailInboxSubscription = {
  onUpdateV2GmailInbox?:  {
    __typename: "v2GmailInbox",
    attachments?: string | null,
    bodyHtml?: string | null,
    bodyText?: string | null,
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    dateSent: string,
    dateStr: string,
    fromEmail?: string | null,
    fromName?: string | null,
    gmailAccount: string,
    hasAttachments?: boolean | null,
    id: string,
    isRead?: boolean | null,
    labels?: Array< string | null > | null,
    messageId: string,
    snippet?: string | null,
    source?: string | null,
    subject?: string | null,
    threadId: string,
    toEmails?: Array< string | null > | null,
    type?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateV2ManagersSubscriptionVariables = {
  filter?: ModelSubscriptionV2ManagersFilterInput | null,
};

export type OnUpdateV2ManagersSubscription = {
  onUpdateV2Managers?:  {
    __typename: "v2Managers",
    createdAt: string,
    email?: string | null,
    firstName?: string | null,
    id: string,
    isActive?: boolean | null,
    lastName?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2MessageSubscriptionVariables = {
  filter?: ModelSubscriptionV2MessageFilterInput | null,
};

export type OnUpdateV2MessageSubscription = {
  onUpdateV2Message?:  {
    __typename: "v2Message",
    createdAt: string,
    customer?:  {
      __typename: "v2Customer",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone: string,
      phone2?: string | null,
      requestDate?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    customerId: string,
    id: string,
    message: string,
    source: string,
    type?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2MetadataSubscriptionVariables = {
  filter?: ModelSubscriptionV2MetadataFilterInput | null,
};

export type OnUpdateV2MetadataSubscription = {
  onUpdateV2Metadata?:  {
    __typename: "v2Metadata",
    createdAt: string,
    id: string,
    key?: string | null,
    metadata?:  {
      __typename: "v2Parameters",
      country: string,
      createdAt: string,
      id: string,
      idParent?: string | null,
      label: string,
      typeOfParameterId?: string | null,
      updatedAt: string,
      value: string,
    } | null,
    parametersId?: string | null,
    updatedAt: string,
    value?: string | null,
  } | null,
};

export type OnUpdateV2ParametersSubscriptionVariables = {
  filter?: ModelSubscriptionV2ParametersFilterInput | null,
};

export type OnUpdateV2ParametersSubscription = {
  onUpdateV2Parameters?:  {
    __typename: "v2Parameters",
    country: string,
    createdAt: string,
    id: string,
    idParent?: string | null,
    label: string,
    metadata?:  {
      __typename: "Modelv2MetadataConnection",
      nextToken?: string | null,
    } | null,
    typeOfParameter?:  {
      __typename: "v2ParametersEnc",
      createdAt: string,
      description?: string | null,
      id: string,
      updatedAt: string,
    } | null,
    typeOfParameterId?: string | null,
    updatedAt: string,
    value: string,
  } | null,
};

export type OnUpdateV2ParametersEncSubscriptionVariables = {
  filter?: ModelSubscriptionV2ParametersEncFilterInput | null,
};

export type OnUpdateV2ParametersEncSubscription = {
  onUpdateV2ParametersEnc?:  {
    __typename: "v2ParametersEnc",
    createdAt: string,
    description?: string | null,
    id: string,
    typeOfParameter?:  {
      __typename: "Modelv2ParametersConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2PaymentTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2PaymentTransactionsFilterInput | null,
};

export type OnUpdateV2PaymentTransactionsSubscription = {
  onUpdateV2PaymentTransactions?:  {
    __typename: "v2PaymentTransactions",
    accounting_date?: string | null,
    amount?: number | null,
    authorization_code?: string | null,
    buy_order?: string | null,
    card_detail?: string | null,
    card_number?: string | null,
    createdAt: string,
    day: string,
    glosa: string,
    hasRefund?: boolean | null,
    hour?: string | null,
    id: string,
    installments_amount?: string | null,
    installments_number?: string | null,
    month: string,
    payment_type_code?: string | null,
    response_code?: string | null,
    session_id?: string | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    shoppingCartId?: string | null,
    status?: string | null,
    token?: string | null,
    transaction_date?: string | null,
    updatedAt: string,
    urlWebpay?: string | null,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
    vci?: string | null,
    year?: string | null,
  } | null,
};

export type OnUpdateV2PermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2PermissionsFilterInput | null,
};

export type OnUpdateV2PermissionsSubscription = {
  onUpdateV2Permissions?:  {
    __typename: "v2Permissions",
    Padre?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    Submenu?:  {
      __typename: "Modelv2PermissionsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    isLeaf?: boolean | null,
    isVisible?: boolean | null,
    name: string,
    order?: number | null,
    padreId?: string | null,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateV2ProductSubscriptionVariables = {
  filter?: ModelSubscriptionV2ProductFilterInput | null,
};

export type OnUpdateV2ProductSubscription = {
  onUpdateV2Product?:  {
    __typename: "v2Product",
    createdAt: string,
    criticalStock: number,
    currentStock: number,
    id: string,
    isActive?: boolean | null,
    name: string,
    profits: number,
    purchasePrice: number,
    sellingPrice: number,
    sku: string,
    supplier?:  {
      __typename: "v2Supplier",
      address?: string | null,
      contactPerson?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      name: string,
      phone?: string | null,
      taxId?: string | null,
      updatedAt: string,
    } | null,
    supplierId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2ProfitCenterSubscriptionVariables = {
  filter?: ModelSubscriptionV2ProfitCenterFilterInput | null,
};

export type OnUpdateV2ProfitCenterSubscription = {
  onUpdateV2ProfitCenter?:  {
    __typename: "v2ProfitCenter",
    code?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    isActive?: boolean | null,
    managerID?: string | null,
    managers?:  {
      __typename: "Modelv2ManagersConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    parentProfitCenterID?: string | null,
    transactions?:  {
      __typename: "Modelv2TransactionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2RelationshipSubscriptionVariables = {
  filter?: ModelSubscriptionV2RelationshipFilterInput | null,
};

export type OnUpdateV2RelationshipSubscription = {
  onUpdateV2Relationship?:  {
    __typename: "v2Relationship",
    createdAt: string,
    id: string,
    relationType: v2RelationType,
    studentId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateV2RolPermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2RolPermissionsFilterInput | null,
};

export type OnUpdateV2RolPermissionsSubscription = {
  onUpdateV2RolPermissions?:  {
    __typename: "v2RolPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2RolesSubscriptionVariables = {
  filter?: ModelSubscriptionV2RolesFilterInput | null,
};

export type OnUpdateV2RolesSubscription = {
  onUpdateV2Roles?:  {
    __typename: "v2Roles",
    createdAt: string,
    displayName: string,
    icon: string,
    id: string,
    name: string,
    rolPermissions?:  {
      __typename: "Modelv2RolPermissionsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "Modelv2UsersConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateV2SellersCommissionSubscriptionVariables = {
  filter?: ModelSubscriptionV2SellersCommissionFilterInput | null,
};

export type OnUpdateV2SellersCommissionSubscription = {
  onUpdateV2SellersCommission?:  {
    __typename: "v2SellersCommission",
    amount?: number | null,
    createdAt: string,
    description?: string | null,
    id: string,
    paymentAmount?: number | null,
    salesCommission?: number | null,
    shoppingCart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    status: v2StatusCommission,
    type: v2TypeDetail,
    updatedAt: string,
    users?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    usersId?: string | null,
  } | null,
};

export type OnUpdateV2SentEmailSubscriptionVariables = {
  filter?: ModelSubscriptionV2SentEmailFilterInput | null,
};

export type OnUpdateV2SentEmailSubscription = {
  onUpdateV2SentEmail?:  {
    __typename: "v2SentEmail",
    body?: string | null,
    createdAt: string,
    emailState?: v2EmailState | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2ShoppingCartSubscriptionVariables = {
  filter?: ModelSubscriptionV2ShoppingCartFilterInput | null,
};

export type OnUpdateV2ShoppingCartSubscription = {
  onUpdateV2ShoppingCart?:  {
    __typename: "v2ShoppingCart",
    cartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    seller?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    sellerId: string,
    sellersCommission?:  {
      __typename: "v2SellersCommission",
      amount?: number | null,
      createdAt: string,
      description?: string | null,
      id: string,
      paymentAmount?: number | null,
      salesCommission?: number | null,
      status: v2StatusCommission,
      type: v2TypeDetail,
      updatedAt: string,
      usersId?: string | null,
    } | null,
    sellersCommissionId?: string | null,
    status?: string | null,
    totalPrice: number,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateV2ShoppingCartDetailSubscriptionVariables = {
  filter?: ModelSubscriptionV2ShoppingCartDetailFilterInput | null,
};

export type OnUpdateV2ShoppingCartDetailSubscription = {
  onUpdateV2ShoppingCartDetail?:  {
    __typename: "v2ShoppingCartDetail",
    academyEnrollmentId?: string | null,
    amount: number,
    cart?:  {
      __typename: "v2ShoppingCart",
      createdAt: string,
      id: string,
      sellerId: string,
      sellersCommissionId?: string | null,
      status?: string | null,
      totalPrice: number,
      updatedAt: string,
      userId: string,
    } | null,
    cartId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    createdById?: string | null,
    detail: string,
    enrollmentId?: string | null,
    id: string,
    privateEnrollmentId?: string | null,
    quantity: number,
    type: v2TypeDetail,
    updatedAt: string,
    wasDeleted?: boolean | null,
  } | null,
};

export type OnUpdateV2SupplierSubscriptionVariables = {
  filter?: ModelSubscriptionV2SupplierFilterInput | null,
};

export type OnUpdateV2SupplierSubscription = {
  onUpdateV2Supplier?:  {
    __typename: "v2Supplier",
    address?: string | null,
    contactPerson?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    name: string,
    phone?: string | null,
    products?:  {
      __typename: "Modelv2ProductConnection",
      nextToken?: string | null,
    } | null,
    taxId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2SupportTicketSubscriptionVariables = {
  filter?: ModelSubscriptionV2SupportTicketFilterInput | null,
};

export type OnUpdateV2SupportTicketSubscription = {
  onUpdateV2SupportTicket?:  {
    __typename: "v2SupportTicket",
    createdAt: string,
    date: string,
    day: string,
    description: string,
    email: string,
    id: string,
    lastModificationUser?: string | null,
    month: string,
    name: string,
    phoneNumber: string,
    reason?: v2reasonType | null,
    statusTicket?: v2statusTicketType | null,
    studentId?: string | null,
    ticketComments?:  {
      __typename: "Modelv2TicketCommentConnection",
      nextToken?: string | null,
    } | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type OnUpdateV2TicketCommentSubscriptionVariables = {
  filter?: ModelSubscriptionV2TicketCommentFilterInput | null,
};

export type OnUpdateV2TicketCommentSubscription = {
  onUpdateV2TicketComment?:  {
    __typename: "v2TicketComment",
    comment?:  {
      __typename: "v2CommentTickets",
      createdAt: string,
      description: string,
      id: string,
      statusModificationIdUser?: string | null,
      statusModificationUser?: string | null,
      updatedAt: string,
    } | null,
    commentId: string,
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateV2TicketUserSubscriptionVariables = {
  filter?: ModelSubscriptionV2TicketUserFilterInput | null,
};

export type OnUpdateV2TicketUserSubscription = {
  onUpdateV2TicketUser?:  {
    __typename: "v2TicketUser",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "v2SupportTicket",
      createdAt: string,
      date: string,
      day: string,
      description: string,
      email: string,
      id: string,
      lastModificationUser?: string | null,
      month: string,
      name: string,
      phoneNumber: string,
      reason?: v2reasonType | null,
      statusTicket?: v2statusTicketType | null,
      studentId?: string | null,
      updatedAt: string,
      year?: string | null,
    } | null,
    ticketId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateV2TransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2TransactionsFilterInput | null,
};

export type OnUpdateV2TransactionsSubscription = {
  onUpdateV2Transactions?:  {
    __typename: "v2Transactions",
    amount?: number | null,
    categoryID?: string | null,
    categoryType?: v2CategoryType | null,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    month?: string | null,
    profitCenter?:  {
      __typename: "v2ProfitCenter",
      code?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      isActive?: boolean | null,
      managerID?: string | null,
      name?: string | null,
      parentProfitCenterID?: string | null,
      updatedAt: string,
    } | null,
    profitCenterID: string,
    updatedAt: string,
    year?: string | null,
  } | null,
};

export type OnUpdateV2UserPermissionsSubscriptionVariables = {
  filter?: ModelSubscriptionV2UserPermissionsFilterInput | null,
};

export type OnUpdateV2UserPermissionsSubscription = {
  onUpdateV2UserPermissions?:  {
    __typename: "v2UserPermissions",
    createdAt: string,
    id: string,
    permission?:  {
      __typename: "v2Permissions",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      isLeaf?: boolean | null,
      isVisible?: boolean | null,
      name: string,
      order?: number | null,
      padreId?: string | null,
      updatedAt: string,
    } | null,
    permissionId: string,
    updatedAt: string,
    user?:  {
      __typename: "v2Users",
      city?: string | null,
      contactPhone?: string | null,
      country?: string | null,
      createdAt: string,
      email: string,
      firstContact?: boolean | null,
      id: string,
      ig?: string | null,
      isAcademyStudent?: boolean | null,
      isActive?: boolean | null,
      isEmployed?: boolean | null,
      latitude?: number | null,
      longitude?: number | null,
      name: string,
      roleId?: string | null,
      salesCommission?: number | null,
      state?: string | null,
      streetAddress?: string | null,
      updatedAt: string,
      validated?: boolean | null,
      zipCode?: string | null,
      zoomLevel?: number | null,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateV2UsersSubscriptionVariables = {
  filter?: ModelSubscriptionV2UsersFilterInput | null,
};

export type OnUpdateV2UsersSubscription = {
  onUpdateV2Users?:  {
    __typename: "v2Users",
    city?: string | null,
    contactPhone?: string | null,
    country?: string | null,
    createdAt: string,
    email: string,
    emailSend?:  {
      __typename: "Modelv2EmailSendConnection",
      nextToken?: string | null,
    } | null,
    firstContact?: boolean | null,
    gmailMessages?:  {
      __typename: "Modelv2GmailInboxConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    ig?: string | null,
    isAcademyStudent?: boolean | null,
    isActive?: boolean | null,
    isEmployed?: boolean | null,
    latitude?: number | null,
    longitude?: number | null,
    name: string,
    paymentTransactions?:  {
      __typename: "Modelv2PaymentTransactionsConnection",
      nextToken?: string | null,
    } | null,
    relationships?:  {
      __typename: "Modelv2RelationshipConnection",
      nextToken?: string | null,
    } | null,
    role?:  {
      __typename: "v2Roles",
      createdAt: string,
      displayName: string,
      icon: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    roleId?: string | null,
    salesCommission?: number | null,
    sellersCommissions?:  {
      __typename: "Modelv2SellersCommissionConnection",
      nextToken?: string | null,
    } | null,
    shoppingCart?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartDetails?:  {
      __typename: "Modelv2ShoppingCartDetailConnection",
      nextToken?: string | null,
    } | null,
    shoppingCartSeller?:  {
      __typename: "Modelv2ShoppingCartConnection",
      nextToken?: string | null,
    } | null,
    state?: string | null,
    streetAddress?: string | null,
    ticketUsers?:  {
      __typename: "Modelv2TicketUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userPermissions?:  {
      __typename: "Modelv2UserPermissionsConnection",
      nextToken?: string | null,
    } | null,
    validated?: boolean | null,
    zipCode?: string | null,
    zoomLevel?: number | null,
  } | null,
};
