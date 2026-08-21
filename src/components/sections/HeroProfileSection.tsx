import { useState, useRef } from "react";

export function HeroProfileSection({ w }: { w: number }) {
  const isMobile = w < 768;
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredYearIdx, setHoveredYearIdx] = useState<number | null>(null);
  const [isTimelineHovered, setIsTimelineHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const metrics = [
    { num: "15+", label: "Years Experience", sub: "Product Design & UI/UX" },
    { num: "12", label: "Selected Works", sub: "Enterprise · Commerce · Financial · LMS" },
    { num: "26+", label: "Design System", sub: "Foundations & UI Kit" },
    { num: "100%", label: "Hi-Fi Prototyping", sub: "Interaction & Validation" },
  ];

  // 15-Year 10-Month Career Timeline (Clean Recruiter-Friendly Structure)
  const timelineMilestones = [
    {
      year: "2025–26",
      items: [
        { date: "2026.04", title: "도전하는사람들 DOOLINKER 워크플로우 빌더 UX 설계" },
        { date: "2025.11", title: "도전하는사람들 사내 인트라넷 포털 & 디자인 시스템 구축" },
      ],
    },
    {
      year: "2024–25",
      items: [
        { date: "2025.07", title: "스펙트라 DWorks 고객상담·협업 통합 제품 플랫폼 UX/UI 설계" },
        { date: "2024.12", title: "스펙트라 Dualspace 신규 통합 플랫폼 단독 기획 & Hi-Fi" },
        { date: "2024.06", title: "스펙트라 DWorks 전사 디자인 시스템 구축 26종" },
      ],
    },
    {
      year: "2022–23",
      items: [
        { date: "2023.12", title: "스펙트라 SalesBridge 데스크톱 플랫폼 & 모바일 PWA" },
        { date: "2023.06", title: "스펙트라 DWorks 엔터프라이즈 DX 리브랜딩 & 공식 사이트" },
        { date: "2022.10", title: "스펙트라 CS Talk 고객상담 플랫폼 대시보드 UI/UX" },
      ],
    },
    {
      year: "2019–22",
      items: [
        { date: "2022.09", title: "어스투 Shaluv 아동복 '러블리 무드' 리브랜딩 & 연매출 1억" },
        { date: "2019.08", title: "어스투 자사몰 및 멀티 이커머스 채널 운영 총괄" },
      ],
    },
    {
      year: "2017–18",
      items: [
        { date: "2018.03", title: "다임 Dime 소셜 데이팅 서비스 모바일 앱 UX/UI 설계" },
        { date: "2017.07", title: "한미랩 LMS 에듀테크 플랫폼 사용자 & 어드민 시스템 구축" },
      ],
    },
    {
      year: "2011–16",
      items: [
        { date: "2016.02", title: "인포뱅크 헬로링크 커머스 & 매거진 모바일 앱 설계" },
        { date: "2015.01", title: "인포뱅크 NH 바로바로마켓 모바일 & 금융 태블릿 전용 UI" },
        { date: "2014.11", title: "인포뱅크 삼성화재 SMS 모바일 웹 인터페이스 설계" },
        { date: "2011.08", title: "인포뱅크 배달 · 주소록 · 쇼핑 네이티브 앱 iOS/Android 가이드" },
      ],
    },
    {
      year: "2006–09",
      items: [
        { date: "2009.11", title: "그래텍 곰플레이어 · 곰오디오 · 곰TV 미디어 GUI 디자인" },
        { date: "2008.08", title: "잡코리아 채용 플랫폼 UI 템플릿 및 프로모션 디자인" },
        { date: "2006.12", title: "이야소프트 묵향온라인 게임 프로모션 웹 UI 설계" },
      ],
    },
  ];

  const checkScrollBounds = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);

      const cardWidth = isMobile ? 280 : 350;
      const newIdx = Math.round(scrollLeft / cardWidth);
      setActiveIdx(Math.min(Math.max(newIdx, 0), timelineMilestones.length - 1));
    }
  };

  const handleScrollToIdx = (targetIdx: number) => {
    if (scrollContainerRef.current) {
      const clampedIdx = Math.min(Math.max(targetIdx, 0), timelineMilestones.length - 1);
      const cardWidth = isMobile ? 280 : 350;
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
      {/* 1. Giant Bold Section Title */}
      <div style={{ marginBottom: isMobile ? "32px" : "48px" }}>
        <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "12px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.15em", display: "block", marginBottom: "8px" }}>
          PRODUCT DESIGN PORTFOLIO
        </span>
        <h1
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
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
          Prototype으로 빠르게 방향을 구체화합니다.
        </p>
      </div>

      {/* 2. Narrative Sentences */}
      <div style={{ maxWidth: "960px", marginBottom: isMobile ? "40px" : "60px" }}>
        <p style={{ fontSize: isMobile ? "16px" : "19px", color: "#111111", lineHeight: 1.6, fontWeight: 600, margin: "0 0 12px 0" }}>
          Web · Mobile · B2B/B2C 제품을 경험하며 화면 설계에서 제품 구조 설계로 역할을 확장했습니다.
        </p>
        <p style={{ fontSize: isMobile ? "14.5px" : "16.5px", color: "#374151", lineHeight: 1.75, margin: 0 }}>
          Workflow Automation, Intranet, Communication Platform에서 노드 기반 인터랙션과 사용성을 개선하고 디자인 시스템을 설계했으며 Native Mobile과 E-Commerce 비즈니스 경험을 모두 다뤘습니다.
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
        }}
      >
        {metrics.map((m, idx) => (
          <div key={idx}>
            <span
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
            <strong style={{ fontSize: isMobile ? "14px" : "16px", color: "#111111", fontWeight: 800, display: "block", marginBottom: "4px" }}>
              {m.label}
            </strong>
            <span style={{ fontSize: isMobile ? "12.5px" : "13.5px", color: "#4B5563", lineHeight: 1.45, display: "block" }}>
              {m.sub}
            </span>
          </div>
        ))}
      </div>

      {/* 4. 3 Core Competencies */}
      <div style={{ marginBottom: isMobile ? "48px" : "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11.5px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.05em" }}>
            CORE COMPETENCIES (3대 핵심 역량)
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? "16px" : "32px" }}>
          <div style={{ padding: "24px", backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB", borderRadius: "8px" }}>
            <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11.5px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "8px" }}>
              01 / COMPLEX UX
            </span>
            <h3 style={{ fontSize: isMobile ? "18px" : "20px", fontWeight: 900, color: "#111111", margin: "0 0 8px 0" }}>복잡도 구조화</h3>
            <p style={{ fontSize: isMobile ? "14px" : "14.5px", color: "#374151", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              Workflow · Permission · Communication
            </p>
          </div>

          <div style={{ padding: "24px", backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB", borderRadius: "8px" }}>
            <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11.5px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "8px" }}>
              02 / DESIGN SYSTEM
            </span>
            <h3 style={{ fontSize: isMobile ? "18px" : "20px", fontWeight: 900, color: "#111111", margin: "0 0 8px 0" }}>디자인 시스템 표준</h3>
            <p style={{ fontSize: isMobile ? "14px" : "14.5px", color: "#374151", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              Variables · Components · Guidelines
            </p>
          </div>

          <div style={{ padding: "24px", backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB", borderRadius: "8px" }}>
            <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11.5px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "8px" }}>
              03 / PROTOTYPING
            </span>
            <h3 style={{ fontSize: isMobile ? "18px" : "20px", fontWeight: 900, color: "#111111", margin: "0 0 8px 0" }}>인터랙티브 검증</h3>
            <p style={{ fontSize: isMobile ? "14px" : "14.5px", color: "#374151", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              Hi-Fi · Interaction · Validation
            </p>
          </div>
        </div>
      </div>

      {/* 5. 🌟 Full 15-Year 10-Month Timeline with Shaluv Growth Metrics */}
      <div
        style={{ borderTop: "1px solid #111111", paddingTop: isMobile ? "36px" : "60px" }}
        onMouseEnter={() => setIsTimelineHovered(true)}
        onMouseLeave={() => setIsTimelineHovered(false)}
      >
        {/* Header Row */}
        <div style={{ marginBottom: isMobile ? "24px" : "36px" }}>
          <span style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif", fontSize: "11px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "6px", letterSpacing: "0.05em" }}>
            CAREER EXPANSION TIMELINE
          </span>
          <h3 style={{ fontSize: isMobile ? "24px" : "36px", fontWeight: 900, color: "#111111", margin: "0 0 6px 0", letterSpacing: "-0.03em" }}>
            화면 설계에서 제품의 구조와 방향 설계로
          </h3>
          <p style={{ fontSize: isMobile ? "14.5px" : "16px", color: "#374151", lineHeight: 1.65, margin: 0 }}>
            15년 10개월간 화면과 인터랙션 설계에서 시작해, 복잡한 제품의 사용성 개선과 디자인 시스템, 프로토타입 기반 제품 검증으로 확장해왔습니다.
          </p>
        </div>

        {/* 🌟 Interactive Timeline Rail Container */}
        <div style={{ position: "relative" }}>
          {/* 👈 Left Directional Arrow */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "50%",
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
              top: "50%",
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
                    style={{
                      width: isMobile ? "280px" : "360px",
                      flexShrink: 0,
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {/* Circle Node Container */}
                    <div style={{ marginBottom: "18px", display: "flex", alignItems: "center", height: "26px", paddingLeft: "6px" }}>
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

                    {/* Giant Clean Year Label (No Subtitle Clutter) */}
                    <div style={{ marginBottom: "14px", paddingLeft: "6px" }}>
                      <span
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
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

                    {/* 🌟 Ultra-Clean Scannable 1-Line List (Date + Project Title · Company) */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "6px" }}>
                      {m.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "10px",
                            lineHeight: 1.45,
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
                            style={{
                              fontSize: isMobile ? "13.5px" : "14px",
                              color: "#111111",
                              fontWeight: 600,
                              letterSpacing: "-0.015em",
                              wordBreak: "keep-all",
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
    </section>
  );
}
