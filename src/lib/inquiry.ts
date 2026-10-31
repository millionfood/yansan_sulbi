import type { SiteId } from "../site/types";

/** api-spec/openapi.yaml CreateInquiryRequest 와 동일 */
export type CreateInquiryRequest = {
  siteId: SiteId;
  name: string;
  phone: string;
  address?: string;
  symptoms?: string[];
  memo?: string;
  pageUrl?: string;
};

export type CreateInquirySuccess = { ok: true };
export type CreateInquiryError = {
  ok: false;
  error: {
    code: string;
    message: string;
    details?: Array<{ field: string; message: string }>;
  };
};

export function getApiBase(): string {
  const base = import.meta.env.PUBLIC_API_BASE?.replace(/\/$/, "") ?? "";
  return base;
}

export async function submitInquiry(
  body: CreateInquiryRequest,
): Promise<{ status: number; data: CreateInquirySuccess | CreateInquiryError | null }> {
  const apiBase = getApiBase();
  if (!apiBase) {
    return {
      status: 0,
      data: {
        ok: false,
        error: {
          code: "MISSING_API_BASE",
          message: "PUBLIC_API_BASE is not configured",
        },
      },
    };
  }

  const res = await fetch(`${apiBase}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  let data: CreateInquirySuccess | CreateInquiryError | null = null;
  try {
    data = (await res.json()) as CreateInquirySuccess | CreateInquiryError;
  } catch {
    data = null;
  }

  return { status: res.status, data };
}
