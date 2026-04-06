import { useState, useEffect } from "react";
import clsx from "clsx";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

const listVisitsByCustomer = /* GraphQL */ `
  query ListCalendarVisitsByCustomer($customerId: ID!, $limit: Int) {
    listCalendarVisits(filter: { customerId: { eq: $customerId } }, limit: $limit) {
      items {
        calendarId
        customerId
        startDate
        summary
        location
        state
      }
    }
  }
`;

interface VisitsPageProps {
  customerId: string;
}

function getVisitBadge(state: string) {
  switch (state) {
    case "payed":
    case "payedAndAgended":
      return { label: "Pagada", className: "bg-emerald-100 text-emerald-700 border-emerald-200" };
    case "reserved":
      return { label: "Reservada", className: "bg-yellow-100 text-yellow-700 border-yellow-200" };
    case "available":
      return { label: "Disponible", className: "bg-slate-100 text-slate-600 border-slate-200" };
    default:
      return { label: state ?? "—", className: "bg-red-100 text-red-700 border-red-200" };
  }
}

export function VisitsPage({ customerId }: VisitsPageProps) {
  const [visits, setVisits] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!customerId) return;
    setLoading(true);
    (client.graphql({
      query: listVisitsByCustomer,
      variables: { customerId, limit: 100 },
    }) as Promise<any>)
      .then((result: any) => {
        const items = result?.data?.listCalendarVisits?.items ?? [];
        setVisits(items);
      })
      .catch(() => setVisits([]))
      .finally(() => setLoading(false));
  }, [customerId]);

  if (loading) {
    return (
      <div className="flex justify-center py-16 mt-6">
        <LoadingIcon icon="three-dots" color="#03b2cb" className="w-10 h-10" />
      </div>
    );
  }

  if (visits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 mt-6">
        <Lucide icon="CalendarX" className="w-16 h-16 text-slate-300 stroke-[0.8]" />
        <div className="mt-4 text-lg font-medium text-slate-500">Sin visitas registradas</div>
        <div className="mt-1 text-sm text-slate-400">Este cliente no tiene visitas agendadas.</div>
      </div>
    );
  }

  return (
    <div className="mt-6 box box--stacked overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50 first:rounded-tl-lg whitespace-nowrap">Fecha</th>
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50">Resumen</th>
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50 whitespace-nowrap">Estado</th>
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50 last:rounded-tr-lg whitespace-nowrap">Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((visit: any) => {
            const badge = getVisitBadge(visit.state);
            const fecha = visit.startDate ? new Date(visit.startDate).toLocaleDateString("es-CL") : "—";
            return (
              <tr
                key={visit.calendarId}
                className="border-b border-dashed border-slate-200 last:border-0 hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-5 py-4 whitespace-nowrap text-slate-700">{fecha}</td>
                <td className="px-5 py-4 text-slate-700">{visit.summary || "—"}</td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <span className={clsx("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", badge.className)}>
                    {badge.label}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600 text-xs">{visit.location || "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
