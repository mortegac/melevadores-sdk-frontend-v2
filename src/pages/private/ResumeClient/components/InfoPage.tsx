import { useState } from "react";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import type { Customer } from "@/stores/Customers/types";
import { ActionsTimeline } from "./ActionsTimeline";
import { CustomerActionSlideover } from "../../GmailInboxAdmin/CustomerActionSlideover";

interface InfoPageProps {
  customer: Customer | null;
  customerId?: string;
}

const statusColorMap: Record<string, string> = {
  CREADO:                 "bg-primary/10 text-primary border-primary/20",
  CONTACTADO:             "bg-warning/10 text-warning border-warning/20",
  ESPERANDO_INFO:         "bg-orange-500/10 text-orange-500 border-orange-500/20",
  GENERANDO_COTIZACION:   "bg-purple-500/10 text-purple-500 border-purple-500/20",
  COTIZACION_ENVIADA:     "bg-blue-500/10 text-blue-500 border-blue-500/20",
  COTIZACION_ACEPTADA:    "bg-success/10 text-success border-success/20",
  COTIZACION_RECHAZADA:   "bg-danger/10 text-danger border-danger/20",
};

function formatDate(iso?: string): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatRequestDate(date?: string): string {
  if (!date) return "—";
  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
}

export function InfoPage({ customer, customerId }: InfoPageProps) {
  const [slideoverOpen, setSlideoverOpen] = useState(false);
  const [refreshKey, setRefreshKey]       = useState(0);

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center py-16 mt-6">
        <Lucide icon="User" className="w-16 h-16 text-slate-300 stroke-[0.8]" />
        <div className="mt-4 text-lg font-medium text-slate-500">Sin datos del cliente</div>
      </div>
    );
  }

  const statusClass = statusColorMap[customer.status] ?? "bg-slate-100 text-slate-500 border-slate-200";

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Columna principal: datos de contacto */}
        <div className="col-span-12 xl:col-span-8">
          <div className="box box--stacked p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lucide icon="User" className="w-5 h-5 text-theme-1" />
              <h3 className="text-base font-medium">Datos de Contacto</h3>
            </div>

            <div className="flex flex-col divide-y divide-slate-100">
              {/* Nombre */}
              <div className="flex items-center gap-3 py-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                  <Lucide icon="User" className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Nombre</div>
                  <div className="text-sm font-medium">{customer.name || "—"}</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 py-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                  <Lucide icon="Mail" className="w-4 h-4 text-slate-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-sm font-medium truncate">{customer.email || "—"}</div>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-3 py-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                  <Lucide icon="Phone" className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Teléfono</div>
                  <div className="text-sm font-medium">{customer.phone || "—"}</div>
                </div>
              </div>

              {/* Teléfono 2 */}
              {customer.phone2 && (
                <div className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                    <Lucide icon="Phone" className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Teléfono 2</div>
                    <div className="text-sm font-medium">{customer.phone2}</div>
                  </div>
                </div>
              )}

              {/* Estado — solo lectura */}
              <div className="flex items-center gap-3 py-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                  <Lucide icon="Tag" className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Estado</div>
                  <span className={`mt-1 inline-block text-xs font-medium border rounded-full px-2.5 py-0.5 ${statusClass}`}>
                    {customer.status || "—"}
                  </span>
                </div>
              </div>

              {/* Fecha de solicitud */}
              {customer.requestDate && (
                <div className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                    <Lucide icon="CalendarCheck" className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Fecha de solicitud</div>
                    <div className="text-sm font-medium">{formatRequestDate(customer.requestDate)}</div>
                  </div>
                </div>
              )}

              {/* Fecha de creación */}
              <div className="flex items-center gap-3 py-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                  <Lucide icon="Calendar" className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Fecha de creación</div>
                  <div className="text-sm font-medium">{formatDate(customer.createdAt)}</div>
                </div>
              </div>

              {/* Última actualización */}
              <div className="flex items-center gap-3 py-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 shrink-0">
                  <Lucide icon="RefreshCw" className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Última actualización</div>
                  <div className="text-sm font-medium">{formatDate(customer.updatedAt)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha: Historial de acciones */}
        {customerId && (
          <div className="col-span-12 xl:col-span-4">
            <div className="box box--stacked p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Lucide icon="ClipboardList" className="w-5 h-5 text-theme-1" />
                  <h3 className="text-base font-medium">Historial de acciones</h3>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSlideoverOpen(true)}
                  className="flex items-center gap-1"
                >
                  <Lucide icon="Plus" className="w-3.5 h-3.5" />
                  Nueva
                </Button>
              </div>
              <ActionsTimeline customerId={customerId} refreshKey={refreshKey} />
            </div>
          </div>
        )}
      </div>

      {/* Slideover para registrar acción */}
      {customerId && (
        <CustomerActionSlideover
          customerId={customerId}
          customerInfo={{
            name:   customer.name   ?? "",
            email:  customer.email  ?? "",
            phone:  customer.phone  ?? undefined,
            phone2: customer.phone2 ?? undefined,
            status: customer.status ?? undefined,
          }}
          open={slideoverOpen}
          onClose={() => setSlideoverOpen(false)}
          onSaved={() => setRefreshKey((k) => k + 1)}
        />
      )}
    </>
  );
}
