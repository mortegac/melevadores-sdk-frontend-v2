import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Tab } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { setBreadcrumb } from "@/stores/breadcrumb";
import { getCustomer, selectCustomer, clearCustomer } from "@/stores/Customer/slice";

import { InfoPage } from "./components/InfoPage";
import { ClientFormsPage } from "./components/ClientFormsPage";

function Main() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const customerId = searchParams.get("id") ?? undefined;
  const { customer, status, errorMessage } = useAppSelector(selectCustomer);
  const loading = status === "loading";

  useEffect(() => {
    dispatch(setBreadcrumb({ first: "Perfil Cliente", firstURL: "resume-client" }));
    return () => { dispatch(clearCustomer()); };
  }, [dispatch]);

  useEffect(() => {
    if (customerId) dispatch(getCustomer({ customerId }));
  }, [customerId, dispatch]);

  // --- Estado vacío: sin customerId ---
  if (!customerId) {
    return (
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <Lucide
              icon="SearchX"
              className="w-24 h-24 text-slate-300 stroke-[0.8]"
            />
            <div className="mt-6 text-xl font-medium text-slate-500">
              Sin cliente seleccionado
            </div>
            <div className="mt-2 text-sm text-slate-400 max-w-sm">
              Utilice el buscador superior para visualizar información del cliente
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Estado de carga ---
  if (loading) {
    return (
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <LoadingIcon icon="three-dots" color="#03b2cb" className="w-16 h-16" />
            <div className="mt-4 text-sm text-slate-400">Cargando información del cliente...</div>
          </div>
        </div>
      </div>
    );
  }

  // --- Estado de error ---
  if (status === "failed") {
    return (
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <Lucide icon="AlertCircle" className="w-16 h-16 text-danger stroke-[0.8]" />
            <div className="mt-6 text-xl font-medium text-slate-500">Error al cargar cliente</div>
            <div className="mt-2 text-sm text-slate-400 max-w-sm">{errorMessage}</div>
            <div className="mt-2 text-xs text-slate-300 font-mono">{customerId}</div>
          </div>
        </div>
      </div>
    );
  }

  const statusColorMap: Record<string, string> = {
    CREADO:               "bg-primary/10 text-primary border-primary/20",
    CONTACTADO:           "bg-warning/10 text-warning border-warning/20",
    ESPERANDO_INFO:       "bg-orange-500/10 text-orange-500 border-orange-500/20",
    GENERANDO_COTIZACION: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    COTIZACION_ENVIADA:   "bg-blue-500/10 text-blue-500 border-blue-500/20",
    COTIZACION_ACEPTADA:  "bg-success/10 text-success border-success/20",
    COTIZACION_RECHAZADA: "bg-danger/10 text-danger border-danger/20",
  };

  const statusClass = customer?.status
    ? (statusColorMap[customer.status] ?? "bg-slate-100 text-slate-500 border-slate-200")
    : "";

  const formattedCreatedAt = customer?.createdAt
    ? new Date(customer.createdAt).toLocaleDateString("es-CL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "—";

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        {/* ===== HEADER CON BANNER Y AVATAR ===== */}
        <div className="relative">
          {/* Banner gradiente */}
          <div className="h-48 rounded-xl bg-gradient-to-r from-theme-2/95 to-theme-2/20 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" />
          </div>

          {/* Avatar circular sobre el banner */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
            <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
              <Lucide icon="Building2" className="w-14 h-14 text-theme-1" />
            </div>
          </div>
        </div>

        {/* Nombre y datos básicos debajo del banner */}
        <div className="pt-20 pb-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-700">
            {customer?.name || "Cliente sin nombre"}
          </h2>

          {/* Fila de info rápida */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-3">
            {/* Status badge */}
            {customer?.status && (
              <span className={`text-xs border rounded-full px-2.5 py-1 font-medium ${statusClass}`}>
                {customer.status}
              </span>
            )}

            {/* Teléfono */}
            {customer?.phone && (
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Lucide icon="Phone" className="w-4 h-4" />
                <span>{customer.phone}</span>
              </div>
            )}

            {/* Teléfono 2 */}
            {customer?.phone2 && (
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Lucide icon="Phone" className="w-4 h-4" />
                <span>{customer.phone2}</span>
              </div>
            )}

            {/* Email */}
            {customer?.email && (
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Lucide icon="Mail" className="w-4 h-4" />
                <span className="truncate max-w-[200px]">{customer.email}</span>
              </div>
            )}

            {/* Fecha creación */}
            {customer?.createdAt && (
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Lucide icon="Calendar" className="w-4 h-4" />
                <span>Creado: {formattedCreatedAt}</span>
              </div>
            )}
          </div>
        </div>

        {/* ===== TABS DE CONTENIDO ===== */}
        <Tab.Group>
          <Tab.List variant="boxed-tabs" className="w-full sm:w-auto sm:mx-auto">
            <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
              <Tab.Button
                className="w-full text-slate-500 whitespace-nowrap rounded-[0.6rem]"
                as="button"
              >
                <Lucide icon="LayoutDashboard" className="w-4 h-4 mr-2 inline-block" />
                Resumen
              </Tab.Button>
            </Tab>
            <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
              <Tab.Button
                className="w-full text-slate-500 whitespace-nowrap rounded-[0.6rem]"
                as="button"
              >
                <Lucide icon="MessageSquare" className="w-4 h-4 mr-2 inline-block" />
                Mensajes
              </Tab.Button>
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-4">
            {/* Panel: Resumen / Info */}
            <Tab.Panel>
              <InfoPage customer={customer} customerId={customerId} />
            </Tab.Panel>

            {/* Panel: Mensajes */}
            <Tab.Panel>
              <ClientFormsPage customerId={customerId ?? ""} customerEmail={customer?.email ?? ""} />
            </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Main;
