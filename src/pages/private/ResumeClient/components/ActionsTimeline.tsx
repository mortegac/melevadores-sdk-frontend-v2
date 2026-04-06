import { useEffect, useState } from "react";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { fetchActionsByCustomer } from "@/stores/Actions/services";
import { fetchAppUsers } from "@/stores/AppUsers/services";
import type { Action } from "@/stores/Actions/types";

interface ActionsTimelineProps {
  customerId: string;
  refreshKey?: number;
}

const STATUS_CONFIG: Record<string, { label: string; badgeClass: string }> = {
  CREADO:               { label: "Creado",               badgeClass: "bg-slate-100 text-slate-600 border-slate-200" },
  CONTACTADO:           { label: "Contactado",           badgeClass: "bg-blue-100 text-blue-700 border-blue-200" },
  ESPERANDO_INFO:       { label: "Esperando información", badgeClass: "bg-orange-100 text-orange-600 border-orange-200" },
  GENERANDO_COTIZACION: { label: "Generando cotización",  badgeClass: "bg-purple-100 text-purple-600 border-purple-200" },
  COTIZACION_ENVIADA:   { label: "Cotización enviada",    badgeClass: "bg-blue-100 text-blue-600 border-blue-200" },
  COTIZACION_ACEPTADA:  { label: "Cotización Aceptada",   badgeClass: "bg-green-100 text-green-700 border-green-200" },
  COTIZACION_RECHAZADA: { label: "Cotización Rechazada",  badgeClass: "bg-red-100 text-red-700 border-red-200" },
};

const MONTHS_ES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

function parseDateTime(iso: string): { year: number; display: string } {
  if (!iso) return { year: 0, display: "—" };
  const d = new Date(iso);
  const day   = String(d.getDate()).padStart(2, "0");
  const month = MONTHS_ES[d.getMonth()];
  const year  = d.getFullYear();
  const hh    = String(d.getHours()).padStart(2, "0");
  const mm    = String(d.getMinutes()).padStart(2, "0");
  const ss    = String(d.getSeconds()).padStart(2, "0");
  return { year, display: `${day} ${month} ${hh}:${mm}:${ss}` };
}

function groupByYear(actions: Action[]): Map<number, Action[]> {
  const map = new Map<number, Action[]>();
  for (const action of actions) {
    const { year } = parseDateTime(action.createdAt);
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(action);
  }
  return map;
}

export function ActionsTimeline({ customerId, refreshKey }: ActionsTimelineProps) {
  const [actions, setActions]         = useState<Action[]>([]);
  const [userMap, setUserMap]         = useState<Map<string, string>>(new Map());
  const [loadingStatus, setLoading]   = useState<"idle" | "loading" | "failed">("idle");
  const [errorMsg, setErrorMsg]       = useState("");

  // Cargar mapa de usuarios una sola vez
  useEffect(() => {
    fetchAppUsers()
      .then((list) => {
        const map = new Map<string, string>();
        list.forEach((u) => map.set(u.id, u.name));
        setUserMap(map);
      })
      .catch(() => {});
  }, []);

  // Cargar acciones cuando cambia el customerId o refreshKey
  useEffect(() => {
    if (!customerId) return;
    setLoading("loading");
    fetchActionsByCustomer(customerId)
      .then((items) => {
        setActions(items);
        setLoading("idle");
      })
      .catch((err: unknown) => {
        setErrorMsg(err instanceof Error ? err.message : "Error al cargar acciones");
        setLoading("failed");
      });
  }, [customerId, refreshKey]);

  if (loadingStatus === "loading") {
    return (
      <div className="flex justify-center py-8">
        <LoadingIcon icon="three-dots" color="#03b2cb" className="w-8 h-8" />
      </div>
    );
  }

  if (loadingStatus === "failed") {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <Lucide icon="AlertCircle" className="w-8 h-8 text-danger stroke-[0.8]" />
        <div className="mt-2 text-xs text-slate-500">{errorMsg}</div>
      </div>
    );
  }

  if (actions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <Lucide icon="ClipboardList" className="w-10 h-10 text-slate-300 stroke-[0.8]" />
        <div className="mt-2 text-sm text-slate-400">Sin acciones registradas</div>
      </div>
    );
  }

  const grouped = groupByYear(actions);
  const years   = Array.from(grouped.keys()).sort((a, b) => b - a);

  return (
    <div className="relative">
      {/* Línea vertical del timeline */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200" />

      {years.map((year) => (
        <div key={year} className="mb-2">
          {/* Separador de año */}
          <div className="relative pl-8 mb-3">
            <div className="absolute left-0 top-2.5 w-6 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center z-10">
                <span className="text-[9px] font-bold text-slate-500">{year}</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 mb-4">
            {grouped.get(year)!.map((action) => {
              const cfg      = STATUS_CONFIG[action.status] ?? { label: action.status, badgeClass: "bg-slate-100 text-slate-600 border-slate-200" };
              const { display } = parseDateTime(action.createdAt);
              const userName = action.userId ? (userMap.get(action.userId) ?? action.userId) : null;

              return (
                <li key={action.id} className="relative pl-8">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-slate-400" />
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`text-xs font-medium border rounded-full px-2 py-0.5 ${cfg.badgeClass}`}>
                        {cfg.label}
                      </span>
                      <span className="text-xs text-slate-400 ml-auto">{display}</span>
                    </div>
                    {userName && (
                      <div className="flex items-center gap-1 mb-1.5">
                        <Lucide icon="User" className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="text-xs text-slate-500">{userName}</span>
                      </div>
                    )}
                    {action.message && (
                      <p className="text-xs text-slate-600 leading-relaxed">{action.message}</p>
                    )}
                    {action.urlDocument && (
                      <a
                        href={action.urlDocument}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1.5 text-xs text-theme-1 hover:underline"
                      >
                        <Lucide icon="Paperclip" className="w-3 h-3 shrink-0" />
                        Ver adjunto
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
