export default function Logo() {
  return (
    <div className="relative h-[50px] w-auto max-w-max">
      {/* Animated background circles - BRING THE ENERGY */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-10 w-10 animate-ping rounded-full border border-[#ff494a]/30"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute h-12 w-12 animate-pulse rounded-full border border-[#ff494a]/20"
          style={{ animationDuration: "2s" }}
        ></div>
      </div>

      {/* Main Logo SVG */}
      <svg
        viewBox="0 0 240 100"
        className="relative z-10 h-[50px] w-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background glow effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#ff494a", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#d93a3b", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="redGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ff6b6c", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ff494a", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Decorative code brackets */}
        <g filter="url(#glow)">
          {/* Left bracket */}
          <path
            d="M 20 15 L 12 15 L 12 60 L 20 60"
            stroke="url(#redGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 16 24 L 9 24"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 16 51 L 9 51"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Right bracket */}
          <path
            d="M 220 15 L 228 15 L 228 60 L 220 60"
            stroke="url(#redGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 224 24 L 231 24"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 224 51 L 231 51"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Main VV letters with 3D effect */}
        <g filter="url(#glow)">
          {/* First V - Shadow/3D layers */}
          <path
            d="M 55 15 L 80 62 L 105 15"
            stroke="#000000"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
            transform="translate(2, 2)"
          />

          {/* First V - Main */}
          <path
            d="M 55 15 L 80 62 L 105 15"
            stroke="url(#redGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* First V - Highlight */}
          <path
            d="M 58 20 L 80 58"
            stroke="#ff8889"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Dot connector - styled as code point */}
          <circle cx="120" cy="37" r="4" fill="url(#redGradient)" />

          {/* Second V - Shadow/3D layers */}
          <path
            d="M 135 15 L 160 62 L 185 15"
            stroke="#000000"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
            transform="translate(2, 2)"
          />

          {/* Second V - Main */}
          <path
            d="M 135 15 L 160 62 L 185 15"
            stroke="url(#redGradient2)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Second V - Highlight */}
          <path
            d="M 138 20 L 160 58"
            stroke="#ff8889"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* Decorative code elements */}
        <g opacity="0.7">
          {/* HTML-style closing tag */}
          <text
            x="95"
            y="78"
            fill="url(#redGradient)"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            &lt;/&gt;
          </text>

          {/* Curly braces */}
          <text
            x="28"
            y="42"
            fill="#ff494a"
            fontSize="16"
            fontFamily="monospace"
            opacity="0.5"
          >
            &#123;
          </text>
          <text
            x="206"
            y="42"
            fill="#ff494a"
            fontSize="16"
            fontFamily="monospace"
            opacity="0.5"
          >
            &#125;
          </text>
        </g>

        {/* Pixel/Grid accent */}
        <g opacity="0.3">
          <rect x="65" y="68" width="3" height="3" fill="#ff494a" />
          <rect x="70" y="68" width="3" height="3" fill="#ff494a" />
          <rect x="65" y="73" width="3" height="3" fill="#ff494a" />

          <rect x="167" y="68" width="3" height="3" fill="#ff494a" />
          <rect x="172" y="68" width="3" height="3" fill="#ff494a" />
          <rect x="172" y="73" width="3" height="3" fill="#ff494a" />
        </g>

        {/* Subtitle text */}
        <text
          x="120"
          y="100"
          fill="#ff494a"
          fontSize="18"
          fontFamily="monospace"
          textAnchor="middle"
          letterSpacing="4.3"
          fontWeight="bold"
        >
          FRONTEND DEV
        </text>
      </svg>
    </div>
  );
}
