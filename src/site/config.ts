import type { SiteConfig } from "./types";

/** 양산 설비 — SEO: 양산 설비, 양산 설비 업체 */
export const yangsanSulbi: SiteConfig = {
  siteId: "yangsan_sulbi",
  hosts: [
    "yangsan-sulbi.example.com",
    "www.yangsan-sulbi.example.com",
    "localhost",
    "127.0.0.1",
  ],
  primaryOrigin: "https://yangsan-sulbi.example.com",
  businessName: "설비연구소",
  phone: "01012345678",
  phoneDisplay: "010-1234-5678",
  region: "양산",
  regionKeywords: [
    "양산 설비",
    "양산 설비 업체",
    "양산 급배수",
    "양산 배관",
    "물금 설비",
    "웅상 설비",
  ],
  nav: [],
  allowedPaths: ["/", "/robots.txt", "/sitemap.xml"],
  seo: {
    title: "양산 설비 | 양산 설비 업체 설비연구소 — 급배수·배관·보일러·당일 상담",
    description:
      "양산 설비 전문. 가정·상가·공장 급배수·배관·보일러·배수막힘·펌프 점검. 동의 전 공사 없음. 물금·웅상·동면 등 양산 전 지역 출동.",
    ogImagePath: "/og/yangsan_sulbi.svg",
  },
  copy: {
    brand: "설비연구소",
    headline: "양산 설비,\n전화 한 통이면 충분합니다",
    support:
      "보이는 증상만으로 단정하지 않습니다.\n계통을 나눠 점검하고, 필요한 범위와 견적부터 안내합니다.",
    ctaPrimary: "간편 문의하기",
    ctaCall: "전화 상담",
    aboutTitle: "양산 설비를 책임지는 현장 연구소",
    aboutBody:
      "급배수·배관·보일러·배수막힘부터 상가·공장 펌프·유틸리티까지. 양산·물금·웅상·동면 관내 출동이 기본입니다.",

    formTitle: "간편 문의",
    formSupport:
      "현장 유형과 증상을 고르고 연락처만 남겨 주세요. 확인 후 빠른 시간 안에 다시 연락드리겠습니다.",
    placeTypeLabel: "현장 유형",
    symptomsLabel: "증상 선택",
    privacyConsentLabel: "개인정보 수집 및 이용에 동의합니다.",
    privacyNotice: {
      purpose: "서비스 문의 접수, 상담 연락 및 일정 안내",
      items: "이름, 연락처, 주소(선택), 현장 유형·증상, 메모(선택)",
      retention: "문의 처리 완료 후 3개월간 보관 후 파기 (관련 법령에 별도 의무가 있는 경우 해당 기간)",
    },
    successMessage: "문의가 접수되었습니다. 빠른 시간 안에 연락드리겠습니다.",
    errorMessage: "접수에 실패했습니다. 전화로 문의해 주세요.",
  },
  symptomOptions: [],
  symptomGroups: [
    {
      id: "home",
      label: "가정",
      options: [
        "누수",
        "하수구·배수 막힘",
        "변기·싱크 막힘",
        "급수·수압 이상",
        "보일러·난방 이상",
        "분배기·온수 이상",
        "수도요금·계량기 이상",
        "동파",
        "정화조·악취",
        "배관 교체·수리",
        "기타",
      ],
    },
    {
      id: "shop",
      label: "상가",
      options: [
        "누수",
        "급수·수압 이상",
        "하수·배수 막힘",
        "주방 배수·그리스 트랩",
        "보일러·온수기 이상",
        "펌프·물탱크 이상",
        "위생기구·수전 이상",
        "배관 보수·교체",
        "동파",
        "기타",
      ],
    },
    {
      id: "factory",
      label: "공장",
      options: [
        "누수",
        "급수·배수 이상",
        "펌프·밸브 이상",
        "배관 보수·교체",
        "수조·냉각탑 이상",
        "공정수·냉각수 이상",
        "증기·온수 배관 이상",
        "오수·정화 설비 이상",
        "동파",
        "기타",
      ],
    },
  ],
  theme: {
    fontQuery: "family=Manrope:wght@600;700&family=Noto+Sans+KR:wght@400;500;700",
    bodyFont: '"Noto Sans KR", sans-serif',
    displayFont: '"Manrope", "Noto Sans KR", sans-serif',
    vars: {
      "--color-bg": "#f0f5fb",
      "--color-bg-elevated": "#ffffff",
      "--color-surface": "#e5eef8",
      "--color-text": "#0b1c33",
      "--color-muted": "#5a6f86",
      "--color-accent": "#1a6fd4",
      "--color-accent-text": "#f5f9ff",
      "--color-line": "rgba(11, 28, 51, 0.1)",
      "--color-hero-veil": "rgba(6, 24, 56, 0.72)",
      "--gradient-page":
        "radial-gradient(900px 420px at 100% 0%, rgba(26, 111, 212, 0.1), transparent 55%), #f0f5fb",
      "--header-bg": "rgba(240, 245, 251, 0.92)",
      "--header-fg": "#0b1c33",
      "--color-navy": "#071833",
      "--color-navy-2": "#0c2a52",
    },
  },
  jsonLd: {
    "@type": "HomeAndConstructionBusiness",
    name: "설비연구소",
    description:
      "양산 설비 · 급배수·배관·보일러·배수막힘. 가정·상가·공장 출동. 계통별 점검과 책임 시공.",

    telephone: "+82-10-1234-5678",
    areaServed: ["양산시", "물금읍", "웅상", "동면", "하북면", "상북면"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "양산시",
      addressRegion: "경상남도",
      addressCountry: "KR",
    },
  },
  media: {
    placeholder: "/hero/yangsan_sulbi.svg",
  },
};
