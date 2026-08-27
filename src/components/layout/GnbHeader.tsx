import { useState, useEffect } from "react";

export function GnbHeader({ w }: { w: number }) {
  const isMobile = w < 768;
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // 🌟 모바일 햄버거 메뉴 열림 상태

  const navItems = [
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "LEADERSHIP", href: "#leadership", id: "leadership" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  // 🌟 모바일 메뉴가 열렸을 때 뒷배경 스크롤 방지
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치에 따른 활성 섹션(GNB Active) 매핑
      const scrollPos = window.scrollY + 140;
      const sections = ["contact", "leadership", "projects", "about"];
      for (const sId of sections) {
        const el = document.getElementById(sId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: isMobile && isMenuOpen ? "fixed" : "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: isMobile && isMenuOpen ? 999 : 50,
        backgroundColor: isMobile && isMenuOpen ? "#FAF9F7" : "rgba(255, 255, 255, 0.72)",
        backdropFilter: isMobile && isMenuOpen ? "none" : "blur(20px)",
        WebkitBackdropFilter: isMobile && isMenuOpen ? "none" : "blur(20px)",
        borderBottom: isMobile && isMenuOpen ? "none" : "1px solid rgba(0, 0, 0, 0.07)",
        padding: isMobile ? "0 20px" : "0 40px",
        height: isMobile && isMenuOpen ? "100vh" : "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        transition: "height 0.28s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease",
        overflow: "hidden",
      }}
    >
      {/* 🌟 1. Top Bar Navigation Row (로고와 햄버거 버튼 가로 정렬 영역) */}
      <div
        style={{
          height: "60px",
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          style={{
            fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: 900,
            color: "#111111",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            whiteSpace: "nowrap",
            zIndex: 1000, // 햄버거와 함께 오버레이보다 무조건 위
          }}
        >
          <span>LEE SUNYOUNG</span>
          {!isMobile && (
            <>
              <span style={{ color: "#D1D5DB" }}>/</span>
              <span style={{ fontSize: "11px", color: "#6B7280", fontWeight: 700 }}>PRODUCT DESIGNER</span>
            </>
          )}
        </a>

        {/* Nav 4 Items / Hamburger Menu & PDF Print Button */}
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="no-print"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              zIndex: 1000,
            }}
          >
            <span
              style={{
                width: "20px",
                height: "2px",
                backgroundColor: "#111111",
                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
                transform: isMenuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                width: "20px",
                height: "2px",
                backgroundColor: "#111111",
                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "20px",
                height: "2px",
                backgroundColor: "#111111",
                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
                transform: isMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <nav style={{ display: "flex", gap: "24px" }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      fontSize: "13px",
                      fontWeight: isActive ? 900 : 600,
                      color: isActive ? "#2563EB" : "#4B5563",
                      textDecoration: "none",
                      position: "relative",
                      padding: "4px 0",
                      whiteSpace: "nowrap",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* 🌟 PDF 다운로드 / 인쇄 Action 버튼 */}
            <button
              onClick={() => window.print()}
              aria-label="PDF 인쇄 / 다운로드"
              className="no-print"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#111111",
                color: "#FFFFFF",
                border: "none",
                padding: "7px 16px",
                borderRadius: "9999px",
                fontSize: "12.5px",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563EB";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#111111";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PDF 다운로드
            </button>
          </div>
        )}
      </div>

      {/* 🌟 2. 모바일 풀스크린 오버레이 메뉴 (Top Bar와 충돌 없이 flex-grow에 의해 남은 공간을 확보) */}
      {isMobile && isMenuOpen && (
        <div
          className="no-print"
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            paddingBottom: "80px", // 모바일 하단 플로팅 대비 균형 잡힌 마진
            animation: "fadeInGnb 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  fontSize: "24px",
                  fontWeight: isActive ? 900 : 600,
                  color: isActive ? "#2563EB" : "#111111", // 🌟 신뢰 블루 싱크
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "transform 0.2s ease, color 0.2s ease",
                  transform: isActive ? "scale(1.08)" : "none",
                }}
              >
                {item.label}
              </a>
            );
          })}
          {/* Mobile PDF Action Button */}
          <div style={{ marginTop: "16px", paddingTop: "20px", borderTop: "1px solid rgba(0, 0, 0, 0.08)", width: "100%", maxWidth: "240px" }}>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => window.print(), 300);
              }}
              style={{
                width: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#111111",
                color: "#FFFFFF",
                border: "none",
                padding: "14px 20px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PDF 다운로드 / 인쇄
            </button>
          </div>
        </div>
      )}

      {/* 🌟 오버레이 오픈 시 웹 채팅 플로팅 위젯 은폐용 인라인 스타일 */}
      {isMobile && isMenuOpen && (
        <style>{`
          aside.no-print {
            display: none !important;
          }
        `}</style>
      )}
    </header>
  );
}
