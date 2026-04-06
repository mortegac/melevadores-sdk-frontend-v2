import { useState, useEffect } from "react";
import { fetchUserAttributes } from "aws-amplify/auth";
import Slideover from "@/components/Base/Headless/Slideover";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import { useAppDispatch } from "@/stores/hooks";
import { createActionThunk } from "@/stores/Actions/slice";
import { ACTION_STATUS_OPTIONS } from "@/stores/Actions/types";
import type { GmailInbox } from "@/stores/GmailInbox/types";

interface CustomerInfo {
  name: string;
  email: string;
  phone?: string;
  phone2?: string;
  status?: string;
}

interface CustomerActionSlideoverProps {
  // Modo GmailInbox: email provee customerId + contexto
  email?: GmailInbox | null;
  // Modo directo (InfoPage): customerId + info del cliente
  customerId?: string | null;
  customerInfo?: CustomerInfo | null;
  open: boolean;
  onClose: () => void;
  onSaved?: () => void;
}

interface FormState {
  status: string;
  message: string;
  urlDocument: string;
}

const emptyForm: FormState = {
  status: "CONTACTADO",
  message: "",
  urlDocument: "",
};

export function CustomerActionSlideover({
  email,
  customerId,
  customerInfo,
  open,
  onClose,
  onSaved,
}: CustomerActionSlideoverProps) {
  const dispatch = useAppDispatch();

  const resolvedCustomerId = email?.customerId ?? customerId ?? null;
  const resolvedCustomer   = email?.customer   ?? customerInfo ?? null;

  const [form, setForm]       = useState<FormState>({ ...emptyForm });
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setForm({ ...emptyForm });
      setError("");
      setSuccess(false);
    }
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!resolvedCustomerId) {
      setError("No hay un cliente asociado para registrar la acción.");
      return;
    }
    if (!form.message.trim()) {
      setError("El campo Mensaje es obligatorio.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const attrs  = await fetchUserAttributes();
      const userId = attrs.email ?? ""; // AppUser.id = email

      await dispatch(
        createActionThunk({
          customerId:  resolvedCustomerId,
          status:      form.status,
          message:     form.message.trim(),
          urlDocument: form.urlDocument.trim() || undefined,
          userId,
        })
      ).unwrap();

      setSuccess(true);
      setTimeout(() => {
        onSaved?.();
        onClose();
        setSuccess(false);
      }, 1200);
    } catch (err: any) {
      setError(err?.message ?? "Error al guardar la acción.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Slideover open={open} onClose={onClose} size="md">
      <Slideover.Panel>
        {/* Header */}
        <div className="p-5 border-b border-slate-200/60 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-base text-slate-700">Registrar Acción CRM</h2>
            {!resolvedCustomerId && (
              <p className="text-xs text-warning mt-0.5">Sin cliente asociado</p>
            )}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <Lucide icon="X" className="w-5 h-5" />
          </button>
        </div>

        {/* Customer data */}
        {resolvedCustomer && (
          <div className="px-5 py-3 bg-theme-1/5 border-b border-slate-200/60">
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Lucide icon="User" className="w-3.5 h-3.5 text-theme-1" />
                {resolvedCustomer.name}
              </p>
              <p className="text-xs text-slate-500">
                <span className="text-slate-400">Email:</span> {resolvedCustomer.email}
              </p>
              {resolvedCustomer.phone && (
                <p className="text-xs text-slate-500">
                  <span className="text-slate-400">Teléfono:</span> {resolvedCustomer.phone}
                  {resolvedCustomer.phone2 && ` / ${resolvedCustomer.phone2}`}
                </p>
              )}
              {resolvedCustomer.status && (
                <p className="text-xs text-slate-500">
                  <span className="text-slate-400">Estado:</span>{" "}
                  <span className="font-medium text-theme-1">{resolvedCustomer.status}</span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Email context (solo en modo GmailInbox) */}
        {email && (
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-200/60">
            <p className="text-xs text-slate-500 font-medium truncate">
              <span className="text-slate-400">Asunto:</span> {email.subject || "(sin asunto)"}
            </p>
            <p className="text-xs text-slate-400 mt-0.5 truncate">
              De: {email.fromName || email.fromEmail || "—"}
              {email.source && (
                <span className="ml-2 bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">
                  {email.source}
                </span>
              )}
            </p>
          </div>
        )}

        {/* Form */}
        <div className="p-5 flex flex-col gap-4">
          {/* Status */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-500">
              Estado <span className="text-danger">*</span>
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
            >
              {ACTION_STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-500">
              Mensaje <span className="text-danger">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Descripción de la acción realizada..."
              className="border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 resize-none focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
            />
          </div>

          {/* URL Documento */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-500">URL del documento</label>
            <input
              type="url"
              name="urlDocument"
              value={form.urlDocument}
              onChange={handleChange}
              placeholder="https://drive.google.com/..."
              className="border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
            />
          </div>

          {/* Error / Success */}
          {error && (
            <p className="text-xs text-danger bg-danger/10 rounded px-3 py-2">{error}</p>
          )}
          {success && (
            <p className="text-xs text-success bg-success/10 rounded px-3 py-2 flex items-center gap-1.5">
              <Lucide icon="CheckCircle" className="w-3.5 h-3.5" />
              Acción guardada correctamente.
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-200/60 flex justify-end gap-2">
          <Button variant="outline-secondary" size="sm" onClick={onClose} disabled={saving}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleSave}
            disabled={saving || !resolvedCustomerId}
          >
            {saving ? (
              <>
                <Lucide icon="Loader" className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                Guardando...
              </>
            ) : (
              <>
                <Lucide icon="Save" className="w-3.5 h-3.5 mr-1.5" />
                Guardar Acción
              </>
            )}
          </Button>
        </div>
      </Slideover.Panel>
    </Slideover>
  );
}
