import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { Slideover } from "@/components/Base/Headless";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import {
  selectCustomers,
  getCustomersThunk,
  createCustomerThunk,
  updateCustomerThunk,
  deleteCustomerThunk,
  clearCustomerMutationError,
} from "@/stores/Customers/slice";
import type { Customer, CustomerFormData } from "@/stores/Customers/types";
import { emptyCustomerForm } from "@/stores/Customers/types";
import { CustomerActionSlideover } from "@/pages/private/GmailInboxAdmin/CustomerActionSlideover";
import { RESUME_CLIENT } from "@/router/paths";

/* ── helpers ────────────────────────────────────────────────────────────────── */
type StatusFilter =
  | "all"
  | "CREADO"
  | "CONTACTADO"
  | "ESPERANDO_INFO"
  | "GENERANDO_COTIZACION"
  | "COTIZACION_ENVIADA"
  | "COTIZACION_ACEPTADA"
  | "COTIZACION_RECHAZADA";

const STATUS_OPTIONS: { key: StatusFilter; label: string }[] = [
  { key: "all",                  label: "Todos" },
  { key: "CREADO",               label: "Creado" },
  { key: "CONTACTADO",           label: "Contactado" },
  { key: "ESPERANDO_INFO",       label: "Esperando información" },
  { key: "GENERANDO_COTIZACION", label: "Generando cotización" },
  { key: "COTIZACION_ENVIADA",   label: "Cotización enviada" },
  { key: "COTIZACION_ACEPTADA",  label: "Cotización Aceptada" },
  { key: "COTIZACION_RECHAZADA", label: "Cotización Rechazada" },
];

function formatDate(iso: string): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatRequestDate(date?: string): string {
  if (!date) return "—";
  // date is YYYY-MM-DD; parse without timezone shift
  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
}

const STATUS_VALUES = [
  "CREADO",
  "CONTACTADO",
  "ESPERANDO_INFO",
  "GENERANDO_COTIZACION",
  "COTIZACION_ENVIADA",
  "COTIZACION_ACEPTADA",
  "COTIZACION_RECHAZADA",
] as const;
type CustomerStatus = typeof STATUS_VALUES[number];

/* ── InlineStatusSelect ─────────────────────────────────────────────────────── */
interface InlineStatusSelectProps {
  customer: Customer;
}

function InlineStatusSelect({ customer }: InlineStatusSelectProps) {
  const dispatch = useAppDispatch();
  const [busy, setBusy] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as CustomerStatus;
    if (newStatus === customer.status) return;
    setBusy(true);
    await dispatch(
      updateCustomerThunk({
        id: customer.id,
        name: customer.name,
        phone: customer.phone,
        phone2: customer.phone2,
        email: customer.email,
        status: newStatus,
      })
    );
    setBusy(false);
  };

  const colorMap: Record<string, string> = {
    CREADO:                "bg-primary/10 text-primary border-primary/20",
    CONTACTADO:            "bg-warning/10 text-warning border-warning/20",
    ESPERANDO_INFO:        "bg-orange-500/10 text-orange-500 border-orange-500/20",
    GENERANDO_COTIZACION:  "bg-purple-500/10 text-purple-500 border-purple-500/20",
    COTIZACION_ENVIADA:    "bg-blue-500/10 text-blue-500 border-blue-500/20",
    COTIZACION_ACEPTADA:   "bg-success/10 text-success border-success/20",
    COTIZACION_RECHAZADA:  "bg-danger/10 text-danger border-danger/20",
  };

  const selectClass = `text-xs font-medium px-2 py-0.5 rounded-full border appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-theme-1 transition-opacity ${
    colorMap[customer.status] ?? "bg-slate-50 text-slate-600 border-slate-200"
  } ${busy ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <select
      value={customer.status}
      onChange={handleChange}
      disabled={busy}
      className={selectClass}
    >
      {STATUS_VALUES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}

/* ── main page ──────────────────────────────────────────────────────────────── */
export default function CustomersPage() {
  const dispatch = useAppDispatch();
  const { status, mutationStatus, customers, errorMessage } =
    useAppSelector(selectCustomers);

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Customer | null>(null);
  const [actionCustomer, setActionCustomer] = useState<Customer | null>(null);
  const [actionSlideoverOpen, setActionSlideoverOpen] = useState(false);
  const pendingRef = useRef(false);

  useEffect(() => {
    if (pendingRef.current) return;
    pendingRef.current = true;
    dispatch(getCustomersThunk()).finally(() => {
      pendingRef.current = false;
    });
  }, []);

  const handleOpenCreate = useCallback(() => {
    setEditCustomer(null);
    dispatch(clearCustomerMutationError());
    setFormOpen(true);
  }, [dispatch]);

  const handleOpenEdit = useCallback(
    (customer: Customer) => {
      setEditCustomer(customer);
      dispatch(clearCustomerMutationError());
      setFormOpen(true);
    },
    [dispatch]
  );

  const handleCloseForm = useCallback(() => {
    setFormOpen(false);
    setEditCustomer(null);
  }, []);

  const handleSave = useCallback(
    async (data: CustomerFormData) => {
      if (editCustomer) {
        const result = await dispatch(
          updateCustomerThunk({ ...data, id: editCustomer.id })
        );
        if (!result.type.endsWith("/rejected")) setFormOpen(false);
      } else {
        const result = await dispatch(createCustomerThunk(data));
        if (!result.type.endsWith("/rejected")) setFormOpen(false);
      }
    },
    [dispatch, editCustomer]
  );

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;
    const result = await dispatch(deleteCustomerThunk(deleteTarget.id));
    if (!result.type.endsWith("/rejected")) setDeleteTarget(null);
  }, [dispatch, deleteTarget]);

  const filtered = customers.filter((c) => {
    if (statusFilter !== "all" && c.status !== statusFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        c.name?.toLowerCase().includes(q) ||
        c.email?.toLowerCase().includes(q) ||
        c.phone?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-700">Clientes</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Gestión de clientes del CRM
          </p>
        </div>
        <Button variant="primary" size="sm" onClick={handleOpenCreate}>
          <Lucide icon="UserPlus" className="w-3.5 h-3.5 mr-1.5" />
          Nuevo Cliente
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 p-4 box mb-5">
        <div className="flex rounded-md border border-slate-200 overflow-hidden text-sm">
          {STATUS_OPTIONS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setStatusFilter(key)}
              className={`px-3 py-1.5 transition-colors ${
                statusFilter === key
                  ? "bg-theme-1 text-white"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="relative flex-1 min-w-[200px]">
          <Lucide
            icon="Search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, email o teléfono..."
            className="w-full border border-slate-200 rounded-md pl-8 pr-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
          />
        </div>
        <span className="text-xs text-slate-400 ml-auto">
          {filtered.length} cliente{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="p-5 box">
        {status === "loading" && (
          <div className="flex justify-center items-center h-40">
            <LoadingIcon color="purple" icon="three-dots" className="w-10 h-10" />
          </div>
        )}
        {status === "failed" && (
          <p className="text-danger text-sm">{errorMessage}</p>
        )}
        {status === "idle" && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <Lucide
              icon="Users"
              className="w-14 h-14 text-slate-200 stroke-[0.5]"
            />
            <p className="mt-3 text-slate-400">No se encontraron clientes.</p>
          </div>
        )}
        {status === "idle" && filtered.length > 0 && (
          <div className="w-full overflow-x-auto">
            <Table className="border-b border-slate-200/60 w-full">
              <Table.Thead>
                <Table.Tr>
                  <Table.Td className="py-3 border-t bg-slate-50 border-slate-200/60 w-20" />
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Nombre
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Email
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Teléfono
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Teléfono 2
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Estado
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Fecha Solicitud
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Fecha creación
                  </Table.Td>
                  <Table.Td className="py-3 border-t bg-slate-50 border-slate-200/60" />
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {filtered.map((customer, i) => (
                  <Table.Tr key={customer.id || i} className="[&_td]:last:border-b-0">
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          title="Nueva acción"
                          onClick={() => { setActionCustomer(customer); setActionSlideoverOpen(true); }}
                        >
                          <Lucide icon="ClipboardList" className="w-3.5 h-3.5" />
                        </Button>
                        <Link to={`${RESUME_CLIENT}?id=${customer.id}`}>
                          <Button variant="outline-secondary" size="sm" title="Ver resumen del cliente">
                            <Lucide icon="ExternalLink" className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed">
                      <span className="text-sm font-medium text-slate-700">
                        {customer.name || "—"}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <span className="text-sm text-slate-500">
                        {customer.email || "—"}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <span className="text-sm text-slate-500">
                        {customer.phone || "—"}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <span className="text-sm text-slate-500">
                        {customer.phone2 || "—"}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed">
                      <StatusBadge status={customer.status} />
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <span className="text-sm text-slate-500">
                        {formatRequestDate(customer.requestDate)}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <span className="text-sm text-slate-500">
                        {formatDate(customer.createdAt)}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed text-right whitespace-nowrap">
                      <div className="flex justify-end gap-1.5">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleOpenEdit(customer)}
                        >
                          <Lucide icon="Pencil" className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => setDeleteTarget(customer)}
                        >
                          <Lucide icon="Trash2" className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        )}
      </div>

      {/* Form Slideover */}
      <CustomerFormSlideover
        open={formOpen}
        editCustomer={editCustomer}
        mutationStatus={mutationStatus}
        errorMessage={mutationStatus === "failed" ? errorMessage : ""}
        onClose={handleCloseForm}
        onSave={handleSave}
      />

      {/* Delete confirmation */}
      {deleteTarget && (
        <DeleteConfirmModal
          customer={deleteTarget}
          isDeleting={mutationStatus === "deleting"}
          error={mutationStatus === "failed" ? errorMessage : ""}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      {/* Customer Action Slideover */}
      <CustomerActionSlideover
        open={actionSlideoverOpen}
        customerId={actionCustomer?.id ?? null}
        customerInfo={actionCustomer ? { name: actionCustomer.name, email: actionCustomer.email } : null}
        onClose={() => { setActionSlideoverOpen(false); setActionCustomer(null); }}
      />
    </div>
  );
}

/* ── StatusBadge ────────────────────────────────────────────────────────────── */
const STATUS_LABELS: Record<string, string> = {
  CREADO:               "Creado",
  CONTACTADO:           "Contactado",
  ESPERANDO_INFO:       "Esperando información",
  GENERANDO_COTIZACION: "Generando cotización",
  COTIZACION_ENVIADA:   "Cotización enviada",
  COTIZACION_ACEPTADA:  "Cotización Aceptada",
  COTIZACION_RECHAZADA: "Cotización Rechazada",
};

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    CREADO:               "bg-primary/10 text-primary",
    CONTACTADO:           "bg-warning/10 text-warning",
    ESPERANDO_INFO:       "bg-orange-500/10 text-orange-500",
    GENERANDO_COTIZACION: "bg-purple-500/10 text-purple-500",
    COTIZACION_ENVIADA:   "bg-blue-500/10 text-blue-500",
    COTIZACION_ACEPTADA:  "bg-success/10 text-success",
    COTIZACION_RECHAZADA: "bg-danger/10 text-danger",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
        colorMap[status] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {STATUS_LABELS[status] ?? status}
    </span>
  );
}

/* ── CustomerFormSlideover ──────────────────────────────────────────────────── */
interface FormProps {
  open: boolean;
  editCustomer: Customer | null;
  mutationStatus: string;
  errorMessage: string;
  onClose: () => void;
  onSave: (data: CustomerFormData) => void;
}

function CustomerFormSlideover({
  open,
  editCustomer,
  mutationStatus,
  errorMessage,
  onClose,
  onSave,
}: FormProps) {
  const [form, setForm] = useState<CustomerFormData>(emptyCustomerForm);

  useEffect(() => {
    if (open) {
      setForm(
        editCustomer
          ? {
              name: editCustomer.name,
              phone: editCustomer.phone,
              phone2: editCustomer.phone2 ?? "",
              email: editCustomer.email,
              status: editCustomer.status,
            }
          : emptyCustomerForm
      );
    }
  }, [open, editCustomer]);

  const set = (field: keyof CustomerFormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const isSaving = mutationStatus === "saving";
  const isEdit = !!editCustomer;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Slideover open={open} onClose={onClose} size="md">
      <Slideover.Panel>
        <Slideover.Title>
          <div className="flex items-center justify-between w-full">
            <span className="font-semibold text-slate-700">
              {isEdit ? `Editar: ${editCustomer?.name}` : "Nuevo Cliente"}
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <Lucide icon="X" className="w-5 h-5" />
            </button>
          </div>
        </Slideover.Title>

        <Slideover.Description className="flex flex-col p-5 gap-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-500">
                Nombre <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Nombre completo"
                required
                className="border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-500">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value.toLowerCase().trim())}
                placeholder="cliente@ejemplo.com"
                required
                className="border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-500">
                Teléfono <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="+56 9 1234 5678"
                required
                className="border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
              />
            </div>

            {/* Phone 2 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-500">
                Teléfono 2
              </label>
              <input
                type="text"
                value={form.phone2 ?? ""}
                onChange={(e) => set("phone2", e.target.value)}
                placeholder="+56 2 1234 5678"
                className="border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-500">
                Estado
              </label>
              <select
                value={form.status}
                onChange={(e) => set("status", e.target.value)}
                className="border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
              >
                <option value="CREADO">Creado</option>
                <option value="CONTACTADO">Contactado</option>
                <option value="ESPERANDO_INFO">Esperando información del cliente</option>
                <option value="GENERANDO_COTIZACION">Generando cotización</option>
                <option value="COTIZACION_ENVIADA">Cotización enviada</option>
                <option value="COTIZACION_ACEPTADA">Cotización Aceptada</option>
                <option value="COTIZACION_RECHAZADA">Cotización Rechazada</option>
              </select>
            </div>

            {/* Error */}
            {errorMessage && (
              <p className="text-danger text-xs">{errorMessage}</p>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline-secondary"
                size="sm"
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <LoadingIcon
                      icon="tail-spin"
                      color="white"
                      className="w-4 h-4 mr-1.5"
                    />
                    Guardando...
                  </>
                ) : isEdit ? (
                  "Actualizar"
                ) : (
                  "Crear"
                )}
              </Button>
            </div>
          </form>
        </Slideover.Description>
      </Slideover.Panel>
    </Slideover>
  );
}

/* ── DeleteConfirmModal ─────────────────────────────────────────────────────── */
interface DeleteProps {
  customer: Customer;
  isDeleting: boolean;
  error: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function DeleteConfirmModal({
  customer,
  isDeleting,
  error,
  onConfirm,
  onCancel,
}: DeleteProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm mx-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-danger/10">
            <Lucide icon="AlertTriangle" className="w-5 h-5 text-danger" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-700">
              Eliminar cliente
            </p>
            <p className="text-xs text-slate-400 mt-1">
              ¿Estás seguro de eliminar a{" "}
              <strong className="text-slate-600">{customer.name}</strong>? Esta
              acción no se puede deshacer.
            </p>
            {error && <p className="text-danger text-xs mt-2">{error}</p>}
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={onCancel}
            disabled={isDeleting}
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <LoadingIcon
                  icon="tail-spin"
                  color="white"
                  className="w-4 h-4 mr-1.5"
                />
                Eliminando...
              </>
            ) : (
              "Eliminar"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
