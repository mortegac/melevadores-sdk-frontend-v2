import { useState, useCallback, useRef, useEffect } from "react";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import {
  selectGmailInbox,
  getGmailInboxPage,
  triggerSync,
} from "@/stores/GmailInbox/slice";
import type { GmailInbox } from "@/stores/GmailInbox/types";
import { EmailDetailSlideover } from "../StudentProfile/components/EmailDetailSlideover";
import { CustomerActionSlideover } from "./CustomerActionSlideover";

// Defaults using YYYY-MM-DD format (dateStr)
function defaultDateFrom(): string {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().slice(0, 10);
}

function defaultDateTo(): string {
  return new Date().toISOString().slice(0, 10);
}

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
  const cls = colorMap[source] ?? "bg-slate-100 text-slate-600";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${cls}`}>
      {label}
    </span>
  );
}

export default function GmailInboxAdmin() {
  const dispatch = useAppDispatch();
  const { adminStatus, adminEmails, adminNextToken, adminErrorMessage, syncStatus } =
    useAppSelector(selectGmailInbox);

  const [dateFrom, setDateFrom] = useState(defaultDateFrom);
  const [dateTo, setDateTo] = useState(defaultDateTo);
  const [searchText, setSearchText] = useState("");

  // Email detail slideover
  const [selectedEmail, setSelectedEmail] = useState<GmailInbox | null>(null);
  const [emailSlideoverOpen, setEmailSlideoverOpen] = useState(false);

  // CRM action slideover
  const [actionEmail, setActionEmail] = useState<GmailInbox | null>(null);
  const [actionSlideoverOpen, setActionSlideoverOpen] = useState(false);

  // Pagination — tokenPages[i] is the nextToken needed to load page i
  // tokenPages[0] = null (first page, no token needed)
  // tokenPages[1] = token returned after page 0
  // tokenPages[2] = token returned after page 1 ... etc.
  const [tokenPages, setTokenPages] = useState<(string | null)[]>([null]);
  const [pageIdx, setPageIdx] = useState(0);

  // Ref that holds active filters so fetchPage can access them without stale closure
  const activeFilters = useRef({ dateFrom: defaultDateFrom(), dateTo: defaultDateTo(), searchText: "" });
  const pendingRef = useRef(false);

  const isLoading = adminStatus === "loading";
  const isSyncing = syncStatus === "syncing";
  const hasNext   = !!adminNextToken && !isLoading;
  const hasPrev   = pageIdx > 0 && !isLoading;

  // ── Core fetch — uses stored filters unless overridden ─────────────────────
  const fetchPage = useCallback(
    (token: string | null, filters?: { dateFrom: string; dateTo: string; searchText: string }) => {
      if (pendingRef.current || isLoading) return;
      pendingRef.current = true;
      const f = filters ?? activeFilters.current;
      dispatch(
        getGmailInboxPage({
          dateFrom:   f.dateFrom,
          dateTo:     f.dateTo,
          searchText: f.searchText.trim() || undefined,
          nextToken:  token,
        })
      ).finally(() => {
        pendingRef.current = false;
      });
    },
    [dispatch, isLoading]
  );

  // ── Load first page on mount ───────────────────────────────────────────────
  useEffect(() => {
    fetchPage(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Search: reset pagination and fetch first page ─────────────────────────
  const handleSearch = useCallback(() => {
    const filters = { dateFrom, dateTo, searchText };
    activeFilters.current = filters;
    setTokenPages([null]);
    setPageIdx(0);
    fetchPage(null, filters);
  }, [dateFrom, dateTo, searchText, fetchPage]);

  // ── Next page: store current nextToken and fetch ───────────────────────────
  const handleNextPage = useCallback(() => {
    if (!adminNextToken || isLoading) return;
    const nextIdx = pageIdx + 1;
    // Store the token so we can come back to this page later
    setTokenPages((prev) => {
      const updated = [...prev];
      updated[nextIdx] = adminNextToken;
      return updated;
    });
    setPageIdx(nextIdx);
    fetchPage(adminNextToken);
  }, [adminNextToken, isLoading, pageIdx, fetchPage]);

  // ── Prev page: use stored token — re-fetches the previous page ────────────
  const handlePrevPage = useCallback(() => {
    if (pageIdx === 0 || isLoading) return;
    const prevIdx = pageIdx - 1;
    setPageIdx(prevIdx);
    fetchPage(tokenPages[prevIdx] ?? null);
  }, [pageIdx, isLoading, tokenPages, fetchPage]);

  // ── Sync + reload ──────────────────────────────────────────────────────────
  const handleSync = useCallback(() => {
    if (pendingRef.current || isSyncing || isLoading) return;
    pendingRef.current = true;
    dispatch(triggerSync()).finally(() => {
      pendingRef.current = false;
      handleSearch();
    });
  }, [dispatch, isSyncing, isLoading, handleSearch]);

  // ── Slideovers ─────────────────────────────────────────────────────────────
  const handleOpenEmail  = useCallback((email: GmailInbox) => { setSelectedEmail(email); setEmailSlideoverOpen(true); }, []);
  const handleCloseEmail = useCallback(() => setEmailSlideoverOpen(false), []);
  const handleReplySent  = useCallback(() => { setEmailSlideoverOpen(false); handleSearch(); }, [handleSearch]);

  const handleOpenAction  = useCallback((email: GmailInbox) => { setActionEmail(email); setActionSlideoverOpen(true); }, []);
  const handleCloseAction = useCallback(() => setActionSlideoverOpen(false), []);

  return (
    <div className="mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-700">Mensajes - Gmail</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Bandeja de entrada completa de todas las cuentas Gmail
          </p>
        </div>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={isSyncing || isLoading}
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
      <div className="flex flex-col p-5 box mb-5">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 font-medium">Desde</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 font-medium">Hasta</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <label className="text-xs text-slate-500 font-medium">
              Buscar (De / Para / Nombre)
            </label>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Ej: saraskarina@gmail.com"
              className="border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-theme-1 focus:border-theme-1"
            />
          </div>
          <Button
            variant="primary"
            size="sm"
            disabled={isLoading || isSyncing}
            onClick={handleSearch}
          >
            <Lucide icon="Search" className="w-3.5 h-3.5 mr-1.5" />
            Buscar
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="p-5 box">
        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <LoadingIcon color="purple" icon="three-dots" className="w-10 h-10" />
          </div>
        )}

        {adminStatus === "failed" && (
          <p className="text-danger text-sm">{adminErrorMessage}</p>
        )}

        {!isLoading && adminStatus === "idle" && adminEmails.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <Lucide icon="Inbox" className="w-14 h-14 text-slate-200 stroke-[0.5]" />
            <p className="mt-3 text-slate-400">Sin emails en el rango seleccionado.</p>
          </div>
        )}

        {!isLoading && adminStatus === "idle" && adminEmails.length > 0 && (
          <>
            {/* Top pagination bar */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400">
                {adminEmails.length} email{adminEmails.length !== 1 ? "s" : ""} en esta página
              </span>
              <PrevNextPagination
                pageIdx={pageIdx}
                hasNext={hasNext}
                hasPrev={hasPrev}
                onPrev={handlePrevPage}
                onNext={handleNextPage}
              />
            </div>

            <div className="w-full overflow-x-auto">
              <Table className="border-b border-slate-200/60 w-full">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Td className="py-4 border-t bg-slate-50 border-slate-200/60 w-10" />
                    <Table.Td className="py-4 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">Cliente</Table.Td>
                    <Table.Td className="py-4 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500 whitespace-nowrap">Fecha</Table.Td>
                    <Table.Td className="py-4 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">Asunto</Table.Td>
                    <Table.Td className="py-4 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500 whitespace-nowrap">De</Table.Td>
                    <Table.Td className="py-4 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500 whitespace-nowrap">Cuenta</Table.Td>
                    <Table.Td className="py-4 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">Source</Table.Td>
                    <Table.Td className="py-4 font-medium text-left border-t bg-slate-50 border-slate-200/60 text-slate-500">Extracto</Table.Td>
                    <Table.Td className="py-4 border-t bg-slate-50 border-slate-200/60" />
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {adminEmails.map((item, index) => (
                    <Table.Tr key={item.id || index} className="[&_td]:last:border-b-0">
                      <Table.Td className="py-4 border-dashed whitespace-nowrap">
                        <Button
                          variant={item.customerId ? "outline-primary" : "outline-secondary"}
                          size="sm"
                          onClick={() => handleOpenAction(item)}
                          title="Acción CRM"
                        >
                          <Lucide icon="ClipboardList" className="w-3.5 h-3.5" />
                        </Button>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed" style={{ minWidth: 160, maxWidth: 200 }}>
                        {item.customer ? (
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium text-slate-700 truncate">{item.customer.name}</span>
                            <span className="text-xs text-slate-400 truncate">{item.customer.email}</span>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-300">—</span>
                        )}
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed whitespace-nowrap">
                        <span className="text-sm">{item.dateStr}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed" style={{ minWidth: 180, maxWidth: 220 }}>
                        <span className="text-sm font-medium line-clamp-2">{item.subject || "—"}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed whitespace-nowrap">
                        <span className="text-sm text-slate-500">{item.fromName || item.fromEmail || "—"}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed whitespace-nowrap">
                        <span className="text-xs text-slate-400">{item.gmailAccount}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed whitespace-nowrap">
                        <SourceBadge source={item.source} />
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed" style={{ minWidth: 200, maxWidth: 280 }}>
                        <span className="text-xs text-slate-400 line-clamp-2">{item.snippet || "—"}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed text-right whitespace-nowrap">
                        <Button variant="outline-secondary" size="sm" onClick={() => handleOpenEmail(item)}>
                          <Lucide icon="Eye" className="w-3.5 h-3.5 mr-1" />
                          Ver
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>

            {/* Bottom pagination bar */}
            <div className="flex justify-center mt-5">
              <PrevNextPagination
                pageIdx={pageIdx}
                hasNext={hasNext}
                hasPrev={hasPrev}
                onPrev={handlePrevPage}
                onNext={handleNextPage}
              />
            </div>
          </>
        )}
      </div>

      {/* Email detail slideover */}
      <EmailDetailSlideover
        email={selectedEmail}
        open={emailSlideoverOpen}
        onClose={handleCloseEmail}
        onReplySent={handleReplySent}
      />

      {/* CRM action slideover */}
      <CustomerActionSlideover
        email={actionEmail}
        open={actionSlideoverOpen}
        onClose={handleCloseAction}
      />
    </div>
  );
}

/* ── PrevNextPagination ────────────────────────────────────────────────────── */
interface PrevNextPaginationProps {
  pageIdx:  number;
  hasNext:  boolean;
  hasPrev:  boolean;
  onPrev:   () => void;
  onNext:   () => void;
}

function PrevNextPagination({ pageIdx, hasNext, hasPrev, onPrev, onNext }: PrevNextPaginationProps) {
  const btn =
    "flex items-center gap-1.5 px-3 h-8 rounded border text-xs font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={!hasPrev}
        onClick={onPrev}
        className={`${btn} border-slate-200 text-slate-600 hover:bg-slate-50`}
      >
        <Lucide icon="ChevronLeft" className="w-3.5 h-3.5" />
        Anterior
      </button>

      <span className="text-xs text-slate-400 px-1">
        Página {pageIdx + 1}
        {!hasNext && " · última"}
      </span>

      <button
        disabled={!hasNext}
        onClick={onNext}
        className={`${btn} border-slate-200 text-slate-600 hover:bg-slate-50`}
      >
        Siguiente
        <Lucide icon="ChevronRight" className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
