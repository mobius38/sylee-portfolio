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

  // 15-Year 10-Month Career Timeline with Detailed Shaluv E-Commerce Growth
  const timelineMilestones = [
    {
      year: "2025–26",
      company: "도전하는사람들",
      items: [
        {
          date: "2025.11 ~ 2026.04",
          title: "DOOLINKER Workflow Builder",
          desc: "Trigger/Action 기반 노드 편집 캔버스 UX 정립 및 Drag & Drop 인터랙션 설계",
        },
        {
          date: "2025.11 ~ 2026.04",
          title: "Intranet Portal",
          desc: "Figma Variables 디자인 시스템 구축 및 포털 공통 컴포넌트 사용성 개선",
        },
      ],
    },
    {
      year: "2025",
      company: "스펙트라",
      items: [
        {
          date: "2025.01 ~ 2025.07",
          title: "DWorks 통합 제품 설계",
          desc: "고객상담과 협업을 일원화하는 멀티 프로덕트 통합 제품 경험 및 UX/UI 설계",
        },
        {
          date: "2025.08 ~ 2025.09",
          title: "제품 전반 Hi-Fi Prototype (프리랜서)",
          desc: "20~30화면 실서비스 수준 마이크로 UX 및 사용자 인터랙션 검증",
        },
      ],
    },
    {
      year: "2024",
      company: "스펙트라",
      items: [
        {
          date: "2024.07 ~ 2024.12",
          title: "Dualspace 데모 프로젝트",
          desc: "통합 플랫폼 신규 방향 단독 기획·설계 및 사내 데모 Hi-Fi 프로토타이핑 리딩 (통합제품 기반 구축)",
        },
        {
          date: "2024.01 ~ 2024.06",
          title: "DWorks 전사 디자인 시스템 구축",
          desc: "Figma Variables 기반 Foundations 6종 및 공통 Components 26종 라이브러리 구축",
        },
      ],
    },
    {
      year: "2022–23",
      company: "스펙트라",
      items: [
        {
          date: "2023.01 ~ 2023.12",
          title: "SalesBridge (데스크톱 React 플랫폼 & 모바일 PWA)",
          desc: "데스크톱 React 기반 다자간 소통 플랫폼 구축 및 추가 모바일 PWA 앱 지원, 권한별 접근 설계 리드",
        },
        {
          date: "2023.06 ~ 2023.12",
          title: "DWorks 엔터프라이즈 DX 리브랜딩",
          desc: "DX 비즈니스 도약을 위한 통합 브랜드 로고 리디자인, 브랜드 가이드 및 공식 기업 홈페이지 구축",
        },
        {
          date: "2022.10 ~ 2023.06",
          title: "CS Talk (고객상담 플랫폼)",
          desc: "고객상담 대화 흐름 구조화 및 목록·상세 대시보드 UI/UX 고도화",
        },
      ],
    },
    {
      year: "2019–22",
      company: "어스투",
      items: [
        {
          date: "2020.01 ~ 2022.09",
          title: "Shaluv 아동복 '러블리 무드' 니치 리브랜딩",
          desc: "여아 부모 타깃 니치 브랜드 리뉴얼 및 상품 컨셉 기획 · 채널 유입 14배 성장 및 연매출 1억 달성",
        },
        {
          date: "2019.08 ~ 2022.09",
          title: "쇼핑몰 운영 및 세일즈 전반",
          desc: "해외 공장 직수입·인증, 자사몰 및 온라인 스토어 채널 운영, 프로모션과 CS 총괄",
        },
      ],
    },
    {
      year: "2017–18",
      company: "다임 · 한미랩",
      items: [
        {
          date: "2017.08 ~ 2018.03",
          title: "다임 (Dime) 모바일 앱 (㈜다임)",
          desc: "소셜 데이팅·매칭 서비스 모바일 앱 신규 UX/UI 설계 및 프로필 탐색 인터랙션",
        },
        {
          date: "2017.03 ~ 2017.07",
          title: "LMS 에듀테크 플랫폼 (한미랩)",
          desc: "사용자(수강/시험 72p) 및 어드민·모바일(62p) UI 설계, 브랜딩 및 퍼블리싱",
        },
      ],
    },
    {
      year: "2011–16",
      company: "인포뱅크",
      items: [
        {
          date: "2015.12 ~ 2016.02",
          title: "헬로링크 (HelloLink)",
          desc: "숫자 코드 기반 상품 구매 커머스 및 매거진 모바일 앱 UI 설계",
        },
        {
          date: "2014.04 ~ 2015.01",
          title: "NH바로바로마켓 & NH 태블릿",
          desc: "초기 구축 및 2년 후 리뉴얼 단독 수행 · 금융 태블릿 UI 확장 및 퍼블리싱",
        },
        {
          date: "2014.11 ~ 2014.12",
          title: "삼성화재 SMS 모바일웹",
          desc: "삼성화재 모바일 웹 인터페이스 UI 설계 및 웹표준 퍼블리싱",
        },
        {
          date: "2011.08 ~ 2013.03",
          title: "배달 · 주소록 · 쇼핑 네이티브 앱",
          desc: "iOS / Android 플랫폼별 UI 가이드 설계 및 리뉴얼",
        },
      ],
    },
    {
      year: "2008–09",
      company: "그래텍 · 잡코리아",
      items: [
        {
          date: "2008.11 ~ 2009.11",
          title: "곰플레이어 · 곰오디오 · 곰TV GUI",
          desc: "곰 시리즈 미디어 플레이어 GUI 디자인 및 곰인코더 영문 웹 구축",
        },
        {
          date: "2007.08 ~ 2008.08",
          title: "잡코리아 채용 플랫폼",
          desc: "채용공고 신규 UI 템플릿 및 프로모션 디자인 운영",
        },
      ],
    },
    {
      year: "2006",
      company: "이야소프트",
      items: [
        {
          date: "2006.08 ~ 2006.12",
          title: "묵향온라인 게임 웹 UI",
          desc: "온라인 게임 프로모션 이벤트 페이지 및 웹 UI 설계",
        },
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

                    {/* Giant Clean Year & Company Label */}
                    <div style={{ marginBottom: "16px", paddingLeft: "6px" }}>
                      <span
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
                          fontSize: isMobile ? "32px" : "42px",
                          fontWeight: 900,
                          color: isFirst || isActive || isHovered ? "#2563EB" : "#111111",
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                          display: "block",
                          marginBottom: "4px",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {m.year}
                      </span>
                      <span style={{ fontSize: "12px", color: "#6B7280", fontWeight: 700 }}>
                        {m.company}
                      </span>
                    </div>

                    {/* 🌟 Vertical Structured Project Details List */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "6px" }}>
                      {m.items.map((item, iIdx) => (
                        <div key={iIdx} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "12px", color: "#2563EB", fontWeight: 700, letterSpacing: "-0.01em" }}>
                            {item.date}
                          </span>
                          <strong style={{ fontSize: "15px", color: "#111111", fontWeight: 800, lineHeight: 1.4 }}>
                            {item.title}
                          </strong>
                          <p style={{ fontSize: isMobile ? "13.5px" : "14px", color: "#4B5563", lineHeight: 1.6, margin: "3px 0 0 0" }}>
                            {item.desc}
                          </p>
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
