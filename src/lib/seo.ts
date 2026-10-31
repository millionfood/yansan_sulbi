import type { SiteConfig } from "../site/types";

export function absoluteUrl(site: SiteConfig, path = "/"): string {
  const base = site.primaryOrigin.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildJsonLd(site: SiteConfig, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    ...site.jsonLd,
    url: pageUrl,
    image: absoluteUrl(site, site.seo.ogImagePath),
  };
}

export function themeStyle(site: SiteConfig): string {
  const entries = Object.entries(site.theme.vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");
  return `:root{${entries};--font-body:${site.theme.bodyFont};--font-display:${site.theme.displayFont}}`;
}
