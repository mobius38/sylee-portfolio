import { useState } from "react";
import { PetDuoAvatar } from "./PetDuoAvatar";

interface FAQItem {
  id: string;
  q: string;
  a: string;
  actionText?: string;
  actionHref?: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "career",
    q: "주요 경력과 전문 분야는 무엇인가요?",
    a: "10년 이상 스펙트라, 도전하는사람들 등에서 B2B 엔터프라이즈 플랫폼, 금융 포털, 워크플로우 자동화 도구, 이커머스를 설계했습니다. 복잡한 비즈니스 로직을 명쾌한 사용자 경험으로 구조화하는 데 특화되어 있습니다.",
    actionText: "대표 프로젝트 보기",
    actionHref: "#projects",
  },
  {
    id: "design-system",
    q: "디자인 시스템 구축 경험이 궁금해요.",
    a: "Figma Variables 기반 Foundations 6종 및 공통 Components 26종을 체계화했습니다. 디자인 토큰과 모듈형 컴포넌트 기준을 수립하여 제품 간 일관된 디자인 기준을 정립했습니다.",
    actionText: "디자인 시스템 케이스 보기",
    actionHref: "#projects",
  },
  {
    id: "process",
    q: "협업 및 프로덕트 설계 방식은 어떤가요?",
    a: "실서비스 수준의 Hi-Fi 프로토타입으로 PM 및 엔지니어와 빠르게 의사결정합니다. 명확한 정보구조(IA)와 권한 모델을 선행 정의하여 릴리즈 지연을 방지합니다.",
    actionText: "설계 & 리더십 보기",
    actionHref: "#leadership",
  },
  {
    id: "contact",
    q: "프로젝트 제안이나 채용 문의는 어디로 하나요?",
    a: "이메일(mobius38@gmail.com) 또는 1:1 커피챗으로 연락 주시면 빠르게 확인 후 정중히 회신드리겠습니다.",
    actionText: "이메일 문의하기",
    actionHref: "mailto:mobius38@gmail.com",
  },
  {
    id: "coffee-chat",
    q: "이선영 디자이너와 직접 커피챗을 신청하고 싶어요.",
    a: "보름이(러시안블루) & 보리(말티푸) 집사와의 편안한 커피챗! 가벼운 티타임부터 프로덕트 포지션 이야기까지 카카오톡 1:1 오픈채팅으로 언제든 편하게 말 걸어주세요.",
    actionText: "1:1 커피챗 열기",
    actionHref: "https://open.kakao.com/o/gMLdWTJi",
  },
];

export function RecruiterChatbot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openId, setOpenId] = useState<string | null>("career");

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="채용 Q&A 및 커피챗 안내"
      className="no-print"
      style={{
        position: "fixed",
        bottom: "80px",
        right: "24px",
        width: "min(400px, calc(100vw - 32px))",
        backgroundColor: "#FFFFFF",
        border: "1px solid #D1D5DB",
        borderRadius: "12px",
        boxShadow: "0 24px 64px -16px rgba(0, 0, 0, 0.25), 0 8px 24px -8px rgba(0, 0, 0, 0.12)",
        zIndex: 999,
        overflow: "hidden",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
        animation: "fadeIn 0.2s ease",
      }}
    >
      {/* 1. Header with Real Photos of 보름이 & 보리 */}
      <div
        style={{
          padding: "16px 18px",
          borderBottom: "1px solid #1F2937",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#111827",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <PetDuoAvatar size={44} />

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
              <span style={{ fontSize: "10px", fontWeight: 800, color: "#60A5FA", letterSpacing: "0.08em" }}>
                COFFEE CHAT &amp; Q&amp;A
              </span>
            </div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
              보름이 &amp; 보리 집사의 커피챗
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <SteamingCoffeeCup size={34} />
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#9CA3AF",
              fontSize: "16px",
              cursor: "pointer",
              padding: "4px",
              lineHeight: 1,
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#9CA3AF"}
            aria-label="닫기"
          >
            ✕
          </button>
        </div>
      </div>

      {/* 2. Accordion FAQ List */}
      <div style={{ padding: "8px 16px", maxHeight: "400px", overflowY: "auto" }}>
        {FAQ_LIST.map((item) => {
          const isExpanded = openId === item.id;
          return (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #F3F4F6",
                padding: "10px 0",
              }}
            >
              <button
                onClick={() => setOpenId(isExpanded ? null : item.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "4px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: isExpanded ? "#111111" : "#4B5563",
                  fontSize: "13px",
                  fontWeight: isExpanded ? 700 : 500,
                  lineHeight: 1.4,
                }}
              >
                <span>{item.q}</span>
                <span
                  style={{
                    
                    fontSize: "12px",
                    color: "#9CA3AF",
                    marginLeft: "8px",
                  }}
                >
                  {isExpanded ? "−" : "+"}
                </span>
              </button>

              {isExpanded && (
                <div style={{ paddingTop: "8px", paddingBottom: "4px" }}>
                  <p style={{ margin: "0 0 10px 0", fontSize: "12.5px", color: "#6B7280", lineHeight: 1.6 }}>
                    {item.a}
                  </p>

                  {item.actionText && item.actionHref && (
                    <a
                      href={item.actionHref}
                      target={item.actionHref.startsWith("http") ? "_blank" : "_self"}
                      rel={item.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (!item.actionHref?.startsWith("http") && !item.actionHref?.startsWith("mailto:")) {
                          onClose();
                        }
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "11.5px",
                        fontWeight: 700,
                        color: "#2563EB", // 🌟 신뢰 블루 통합
                        textDecoration: "none",
                        
                      }}
                    >
                      {item.actionText} →
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Direct Contact Minimal Footer */}
      <div
        style={{
          padding: "12px 18px",
          backgroundColor: "#FAFAFA",
          borderTop: "1px solid #F3F4F6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "11px",
          color: "#6B7280",
          
        }}
      >
        <span>이메일: mobius38@gmail.com</span>
        <a
          href="https://open.kakao.com/o/gMLdWTJi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#FFFFFF",
            fontWeight: 700,
            textDecoration: "none",
            backgroundColor: "#111111",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
        >
          1:1 Open Chat →
        </a>
      </div>
    </div>
  );
}

// 김이 모락모락 피어오르는 모던 CSS+SVG 커피잔 컴포넌트
function SteamingCoffeeCup({ size = 30 }: { size?: number }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-4px",
      }}
    >
      {/* 1. 모락모락 김(Steam) 세 가닥 애니메이션 */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          top: "-10px",
          left: 0,
          overflow: "visible",
        }}
      >
        {/* Steam 1 */}
        <path
          d="M38 30 Q43 15 38 0 Q43 -15 38 -30"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-steam-1"
        />
        {/* Steam 2 */}
        <path
          d="M50 30 Q55 15 50 0 Q55 -15 50 -30"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-steam-2"
        />
        {/* Steam 3 */}
        <path
          d="M62 30 Q67 15 62 0 Q67 -15 62 -30"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-steam-3"
        />
      </svg>

      {/* 2. 커피 머그잔 본체 SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          position: "relative",
          zIndex: 2,
          overflow: "visible",
        }}
      >
        {/* 머그잔 손잡이 */}
        <path
          d="M68 55 C78 55 78 75 68 75"
          fill="none"
          stroke="#4B3FE1"
          strokeWidth="9"
          strokeLinecap="round"
        />
        {/* 머그잔 몸통 */}
        <path
          d="M30 45 L34 82 C35 88 40 90 50 90 C60 90 65 88 66 82 L70 45 Z"
          fill="#4B3FE1"
        />
        {/* 컵 테두리/입구 */}
        <ellipse cx="50" cy="45" rx="20" ry="5" fill="#FAF9F7" stroke="#4B3FE1" strokeWidth="4" />
      </svg>

      {/* 3. 김이 올라오는 CSS 키프레임 (동적 흐름) */}
      <style>{`
        @keyframes steamFlow {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
            transform: translateY(2px) scaleX(0.9);
          }
          20% {
            opacity: 0.85;
          }
          60% {
            stroke-dashoffset: -40;
            opacity: 0.55;
            transform: translateY(-8px) scaleX(1.1);
          }
          90% {
            opacity: 0;
          }
          100% {
            stroke-dashoffset: -80;
            opacity: 0;
            transform: translateY(-18px) scaleX(0.85);
          }
        }
        .animate-steam-1 {
          stroke-dasharray: 100;
          animation: steamFlow 3.2s infinite linear;
        }
        .animate-steam-2 {
          stroke-dasharray: 100;
          animation: steamFlow 3.2s infinite linear;
          animation-delay: 1.1s;
        }
        .animate-steam-3 {
          stroke-dasharray: 100;
          animation: steamFlow 3.2s infinite linear;
          animation-delay: 2.2s;
        }
      `}</style>
    </div>
  );
}
