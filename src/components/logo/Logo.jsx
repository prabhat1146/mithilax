const MithilaXLogo = () => (
  <svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="98" fill="#0a2540" stroke="#F97316" strokeWidth="4"/>
    <defs>
      <linearGradient id="xGrad" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F97316"/>
        <stop offset="1" stopColor="#FDBA74"/>
      </linearGradient>
    </defs>
    <g filter="url(#shadow)">
      <path d="M60 60 L140 140" stroke="url(#xGrad)" strokeWidth="18" strokeLinecap="round"/>
      <path d="M140 60 L60 140" stroke="url(#xGrad)" strokeWidth="18" strokeLinecap="round"/>
    </g>
    <g>
      <ellipse cx="100" cy="30" rx="12" ry="5" fill="#FDBA74" opacity="0.7"/>
      <ellipse cx="170" cy="100" rx="5" ry="12" fill="#FDBA74" opacity="0.7"/>
      <ellipse cx="100" cy="170" rx="12" ry="5" fill="#FDBA74" opacity="0.7"/>
      <ellipse cx="30" cy="100" rx="5" ry="12" fill="#FDBA74" opacity="0.7"/>
    </g>
    <text x="100" y="185" textAnchor="middle" fill="#F97316" fontSize="28" fontFamily="Montserrat, Arial, sans-serif" fontWeight="bold" letterSpacing="2">
      MithilaX
    </text>
    <filter id="shadow" x="0" y="0" width="200" height="200">
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0a2540" floodOpacity="0.3"/>
    </filter>
  </svg>
);

export default MithilaXLogo;
