import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { fetchAllActions } from "@/stores/Actions/services";
import { fetchAppUsers } from "@/stores/AppUsers/services";
import type { Action } from "@/stores/Actions/types";
import type { AppUser } from "@/stores/AppUsers/types";
import { RESUME_CLIENT } from "@/router/paths";

// ── helpers ────────────────────────────────────────────────────────────────
const MONTHS_ES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

function formatDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  const day  = String(d.getDate()).padStart(2, "0");
  const mon  = MONTHS_ES[d.getMonth()];
  const year = d.getFullYear();
  const hh   = String(d.getHours()).padStart(2, "0");
  const mm   = String(d.getMinutes()).padStart(2, "0");
  const ss   = String(d.getSeconds()).padStart(2, "0");
  return `${day} ${mon} ${year} ${hh}:${mm}:${ss}`;
}

function defaultDateFrom(): string {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().slice(0, 10);
}
function defaultDateTo(): string {
  return new Date().toISOString().slice(0, 10);
}

const STATUS_CONFIG: Record<string, { label: string; badgeClass: string }> = {
  CREADO:               { label: "Creado",                         badgeClass: "bg-slate-100 text-slate-600 border border-slate-200" },
  CONTACTADO:           { label: "Contactado",                     badgeClass: "bg-blue-100 text-blue-700 border border-blue-200" },
  ESPERANDO_INFO:       { label: "Esperando información",          badgeClass: "bg-orange-100 text-orange-600 border border-orange-200" },
  GENERANDO_COTIZACION: { label: "Generando cotización",           badgeClass: "bg-purple-100 text-purple-600 border border-purple-200" },
  COTIZACION_ENVIADA:   { label: "Cotización enviada",             badgeClass: "bg-blue-100 text-blue-600 border border-blue-200" },
  COTIZACION_ACEPTADA:  { label: "Cotización Aceptada",            badgeClass: "bg-green-100 text-green-700 border border-green-200" },
  COTIZACION_RECHAZADA: { label: "Cotización Rechazada",           badgeClass: "bg-red-100 text-red-700 border border-red-200" },
};

// ── component ──────────────────────────────────────────────────────────────
export default function CustomerActionsPage() {
  const [userId,   setUserId]   = useState("");
  const [custText, setCustText] = useState("");
  const [dateFrom, setDateFrom] = useState(defaultDateFrom);
  const [dateTo,   setDateTo]   = useState(defaultDateTo);

  const [actions, setActions] = useState<Action[]>([]);
  const [users,   setUsers]   = useState<AppUser[]>([]);
  const [userMap, setUserMap] = useState<Map<string, string>>(new Map());
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  useEffect(() => {
    fetchAppUsers()
      .then((list) => {
        setUsers(list.filter((u) => u.isActive !== false));
        const map = new Map<string, string>();
        list.forEach((u) => map.set(u.id, u.name));
        setUserMap(map);
      })
      .catch(() => {});
  }, []);

  const handleSearch = useCallback(() => {
    setLoading(true);
    setError("");
    fetchAllActions({
      userId:   userId   || undefined,
      dateFrom: dateFrom || undefined,
      dateTo:   dateTo   || undefined,
    })
      .then((items) => setActions(items))
      .catch(() => setError("Error al cargar las acciones."))
      .finally(() => setLoading(false));
  }, [userId, dateFrom, dateTo]);

  useEffect(() => { handleSearch(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Client-side filter: nombre o email del customer
  const q = custText.trim().toLowerCase();
  const visible = q
    ? actions.filter((a) => {
        const name  = (a.customer?.name  ?? "").toLowerCase();
        const email = (a.customer?.email ?? "").toLowerCase();
        return name.includes(q) || email.includes(q);
      })
    : actions;

  return (
    <div className="mt-5 grid grid-cols-12 gap-6">
      {/* Header */}
      <div className="col-span-12 flex items-center gap-3">
        <Lucide icon="ClipboardList" className="w-6 h-6 text-theme-1" />
        <h2 className="text-xl font-medium">Acciones usuarios</h2>
        {!loading && (
          <span className="text-xs font-medium bg-slate-100 text-slate-600 rounded-full px-2.5 py-0.5">
            {visible.length}
          </span>
        )}
      </div>

      {/* Filters */}
      <div className="col-span-12">
        <div className="box box--stacked p-4">
          <div className="grid grid-cols-12 gap-3 items-end">
            {/* Usuario */}
            <div className="col-span-12 sm:col-span-3">
              <label className="block text-xs font-medium text-slate-500 mb-1">Usuario</label>
              <select
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1"
              >
                <option value="">Todos los usuarios</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>{u.name} ({u.id})</option>
                ))}
              </select>
            </div>

            {/* Cliente nombre/email */}
            <div className="col-span-12 sm:col-span-3">
              <label className="block text-xs font-medium text-slate-500 mb-1">Cliente (nombre o email)</label>
              <div className="relative">
                <Lucide icon="Search" className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={custText}
                  onChange={(e) => setCustText(e.target.value)}
                  placeholder="Buscar por nombre o email..."
                  className="w-full border border-slate-200 rounded-md pl-8 pr-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1"
                />
              </div>
            </div>

            {/* Desde */}
            <div className="col-span-12 sm:col-span-2">
              <label className="block text-xs font-medium text-slate-500 mb-1">Desde</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1"
              />
            </div>

            {/* Hasta */}
            <div className="col-span-12 sm:col-span-2">
              <label className="block text-xs font-medium text-slate-500 mb-1">Hasta</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1"
              />
            </div>

            {/* Buscar */}
            <div className="col-span-12 sm:col-span-2">
              <Button variant="primary" className="w-full" onClick={handleSearch} disabled={loading}>
                {loading ? (
                  <LoadingIcon icon="three-dots" color="#fff" className="w-5 h-5" />
                ) : (
                  <><Lucide icon="Search" className="w-4 h-4 mr-1.5" />Buscar</>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="col-span-12">
        <div className="box box--stacked overflow-hidden">
          {error && (
            <div className="p-4 text-sm text-danger flex items-center gap-2">
              <Lucide icon="AlertCircle" className="w-4 h-4" />{error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-16">
              <LoadingIcon icon="three-dots" color="#03b2cb" className="w-10 h-10" />
            </div>
          ) : visible.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Lucide icon="ClipboardList" className="w-12 h-12 text-slate-300 stroke-[0.8]" />
              <div className="mt-3 text-sm text-slate-400">Sin acciones en el rango seleccionado</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Estado</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Fecha</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Usuario</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Cliente</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Mensaje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {visible.map((action) => {
                    const cfg      = STATUS_CONFIG[action.status] ?? { label: action.status, badgeClass: "bg-slate-100 text-slate-600 border border-slate-200" };
                    const userName = action.userId ? (userMap.get(action.userId) ?? action.userId) : "—";
                    const custName  = action.customer?.name  ?? "—";
                    const custEmail = action.customer?.email ?? "";

                    return (
                      <tr key={action.id} className="hover:bg-slate-50 transition-colors">
                        {/* Estado */}
                        <td className="py-3 px-4">
                          <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${cfg.badgeClass}`}>
                            {cfg.label}
                          </span>
                        </td>

                        {/* Fecha */}
                        <td className="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">
                          {formatDate(action.createdAt)}
                        </td>

                        {/* Usuario */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1.5">
                            <Lucide icon="User" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="text-xs text-slate-700">{userName}</span>
                          </div>
                        </td>

                        {/* Cliente: nombre + email + link */}
                        <td className="py-3 px-4">
                          <Link
                            to={`${RESUME_CLIENT}?id=${action.customerId}`}
                            className="group flex flex-col hover:opacity-80"
                          >
                            <span className="text-xs font-medium text-slate-700 group-hover:text-theme-1 flex items-center gap-1">
                              <Lucide icon="ExternalLink" className="w-3 h-3 shrink-0 text-theme-1" />
                              {custName}
                            </span>
                            {custEmail && (
                              <span className="text-xs text-slate-400 ml-4">{custEmail}</span>
                            )}
                          </Link>
                        </td>

                        {/* Mensaje */}
                        <td className="py-3 px-4 max-w-xs">
                          <p className="text-xs text-slate-600 truncate">{action.message || "—"}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
