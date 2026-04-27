import { useEffect, useState, useCallback, useRef } from "react";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { selectGmailInbox, getGmailInboxPage, triggerSync, updateGmailTypeThunk } from "@/stores/GmailInbox/slice";
import type { AdminFilterOptions, GmailInbox, GmailInboxType } from "@/stores/GmailInbox/types";
import { CustomerActionSlideover } from "../GmailInboxAdmin/CustomerActionSlideover";

const SOURCE_LABELS: Record<string, string> = {
  "accesibilidad-residencial":         "Accesibilidad",
  "instalacion-ascensores-montacargas": "Instalación",
  "WEB-FORM":                          "Web Form",
};

function SourceBadge({ source }: { source?: string }) {
  if (!source) return <span className="text-slate-300">—</span>;
  const label = SOURCE_LABELS[source] ?? source;
  const colorMap: Record<string, string> = {
    "accesibilidad-residencial":          "bg-blue-100 text-blue-700",
    "instalacion-ascensores-montacargas": "bg-emerald-100 text-emerald-700",
    "WEB-FORM":                           "bg-slate-100 text-slate-600",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${colorMap[source] ?? "bg-slate-100 text-slate-600"}`}>
      {label}
    </span>
  );
}

type TabType = GmailInboxType | "ALL";

const TABS: { key: TabType; label: string }[] = [
  { key: "ALL",      label: "Todos"           },
  { key: "WEB-FORM", label: "Formularios Web" },
  { key: "SPAM",     label: "SPAM"            },
];

const today        = () => new Date().toISOString().slice(0, 10);
const thirtyDaysAgo = () => { const d = new Date(); d.setDate(d.getDate() - 30); return d.toISOString().slice(0, 10); };

export default function GmailInboxPage() {
  const dispatch = useAppDispatch();
  const { adminStatus, syncStatus, adminEmails, adminNextToken, adminErrorMessage } =
    useAppSelector(selectGmailInbox);

  const [activeTab,   setActiveTab]   = useState<TabType>("ALL");
  const [dateFrom,    setDateFrom]    = useState(thirtyDaysAgo());
  const [dateTo,      setDateTo]      = useState(today());
  const [search,      setSearch]      = useState("");
  const [expandedId,  setExpandedId]  = useState<string | null>(null);
  const [actionEmail, setActionEmail] = useState<GmailInbox | null>(null);
  const [actionOpen,  setActionOpen]  = useState(false);

  // tokenPages[i] = nextToken needed to load page i
  // tokenPages[0] = null (first page, no token)
  const [tokenPages,   setTokenPages]   = useState<(string | null)[]>([null]);
  const [currentPage,  setCurrentPage]  = useState(0);

  const activeFilters = useRef({ dateFrom: thirtyDaysAgo(), dateTo: today(), search: "", tab: "ALL" as TabType });
  const pendingRef    = useRef(false);

  const isLoading = adminStatus === "loading";
  const isSyncing = syncStatus === "syncing";
  const hasNext   = !!adminNextToken && !isLoading;
  const hasPrev   = currentPage > 0 && !isLoading;

  // ── Core fetch ─────────────────────────────────────────────────────────────
  const fetchPage = useCallback(
    (token: string | null, overrides?: Partial<typeof activeFilters.current>) => {
      if (pendingRef.current || isLoading) return;
      pendingRef.current = true;
      const f = { ...activeFilters.current, ...overrides };
      const params: AdminFilterOptions = {
        dateFrom:   f.dateFrom || undefined,
        dateTo:     f.dateTo   || undefined,
        searchText: f.search.trim() || undefined,
        type:       f.tab,
        nextToken:  token,
      };
      dispatch(getGmailInboxPage(params)).finally(() => { pendingRef.current = false; });
    },
    [dispatch, isLoading]
  );

  // ── Load first page on mount ───────────────────────────────────────────────
  useEffect(() => { fetchPage(null); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Tab change: reset pagination ───────────────────────────────────────────
  const handleTabChange = (tab: TabType) => {
    activeFilters.current = { ...activeFilters.current, tab };
    setActiveTab(tab);
    setExpandedId(null);
    setTokenPages([null]);
    setCurrentPage(0);
    fetchPage(null, { tab });
  };

  // ── Search: reset pagination ───────────────────────────────────────────────
  const handleFilter = () => {
    const filters = { dateFrom, dateTo, search, tab: activeTab };
    activeFilters.current = filters;
    setTokenPages([null]);
    setCurrentPage(0);
    fetchPage(null, filters);
  };

  // ── Next page ──────────────────────────────────────────────────────────────
  const handleNext = useCallback(() => {
    if (!adminNextToken || isLoading) return;
    const nextIdx = currentPage + 1;
    setTokenPages((prev) => { const u = [...prev]; u[nextIdx] = adminNextToken; return u; });
    setCurrentPage(nextIdx);
    setExpandedId(null);
    fetchPage(adminNextToken);
  }, [adminNextToken, isLoading, currentPage, fetchPage]);

  // ── Prev page: uses stored token ───────────────────────────────────────────
  const handlePrev = useCallback(() => {
    if (currentPage === 0 || isLoading) return;
    const prevIdx = currentPage - 1;
    setCurrentPage(prevIdx);
    setExpandedId(null);
    fetchPage(tokenPages[prevIdx] ?? null);
  }, [currentPage, isLoading, tokenPages, fetchPage]);

  // ── Sync ───────────────────────────────────────────────────────────────────
  const handleSync = useCallback(() => {
    if (pendingRef.current || isSyncing || isLoading) return;
    pendingRef.current = true;
    dispatch(triggerSync()).finally(() => {
      pendingRef.current = false;
      setTokenPages([null]);
      setCurrentPage(0);
      fetchPage(null);
    });
  }, [dispatch, isSyncing, isLoading, fetchPage]);

  const toggleExpand    = (id: string) => setExpandedId((p) => (p === id ? null : id));
  const handleOpenAction  = useCallback((email: GmailInbox) => { setActionEmail(email); setActionOpen(true); }, []);
  const handleCloseAction = useCallback(() => setActionOpen(false), []);

  const formatDate = (iso: string) => {
    if (!iso) return "-";
    return new Date(iso).toLocaleString("es-CL", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Emails - Gmail</h2>
        <Button variant="primary" size="sm" onClick={handleSync} disabled={isSyncing || isLoading} className="flex items-center gap-2">
          <Lucide icon="RefreshCw" className={`w-4 h-4 ${isSyncing ? "animate-spin" : ""}`} />
          {isSyncing ? "Sincronizando..." : "Sincronizar"}
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 border-b border-slate-200 dark:border-darkmode-400">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === tab.key
                ? "bg-primary text-white border-b-2 border-primary"
                : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filtros */}
      <div className="box p-4 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
          <div>
            <label className="block text-xs text-slate-500 mb-1">Desde</label>
            <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="form-control text-sm w-full" />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Hasta</label>
            <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="form-control text-sm w-full" />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Email / Asunto</label>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar..." className="form-control text-sm w-full" onKeyDown={(e) => e.key === "Enter" && handleFilter()} />
          </div>
          <Button variant="primary" onClick={handleFilter} disabled={isLoading} className="flex items-center gap-2 h-9">
            <Lucide icon="Search" className="w-4 h-4" />
            Buscar
          </Button>
        </div>
      </div>

      {/* Estado */}
      {isLoading && <div className="flex justify-center py-10"><LoadingIcon icon="three-dots" className="w-10 h-10" /></div>}
      {adminStatus === "failed" && <div className="box p-4 text-danger text-sm">{adminErrorMessage}</div>}

      {/* Tabla */}
      {adminStatus !== "loading" && (
        <>
          <div className="box overflow-x-auto">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th className="w-10"></Table.Th>
                  <Table.Th className="w-6"></Table.Th>
                  <Table.Th>Cliente</Table.Th>
                  <Table.Th className="whitespace-nowrap">Fecha</Table.Th>
                  <Table.Th>Asunto</Table.Th>
                  <Table.Th>De</Table.Th>
                  <Table.Th className="text-center w-28">Tipo</Table.Th>
                  <Table.Th>Source</Table.Th>
                  <Table.Th className="text-center w-16">Adjunto</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {adminEmails.length === 0 ? (
                  <Table.Tr>
                    <Table.Td colSpan={9} className="text-center text-slate-400 py-6">Sin resultados</Table.Td>
                  </Table.Tr>
                ) : (
                  adminEmails.map((email) => (
                    <>
                      <Table.Tr
                        key={email.id}
                        className={`hover:bg-slate-50 dark:hover:bg-darkmode-400 ${!email.isRead ? "font-semibold" : ""}`}
                      >
                        <Table.Td onClick={(e) => e.stopPropagation()}>
                          <Button
                            variant={email.customerId ? "outline-primary" : "outline-secondary"}
                            size="sm"
                            onClick={() => handleOpenAction(email)}
                            title="Acción CRM"
                          >
                            <Lucide icon="ClipboardList" className="w-3.5 h-3.5" />
                          </Button>
                        </Table.Td>
                        <Table.Td className="cursor-pointer" onClick={() => toggleExpand(email.id)}>
                          <Lucide icon={expandedId === email.id ? "ChevronDown" : "ChevronRight"} className="w-4 h-4 text-slate-400" />
                        </Table.Td>
                        <Table.Td className="text-xs" style={{ minWidth: 160, maxWidth: 200 }}>
                          {email.customer ? (
                            <div className="flex flex-col gap-0.5">
                              <span className="font-medium text-slate-700 truncate">{email.customer.name}</span>
                              <span className="text-slate-400 truncate">{email.customer.email}</span>
                            </div>
                          ) : (
                            <span className="text-slate-300">—</span>
                          )}
                        </Table.Td>
                        <Table.Td className="text-xs whitespace-nowrap cursor-pointer" onClick={() => toggleExpand(email.id)}>
                          {email.dateStr || formatDate(email.dateSent)}
                        </Table.Td>
                        <Table.Td className="text-sm max-w-xs truncate cursor-pointer" onClick={() => toggleExpand(email.id)}>
                          {email.subject || "(sin asunto)"}
                        </Table.Td>
                        <Table.Td className="text-xs cursor-pointer" onClick={() => toggleExpand(email.id)}>
                          <div>{email.fromName || "-"}</div>
                          <div className="text-slate-400">{email.fromEmail}</div>
                        </Table.Td>
                        <Table.Td className="text-center">
                          <select
                            value={email.type ?? ""}
                            onChange={(e) => { e.stopPropagation(); dispatch(updateGmailTypeThunk({ id: email.id, type: e.target.value })); }}
                            onClick={(e) => e.stopPropagation()}
                            className={`text-xs rounded-full px-2 py-0.5 font-medium border-0 cursor-pointer focus:ring-1 focus:ring-primary ${
                              email.type === "WEB-FORM" ? "bg-success/10 text-success" :
                              email.type === "SPAM"     ? "bg-danger/10 text-danger" :
                              "bg-slate-100 text-slate-400"
                            }`}
                          >
                            <option value="WEB-FORM">WEB-FORM</option>
                            <option value="SPAM">SPAM</option>
                          </select>
                        </Table.Td>
                        <Table.Td><SourceBadge source={email.source} /></Table.Td>
                        <Table.Td className="text-center">
                          {email.hasAttachments
                            ? <Lucide icon="Paperclip" className="w-4 h-4 text-primary mx-auto" />
                            : <span className="text-slate-300">—</span>}
                        </Table.Td>
                      </Table.Tr>

                      {expandedId === email.id && (
                        <Table.Tr key={`${email.id}-body`}>
                          <Table.Td colSpan={9} className="bg-slate-50 dark:bg-darkmode-500 p-4">
                            <div className="text-xs text-slate-500 mb-2">
                              <span className="font-medium">Cuenta Gmail:</span> {email.gmailAccount}
                            </div>
                            {email.bodyHtml ? (
                              <div className="text-sm prose max-w-none overflow-auto max-h-96 bg-white dark:bg-darkmode-600 rounded p-3" dangerouslySetInnerHTML={{ __html: email.bodyHtml }} />
                            ) : (
                              <pre className="text-sm whitespace-pre-wrap bg-white dark:bg-darkmode-600 rounded p-3 max-h-96 overflow-auto">
                                {email.bodyText || email.snippet || "(sin contenido)"}
                              </pre>
                            )}
                          </Table.Td>
                        </Table.Tr>
                      )}
                    </>
                  ))
                )}
              </Table.Tbody>
            </Table>
          </div>

          {/* Paginación — solo Anterior / Siguiente */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-slate-400">
              Página {currentPage + 1}{!hasNext ? " · última" : ""} · {adminEmails.length} registros
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className="flex items-center gap-1.5 px-3 h-8 rounded border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Lucide icon="ChevronLeft" className="w-3.5 h-3.5" />
                Anterior
              </button>

              <button
                onClick={handleNext}
                disabled={!hasNext}
                className="flex items-center gap-1.5 px-3 h-8 rounded border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente
                <Lucide icon="ChevronRight" className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </>
      )}

      <CustomerActionSlideover email={actionEmail} open={actionOpen} onClose={handleCloseAction} />
    </div>
  );
}
