import { generateClient } from 'aws-amplify/api';
import {
  listV2GmailInboxByAccountDate,
  listV2GmailInboxByCustomerIdAndDateSent,
  listV2GmailInboxByUserIdAndDateSent,
  listV2GmailInboxes,
} from './queries';
import { v2GmailReply, v2GmailSync, updateV2GmailInboxType } from './mutations';
import { FilterOptions, AdminFilterOptions, AdminPageResult, GmailInbox } from './types';

const client = generateClient();

// Cuenta Gmail sincronizada
const GMAIL_ACCOUNT = "melevadores.chile@gmail.com";

export interface GmailReplyParams {
  fromAccount: string;
  toEmail: string;
  subject: string;
  body: string;
  threadId?: string;
  inReplyToMessageId?: string;
}

export const triggerGmailSync = async (): Promise<void> => {
  await client.graphql({ query: v2GmailSync });
};

export const sendGmailReply = async (params: GmailReplyParams): Promise<{ success: boolean; messageId?: string; error?: string }> => {
  const result: any = await client.graphql({
    query: v2GmailReply,
    variables: params,
  });
  return result?.data?.v2GmailReply ?? { success: false, error: "No response" };
};

// Usa la query indexada (GSI byAccountDate: gmailAccount + dateSent).
// Ventajas vs scan:
//   - DynamoDB accede directamente por índice → sin scan de tabla completa
//   - sortDirection DESC → resultados ya ordenados por fecha descendente
//   - Loop de nextToken → garantiza que se traen TODOS los registros del rango
//
// Rango por defecto: hoy hacia 3 meses atrás.
// Limit por request: 100_000_000 (AppSync lo ajusta internamente a ~1000 por
// restricción de 1 MB por respuesta; el loop agota todos los tokens hasta traer
// el set completo).
const INDEXED_QUERY_LIMIT = 100_000_000;

export const fetchGmailInboxPage = async (params: AdminFilterOptions): Promise<AdminPageResult> => {
  const now           = new Date();
  const threeMonthsAgo = new Date(now);
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  // ISO timestamps para el key condition de dateSent en el GSI
  const dateFrom = params.dateFrom
    ? `${params.dateFrom}T00:00:00.000Z`
    : threeMonthsAgo.toISOString();
  const dateTo = params.dateTo
    ? `${params.dateTo}T23:59:59.999Z`
    : now.toISOString();

  // Filtros adicionales aplicados server-side después del index lookup
  const filter: Record<string, any> = {};
  if (params.type && params.type !== "ALL") {
    filter.type = { eq: params.type };
  }
  if (params.searchText?.trim()) {
    const text = params.searchText.trim();
    filter.or = [
      { fromEmail: { contains: text } },
      { fromName:  { contains: text } },
      { toEmails:  { contains: text } },
    ];
  }

  const allItems: any[] = [];
  let cursor: string | null = null; // siempre arranca desde el principio del rango

  try {
  // Loop de tokens: itera hasta que DynamoDB no tenga más registros en el rango
  do {
    const result: any = await client.graphql({
      query:     listV2GmailInboxByAccountDate,
      variables: {
        gmailAccount:  GMAIL_ACCOUNT,
        dateSent:      { between: [dateFrom, dateTo] },
        sortDirection: "DESC",
        filter:        Object.keys(filter).length > 0 ? filter : undefined,
        limit:         INDEXED_QUERY_LIMIT,
        nextToken:     cursor,
      },
    });

    const page = result?.data?.listV2GmailInboxByGmailAccountAndDateSent;
    allItems.push(...(page?.items ?? []));
    cursor = page?.nextToken ?? null;
  } while (cursor !== null);

  // El GSI con sortDirection DESC ya devuelve los emails más recientes primero
  return { items: allItems, nextToken: null };
  } catch (err: any) {
    // Normaliza el error de AppSync/GraphQL en un mensaje legible
    const msg =
      err?.errors?.[0]?.message ??
      err?.message ??
      "Error al conectar con el servidor. Intenta nuevamente.";
    throw new Error(msg);
  }
};

export const fetchGmailInboxByCustomerId = async (customerId: string): Promise<GmailInbox[]> => {
  const result: any = await client.graphql({
    query: listV2GmailInboxByCustomerIdAndDateSent,
    variables: { customerId, sortDirection: 'DESC', limit: 200, nextToken: null },
  });
  const items: GmailInbox[] = result?.data?.listV2GmailInboxByCustomerIdAndDateSent?.items ?? [];
  return items.sort((a, b) => b.dateSent.localeCompare(a.dateSent));
};

export const fetchGmailInboxByEmail = async (email: string): Promise<GmailInbox[]> => {
  // Contact-form emails store the customer's email inside the body/snippet,
  // not in fromEmail (which is always the Gmail account itself).
  // We must search snippet and bodyText to find emails related to this customer.
  const filter: any = {
    or: [
      { snippet:   { contains: email } },
      { bodyText:  { contains: email } },
    ],
  };

  const result: any = await client.graphql({
    query: listV2GmailInboxes,
    variables: { filter, limit: 200, nextToken: null },
  });

  const items: GmailInbox[] = result?.data?.listV2GmailInboxes?.items ?? [];
  return items.sort((a, b) => b.dateSent.localeCompare(a.dateSent));
};

export const fetchGmailInboxByUser = async (objFilter: FilterOptions): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const now = new Date();
      const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

      const dateFrom = objFilter.dateFrom ?? oneYearAgo.toISOString();
      const dateTo   = objFilter.dateTo   ?? now.toISOString();

      const getData: any = await client.graphql({
        query: listV2GmailInboxByUserIdAndDateSent,
        variables: {
          userId: objFilter.userId,
          dateSent: { between: [dateFrom, dateTo] },
          sortDirection: 'DESC',
          limit: 200,
        },
      });

      const items = getData?.data?.listV2GmailInboxByUserIdAndDateSent?.items ?? [];
      resolve(items);
    } catch (err) {
      reject({ errorMessage: JSON.stringify(err) });
    }
  });
};

export const updateGmailInboxTypeService = async (id: string, type: string): Promise<void> => {
  await client.graphql({
    query: updateV2GmailInboxType,
    variables: { input: { id, type } },
  });
};
