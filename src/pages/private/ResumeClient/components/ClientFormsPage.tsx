import { useEffect, useState } from "react";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getGmailByCustomerIdThunk,
  selectGmailInbox,
} from "@/stores/GmailInbox/slice";

interface ClientFormsPageProps {
  customerId: string;
  customerEmail: string;
}

function formatDate(iso: string): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ClientFormsPage({ customerId, customerEmail }: ClientFormsPageProps) {
  const dispatch = useAppDispatch();
  const { customerIdEmails, customerIdEmailsStatus, customerIdEmailsError } =
    useAppSelector(selectGmailInbox);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (!customerId) return;
    dispatch(getGmailByCustomerIdThunk(customerId));
  }, [customerId, dispatch]);

  const toggleExpand = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  if (customerIdEmailsStatus === "loading") {
    return (
      <div className="flex justify-center py-16 mt-6">
        <LoadingIcon icon="three-dots" color="#03b2cb" className="w-10 h-10" />
      </div>
    );
  }

  if (customerIdEmailsStatus === "failed") {
    return (
      <div className="flex flex-col items-center justify-center py-16 mt-6">
        <Lucide icon="AlertCircle" className="w-12 h-12 text-danger stroke-[0.8]" />
        <div className="mt-3 text-sm text-slate-500">{customerIdEmailsError}</div>
      </div>
    );
  }

  if (!customerId) {
    return (
      <div className="flex flex-col items-center justify-center py-16 mt-6">
        <Lucide icon="Mail" className="w-16 h-16 text-slate-300 stroke-[0.8]" />
        <div className="mt-4 text-lg font-medium text-slate-500">Sin cliente seleccionado</div>
        <div className="mt-1 text-sm text-slate-400">
          No se puede cargar el inbox sin un cliente asociado.
        </div>
      </div>
    );
  }

  if (customerIdEmails.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 mt-6">
        <Lucide icon="Mail" className="w-16 h-16 text-slate-300 stroke-[0.8]" />
        <div className="mt-4 text-lg font-medium text-slate-500">Sin emails encontrados</div>
        <div className="mt-1 text-sm text-slate-400">
          No se encontraron emails asociados a{" "}
          <span className="font-medium">{customerEmail || "este cliente"}</span> en el inbox.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="box overflow-x-auto">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="w-6"></Table.Th>
              <Table.Th>Fecha</Table.Th>
              <Table.Th>De</Table.Th>
              <Table.Th>Para</Table.Th>
              <Table.Th>Asunto</Table.Th>
              <Table.Th className="text-center w-16">Leído</Table.Th>
              <Table.Th className="text-center w-16">Adjunto</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {customerIdEmails.map((email) => (
              <>
                <Table.Tr
                  key={email.id}
                  className={`cursor-pointer hover:bg-slate-50 dark:hover:bg-darkmode-400 ${!email.isRead ? "font-semibold" : ""}`}
                  onClick={() => toggleExpand(email.id)}
                >
                  <Table.Td>
                    <Lucide
                      icon={expandedId === email.id ? "ChevronDown" : "ChevronRight"}
                      className="w-4 h-4 text-slate-400"
                    />
                  </Table.Td>
                  <Table.Td className="text-xs whitespace-nowrap">
                    {formatDate(email.dateSent)}
                  </Table.Td>
                  <Table.Td className="text-xs">
                    <div>{email.fromName || "-"}</div>
                    <div className="text-slate-400">{email.fromEmail}</div>
                  </Table.Td>
                  <Table.Td className="text-xs text-slate-500">
                    {email.toEmails?.join(", ") ?? "-"}
                  </Table.Td>
                  <Table.Td className="text-sm max-w-xs truncate">
                    {email.subject || "(sin asunto)"}
                  </Table.Td>
                  <Table.Td className="text-center">
                    {email.isRead ? (
                      <Lucide icon="CheckCircle" className="w-4 h-4 text-success mx-auto" />
                    ) : (
                      <Lucide icon="Circle" className="w-4 h-4 text-slate-300 mx-auto" />
                    )}
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
                    <Table.Td colSpan={7} className="bg-slate-50 dark:bg-darkmode-500 p-4">
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
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <div className="text-xs text-slate-400 mt-3 text-right">
        {customerIdEmails.length} email{customerIdEmails.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
}
