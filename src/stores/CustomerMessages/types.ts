export type CustomerMessage = {
  id: string;
  customerId: string;
  message: string;
  type: string;
  source: string;
  createdAt: string;
  updatedAt: string;
  customer?: {
    id: string;
    name: string;
    email: string;
  };
};
