import { useState, useEffect, useRef } from "react";

// DOOLINKER
import imgDashboard from "../../imports/optimized/dolinker-dashboard.webp";
import imgWorkflow from "../../imports/optimized/dolinker-workflow-canvas.webp";
import imgLogin from "../../imports/optimized/dolinker-login.webp";
import imgDoolinkerDS from "../../imports/optimized/dolinker-design-system.webp";
import imgSettings from "../../imports/optimized/dolinker-settings.webp";
// INTRANET PORTAL
import imgIntranetHome from "../../imports/optimized/intranet-admin.webp";
import imgIntranetUserPortal from "../../imports/optimized/intranet-user-portal.webp";
import imgIntranetTx from "../../imports/optimized/intranet-transaction.webp";
import imgIntranetUser from "../../imports/optimized/intranet-user.webp";
import imgIntranetDS from "../../imports/optimized/intranet-design-system.webp";
// DUALSPACE
import imgDualspaceArch from "../../imports/optimized/dualspace-architecture.webp";
import imgDualspaceCustomer from "../../imports/optimized/dualspace-customer.webp";
import imgDualspacePartner from "../../imports/optimized/dualspace-partner.webp";
// DWORKS
import imgDworksBranding from "../../imports/optimized/dworks-branding.webp";
import imgDworksProduct from "../../imports/optimized/dworks-product.webp";
import imgDworksDSThumbnail from "../../imports/optimized/dworks-ds-thumbnail.jpg";
import imgDworksHiFiWoori from "../../imports/optimized/dworks-hifi-woori.jpg";
import imgDworksIsometric from "../../imports/optimized/dworks-integrated-isometric.jpg";
import imgDworksCSTalk from "../../imports/optimized/dworks-integrated-cstalk.jpg";
import imgDworksCollab from "../../imports/optimized/dworks-integrated-collab.jpg";
import imgDworksDSTheme from "../../imports/optimized/dworks-ds-theme.png";
import imgDworksDSSemantic from "../../imports/optimized/dworks-ds-semantic.png";
import imgDworksDSPalette from "../../imports/optimized/dworks-ds-palette.png";
import imgDworksDSPrimitive from "../../imports/optimized/dworks-ds-primitive.png";
// CS TALK
import imgCSTalkOverview from "../../imports/optimized/cstalk-overview.webp";
import imgCSTalkDashLight from "../../imports/optimized/cstalk-dashboard-light.webp";
import imgCSTalkDashDark from "../../imports/optimized/cstalk-dashboard-dark.webp";
// SALESBRIDGE
import imgSalesBridgeProduct from "../../imports/optimized/salesbridge-product.webp";
import imgSalesBridgeBrand from "../../imports/optimized/salesbridge-brand.webp";
// MOBILE APPS & LMS & COMMERCE
import imgNH from "../../imports/optimized/mobile-nh.webp";
import imgHelloLink from "../../imports/optimized/mobile-hellolink.webp";
import imgHelloLinkMagazine from "../../imports/optimized/mobile-hellolink-magazine.webp";
import imgShaluv from "../../imports/optimized/commerce-shaluv.webp";
import imgShaluvPromotions from "../../imports/optimized/commerce-shaluv-promotions.png";
import imgDime from "../../imports/optimized/mobile-dime.webp";
import imgLMS from "../../imports/optimized/hanmilab-lms.webp";
import imgSamsungFire from "../../imports/optimized/mobile-samsungfire.webp";

export interface ShowcaseSlide {
  src: string;
  alt: string;
  tabLabel: string;
  title: string;
  caption: string;
  fit?: "cover" | "contain";
}

export interface PipelineStep {
  label: string;
}

// ─── Case Story (심화 3단 케이스 스터디 구조) ──────────────────────────
export interface CaseStoryPoint {
  icon?: string;
  title: string;
  desc: string;
  stat?: string;
}

export interface CaseStoryStep {
  step: string;
  title: string;
  desc: string;
}

export interface CaseStory {
  problem: {
    headline: string;
    desc: string;
    points?: CaseStoryPoint[];
  };
  process: {
    headline: string;
    desc?: string;
    steps: CaseStoryStep[];
  };
  result: {
    headline: string;
    desc?: string;
    cards: CaseStoryPoint[];
  };
}

export function renderStoryDesc(text: string) {
  return text.split("\n").map((line, idx, arr) => (
    <span key={idx}>
      {line}
      {idx < arr.length - 1 && <br />}
    </span>
  ));
}

export function renderImpactWithHighlights(text: string) {
  const parts = text.split(/(\d+[\d,.]*(?:[x×배%p억만천원]+|\s*원)?|\d+\s*→\s*\d+)/);
  return parts.map((part, idx) => {
    if (/^(\d+[\d,.]*(?:[x×배%p억만천원]+|\s*원)?|\d+\s*→\s*\d+)$/.test(part)) {
      return (
        <strong key={idx} style={{ color: "#2563EB", fontWeight: 800 }}>
          {part}
        </strong>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  categoryFlow: string;
  keyword: string;
  client: string;
  period: string;
  period2?: string;          // ← 선택. 재직·프리랜서 두 단계 있을 때
  periodLabel?: string;      // ← 첫 번째 기간 레이블 (예: "재직")
  period2Label?: string;     // ← 두 번째 기간 레이블 (예: "프리랜서")
  serviceType: string;
  role: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  story?: CaseStory;         // ← 🌟 심화 3단 케이스 스터디 (Problem ➔ Process ➔ Result)
  pipelineTitle?: string;
  pipelineSteps?: PipelineStep[];
  bullets?: { label: string; text: string }[];
  tags: string[];
  thumbnail: string;
  slides: ShowcaseSlide[];
  isFeatured?: boolean;
  archive?: boolean;
}

// ─── Unified WORK Data (Web + Enterprise + Mobile Apps) ──────────────────────
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "doolinker",
    num: "01",
    title: "DO.LINKER",
    subtitle: "Workflow Automation Platform",
    categoryFlow: "Brand → Product → System",
    keyword: "Enterprise · Workflow Automation",
    client: "도전하는사람들",
    period: "2025.11 ~ 2026.04",
    serviceType: "Workflow Automation Platform",
    role: "Product Design · Brand & Design System",
    description: "Trigger / Action 기반의 복잡한 비즈니스 로직을 비전문가도 직관적으로 구성할 수 있는 워크플로우 자동화 플랫폼을 설계했습니다.",
    challenge: "복잡한 엔터프라이즈 자동화 로직과 설정 과정으로 인해 사용자가 워크플로우의 연결 관계와 실행 상태를 직관적으로 파악하기 어려웠고, 신규 제품으로서 일관된 브랜드와 UI 기준도 필요한 상황이었습니다.",
    approach: "Trigger / Action 기반의 워크플로우 구조와 노드 편집 경험을 설계하고, 생성 → 실행 → 모니터링의 핵심 플로우를 Hi-Fi Prototype으로 구체화했습니다. 동시에 브랜드 아이덴티티와 디자인 시스템을 구축해 제품 전반의 UX/UI 기준을 일관되게 적용했습니다.",
    outcome: "브랜드 아이덴티티부터 Workflow UX, Hi-Fi Prototype, 디자인 시스템까지 신규 제품의 디자인 기반을 구축하고 실제 서비스 출시로 연결했습니다.",
    story: {
      problem: {
        headline: "복잡한 비즈니스 자동화 로직,\n직관적인 캔버스 인터랙션이 필요했습니다",
        desc: "조건 분기와 액션이 얽힌 엔터프라이즈 워크플로우는\n설정 절차가 복잡해 비전문가가 전체 흐름과 실행 상태를 파악하기 어려웠습니다.\n또한 신규 프로덕트로서 브랜드 아이덴티티부터 디자인 시스템까지\n제품의 디자인 토대를 원점부터 일관되게 구축해야 했습니다.",
      },
      process: {
        headline: "노드 기반 워크플로우 UX부터\n제품의 디자인 기반까지 구축했습니다",
        steps: [
          { step: "01", title: "BRAND & LOGIC", desc: "브랜드 아이덴티티 정립\nTrigger / Action 로직 정의" },
          { step: "02", title: "CANVAS UX", desc: "Drag & Drop 노드 편집\n인터랙티브 캔버스 설계" },
          { step: "03", title: "PROTOTYPE", desc: "생성, 실행, 모니터링\nHi-Fi 인터랙션 구체화" },
          { step: "04", title: "DESIGN SYSTEM", desc: "UI 원칙 및 토큰 정의\n제품 컴포넌트 체계화" },
        ],
      },
      result: {
        headline: "신규 제품의 경험 기준을 마련하고\n실제 서비스 출시로 연결했습니다",
        cards: [
          { stat: "5단계", title: "핵심 파이프라인 정립", desc: "Trigger → Action → Monitor" },
          { stat: "UI System", title: "제품 디자인 시스템", desc: "디자인 토큰 & 컴포넌트" },
          { stat: "End-to-End", title: "단독 디자인 리딩", desc: "브랜드 / UX / 시스템 / 출시" },
        ],
      },
    },
    pipelineTitle: "5-STAGE WORKFLOW PIPELINE",
    pipelineSteps: [
      { label: "TRIGGER" },
      { label: "CONDITION" },
      { label: "ACTION" },
      { label: "EXECUTION" },
      { label: "MONITOR" },
    ],
    tags: ["Workflow_Automation", "Interactive_Canvas", "Drag_and_Drop", "Design_System", "Prototype"],
    thumbnail: imgLogin,
    isFeatured: true,
    slides: [
      { src: imgLogin, alt: "Login", tabLabel: "Login & Brand", title: "브랜드의 시각적 기준을 제품 경험까지 연결", caption: "Brand Identity와 Product UI가 분리되지 않도록 시각적 기준 확장" },
      { src: imgWorkflow, alt: "Workflow Builder", tabLabel: "Workflow Builder", title: "Drag & Drop으로 Workflow를 구성하다", caption: "Node 선택 / 연결 / 설정 / 실행 인터랙션을 Hi-Fi 프로토타입으로 빠르게 구체화" },
      { src: imgDashboard, alt: "Dashboard", tabLabel: "Dashboard", title: "자동화의 생성 / 실행 / 모니터링을 하나의 흐름으로", caption: "Trigger / Action 기반 복잡한 자동화 로직을 사용자가 직접 구성하고 상태 확인" },
      { src: imgSettings, alt: "Monitoring", tabLabel: "Monitoring", title: "실시간 연계 상태 및 데이터 흐름 모니터링", caption: "메시지 로그, API 로그, 트랜잭션 처리 상태를 실시간으로 확인하는 모니터링 콘솔" },
      { src: imgDoolinkerDS, alt: "Design System", tabLabel: "Design System", title: "Design Principles에서 Component까지 — 확장 가능한 UI 기준", caption: "FLOW / SIMPLICITY / FLEXIBILITY 3개 핵심 원칙 기반 Foundations 및 제품 컴포넌트 가이드라인 구축" },
    ],
  },
  {
    id: "intranet",
    num: "02",
    title: "MIZUHO PORTAL",
    subtitle: "일본 미즈호(MIZUHO) 은행 사내 포털",
    categoryFlow: "IA → Permission → System",
    keyword: "Financial",
    client: "도전하는사람들",
    period: "2026.03 ~ 2026.04",
    serviceType: "MIZUHO Bank Enterprise Portal",
    role: "Product Design · Design System",
    description: "일본 미즈호(MIZUHO) 은행 사내 포털의 정보구조와 역할 및 권한 기반 접근 체계를 설계하여 사용자 역할별 안전하고 명확한 접근 경험을 구현했습니다.",
    challenge: "다수의 금융 서비스와 대용량 트랜잭션 모듈이 분산되어 있어 역할별 접근 권한과 데이터 구조가 복잡했고, 여러 업무 영역을 명확히 구분하면서도 일관되게 사용할 UI 기준이 필요했습니다.",
    approach: "사용자 역할과 권한을 기준으로 포털 IA를 재구성하고, 대용량 금융 데이터를 위한 공통 Data Grid 패턴을 설계했습니다. 각 업무 모듈별 식별 색상을 정의해 진입 시 헤더에 적용하고, 디자인 토큰과 공통 컴포넌트 기반의 디자인 시스템을 구축했습니다.",
    outcome: "권한 기반의 포털 구조와 공통 UI 기준을 정립해 여러 금융 모듈에서 재사용 가능한 제품 구조와 디자인 시스템의 확장 기반을 마련했습니다.",
    story: {
      problem: {
        headline: "다수 금융 모듈과 복잡한 권한 구조,\n역할에 맞는 정보 접근 설계가 필요했습니다",
        desc: "대용량 트랜잭션과 여러 금융 서비스 모듈이 혼재되어\n사용자 역할별 접근 권한 관리가 복잡했고,\n방대한 금융 데이터를 안정적으로 조회할 일관된 UI 기준이 부재했습니다.",
      },
      process: {
        headline: "역할과 권한 기반의 IA와\n공통 Data Grid 시스템을 설계했습니다",
        steps: [
          { step: "01", title: "ROLE & PERMISSION", desc: "사용자 역할 정의\n접근 권한 체계 설계" },
          { step: "02", title: "DUAL PORTAL", desc: "어드민 총괄 포털 &\n사용자 맞춤 포털 분기" },
          { step: "03", title: "DATA GRID", desc: "대용량 금융 트랜잭션\n전용 그리드 패턴 수립" },
          { step: "04", title: "DESIGN SYSTEM", desc: "AppHeader & 토큰 기반\n컴포넌트 가이드 구축" },
        ],
      },
      result: {
        headline: "역할과 권한 기반의 접근 구조를 정립하고\n금융 모듈의 확장 기반을 마련했습니다",
        cards: [
          { stat: "Role IA", title: "역할/권한 아키텍처", desc: "사용자별 접근 권한 체계화" },
          { stat: "2종", title: "이중 포털 체계", desc: "어드민 총괄 / 사용자 맞춤" },
          { stat: "Figma", title: "금융 토큰 시스템", desc: "AppHeader & DataGrid" },
        ],
      },
    },
    pipelineTitle: "5-TIER PERMISSION ARCHITECTURE",
    pipelineSteps: [
      { label: "SUPER ADMIN" },
      { label: "SERVICE ADMIN" },
      { label: "OPERATOR" },
      { label: "USER" },
      { label: "GUEST" },
    ],
    tags: ["Enterprise_Portal", "Information_Architecture", "Permission_UX", "Data_Grid", "Design_System"],
    thumbnail: imgIntranetHome,
    slides: [
      { src: imgIntranetHome, alt: "어드민 포털", tabLabel: "어드민 총괄 포털", title: "금융 이중 포털 어드민 대시보드", caption: "전체 금융 서비스 모듈의 활성화 상태와 트랜잭션 장애 지표 실시간 모니터링" },
      { src: imgIntranetUserPortal, alt: "사용자 포털", tabLabel: "사용자 맞춤 포털", title: "역할 기반 인가 포털", caption: "부서 및 권한에 따라 인가된 금융 서비스만 접근하도록 분기 처리" },
      { src: imgIntranetUser, alt: "사용자 관리", tabLabel: "권한 관리 체계", title: "사용자 역할과 정보 접근 범위를 제품 구조로", caption: "업무 포털의 정보구조와 권한 체계를 설계해 사용자별 접근 경험 명확화" },
      { src: imgIntranetDS, alt: "Design System", tabLabel: "Design System Spec", title: "Mizuho Design System — AppHeader 명세", caption: "Figma Variables 기반 컬러 토큰 매핑, 컴포넌트 해부도(Anatomy) 및 소스코드 매핑 가이드라인 구축" },
    ],
  },
  {
    id: "dworks-integrated-product",
    num: "03",
    title: "DWORKS INTEGRATED PRODUCT",
    subtitle: "Multi-Product UX Architecture & Direction (2025.01~07)",
    categoryFlow: "Product Analysis → UX Architecture → Integrated UX",
    keyword: "Enterprise",
    client: "스펙트라",
    period: "2025.01 ~ 2025.07",
    serviceType: "Enterprise Multi-Product Platform",
    role: "Product Design · UX Architecture",
    description: "스펙트라 재직 중(2025.01~07) 분산 운영되던 DWorks 제품군(CS Talk, SalesBridge, Workflow)을 단일 제품 경험으로 통합하기 위한 멀티 프로덕트 UX 아키텍처를 설계했습니다.",
    challenge: "CS Talk, SalesBridge, Workflow 등 개별적으로 발전해온 DWorks 제품군이 서로 다른 사용자 흐름과 화면 구조를 가지고 있어, 엔터프라이즈 고객 관점의 일관된 제품 경험을 제공하기 어려웠습니다.",
    approach: "기능 명세를 사용자 업무 맥락 중심으로 재구성하고, 공통 권한, 상태, 대화 흐름을 기준으로 멀티 프로덕트 통합 IA와 와이어프레임을 구조화하여 제품군이 공유할 수 있는 UX 방향을 정립했습니다.",
    outcome: "DWorks 멀티 프로덕트 통합 IA와 설계안을 완성해 제품군 로드맵의 기준점을 마련하고, 이후 B2B 제안과 제품 확장에 활용할 수 있는 통합 UX 기반을 구축했습니다.",
    story: {
      problem: {
        headline: "파편화된 엔터프라이즈 3개 제품군,\n단일 사용자 경험으로 묶는 통합 IA가 필요했습니다",
        desc: "CS Talk(상담), SalesBridge(협업), Workflow(자동화)가 각기 다른 구조로 분산 운영되어\n기업 고객 관점에서 업무 흐름이 단절되고 제품 간 시너지를 내기 어려웠습니다.\n제품군을 아우르는 상위 UX 아키텍처가 필요했습니다.",
      },
      process: {
        headline: "공통 권한과 대화 흐름을 기준으로\n멀티 프로덕트 통합 아키텍처를 설계했습니다",
        steps: [
          { step: "01", title: "ANALYSIS", desc: "3개 제품군 기능 명세\n사용자 업무 맥락 분석" },
          { step: "02", title: "IA ARCHITECTURE", desc: "공통 권한, 상태, 티켓\n기반 통합 IA 수립" },
          { step: "03", title: "WORKSPACE UX", desc: "1:1 상담, 협업, 자동화\n통합 작업공간 설계" },
          { step: "04", title: "GOVERNANCE", desc: "제품군 로드맵 &\n공통 UX 가이드 정립" },
        ],
      },
      result: {
        headline: "제품군의 일관된 UX 기준을 마련하고\nB2B 제안에 활용할 통합 제품 기반을 구축했습니다",
        cards: [
          { stat: "3개", title: "제품군 UX 통합", desc: "CS Talk / Sales / Workflow" },
          { stat: "통합 IA", title: "공통 제품 구조 수립", desc: "상태 / 권한 / 작업공간 일원화" },
          { stat: "B2B 기반", title: "통합 제품 기반 구축", desc: "제안 및 확장 토대 수립" },
        ],
      },
    },
    pipelineTitle: "INTEGRATED PRODUCT UX FLOW",
    pipelineSteps: [
      { label: "PRODUCT ANALYSIS" },
      { label: "UX ARCHITECTURE" },
      { label: "INTEGRATED IA" },
      { label: "DESIGN GOVERNANCE" },
    ],
    tags: ["Multi_Product", "B2B_Enterprise", "UX_Architecture", "Integrated_IA", "Spectra"],
    thumbnail: imgDworksIsometric,
    slides: [
      { src: imgDworksIsometric, alt: "DWorks 멀티 프로덕트 통합 화면", tabLabel: "통합 제품 전경", title: "DWorks — 멀티 프로덕트 통합 UX 아키텍처", caption: "스펙트라 재직 중(2025.01~07) CS Talk, SalesBridge, Workflow 제품군을 단일 사용자 경험으로 묶는 통합 화면 및 업무 체계 수립" },
      { src: imgDworksCSTalk, alt: "DWorks 통합 상담 대화 화면", tabLabel: "통합 상담 대화", title: "DWorks — 통합 상담 대화 화면", caption: "1:1 고객 상담(LiveTalk), 티켓 정보, 상담 대화 이력을 일원화한 통합 상담 작업 공간" },
      { src: imgDworksCollab, alt: "DWorks 협업 대화 화면", tabLabel: "파트너 협업 대화", title: "DWorks — 파트너 협업 대화 화면", caption: "상담원과 본사-파트너사 간 다자간 협업 및 업무 공유 화면 설계" },
    ],
  },
  {
    id: "dworks-woori-capital",
    num: "04",
    title: "우리금융캐피탈",
    subtitle: "우리금융캐피탈 B2B 수주 DWorks Hi-Fi Prototype (2025.08~09)",
    categoryFlow: "Financial Spec → 3-Panel Layout → Hi-Fi Prototype",
    keyword: "Financial · Enterprise",
    client: "스펙트라",
    period: "2025.08 ~ 2025.09",
    serviceType: "Financial Enterprise Hi-Fi Prototype",
    role: "Lead Product Designer · Hi-Fi Prototyping",
    description: "스펙트라 퇴사 후 프리랜서(2025.08~09)로 참여하여, 우리금융캐피탈 B2B 제안을 위한 Hi-Fi Prototype을 납품했으며, 복잡한 상담 및 금융 업무 요구사항을 실제 업무 흐름을 확인할 수 있는 인터랙션으로 구체화했습니다.",
    challenge: "우리금융캐피탈의 복잡한 금융 심사, 상담, 오토론 업무 요구사항을 충족하고, 도입 시 실제 운영 환경을 직관적으로 확인할 수 있는 실서비스 수준의 Hi-Fi Prototype이 필요했습니다.",
    approach: "실제 상담원과 파트너, AI 챗봇이 유기적으로 연동되는 LiveTalk 대화 화면을 설계하고, 우측 패널에 참여자 정보, 할 일(To-do), 대화 이력을 통합해 실제 업무 흐름을 확인할 수 있는 Hi-Fi Prototype으로 구체화했습니다.",
    outcome: "우리금융캐피탈 B2B 제안을 위한 Hi-Fi Prototype을 납품했으며, 복잡한 상담 및 금융 업무 요구사항을 실제 업무 흐름을 확인할 수 있는 인터랙션으로 구체화했습니다.",
    story: {
      problem: {
        headline: "대형 금융 B2B 제안을 위한,\n실서비스 수준의 Hi-Fi 프로토타입이 필요했습니다",
        desc: "우리금융캐피탈의 복잡한 금융 심사, 상담, 오토론 업무 요구사항을 충족하고,\n도입 시 실제 운영 환경을 직관적으로 확인할 수 있는\n실서비스 수준의 Hi-Fi Prototype이 요구되었습니다.",
      },
      process: {
        headline: "AI 챗봇, 상담원, 파트너를 잇는 3-Panel 구조와\n정밀한 인터랙션을 완성했습니다",
        steps: [
          { step: "01", title: "FINANCIAL SPEC", desc: "오토론, 금융 심사\n업무 요구사항 분석" },
          { step: "02", title: "AI WORKFLOW", desc: "챗봇 → 상담원 → 파트너\n다자간 연동 흐름 설계" },
          { step: "03", title: "3-PANEL LAYOUT", desc: "참여자, 할 일, 이력을\n통합한 3열 작업 공간" },
          { step: "04", title: "WINNING PROTOTYPE", desc: "실제 데이터 기반의\n정밀 인터랙션 구현" },
        ],
      },
      result: {
        headline: "B2B 제안을 위한 핵심 산출물을 완성하고\n복잡한 금융 업무 경험을 구체화했습니다",
        cards: [
          { stat: "Hi-Fi", title: "실서비스급 프로토타입", desc: "전체 대화 / 업무 플로우" },
          { stat: "3-Panel", title: "복합 금융 업무 레이아웃", desc: "상담 / 할일 / 이력 통합" },
          { stat: "B2B Spec", title: "핵심 산출물 완성", desc: "퇴사 후 프리랜서 완결" },
        ],
      },
    },
    pipelineTitle: "B2B WINNING HI-FI PROTOTYPE PIPELINE",
    pipelineSteps: [
      { label: "FINANCIAL SPEC" },
      { label: "CHAT & AI WORKFLOW" },
      { label: "3-PANEL LAYOUT" },
      { label: "WINNING PROTOTYPE" },
    ],
    tags: ["Financial_Enterprise", "B2B_Winning", "Hi_Fi_Prototype", "Woori_Capital", "Freelance"],
    thumbnail: imgDworksHiFiWoori,
    slides: [
      { src: imgDworksHiFiWoori, alt: "우리금융캐피탈 B2B 수주용 DWorks Hi-Fi Prototype", tabLabel: "Hi-Fi Prototype", title: "우리금융캐피탈 — B2B 수주를 위한 DWorks Hi-Fi Prototype", caption: "퇴사 후 프리랜서(2025.08~09) 지원 / AI 챗봇, 상담원, 파트너 협업 및 우측 할일/이력 패널을 망라한 실서비스급 인터랙티브 화면" },
    ],
  },
  {
    id: "dualspace",
    num: "05",
    title: "DUALSPACE",
    subtitle: "Unified Communication Platform — Product Direction & Hi-Fi Prototype (2024)",
    categoryFlow: "Problem → Structure → Hi-Fi Prototype",
    keyword: "Enterprise",
    client: "스펙트라",
    period: "2024.09 ~ 2024.10",
    serviceType: "Unified Enterprise Platform",
    role: "Product Design · Product Direction",
    description: "분리되어 있던 1:1 고객상담과 N:N 파트너 협업을 하나의 단일 인터페이스로 통합하여 업무 연속성을 완성했습니다.",
    challenge: "1:1 고객 상담(CS Talk)과 N:N 파트너 협업(SalesBridge)이 별도 제품으로 운영되어, 상담 중 협업이 필요한 경우 제품을 이동해야 했고 대화 맥락과 업무 흐름이 단절되었습니다.",
    approach: "두 제품의 기능을 단순 통합하기보다 고객, 상담원, 파트너가 누구와 어떤 목적으로 연결되는지를 먼저 정의했습니다. 이를 기반으로 상담과 협업을 하나의 흐름으로 연결하는 통합 IA와 권한 구조를 설계하고, Hi-Fi Prototype으로 제품 방향을 구체화했습니다.",
    outcome: "기획 및 개발팀과 Hi-Fi Prototype을 기반으로 제품 방향을 공유하고, CS Talk와 SalesBridge를 연결하는 통합 제품의 MVP 범위와 핵심 사용자 흐름을 구체화했습니다.",
    story: {
      problem: {
        headline: "분리된 상담과 협업,\n단절된 업무 맥락을 연결해야 했습니다",
        desc: "1:1 고객 상담(CS Talk)과 N:N 파트너 협업(SalesBridge)이 별도 제품으로 분리되어 있어,\n상담 중 협업이 필요할 때마다 제품 간 이동과 대화 맥락 단절이 발생했습니다.\n\n고객, 상담원, 파트너의 연결 목적과 권한 구조를 재정의하여,\n상담과 협업을 하나의 단일 인터페이스로 통합하는 방향으로 전환했습니다.",
      },
      process: {
        headline: "복합적인 협업 관계를\n단일 통합 인터페이스로 구조화했습니다",
        steps: [
          { step: "01", title: "RELATION", desc: "사용자 관계 정의\n역할 및 권한 구조화" },
          { step: "02", title: "UNIFIED IA", desc: "상담 및 협업 동선\n단일 화면 IA 설계" },
          { step: "03", title: "WORKSPACE", desc: "Dualspace Hub\n업무 연속성 완성" },
          { step: "04", title: "PROTOTYPE", desc: "Hi-Fi 인터랙션\nMVP 범위 제안" },
        ],
      },
      result: {
        headline: "통합 프로토타입으로\n차세대 제품 방향을 명확히 제시했습니다",
        cards: [
          { stat: "1 Workspace", title: "단일 작업 공간 통합", desc: "상담과 협업의 맥락 단절 해소" },
          { stat: "MVP Ready", title: "핵심 흐름 구체화", desc: "기획 및 개발팀과 합의된 스펙" },
          { stat: "Hi-Fi", title: "인터랙션 프로토타입", desc: "실제 동작 가능한 검증 체계" },
        ],
      },
    },
    pipelineTitle: "UNIFIED PRODUCT ECOSYSTEM",
    pipelineSteps: [
      { label: "CS TALK (1:1)" },
      { label: "SALESBRIDGE (N:N)" },
      { label: "DUALSPACE HUB" },
      { label: "HI-FI PROTOTYPE" },
    ],
    tags: ["Unified_Communication", "MVP_Leading", "UX_Architecture", "Hi_Fi_Prototype", "Sole_Design"],
    thumbnail: imgDualspaceCustomer,
    slides: [
      { src: imgDualspaceArch, alt: "통합 생태계", tabLabel: "통합 생태계", title: "상담과 협업 — 분리된 두 제품을 하나의 경험으로", caption: "CS Talk(1:1 상담)과 SalesBridge(N:N 협업)을 통합한 신규 서비스 구조", fit: "contain" },
      { src: imgDualspaceCustomer, alt: "1:1 상담", tabLabel: "1:1 상담 뷰", title: "사용자 관계, 역할, 권한, 정보 접근 구조화", caption: "복수 사용자 기반의 복잡한 관계를 제품의 대화 흐름과 접근 구조로 전환" },
      { src: imgDualspacePartner, alt: "파트너 협업", tabLabel: "파트너 협업 뷰", title: "Prototype으로 제품 방향을 구체화", caption: "요구사항을 화면으로 옮기기보다 유사 기능과 우선순위를 정리해 MVP 범위 제안" },
    ],
  },
  {
    id: "dworks-design-system",
    num: "06",
    title: "DWORKS DESIGN SYSTEM",
    subtitle: "Multi-Product Design System (Figma Variables & Components 26)",
    categoryFlow: "Foundation → Token Variables → Components 26",
    keyword: "Design System",
    client: "스펙트라",
    period: "2024.01 ~ 2024.06",
    serviceType: "Enterprise Design System",
    role: "Product Design · Design System",
    description: "Figma Variables 기반 Foundations 6종 및 공통 Components 26종을 구축하여 스펙트라 전사 제품군에서 활용할 수 있는 공통 디자인 기준을 정립했습니다.",
    challenge: "멀티 프로덕트 전반에서 UI 패턴과 컴포넌트가 개별적으로 관리되어 신규 화면 설계 시 디자인 일관성을 유지하기 어려웠습니다.",
    approach: "제품별 UI를 개별 관리하는 대신, 여러 제품에서 확장·재사용할 수 있도록 Figma Variables 기반 토큰 체계를 정의했습니다. 이를 Foundations 6종과 공통 Components 26종으로 구조화해 제품 설계에 활용할 수 있는 기준을 정립했습니다.",
    outcome: "Figma Variables 기반의 Foundation과 Component 체계를 정립해 이후 제품 설계에서 일관되게 활용할 수 있는 공통 디자인 기준을 마련했습니다.",
    story: {
      problem: {
        headline: "멀티 프로덕트의 UI 파편화,\n공통 디자인 기준이 필요했습니다",
        desc: "여러 제품군에서 UI 패턴과 컴포넌트가 개별적으로 관리되어\n제품 간 디자인 일관성을 유지하기 어려웠습니다.\n\nFigma Variables 기반의 토큰 체계와 공통 컴포넌트를 정의해\n여러 제품 설계에 활용할 수 있는 공통 디자인 기준을 정립했습니다.",
      },
      process: {
        headline: "Figma Variables와 공통 컴포넌트로\n제품군의 디자인 시스템 기반을 구축했습니다",
        steps: [
          { step: "01", title: "FOUNDATIONS", desc: "기초 디자인 토큰\n색상, 간격, 타이포 정의" },
          { step: "02", title: "VARIABLES", desc: "Figma 변수 체계\nTheme, Semantic 분기" },
          { step: "03", title: "COMPONENTS", desc: "공통 26종 컴포넌트\n상태별 가이드 수립" },
          { step: "04", title: "UI PATTERNS", desc: "공통 UI 패턴 정리\n제품 설계 기준 체계화" },
        ],
      },
      result: {
        headline: "체계화된 디자인 시스템으로\n제품 설계의 공통 기준을 정립했습니다",
        cards: [
          { stat: "6 Foundations", title: "기초 토큰 체계", desc: "Primitive / Theme / Semantic" },
          { stat: "26 Components", title: "공통 UI 컴포넌트", desc: "다양한 제품 설계에 재사용" },
        ],
      },
    },
    pipelineTitle: "DESIGN SYSTEM TOKENS & COMPONENTS",
    pipelineSteps: [
      { label: "FOUNDATIONS" },
      { label: "VARIABLES" },
      { label: "COMPONENTS 26" },
      { label: "UI PATTERNS" },
    ],
    tags: ["Design_System", "Figma_Variables", "UI_Components", "Design_Tokens", "UI_Patterns"],
    thumbnail: imgDworksDSThumbnail,
    slides: [
      { src: imgDworksDSThumbnail, alt: "DWorks 디자인 시스템", tabLabel: "디자인 시스템 개요", title: "DWorks — 멀티 프로덕트 공통 디자인 시스템 설계", caption: "Figma Variables 기반 Foundations 6종 및 공통 Components 26종 디자인 시스템 가이드 수립" },
      { src: imgDworksDSPalette, alt: "기초 컬러 팔레트", tabLabel: "기초 컬러 팔레트", title: "기초 컬러 가이드라인 수립 (Primitive, Theme, Semantic)", caption: "Figma Foundation 기반의 체계화된 세부 컬러 칩 분배 및 일관성 확보" },
      { src: imgDworksDSPrimitive, alt: "Primitive 컬렉션", tabLabel: "Primitive 토큰", title: "Figma Variables — Primitive 컬러 토큰 수립", caption: "전사적으로 공통 사용되는 기초 시스템 기본 색상 및 투명도(Alpha) 토큰 변수 정의" },
      { src: imgDworksDSTheme, alt: "Theme 컬렉션", tabLabel: "Theme 토큰", title: "Figma Variables — 브랜드/제품별 Theme 컬러 토큰 분기", caption: "salesBridge, workflow, guestZone, csTalk의 독립적 색상 테마를 하나의 시스템 내부로 통합" },
      { src: imgDworksDSSemantic, alt: "Semantic 컬렉션", tabLabel: "Semantic 토큰", title: "Figma Variables — 의미 기반 Semantic 컬러 토큰 매핑", caption: "다크/라이트 모드, 배경, 테두리, 텍스트 등 실제 컴포넌트의 역할과 의미에 대응되는 의미 토큰 수립" },
    ],
  },
  {
    id: "salesbridge",
    num: "07",
    title: "SALESBRIDGE",
    subtitle: "Desktop Web (React) & Mobile PWA Collaboration Platform (2023)",
    categoryFlow: "Desktop Web (React) · Mobile PWA · Multi-User",
    keyword: "Enterprise",
    client: "스펙트라",
    period: "2023.01 ~ 2023.12",
    serviceType: "Desktop React Platform & Mobile PWA",
    role: "Product Design · Brand Identity",
    description: "본사-파트너사 간 다자간 소통을 위한 데스크톱 React 기반 협업 플랫폼을 구축하고, 추가로 모바일 PWA 앱을 지원하여 기기 제약 없는 협업 환경을 완성했습니다.",
    challenge: "본사와 파트너사 간 대화, 파일 공유, 프로젝트 관리가 여러 업무 흐름으로 분산되어 있었고, 데스크톱 중심의 업무 환경과 이동 중 모바일 접근성을 하나의 제품 경험으로 연결해야 했습니다.",
    approach: "파트너별로 분산된 대화, 파일, 프로젝트 정보를 하나의 협업 맥락에서 이어갈 수 있도록 제품 구조를 설계하고, SalesBridge 로고와 브랜드 아이덴티티를 구축해 제품 UI까지 일관된 시각 기준으로 연결했습니다. 데스크톱 웹을 중심으로 설계하고 이동 중에도 핵심 업무를 이어갈 수 있도록 반응형 PWA 경험으로 확장했습니다.",
    outcome: "브랜드 아이덴티티부터 제품 UX/UI까지 일관된 경험을 구축해 데스크톱 웹 서비스를 출시하고 PWA까지 확장했으며, 디바이스가 달라져도 대화, 파일, 프로젝트 업무를 이어갈 수 있는 협업 경험을 구현했습니다.",
    story: {
      problem: {
        headline: "분산된 협업 채널과 소통 지연,\n기기 제약 없는 플랫폼이 필요했습니다",
        desc: "본사와 파트너사 간의 대화, 파일 공유, 프로젝트 관리가 여러 채널로 파편화되어,\n업무 맥락 파악이 어렵고 소통 지연이 빈번하게 발생했습니다.\n\n데스크톱 React 기반의 고반응형 협업 플랫폼과 모바일 PWA를 함께 지원하여,\n언제 어디서나 이어지는 다자간 협업 환경을 구축했습니다.",
      },
      process: {
        headline: "데스크톱 웹과 모바일 PWA를 연결하는\n일관된 협업 경험을 설계했습니다",
        steps: [
          { step: "01", title: "DESKTOP WEB", desc: "React 기반 플랫폼\n고반응형 화면 설계" },
          { step: "02", title: "MULTI-USER", desc: "다자간 협업 동선\n프로젝트 및 파일 관리" },
          { step: "03", title: "MOBILE PWA", desc: "반응형 PWA 지원\n이동 중 업무 연속성" },
          { step: "04", title: "BRANDING", desc: "아이덴티티 가이드\n일관된 시각 기준 확립" },
        ],
      },
      result: {
        headline: "웹과 PWA로 확장해\n기기 간 이어지는 협업 경험을 구현했습니다",
        cards: [
          { stat: "Web + PWA", title: "크로스 플랫폼 지원", desc: "데스크톱 및 모바일 PWA 구축" },
          { stat: "Multi-User", title: "다자간 협업 최적화", desc: "대화 / 파일 / 프로젝트 통합 관리" },
          { stat: "1 Brand", title: "브랜드-제품 일원화", desc: "아이덴티티부터 UI까지 완성" },
        ],
      },
    },
    pipelineTitle: "MULTI-USER COLLABORATION FLOW",
    pipelineSteps: [
      { label: "DESKTOP REACT WEB" },
      { label: "MULTI-USER FLOW" },
      { label: "MOBILE PWA APP" },
      { label: "BRAND IDENTITY" },
    ],
    tags: ["Desktop_Web", "React_Platform", "Mobile_PWA", "Multi_User_Collaboration", "Brand_Identity"],
    thumbnail: imgSalesBridgeProduct,
    slides: [
      { src: imgSalesBridgeProduct, alt: "협업 플랫폼", tabLabel: "데스크톱 React 플랫폼", title: "SALESBRIDGE — 데스크톱 React 협업 플랫폼", caption: "사용자 역할과 대화 흐름 기반의 React 데스크톱 플랫폼 및 고반응형 협업 화면 설계" },
      { src: imgSalesBridgeBrand, alt: "브랜드 아이덴티티", tabLabel: "브랜드 & 모바일 PWA", title: "브랜드 아이덴티티 & 모바일 PWA 지원", caption: "데스크톱 웹과 모바일 PWA를 아우르는 브랜드 심볼과 워드마크 및 일관된 디자인 시스템 구축", fit: "contain" },
    ],
  },
  {
    id: "dworks-brand-identity",
    num: "08",
    title: "DWORKS BRAND IDENTITY",
    subtitle: "Enterprise DX Rebranding & Official Corporate Website (2023)",
    categoryFlow: "DX Vision → Logo Redesign → Brand Guide → Official Web",
    keyword: "Brand Identity",
    client: "스펙트라",
    period: "2023.06 ~ 2023.12",
    serviceType: "Enterprise DX Rebranding & Web",
    role: "Brand Identity · Visual Direction",
    description: "스펙트라의 엔터프라이즈 DX(디지털 전환) 비즈니스 도약을 선언하고, 파편화된 제품군을 아우르는 통합 브랜드 'DWorks' 아이덴티티와 공식 기업 홈페이지를 구축했습니다.",
    challenge: "개별 제품마다 서로 다른 시각 언어를 사용하면서, 스펙트라가 새롭게 추진하는 엔터프라이즈 DX 제품군을 하나의 브랜드로 일관되게 인식시키기 어려웠습니다.",
    approach: "개별 제품을 각각 브랜딩하기보다 DWorks를 상위 브랜드로 정의하고, 제품군이 공유할 수 있는 네이밍, 심볼, 로고, 컬러, 톤앤매너 기준을 정립했습니다. 이를 브랜드 가이드와 공식 웹사이트까지 일관되게 확장했습니다.",
    outcome: "DWorks 제품군에 공통으로 적용할 수 있는 브랜드 아이덴티티 기준을 마련하고, 공식 웹사이트까지 동일한 시각 언어를 적용해 제품과 기업 채널 간 브랜드 일관성을 확보했습니다.",
    story: {
      problem: {
        headline: "엔터프라이즈 DX 비즈니스 도약,\n통합 브랜드 아이덴티티가 필요했습니다",
        desc: "개별 제품마다 서로 다른 시각 언어를 사용하여,\n스펙트라의 엔터프라이즈 DX 솔루션을 하나의 통합 브랜드로 인식시키기 어려웠습니다.\n\n상위 브랜드 'DWorks'의 아이덴티티와 가이드라인을 정립하고,\n공식 기업 웹사이트까지 일관된 시각 경험을 완성했습니다.",
      },
      process: {
        headline: "DX 비전부터 공식 웹사이트까지\n일관된 브랜드 언어를 구축했습니다",
        steps: [
          { step: "01", title: "DX VISION", desc: "기업 비즈니스 방향성\n브랜드 포지셔닝 수립" },
          { step: "02", title: "LOGO SYSTEM", desc: "심볼 & 워드마크\n로고 시스템 리디자인" },
          { step: "03", title: "BRAND GUIDE", desc: "시각 언어 표준화\n컬러 및 타이포 가이드" },
          { step: "04", title: "OFFICIAL WEB", desc: "공식 웹사이트 구축\n디지털 브랜딩 확장" },
        ],
      },
      result: {
        headline: "통합 브랜드 아이덴티티를 수립하고\n제품군의 일관된 브랜드 기준을 마련했습니다",
        cards: [
          { stat: "DX Brand", title: "통합 브랜드 체계 확립", desc: "파편화된 제품군 시각 언어 통일" },
          { stat: "Full System", title: "브랜드 가이드라인", desc: "로고, 컬러, 타이포 표준 수립" },
          { stat: "Official Web", title: "공식 웹사이트 론칭", desc: "기업 디지털 브랜딩 완성" },
        ],
      },
    },
    pipelineTitle: "ENTERPRISE DX REBRANDING FLOW",
    pipelineSteps: [
      { label: "DX VISION" },
      { label: "LOGO REDESIGN" },
      { label: "BRAND GUIDE" },
      { label: "OFFICIAL DX WEB" },
    ],
    tags: ["DX_Rebranding", "Brand_Identity", "Digital_Transformation", "Official_Website", "Logo_Redesign"],
    thumbnail: imgDworksBranding,
    slides: [
      { src: imgDworksBranding, alt: "DWorks 엔터프라이즈 DX 리브랜딩", tabLabel: "DX 리브랜딩 & 웹", title: "DWorks — 엔터프라이즈 DX 도약을 위한 통합 리브랜딩", caption: "DX 비즈니스 도약을 위한 통합 브랜드 로고 리디자인 및 브랜드 가이드라인 수립, 회사 공식 기업 홈페이지 디자인 확장" },
    ],
  },
  {
    id: "cstalk",
    num: "09",
    title: "CS TALK",
    subtitle: "Customer Support Dashboard & Component Modularization (2022~2023)",
    categoryFlow: "UX개선 → Component → Design QA",
    keyword: "Enterprise",
    client: "스펙트라",
    period: "2022.10 ~ 2023.06",
    serviceType: "Customer Support Dashboard",
    role: "Product Design · UX Architecture",
    description: "상담 업무의 정보 탐색과 상태 파악 흐름을 개선하고, 분산 구현된 테마와 반복 UI를 모듈형 컴포넌트로 체계화했습니다.",
    challenge: "고객사별 요구와 상담 기능이 지속적으로 추가되면서 화면 정보 구조가 복잡해졌고, 기존 Light/Dark 테마가 컴포넌트 기반이 아닌 개별 화면 단위로 분산 개발되어 일관된 유지보수가 어려웠습니다.",
    approach: "상담원의 업무 흐름과 정보 우선순위를 기준으로 목록, 상세, 대시보드 구조를 재정의했습니다. 화면별로 흩어져 있던 반복 UI와 Light/Dark 테마 상태를 통합된 모듈형 컴포넌트 체계로 재구축하고, Design QA를 통해 구현 완성도를 검증했습니다.",
    outcome: "목록, 상세, 대시보드에 공통으로 적용할 수 있는 컴포넌트 기준을 마련해 분산된 테마와 UI를 일원화하고, Design QA를 통해 실제 구현에서도 디자인 기준이 유지되도록 했습니다.",
    story: {
      problem: {
        headline: "기능 누적과 분산 개발로,\n통합된 컴포넌트 체계가 필요했습니다",
        desc: "고객사별 요구와 기능 추가가 반복되면서\n목록, 상세, 대시보드의 정보 구조가 과밀해졌습니다.\n특히 기존 Light/Dark 테마와 UI가 화면별로 분산 구현되어 있어,\n일관된 제품 경험과 유지보수를 위한 컴포넌트 체계화가 필요했습니다.",
      },
      process: {
        headline: "업무 흐름 중심의 구조 재정의와\n분산된 테마의 모듈형 컴포넌트화를 주도했습니다",
        steps: [
          { step: "01", title: "WORKFLOW", desc: "상담 업무 흐름 분석\n정보 우선순위 재정의" },
          { step: "02", title: "STRUCTURE", desc: "목록, 상세, 대시보드\n핵심 화면 구조 정돈" },
          { step: "03", title: "COMPONENT", desc: "분산된 테마와 반복 UI\n모듈형 컴포넌트 체계화" },
          { step: "04", title: "DESIGN QA", desc: "화면별 가이드 수립\n개발 구현 정합성 검증" },
        ],
      },
      result: {
        headline: "분산된 UI와 테마를 체계화하고\n일관된 제품 운영 기준을 마련했습니다",
        cards: [
          { stat: "3대", title: "핵심 화면 체계 정비", desc: "목록 / 상세 / 대시보드" },
          { stat: "2종", title: "분산 테마 컴포넌트화", desc: "Light / Dark 일원화" },
          { stat: "100%", title: "Design QA 완결", desc: "설계 기준과 구현 일치" },
        ],
      },
    },
    pipelineTitle: "OPERATION OPTIMIZATION",
    pipelineSteps: [
      { label: "LIST / DETAIL" },
      { label: "DASHBOARD" },
      { label: "COMPONENTS" },
      { label: "DESIGN QA" },
    ],
    tags: ["Customer_Support", "Dashboard_Redesign", "Component_Modularization", "Design_QA"],
    thumbnail: imgCSTalkOverview,
    slides: [
      { src: imgCSTalkOverview, alt: "대표 화면", tabLabel: "상담 포털 대표 화면", title: "CS TALK — 대표 화면", caption: "상담 업무의 정보 탐색과 상태 파악을 개선하고, 반복 UI를 모듈화해 운영 체계 정리" },
      { src: imgCSTalkDashLight, alt: "Light Theme", tabLabel: "Light Dashboard", title: "상담 목록 / 대시보드 / 컴포넌트", caption: "화면별로 분산 구현되던 Light Theme UI를 재사용 가능한 모듈형 컴포넌트 체계로 통합" },
      { src: imgCSTalkDashDark, alt: "Dark Theme", tabLabel: "Dark Dashboard", title: "다크 테마 모니터링 컴포넌트", caption: "대시보드 구조 재정의 및 분산된 Dark Theme 상태를 컴포넌트 기반으로 일원화" },
    ],
  },
  {
    id: "commerce-shaluv",
    num: "10",
    title: "SHALUV",
    subtitle: "Kids Fashion Niche Rebranding & Multi-Channel Growth (2019~2022)",
    categoryFlow: "Niche Concept → Lovely Mood Rebranding → 14x Traffic → Growth",
    keyword: "Commerce",
    client: "어스투",
    period: "2019.08 ~ 2022.09",
    serviceType: "E-Commerce Multi-Channel Brand",
    role: "Brand Design · E-Commerce",
    description: "여아 부모를 정조준한 러블리 무드 니치 브랜드 리뉴얼과 상품 컨셉 기획을 주도하여 고객 유입 14배 성장 및 연매출 1억을 달성했습니다.",
    challenge: "스마트스토어, 쿠팡, 카카오쇼핑 등 경쟁이 높은 이커머스 환경에서 상품 나열 중심의 판매 방식만으로는 차별화가 어려웠고, 타깃 고객에게 명확한 인상을 전달할 브랜드 콘셉트가 필요했습니다.",
    approach: "샤스커트 레깅스를 주력 상품으로 기획하고, 여자아이 의류를 구매하는 부모를 핵심 고객으로 정의해 Lovely Mood 브랜드 콘셉트를 수립했습니다. KATRI 안전 시험 및 인증을 거쳐 제품 판매 기반을 마련하고, 브랜드 아이덴티티와 상품 비주얼을 스마트스토어, 자사몰, 쿠팡, 카카오쇼핑 등 주요 채널에 일관되게 적용했습니다.",
    outcome: "상품 기획부터 브랜드 구축, 멀티채널 판매 및 운영까지 직접 연결하며 일관된 브랜드 경험과 운영 체계를 구축했고, 운영 기간 동안 고객 유입 확대와 연매출 1억 원 규모의 성장을 확인했습니다.",
    story: {
      problem: {
        headline: "포화된 키즈 패션 시장,\n브랜드 차별화가 필요했습니다",
        desc: "유사 상품과 가격 경쟁이 심한 시장에서\n단일 판매 채널 중심의 운영만으로는 성장에 한계가 있었습니다.\n\n여아 부모를 핵심 타깃으로 정의하고,\n상품과 콘텐츠 전반에 일관된 브랜드 경험을 구축하는 방향으로 전환했습니다.",
      },
      process: {
        headline: "타깃 정의부터 판매 채널까지\n일관된 브랜드 경험을 구축했습니다",
        steps: [
          { step: "01", title: "TARGET", desc: "여아 부모 중심\n니치 타깃 정의" },
          { step: "02", title: "PRODUCT", desc: "주력 상품 기획\nKATRI 안전성 검증" },
          { step: "03", title: "BRAND", desc: "Lovely Mood\n브랜드 및 콘텐츠 구축" },
          { step: "04", title: "COMMERCE", desc: "스마트스토어 → 4개 채널\n판매 접점 확장" },
        ],
      },
      result: {
        headline: "브랜드 구축을\n실제 비즈니스 성장으로 연결했습니다",
        cards: [
          { stat: "14×", title: "고객 유입 성장", desc: "브랜드 리뉴얼 전후" },
          { stat: "1억+", title: "연매출 달성", desc: "안정적인 판매 기반 확보" },
          { stat: "1 → 4", title: "판매 채널 확장", desc: "단일 → 멀티채널" },
        ],
      },
    },
    pipelineTitle: "NICHE BRANDING & MULTI-CHANNEL FLOW",
    pipelineSteps: [
      { label: "MARKET RESEARCH" },
      { label: "LOVELY MOOD" },
      { label: "MULTI-CHANNEL" },
      { label: "14X TRAFFIC / 100M" },
    ],
    tags: ["E_Commerce", "Niche_Branding", "Lovely_Mood", "Multi_Channel", "Revenue_Growth"],
    thumbnail: imgShaluv,
    archive: true,
    slides: [
      { src: imgShaluv, alt: "SHALUV 이커머스 쇼핑몰", tabLabel: "러블리 무드 & 멀티채널", title: "SHALUV — 여아 타깃 러블리 무드 리브랜딩", caption: "여자아이 부모를 위한 러블리 무드 니치 브랜드 리뉴얼 및 멀티 채널(스마트스토어, 자사몰, 쿠팡, 카카오) 비주얼 개편으로 14배 유입 성장 및 연매출 1억 달성", fit: "contain" },
      { src: imgShaluvPromotions, alt: "SHALUV 프로모션 시안", tabLabel: "프로모션 디자인", title: "SHALUV — 시즌별 배송 안내 및 상품 프로모션 기획", caption: "추석/크리스마스 시즌별 배송 안내 캘린더와 가을 시즌 룩북 상품 상세 웹 그래픽 시안 수립", fit: "contain" },
    ],
  },
  {
    id: "mobile-dime",
    num: "11",
    title: "DIME",
    subtitle: "Social Dating & Matching Mobile App (iOS · Android)",
    categoryFlow: "Social Dating · Card Matching · Native App",
    keyword: "Mobile · Dating App",
    client: "다임",
    period: "2017.08 ~ 2018.03",
    serviceType: "Social Dating Native App",
    role: "UX/UI Design · Promotion Design",
    description: "카드 스와이프 제스처와 프로필 탐색 인터랙션을 극대화한 소셜 데이팅 네이티브 모바일 앱 UX/UI를 설계했습니다.",
    challenge: "프로필과 콘텐츠 정보가 나열 중심으로 구성되어 사용자 탐색이 불편했고, 서비스 내 주요 화면의 사용성과 콘텐츠 전달 방식을 개선할 필요가 있었습니다.",
    approach: "프로필 탐색과 주요 화면의 정보 구조 및 UI를 개선하고, 서비스 특성과 사용자 관심사를 반영한 프로모션 디자인을 함께 진행했습니다.",
    outcome: "기존 서비스의 주요 화면을 개선해 모바일 환경에서의 정보 탐색과 사용성을 정비하고, 프로모션 디자인을 통해 서비스 운영에 필요한 시각적 커뮤니케이션을 지원했습니다.",
    story: {
      problem: {
        headline: "나열 중심의 정보 구조로\n프로필 탐색 개선이 필요했습니다",
        desc: "프로필과 콘텐츠 정보가 나열 중심으로 구성되어 사용자 탐색이 불편했고,\n서비스 내 주요 화면의 사용성과 콘텐츠 전달 방식을 개선할 필요가 있었습니다.",
      },
      process: {
        headline: "탐색 중심으로 정보 구조와\n주요 UI를 재정비했습니다",
        steps: [
          { step: "01", title: "DISCOVERY", desc: "프로필 탐색 구조\n카드 UI 설계" },
          { step: "02", title: "CARD SWIPE", desc: "스와이프 제스처\n인터랙션 적용" },
          { step: "03", title: "MATCHING", desc: "매칭 피드백 및\n대화방 진입 동선" },
          { step: "04", title: "PROMOTION", desc: "서비스 프로모션\n시각 가이드라인" },
        ],
      },
      result: {
        headline: "모바일 환경의 정보 탐색을 개선하고\n서비스 운영 디자인을 지원했습니다",
        cards: [
          { stat: "Native", title: "네이티브 앱 구축", desc: "iOS 및 Android 지원" },
          { stat: "Gesture", title: "카드 스와이프 탐색", desc: "직관적 프로필 매칭" },
          { stat: "Promo", title: "프로모션 디자인", desc: "시각 커뮤니케이션 지원" },
        ],
      },
    },
    pipelineTitle: "SOCIAL MATCHING INTERACTION FLOW",
    pipelineSteps: [
      { label: "DISCOVERY" },
      { label: "CARD SWIPE" },
      { label: "MATCHING" },
      { label: "CHAT ROOM" },
    ],
    tags: ["Social_Dating", "iOS_Android", "Card_Swipe", "Mobile_UX", "Native_App"],
    thumbnail: imgDime,
    archive: true,
    slides: [
      { src: imgDime, alt: "DIME", tabLabel: "데이팅 & 매칭 화면", title: "DIME — 소셜 데이팅 & 프로필 매칭 앱", caption: "프로필 카드 탐색과 제스처 인터랙션을 최적화한 소셜 데이팅 네이티브 모바일 앱" },
    ],
  },
  {
    id: "hanmilab-lms",
    num: "12",
    title: "HANMILAB LMS",
    subtitle: "LMS Edutech Platform & Admin System (Web · Mobile · Publishing)",
    categoryFlow: "Branding → Web (72p) → Admin/Mobile (62p) → Publishing",
    keyword: "Enterprise · LMS",
    client: "한미랩",
    period: "2017.03 ~ 2017.07",
    serviceType: "Edutech LMS & Admin System",
    role: "UX/UI Design",
    description: "국비지원 교육과정 온라인 수강과 시험 응시를 위한 반응형 사용자 웹(72p)과 관리자 어드민 및 모바일(62p)을 설계했습니다.",
    challenge: "국비지원 교육과정과 온라인 시험 절차가 복잡하게 구성되어 있어 학습자의 수강 및 시험 흐름을 명확하게 정리하고, 관리자도 교육 운영 정보를 효율적으로 관리할 수 있는 구조가 필요했습니다.",
    approach: "학습자의 수강 및 시험 흐름을 기준으로 정보 구조와 화면 동선을 재정비하고, 반응형 수강 웹(72p)과 모바일(62p), 교육 운영을 위한 관리자 화면을 설계했습니다. 프로젝트 중 퍼블리싱 담당자의 이탈 이후 남은 구현 작업을 인계받아 마무리했습니다.",
    outcome: "수강 웹, 모바일, 관리자 전반의 UX/UI를 설계하고, 퍼블리싱 공백이 발생한 상황에서도 남은 구현 작업을 직접 마무리해 프로젝트를 안정적으로 완결했습니다.",
    story: {
      problem: {
        headline: "복잡한 수강과 시험 절차,\n학습자와 관리자를 연결하는 구조가 필요했습니다",
        desc: "국비지원 교육과정과 온라인 시험 절차가 복잡하게 구성되어 있어\n학습자의 수강 및 시험 흐름을 명확하게 정리하고,\n관리자가 교육 운영 정보를 효율적으로 관리할 수 있는 구조가 필요했습니다.",
      },
      process: {
        headline: "학습자 흐름 중심의 IA 설계와\n반응형 웹·관리자 어드민을 구축했습니다",
        steps: [
          { step: "01", title: "LEARNING WEB", desc: "수강 웹 (72p)\n반응형 학습 환경" },
          { step: "02", title: "TEST & EXAM", desc: "온라인 시험 응시\n유의사항 모달 UI" },
          { step: "03", title: "ADMIN SYSTEM", desc: "관리자 및 모바일 (62p)\n교육 운영 관리" },
          { step: "04", title: "PUBLISHING", desc: "웹 퍼블리싱 마무리\n프로젝트 완결 지원" },
        ],
      },
      result: {
        headline: "UX/UI 설계부터 구현 공백 대응까지\n프로젝트를 안정적으로 마무리했습니다",
        cards: [
          { stat: "72p", title: "반응형 수강 웹", desc: "온라인 학습 및 시험" },
          { stat: "62p", title: "어드민 및 모바일", desc: "교육 운영 관리" },
          { stat: "Publishing", title: "퍼블리싱 직접 완수", desc: "안정적 프로젝트 완결" },
        ],
      },
    },
    pipelineTitle: "LMS LEARNING & ADMIN PIPELINE",
    pipelineSteps: [
      { label: "BRANDING" },
      { label: "LEARNING WEB (72P)" },
      { label: "TEST & EXAM" },
      { label: "ADMIN & MOBILE (62P)" },
      { label: "PUBLISHING" },
    ],
    tags: ["LMS_Edutech", "Responsive_Web", "Admin_System", "Branding", "Web_Publishing"],
    thumbnail: imgLMS,
    archive: true,
    slides: [
      { src: imgLMS, alt: "HANMILAB LMS 한미아카데미", tabLabel: "LMS 반응형 웹 & 시험 모달", title: "HANMILAB LMS (한미아카데미) — 반응형 학습 플랫폼", caption: "온라인 수강/시험 반응형 사용자 웹(72p) 및 국비지원 교육과정, 온라인 시험 유의사항 모달 UI/UX 설계", fit: "contain" },
    ],
  },
  {
    id: "mobile-hellolink",
    num: "13",
    title: "HELLO LINK",
    subtitle: "Commerce & Mobile Magazine Native App (iOS · Android)",
    categoryFlow: "Code Commerce · Magazine · Mobile App",
    keyword: "O2O Commerce",
    client: "인포뱅크",
    period: "2015.12 ~ 2016.02",
    serviceType: "Code Commerce & Magazine App",
    role: "UX/UI Design",
    description: "고유 숫자 코드로 상품을 빠르게 탐색하고 결제하는 커머스 앱 'HELLO LINK'와 모바일 매거진을 단독 설계했습니다.",
    challenge: "오프라인 매거진에서 발견한 상품을 모바일에서 다시 검색해야 하는 번거로움이 있었고, 지면에서 상품 상세 및 구매까지 자연스럽게 연결할 수 있는 경험이 필요했습니다.",
    approach: "매거진 상품마다 고유 번호를 부여하고, 사용자가 앱에서 번호를 다이얼하듯 입력하면 해당 상품으로 바로 연결되는 탐색 방식을 설계했습니다. 오프라인 상품 발견 → 모바일 상품 확인 → 구매로 이어지는 흐름을 단순화했습니다.",
    outcome: "iOS/Android 네이티브 앱과 모바일 매거진 경험을 구축해, 오프라인 지면에서 발견한 상품을 모바일 구매로 연결하는 O2O 커머스 경험을 구현했습니다.",
    story: {
      problem: {
        headline: "오프라인 지면과 모바일의 단절,\n지면에서 구매까지의 연결이 필요했습니다",
        desc: "오프라인 매거진에서 발견한 상품을 모바일에서 다시 검색해야 하는 번거로움이 있었고,\n지면에서 상품 상세 및 구매까지 자연스럽게 연결할 수 있는 경험이 필요했습니다.",
      },
      process: {
        headline: "고유 숫자 코드 입력 방식과\n모바일 매거진 연계 흐름을 설계했습니다",
        steps: [
          { step: "01", title: "NUMERIC CODE", desc: "상품 고유 번호 부여\n다이얼 탐색 방식" },
          { step: "02", title: "MAGAZINE", desc: "모바일 매거진 지면\n추천 상품 뷰어" },
          { step: "03", title: "PRODUCT", desc: "상품 상세 정보 및\n주문 동선 단순화" },
          { step: "04", title: "CHECKOUT", desc: "원스톱 결제 프로세스\nO2O 커머스 완성" },
        ],
      },
      result: {
        headline: "오프라인 상품 탐색과 모바일 구매를 연결하는\nO2O 커머스 경험을 구현했습니다",
        cards: [
          { stat: "O2O App", title: "iOS / Android", desc: "네이티브 커머스 앱" },
          { stat: "Magazine", title: "모바일 매거진 연계", desc: "지면 상품 다이얼 연동" },
          { stat: "One-Stop", title: "탐색 및 결제 동선 최적화", desc: "원스톱 구매 프로세스" },
        ],
      },
    },
    pipelineTitle: "NUMERIC COMMERCE & MAGAZINE FLOW",
    pipelineSteps: [
      { label: "DIALPAD" },
      { label: "MAGAZINE" },
      { label: "PRODUCT" },
      { label: "CHECKOUT" },
    ],
    tags: ["Mobile_Commerce", "iOS_Android", "Magazine_App", "Design_Guide", "Native_UI"],
    thumbnail: imgHelloLinkMagazine,
    archive: true,
    slides: [
      { src: imgHelloLinkMagazine, alt: "HELLO LINK 매거진", tabLabel: "매거진 & 커머스 지면", title: "HELLO LINK — 매거진 연계 숫자 코드 커머스", caption: "여성동아 특별 추천 상품을 다이얼하듯 스마트폰에서 즉시 쇼핑하는 헬로링크 지면/매거진 뷰어", fit: "contain" },
      { src: imgHelloLink, alt: "HELLO LINK 모바일 앱", tabLabel: "모바일 네이티브 앱", title: "HELLO LINK — 모바일 네이티브 앱 UI", caption: "숫자 코드 다이얼패드 및 상품 정보, 주문, 결제 원스톱 프로세스 설계" },
    ],
  },
  {
    id: "mobile-nh",
    num: "14",
    title: "NH바로바로마켓",
    subtitle: "Commerce Native Mobile App (Android)",
    categoryFlow: "Mobile Commerce · Native App",
    keyword: "Mobile Commerce",
    client: "인포뱅크",
    period: "2014.04 ~ 2015.01",
    serviceType: "Commerce Native App (Android)",
    role: "UX/UI Design",
    description: "농협 모바일 커머스 앱 'NH바로바로마켓'의 초기 런칭과 운영, 이후 전면 리뉴얼까지 단독 디자인하여, 상품 탐색부터 주문, 구매까지 모바일과 태블릿 환경의 커머스 경험을 지속적으로 고도화했습니다.",
    challenge: "초기 런칭을 단독 디자인하고 운영한 이후, 서비스 확장에 맞춰 리뉴얼을 진행했습니다. 상품 탐색부터 주문과 구매까지 주요 사용자 흐름과 UI를 전반적으로 재정비할 필요가 있었습니다.",
    approach: "초기 런칭 시 단독 UX/UI 디자인과 Android UI 가이드를 수립하고, 운영 과정을 거쳐 리뉴얼에서는 탐색 및 구매 흐름을 재설계했습니다. 릴리즈 Design QA로 품질을 검증하고 태블릿 환경까지 일관되게 확장했습니다.",
    outcome: "초기 런칭과 운영, 이후 리뉴얼까지 단독 디자인하며 서비스 변화에 맞춰 UI와 주요 구매 흐름을 개선했습니다. 모바일뿐 아니라 태블릿 환경까지 확장해 일관된 커머스 경험을 설계했습니다.",
    story: {
      problem: {
        headline: "초기 런칭 이후 확장된 서비스,\n모바일 커머스 경험의 재정비가 필요했습니다",
        desc: "초기 런칭을 단독 디자인하고 운영한 이후,\n서비스 확장에 맞춰 리뉴얼을 진행했습니다.\n상품 탐색부터 주문과 구매까지 주요 사용자 흐름과\nUI를 전반적으로 재정비할 필요가 있었습니다.",
      },
      process: {
        headline: "초기 런칭부터 운영과 리뉴얼까지\n제품 경험을 일관되게 설계했습니다",
        steps: [
          { step: "01", title: "INITIAL LAUNCH", desc: "단독 UX/UI 디자인\nAndroid UI 가이드 수립" },
          { step: "02", title: "OPERATION", desc: "서비스 운영 디자인\nUI 및 사용성 지속 개선" },
          { step: "03", title: "RENEWAL", desc: "탐색 및 구매 흐름 재설계\n모바일 UI 전면 리뉴얼" },
          { step: "04", title: "DESIGN QA", desc: "릴리즈 Design QA\n품질 및 일관성 검증" },
        ],
      },
      result: {
        headline: "런칭부터 운영과 리뉴얼까지\n모바일 커머스 경험을 지속적으로 고도화했습니다",
        cards: [
          { stat: "Launch & Renewal", title: "런칭부터 리뉴얼까지", desc: "단독 UX/UI 디자인 수행" },
          { stat: "Operation", title: "운영 및 사용성 개선", desc: "서비스 변화에 맞춘 UI 고도화" },
          { stat: "Tablet Exp.", title: "태블릿 환경 확장", desc: "일관된 커머스 경험 설계" },
        ],
      },
    },
    pipelineTitle: "COMMERCE MOBILE FLOW",
    pipelineSteps: [
      { label: "DISCOVERY" },
      { label: "PRODUCT DETAIL" },
      { label: "CART & ORDER" },
      { label: "CHECKOUT" },
    ],
    tags: ["Mobile_App", "Android_Native", "E_Commerce", "Branding", "Design_Guide"],
    thumbnail: imgNH,
    archive: true,
    slides: [
      { src: imgNH, alt: "NH바로바로마켓", tabLabel: "리뉴얼 대표 화면", title: "NH바로바로마켓 — 모바일 커머스 전면 리뉴얼", caption: "상품 탐색부터 주문/결제까지 모바일 사용자 동선을 최적화한 리뉴얼 최종 디자인" },
    ],
  },
  {
    id: "mobile-samsungfire",
    num: "15",
    title: "삼성화재",
    subtitle: "삼성화재 모바일 멤버십 UI/UX (2014)",
    categoryFlow: "Membership Service · Mobile UX",
    keyword: "Financial · Mobile",
    client: "인포뱅크",
    period: "2014.10 ~ 2014.12",
    serviceType: "Mobile Web & App UX/UI Design",
    role: "UX/UI Design",
    description: "삼성화재 모바일 멤버십 서비스의 핵심 사용성 동선(충전, 전송, 내역 확인)을 구조화하고 시각적 위계를 최적화했습니다.",
    challenge: "멤버십 잔액 및 결제 정보와 메시지 기능이 여러 화면에 분산되어 있어, 모바일에서 자주 사용하는 기능을 빠르게 확인하고 실행하기 어려웠습니다.",
    approach: "잔액 확인, 캐시 충전, 메시지 전송 등 주요 기능의 우선순위를 재정리해 메인 화면에서 바로 접근할 수 있도록 구성하고, 주소록 선택부터 메시지 작성 및 전송까지 이어지는 사용 흐름을 단순화했습니다.",
    outcome: "분산되어 있던 멤버십 정보와 주요 기능을 모바일 환경에 맞게 재구성해, 잔액 확인부터 메시지 전송까지 핵심 업무를 보다 명확한 흐름으로 이용할 수 있도록 개선했습니다.",
    story: {
      problem: {
        headline: "분산된 잔액 및 결제와 메시지 기능,\n모바일 핵심 업무 중심의 구조화가 필요했습니다",
        desc: "멤버십 잔액 및 결제 정보와 메시지 기능이 여러 화면에 분산되어 있어,\n모바일에서 자주 사용하는 기능을 빠르게 확인하고 실행하기 어려웠습니다.",
      },
      process: {
        headline: "우선순위 기반 메인 재배치와\n원스톱 메시지 전송 흐름을 구축했습니다",
        steps: [
          { step: "01", title: "PRIORITY", desc: "잔액, 충전, 전송 등\n핵심 기능 우선순위화" },
          { step: "02", title: "GRID CARDS", desc: "메인 화면 카드 배치\n핵심 기능 빠른 접근" },
          { step: "03", title: "SENDER FLOW", desc: "주소록 선택부터\n메시지 작성 및 전송" },
          { step: "04", title: "HIERARCHY", desc: "시각적 위계 정리\n가독성 및 사용성 개선" },
        ],
      },
      result: {
        headline: "복잡했던 멤버십 핵심 업무를\n명확한 모바일 흐름으로 재구성했습니다",
        cards: [
          { stat: "Membership", title: "모바일 멤버십 개편", desc: "핵심 기능 접근성 강화" },
          { stat: "Card Grid", title: "메인 레이아웃 정돈", desc: "정보 위계 최적화" },
          { stat: "Flow Sync", title: "전송 동선 간소화", desc: "주소록 연계 원활화" },
        ],
      },
    },
    thumbnail: imgSamsungFire,
    archive: true,
    slides: [
      { src: imgSamsungFire, alt: "삼성화재 모바일 서비스", tabLabel: "삼성화재 대표 화면", title: "삼성화재 — 모바일 멤버십 서비스 UI/UX 설계", caption: "삼성화재 멤버십 모바일 메인 그리드 카드 레이아웃 및 메시지 전송과 주소록 플로우 설계", fit: "contain" },
    ],
  },
];

// ─── Case Study Modal Dialog (Full Screen Deep Dive) ─────────────────────────
function CaseStudyDialog({
  project,
  onClose,
  onNavigateProject,
  isMobile,
}: {
  project: ProjectItem;
  onClose: () => void;
  onNavigateProject: (project: ProjectItem) => void;
  isMobile: boolean;
}) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null); // 🌟 이미지 라이트박스 줌 상태
  const currentSlide = project.slides[activeSlideIdx] ?? project.slides[0];

  // 🌟 모바일 터치 스와이프 제스처 핸들링 (스크롤 간섭 방지)
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (project.slides.length <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // X축 이동 거리가 Y축(스크롤)보다 확실히 클 때만 수평 스와이프로 판정
    if (Math.abs(diffX) > minSwipeDistance && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
      if (diffX > 0) {
        // Left swipe -> Next
        setActiveSlideIdx((prev) => (prev + 1) % project.slides.length);
      } else {
        // Right swipe -> Prev
        setActiveSlideIdx((prev) => (prev - 1 + project.slides.length) % project.slides.length);
      }
    }
  };

  // 🌟 이미지 프리로딩 (Next / Prev Slide Preload)
  useEffect(() => {
    if (project.slides.length <= 1) return;
    const nextIdx = (activeSlideIdx + 1) % project.slides.length;
    const prevIdx = (activeSlideIdx - 1 + project.slides.length) % project.slides.length;
    [nextIdx, prevIdx].forEach((idx) => {
      const src = project.slides[idx]?.src;
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [activeSlideIdx, project.slides]);

  // Reset slide index when active project changes
  useEffect(() => {
    setActiveSlideIdx(0);
  }, [project.id]);

  // Find current project index in PROJECTS_DATA
  const currentProjIdx = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProj = PROJECTS_DATA[currentProjIdx > 0 ? currentProjIdx - 1 : PROJECTS_DATA.length - 1];
  const nextProj = PROJECTS_DATA[currentProjIdx < PROJECTS_DATA.length - 1 ? currentProjIdx + 1 : 0];

  const handlePrevProject = () => {
    const prevIdx = currentProjIdx > 0 ? currentProjIdx - 1 : PROJECTS_DATA.length - 1;
    onNavigateProject(PROJECTS_DATA[prevIdx]);
  };

  const handleNextProject = () => {
    const nextIdx = currentProjIdx < PROJECTS_DATA.length - 1 ? currentProjIdx + 1 : 0;
    onNavigateProject(PROJECTS_DATA[nextIdx]);
  };

  // Esc key & Arrow keys & body scroll lock (zoomedImage가 열렸을 때 지능형 처리)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onClose();
        }
      } else if (!zoomedImage && project.slides.length > 1) {
        if (e.key === "ArrowRight") {
          setActiveSlideIdx((prev) => (prev + 1) % project.slides.length);
        } else if (e.key === "ArrowLeft") {
          setActiveSlideIdx((prev) => (prev - 1 + project.slides.length) % project.slides.length);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, zoomedImage, project.slides.length]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: isMobile ? "#FFFFFF" : "rgba(10, 12, 16, 0.75)",
        backdropFilter: isMobile ? "none" : "blur(12px)",
        WebkitBackdropFilter: isMobile ? "none" : "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "0px" : "32px",
        overflowY: "auto",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          height: isMobile ? "100%" : "auto",
          maxWidth: isMobile ? "100%" : "1180px",
          maxHeight: isMobile ? "100vh" : "92vh",
          backgroundColor: "#FFFFFF",
          color: "#111111",
          borderRadius: isMobile ? "0px" : "8px",
          overflowY: "auto",
          boxShadow: isMobile ? "none" : "0 25px 60px -15px rgba(0, 0, 0, 0.35)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Modal Sticky Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #F3F4F6",
            padding: isMobile ? "14px 20px" : "20px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "4px" : "10px",
              flex: 1,
              paddingRight: isMobile ? "12px" : "0",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 900, color: "#2563EB", letterSpacing: "0.05em" }}>
              CASE {project.num}
            </span>
            {!isMobile && <span style={{ color: "#D1D5DB" }}>|</span>}
            <strong style={{ fontSize: isMobile ? "18px" : "22px", fontWeight: 900, color: "#111111", letterSpacing: "-0.02em" }}>
              {project.title}
            </strong>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              background: "#F3F4F6",
              border: "none",
              borderRadius: "9999px",
              width: "36px",
              height: "36px",
              flexShrink: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#4B5563",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#111111";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F3F4F6";
              e.currentTarget.style.color = "#4B5563";
            }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: isMobile ? "16px 16px 24px" : "32px 32px" }}>
          {/* 🌟 4-Column Professional Metadata Spec Bar (CLIENT · CATEGORY · DATE · SERVICE) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? "12px 10px" : "24px",
              borderBottom: "none",
              paddingBottom: isMobile ? "4px" : "12px",
              marginBottom: isMobile ? "18px" : "28px",
            }}
          >
            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: isMobile ? "10px" : "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "3px", letterSpacing: "0.06em" }}>
                CLIENT
              </span>
              <strong style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 800, color: "#111111", display: "block" }}>
                {project.client}
              </strong>
            </div>

            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: isMobile ? "10px" : "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "3px", letterSpacing: "0.06em" }}>
                CATEGORY
              </span>
              <strong style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 800, color: "#111111", display: "block" }}>
                {project.keyword}
              </strong>
            </div>

            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: isMobile ? "10px" : "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "3px", letterSpacing: "0.06em" }}>
                DATE (PERIOD)
              </span>
              {project.period2 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "9px", fontWeight: 800, color: "#6B7280", backgroundColor: "#F3F4F6", padding: "1px 5px", borderRadius: "3px", whiteSpace: "nowrap" as const }}>
                      {project.periodLabel || "재직"}
                    </span>
                    <strong style={{ fontSize: isMobile ? "12px" : "13px", fontWeight: 800, color: "#2563EB" }}>
                      {project.period}
                    </strong>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "9px", fontWeight: 800, color: "#FFFFFF", backgroundColor: "#7C3AED", padding: "1px 5px", borderRadius: "3px", whiteSpace: "nowrap" as const }}>
                      {project.period2Label || "프리랜서"}
                    </span>
                    <strong style={{ fontSize: isMobile ? "12px" : "13px", fontWeight: 800, color: "#7C3AED" }}>
                      {project.period2}
                    </strong>
                  </div>
                </div>
              ) : (
                <strong style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 800, color: "#2563EB", display: "block" }}>
                  {project.period}
                </strong>
              )}
            </div>

            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: isMobile ? "10px" : "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "3px", letterSpacing: "0.06em" }}>
                ROLE
              </span>
              <strong style={{ fontSize: isMobile ? "12px" : "13px", fontWeight: 800, color: "#111111", display: "block", lineHeight: 1.35 }}>
                {project.role}
              </strong>
            </div>
          </div>
          {/* Image Viewer with Full Controls */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "220px" : "500px",
              backgroundColor: "#F9FAFB",
              borderRadius: isMobile ? "8px" : "12px",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              marginBottom: isMobile ? "20px" : "28px",
            }}
          >
            {/* Main Image — cover crop, top-aligned */}
            <img
              key={currentSlide.src}
              src={currentSlide.src}
              alt={currentSlide.alt}
              className="modal-slide-image"
              onClick={() => setZoomedImage(currentSlide.src)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover" as const,
                objectPosition: "top center" as const,
                display: "block",
                cursor: "zoom-in",
                animation: "fadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            />

            {/* Top-right: "N / M" counter */}
            {project.slides.length > 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  backgroundColor: "rgba(0, 0, 0, 0.52)",
                  backdropFilter: "blur(4px)",
                  color: "#FFFFFF",
                  
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  letterSpacing: "0.06em",
                  pointerEvents: "none" as const,
                }}
              >
                {activeSlideIdx + 1} / {project.slides.length}
              </div>
            )}

            {/* Left prev button — hidden on first slide */}
            {project.slides.length > 1 && activeSlideIdx > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setActiveSlideIdx(activeSlideIdx - 1); }}
                aria-label="Previous slide"
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.48)",
                  backdropFilter: "blur(4px)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.15s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2563EB"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.48)"; }}
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Right next button — hidden on last slide */}
            {project.slides.length > 1 && activeSlideIdx < project.slides.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setActiveSlideIdx(activeSlideIdx + 1); }}
                aria-label="Next slide"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.48)",
                  backdropFilter: "blur(4px)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.15s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2563EB"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.48)"; }}
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Dark gradient overlay — fades image bottom to black */}
            {(currentSlide.tabLabel || project.slides.length > 1) && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: project.slides.length > 1 ? "90px" : "60px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                  pointerEvents: "none" as const,
                }}
              />
            )}

            {/* Bottom-left: slide caption — white text on dark gradient */}
            {currentSlide.tabLabel && (
              <div
                style={{
                  position: "absolute",
                  bottom: project.slides.length > 1 ? "28px" : "12px",
                  left: "14px",
                  right: "14px",
                  pointerEvents: "none" as const,
                }}
              >
                <span
                  style={{
                    
                    fontSize: isMobile ? "12px" : "13px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    display: "block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  {currentSlide.tabLabel}
                </span>
              </div>
            )}

            {/* Bottom-center: dots — below caption, white on dark */}
            {project.slides.length > 1 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {project.slides.map((_, idx) => {
                  const isActive = idx === activeSlideIdx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveSlideIdx(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        width: isActive ? "8px" : "6px",
                        height: isActive ? "8px" : "6px",
                        borderRadius: "9999px",
                        backgroundColor: isActive ? "#2563EB" : "rgba(255, 255, 255, 0.4)",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>



          {/* 🌟 3-Segment Story or Default 3-Column View */}
          {project.story ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "20px", borderTop: "1px solid #F1F5F9" }}>
              {/* ──────────────────── 01 PROBLEM (Top Label + 2-Column Editorial Layout) ──────────────────── */}
              <div style={{ paddingTop: isMobile ? "20px" : "28px", paddingBottom: isMobile ? "20px" : "28px", borderBottom: "1px solid #F1F5F9" }}>
                {/* Section Label: 01 PROBLEM */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: isMobile ? "8px" : "12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>01</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>PROBLEM</span>
                </div>

                {/* 2-Column Editorial Grid (Desktop: 2-Col, Mobile: Compact Stack) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 4.2fr) minmax(0, 5.8fr)",
                    gap: isMobile ? "10px" : "44px",
                    alignItems: "start",
                  }}
                >
                  {/* Left Column: Heading */}
                  <div>
                    <h4
                      style={{
                        fontSize: isMobile ? "17px" : "21px",
                        fontWeight: 800,
                        color: "#111827",
                        margin: 0,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.4,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {project.story.problem.headline}
                    </h4>
                  </div>

                  {/* Right Column: Description */}
                  <div style={{ paddingTop: isMobile ? "0" : "2px" }}>
                    {project.story.problem.desc.split("\n\n").map((paragraph, pIdx, pArr) => (
                      <p
                        key={pIdx}
                        style={{
                          fontSize: isMobile ? "13.5px" : "14.5px",
                          color: "#4B5563",
                          lineHeight: 1.75,
                          margin: pIdx < pArr.length - 1 ? "0 0 10px 0" : 0,
                          whiteSpace: "pre-line",
                          maxWidth: "560px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {renderStoryDesc(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* ──────────────────── 02 APPROACH (Desktop: 4-Col, Mobile: 2x2 Grid / Pure White Editorial) ──────────────────── */}
              <div
                style={{
                  paddingTop: isMobile ? "20px" : "28px",
                  paddingBottom: isMobile ? "20px" : "28px",
                  borderBottom: "1px solid #F1F5F9",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: isMobile ? "8px" : "12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>02</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>APPROACH</span>
                </div>
                <h4
                  style={{
                    fontSize: isMobile ? "17px" : "21px",
                    fontWeight: 800,
                    color: "#111827",
                    margin: isMobile ? "0 0 16px 0" : "0 0 22px 0",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                  }}
                >
                  {project.story.process.headline}
                </h4>

                {/* 🌟 Editorial Process Grid (Desktop: 4-Col, Mobile: 2x2 Grid — No duplicate step numbers) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                    gap: isMobile ? "16px 14px" : "28px",
                  }}
                >
                  {project.story.process.steps.map((st, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Workstream Title: Black / Semibold */}
                      <div
                        style={{
                          fontSize: isMobile ? "13px" : "13.5px",
                          fontWeight: 700,
                          color: "#111827",
                          letterSpacing: "0.02em",
                          textTransform: "uppercase",
                          marginBottom: "5px",
                          lineHeight: 1.3,
                        }}
                      >
                        {st.title}
                      </div>
                      {/* Description: Neutral Gray */}
                      <div
                        style={{
                          fontSize: isMobile ? "12px" : "13px",
                          color: "#4B5563",
                          lineHeight: isMobile ? 1.5 : 1.55,
                          whiteSpace: "pre-line",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {st.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ──────────────────── 03 IMPACT (Desktop & Mobile: 3-Column Metric Row / Visual Peak) ──────────────────── */}
              <div style={{ paddingTop: isMobile ? "20px" : "28px", paddingBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: isMobile ? "8px" : "12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>03</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>IMPACT</span>
                </div>
                <h4
                  style={{
                    fontSize: isMobile ? "17px" : "21px",
                    fontWeight: 800,
                    color: "#111827",
                    margin: isMobile ? "0 0 16px 0" : "0 0 20px 0",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                  }}
                >
                  {project.story.result.headline}
                </h4>

                {/* 🌟 Metric Columns (Dynamic columns based on cards length: 2 or 3 columns) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${project.story.result.cards.length}, 1fr)`,
                    gap: "0",
                  }}
                >
                  {project.story.result.cards.map((cd, i) => {
                    const rawVal = cd.stat || cd.title;
                    const isLongStat = rawVal.includes("→") || rawVal.length > 5;
                    const isLast = i === project.story.result.cards.length - 1;
                    return (
                      <div
                        key={i}
                        style={{
                          position: "relative",
                          paddingLeft: isMobile ? (i === 0 ? "0" : "12px") : (i === 0 ? "0" : "32px"),
                          paddingRight: isMobile ? (isLast ? "0" : "12px") : (isLast ? "0" : "32px"),
                          borderBottom: "none",
                          paddingBottom: "0",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Delicate vertical divider in IMPACT */}
                        {!isLast && (
                          <div
                            style={{
                              position: "absolute",
                              right: 0,
                              top: isMobile ? "4px" : "8px",
                              height: "65%",
                              width: "1px",
                              backgroundColor: "#E5E7EB",
                            }}
                          />
                        )}

                        {/* Metric Number with Optical Balance — Visual Peak */}
                        <div
                          style={{
                            fontSize: isMobile
                              ? (isLongStat ? "22px" : "26px")
                              : (isLongStat ? "34px" : "40px"),
                            fontWeight: 900,
                            color: "#2563EB",
                            letterSpacing: isLongStat ? "-0.04em" : "-0.025em",
                            marginBottom: isMobile ? "4px" : "6px",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "baseline",
                          }}
                        >
                          {rawVal}
                        </div>
                        <div
                          style={{
                            fontSize: isMobile ? "13px" : "14.5px",
                            fontWeight: 700,
                            color: "#111827",
                            marginBottom: isMobile ? "2px" : "3px",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.3,
                          }}
                        >
                          {cd.stat ? cd.title : cd.desc}
                        </div>
                        <div
                          style={{
                            fontSize: isMobile ? "11.5px" : "12.5px",
                            color: "#6B7280",
                            lineHeight: 1.4,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {cd.stat ? cd.desc : ""}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: isMobile ? "24px" : "32px",
                borderTop: "1px solid #F3F4F6",
                paddingTop: "24px",
                marginTop: "8px",
              }}
            >
              {/* Column 1: Challenge */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
                    CHALLENGE
                  </span>
                </div>
                <h4 style={{ fontSize: "15px", color: "#111111", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: "-0.01em" }}>
                  핵심 문제
                </h4>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                  {project.challenge}
                </p>
              </div>

              {/* Column 2: Decision */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
                    DECISION
                  </span>
                </div>
                <h4 style={{ fontSize: "15px", color: "#111111", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: "-0.01em" }}>
                  핵심 판단
                </h4>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                  {project.approach}
                </p>
              </div>

              {/* Column 3: Impact */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
                    IMPACT
                  </span>
                </div>
                <h4 style={{ fontSize: "15px", color: "#111111", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: "-0.01em" }}>
                  결과 및 영향
                </h4>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                  {project.outcome}
                </p>
              </div>
            </div>
          )}

          {/* 🌟 Bottom Case Navigation Banner (Next Case Link Only) */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "20px",
              borderTop: "1px solid #F3F4F6",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            {/* Right Link: Next Project Only */}
            <button
              onClick={handleNextProject}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#9CA3AF",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#111111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9CA3AF";
              }}
            >
              <span>NEXT CASE : CASE {nextProj.num} / {nextProj.title}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    
    {/* 🌟 이미지 라이트박스 줌 뷰어 모달 */}
    {zoomedImage && (
      <div
        role="dialog"
        aria-modal="true"
        className="no-print"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(10, 12, 16, 0.9)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "zoom-out",
          animation: "fadeIn 0.25s ease-out",
        }}
        onClick={() => setZoomedImage(null)}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={() => setZoomedImage(null)}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.15s ease",
            zIndex: 2010,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)"}
        >
          ✕
        </button>
        
        <img
          src={zoomedImage}
          alt="Zoomed View"
          style={{
            maxWidth: "94vw",
            maxHeight: "92vh",
            objectFit: "contain",
            borderRadius: "4px",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
            animation: "fadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    )}
  </div>
  );
}

// ─── Main WORK Section (Unified Web, Enterprise & Mobile) ────────────────────
export function WorkSection({
  w,
  selectedProjectId,
  onClearSelectedProject,
}: {
  w: number;
  selectedProjectId?: string | null;
  onClearSelectedProject?: () => void;
}) {
  const isMobile = w < 768;
  const [activeKeyword, setActiveKeyword] = useState<string>("ALL");
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  // 🌟 외부(타임라인 클릭)에서 프로젝트 ID 유입 시 동적으로 상세 모달 오픈
  useEffect(() => {
    if (selectedProjectId) {
      const proj = PROJECTS_DATA.find((p) => p.id === selectedProjectId);
      if (proj) {
        setSelectedModalProject(proj);
      }
    }
  }, [selectedProjectId]);

  // 🌟 모달 닫힐 때 부모 컴포넌트의 연동 상태도 클리어해 줌
  const handleCloseModal = () => {
    setSelectedModalProject(null);
    if (onClearSelectedProject) {
      onClearSelectedProject();
    }
  };

  // 🌟 모달 내 프로젝트 네비게이션 시 연동 상태 클리어
  const handleNavigateModalProject = (proj: ProjectItem) => {
    setSelectedModalProject(proj);
    if (onClearSelectedProject) {
      onClearSelectedProject();
    }
  };

  const keywords = [
    "ALL",
    "Enterprise",
    "Financial",
    "Commerce",
    "Brand & Design",
    "Mobile",
  ];

  // ── Projects Hierarchy (Top 3 Featured Showcase → Other Works with Interactive Filter) ──
  const top3Ids = ["doolinker", "intranet", "dworks-integrated-product"];
  const top3Projects = PROJECTS_DATA.filter((p) => top3Ids.includes(p.id));
  const otherProjects = PROJECTS_DATA.filter((p) => !top3Ids.includes(p.id));

  const matchesKeyword = (p: ProjectItem): boolean => {
    if (activeKeyword === "ALL") return true;
    if (activeKeyword === "Brand & Design") {
      return p.keyword.includes("Brand") || p.keyword.includes("Design");
    }
    return p.keyword.includes(activeKeyword);
  };

  const filteredOtherProjects: ProjectItem[] = otherProjects.filter(matchesKeyword);

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? "60px 16px" : "110px 40px 90px 40px",
        maxWidth: "1440px",
        margin: "0 auto",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      {/* 1. Giant Bold PROJECTS Section Header (히어로 세리프 폰트 패밀리 완벽 통일) */}
      <div className="projects-header-print" style={{ marginBottom: isMobile ? "32px" : "48px" }}>
        <span className="section-label" style={{ fontSize: "11px", fontWeight: 500, color: "#2563EB", letterSpacing: "0.14em", display: "block", marginBottom: "8px" }}>
          SELECTED WORKS
        </span>
        <h2
          className="projects-title-h2 editorial-display-title"
          style={{
            fontSize: isMobile ? "44px" : "clamp(54px, 6.4vw, 84px)",
            fontWeight: 800,
            color: "#111111",
            margin: "0 0 16px 0",
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
          }}
        >
          Projects
        </h2>
        <p style={{ fontSize: isMobile ? "14px" : "17px", color: "#6B7280", margin: 0, maxWidth: "900px", lineHeight: 1.6 }}>
          엔터프라이즈 플랫폼부터 금융, 커머스까지 — 복잡한 문제를 구조화하고 제품의 방향과 경험을 설계해온 주요 프로젝트입니다.
        </p>
      </div>

      {/* ── 2. TOP 3 FEATURED PROJECTS (안정적인 좌측 정보 / 우측 썸네일 일관 에디토리얼 쇼케이스) ──────────── */}
      <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: isMobile ? "24px" : "32px", marginBottom: isMobile ? "48px" : "68px" }}>
        {top3Projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              cursor: "pointer",
              padding: 0,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1.15fr",
              minHeight: isMobile ? "auto" : "360px",
              backgroundColor: "#F8F9FA",
            }}
            onClick={() => setSelectedModalProject(project)}
          >
            {/* 👈 Left Column: Detailed Info */}
            <div
              style={{
                padding: isMobile ? "24px 20px" : "32px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: isMobile ? "16px" : "20px",
                backgroundColor: "#F8F9FA",
              }}
            >
              <div>
                {/* Badge & Category */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 900, color: "#2563EB", letterSpacing: "0.08em" }}>
                    CASE {project.num}
                  </span>
                  <span style={{ color: "#D1D5DB", fontSize: "11px", fontWeight: 300 }}>/</span>
                  <span style={{ fontSize: "11px", color: "#6B7280", fontWeight: 700, letterSpacing: "0.04em" }}>
                    {project.keyword.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: isMobile ? "22px" : "clamp(24px, 2.2vw, 30px)",
                    fontWeight: 900,
                    color: "#111111",
                    margin: "0 0 10px 0",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                  }}
                >
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p
                  style={{
                    fontSize: isMobile ? "13px" : "14.5px",
                    color: "#4B5563",
                    lineHeight: 1.6,
                    margin: "0 0 16px 0",
                    fontWeight: 500,
                    wordBreak: "keep-all",
                  }}
                >
                  {project.description}
                </p>

                {/* Role Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.role.split(" · ").map((r) => (
                    <span
                      key={r}
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#374151",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E5E7EB",
                        padding: "3.5px 11px",
                        borderRadius: "9999px",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Period & CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid #E5E7EB",
                  paddingTop: "14px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 600 }}>
                  {project.period.replace("~", "—")}
                </span>
                <span
                  className="view-case-link"
                  style={{
                    fontSize: "13px",
                    color: "#2563EB",
                    fontWeight: 800,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  View Case
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* 👉 Right Column: Full-Bleed Thumbnail Image */}
            <div
              className="card-thumb"
              style={{
                width: "100%",
                height: "100%",
                minHeight: isMobile ? "240px" : "100%",
                borderRadius: isMobile ? "0 0 14px 14px" : "0 14px 14px 0",
                border: "none",
                borderLeft: isMobile ? "none" : "1px solid #E5E7EB",
                borderTop: isMobile ? "1px solid #E5E7EB" : "none",
                overflow: "hidden",
                backgroundColor: "#F8F9FA",
                position: "relative",
              }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── 3. OTHER SELECTED WORKS (필터 칩과 함께 자연스럽게 탐색하는 3열 그리드) ─────────────────────── */}
      {otherProjects.length > 0 && (
        <div className="no-print">
          {/* Sub-label & Filter Chips Header Row */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: isMobile ? "14px" : "20px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#9CA3AF",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              OTHER SELECTED WORKS
            </span>

            {/* Interactive Keyword Chips Filter */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                paddingBottom: "2px",
                maxWidth: "100%",
              }}
            >
              {keywords.map((kw) => {
                const isSelected = activeKeyword === kw;
                return (
                  <button
                    key={kw}
                    onClick={() => setActiveKeyword(kw)}
                    style={{
                      fontSize: isMobile ? "11px" : "12px",
                      fontWeight: 700,
                      padding: "5px 13px",
                      borderRadius: "9999px",
                      border: isSelected ? "1px solid #111111" : "1px solid #E5E7EB",
                      backgroundColor: isSelected ? "#111111" : "#F8F9FA",
                      color: isSelected ? "#FFFFFF" : "#4B5563",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "#E5E7EB";
                        e.currentTarget.style.color = "#111111";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "#F8F9FA";
                        e.currentTarget.style.color = "#4B5563";
                      }
                    }}
                  >
                    {kw}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Compact Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? "16px" : "20px",
            }}
          >
            {filteredOtherProjects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                style={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                onClick={() => setSelectedModalProject(p)}
              >
                {/* Thumbnail */}
                <div
                  className="card-thumb"
                  style={{
                    width: "100%",
                    aspectRatio: "16/10",
                    borderRadius: "13px 13px 0 0",
                    border: "none",
                    borderBottom: "1px solid #E5E7EB",
                    overflow: "hidden",
                    backgroundColor: "#F8F9FA",
                  }}
                >
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                </div>
                {/* Info (Ultra Clean Single-Line Caption) */}
                <div
                  style={{
                    padding: isMobile ? "10px 14px" : "12px 16px",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <h3
                    className="other-card-title"
                    style={{
                      fontSize: isMobile ? "14.5px" : "15.5px",
                      fontWeight: 800,
                      color: "#111111",
                      margin: 0,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {p.title}
                  </h3>
                  <span style={{ fontSize: "11.5px", color: "#9CA3AF", fontWeight: 600, flexShrink: 0 }}>
                    {p.keyword} · {p.period.match(/\d{4}/)?.[0] ?? p.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Case Study Modal Dialog */}
      {selectedModalProject && (
        <CaseStudyDialog
          project={selectedModalProject}
          onClose={handleCloseModal}
          onNavigateProject={handleNavigateModalProject}
          isMobile={isMobile}
        />
      )}

      {/* 🌟 6. Print-only Detailed Cases Booklet (웹에서는 숨기고 인쇄 시에만 모달 속 상세 내용을 세로 책자처럼 출력) */}
      <div className="print-only-detailed-cases">


        {PROJECTS_DATA.map((p) => {
          // 인쇄용 첫 번째 대표 이미지
          const primarySlide = p.slides[0];
          const shouldBreakBefore = true; // 🌟 Projects 타이틀과 타임라인이 한 페이지로 결합되고, 각 케이스 스터디는 새 A4 페이지에서 정갈하게 시작!

          return (
            <div
              key={p.id}
              className="print-case-page"
              style={{
                pageBreakBefore: shouldBreakBefore ? "always" : "auto",
                breakBefore: shouldBreakBefore ? "page" : "auto",
                marginBottom: "48px",
                paddingBottom: "36px",
              }}
            >
              {/* Header Info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>
                    CASE {p.num}
                  </span>
                  <h3 style={{ fontSize: "19px", fontWeight: 900, color: "#111111", margin: "4px 0 0 0", letterSpacing: "-0.02em" }}>
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* 🌟 4-Column Professional Metadata Spec Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "16px",
                  borderBottom: "1px solid #F3F4F6",
                  paddingBottom: "12px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "9px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "2px", letterSpacing: "0.06em" }}>
                    CLIENT
                  </span>
                  <strong style={{ fontSize: "11.5px", fontWeight: 800, color: "#111111", display: "block" }}>
                    {p.client}
                  </strong>
                </div>

                <div>
                  <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "9px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "2px", letterSpacing: "0.06em" }}>
                    CATEGORY
                  </span>
                  <strong style={{ fontSize: "11.5px", fontWeight: 800, color: "#111111", display: "block" }}>
                    {p.keyword}
                  </strong>
                </div>

                <div>
                  <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "9px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "2px", letterSpacing: "0.06em" }}>
                    DATE (PERIOD)
                  </span>
                  <strong style={{ fontSize: "11.5px", fontWeight: 800, color: "#2563EB", display: "block" }}>
                    {p.period}
                  </strong>
                </div>

                <div>
                  <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "9px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "2px", letterSpacing: "0.06em" }}>
                    ROLE
                  </span>
                  <strong style={{ fontSize: "11px", fontWeight: 800, color: "#111111", display: "block", lineHeight: 1.3 }}>
                    {p.role}
                  </strong>
                </div>
              </div>

              {/* 🌟 Showcase Slides for Printing (설명 없이 깔끔한 4개 제품 이미지만 2x2 액자로 출력) */}
              {(() => {
                const printSlides = p.slides ? p.slides.slice(0, 4) : [];
                return printSlides.length > 0 ? (
                  <div
                    className={`print-slides-grid print-slides-grid-${printSlides.length}`}
                    data-count={printSlides.length}
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        printSlides.length === 1
                          ? "1fr"
                          : printSlides.length === 3
                          ? "repeat(3, 1fr)"
                          : "repeat(2, 1fr)",
                      gap: "14px",
                      marginBottom: "28px",
                      pageBreakInside: "avoid",
                      breakInside: "avoid",
                    }}
                  >
                    {printSlides.map((slide, sIdx) => (
                      <div
                        key={sIdx}
                        className="print-slide-card"
                        style={{
                          width: "100%",
                          aspectRatio: printSlides.length === 1 ? "16/9" : "16/10",
                          backgroundColor: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                          borderRadius: "6px",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pageBreakInside: "avoid",
                          breakInside: "avoid",
                        }}
                      >
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          loading="eager"
                          decoding="sync"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : null;
              })()}

              {/* 🌟 3-Segment Story in Print Booklet (PROBLEM / APPROACH / IMPACT) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* ──────────────────── 01 PROBLEM (핵심 제목 1~2줄 + 설명 2~3줄) ──────────────────── */}
                <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 900, color: "#2563EB", letterSpacing: "0.1em" }}>01</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>PROBLEM</span>
                  </div>
                  <h4 style={{ fontSize: "14px", color: "#111111", margin: "0 0 6px 0", fontWeight: 900, letterSpacing: "-0.015em", lineHeight: 1.35, whiteSpace: "pre-line" }}>
                    {p.story ? p.story.problem.headline : "핵심 문제"}
                  </h4>
                  <p style={{ fontSize: "11px", color: "#4B5563", lineHeight: 1.6, margin: 0, whiteSpace: "pre-line", maxWidth: "700px" }}>
                    {renderStoryDesc(p.story ? p.story.problem.desc.split("\n\n")[0] : p.challenge)}
                  </p>
                </div>

                {/* ──────────────────── 02 APPROACH (핵심 제목 1~2줄 + 설명 2~3줄) ──────────────────── */}
                <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 900, color: "#2563EB", letterSpacing: "0.1em" }}>02</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>APPROACH</span>
                  </div>
                  <h4 style={{ fontSize: "14px", color: "#111111", margin: "0 0 6px 0", fontWeight: 900, letterSpacing: "-0.015em", lineHeight: 1.35, whiteSpace: "pre-line" }}>
                    {p.story ? p.story.process.headline : "핵심 판단 및 설계"}
                  </h4>
                  <p style={{ fontSize: "11px", color: "#4B5563", lineHeight: 1.6, margin: 0, whiteSpace: "pre-line", maxWidth: "700px" }}>
                    {renderStoryDesc(p.approach)}
                  </p>
                </div>

                {/* ──────────────────── 03 IMPACT (핵심 제목 1~2줄 + 설명 1~3줄 + 핵심 수치 인라인 강조) ──────────────────── */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 900, color: "#2563EB", letterSpacing: "0.1em" }}>03</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>IMPACT</span>
                  </div>
                  <h4 style={{ fontSize: "14px", color: "#111111", margin: "0 0 6px 0", fontWeight: 900, letterSpacing: "-0.015em", lineHeight: 1.35, whiteSpace: "pre-line" }}>
                    {p.story ? p.story.result.headline : "결과 및 영향"}
                  </h4>
                  <p style={{ fontSize: "11px", color: "#4B5563", lineHeight: 1.6, margin: 0, whiteSpace: "pre-line", maxWidth: "700px" }}>
                    {renderImpactWithHighlights(p.outcome)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
