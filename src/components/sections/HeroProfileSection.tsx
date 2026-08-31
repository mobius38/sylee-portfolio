import { useState, useRef, useEffect } from "react";
import imgSamsungFire from "../../imports/optimized/mobile-samsungfire.webp";

// 🌟 각 프로젝트별 매핑용 대표 썸네일 이미지 임포트
import imgLogin from "../../imports/optimized/dolinker-login.webp";
import imgIntranetHome from "../../imports/optimized/intranet-admin.webp";
import imgDualspaceCustomer from "../../imports/optimized/dualspace-customer.webp";
import imgDworksProduct from "../../imports/optimized/dworks-product.webp";
import imgDworksBranding from "../../imports/optimized/dworks-branding.webp";
import imgDworksDSThumbnail from "../../imports/optimized/dworks-ds-thumbnail.jpg";
import imgDworksHiFiWoori from "../../imports/optimized/dworks-hifi-woori.jpg";
import imgDworksIsometric from "../../imports/optimized/dworks-integrated-isometric.jpg";
import imgSalesBridgeProduct from "../../imports/optimized/salesbridge-product.webp";
import imgCSTalkOverview from "../../imports/optimized/cstalk-overview.webp";
import imgShaluv from "../../imports/optimized/commerce-shaluv.webp";
import imgDime from "../../imports/optimized/mobile-dime.webp";
import imgLMS from "../../imports/optimized/hanmilab-lms.webp";
import imgHelloLink from "../../imports/optimized/mobile-hellolink.webp";
import imgNH from "../../imports/optimized/mobile-nh.webp";

export function HeroProfileSection({
  w,
  onSelectProject,
}: {
  w: number;
  onSelectProject?: (projId: string) => void;
}) {
  const isMobile = w < 768;
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // 🌟 시간차 페이드인 마운트 상태
  const [hoveredYearIdx, setHoveredYearIdx] = useState<number | null>(null);
  const [isTimelineHovered, setIsTimelineHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null); // 🌟 썸네일 팝업 DOM 레퍼런스

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 🌟 시간차 등장 모션을 위한 공통 스타일 빌더
  const getRevealStyle = (delayMs: number) => ({
    opacity: isMounted ? 1 : 0,
    transform: isMounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  // 🌟 프로젝트 ID별 대표 썸네일 매핑
  const projectThumbnails: Record<string, string> = {
    "doolinker": imgLogin,
    "intranet": imgIntranetHome,
    "dualspace": imgDualspaceCustomer,
    "dworks-integrated-product": imgDworksIsometric,
    "dworks-woori-capital": imgDworksHiFiWoori,
    "dworks-design-system": imgDworksDSThumbnail,
    "salesbridge": imgSalesBridgeProduct,
    "dworks-brand-identity": imgDworksBranding,
    "cstalk": imgCSTalkOverview,
    "commerce-shaluv": imgShaluv,
    "mobile-dime": imgDime,
    "hanmilab-lms": imgLMS,
    "mobile-hellolink": imgHelloLink,
    "mobile-nh": imgNH,
    "mobile-samsungfire": imgSamsungFire,
  };

  // 🌟 썸네일 호버 상태 (좌표는 state에 두지 않고 ref를 통해 DOM 직접 조작하여 60fps 보장)
  const [hoveredProject, setHoveredProject] = useState<{ id: string } | null>(null);

  // 15-Year 10-Month Career Timeline (Clean Recruiter-Friendly Structure)
  const timelineMilestones = [
    {
      year: "2026",
      items: [
        { date: "2026.04", title: "MIZUHO 은행 사내포털 설계 (IA, 권한, 컴포넌트)", projectId: "intranet" },
        { date: "2026.01", title: "DO.LiNKER Workflow 생성, 실행, 모니터링 UX 설계", projectId: "doolinker" },
      ],
    },
    {
      year: "2025",
      items: [
        { date: "2025.12", title: "Trigger/Action 기반 Workflow Builder UX 설계", projectId: "doolinker" },
        { date: "2025.11", title: "DO.LiNKER 브랜드 아이덴티티(BI) 수립", projectId: "doolinker" },
        { date: "2025.09", title: "우리금융캐피탈 B2B 수주용 DWorks Hi-Fi Prototype 완성", projectId: "dworks-woori-capital" },
        { date: "2025.07", title: "DWorks 멀티 프로덕트 통합 UX 아키텍처 설계 완료", projectId: "dworks-integrated-product" },
      ],
    },
    {
      year: "2024",
      items: [
        { date: "2024.10", title: "Dualspace 고객상담 및 협업 통합 플랫폼 설계 & Hi-Fi 프로토타입", projectId: "dualspace" },
        { date: "2024.06", title: "DWorks 제품군 공통 디자인 시스템 설계", projectId: "dworks-design-system" },
      ],
    },
    {
      year: "2023",
      items: [
        { date: "2023.12", title: "DWorks 엔터프라이즈 DX 통합 리브랜딩 & 웹사이트", projectId: "dworks-brand-identity" },
        { date: "2023.09", title: "SalesBridge 데스크톱 React & 모바일 PWA 협업 도구", projectId: "salesbridge" },
      ],
    },
    {
      year: "2022",
      items: [
        { date: "2022.10", title: "CS Talk 상담 대시보드 구조 개선 및 컴포넌트화", projectId: "cstalk" },
      ],
    },
    {
      year: "2019–22",
      items: [
        { date: "2019.06", title: "샬러브(SHALUV) 이커머스 D2C 브랜딩 및 13개 채널 확장", projectId: "commerce-shaluv" },
      ],
    },
    {
      year: "2017–18",
      items: [
        { date: "2018.06", title: "다임(DIME) 프로필 기반 매칭 앱 UX/UI 설계", projectId: "mobile-dime" },
        { date: "2017.07", title: "HANMILAB 국비지원 LMS 반응형 웹 & 모바일/어드민", projectId: "hanmilab-lms" },
      ],
    },
    {
      year: "2011–16",
      items: [
        { date: "2015.12", title: "HELLO LINK 지면 연계 숫자 코드 커머스 앱", projectId: "mobile-hellolink" },
        { date: "2014.10", title: "삼성화재 모바일 멤버십 서비스 UI/UX 설계", projectId: "mobile-samsungfire" },
        { date: "2014.04", title: "NH바로바로마켓 모바일 커머스 전면 리뉴얼", projectId: "mobile-nh" },
        { date: "2011.08", title: "네이티브 앱 iOS/Android UI 가이드 수립" },
      ],
    },
    {
      year: "2006–09",
      items: [
        { date: "2009.11", title: "곰플레이어, 곰오디오, 곰TV 미디어 GUI 디자인" },
        { date: "2008.08", title: "잡코리아 채용 플랫폼 UI 및 프로모션 디자인" },
        { date: "2006.12", title: "묵향온라인 게임 프로모션 웹 UI 설계" },
      ],
    },
  ];

  const checkScrollBounds = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);

      const cardWidth = isMobile ? 300 : 390;
      const newIdx = Math.round(scrollLeft / cardWidth);
      setActiveIdx(Math.min(Math.max(newIdx, 0), timelineMilestones.length - 1));
    }
  };

  const handleScrollToIdx = (targetIdx: number) => {
    if (scrollContainerRef.current) {
      const clampedIdx = Math.min(Math.max(targetIdx, 0), timelineMilestones.length - 1);
      const cardWidth = isMobile ? 300 : 390;
      scrollContainerRef.current.scrollTo({
        left: clampedIdx * cardWidth,
        behavior: "smooth",
      });
      setActiveIdx(clampedIdx);
      setTimeout(checkScrollBounds, 350);
    }
  };

  const handleScrollClick = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const cardWidth = isMobile ? 300 : 390;
      const targetScroll =
        direction === "left"
          ? currentScroll - cardWidth
          : currentScroll + cardWidth;
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setTimeout(checkScrollBounds, 350);
    }
  };

  return (
    <section
      id="about"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* 🌟 Ambient Royal Blue Glow Orb (경계선 없는 100% 무경계 소프트 앰비언트 광원) */}
      <div
        aria-hidden="true"
        className="no-print"
        style={{
          position: "absolute",
          top: isMobile ? "-220px" : "-380px",
          right: isMobile ? "-100px" : "min(8vw, 120px)",
          width: isMobile ? "520px" : "1100px",
          height: isMobile ? "520px" : "1100px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(59, 130, 246, 0.10) 30%, rgba(96, 165, 250, 0.04) 52%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: isMobile ? "56px 20px 48px 20px" : "clamp(90px, 8.5vw, 130px) clamp(24px, 5vw, 80px) 72px clamp(24px, 5vw, 80px)",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 🌟 프린트 시에만 상단에 나타나는 머리말 (Running Header) */}
        <div className="print-only-header" style={{ display: "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "32px" }}>
            <span style={{ fontSize: "14px", fontWeight: 800, color: "#111111", letterSpacing: "-0.02em" }}>
              LEE SUNYOUNG · PRODUCT DESIGNER PORTFOLIO
            </span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#4B5563" }}>
              mobius38@gmail.com
            </span>
          </div>
        </div>

        {/* 1. Giant Editorial Display Typography */}
        <div style={{ marginBottom: isMobile ? "28px" : "40px", ...getRevealStyle(100) }}>
          <span
            className="section-label"
            style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "#2563EB",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "14px",
            }}
          >
            PRODUCT DESIGN PORTFOLIO
          </span>

          <h1
            className="about-title-h1 editorial-display-title"
            style={{
              fontSize: isMobile ? "40px" : "clamp(54px, 6.4vw, 92px)",
              color: "#111111",
              margin: "0 0 28px 0",
              lineHeight: 1.06,
            }}
          >
            Product Designer<br />
            <span className="display-italic-part" style={{ color: "#6B7280" }}>
              who builds systems,
            </span><br />
            not screens.
          </h1>

          <p
            style={{
              fontSize: isMobile ? "14.5px" : "17px",
              fontWeight: 500,
              color: "#4B5563",
              lineHeight: 1.6,
              letterSpacing: "-0.015em",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            복잡한 비즈니스 로직을 구조화하고, 확장 가능한 디자인 시스템과 프로토타입으로 제품의 방향을 만듭니다.
          </p>
        </div>

        {/* 2. Sleek Meta Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "1.2fr 1.8fr 2fr auto",
            alignItems: "center",
            gap: isMobile ? "20px 16px" : "32px",
            borderTop: "1px solid #111111",
            borderBottom: "1px solid #E5E7EB",
            padding: isMobile ? "20px 0" : "24px 0",
            marginBottom: isMobile ? "48px" : "72px",
            ...getRevealStyle(300),
          }}
        >
          <div>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#9CA3AF", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
              EXPERIENCE
            </span>
            <span style={{ fontSize: "14.5px", fontWeight: 800, color: "#111111" }}>
              10+ Years
            </span>
          </div>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#9CA3AF", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
              SPECIALTY
            </span>
            <span style={{ fontSize: "14.5px", fontWeight: 800, color: "#111111" }}>
              B2B Enterprise · UX Architecture
            </span>
          </div>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#9CA3AF", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
              RECENT WORK
            </span>
            <span style={{ fontSize: "14px", fontWeight: 800, color: "#111111" }}>
              DO.LINKER (Workflow) · MIZUHO (Intranet)
            </span>
          </div>
          <div className="no-print" style={{ gridColumn: "auto", display: "flex", justifyContent: isMobile ? "flex-start" : "flex-end", alignItems: "flex-end" }}>
            <a
              href="#projects"
              className="no-print"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                padding: "10px 22px",
                borderRadius: "9999px",
                fontSize: "13.5px",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1D4ED8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2563EB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Case Studies →
            </a>
          </div>
        </div>

        {/* 3. Three Core Competencies */}
        <div className="about-competency-section" style={{ marginBottom: isMobile ? "48px" : "80px", ...getRevealStyle(550) }}>
          <div style={{ marginBottom: "20px" }}>
            <span className="competency-section-title section-label" style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.14em" }}>
              CORE COMPETENCIES (3대 핵심 역량)
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? "28px" : "40px" }}>
            {/* 01 */}
            <div
              className="competency-card-item"
              style={{
                paddingTop: "18px",
                borderTop: "1.5px solid #111111",
                backgroundColor: "transparent",
                transition: "border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = "#2563EB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = "#111111";
              }}
            >
              <span
                className="competency-card-number"
                style={{
                  fontSize: "18px",
                  fontWeight: 900,
                  color: "#2563EB",
                  display: "block",
                  marginBottom: "10px",
                  letterSpacing: "-0.02em",
                }}
              >
                01
              </span>
              <h3
                className="competency-card-title"
                style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: 900,
                  color: "#111111",
                  margin: "0 0 10px 0",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.3,
                }}
              >
                복잡한 제품 구조화
              </h3>
              <p
                className="competency-card-desc"
                style={{
                  fontSize: isMobile ? "14px" : "15px",
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: 1.65,
                  fontWeight: 500,
                }}
              >
                비즈니스 복잡도가 높은 워크플로우 자동화, 사내 다중 권한 포털의 정보구조(IA)와 업무 흐름을 직관적인 사용자 태스크 플로우로 단순화합니다.
              </p>
            </div>

            {/* 02 */}
            <div
              className="competency-card-item"
              style={{
                paddingTop: "18px",
                borderTop: "1.5px solid #111111",
                backgroundColor: "transparent",
                transition: "border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = "#2563EB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = "#111111";
              }}
            >
              <span
                className="competency-card-number"
                style={{
                  fontSize: "18px",
                  fontWeight: 900,
                  color: "#2563EB",
                  display: "block",
                  marginBottom: "10px",
                  letterSpacing: "-0.02em",
                }}
              >
                02
              </span>
              <h3
                className="competency-card-title"
                style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: 900,
                  color: "#111111",
                  margin: "0 0 10px 0",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.3,
                }}
              >
                디자인 시스템 설계 및 체계화
              </h3>
              <p
                className="competency-card-desc"
                style={{
                  fontSize: isMobile ? "14px" : "15px",
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: 1.65,
                  fontWeight: 500,
                }}
              >
                Figma Variables 기반 디자인 토큰과 공통 컴포넌트를 체계화해 여러 제품 설계에 활용할 수 있는 일관된 디자인 기준을 구축합니다.
              </p>
            </div>

            {/* 03 */}
            <div
              className="competency-card-item"
              style={{
                paddingTop: "18px",
                borderTop: "1.5px solid #111111",
                backgroundColor: "transparent",
                transition: "border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = "#2563EB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = "#111111";
              }}
            >
              <span
                className="competency-card-number"
                style={{
                  fontSize: "18px",
                  fontWeight: 900,
                  color: "#2563EB",
                  display: "block",
                  marginBottom: "10px",
                  letterSpacing: "-0.02em",
                }}
              >
                03
              </span>
              <h3
                className="competency-card-title"
                style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: 900,
                  color: "#111111",
                  margin: "0 0 10px 0",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.3,
                }}
              >
                인터랙티브 프로토타이핑 및 제품 검증
              </h3>
              <p
                className="competency-card-desc"
                style={{
                  fontSize: isMobile ? "14px" : "15px",
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: 1.65,
                  fontWeight: 500,
                }}
              >
                실서비스에 가까운 Hi-Fi Prototype을 설계해 복잡한 인터랙션과 요구사항을 검증하고 제품 경험을 구체화합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Full 15-Year 10-Month Timeline */}
        <div
          className="about-timeline-section"
          style={{ borderTop: "1px solid #111111", paddingTop: isMobile ? "36px" : "60px", ...getRevealStyle(700) }}
          onMouseEnter={() => setIsTimelineHovered(true)}
          onMouseLeave={() => setIsTimelineHovered(false)}
        >
          {/* Header Row */}
          <div style={{ marginBottom: isMobile ? "24px" : "36px" }}>
            <span className="section-label" style={{ fontSize: "11px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "6px", letterSpacing: "0.14em" }}>
              CAREER EXPANSION TIMELINE
            </span>
            <h3 className="timeline-section-h3" style={{ fontSize: isMobile ? "24px" : "36px", fontWeight: 900, color: "#111111", margin: "0 0 6px 0", letterSpacing: "-0.03em" }}>
              화면 설계에서 제품의 구조와 방향 설계로
            </h3>
            <p className="timeline-section-desc" style={{ fontSize: isMobile ? "14.5px" : "16px", color: "#374151", lineHeight: 1.65, margin: 0 }}>
              10년 이상 화면과 인터랙션 설계에서 시작해, 복잡한 제품의 사용성 개선과 디자인 시스템, 프로토타입 기반 제품 검증으로 확장해왔습니다.
            </p>
          </div>

          {/* Interactive Timeline Rail Container */}
          <div style={{ position: "relative" }}>
            {/* Left Directional Arrow */}
            <div
              style={{
                position: "absolute",
                left: "0px",
                top: "49px",
                transform: "translateY(-50%)",
                zIndex: 25,
                opacity: isTimelineHovered && canScrollLeft ? 1 : 0,
                pointerEvents: isTimelineHovered && canScrollLeft ? "auto" : "none",
                transition: "opacity 0.25s ease",
              }}
            >
              <button
                onClick={() => handleScrollClick("left")}
                aria-label="Previous milestone"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  backgroundColor: "#FFFFFF",
                  color: "#111111",
                  border: "1px solid #111111",
                  boxShadow: "none",
                  display: isMobile ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#111111";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.color = "#111111";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            {/* Right Directional Arrow */}
            <div
              style={{
                position: "absolute",
                right: "0px",
                top: "49px",
                transform: "translateY(-50%)",
                zIndex: 25,
                opacity: isTimelineHovered && canScrollRight ? 1 : 0,
                pointerEvents: isTimelineHovered && canScrollRight ? "auto" : "none",
                transition: "opacity 0.25s ease",
              }}
            >
              <button
                onClick={() => handleScrollClick("right")}
                aria-label="Next milestone"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  backgroundColor: "#FFFFFF",
                  color: "#111111",
                  border: "1px solid #111111",
                  boxShadow: "none",
                  display: isMobile ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#111111";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.color = "#111111";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Scrollable Track */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollBounds}
              className="mobile-scroll-wrap"
              style={{
                position: "relative",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                paddingTop: "36px",
                paddingBottom: "24px",
                paddingLeft: isMobile ? "16px" : "28px",
                paddingRight: "60px",
                scrollbarWidth: "none",
              }}
            >
              <div
                className="timeline-track-rail"
                style={{
                  display: "flex",
                  gap: isMobile ? "36px" : "56px",
                  minWidth: "max-content",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Continuous Track Line centered with circle nodes */}
                <div
                  className="timeline-horizontal-line no-print"
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "6px",
                    right: "40px",
                    height: "2px",
                    backgroundColor: "#E5E7EB",
                    zIndex: 0,
                  }}
                />

                {timelineMilestones.map((m, idx) => {
                  const isHovered = hoveredYearIdx === idx;
                  const isActive = activeIdx === idx;
                  const isFirst = idx === 0;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleScrollToIdx(idx)}
                      onMouseEnter={() => setHoveredYearIdx(idx)}
                      onMouseLeave={() => setHoveredYearIdx(null)}
                      className="timeline-card-item"
                      style={{
                        width: isMobile ? "300px" : "390px",
                        flexShrink: 0,
                        cursor: "pointer",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {/* Circle Node Container */}
                      <div className="timeline-node-container no-print" style={{ marginBottom: "18px", display: "flex", alignItems: "center", height: "26px", paddingLeft: "6px" }}>
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "9999px",
                            backgroundColor: "#FFFFFF",
                            border: isFirst || isActive || isHovered ? "4.5px solid #2563EB" : "4.5px solid #111111",
                            boxShadow: isActive || isHovered ? "0 0 0 3px rgba(37, 99, 235, 0.25)" : "none",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                            transform: isActive || isHovered ? "scale(1.15)" : "scale(1)",
                          }}
                        />
                      </div>

                      {/* Giant Clean Year Label */}
                      <div style={{ marginBottom: "26px", paddingLeft: "6px" }}>
                        <span
                          className="timeline-year-text"
                          style={{
                            fontSize: isMobile ? "32px" : "38px",
                            fontWeight: 900,
                            color: isFirst || isActive || isHovered ? "#2563EB" : "#111111",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            display: "block",
                            transition: "color 0.2s ease",
                          }}
                        >
                          {m.year}
                        </span>
                      </div>

                      {/* Ultra-Clean Scannable 1-Line List */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "18px", paddingLeft: "6px" }}>
                        {m.items.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              gap: "10px",
                              lineHeight: 1.6,
                            }}
                          >
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                color: "#6B7280",
                                flexShrink: 0,
                                letterSpacing: "-0.02em",
                                width: "54px",
                              }}
                            >
                              {item.date}
                            </span>
                            <span
                              onClick={(e) => {
                                if (item.projectId && onSelectProject) {
                                  e.stopPropagation();
                                  onSelectProject(item.projectId);
                                }
                              }}
                              onMouseEnter={(e) => {
                                if (item.projectId) {
                                  setHoveredProject({ id: item.projectId });
                                  e.currentTarget.style.color = "#2563EB";
                                  if (tooltipRef.current) {
                                    tooltipRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -120%)`;
                                  }
                                }
                              }}
                              onMouseMove={(e) => {
                                if (item.projectId && tooltipRef.current) {
                                  tooltipRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -120%)`;
                                }
                              }}
                              onMouseLeave={(e) => {
                                setHoveredProject(null);
                                if (item.projectId) {
                                  e.currentTarget.style.color = "#111111";
                                }
                              }}
                              style={{
                                fontSize: isMobile ? "13.5px" : "14px",
                                color: item.projectId ? "#111111" : "#4B5563",
                                fontWeight: item.projectId ? 700 : 500,
                                letterSpacing: "-0.015em",
                                wordBreak: "keep-all",
                                cursor: item.projectId ? "pointer" : "default",
                                transition: "color 0.15s ease",
                              }}
                            >
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 Floating Thumbnail Tooltip on Hover */}
        {!isMobile && (
          <div
            ref={tooltipRef}
            className="no-print"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "130px",
              height: "130px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "3px solid #FFFFFF",
              boxShadow: "0 16px 32px -4px rgba(0, 0, 0, 0.22), 0 4px 12px -4px rgba(0, 0, 0, 0.15)",
              pointerEvents: "none",
              transform: "translate3d(0px, 0px, 0) translate(-50%, -120%)",
              willChange: "transform, opacity",
              opacity: hoveredProject ? 1 : 0,
              zIndex: 9999,
              backgroundColor: "#FFFFFF",
              transition: "opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {hoveredProject && projectThumbnails[hoveredProject.id] && (
              <img
                src={projectThumbnails[hoveredProject.id]}
                alt="Mini Thumbnail"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
