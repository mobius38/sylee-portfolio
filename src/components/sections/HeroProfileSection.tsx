import { useState, useRef, useEffect } from "react";

// 🌟 각 프로젝트별 매핑용 대표 썸네일 이미지 임포트
import imgDashboard from "../../imports/optimized/dolinker-dashboard.webp";
import imgIntranetHome from "../../imports/optimized/intranet-admin.webp";
import imgDworksProduct from "../../imports/optimized/dworks-product.webp";
import imgDworksBranding from "../../imports/optimized/dworks-branding.webp";
import imgDworksDSThumbnail from "../../imports/optimized/dworks-ds-thumbnail.jpg";
import imgSalesBridgeProduct from "../../imports/optimized/salesbridge-product.webp";
import imgCSTalkOverview from "../../imports/optimized/cstalk-overview.webp";
import imgShaluv from "../../imports/commerce-shaluv.png";
import imgDime from "../../imports/optimized/mobile-dime.webp";
import imgLMS from "../../imports/hanmilab-lms.png";
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
    "doolinker": imgDashboard,
    "intranet": imgIntranetHome,
    "dualspace": imgDworksProduct,
    "dworks-design-system": imgDworksDSThumbnail,
    "salesbridge": imgSalesBridgeProduct,
    "dworks-brand-identity": imgDworksBranding,
    "cstalk": imgCSTalkOverview,
    "commerce-shaluv": imgShaluv,
    "mobile-dime": imgDime,
    "hanmilab-lms": imgLMS,
    "mobile-hellolink": imgHelloLink,
    "mobile-nh": imgNH,
  };

  // 🌟 썸네일 호버 상태 (좌표는 state에 두지 않고 ref를 통해 DOM 직접 조작하여 60fps 보장)
  const [hoveredProject, setHoveredProject] = useState<{ id: string } | null>(null);

  const metrics = [
    { num: "10+", label: "Years Experience", sub: "Product Design & UI/UX" },
    { num: "12", label: "Selected Works", sub: "Enterprise · Commerce · Financial · LMS" },
    { num: "26+", label: "Design System", sub: "Foundations & UI Kit" },
    { num: "Hi-Fi", label: "Prototyping", sub: "Interaction & Validation" },
  ];

  // 15-Year 10-Month Career Timeline (Clean Recruiter-Friendly Structure)
  const timelineMilestones = [
    // 최신 연도부터 내림차순으로 정렬
    {
      year: "2026",
      items: [
        { date: "2026.04", title: "MIZUHO 일본은행 사내포탈 설계 (IA·권한·컴포넌트)", projectId: "intranet" },
        { date: "2026.01", title: "DO.LiNKER Workflow 생성·실행·모니터링 UX 설계", projectId: "doolinker" },
      ],
    },
    {
      year: "2025",
      items: [
        { date: "2025.12", title: "Trigger/Action 기반 Workflow Builder UX 설계", projectId: "doolinker" },
        { date: "2025.11", title: "DO.LiNKER 브랜드 아이덴티티(BI) 수립", projectId: "doolinker" },
      ],
    },
    {
      year: "2024",
      items: [
        { date: "2024.10", title: "Dualspace 통합 플랫폼 기획 & Hi-Fi 프로토타입", projectId: "dualspace" },
        { date: "2024.09", title: "DWorks 고객상담·협업 통합 플랫폼 UX/UI 설계", projectId: "dualspace" },
        { date: "2024.06", title: "DWorks 멀티 플랫폼 디자인 시스템 구축", projectId: "dworks-design-system" },
        { date: "2024.03", title: "Figma Variables 기반 디자인 시스템 구축", projectId: "dworks-design-system" },
      ],
    },
    {
      year: "2022–23",
      items: [
        { date: "2023.12", title: "SalesBridge 데스크톱 & PWA UX/UI 설계", projectId: "salesbridge" },
        { date: "2023.06", title: "DWorks 엔터프라이즈 리브랜딩 & 공식 사이트 구축", projectId: "dworks-brand-identity" },
        { date: "2022.10", title: "CS Talk 고객상담 플랫폼 대시보드 UI/UX 설계", projectId: "cstalk" },
      ],
    },
    {
      year: "2019–22",
      items: [
        { date: "2022.09", title: "Shaluv 아동복 리브랜딩 & 연매출 1억 달성", projectId: "commerce-shaluv" },
        { date: "2019.08", title: "자사몰 및 멀티 이커머스 채널 운영 총괄", projectId: "commerce-shaluv" },
      ],
    },
    {
      year: "2017–18",
      items: [
        { date: "2018.03", title: "Dime 소셜 데이팅 모바일 앱 UX/UI 설계", projectId: "mobile-dime" },
        { date: "2017.07", title: "LMS 에듀테크 플랫폼 사용자 & 어드민 구축", projectId: "hanmilab-lms" },
      ],
    },
    {
      year: "2011–16",
      items: [
        { date: "2016.02", title: "헬로링크 커머스 & 매거진 모바일 앱 설계", projectId: "mobile-hellolink" },
        { date: "2015.01", title: "NH 바로바로마켓 모바일 & 금융 태블릿 UI 설계", projectId: "mobile-nh" },
        { date: "2014.11", title: "삼성화재 SMS 모바일 웹 인터페이스 설계" },
        { date: "2011.08", title: "네이티브 앱 iOS/Android UI 가이드 수립" },
      ],
    },
    {
      year: "2006–09",
      items: [
        { date: "2009.11", title: "곰플레이어 · 곰오디오 · 곰TV 미디어 GUI 디자인" },
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
      const targetIdx = direction === "left" ? activeIdx - 1 : activeIdx + 1;
      handleScrollToIdx(targetIdx);
    }
  };

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "48px 16px" : "100px 40px 80px 40px",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* 🌟 프린트 시에만 상단에 나타나는 머리말 (Running Header) */}
      <div className="print-only-header" style={{ display: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "32px" }}>
          <span style={{ fontSize: "14px", fontWeight: 800, color: "#111111", letterSpacing: "-0.02em" }}>
            LEE SUNYOUNG · PRODUCT DESIGNER PORTFOLIO
          </span>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#4B5563", fontFamily: "'JetBrains Mono', monospace" }}>
            mobius38@gmail.com
          </span>
        </div>
      </div>

      {/* 1. Giant Bold Section Title */}
      <div style={{ marginBottom: isMobile ? "32px" : "48px", ...getRevealStyle(100) }}>
        <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "12px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.15em", display: "block", marginBottom: "8px" }}>
          PRODUCT DESIGN PORTFOLIO
        </span>
        <h1
          className="about-title-h1"
          style={{
            fontSize: isMobile ? "44px" : "clamp(56px, 6.5vw, 84px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#111111",
            margin: "0 0 24px 0",
          }}
        >
          ABOUT
        </h1>
        <p
          className="about-sub-p"
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
            fontSize: isMobile ? "20px" : "clamp(26px, 2.6vw, 36px)",
            fontWeight: 800,
            color: "#111111",
            lineHeight: 1.35,
            letterSpacing: "-0.025em",
            margin: "0 0 16px 0",
            maxWidth: "1100px",
          }}
        >
          복잡한 제품을 구조화하고,<br />
          디자인의 기준과 방향을 만들어갑니다.
        </p>
      </div>

      {/* 2. Narrative Sentences */}
      <div style={{ maxWidth: "960px", marginBottom: isMobile ? "40px" : "60px", ...getRevealStyle(250) }}>
        <p className="about-narrative-lead" style={{ fontSize: isMobile ? "16px" : "19px", color: "#111111", lineHeight: 1.6, fontWeight: 600, margin: "0 0 12px 0" }}>
          Web · Mobile · B2B/B2C 제품을 설계하며 복잡한 문제를 구조화하고,<br className="hidden md:inline" />
          프로토타입으로 방향을 빠르게 구체화해 이해관계자와 공유해왔습니다.
        </p>
        <p className="about-narrative-body" style={{ fontSize: isMobile ? "14.5px" : "16.5px", color: "#374151", lineHeight: 1.75, margin: 0 }}>
          제품 설계뿐 아니라 디자인 시스템과 리뷰를 통해 일관된 디자인 기준을 만들어왔습니다.
        </p>
      </div>

      {/* 3. Hero Metrics Structure Bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? "24px 16px" : "32px",
          borderTop: "1px solid #111111",
          borderBottom: "1px solid #E5E7EB",
          padding: isMobile ? "28px 0" : "40px 0",
          marginBottom: isMobile ? "48px" : "72px",
          ...getRevealStyle(400),
        }}
      >
        {metrics.map((m, idx) => (
          <div key={idx} className="about-metric-card">
            <span
              className="about-metric-num"
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
                fontSize: isMobile ? "32px" : "56px",
                fontWeight: 900,
                color: "#111111",
                letterSpacing: "-0.04em",
                display: "block",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {m.num}
            </span>
            <strong className="about-metric-label" style={{ fontSize: isMobile ? "14px" : "16px", color: "#111111", fontWeight: 800, display: "block", marginBottom: "4px" }}>
              {m.label}
            </strong>
            <span className="about-metric-sub" style={{ fontSize: isMobile ? "12.5px" : "13.5px", color: "#4B5563", lineHeight: 1.45, display: "block" }}>
              {m.sub}
            </span>
          </div>
        ))}
      </div>

      {/* 4. 3 Core Competencies */}
      <div className="about-competency-section" style={{ marginBottom: isMobile ? "48px" : "80px", ...getRevealStyle(550) }}>
        <div style={{ marginBottom: "20px" }}>
          <span className="competency-section-title" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11.5px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
            CORE COMPETENCIES (3대 핵심 역량)
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? "16px" : "32px" }}>
          <div
            className="competency-card-item"
            style={{
              padding: "28px 24px",
              backgroundColor: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
            }}
          >
            <span className="competency-card-number" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "12px", letterSpacing: "0.05em" }}>
              01 / COMPLEX UX & IA
            </span>
            <h3 className="competency-card-title" style={{ fontSize: isMobile ? "17px" : "19px", fontWeight: 900, color: "#111111", margin: "0 0 10px 0" }}>복잡한 제품 구조화</h3>
            <p className="competency-card-desc" style={{ fontSize: isMobile ? "13.5px" : "14.5px", color: "#4B5563", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              비즈니스 복잡도가 높은 워크플로우 자동화, 사내 다중 권한 포털의 정보구조(IA)와 업무 흐름을 직관적인 사용자 태스크 플로우로 단순화합니다.
            </p>
          </div>

          <div
            className="competency-card-item"
            style={{
              padding: "28px 24px",
              backgroundColor: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
            }}
          >
            <span className="competency-card-number" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "12px", letterSpacing: "0.05em" }}>
              02 / DESIGN SYSTEM STANDARDS
            </span>
            <h3 className="competency-card-title" style={{ fontSize: isMobile ? "17px" : "19px", fontWeight: 900, color: "#111111", margin: "0 0 10px 0" }}>디자인 시스템 표준 구축</h3>
            <p className="competency-card-desc" style={{ fontSize: isMobile ? "13.5px" : "14.5px", color: "#4B5563", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              Figma Variables 기반 컬러/타이포 디자인 토큰화 및 크로스 플랫폼 공통 컴포넌트 표준을 제정해 제품군의 일관성과 협업 속도를 혁신합니다.
            </p>
          </div>

          <div
            className="competency-card-item"
            style={{
              padding: "28px 24px",
              backgroundColor: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
            }}
          >
            <span className="competency-card-number" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "12px", letterSpacing: "0.05em" }}>
              03 / HI-FI PROTOTYPING
            </span>
            <h3 className="competency-card-title" style={{ fontSize: isMobile ? "17px" : "19px", fontWeight: 900, color: "#111111", margin: "0 0 10px 0" }}>인터랙티브 검증 및 MVP 리딩</h3>
            <p className="competency-card-desc" style={{ fontSize: isMobile ? "13.5px" : "14.5px", color: "#4B5563", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              실서비스 환경에 수렴하는 고해상도(Hi-Fi) 프로토타이핑을 설계하여 복잡한 노드 기반 인터랙션의 요구사항을 검증하고 최적의 MVP 범위를 정의합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 5. 🌟 Full 15-Year 10-Month Timeline with Shaluv Growth Metrics */}
      <div
        className="about-timeline-section"
        style={{ borderTop: "1px solid #111111", paddingTop: isMobile ? "36px" : "60px", ...getRevealStyle(700) }}
        onMouseEnter={() => setIsTimelineHovered(true)}
        onMouseLeave={() => setIsTimelineHovered(false)}
      >
        {/* Header Row */}
        <div style={{ marginBottom: isMobile ? "24px" : "36px" }}>
          <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "6px", letterSpacing: "0.05em" }}>
            CAREER EXPANSION TIMELINE
          </span>
          <h3 className="timeline-section-h3" style={{ fontSize: isMobile ? "24px" : "36px", fontWeight: 900, color: "#111111", margin: "0 0 6px 0", letterSpacing: "-0.03em" }}>
            화면 설계에서 제품의 구조와 방향 설계로
          </h3>
          <p className="timeline-section-desc" style={{ fontSize: isMobile ? "14.5px" : "16px", color: "#374151", lineHeight: 1.65, margin: 0 }}>
            10년 이상 화면과 인터랙션 설계에서 시작해, 복잡한 제품의 사용성 개선과 디자인 시스템, 프로토타입 기반 제품 검증으로 확장해왔습니다.
          </p>
        </div>

        {/* 🌟 Interactive Timeline Rail Container */}
        <div style={{ position: "relative" }}>
          {/* 👈 Left Directional Arrow */}
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

          {/* 👉 Right Directional Arrow */}
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

          {/* 🌟 Scrollable Track with Generous Safety Padding */}
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
            {/* 🌟 Milestones Flow with 100% Full-Length Continuous Track Line */}
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
                          border: isFirst || isActive || isHovered ? "4.5px solid #2563EB" : "4.5px solid #111111", // 🌟 신뢰 블루 복원
                          boxShadow: isActive || isHovered ? "0 0 0 3px rgba(37, 99, 235, 0.25)" : "none", // 🌟 rgba 블루 매칭
                          transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                          transform: isActive || isHovered ? "scale(1.15)" : "scale(1)",
                        }}
                      />
                    </div>

                    {/* Giant Clean Year Label (No Subtitle Clutter) */}
                    <div style={{ marginBottom: "26px", paddingLeft: "6px" }}>
                      <span
                        className="timeline-year-text"
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
                          fontSize: isMobile ? "32px" : "38px",
                          fontWeight: 900,
                          color: isFirst || isActive || isHovered ? "#2563EB" : "#111111", // 🌟 신뢰 블루 복원
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                          display: "block",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {m.year}
                      </span>
                    </div>

                    {/* 🌟 Ultra-Clean Scannable 1-Line List (Date + Project Title · Company) */}
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
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "12px",
                              fontWeight: 700,
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
                                e.currentTarget.style.color = "#2563EB"; // 🌟 신뢰 블루 복원
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
      
      {/* 🌟 타임라인 텍스트 호버 시 마우스 따라다니는 미니 썸네일 팝업 (상시 마운트로 null ref 에러 방지) */}
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
    </section>
  );
}
