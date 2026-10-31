export type SiteId = "yangsan_sulbi";

export type SiteTheme = {
  vars: Record<string, string>;
  fontQuery: string;
  bodyFont: string;
  displayFont: string;
};

export type SiteNavItem = {
  label: string;
  href: string;
};

export type SiteCopy = {
  brand: string;
  headline: string;
  support: string;
  ctaPrimary: string;
  ctaCall: string;
  aboutTitle: string;
  aboutBody: string;
  formTitle: string;
  formSupport: string;
  placeTypeLabel?: string;
  symptomsLabel: string;
  privacyConsentLabel?: string;
  privacyNotice?: {
    purpose: string;
    items: string;
    retention: string;
  };
  successMessage: string;
  errorMessage: string;
};

export type SymptomGroup = {
  id: string;
  label: string;
  options: string[];
};

export type LocalBusinessJsonLd = {
  "@type": "LocalBusiness" | "Plumber" | "HomeAndConstructionBusiness";
  name: string;
  description: string;
  telephone: string;
  areaServed: string | string[];
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
};

export type SiteConfig = {
  siteId: SiteId;
  hosts: string[];
  primaryOrigin: string;
  businessName: string;
  phone: string;
  phoneDisplay: string;
  region: string;
  regionKeywords: string[];
  nav: SiteNavItem[];
  allowedPaths: string[];
  seo: {
    title: string;
    description: string;
    ogImagePath: string;
  };
  copy: SiteCopy;
  symptomOptions: string[];
  symptomGroups?: SymptomGroup[];
  theme: SiteTheme;
  jsonLd: LocalBusinessJsonLd;
  media: {
    placeholder: string;
  };
};
