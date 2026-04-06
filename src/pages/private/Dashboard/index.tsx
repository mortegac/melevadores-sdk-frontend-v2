import Lucide from "@/components/Base/Lucide";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { setBreadcrumb } from "@/stores/breadcrumb";
import { getCustomersThunk, selectCustomers } from "@/stores/Customers/slice";
import { getGmailInboxPage, selectGmailInbox } from "@/stores/GmailInbox/slice";
import { useEffect, useMemo } from "react";

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

function Main() {
  const dispatch = useAppDispatch();
  dispatch(setBreadcrumb({ first: "", firstURL: "" }));

  const { customers, status: customersStatus } = useAppSelector(selectCustomers);
  const { adminEmails, adminStatus } = useAppSelector(selectGmailInbox);

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const monthLabel = `${MONTH_NAMES[currentMonth]} ${currentYear}`;

  useEffect(() => {
    dispatch(getCustomersThunk());

    const firstOfMonth = new Date(currentYear, currentMonth, 1);
    const lastOfMonth = new Date(currentYear, currentMonth + 1, 0, 23, 59, 59, 999);
    dispatch(
      getGmailInboxPage({
        dateFrom: firstOfMonth.toISOString(),
        dateTo: lastOfMonth.toISOString(),
      })
    );
  }, []);

  const stats = useMemo(() => {
    const customersThisMonth = customers.filter((c) => {
      const d = new Date(c.createdAt);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });

    const customersCreado = customers.filter((c) => c.status === "CREADO");
    const customersInactivo = customers.filter((c) => c.status === "INACTIVO");

    return {
      customersThisMonth: customersThisMonth.length,
      emailsThisMonth: adminEmails.length,
      customersCreado: customersCreado.length,
      customersInactivo: customersInactivo.length,
    };
  }, [customers, adminEmails, currentMonth, currentYear]);

  const cards = [
    {
      label: "Clientes por Mes",
      sublabel: monthLabel,
      value: stats.customersThisMonth,
      icon: "Users" as const,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      loading: customersStatus === "loading",
    },
    {
      label: "Emails Recibidos",
      sublabel: monthLabel,
      value: stats.emailsThisMonth,
      icon: "Mail" as const,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
      loading: adminStatus === "loading",
    },
    {
      label: "Clientes CREADO",
      sublabel: "pendientes de gestión",
      value: stats.customersCreado,
      icon: "Clock" as const,
      iconBg: "bg-warning/10",
      iconColor: "text-warning",
      loading: customersStatus === "loading",
    },
    {
      label: "Clientes INACTIVO",
      sublabel: "clientes inactivos",
      value: stats.customersInactivo,
      icon: "UserX" as const,
      iconBg: "bg-danger/10",
      iconColor: "text-danger",
      loading: customersStatus === "loading",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Resumen General
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 mt-3.5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="col-span-12 sm:col-span-6 xl:col-span-3 box box--stacked p-5"
            >
              <div className="flex items-center">
                <div className="flex-1 min-w-0">
                  {card.loading ? (
                    <div className="h-9 w-16 bg-slate-200 dark:bg-darkmode-400 rounded animate-pulse mb-1" />
                  ) : (
                    <div className="text-3xl font-bold truncate">
                      {card.value}
                    </div>
                  )}
                  <div className="text-base text-slate-500 mt-1 truncate">
                    {card.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 truncate">
                    {card.sublabel}
                  </div>
                </div>
                <div
                  className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full ml-4 ${card.iconBg}`}
                >
                  <Lucide
                    icon={card.icon}
                    className={`w-7 h-7 ${card.iconColor}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
