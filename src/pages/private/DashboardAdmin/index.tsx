import Lucide from "@/components/Base/Lucide";
import Chart from "@/components/Base/Chart";
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { setBreadcrumb } from "@/stores/breadcrumb";
import { getCustomersThunk, selectCustomers } from "@/stores/Customers/slice";
import { getGmailInboxPage, selectGmailInbox } from "@/stores/GmailInbox/slice";
import { useEffect, useMemo } from "react";
import { getColor } from "@/utils/colors";

const MONTH_NAMES = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

// Genera etiquetas de los últimos N meses en orden cronológico
function lastNMonths(n: number): { label: string; month: number; year: number }[] {
  const result = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    result.push({ label: `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`, month: d.getMonth(), year: d.getFullYear() });
  }
  return result;
}

function Main() {
  const dispatch = useAppDispatch();
  dispatch(setBreadcrumb({ first: "", firstURL: "" }));

  const { customers, status: customersStatus } = useAppSelector(selectCustomers);
  const { adminEmails, adminStatus } = useAppSelector(selectGmailInbox);

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  useEffect(() => {
    dispatch(getCustomersThunk());
    // Traer emails de los últimos 6 meses
    const sixMonthsAgo = new Date(currentYear, currentMonth - 5, 1);
    const endOfMonth = new Date(currentYear, currentMonth + 1, 0, 23, 59, 59, 999);
    dispatch(getGmailInboxPage({ dateFrom: sixMonthsAgo.toISOString(), dateTo: endOfMonth.toISOString() }));
  }, []);

  const months = lastNMonths(6);

  const {
    customersPerMonth,
    emailsPerMonth,
    customersCreado,
    customersInactivo,
    customersContactado,
    customersRechazaPropuesta,
    customersEsperaCotizacion,
    customersAceptaPropuesta,
  } = useMemo(() => {
    const customersPerMonth = months.map(({ month, year }) =>
      customers.filter((c) => {
        const d = new Date(c.createdAt);
        return d.getMonth() === month && d.getFullYear() === year;
      }).length
    );

    const emailsPerMonth = months.map(({ month, year }) =>
      adminEmails.filter((e) => {
        if (!e.dateStr) return false;
        const [y, m] = e.dateStr.split("-").map(Number);
        return m - 1 === month && y === year;
      }).length
    );

    return {
      customersPerMonth,
      emailsPerMonth,
      customersCreado: customers.filter((c) => c.status === "CREADO").length,
      customersInactivo: customers.filter((c) => c.status === "INACTIVO").length,
      customersContactado: customers.filter((c) => c.status === "CONTACTADO").length,
      customersRechazaPropuesta: customers.filter((c) => c.status === "RECHAZA PROPUESTA").length,
      customersEsperaCotizacion: customers.filter((c) => c.status === "ESPERA DE COTIZACION").length,
      customersAceptaPropuesta: customers.filter((c) => c.status === "ACEPTA PROPUESTA").length,
    };
  }, [customers, adminEmails]);

  const labels = months.map((m) => m.label);

  const customersChartData = {
    labels,
    datasets: [{
      label: "Clientes",
      data: customersPerMonth,
      backgroundColor: getColor("primary", 0.7),
      borderColor: getColor("primary"),
      borderWidth: 1,
      borderRadius: 4,
    }],
  };

  const emailsChartData = {
    labels,
    datasets: [{
      label: "Emails",
      data: emailsPerMonth,
      backgroundColor: getColor("info", 0.7),
      borderColor: getColor("info"),
      borderWidth: 1,
      borderRadius: 4,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, precision: 0 },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  const isLoadingCustomers = customersStatus === "loading";
  const isLoadingEmails = adminStatus === "loading";

  return (
    <div className="grid grid-cols-12 gap-y-6 gap-x-6">

      {/* Título */}
      <div className="col-span-12">
        <div className="text-base font-medium group-[.mode--light]:text-white">
          Resumen General
        </div>
      </div>

      {/* Card 1 — Clientes por mes (50%) */}
      <div className="col-span-12 lg:col-span-6 box box--stacked p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-base font-medium">Clientes por Mes</div>
            <div className="text-xs text-slate-400 mt-0.5">Últimos 6 meses</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
            <Lucide icon="Users" className="w-5 h-5 text-primary" />
          </div>
        </div>
        {isLoadingCustomers ? (
          <div className="h-48 bg-slate-100 dark:bg-darkmode-400 rounded animate-pulse" />
        ) : (
          <div className="h-48">
            <Chart type="bar" data={customersChartData} options={chartOptions} height="auto" />
          </div>
        )}
      </div>

      {/* Card 2 — Emails recibidos por mes (50%) */}
      <div className="col-span-12 lg:col-span-6 box box--stacked p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-base font-medium">Emails Recibidos</div>
            <div className="text-xs text-slate-400 mt-0.5">Últimos 6 meses</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-info/10">
            <Lucide icon="Mail" className="w-5 h-5 text-info" />
          </div>
        </div>
        {isLoadingEmails ? (
          <div className="h-48 bg-slate-100 dark:bg-darkmode-400 rounded animate-pulse" />
        ) : (
          <div className="h-48">
            <Chart type="bar" data={emailsChartData} options={chartOptions} height="auto" />
          </div>
        )}
      </div>

      {/* Card 3 — Clientes CREADO (25%) */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 box box--stacked p-5">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            {isLoadingCustomers ? (
              <div className="h-9 w-16 bg-slate-200 dark:bg-darkmode-400 rounded animate-pulse mb-1" />
            ) : (
              <div className="text-3xl font-bold">{customersCreado}</div>
            )}
            <div className="text-base text-slate-500 mt-1">Clientes CREADO</div>
            <div className="text-xs text-slate-400 mt-0.5">pendientes de gestión</div>
          </div>
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full ml-4 bg-primary/10">
            <Lucide icon="Clock" className="w-7 h-7 text-primary" />
          </div>
        </div>
      </div>

      {/* Card 4 — Clientes INACTIVO (25%) */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 box box--stacked p-5">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            {isLoadingCustomers ? (
              <div className="h-9 w-16 bg-slate-200 dark:bg-darkmode-400 rounded animate-pulse mb-1" />
            ) : (
              <div className="text-3xl font-bold">{customersInactivo}</div>
            )}
            <div className="text-base text-slate-500 mt-1">Clientes INACTIVO</div>
            <div className="text-xs text-slate-400 mt-0.5">clientes inactivos</div>
          </div>
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full ml-4 bg-danger/10">
            <Lucide icon="UserX" className="w-7 h-7 text-danger" />
          </div>
        </div>
      </div>

      {/* Card 5 — Clientes CONTACTADO (25%) */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 box box--stacked p-5">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            {isLoadingCustomers ? (
              <div className="h-9 w-16 bg-slate-200 dark:bg-darkmode-400 rounded animate-pulse mb-1" />
            ) : (
              <div className="text-3xl font-bold">{customersContactado}</div>
            )}
            <div className="text-base text-slate-500 mt-1">Clientes CONTACTADO</div>
            <div className="text-xs text-slate-400 mt-0.5">en seguimiento</div>
          </div>
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full ml-4 bg-warning/10">
            <Lucide icon="Phone" className="w-7 h-7 text-warning" />
          </div>
        </div>
      </div>

      {/* Card 6 — Clientes RECHAZA PROPUESTA (25%) */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 box box--stacked p-5">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            {isLoadingCustomers ? (
              <div className="h-9 w-16 bg-slate-200 dark:bg-darkmode-400 rounded animate-pulse mb-1" />
            ) : (
              <div className="text-3xl font-bold">{customersRechazaPropuesta}</div>
            )}
            <div className="text-base text-slate-500 mt-1">Rechaza Propuesta</div>
            <div className="text-xs text-slate-400 mt-0.5">propuesta rechazada</div>
          </div>
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full ml-4 bg-danger/10">
            <Lucide icon="ThumbsDown" className="w-7 h-7 text-danger" />
          </div>
        </div>
      </div>

      {/* Card 7 — Clientes ESPERA DE COTIZACION (25%) */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 box box--stacked p-5">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            {isLoadingCustomers ? (
              <div className="h-9 w-16 bg-slate-200 dark:bg-darkmode-400 rounded animate-pulse mb-1" />
            ) : (
              <div className="text-3xl font-bold">{customersEsperaCotizacion}</div>
            )}
            <div className="text-base text-slate-500 mt-1">Espera Cotización</div>
            <div className="text-xs text-slate-400 mt-0.5">esperando cotización</div>
          </div>
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full ml-4 bg-orange-500/10">
            <Lucide icon="Clock3" className="w-7 h-7 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Card 8 — Clientes ACEPTA PROPUESTA (25%) */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 box box--stacked p-5">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            {isLoadingCustomers ? (
              <div className="h-9 w-16 bg-slate-200 dark:bg-darkmode-400 rounded animate-pulse mb-1" />
            ) : (
              <div className="text-3xl font-bold">{customersAceptaPropuesta}</div>
            )}
            <div className="text-base text-slate-500 mt-1">Acepta Propuesta</div>
            <div className="text-xs text-slate-400 mt-0.5">propuesta aceptada</div>
          </div>
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full ml-4 bg-success/10">
            <Lucide icon="ThumbsUp" className="w-7 h-7 text-success" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
