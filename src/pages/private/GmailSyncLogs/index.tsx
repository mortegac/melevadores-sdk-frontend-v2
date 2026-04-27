import { useState, useEffect, useCallback, useRef } from "react";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { selectGmailInbox, triggerSync } from "@/stores/GmailInbox/slice";
import { fetchAllGmailSyncLogs } from "@/stores/GmailSyncLogs/services";
import type { GmailSyncLog, AccountSyncDetail } from "@/stores/GmailSyncLogs/types";

// ── helpers ────────────────────────────────────────────────────────────────────
const MONTHS_ES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

function formatDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2,"0")} ${MONTHS_ES[d.getMonth()]} ${d.getFullYear()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;
}

function defaultDateFrom(): string {
  const d = new Date(); d.setDate(d.getDate() - 90);
  return d.toISOString().slice(0, 10);
}

const STATUS_CONFIG: Record<string, { label: string; badgeClass: string; icon: "CheckCircle" | "XCircle" }> = {
  "ejecutada correctamente": { label: "Ejecutada correctamente", badgeClass: "bg-green-100 text-green-700 border border-green-200", icon: "CheckCircle" },
  "con errores":             { label: "Con errores",             badgeClass: "bg-red-100 text-red-700 border border-red-200",     icon: "XCircle"     },
};

const SOURCE_LABELS: Record<string, string> = {
  "accesibilidad-residencial":          "Accesibilidad residencial",
  "instalacion-ascensores-montacargas": "Instalación ascensores",
  "WEB-FORM":                           "Web Form",
};

// ── Detail Modal ───────────────────────────────────────────────────────────────
function DetailModal({ log, onClose }: { log: GmailSyncLog; onClose: () => void }) {
  const cfg = STATUS_CONFIG[log.status] ?? { label: log.status, badgeClass: "bg-slate-100 text-slate-600 border border-slate-200", icon: "AlertCircle" as const };

  let detail: Record<string, any> | null = null;
  try {
    if (log.resultDetail) detail = JSON.parse(log.resultDetail);
  } catch { detail = null; }

  const errorDetail = detail?.__error__ ?? null;
  const accountResults = detail
    ? Object.fromEntries(Object.entries(detail).filter(([k]) => k !== "__error__" && k !== "partial").concat(
        detail.partial ? Object.entries(detail.partial) : []
      ))
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <Lucide icon="FileText" className="w-5 h-5 text-theme-1" />
            <div>
              <h3 className="text-sm font-semibold text-slate-700">Detalle de sincronización</h3>
              <p className="text-xs text-slate-400 mt-0.5">{formatDate(log.executedAt)}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
            <Lucide icon="X" className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-5 space-y-5">
          {/* Estado + cuenta */}
          <div className="flex flex-wrap gap-3">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 ${cfg.badgeClass}`}>
              <Lucide icon={cfg.icon} className="w-3.5 h-3.5" />
              {cfg.label}
            </span>
            {log.gmailAccount && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 bg-slate-100 text-slate-600">
                <Lucide icon="Mail" className="w-3.5 h-3.5" />
                {log.gmailAccount}
              </span>
            )}
          </div>

          {/* Error message */}
          {log.errorMessage && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-100">
              <Lucide icon="AlertCircle" className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-red-700 font-mono break-all">{log.errorMessage}</p>
            </div>
          )}

          {/* Resumen general */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Resumen general</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Leídos",   value: log.emailsRead,      icon: "Mail",       color: "text-slate-700" },
                { label: "Nuevos",   value: log.newEmailsStored,  icon: "PlusCircle", color: "text-theme-1"   },
              ].map(({ label, value, icon, color }) => (
                <div key={label} className="bg-slate-50 rounded-lg p-3 flex flex-col gap-1">
                  <Lucide icon={icon as any} className={`w-4 h-4 ${color}`} />
                  <span className={`text-lg font-bold ${color}`}>{value.toLocaleString("es-CL")}</span>
                  <span className="text-xs text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Error técnico completo */}
          {errorDetail && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Detalle del error</p>

              {/* tipo + mensaje */}
              <div className="flex flex-wrap gap-2 mb-3">
                {errorDetail.errorType && (
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-medium rounded px-2 py-0.5 bg-red-50 text-red-700 border border-red-100">
                    {errorDetail.errorType}
                  </span>
                )}
                {errorDetail.status && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium rounded px-2 py-0.5 bg-orange-50 text-orange-700 border border-orange-100">
                    HTTP {errorDetail.status}
                  </span>
                )}
              </div>

              {/* response.data (el mensaje de Google) */}
              {errorDetail.response?.data && (
                <div className="mb-3 p-3 rounded-lg bg-red-50 border border-red-100">
                  <p className="text-xs font-semibold text-red-600 mb-1">Respuesta de Google OAuth2</p>
                  <pre className="text-xs text-red-700 font-mono whitespace-pre-wrap break-all">
                    {JSON.stringify(errorDetail.response.data, null, 2)}
                  </pre>
                </div>
              )}

              {/* request info */}
              {errorDetail.config?.url && (
                <div className="mb-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 mb-1">Request</p>
                  <p className="text-xs font-mono text-slate-600">
                    <span className="font-semibold">{errorDetail.config.method?.toUpperCase() ?? "POST"}</span>{" "}
                    {errorDetail.config.url}
                  </p>
                </div>
              )}

              {/* stack trace */}
              {errorDetail.stack && errorDetail.stack.length > 0 && (
                <details className="group">
                  <summary className="text-xs text-slate-400 cursor-pointer hover:text-slate-600 select-none mb-1">
                    Stack trace ({errorDetail.stack.length} líneas)
                  </summary>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                    {(errorDetail.stack as string[]).map((line: string, i: number) => (
                      <p key={i} className="text-xs font-mono text-slate-300 leading-5">{line}</p>
                    ))}
                  </div>
                </details>
              )}
            </div>
          )}

          {/* Detalle por cuenta */}
          {accountResults && Object.entries(accountResults).map(([account, d]) => {
            if (!d || typeof d !== "object") return null;
            const accountDetail = d as AccountSyncDetail;
            return (
              <div key={account}>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Cuenta: <span className="normal-case text-slate-700">{account}</span>
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {[
                    { label: "Leídos",    value: accountDetail.totalFetched,     color: "text-slate-700" },
                    { label: "Nuevos",    value: accountDetail.newSaved,          color: "text-emerald-600" },
                    { label: "Ya existían", value: accountDetail.alreadyExisted, color: "text-slate-400" },
                    { label: "Errores",   value: accountDetail.errors,            color: accountDetail.errors > 0 ? "text-red-600" : "text-slate-400" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-slate-50 rounded-lg p-2.5 text-center">
                      <span className={`text-base font-bold ${color}`}>{(value ?? 0).toLocaleString("es-CL")}</span>
                      <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Clientes */}
                {(accountDetail.customersCreated > 0 || accountDetail.customersReused > 0) && (
                  <div className="flex gap-2 mb-3">
                    <div className="flex items-center gap-1.5 bg-blue-50 rounded-lg px-3 py-2 text-xs">
                      <Lucide icon="UserPlus" className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-blue-700 font-medium">{accountDetail.customersCreated} clientes nuevos</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg px-3 py-2 text-xs">
                      <Lucide icon="User" className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-slate-600 font-medium">{accountDetail.customersReused} clientes existentes</span>
                    </div>
                  </div>
                )}

                {/* Por tipo */}
                {accountDetail.byType && Object.keys(accountDetail.byType).length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-slate-400 mb-1.5">Por tipo</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(accountDetail.byType).map(([type, count]) => (
                        <span key={type} className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {type}: {count}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Por fuente */}
                {accountDetail.bySource && Object.keys(accountDetail.bySource).length > 0 && (
                  <div>
                    <p className="text-xs text-slate-400 mb-1.5">Por fuente</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(accountDetail.bySource).map(([src, count]) => (
                        <span key={src} className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100">
                          {SOURCE_LABELS[src] ?? src}: {count}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Sin detalle disponible */}
          {!detail && !errorDetail && (
            <div className="flex items-center gap-2 text-xs text-slate-400 py-2">
              <Lucide icon="Info" className="w-4 h-4" />
              Sin detalle disponible para esta ejecución.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 flex justify-end">
          <Button variant="outline-secondary" size="sm" onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function GmailSyncLogsPage() {
  const dispatch      = useAppDispatch();
  const { syncStatus } = useAppSelector(selectGmailInbox);
  const isSyncing     = syncStatus === "syncing";
  const pendingRef    = useRef(false);

  const [dateFrom,   setDateFrom]   = useState(defaultDateFrom);
  const [dateTo,     setDateTo]     = useState(() => new Date().toISOString().slice(0, 10));
  const [searchText, setSearchText] = useState("");

  const [logs,       setLogs]       = useState<GmailSyncLog[]>([]);
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState("");
  const [detailLog,  setDetailLog]  = useState<GmailSyncLog | null>(null);

  const handleSearch = useCallback(() => {
    setLoading(true);
    setError("");
    fetchAllGmailSyncLogs()
      .then((items) => setLogs(items))
      .catch(() => setError("Error al cargar los logs de sincronización."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { handleSearch(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSync = useCallback(() => {
    if (pendingRef.current || isSyncing || loading) return;
    pendingRef.current = true;
    dispatch(triggerSync()).finally(() => {
      pendingRef.current = false;
      handleSearch();
    });
  }, [dispatch, isSyncing, loading, handleSearch]);

  // double-click counter per row
  const clickTimerRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const handleRowClick = useCallback((log: GmailSyncLog) => {
    if (clickTimerRef.current[log.id]) {
      clearTimeout(clickTimerRef.current[log.id]);
      delete clickTimerRef.current[log.id];
      setDetailLog(log);
    } else {
      clickTimerRef.current[log.id] = setTimeout(() => {
        delete clickTimerRef.current[log.id];
      }, 300);
    }
  }, []);

  const visible = logs.filter((log) => {
    const date = log.executedAt.slice(0, 10);
    if (dateFrom && date < dateFrom) return false;
    if (dateTo   && date > dateTo)   return false;
    if (searchText) {
      const q = searchText.toLowerCase();
      if (!log.status.toLowerCase().includes(q) && !(log.gmailAccount ?? "").toLowerCase().includes(q) && !(log.errorMessage ?? "").toLowerCase().includes(q)) return false;
    }
    return true;
  });

  return (
    <>
      {detailLog && <DetailModal log={detailLog} onClose={() => setDetailLog(null)} />}

      <div className="mt-5 grid grid-cols-12 gap-6">
        {/* Header */}
        <div className="col-span-12 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Lucide icon="FileText" className="w-6 h-6 text-theme-1" />
            <h2 className="text-xl font-medium">Logs Gmail</h2>
            {!loading && (
              <span className="text-xs font-medium bg-slate-100 text-slate-600 rounded-full px-2.5 py-0.5">
                {visible.length}
              </span>
            )}
          </div>
          <Button variant="outline-primary" size="sm" disabled={isSyncing || loading} onClick={handleSync} className="bg-white">
            <Lucide icon="RefreshCw" className={`w-3.5 h-3.5 mr-1.5 ${isSyncing ? "animate-spin" : ""}`} />
            {isSyncing ? "Sincronizando..." : "Sincronizar Gmail"}
          </Button>
        </div>

        {/* Filters */}
        <div className="col-span-12">
          <div className="box box--stacked p-4">
            <div className="grid grid-cols-12 gap-3 items-end">
              <div className="col-span-12 sm:col-span-3">
                <label className="block text-xs font-medium text-slate-500 mb-1">Buscar</label>
                <div className="relative">
                  <Lucide icon="Search" className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                  <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Estado, cuenta, error..."
                    className="w-full border border-slate-200 rounded-md pl-8 pr-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1" />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Desde</label>
                <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}
                  className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1" />
              </div>
              <div className="col-span-12 sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Hasta</label>
                <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)}
                  className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1" />
              </div>
              <div className="col-span-12 sm:col-span-2">
                <Button variant="primary" className="w-full" onClick={handleSearch} disabled={loading || isSyncing}>
                  {loading ? <LoadingIcon icon="three-dots" color="#fff" className="w-5 h-5" /> : <><Lucide icon="Search" className="w-4 h-4 mr-1.5" />Actualizar</>}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="col-span-12">
          <div className="box box--stacked overflow-hidden">
            {!loading && !isSyncing && visible.length > 0 && (
              <p className="text-xs text-slate-400 px-4 pt-3">Doble click en una fila para ver el detalle completo.</p>
            )}

            {error && (
              <div className="p-4 text-sm text-danger flex items-center gap-2">
                <Lucide icon="AlertCircle" className="w-4 h-4" />{error}
              </div>
            )}

            {loading || isSyncing ? (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <LoadingIcon icon="three-dots" color="#03b2cb" className="w-10 h-10" />
                {isSyncing && <p className="text-xs text-slate-400">Sincronizando Gmail, esto puede tardar unos segundos...</p>}
              </div>
            ) : visible.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Lucide icon="FileText" className="w-12 h-12 text-slate-300 stroke-[0.8]" />
                <div className="mt-3 text-sm text-slate-400">Sin logs en el rango seleccionado</div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Fecha ejecución</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Estado</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Emails leídos</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Emails nuevos</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Cuenta Gmail</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Error</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {visible.map((log) => {
                      const cfg = STATUS_CONFIG[log.status] ?? { label: log.status, badgeClass: "bg-slate-100 text-slate-600 border border-slate-200", icon: "AlertCircle" as const };
                      return (
                        <tr
                          key={log.id}
                          onClick={() => handleRowClick(log)}
                          className="hover:bg-slate-50 transition-colors cursor-pointer select-none"
                          title="Doble click para ver detalle"
                        >
                          <td className="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">{formatDate(log.executedAt)}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-0.5 ${cfg.badgeClass}`}>
                              <Lucide icon={cfg.icon} className="w-3.5 h-3.5" />{cfg.label}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1.5">
                              <Lucide icon="Mail" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span className="text-xs font-medium text-slate-700">{log.emailsRead.toLocaleString("es-CL")}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1.5">
                              <Lucide icon="PlusCircle" className="w-3.5 h-3.5 text-theme-1 shrink-0" />
                              <span className="text-xs font-medium text-theme-1">{log.newEmailsStored.toLocaleString("es-CL")}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-xs text-slate-500">{log.gmailAccount ?? "—"}</td>
                          <td className="py-3 px-4 max-w-sm">
                            {log.errorMessage
                              ? <p className="text-xs text-red-600 truncate" title={log.errorMessage}>{log.errorMessage}</p>
                              : <span className="text-xs text-slate-300">—</span>}
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
    </>
  );
}
