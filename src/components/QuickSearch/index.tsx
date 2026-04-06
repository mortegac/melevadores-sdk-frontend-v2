import { Fragment, useState, useEffect } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import LoadingIcon from "@/components/Base/LoadingIcon";
import Lucide from "@/components/Base/Lucide";
import { FormInput } from "@/components/Base/Form";

import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { getCustomersThunk, selectCustomers } from "@/stores/Customers/slice";
import type { Customer } from "@/stores/Customers/types";
import { RESUME_CLIENT } from "@/router/paths";
import { useMemo } from "react";

interface MainProps {
  quickSearch: boolean;
  setQuickSearch: (val: boolean) => void;
}

function CustomerSearchList({ list, searchText }: { list: Customer[]; searchText: string }) {
  const simulateEscKey = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      which: 27,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);
  };

  const highlightText = (text: string, search: string) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase()
        ? <span key={index} className="bg-yellow-200">{part}</span>
        : part
    );
  };

  const statusColor: Record<string, string> = {
    ACTIVO: 'bg-green-100 text-green-700 border-green-300',
    INACTIVO: 'bg-slate-100 text-slate-500 border-slate-300',
    CREADO: 'bg-blue-100 text-blue-700 border-blue-300',
  };

  return (
    <>
      {Array.isArray(list) &&
        [...list]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item: Customer) => (
            <Link
              key={item.id}
              to={`${RESUME_CLIENT}?id=${item.id}`}
              onClick={simulateEscKey}
              className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y"
            >
              <div className="flex flex-col gap-0.5 py-1">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 overflow-hidden border rounded-md zoom-in border-orange-400/30 box bg-orange-500/10">
                    <Lucide
                      icon="Building2"
                      className="w-3.5 h-3.5 stroke-[1.3] text-orange-500"
                    />
                  </div>
                  <p className="font-medium text-base truncate">
                    {highlightText(item.name, searchText)}
                  </p>
                  {item.status && (
                    <span className={`text-xs border rounded-full px-2 py-0.5 ${statusColor[item.status] ?? 'bg-slate-100 text-slate-500 border-slate-300'}`}>
                      {item.status}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 ml-9 text-sm text-slate-500">
                  {item.email && (
                    <span>{highlightText(item.email.toLowerCase(), searchText)}</span>
                  )}
                  {item.phone && (
                    <span className="font-mono">{item.phone}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
    </>
  );
}

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

function Main(props: MainProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const dispatch = useAppDispatch();
  const { customers, status: customersStatus } = useAppSelector(selectCustomers);

  // Cargar todos los customers si aún no están en el store
  useEffect(() => {
    if (customers.length === 0) {
      dispatch(getCustomersThunk());
    }
  }, []);

  // Filtrar localmente (case-insensitive) sin llamadas a la API
  const customerResults = useMemo(() => {
    const q = debouncedSearchTerm.toLowerCase().trim();
    if (!q) return [];
    return customers.filter(
      (c) =>
        c.name?.toLowerCase().includes(q) ||
        c.email?.toLowerCase().includes(q) ||
        c.phone?.toLowerCase().includes(q)
    ).slice(0, 20);
  }, [debouncedSearchTerm, customers]);

  useEffect(() => {
    setIsSearching(false);
  }, [customerResults]);

  useEffect(() => {
    document.onkeydown = function (evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        props.setQuickSearch(false);
      } else if ((evt.ctrlKey || evt.metaKey) && evt.key === "k") {
        props.setQuickSearch(true);
      }
    };
  }, []);

  return (
    <>
      <Transition appear show={props.quickSearch} as={Fragment}>
        <HeadlessDialog
          as="div"
          className="relative z-[60]"
          onClose={props.setQuickSearch}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-50"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center my-2 sm:mt-40">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-50"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in-out duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <HeadlessDialog.Panel className="sm:w-[600px] lg:w-[700px] w-[95%] relative mx-auto transition-transform">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center w-12">
                      <Lucide
                        icon="Search"
                        className="w-5 h-5 -mr-1.5 text-slate-500 stroke-[1]"
                      />
                    </div>
                    <FormInput
                      className="pl-12 pr-14 py-3.5 text-base rounded-lg focus:ring-0 border-0 shadow-lg"
                      type="text"
                      placeholder="Búsqueda rápida de clientes..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsSearching(true);
                      }}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center w-14">
                      <div className="px-2 py-1 mr-auto text-xs border rounded-[0.4rem] bg-slate-100 text-slate-500/80">
                        ESC
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 pb-1 mt-1 bg-white rounded-lg shadow-lg max-h-[468px] sm:max-h-[615px] overflow-y-auto">
                    <div className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 overflow-hidden border rounded-md border-orange-400/30 bg-orange-500/10">
                          <Lucide
                            icon="Building2"
                            className="w-3.5 h-3.5 stroke-[1.3] text-orange-500"
                          />
                        </div>
                        <div className="text-xs uppercase text-slate-500">
                          Clientes
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 mt-3.5">
                        {(isSearching || customersStatus === "loading") && (
                          <div className="flex justify-center">
                            <div className="w-16 h-16">
                              <LoadingIcon
                                color="#243C70"
                                icon="three-dots"
                                className="w-10 h-10 mt-10"
                              />
                            </div>
                          </div>
                        )}
                        {customersStatus !== "loading" && !isSearching && (
                          <CustomerSearchList
                            list={customerResults}
                            searchText={searchTerm}
                          />
                        )}
                        {customersStatus !== "loading" && !isSearching && searchTerm && customerResults.length === 0 && (
                          <div className="flex flex-col items-center justify-center py-10 text-slate-400">
                            <Lucide
                              icon="SearchX"
                              className="w-10 h-10 mb-3 opacity-30"
                            />
                            <p className="text-sm">No se encontraron clientes para <span className="italic">"{searchTerm}"</span></p>
                          </div>
                        )}
                        {!searchTerm && (
                          <p className="text-sm text-slate-400 text-center py-4">
                            Escriba un nombre, email o teléfono para buscar...
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </HeadlessDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </HeadlessDialog>
      </Transition>
    </>
  );
}

export default Main;
