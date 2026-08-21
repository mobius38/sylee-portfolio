import { useState, useEffect } from "react";
import { RecruiterChatbot } from "./RecruiterChatbot";
import { PetDuoAvatar } from "./PetDuoAvatar";

export function FloatingControls() {
  const [showTop, setShowTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Recruiter Quick Q&A Card Modal */}
      <RecruiterChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* 2. Floating Action Group */}
      <aside
        className="no-print"
        aria-label="커피챗 및 상단 이동"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 900,
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {/* Coffee Chat Trigger Floating Button */}
        <button
          onClick={() => setIsChatOpen((prev) => !prev)}
          title="보름이 & 보리 집사 이선영 디자이너 커피챗 열기"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: isChatOpen ? "#111111" : "#FFFFFF",
            color: isChatOpen ? "#FFFFFF" : "#111111",
            border: "1px solid #E5E7EB",
            padding: "4px 14px 4px 6px",
            borderRadius: "9999px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            fontWeight: 700,
            boxShadow: "0 6px 20px -4px rgba(0, 0, 0, 0.12)",
            transition: "all 0.15s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            if (!isChatOpen) {
              e.currentTarget.style.borderColor = "#111111";
              e.currentTarget.style.backgroundColor = "#F9FAFB";
              e.currentTarget.style.transform = "translateY(-1px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isChatOpen) {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.transform = "translateY(0)";
            }
          }}
        >
          <PetDuoAvatar size={26} />
          <span>{isChatOpen ? "Close Chat" : "Coffee Chat · Q&A"}</span>
        </button>

        {/* Scroll to Top Button */}
        {showTop && (
          <button
            onClick={scrollToTop}
            title="맨 위로 이동"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              backgroundColor: "#FFFFFF",
              color: "#111111",
              border: "1px solid #E5E7EB",
              borderRadius: "50%",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              fontWeight: 700,
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#111111";
              e.currentTarget.style.backgroundColor = "#F9FAFB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.backgroundColor = "#FFFFFF";
            }}
          >
            ↑
          </button>
        )}
      </aside>
    </>
  );
}
