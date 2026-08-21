import { useState, useEffect } from "react";

// DOOLINKER
import imgDashboard from "../../imports/optimized/dolinker-dashboard.webp";
import imgWorkflow from "../../imports/optimized/dolinker-workflow.webp";
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
import imgHelloLinkMagazine from "../../imports/mobile-hellolink-magazine.png";
import imgShaluv from "../../imports/commerce-shaluv.png";
import imgShaluvPromotions from "../../imports/optimized/commerce-shaluv-promotions.png";
import imgDime from "../../imports/optimized/mobile-dime.webp";
import imgLMS from "../../imports/hanmilab-lms.png";

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

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  categoryFlow: string;
  keyword: string;
  client: string;
  period: string;
  serviceType: string;
  role: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  pipelineTitle?: string;
  pipelineSteps?: PipelineStep[];
  bullets?: { label: string; text: string }[];
  tags: string[];
  thumbnail: string;
  slides: ShowcaseSlide[];
  isFeatured?: boolean;
}

// ─── Unified WORK Data (Web + Enterprise + Mobile Apps) ──────────────────────
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "doolinker",
    num: "01",
    title: "DOOLINKER",
    subtitle: "Workflow Automation Platform",
    categoryFlow: "Brand → Product → System",
    keyword: "Enterprise",
    client: "도전하는사람들",
    period: "2025.11 ~ 2026.04",
    serviceType: "Workflow Automation Platform",
    role: "Product Design",
    description: "Trigger / Action 기반의 복잡한 비즈니스 로직을 비전문가도 직관적으로 구성할 수 있는 워크플로우 자동화 플랫폼을 설계했습니다.",
    challenge: "복잡한 엔터프라이즈 자동화 로직 설정 과정에서 사용자가 직관적으로 연결 상태를 파악하기 어렵고 진입 장벽이 높았음.",
    approach: "노드 기반 드래그 앤 드롭 Canvas 인터랙션 및 5단계 파이프라인(Trigger-Action-Monitor) 체계를 설계하고 Hi-Fi 프로토타입으로 검증.",
    outcome: "Foundations 6종, Components 26종 디자인 시스템을 완결하고 실서비스 환경설정 및 워크플로우 빌더 100% 릴리즈.",
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
      { src: imgWorkflow, alt: "Workflow Builder", tabLabel: "Workflow Builder", title: "Drag & Drop으로 Workflow를 구성하다", caption: "Node 선택·연결·설정·실행 인터랙션을 Hi-Fi 프로토타입으로 빠르게 구체화" },
      { src: imgDashboard, alt: "Dashboard", tabLabel: "Dashboard", title: "자동화의 생성 · 실행 · 모니터링을 하나의 흐름으로", caption: "Trigger / Action 기반 복잡한 자동화 로직을 사용자가 직접 구성하고 상태 확인" },
      { src: imgDoolinkerDS, alt: "Design System", tabLabel: "Design System", title: "Design Principles에서 Component까지 — 확장 가능한 UI 기준", caption: "FLOW · SIMPLICITY · FLEXIBILITY 3개 원칙 기반 Foundations 6/6, Components 26/26 완성" },
      { src: imgSettings, alt: "Settings", tabLabel: "Settings", title: "공통 컴포넌트 실서비스 적용", caption: "디자인 시스템 컴포넌트를 활용하여 구축된 계정 및 시스템 환경 설정" },
    ],
  },
  {
    id: "intranet",
    num: "02",
    title: "MIZUHO PORTAL",
    subtitle: "일본 미즈호(MIZUHO) 은행 사내 포탈",
    categoryFlow: "IA → Permission → System",
    keyword: "Financial",
    client: "도전하는사람들",
    period: "2025.11 ~ 2026.04",
    serviceType: "MIZUHO Bank Enterprise Portal",
    role: "Product Design",
    description: "일본 미즈호(MIZUHO) 은행 사내 포탈의 정보구조와 5단계 권한 인가 체계를 설계하여 사용자 역할별 안전하고 명확한 접근 경험을 구현했습니다.",
    challenge: "다수의 금융 서비스와 대용량 트랜잭션 모듈이 파편화되어 역할별 접근 권한 및 데이터 모니터링 체계가 불명확했음.",
    approach: "사용자 맞춤 포탈과 총괄 어드민을 분리한 이중 포탈 IA를 수립하고, 대용량 금융 데이터 처리에 최적화된 고밀도 Data Grid 컴포넌트 구축.",
    outcome: "User-Org-Role-Permission 5단계 인가 모델 수립 및 금융 도메인 맞춤형 토큰 기반 전사 디자인 시스템 규격화.",
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
    isFeatured: true,
    slides: [
      { src: imgIntranetHome, alt: "어드민 포탈", tabLabel: "어드민 총괄 포탈", title: "금융 이중 포탈 어드민 대시보드", caption: "전체 금융 서비스 모듈의 활성화 상태와 트랜잭션 장애 지표 실시간 모니터링" },
      { src: imgIntranetUserPortal, alt: "사용자 포탈", tabLabel: "사용자 맞춤 포탈", title: "역할 기반 인가 포탈", caption: "부서 및 권한에 따라 인가된 금융 서비스만 접근하도록 분기 처리" },
      { src: imgIntranetTx, alt: "Transaction", tabLabel: "Transaction Grid", title: "Token · Component 기반 디자인 시스템과 제품 적용", caption: "대용량 금융 데이터 처리를 위한 고밀도 그리드 및 공통 Component 구성" },
      { src: imgIntranetUser, alt: "권한 관리", tabLabel: "권한 관리 체계", title: "사용자 역할과 정보 접근 범위를 제품 구조로", caption: "업무 포털의 정보구조와 권한 체계를 설계해 사용자별 접근 경험 명확화" },
      { src: imgIntranetDS, alt: "Design System", tabLabel: "Design System", title: "금융 도메인 맞춤형 디자인 시스템", caption: "신뢰성을 위한 컬러/타이포 토큰 및 고밀도 테이블 컴포넌트 규격화" },
    ],
  },
  {
    id: "dualspace",
    num: "03",
    title: "DUALSPACE",
    subtitle: "Unified Communication Platform & Multi-Product Suite (2024~2025)",
    categoryFlow: "Problem → Structure → Hi-Fi Prototype → Integrated Product",
    keyword: "Enterprise",
    client: "㈜스펙트라",
    period: "2024.09 ~ 2024.10",
    serviceType: "Unified Enterprise Platform",
    role: "Product Design",
    description: "분리되어 있던 1:1 고객상담과 N:N 파트너 협업을 하나의 단일 인터페이스로 통합하여 업무 연속성을 완성했습니다.",
    challenge: "1:1 고객상담(CS Talk)과 N:N 파트너 협업(SalesBridge)이 분리되어 사용자가 두 도구를 오가며 작업 흐름이 단절됨.",
    approach: "대화 흐름, 권한 구조, 상담-협업 연계 시나리오를 일원화한 통합 IA를 수립하고 20~30화면 실서비스 수준의 Hi-Fi 프로토타입 단독 리딩.",
    outcome: "PM 및 개발팀과 협업하여 멀티 프로덕트 통합 제품(DWorks Integrated)의 MVP 범위 정의 및 실서비스 통합 설계 완결.",
    pipelineTitle: "UNIFIED PRODUCT ECOSYSTEM",
    pipelineSteps: [
      { label: "CS TALK (1:1)" },
      { label: "SALESBRIDGE (N:N)" },
      { label: "DUALSPACE HUB" },
      { label: "HI-FI PROTOTYPE" },
      { label: "INTEGRATED PRODUCT" },
    ],
    tags: ["Unified_Communication", "MVP_Leading", "UX_Architecture", "Hi_Fi_Prototype", "Sole_Design"],
    thumbnail: imgDworksProduct,
    slides: [
      { src: imgDualspaceArch, alt: "통합 생태계", tabLabel: "통합 생태계", title: "상담과 협업 — 분리된 두 제품을 하나의 경험으로", caption: "CS Talk(1:1 상담)과 SalesBridge(N:N 협업)을 통합한 신규 서비스 구조", fit: "contain" },
      { src: imgDualspaceCustomer, alt: "1:1 상담", tabLabel: "1:1 상담 뷰", title: "사용자 관계 · 역할 · 권한 · 정보 접근을 구조화", caption: "복수 사용자 기반의 복잡한 관계를 제품의 대화 흐름과 접근 구조로 전환" },
      { src: imgDualspacePartner, alt: "파트너 협업", tabLabel: "파트너 협업 뷰", title: "Prototype으로 제품 방향을 구체화", caption: "요구사항을 화면으로 옮기기보다 유사 기능과 우선순위를 정리해 MVP 범위 제안" },
      { src: imgDworksProduct, alt: "통합 제품화", tabLabel: "통합 제품화", title: "DWorks 멀티 프로덕트 통합 제품 설계", caption: "PM과 협업하여 기능 명세를 UX 관점으로 재구성하고 MVP 기준으로 구조 정리" },
    ],
  },
  {
    id: "dworks-design-system",
    num: "04",
    title: "DWORKS DESIGN SYSTEM",
    subtitle: "Multi-Product Design System (Figma Variables & Components 26)",
    categoryFlow: "Foundation → Token Variables → Components 26",
    keyword: "Design System",
    client: "㈜스펙트라",
    period: "2024.01 ~ 2024.06",
    serviceType: "Enterprise Design System",
    role: "Brand & Design System",
    description: "Figma Variables 기반 Foundations 6종 및 공통 Components 26종을 구축하여 스펙트라 전사 제품군의 UI 개발 표준을 수립했습니다.",
    challenge: "멀티 프로덕트 전반에서 UI 패턴과 컴포넌트가 파편화되어 신규 화면 개발 시 디자인·엔지니어링 리소스 중복과 일관성 저하 발생.",
    approach: "Figma Variables 기반 토큰(Color, Typography, Spacing) 체계를 정립하고 Foundations 6종과 공통 Components 26종 라이브러리를 구축하여 실서비스 제품과 연동.",
    outcome: "스펙트라 전사 제품군에 즉시 재사용 가능한 단일 디자인 시스템을 배포하여 디자인-개발 협업 효율 및 화면 일관성을 비약적으로 향상.",
    pipelineTitle: "DESIGN SYSTEM TOKENS & COMPONENTS",
    pipelineSteps: [
      { label: "FOUNDATIONS" },
      { label: "VARIABLES" },
      { label: "COMPONENTS 26" },
      { label: "DEV SYNC" },
    ],
    tags: ["Design_System", "Figma_Variables", "UI_Components", "Design_Tokens", "Governance"],
    thumbnail: imgDworksDSThumbnail,
    slides: [
      { src: imgDworksDSThumbnail, alt: "DWorks 디자인 시스템", tabLabel: "디자인 시스템 개요", title: "DWorks — 멀티 프로덕트 전사 디자인 시스템 구축", caption: "Figma Variables 기반 Foundations 6종 및 공통 Components 26종 디자인 시스템 가이드 수립" },
      { src: imgDworksDSPalette, alt: "기초 컬러 팔레트", tabLabel: "기초 컬러 팔레트", title: "기초 컬러 가이드라인 수립 (Primitive, Theme, Semantic)", caption: "Figma Foundation 기반의 체계화된 세부 컬러 칩 분배 및 일관성 확보" },
      { src: imgDworksDSPrimitive, alt: "Primitive 컬렉션", tabLabel: "Primitive 토큰", title: "Figma Variables — Primitive 컬러 토큰 수립", caption: "전사적으로 공통 사용되는 기초 시스템 기본 색상 및 투명도(Alpha) 토큰 변수 정의" },
      { src: imgDworksDSTheme, alt: "Theme 컬렉션", tabLabel: "Theme 토큰", title: "Figma Variables — 브랜드/제품별 Theme 컬러 토큰 분기", caption: "salesBridge, workflow, guestZone, csTalk의 독립적 색상 테마를 하나의 시스템 내부로 통합" },
      { src: imgDworksDSSemantic, alt: "Semantic 컬렉션", tabLabel: "Semantic 토큰", title: "Figma Variables — 의미 기반 Semantic 컬러 토큰 매핑", caption: "다크/라이트 모드, 배경, 테두리, 텍스트 등 실제 컴포넌트의 역할과 의미에 대응되는 의미 토큰 수립" },
    ],
  },
  {
    id: "salesbridge",
    num: "05",
    title: "SALESBRIDGE",
    subtitle: "Desktop Web (React) & Mobile PWA Collaboration Platform (2023)",
    categoryFlow: "Desktop Web (React) · Mobile PWA · Multi-User",
    keyword: "Enterprise",
    client: "㈜스펙트라",
    period: "2023.01 ~ 2023.12",
    serviceType: "Desktop React Platform & Mobile PWA",
    role: "Product Design",
    description: "본사-파트너사 간 다자간 소통을 위한 데스크톱 React 기반 협업 플랫폼을 구축하고, 추가로 모바일 PWA 앱을 지원하여 기기 제약 없는 협업 환경을 완성했습니다.",
    challenge: "본사-파트너사 간 다자간 소통과 파일 공유, 프로젝트 관리가 파편화되어 있었고, 데스크톱 중심의 고밀도 업무 환경과 이동 중 모바일 접근성을 동시에 충족해야 했음.",
    approach: "React 기반 데스크톱 대화·프로젝트 정보구조를 체계화하여 데스크톱 플랫폼을 구축하고, 추가로 이동 중에도 원활히 협업할 수 있도록 모바일 PWA 반응형 인터페이스 및 전용 브랜드 시스템을 설계.",
    outcome: "데스크톱 React 웹 플랫폼을 성공적으로 릴리즈하고 추가 모바일 PWA 지원을 통해 어디서나 끊김 없는(Seamless) 다자간 협업 환경을 구축.",
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
      { src: imgSalesBridgeBrand, alt: "브랜드 아이덴티티", tabLabel: "브랜드 & 모바일 PWA", title: "브랜드 아이덴티티 & 모바일 PWA 지원", caption: "데스크톱 웹과 모바일 PWA를 아우르는 브랜드 심볼·워드마크 및 일관된 디자인 시스템 구축", fit: "contain" },
    ],
  },
  {
    id: "dworks-brand-identity",
    num: "06",
    title: "DWORKS BRAND IDENTITY",
    subtitle: "Enterprise DX Rebranding & Official Corporate Website (2023)",
    categoryFlow: "DX Vision → Logo Redesign → Brand Guide → Official Web",
    keyword: "Design System",
    client: "㈜스펙트라",
    period: "2023.06 ~ 2023.12",
    serviceType: "Enterprise DX Rebranding & Web",
    role: "Brand & Design System",
    description: "스펙트라의 엔터프라이즈 DX(디지털 전환) 비즈니스 도약을 선언하고, 파편화된 제품군을 아우르는 통합 브랜드 'DWorks' 아이덴티티와 공식 기업 홈페이지를 구축했습니다.",
    challenge: "스펙트라가 엔터프라이즈 DX(디지털 전환) 업무 도약을 추진하는 과정에서, 기존의 파편화된 개별 제품 시각 언어로는 기업의 새로운 DX 비전과 브랜드 통합성을 전달하기 어려웠음.",
    approach: "DX 혁신 가치를 담아낸 DWorks 심볼·로고 리디자인과 네이밍·컬러·톤앤매너 기준을 정립하여 브랜드 가이드를 제작하고, 이를 회사 공식 기업 홈페이지 디자인까지 확장 적용.",
    outcome: "엔터프라이즈 DX 도약을 견인하는 DWorks 통합 아이덴티티 체계를 완성하고 공식 웹사이트를 릴리즈하여 대내외 브랜드 신뢰도와 DX 시장 경쟁력을 극대화.",
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
    num: "07",
    title: "CS TALK",
    subtitle: "Customer Support Platform",
    categoryFlow: "UX개선 → Component → Design QA",
    keyword: "Enterprise",
    client: "㈜스펙트라",
    period: "2022.10 ~ 2023.06",
    serviceType: "Customer Support Dashboard",
    role: "UX/UI Design",
    description: "상담 업무의 정보 탐색과 상태 파악 속도를 극대화하고, 모듈형 컴포넌트 기반으로 운영 체계를 정비했습니다.",
    challenge: "고객사별 요구와 복잡한 상담 기능이 누적되면서 목록, 상세, 대시보드의 정보 우선순위와 시각적 일관성이 훼손됨.",
    approach: "상담 목록/상세의 정보 위계 전면 개편, 대시보드 구조 재정의, 모듈형 컴포넌트 상태 정의 및 Light/Dark 모니터링 뷰 설계.",
    outcome: "상담 운영 제품 전반에서 즉시 재사용 가능한 화면 기준 수립 및 철저한 Design QA로 품질 완결.",
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
      { src: imgCSTalkOverview, alt: "대표 화면", tabLabel: "상담 포탈 대표 화면", title: "CS TALK — 대표 화면", caption: "상담 업무의 정보 탐색과 상태 파악을 개선하고, 반복 UI를 모듈화해 운영 체계 정리" },
      { src: imgCSTalkDashLight, alt: "Light Theme", tabLabel: "Light Dashboard", title: "상담 목록 · 대시보드 · 컴포넌트", caption: "운영 제품 전반에서 재사용 가능한 화면 기준과 컴포넌트 구조 마련" },
      { src: imgCSTalkDashDark, alt: "Dark Theme", tabLabel: "Dark Dashboard", title: "다크 테마 모니터링", caption: "대시보드 구조 재정의 및 모듈형 컴포넌트 상태 정의" },
    ],
  },
  {
    id: "commerce-shaluv",
    num: "08",
    title: "SHALUV",
    subtitle: "Kids Fashion Niche Rebranding & Multi-Channel Growth (2019~2022)",
    categoryFlow: "Niche Concept → Lovely Mood Rebranding → 14x Traffic → Growth",
    keyword: "Commerce",
    client: "어스투 (US2)",
    period: "2019.08 ~ 2022.09",
    serviceType: "E-Commerce Multi-Channel Brand",
    role: "Brand & E-Commerce",
    description: "여아 부모를 정조준한 러블리 무드 니치 브랜드 리뉴얼과 상품 컨셉 기획을 주도하여 고객 유입 14배 성장 및 연매출 1억을 달성했습니다.",
    challenge: "스마트스토어·쿠팡·카카오쇼핑 등 치열한 이커머스 채널에서 기존의 평범한 상품 나열 방식으로는 차별화가 어려웠고, 타깃 고객의 시선을 단번에 사로잡을 명확한 브랜드 컨셉이 부재했음.",
    approach: "여자아이 부모의 취향을 겨냥한 러블리 무드(Lovely Mood)의 니치 타깃 컨셉을 수립하고, 브랜드 아이덴티티 리디자인 및 멀티 이커머스 채널(스마트스토어·자사몰·쿠팡·카카오)의 상품 비주얼을 전면 개편.",
    outcome: "독보적인 러블리 니치 컨셉으로 충성 고객 팬덤을 형성하여 채널 유입 14배 급증 및 연매출 1억 원을 달성하며 이커머스 비즈니스 고속 성장 견인.",
    pipelineTitle: "NICHE BRANDING & MULTI-CHANNEL FLOW",
    pipelineSteps: [
      { label: "MARKET RESEARCH" },
      { label: "LOVELY MOOD" },
      { label: "MULTI-CHANNEL" },
      { label: "14X TRAFFIC / 100M" },
    ],
    tags: ["E_Commerce", "Niche_Branding", "Lovely_Mood", "Multi_Channel", "Revenue_Growth"],
    thumbnail: imgShaluv,
    slides: [
      { src: imgShaluv, alt: "SHALUV 이커머스 쇼핑몰", tabLabel: "러블리 무드 & 멀티채널", title: "SHALUV — 여아 타깃 러블리 무드 리브랜딩", caption: "여자아이 부모를 위한 러블리 무드 니치 브랜드 리뉴얼 및 멀티 채널(스마트스토어·자사몰·쿠팡·카카오) 비주얼 개편으로 14배 유입 성장 및 연매출 1억 달성", fit: "contain" },
      { src: imgShaluvPromotions, alt: "SHALUV 프로모션 시안", tabLabel: "프로모션 디자인", title: "SHALUV — 시즌별 배송 안내 및 상품 프로모션 기획", caption: "추석/크리스마스 시즌별 배송 안내 캘린더와 가을 시즌 룩북 상품 상세 웹 그래픽 시안 수립", fit: "contain" },
    ],
  },
  {
    id: "mobile-dime",
    num: "09",
    title: "DIME",
    subtitle: "Social Dating & Matching Mobile App (iOS · Android)",
    categoryFlow: "Social Dating · Card Matching · Native App",
    keyword: "Enterprise",
    client: "㈜다임 (DIME)",
    period: "2017.08 ~ 2018.03",
    serviceType: "Social Dating Native App",
    role: "UX/UI Design",
    description: "카드 스와이프 제스처와 프로필 탐색 인터랙션을 극대화한 소셜 데이팅 네이티브 모바일 앱 UX/UI를 설계했습니다.",
    challenge: "단순 텍스트 나열형 프로필 구조로 인해 사용자 간 탐색 피로도가 높고 매칭 전환율이 저조함.",
    approach: "한 손 조작(Thumb Zone)에 최적화된 카드 스와이프 제스처 인터랙션 및 프로필 상세 탐색, 매칭 즉시 대화방 진입 플로우 설계.",
    outcome: "iOS/Android 모바일 플랫폼 가이드라인에 부합하는 소셜 데이팅 인터랙션 UI 구축.",
    pipelineTitle: "SOCIAL MATCHING INTERACTION FLOW",
    pipelineSteps: [
      { label: "DISCOVERY" },
      { label: "CARD SWIPE" },
      { label: "MATCHING" },
      { label: "CHAT ROOM" },
    ],
    tags: ["Social_Dating", "iOS_Android", "Card_Swipe", "Mobile_UX", "Native_App"],
    thumbnail: imgDime,
    slides: [
      { src: imgDime, alt: "DIME", tabLabel: "데이팅 & 매칭 화면", title: "DIME — 소셜 데이팅 & 프로필 매칭 앱", caption: "프로필 카드 탐색과 제스처 인터랙션을 최적화한 소셜 데이팅 네이티브 모바일 앱" },
    ],
  },
  {
    id: "hanmilab-lms",
    num: "10",
    title: "HANMILAB LMS",
    subtitle: "LMS Edutech Platform & Admin System (Web · Mobile · Publishing)",
    categoryFlow: "Branding → Web (72p) → Admin/Mobile (62p) → Publishing",
    keyword: "LMS",
    client: "한미랩 (HANMILAB)",
    period: "2017.03 ~ 2017.07",
    serviceType: "Edutech LMS & Admin System",
    role: "UX/UI & Publishing",
    description: "국비지원 교육과정 온라인 수강과 시험 응시를 위한 반응형 사용자 웹(72p)과 관리자 어드민·모바일(62p)을 구축했습니다.",
    challenge: "복잡한 국비지원 교육과정 정보와 온라인 시험 응시 과정에서 학습자의 조작 혼선 및 관리자 운영 부담 발생.",
    approach: "학습자 중심의 직관적인 반응형 수강 웹(72p) 및 중간시험 유의사항 안내 모달 동선 설계, 고밀도 관리자 어드민·모바일(62p) 구축.",
    outcome: "브랜딩부터 퍼블리싱(웹 30%, 모바일 50%, 어드민 100%)까지 직접 완결하여 안정적인 에듀테크 플랫폼 릴리즈.",
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
    slides: [
      { src: imgLMS, alt: "HANMILAB LMS 한미아카데미", tabLabel: "LMS 반응형 웹 & 시험 모달", title: "HANMILAB LMS (한미아카데미) — 반응형 학습 플랫폼", caption: "온라인 수강/시험 반응형 사용자 웹(72p) 및 국비지원 교육과정·온라인 시험 유의사항 모달 UI/UX 설계", fit: "contain" },
    ],
  },
  {
    id: "mobile-hellolink",
    num: "11",
    title: "HELLO LINK",
    subtitle: "Commerce & Mobile Magazine Native App (iOS · Android)",
    categoryFlow: "Code Commerce · Magazine · Mobile App",
    keyword: "Commerce",
    client: "인포뱅크㈜",
    period: "2015.12 ~ 2016.02",
    serviceType: "Code Commerce & Magazine App",
    role: "UX/UI Design",
    description: "고유 숫자 코드로 상품을 빠르게 탐색하고 결제하는 커머스 앱 'HELLO LINK'와 모바일 매거진을 단독 설계했습니다.",
    challenge: "오프라인 지면 매거진을 보고 모바일로 상품을 구매할 때 검색과 이동 절차가 번거로워 구매 전환이 차단됨.",
    approach: "매거진에 인쇄된 고유 번호를 다이얼하듯 앱에 입력하면 즉시 상품 상세 및 결제로 연결되는 원스톱 번호 코드 UX 설계.",
    outcome: "iOS/Android 네이티브 앱 UI 및 고품질 모바일 매거진 뷰어를 구축하여 O2O 커머스 비즈니스 모델 구현.",
    pipelineTitle: "NUMERIC COMMERCE & MAGAZINE FLOW",
    pipelineSteps: [
      { label: "DIALPAD" },
      { label: "MAGAZINE" },
      { label: "PRODUCT" },
      { label: "CHECKOUT" },
    ],
    tags: ["Mobile_Commerce", "iOS_Android", "Magazine_App", "Design_Guide", "Native_UI"],
    thumbnail: imgHelloLinkMagazine,
    slides: [
      { src: imgHelloLinkMagazine, alt: "HELLO LINK 매거진", tabLabel: "매거진 & 커머스 지면", title: "HELLO LINK — 매거진 연계 숫자 코드 커머스", caption: "여성동아 특별 추천 상품을 다이얼하듯 스마트폰에서 즉시 쇼핑하는 헬로링크 지면/매거진 뷰어", fit: "contain" },
      { src: imgHelloLink, alt: "HELLO LINK 모바일 앱", tabLabel: "모바일 네이티브 앱", title: "HELLO LINK — 모바일 네이티브 앱 UI", caption: "숫자 코드 다이얼패드 및 상품 정보·주문·결제 원스톱 프로세스 설계" },
    ],
  },
  {
    id: "mobile-nh",
    num: "12",
    title: "NH바로바로마켓",
    subtitle: "Commerce Native Mobile App (Android)",
    categoryFlow: "Mobile Commerce · Native App",
    keyword: "Commerce",
    client: "인포뱅크 · NH농협",
    period: "2014.04 ~ 2015.01",
    serviceType: "Commerce Native App (Android)",
    role: "UX/UI Design",
    description: "농협 모바일 커머스 앱의 상품 탐색과 장바구니/주문 결제 동선을 모바일 터치 사용성에 맞춰 전면 재설계했습니다.",
    challenge: "복잡한 카테고리와 장바구니/결제 단계로 인해 모바일 쇼핑 시 이탈률이 높고 터치 사용성이 낮았음.",
    approach: "한 손 조작(Thumb Zone)에 최적화된 하단 탭 바, 상품 탐색 동선 단순화, 안드로이드 머티리얼 가이드 기반 컴포넌트 리뉴얼.",
    outcome: "브랜딩, UI 설계, 개발 가이드 및 릴리즈 전 디자인 QA 100% 완결로 농협 모바일 커머스 현대화 달성.",
    pipelineTitle: "COMMERCE MOBILE FLOW",
    pipelineSteps: [
      { label: "DISCOVERY" },
      { label: "PRODUCT DETAIL" },
      { label: "CART & ORDER" },
      { label: "CHECKOUT" },
    ],
    tags: ["Mobile_App", "Android_Native", "E_Commerce", "Branding", "Design_Guide"],
    thumbnail: imgNH,
    slides: [
      { src: imgNH, alt: "NH바로바로마켓", tabLabel: "커머스 대표 화면", title: "NH바로바로마켓 — 모바일 커머스 전면 리뉴얼", caption: "상품 탐색부터 주문/결제까지 모바일 사용자 동선을 최적화한 네이티브 앱" },
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
  const currentSlide = project.slides[activeSlideIdx] ?? project.slides[0];

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

  // Esc key & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

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
            padding: isMobile ? "16px 20px" : "20px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 900, color: "#2563EB", letterSpacing: "0.05em" }}>
              CASE {project.num}
            </span>
            <span style={{ color: "#D1D5DB" }}>|</span>
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
        <div style={{ padding: isMobile ? "20px" : "32px 32px" }}>
          {/* 🌟 4-Column Professional Metadata Spec Bar (CLIENT · CATEGORY · DATE · SERVICE) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? "14px 12px" : "24px",
              borderBottom: "none",
              paddingBottom: "12px",
              marginBottom: "28px",
            }}
          >
            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "4px", letterSpacing: "0.06em" }}>
                CLIENT
              </span>
              <strong style={{ fontSize: "14px", fontWeight: 800, color: "#111111", display: "block" }}>
                {project.client}
              </strong>
            </div>

            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "4px", letterSpacing: "0.06em" }}>
                CATEGORY
              </span>
              <strong style={{ fontSize: "14px", fontWeight: 800, color: "#111111", display: "block" }}>
                {project.keyword}
              </strong>
            </div>

            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "4px", letterSpacing: "0.06em" }}>
                DATE (PERIOD)
              </span>
              <strong style={{ fontSize: "14px", fontWeight: 800, color: "#2563EB", display: "block" }}>
                {project.period}
              </strong>
            </div>

            <div>
              <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#9CA3AF", display: "block", marginBottom: "4px", letterSpacing: "0.06em" }}>
                ROLE
              </span>
              <strong style={{ fontSize: "13px", fontWeight: 800, color: "#111111", display: "block", lineHeight: 1.4 }}>
                {project.role}
              </strong>
            </div>
          </div>
          {/* High-Resolution Screen Frame with Interactive Dot Pagination */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "280px" : "500px",
              backgroundColor: "#F9FAFB",
              borderRadius: "8px",
              overflow: "hidden",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? "12px" : "24px",
              marginBottom: "28px",
            }}
          >
            <img
              key={currentSlide.src}
              src={currentSlide.src}
              alt={currentSlide.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain" as const,
                objectPosition: "center" as const,
                display: "block",
                animation: "fadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            />

            {/* Bottom Centered Pagination Dots (이전 디자인 복구) */}
            {project.slides.length > 1 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  backgroundColor: "rgba(17, 24, 39, 0.55)",
                  padding: "5px 10px",
                  borderRadius: "9999px",
                  backdropFilter: "blur(6px)",
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
                        width: isActive ? "18px" : "6px",
                        height: "6px",
                        borderRadius: "9999px",
                        backgroundColor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.45)",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>



          {/* 🌟 Editorial 3-Column Story Section (Challenge ➔ Approach ➔ Outcome) */}
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
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
                  CHALLENGE
                </span>
              </div>
              <h4 style={{ fontSize: "15px", color: "#111111", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: "-0.01em" }}>
                도전 과제
              </h4>
              <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                {project.challenge}
              </p>
            </div>

            {/* Column 2: Approach */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
                  APPROACH
                </span>
              </div>
              <h4 style={{ fontSize: "15px", color: "#111111", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: "-0.01em" }}>
                해결 방안
              </h4>
              <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                {project.approach}
              </p>
            </div>

            {/* Column 3: Outcome */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
                  OUTCOME
                </span>
              </div>
              <h4 style={{ fontSize: "15px", color: "#111111", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: "-0.01em" }}>
                수행 성과
              </h4>
              <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                {project.outcome}
              </p>
            </div>
          </div>

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
              <span>NEXT CASE : CASE {nextProj.num} · {nextProj.title}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main WORK Section (Unified Web, Enterprise & Mobile) ────────────────────
export function WorkSection({ w }: { w: number }) {
  const isMobile = w < 768;
  const [activeKeyword, setActiveKeyword] = useState<string>("ALL");
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  const keywords = [
    "ALL",
    "Enterprise",
    "Financial",
    "Commerce",
    "LMS",
    "Design System",
  ];

  // Filter projects by chip
  const filteredProjects = activeKeyword === "ALL"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.keyword === activeKeyword);

  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const gridProjects = filteredProjects.filter((p) => !p.isFeatured);

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
      {/* 1. Giant Bold PROJECTS Section Header */}
      <div style={{ marginBottom: isMobile ? "32px" : "44px" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.15em", display: "block", marginBottom: "8px" }}>
          SELECTED WORKS · 2014–2026
        </span>
        <h2
          className="projects-title-h2"
          style={{
            fontSize: isMobile ? "44px" : "clamp(56px, 6.5vw, 84px)",
            fontWeight: 900,
            color: "#111111",
            margin: "0 0 16px 0",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
          }}
        >
          PROJECTS
        </h2>
        <p style={{ fontSize: isMobile ? "14px" : "17px", color: "#6B7280", margin: 0, maxWidth: "900px", lineHeight: 1.6 }}>
          엔터프라이즈 플랫폼부터 금융, 이커머스, 디자인 시스템까지 — 15년간 비즈니스 성장을 견인한 핵심 프로덕트 아카이브입니다.
        </p>
      </div>

      {/* 2. Interactive Keyword Chips Filter (타이틀 바로 아래 나열) */}
      <div className="mobile-scroll-wrap" style={{ marginBottom: isMobile ? "32px" : "48px" }}>
        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "8px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          {keywords.map((kw) => {
            const isSelected = activeKeyword === kw;
            return (
              <button
                key={kw}
                onClick={() => setActiveKeyword(kw)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: isMobile ? "11px" : "12px",
                  fontWeight: 700,
                  padding: "6px 14px",
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

      {/* 3. Tier 1: Recent Top 2 Featured Showcase (최근 대표작 2선 상단 배치) */}
      {featuredProjects.length > 0 && (
        <div className="no-print" style={{ marginBottom: isMobile ? "40px" : "60px" }}>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? "24px" : "32px",
            }}
          >
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                style={{
                  padding: isMobile ? "16px" : "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedModalProject(p)}
              >
                <div>
                  <div
                    className="card-thumb"
                    style={{
                      width: "100%",
                      aspectRatio: "16/10",
                      marginBottom: "14px",
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

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 900, color: "#2563EB" }}>
                      CASE {p.num}
                    </span>
                    <span style={{ color: "#D1D5DB" }}>·</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#6B7280", fontWeight: 700 }}>
                      {p.client}
                    </span>
                  </div>

                  <h3 style={{ fontSize: isMobile ? "18px" : "20px", fontWeight: 900, color: "#111111", margin: "0 0 6px 0", letterSpacing: "-0.02em" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 12px 0", fontWeight: 500 }}>
                    {p.subtitle}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#9CA3AF" }}>
                    {p.keyword}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#2563EB", fontWeight: 800 }}>
                    View Case →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Tier 2: Selected Products Grid (선별 플랫폼 & 모바일 앱 8종) */}
      {gridProjects.length > 0 && (
        <div className="no-print">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? "20px" : "24px",
            }}
          >
            {gridProjects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                style={{
                  padding: isMobile ? "16px" : "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedModalProject(p)}
              >
                <div>
                  <div
                    className="card-thumb"
                    style={{
                      width: "100%",
                      aspectRatio: "16/10",
                      marginBottom: "14px",
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

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, color: "#2563EB" }}>
                      CASE {p.num}
                    </span>
                    <span style={{ color: "#D1D5DB" }}>·</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#6B7280", fontWeight: 700 }}>
                      {p.client}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#111111", margin: "0 0 4px 0" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 10px 0" }}>
                    {p.subtitle}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#9CA3AF" }}>
                    {p.keyword}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#2563EB", fontWeight: 800 }}>
                    View Case →
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
          onClose={() => setSelectedModalProject(null)}
          onNavigateProject={setSelectedModalProject}
          isMobile={isMobile}
        />
      )}

      {/* 🌟 6. Print-only Detailed Cases Booklet (웹에서는 완전히 숨기고 인쇄 시에만 모달 속 상세 내용을 세로 책자처럼 출력) */}
      <div className="print-only-detailed-cases" style={{ display: "none" }}>
        <div style={{ borderBottom: "2px solid #111111", paddingBottom: "12px", marginBottom: "36px", marginTop: "60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 900, color: "#111111", letterSpacing: "-0.03em", margin: 0 }}>
            SELECTED WORKS · DETAILED CASE STUDIES
          </h2>
        </div>

        {PROJECTS_DATA.map((p) => {
          // 인쇄용 첫 번째 대표 이미지
          const primarySlide = p.slides[0];

          return (
            <div
              key={p.id}
              className="print-case-page"
              style={{
                marginBottom: "48px",
                paddingBottom: "36px",
              }}
            >
              {/* Header Info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
                <div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>
                    CASE {p.num}
                  </span>
                  <h3 style={{ fontSize: "19px", fontWeight: 900, color: "#111111", margin: "4px 0 0 0", letterSpacing: "-0.02em" }}>
                    {p.title}
                  </h3>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#6B7280" }}>
                  {p.keyword}
                </span>
              </div>

              {/* 🌟 4-Column Professional Metadata Spec Bar (인쇄 시 메타 정보 바 보강 복구) */}
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

              {/* 🌟 Cover & Sub Images for Printing (최대 4개 이미지 제한, 1장일 땐 가로 꽉 차게, 2~4장일 땐 2단 바둑판 2x2 격자 나열) */}
              {(() => {
                const printSlides = p.slides.slice(0, 4);
                return printSlides.length > 0 ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: printSlides.length === 1 ? "1fr" : "repeat(2, 1fr)",
                      gap: "12px",
                      marginBottom: "24px",
                    }}
                  >
                    {printSlides.map((slide, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          backgroundColor: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                          borderRadius: "6px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </div>
                    ))}
                  </div>
                ) : null;
              })()}

              {/* 🌟 3-Segment Story Vertical List (웹 모달과 완전 동일한 에디토리얼 레이아웃 계층 적용) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Segment 1: Challenge */}
                <div style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: "16px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "3px", letterSpacing: "0.05em" }}>
                    01 / CHALLENGE
                  </span>
                  <h4 style={{ fontSize: "13.5px", color: "#111111", margin: "0 0 6px 0", fontWeight: 900, fontFamily: "inherit" }}>
                    문제 정의
                  </h4>
                  <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                    {p.challenge}
                  </p>
                </div>

                {/* Segment 2: Approach */}
                <div style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: "16px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "3px", letterSpacing: "0.05em" }}>
                    02 / APPROACH
                  </span>
                  <h4 style={{ fontSize: "13.5px", color: "#111111", margin: "0 0 6px 0", fontWeight: 900, fontFamily: "inherit" }}>
                    해결 방안
                  </h4>
                  <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                    {p.approach}
                  </p>
                </div>

                {/* Segment 3: Outcome */}
                <div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "3px", letterSpacing: "0.05em" }}>
                    03 / OUTCOME
                  </span>
                  <h4 style={{ fontSize: "13.5px", color: "#111111", margin: "0 0 6px 0", fontWeight: 900, fontFamily: "inherit" }}>
                    수행 성과
                  </h4>
                  <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                    {p.outcome}
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
