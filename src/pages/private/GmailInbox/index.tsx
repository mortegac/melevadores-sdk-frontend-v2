import { useEffect, useState, useCallback } from "react";
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
  const cls = colorMap[source] ?? "bg-slate-100 text-slate-600";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${cls}`}>
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

const today = () => new Date().toISOString().slice(0, 10);
const thirtyDaysAgo = () => {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().slice(0, 10);
};

export default function GmailInboxPage() {
  const dispatch = useAppDispatch();
  const { adminStatus, syncStatus, adminEmails, adminNextToken, adminErrorMessage } =
    useAppSelector(selectGmailInbox);

  const [activeTab, setActiveTab]   = useState<TabType>("ALL");
  const [dateFrom, setDateFrom]     = useState(thirtyDaysAgo());
  const [dateTo, setDateTo]         = useState(today());
  const [search, setSearch]         = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [actionEmail, setActionEmail]   = useState<GmailInbox | null>(null);
  const [actionOpen, setActionOpen]     = useState(false);

  // Historial de tokens: índice 0 = página 1 (token null), índice 1 = página 2, etc.
  const [tokenHistory, setTokenHistory] = useState<(string | null)[]>([null]);
  const [currentPage, setCurrentPage]   = useState(0); // base-0

  const loadPage = useCallback(
    (token: string | null, tab: TabType = activeTab) => {
      const params: AdminFilterOptions = {
        dateFrom:   dateFrom ? `${dateFrom}T00:00:00.000Z` : undefined,
        dateTo:     dateTo   ? `${dateTo}T23:59:59.999Z`   : undefined,
        searchText: search   || undefined,
        type:       tab,
        nextToken:  token,
      };
      dispatch(getGmailInboxPage(params));
    },
    [dispatch, dateFrom, dateTo, search, activeTab]
  );

  // Carga inicial
  useEffect(() => {
    setTokenHistory([null]);
    setCurrentPage(0);
    loadPage(null, "ALL");
  }, []);

  // Reset paginación cuando cambia el tab
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setExpandedId(null);
    setTokenHistory([null]);
    setCurrentPage(0);
    loadPage(null, tab);
  };

  // Reset paginación y buscar
  const handleFilter = () => {
    setTokenHistory([null]);
    setCurrentPage(0);
    loadPage(null, activeTab);
  };

  const handleSync = async () => {
    await dispatch(triggerSync());
    setTokenHistory([null]);
    setCurrentPage(0);
    loadPage(null, activeTab);
  };

  // Ir a página siguiente
  const handleNext = () => {
    if (!adminNextToken) return;
    const newPage = currentPage + 1;
    const newHistory = [...tokenHistory.slice(0, newPage), adminNextToken];
    setTokenHistory(newHistory);
    setCurrentPage(newPage);
    setExpandedId(null);
    loadPage(adminNextToken);
  };

  // Ir a página anterior
  const handlePrev = () => {
    if (currentPage === 0) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    setExpandedId(null);
    loadPage(tokenHistory[newPage]);
  };

  // Ir a página específica (solo páginas ya visitadas)
  const handleGoToPage = (pageIdx: number) => {
    if (pageIdx === currentPage) return;
    setCurrentPage(pageIdx);
    setExpandedId(null);
    loadPage(tokenHistory[pageIdx]);
  };

  const toggleExpand = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  const handleOpenAction = useCallback((email: GmailInbox) => {
    setActionEmail(email);
    setActionOpen(true);
  }, []);

  const handleCloseAction = useCallback(() => setActionOpen(false), []);

  const formatDate = (iso: string) => {
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toLocaleString("es-CL", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  const totalKnownPages = adminNextToken
    ? tokenHistory.length + 1   // hay al menos una página más
    : tokenHistory.length;       // última página conocida

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Emails - Gmail</h2>
        <Button
          variant="primary"
          size="sm"
          onClick={handleSync}
          disabled={syncStatus === "syncing"}
          className="flex items-center gap-2"
        >
          {syncStatus === "syncing" ? (
            <LoadingIcon icon="oval" color="white" className="w-4 h-4" />
          ) : (
            <Lucide icon="RefreshCw" className="w-4 h-4" />
          )}
          Sincronizar
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
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="form-control text-sm w-full"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Hasta</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="form-control text-sm w-full"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Email / Asunto</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="form-control text-sm w-full"
              onKeyDown={(e) => e.key === "Enter" && handleFilter()}
            />
          </div>
          <Button variant="primary" onClick={handleFilter} className="flex items-center gap-2 h-9">
            <Lucide icon="Search" className="w-4 h-4" />
            Buscar
          </Button>
        </div>
      </div>

      {/* Estado de carga / error */}
      {adminStatus === "loading" && (
        <div className="flex justify-center py-10">
          <LoadingIcon icon="three-dots" className="w-10 h-10" />
        </div>
      )}
      {adminStatus === "failed" && (
        <div className="box p-4 text-danger text-sm">{adminErrorMessage}</div>
      )}

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
                    <Table.Td colSpan={9} className="text-center text-slate-400 py-6">
                      Sin resultados
                    </Table.Td>
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
                          <Lucide
                            icon={expandedId === email.id ? "ChevronDown" : "ChevronRight"}
                            className="w-4 h-4 text-slate-400"
                          />
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
                            onChange={(e) => {
                              e.stopPropagation();
                              dispatch(updateGmailTypeThunk({ id: email.id, type: e.target.value }));
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className={`text-xs rounded-full px-2 py-0.5 font-medium border-0 cursor-pointer focus:ring-1 focus:ring-primary ${
                              email.type === "WEB-FORM"
                                ? "bg-success/10 text-success"
                                : email.type === "SPAM"
                                ? "bg-danger/10 text-danger"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            <option value="WEB-FORM">WEB-FORM</option>
                            <option value="SPAM">SPAM</option>
                          </select>
                        </Table.Td>
                        <Table.Td>
                          <SourceBadge source={email.source} />
                        </Table.Td>
                        <Table.Td className="text-center">
                          {email.hasAttachments ? (
                            <Lucide icon="Paperclip" className="w-4 h-4 text-primary mx-auto" />
                          ) : (
                            <span className="text-slate-300">—</span>
                          )}
                        </Table.Td>
                      </Table.Tr>

                      {/* Cuerpo expandido */}
                      {expandedId === email.id && (
                        <Table.Tr key={`${email.id}-body`}>
                          <Table.Td colSpan={9} className="bg-slate-50 dark:bg-darkmode-500 p-4">
                            <div className="text-xs text-slate-500 mb-2">
                              <span className="font-medium">Cuenta Gmail:</span> {email.gmailAccount}
                            </div>
                            {email.bodyHtml ? (
                              <div
                                className="text-sm prose max-w-none overflow-auto max-h-96 bg-white dark:bg-darkmode-600 rounded p-3"
                                dangerouslySetInnerHTML={{ __html: email.bodyHtml }}
                              />
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

          {/* Paginación */}
          <div className="flex items-center justify-between mt-4">
            {/* Info */}
            <div className="text-xs text-slate-400">
              Página {currentPage + 1}{adminNextToken ? "+" : ` de ${totalKnownPages}`}
              {" · "}{adminEmails.length} registros
            </div>

            {/* Controles */}
            <div className="flex items-center gap-1">
              {/* Anterior */}
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="flex items-center justify-center w-8 h-8 rounded border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </button>

              {/* Números de páginas visitadas */}
              {tokenHistory.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleGoToPage(idx)}
                  className={`flex items-center justify-center w-8 h-8 rounded border text-xs font-medium transition-colors ${
                    idx === currentPage
                      ? "bg-primary text-white border-primary"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              {/* Indicador de más páginas */}
              {adminNextToken && (
                <span className="flex items-center justify-center w-8 h-8 text-xs text-slate-400">
                  ...
                </span>
              )}

              {/* Siguiente */}
              <button
                onClick={handleNext}
                disabled={!adminNextToken}
                className="flex items-center justify-center w-8 h-8 rounded border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}

      <CustomerActionSlideover
        email={actionEmail}
        open={actionOpen}
        onClose={handleCloseAction}
      />
    </div>
  );
}
