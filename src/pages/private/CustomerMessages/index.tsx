import { useEffect, useState, useCallback, useRef } from "react";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { Slideover } from "@/components/Base/Headless";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import {
  selectCustomerMessages,
  getMessagesThunk,
  getMessagesByCustomerThunk,
  deleteMessageThunk,
  clearMessageMutationError,
} from "@/stores/CustomerMessages/slice";
import type { CustomerMessage } from "@/stores/CustomerMessages/types";

/* ── helpers ────────────────────────────────────────────────────────────────── */
function formatDate(iso: string): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function truncate(text: string, max = 80): string {
  if (!text) return "—";
  return text.length > max ? text.slice(0, max) + "..." : text;
}

/* ── main page ──────────────────────────────────────────────────────────────── */
export default function CustomerMessagesPage() {
  const dispatch = useAppDispatch();
  const { status, mutationStatus, messages, errorMessage } =
    useAppSelector(selectCustomerMessages);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [detailMessage, setDetailMessage] = useState<CustomerMessage | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<CustomerMessage | null>(null);
  const [customerIdFilter, setCustomerIdFilter] = useState("");
  const [customerIdInput, setCustomerIdInput] = useState("");
  const pendingRef = useRef(false);

  useEffect(() => {
    if (pendingRef.current) return;
    pendingRef.current = true;
    dispatch(getMessagesThunk()).finally(() => {
      pendingRef.current = false;
    });
  }, []);

  const handleFilterByCustomer = useCallback(() => {
    const id = customerIdInput.trim();
    if (!id) {
      setCustomerIdFilter("");
      dispatch(getMessagesThunk());
    } else {
      setCustomerIdFilter(id);
      dispatch(getMessagesByCustomerThunk(id));
    }
  }, [dispatch, customerIdInput]);

  const handleClearCustomerFilter = useCallback(() => {
    setCustomerIdFilter("");
    setCustomerIdInput("");
    dispatch(getMessagesThunk());
  }, [dispatch]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;
    const result = await dispatch(deleteMessageThunk(deleteTarget.id));
    if (!result.type.endsWith("/rejected")) {
      setDeleteTarget(null);
      dispatch(clearMessageMutationError());
    }
  }, [dispatch, deleteTarget]);

  // Gather unique types for filter
  const uniqueTypes = Array.from(new Set(messages.map((m) => m.type).filter(Boolean)));

  const filtered = messages.filter((m) => {
    if (typeFilter !== "all" && m.type !== typeFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        m.message?.toLowerCase().includes(q) ||
        m.customer?.name?.toLowerCase().includes(q) ||
        m.customer?.email?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-700">Mensajes</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Mensajes recibidos de clientes
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 p-4 box mb-5">
        {/* Type filter */}
        <div className="flex rounded-md border border-slate-200 overflow-hidden text-sm">
          <button
            onClick={() => setTypeFilter("all")}
            className={`px-3 py-1.5 transition-colors ${
              typeFilter === "all"
                ? "bg-theme-1 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Todos
          </button>
          {uniqueTypes.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 transition-colors ${
                typeFilter === t
                  ? "bg-theme-1 text-white"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Lucide
            icon="Search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por mensaje o cliente..."
            className="w-full border border-slate-200 rounded-md pl-8 pr-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
          />
        </div>

        {/* Customer filter */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={customerIdInput}
            onChange={(e) => setCustomerIdInput(e.target.value)}
            placeholder="ID del cliente..."
            className="border border-slate-200 rounded-md px-3 py-1.5 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
          />
          <Button variant="outline-secondary" size="sm" onClick={handleFilterByCustomer}>
            <Lucide icon="Filter" className="w-3.5 h-3.5 mr-1" />
            Filtrar
          </Button>
          {customerIdFilter && (
            <Button variant="outline-danger" size="sm" onClick={handleClearCustomerFilter}>
              <Lucide icon="X" className="w-3.5 h-3.5" />
            </Button>
          )}
        </div>

        <span className="text-xs text-slate-400 ml-auto">
          {filtered.length} mensaje{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Active customer filter badge */}
      {customerIdFilter && (
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs text-slate-500 bg-blue-50 border border-blue-200 px-2 py-1 rounded-full">
            Filtrando por cliente: <strong>{customerIdFilter}</strong>
          </span>
        </div>
      )}

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
              icon="MessageSquare"
              className="w-14 h-14 text-slate-200 stroke-[0.5]"
            />
            <p className="mt-3 text-slate-400">No se encontraron mensajes.</p>
          </div>
        )}
        {status === "idle" && filtered.length > 0 && (
          <div className="w-full overflow-x-auto">
            <Table className="border-b border-slate-200/60 w-full">
              <Table.Thead>
                <Table.Tr>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Fecha
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Cliente
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Mensaje
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Tipo
                  </Table.Td>
                  <Table.Td className="py-3 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">
                    Fuente
                  </Table.Td>
                  <Table.Td className="py-3 border-t bg-slate-50 border-slate-200/60" />
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {filtered.map((msg, i) => (
                  <Table.Tr
                    key={msg.id || i}
                    className="[&_td]:last:border-b-0 cursor-pointer hover:bg-slate-50/50"
                    onClick={() => setDetailMessage(msg)}
                  >
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <span className="text-xs text-slate-500">
                        {formatDate(msg.createdAt)}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed">
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          {msg.customer?.name || "—"}
                        </p>
                        <p className="text-xs text-slate-400">
                          {msg.customer?.email || msg.customerId}
                        </p>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed max-w-xs">
                      <span className="text-sm text-slate-600">
                        {truncate(msg.message)}
                      </span>
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <TypeBadge type={msg.type} />
                    </Table.Td>
                    <Table.Td className="py-3 border-dashed whitespace-nowrap">
                      <span className="text-xs text-slate-500">{msg.source || "—"}</span>
                    </Table.Td>
                    <Table.Td
                      className="py-3 border-dashed text-right whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => setDeleteTarget(msg)}
                      >
                        <Lucide icon="Trash2" className="w-3.5 h-3.5" />
                      </Button>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        )}
      </div>

      {/* Detail Slideover */}
      {detailMessage && (
        <MessageDetailSlideover
          message={detailMessage}
          onClose={() => setDetailMessage(null)}
        />
      )}

      {/* Delete confirmation */}
      {deleteTarget && (
        <DeleteConfirmModal
          message={deleteTarget}
          isDeleting={mutationStatus === "deleting"}
          error={mutationStatus === "failed" ? errorMessage : ""}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}

/* ── TypeBadge ──────────────────────────────────────────────────────────────── */
function TypeBadge({ type }: { type: string }) {
  const colorMap: Record<string, string> = {
    "WEB-FORM": "bg-purple-100 text-purple-700",
    EMAIL: "bg-blue-100 text-blue-700",
    PHONE: "bg-green-100 text-green-700",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
        colorMap[type] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {type || "—"}
    </span>
  );
}

/* ── MessageDetailSlideover ─────────────────────────────────────────────────── */
interface DetailProps {
  message: CustomerMessage;
  onClose: () => void;
}

function MessageDetailSlideover({ message, onClose }: DetailProps) {
  return (
    <Slideover open onClose={onClose} size="md">
      <Slideover.Panel>
        <Slideover.Title>
          <div className="flex items-center justify-between w-full">
            <span className="font-semibold text-slate-700">Detalle del mensaje</span>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <Lucide icon="X" className="w-5 h-5" />
            </button>
          </div>
        </Slideover.Title>

        <Slideover.Description className="flex flex-col p-5 gap-4">
          {/* Customer info */}
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
              Cliente
            </p>
            <p className="text-sm font-semibold text-slate-700">
              {message.customer?.name || "—"}
            </p>
            <p className="text-sm text-slate-500 mt-0.5">
              {message.customer?.email || message.customerId}
            </p>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-xs text-slate-400 mb-1">Tipo</p>
              <TypeBadge type={message.type} />
            </div>
            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-xs text-slate-400 mb-1">Fuente</p>
              <p className="text-sm text-slate-600">{message.source || "—"}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 col-span-2">
              <p className="text-xs text-slate-400 mb-1">Fecha</p>
              <p className="text-sm text-slate-600">
                {new Date(message.createdAt).toLocaleString("es-CL")}
              </p>
            </div>
          </div>

          {/* Message content */}
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
              Mensaje
            </p>
            <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
              {message.message || "Sin contenido"}
            </div>
          </div>
        </Slideover.Description>
      </Slideover.Panel>
    </Slideover>
  );
}

/* ── DeleteConfirmModal ─────────────────────────────────────────────────────── */
interface DeleteProps {
  message: CustomerMessage;
  isDeleting: boolean;
  error: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function DeleteConfirmModal({
  message,
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
              Eliminar mensaje
            </p>
            <p className="text-xs text-slate-400 mt-1">
              ¿Estás seguro de eliminar este mensaje? Esta acción no se puede
              deshacer.
            </p>
            <p className="text-xs text-slate-500 mt-1 italic">
              "{truncate(message.message, 60)}"
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
