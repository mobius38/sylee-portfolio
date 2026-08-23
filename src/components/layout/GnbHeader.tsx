import { useState, useEffect } from "react";

export function GnbHeader({ w }: { w: number }) {
  const isMobile = w < 768;
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrollProgress, setScrollProgress] = useState<number>(0); // 🌟 실시간 스크롤 진행률 상태
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
      // 1. 현재 스크롤 진행률 계산 (0% ~ 100%)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      // 2. 현재 스크롤 위치에 따른 활성 섹션(GNB Active) 매핑
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
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: isMobile ? "0 20px" : "0 40px", /* 🌟 좌우 패딩 모바일 최적화 */
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Brand Logo */}
      <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: isMobile ? "13px" : "14px", /* 🌟 모바일 메뉴가 분리되므로 로고를 13px로 당당히 확대 */
          fontWeight: 900,
          color: "#111111",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          whiteSpace: "nowrap",
          zIndex: 101, /* 🌟 메뉴 오버레이보다 위에 존재 */
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

      {/* Nav 4 Items / Hamburger Menu */}
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
            zIndex: 101, /* 🌟 오버레이 메뉴 위에 햄버거 상시 노출 */
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
        <nav style={{ display: "flex", gap: "24px" }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
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
      )}

      {/* 🌟 모바일 풀스크린 오버레이 메뉴 */}
      {isMobile && isMenuOpen && (
        <div
          className="no-print"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "36px",
            animation: "fadeInGnb 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
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
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "22px",
                  fontWeight: isActive ? 900 : 500,
                  color: isActive ? "#2563EB" : "#111111",
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
        </div>
      )}

      {/* 🌟 1. 배경 트랙 가이드 라인 (전체 너비의 1px 연회색 실선) */}
      <div
        className="no-print"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "#E5E7EB",
          zIndex: 51,
        }}
      />

      {/* 🌟 2. 실제 스크롤 진행 바 (스크롤 진행률에 따라 회색 선 위를 덮는 2px 파란 실선) */}
      <div
        className="no-print"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "2px",
          backgroundColor: "#2563EB",
          transition: "width 0.08s ease-out",
          zIndex: 52,
        }}
      />
    </header>
  );
}
