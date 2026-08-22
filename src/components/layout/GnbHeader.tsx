import { useState, useEffect } from "react";

export function GnbHeader({ w }: { w: number }) {
  const isMobile = w < 768;
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrollProgress, setScrollProgress] = useState<number>(0); // 🌟 실시간 스크롤 진행률 상태

  const navItems = [
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "LEADERSHIP", href: "#leadership", id: "leadership" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

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
        padding: isMobile ? "0 12px" : "0 40px", /* 모바일 패딩 조정 */
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Brand Logo */}
      <a
        href="#about"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: isMobile ? "12px" : "14px", /* 모바일 로고 가독성 위해 12px로 복구 */
          fontWeight: 900,
          color: "#111111",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          whiteSpace: "nowrap",
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

      {/* Nav 4 Items */}
      <nav style={{ display: "flex", gap: isMobile ? "9px" : "24px" }}> {/* 모바일 메뉴 간격 최적화 */}
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: isMobile ? "11px" : "13px", /* 모바일 메뉴 가독성 위해 11px로 복구 */
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
