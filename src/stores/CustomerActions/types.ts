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
  { value: "CREADO",               label: "Creado" },
  { value: "CONTACTADO",           label: "Contactado" },
  { value: "ESPERANDO_INFO",       label: "Esperando información del cliente" },
  { value: "GENERANDO_COTIZACION", label: "Generando cotización" },
  { value: "COTIZACION_ENVIADA",   label: "Cotización enviada" },
  { value: "COTIZACION_ACEPTADA",  label: "Cotización Aceptada" },
  { value: "COTIZACION_RECHAZADA", label: "Cotización Rechazada" },
] as const;

export type CustomerActionState = {
  status: "idle" | "loading" | "failed";
  actions: CustomerAction[];
  errorMessage: string;
};
