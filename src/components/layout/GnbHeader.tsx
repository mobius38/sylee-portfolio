import { useState, useEffect } from "react";
import { DownloadButton } from "../primitives/DownloadButton";

export function GnbHeader({ w }: { w: number }) {
  const isMobile = w < 768;
  const [activeSection, setActiveSection] = useState<string>("about");

  const navItems = [
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "LEADERSHIP", href: "#leadership", id: "leadership" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
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
        borderBottom: "1px solid #E5E7EB",
        padding: isMobile ? "0 16px" : "0 40px",
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
          fontSize: isMobile ? "13px" : "14px",
          fontWeight: 900,
          color: "#111111",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
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

      {/* Nav 4 Items + Download Button */}
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "8px" : "28px" }}>
        <nav style={{ display: "flex", gap: isMobile ? "10px" : "24px" }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: isMobile ? "11.5px" : "13px",
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
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#2563EB",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {!isMobile && <DownloadButton isMobile={false} />}
      </div>
    </header>
  );
}
