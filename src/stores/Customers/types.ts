export type Customer = {
  id: string;
  name: string;
  phone: string;
  phone2?: string;
  email: string;
  status: string;
  requestDate?: string;
  createdAt: string;
  updatedAt: string;
};

export const emptyCustomer: Customer = {
  id: "",
  name: "",
  phone: "",
  phone2: "",
  email: "",
  status: "CREADO",
  createdAt: "",
  updatedAt: "",
};

export type CustomerFormData = {
  id?: string;
  name: string;
  phone: string;
  phone2?: string;
  email: string;
  status: string;
  requestDate?: string;
};

export const emptyCustomerForm: CustomerFormData = {
  name: "",
  phone: "",
  phone2: "",
  email: "",
  status: "CREADO",
};
