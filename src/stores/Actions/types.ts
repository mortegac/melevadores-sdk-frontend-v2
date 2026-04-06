export type ActionCustomer = {
  name: string;
  email: string;
};

export type Action = {
  id: string;
  status: string;
  message: string;
  urlDocument?: string;
  userId?: string;
  customerId: string;
  customer?: ActionCustomer | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActionInput = {
  status: string;
  message: string;
  urlDocument?: string;
  userId?: string;
  customerId: string;
};

export const ACTION_STATUS_OPTIONS = [
  { value: "CREADO",      label: "Creado" },
  { value: "CONTACTADO",  label: "Contactado" },
  { value: "EN_PROCESO",  label: "En proceso" },
  { value: "CERRADO",     label: "Cerrado" },
  { value: "DESCARTADO",  label: "Descartado" },
];
