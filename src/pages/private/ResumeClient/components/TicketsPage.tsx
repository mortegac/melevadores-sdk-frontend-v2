import { useState, useEffect } from "react";
import clsx from "clsx";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

const listTicketsByCustomer = /* GraphQL */ `
  query ListSupportTicketsByCustomer($solicitantId: ID!, $limit: Int) {
    listSupportTickets(filter: { solicitantId: { eq: $solicitantId } }, limit: $limit) {
      items {
        supportTicketId
        name
        description
        statusTicket
        level
        date
        solicitantId
      }
    }
  }
`;

interface TicketsPageProps {
  customerId: string;
}

function getStatusBadge(status: string) {
  switch (status) {
    case "open":
      return { label: "Abierto", className: "bg-blue-100 text-blue-700 border-blue-200" };
    case "in_progress":
      return { label: "En progreso", className: "bg-yellow-100 text-yellow-700 border-yellow-200" };
    case "resolved":
      return { label: "Resuelto", className: "bg-emerald-100 text-emerald-700 border-emerald-200" };
    case "does_not_apply":
      return { label: "No aplica", className: "bg-slate-100 text-slate-500 border-slate-200" };
    default:
      return { label: status ?? "—", className: "bg-slate-100 text-slate-500 border-slate-200" };
  }
}

function getLevelBadge(level: string) {
  switch (level) {
    case "one":
      return { label: "Nivel 1", className: "bg-emerald-100 text-emerald-700 border-emerald-200" };
    case "two":
      return { label: "Nivel 2", className: "bg-yellow-100 text-yellow-700 border-yellow-200" };
    case "three":
      return { label: "Nivel 3", className: "bg-red-100 text-red-700 border-red-200" };
    default:
      return { label: level ?? "—", className: "bg-slate-100 text-slate-500 border-slate-200" };
  }
}

export function TicketsPage({ customerId }: TicketsPageProps) {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!customerId) return;
    setLoading(true);
    (client.graphql({
      query: listTicketsByCustomer,
      variables: { solicitantId: customerId, limit: 100 },
    }) as Promise<any>)
      .then((result: any) => {
        const items = result?.data?.listSupportTickets?.items ?? [];
        setTickets(items);
      })
      .catch(() => setTickets([]))
      .finally(() => setLoading(false));
  }, [customerId]);

  if (loading) {
    return (
      <div className="flex justify-center py-16 mt-6">
        <LoadingIcon icon="three-dots" color="#03b2cb" className="w-10 h-10" />
      </div>
    );
  }

  if (tickets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 mt-6">
        <Lucide icon="Ticket" className="w-16 h-16 text-slate-300 stroke-[0.8]" />
        <div className="mt-4 text-lg font-medium text-slate-500">Sin tickets registrados</div>
        <div className="mt-1 text-sm text-slate-400">
          Este cliente no tiene tickets de soporte asociados.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 box box--stacked overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50 first:rounded-tl-lg whitespace-nowrap">Fecha</th>
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50 whitespace-nowrap">Nombre</th>
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50">Descripción</th>
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50 whitespace-nowrap">Estado</th>
            <th className="text-left px-5 py-4 font-medium text-slate-500 bg-slate-50 last:rounded-tr-lg whitespace-nowrap">Nivel</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket: any) => {
            const statusBadge = getStatusBadge(ticket.statusTicket);
            const levelBadge = getLevelBadge(ticket.level);
            const fecha = ticket.date ? new Date(ticket.date).toLocaleDateString("es-CL") : "—";
            return (
              <tr
                key={ticket.supportTicketId}
                className="border-b border-dashed border-slate-200 last:border-0 hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-5 py-4 whitespace-nowrap text-slate-700">{fecha}</td>
                <td className="px-5 py-4 whitespace-nowrap font-medium text-slate-700">{ticket.name || "—"}</td>
                <td className="px-5 py-4 text-slate-600 text-xs line-clamp-2">{ticket.description || "—"}</td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <span className={clsx("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", statusBadge.className)}>
                    {statusBadge.label}
                  </span>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <span className={clsx("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", levelBadge.className)}>
                    {levelBadge.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
