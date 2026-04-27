import { useState, useEffect, useCallback, useRef } from "react";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { selectGmailInbox, triggerSync } from "@/stores/GmailInbox/slice";
import { fetchAllGmailSyncLogs } from "@/stores/GmailSyncLogs/services";
import type { GmailSyncLog } from "@/stores/GmailSyncLogs/types";

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
  d.setDate(d.getDate() - 90);
  return d.toISOString().slice(0, 10);
}
function defaultDateTo(): string {
  return new Date().toISOString().slice(0, 10);
}

const STATUS_CONFIG: Record<string, { label: string; badgeClass: string; icon: "CheckCircle" | "XCircle" }> = {
  "ejecutada correctamente": {
    label:      "Ejecutada correctamente",
    badgeClass: "bg-green-100 text-green-700 border border-green-200",
    icon:       "CheckCircle",
  },
  "con errores": {
    label:      "Con errores",
    badgeClass: "bg-red-100 text-red-700 border border-red-200",
    icon:       "XCircle",
  },
};

export default function GmailSyncLogsPage() {
  const dispatch   = useAppDispatch();
  const { syncStatus } = useAppSelector(selectGmailInbox);
  const isSyncing  = syncStatus === "syncing";
  const pendingRef = useRef(false);

  const [dateFrom,    setDateFrom]    = useState(defaultDateFrom);
  const [dateTo,      setDateTo]      = useState(defaultDateTo);
  const [searchText,  setSearchText]  = useState("");

  const [logs,    setLogs]    = useState<GmailSyncLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

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

  const visible = logs.filter((log) => {
    const date = log.executedAt.slice(0, 10);
    if (dateFrom && date < dateFrom) return false;
    if (dateTo   && date > dateTo)   return false;
    if (searchText) {
      const q = searchText.toLowerCase();
      if (
        !log.status.toLowerCase().includes(q) &&
        !(log.gmailAccount ?? "").toLowerCase().includes(q) &&
        !(log.errorMessage ?? "").toLowerCase().includes(q)
      ) return false;
    }
    return true;
  });

  return (
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

        <Button
          variant="outline-secondary"
          size="sm"
          disabled={isSyncing || loading}
          onClick={handleSync}
        >
          <Lucide
            icon="RefreshCw"
            className={`w-3.5 h-3.5 mr-1.5 ${isSyncing ? "animate-spin" : ""}`}
          />
          {isSyncing ? "Sincronizando..." : "Sincronizar Gmail"}
        </Button>
      </div>

      {/* Filters */}
      <div className="col-span-12">
        <div className="box box--stacked p-4">
          <div className="grid grid-cols-12 gap-3 items-end">
            {/* Búsqueda texto */}
            <div className="col-span-12 sm:col-span-3">
              <label className="block text-xs font-medium text-slate-500 mb-1">Buscar</label>
              <div className="relative">
                <Lucide icon="Search" className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Estado, cuenta, error..."
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

            {/* Actualizar */}
            <div className="col-span-12 sm:col-span-2">
              <Button variant="primary" className="w-full" onClick={handleSearch} disabled={loading || isSyncing}>
                {loading ? (
                  <LoadingIcon icon="three-dots" color="#fff" className="w-5 h-5" />
                ) : (
                  <><Lucide icon="Search" className="w-4 h-4 mr-1.5" />Actualizar</>
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

          {loading || isSyncing ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <LoadingIcon icon="three-dots" color="#03b2cb" className="w-10 h-10" />
              {isSyncing && (
                <p className="text-xs text-slate-400">Sincronizando Gmail, esto puede tardar unos segundos...</p>
              )}
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
                    const cfg = STATUS_CONFIG[log.status] ?? {
                      label: log.status,
                      badgeClass: "bg-slate-100 text-slate-600 border border-slate-200",
                      icon: "AlertCircle" as const,
                    };

                    return (
                      <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                        {/* Fecha */}
                        <td className="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">
                          {formatDate(log.executedAt)}
                        </td>

                        {/* Estado */}
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-0.5 ${cfg.badgeClass}`}>
                            <Lucide icon={cfg.icon} className="w-3.5 h-3.5" />
                            {cfg.label}
                          </span>
                        </td>

                        {/* Emails leídos */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1.5">
                            <Lucide icon="Mail" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="text-xs font-medium text-slate-700">
                              {log.emailsRead.toLocaleString("es-CL")}
                            </span>
                          </div>
                        </td>

                        {/* Emails nuevos */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1.5">
                            <Lucide icon="PlusCircle" className="w-3.5 h-3.5 text-theme-1 shrink-0" />
                            <span className="text-xs font-medium text-theme-1">
                              {log.newEmailsStored.toLocaleString("es-CL")}
                            </span>
                          </div>
                        </td>

                        {/* Cuenta Gmail */}
                        <td className="py-3 px-4">
                          <span className="text-xs text-slate-500">{log.gmailAccount ?? "—"}</span>
                        </td>

                        {/* Error */}
                        <td className="py-3 px-4 max-w-sm">
                          {log.errorMessage ? (
                            <p className="text-xs text-red-600 truncate" title={log.errorMessage}>
                              {log.errorMessage}
                            </p>
                          ) : (
                            <span className="text-xs text-slate-300">—</span>
                          )}
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
