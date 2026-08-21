export function PetDuoIllustration({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", borderRadius: "10px", overflow: "hidden" }}
    >
      <defs>
        {/* Background Gradient */}
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Russian Blue Cat Gradient (Silver Grey) */}
        <linearGradient id="catGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Brown Maltipoo Gradient (Warm Caramel Brown) */}
        <linearGradient id="dogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>

        {/* Emerald Eyes Gradient */}
        <linearGradient id="emeraldEye" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* 0. Clean Base Badge */}
      <rect width="100" height="100" rx="20" fill="url(#bgGrad)" />

      {/* ─── 1. Left: Russian Blue Cat ─── */}
      <g transform="translate(10, 20)">
        {/* Ears */}
        <polygon points="12,18 2,2 24,10" fill="#475569" />
        <polygon points="12,16 5,5 20,11" fill="#FDA4AF" opacity="0.6" />
        <polygon points="32,18 42,2 20,10" fill="#475569" />
        <polygon points="32,16 39,5 24,11" fill="#FDA4AF" opacity="0.6" />

        {/* Face */}
        <ellipse cx="22" cy="30" rx="18" ry="16" fill="url(#catGrad)" />

        {/* Emerald Green Eyes */}
        <ellipse cx="15" cy="28" rx="4" ry="4.5" fill="url(#emeraldEye)" />
        <circle cx="14" cy="26.5" r="1.5" fill="#FFFFFF" />
        <ellipse cx="29" cy="28" rx="4" ry="4.5" fill="url(#emeraldEye)" />
        <circle cx="28" cy="26.5" r="1.5" fill="#FFFFFF" />

        {/* Nose & Mouth */}
        <polygon points="22,34 20,32 24,32" fill="#334155" />
        <path d="M22,34 Q20,38 18,36" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M22,34 Q24,38 26,36" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* Delicate Whiskers */}
        <line x1="8" y1="33" x2="1" y2="31" stroke="#94A3B8" strokeWidth="0.9" />
        <line x1="8" y1="36" x2="2" y2="37" stroke="#94A3B8" strokeWidth="0.9" />
        <line x1="36" y1="33" x2="43" y2="31" stroke="#94A3B8" strokeWidth="0.9" />
        <line x1="36" y1="36" x2="42" y2="37" stroke="#94A3B8" strokeWidth="0.9" />
      </g>

      {/* ─── 2. Right: Brown Maltipoo Dog ─── */}
      <g transform="translate(48, 22)">
        {/* Fluffy Curly Ears */}
        <circle cx="6" cy="18" r="9" fill="url(#dogGrad)" />
        <circle cx="8" cy="24" r="8" fill="#78350F" />
        <circle cx="38" cy="18" r="9" fill="url(#dogGrad)" />
        <circle cx="36" cy="24" r="8" fill="#78350F" />

        {/* Face (Fluffy Curly Head) */}
        <circle cx="22" cy="28" r="16" fill="url(#dogGrad)" />
        {/* Curls on head */}
        <circle cx="16" cy="15" r="4.5" fill="#D97706" />
        <circle cx="22" cy="13" r="5" fill="#F59E0B" />
        <circle cx="28" cy="15" r="4.5" fill="#D97706" />

        {/* Muzzle (Snout) */}
        <ellipse cx="22" cy="33" rx="8" ry="7" fill="#FDE68A" />

        {/* Black Button Eyes */}
        <circle cx="16" cy="26" r="3.2" fill="#18181B" />
        <circle cx="15.2" cy="25" r="1.2" fill="#FFFFFF" />
        <circle cx="28" cy="26" r="3.2" fill="#18181B" />
        <circle cx="27.2" cy="25" r="1.2" fill="#FFFFFF" />

        {/* Button Nose & Tongue */}
        <ellipse cx="22" cy="31" rx="3" ry="2.2" fill="#18181B" />
        <path d="M22,33.2 Q22,37 22,38" stroke="#18181B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20,36 Q22,40 24,36" stroke="#18181B" strokeWidth="1.2" strokeLinecap="round" fill="#FDA4AF" />
      </g>

      {/* Subtle Bottom Accent Tag */}
      <rect x="26" y="82" width="48" height="12" rx="6" fill="#1E293B" />
      <text x="50" y="90.5" fill="#F8FAFC" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="800" textAnchor="middle">
        CAT &amp; DOG
      </text>
    </svg>
  );
}
