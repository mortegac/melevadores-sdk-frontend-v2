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
  { value: "CREADO",               label: "Creado" },
  { value: "CONTACTADO",           label: "Contactado" },
  { value: "ESPERANDO_INFO",       label: "Esperando información del cliente" },
  { value: "GENERANDO_COTIZACION", label: "Generando cotización" },
  { value: "COTIZACION_ENVIADA",   label: "Cotización enviada" },
  { value: "COTIZACION_ACEPTADA",  label: "Cotización Aceptada" },
  { value: "COTIZACION_RECHAZADA", label: "Cotización Rechazada" },
];
