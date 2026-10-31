import type { APIRoute } from "astro";
import { yangsanSulbi as site } from "../site/config";
import { absoluteUrl } from "../lib/seo";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl(site, "/sitemap.xml")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
