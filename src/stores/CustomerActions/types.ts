export type CustomerAction = {
  id: string;
  customerId: string;
  detail: string;
  date: string;
  userId?: string;
  status: string;
  docUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCustomerActionInput = {
  customerId: string;
  detail: string;
  date: string;
  userId?: string;
  status: string;
  docUrl?: string;
};

export const CUSTOMER_STATUS_OPTIONS = [
  { value: "CREADO",      label: "Creado" },
  { value: "CONTACTADO",  label: "Contactado" },
  { value: "EN_PROCESO",  label: "En Proceso" },
  { value: "CERRADO",     label: "Cerrado" },
  { value: "DESCARTADO",  label: "Descartado" },
] as const;

export type CustomerActionState = {
  status: "idle" | "loading" | "failed";
  actions: CustomerAction[];
  errorMessage: string;
};
