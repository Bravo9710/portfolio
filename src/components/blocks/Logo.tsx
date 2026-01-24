// export default function Logo() {
//   return (
//     <div className="relative">
//       {/* Main Logo Container */}
//       <div className="relative w-[200px] h-30">
//         {/* Animated background circles */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="absolute w-40 h-40 rounded-full border-4 border-red-600/30 animate-ping"
//             style={{ animationDuration: "3s" }}
//           ></div>
//           <div
//             className="absolute w-60 h-60 rounded-full border-2 border-red-500/20 animate-pulse"
//             style={{ animationDuration: "2s" }}
//           ></div>
//         </div>

//         {/* Main Logo SVG */}
//         <svg
//           viewBox="0 0 600 300"
//           className="relative z-10 drop-shadow-2xl w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {/* Background glow effect */}
//           <defs>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//               <feMerge>
//                 <feMergeNode in="coloredBlur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//             <linearGradient
//               id="redGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop
//                 offset="0%"
//                 style={{
//                   stopColor: "#ff0000",
//                   stopOpacity: 1,
//                 }}
//               />
//               <stop
//                 offset="100%"
//                 style={{
//                   stopColor: "#cc0000",
//                   stopOpacity: 1,
//                 }}
//               />
//             </linearGradient>
//             <linearGradient
//               id="redGradient2"
//               x1="0%"
//               y1="100%"
//               x2="100%"
//               y2="0%"
//             >
//               <stop
//                 offset="0%"
//                 style={{
//                   stopColor: "#ff3333",
//                   stopOpacity: 1,
//                 }}
//               />
//               <stop
//                 offset="100%"
//                 style={{
//                   stopColor: "#ff0000",
//                   stopOpacity: 1,
//                 }}
//               />
//             </linearGradient>
//           </defs>

//           {/* Decorative code brackets */}
//           <g filter="url(#glow)">
//             {/* Left bracket */}
//             <path
//               d="M 110 80 L 80 80 L 80 220 L 110 220"
//               stroke="url(#redGradient)"
//               strokeWidth="6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M 95 100 L 70 100"
//               stroke="url(#redGradient)"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//             />
//             <path
//               d="M 95 200 L 70 200"
//               stroke="url(#redGradient)"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//             />

//             {/* Right bracket */}
//             <path
//               d="M 490 80 L 520 80 L 520 220 L 490 220"
//               stroke="url(#redGradient)"
//               strokeWidth="6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M 505 100 L 530 100"
//               stroke="url(#redGradient)"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//             />
//             <path
//               d="M 505 200 L 530 200"
//               stroke="url(#redGradient)"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//             />
//           </g>

//           {/* Main VV letters with 3D effect */}
//           <g filter="url(#glow)">
//             {/* First V - Shadow/3D layers */}
//             <path
//               d="M 190 80 L 240 200 L 290 80"
//               stroke="#000000"
//               strokeWidth="28"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               opacity="0.5"
//               transform="translate(3, 3)"
//             />

//             {/* First V - Main */}
//             <path
//               d="M 190 80 L 240 200 L 290 80"
//               stroke="url(#redGradient)"
//               strokeWidth="24"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />

//             {/* First V - Highlight */}
//             <path
//               d="M 195 90 L 240 190"
//               stroke="#ff6666"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//               opacity="0.6"
//             />

//             {/* Dot connector - styled as code point */}
//             <circle cx="300" cy="150" r="8" fill="url(#redGradient)" />
//             {/* <circle cx="200" cy="200" r="4" fill="#ffffff" /> */}

//             {/* Second V - Shadow/3D layers */}
//             <path
//               d="M 310 80 L 360 200 L 410 80"
//               stroke="#000000"
//               strokeWidth="28"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               opacity="0.5"
//               transform="translate(3, 3)"
//             />

//             {/* Second V - Main */}
//             <path
//               d="M 310 80 L 360 200 L 410 80"
//               stroke="url(#redGradient2)"
//               strokeWidth="24"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />

//             {/* Second V - Highlight */}
//             <path
//               d="M 315 90 L 360 190"
//               stroke="#ff6666"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//               opacity="0.6"
//             />
//           </g>

//           {/* Decorative code elements */}
//           <g opacity="0.7">
//             {/* HTML-style closing tag */}
//             <text
//               x="240"
//               y="255"
//               fill="url(#redGradient)"
//               fontSize="20"
//               fontFamily="monospace"
//               fontWeight="bold"
//             >
//               &lt;/&gt;
//             </text>

//             {/* Forward slashes */}
//             <line
//               x1="120"
//               y1="60"
//               x2="135"
//               y2="40"
//               stroke="#ff0000"
//               strokeWidth="3"
//               strokeLinecap="round"
//             />
//             <line
//               x1="465"
//               y1="60"
//               x2="480"
//               y2="40"
//               stroke="#ff0000"
//               strokeWidth="3"
//               strokeLinecap="round"
//             />

//             {/* Curly braces */}
//             <text
//               x="95"
//               y="155"
//               fill="#ff0000"
//               fontSize="32"
//               fontFamily="monospace"
//               opacity="0.5"
//             >
//               &#123;
//             </text>
//             <text
//               x="495"
//               y="155"
//               fill="#ff0000"
//               fontSize="32"
//               fontFamily="monospace"
//               opacity="0.5"
//             >
//               &#125;
//             </text>
//           </g>

//           {/* Pixel/Grid accent */}
//           <g opacity="0.3">
//             <rect x="180" y="215" width="6" height="6" fill="#ff0000" />
//             <rect x="190" y="215" width="6" height="6" fill="#ff0000" />
//             <rect x="180" y="225" width="6" height="6" fill="#ff0000" />

//             <rect x="414" y="215" width="6" height="6" fill="#ff0000" />
//             <rect x="424" y="215" width="6" height="6" fill="#ff0000" />
//             <rect x="424" y="225" width="6" height="6" fill="#ff0000" />
//           </g>

//           {/* Subtitle text */}
//           <text
//             x="300"
//             y="280"
//             fill="#ff0000"
//             fontSize="28"
//             fontFamily="monospace"
//             textAnchor="middle"
//             letterSpacing="3"
//             fontWeight="bold"
//           >
//             FRONTEND DEV
//           </text>
//         </svg>

//         {/* Floating particles effect */}
//         <div
//           className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-bounce"
//           style={{ animationDuration: "2.5s" }}
//         ></div>
//         <div
//           className="absolute top-20 right-20 w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"
//           style={{
//             animationDuration: "3s",
//             animationDelay: "0.5s",
//           }}
//         ></div>
//         <div
//           className="absolute bottom-24 left-16 w-2 h-2 bg-red-400 rounded-full animate-bounce"
//           style={{
//             animationDuration: "2.8s",
//             animationDelay: "1s",
//           }}
//         ></div>
//         <div
//           className="absolute bottom-16 right-12 w-1 h-1 bg-red-500 rounded-full animate-bounce"
//           style={{
//             animationDuration: "3.2s",
//             animationDelay: "0.3s",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default function Logo() {
//   return (
//     <div className="relative">
//       <div className="relative h-24 w-auto">
//         {/* Animated background circles - BRING THE ENERGY */}
//         <div className="absolute inset-0 flex items-center justify-center bg-[rgba(232,68,68,0)]">
//           <div
//             className="absolute w-16 h-16 rounded-full border-2 border-red-600/30 animate-ping"
//             style={{ animationDuration: "3s" }}
//           ></div>
//           <div
//             className="absolute w-20 h-20 rounded-full border border-red-500/20 animate-pulse"
//             style={{ animationDuration: "2s" }}
//           ></div>
//         </div>

//         {/* Main Logo SVG */}
//         <svg
//           viewBox="0 0 240 90"
//           className="relative z-10 drop-shadow-2xl h-24 w-auto"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Background glow effect */}
//           <defs>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//               <feMerge>
//                 <feMergeNode in="coloredBlur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//             <linearGradient
//               id="redGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop
//                 offset="0%"
//                 style={{ stopColor: "#ff0000", stopOpacity: 1 }}
//               />
//               <stop
//                 offset="100%"
//                 style={{ stopColor: "#cc0000", stopOpacity: 1 }}
//               />
//             </linearGradient>
//             <linearGradient
//               id="redGradient2"
//               x1="0%"
//               y1="100%"
//               x2="100%"
//               y2="0%"
//             >
//               <stop
//                 offset="0%"
//                 style={{ stopColor: "#ff3333", stopOpacity: 1 }}
//               />
//               <stop
//                 offset="100%"
//                 style={{ stopColor: "#ff0000", stopOpacity: 1 }}
//               />
//             </linearGradient>
//           </defs>

//           {/* Decorative code brackets */}
//           <g filter="url(#glow)">
//             {/* Left bracket */}
//             <path
//               d="M 20 15 L 12 15 L 12 60 L 20 60"
//               stroke="url(#redGradient)"
//               strokeWidth="3"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M 16 24 L 9 24"
//               stroke="url(#redGradient)"
//               strokeWidth="2"
//               fill="none"
//               strokeLinecap="round"
//             />
//             <path
//               d="M 16 51 L 9 51"
//               stroke="url(#redGradient)"
//               strokeWidth="2"
//               fill="none"
//               strokeLinecap="round"
//             />

//             {/* Right bracket */}
//             <path
//               d="M 220 15 L 228 15 L 228 60 L 220 60"
//               stroke="url(#redGradient)"
//               strokeWidth="3"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M 224 24 L 231 24"
//               stroke="url(#redGradient)"
//               strokeWidth="2"
//               fill="none"
//               strokeLinecap="round"
//             />
//             <path
//               d="M 224 51 L 231 51"
//               stroke="url(#redGradient)"
//               strokeWidth="2"
//               fill="none"
//               strokeLinecap="round"
//             />
//           </g>

//           {/* Main VV letters with 3D effect */}
//           <g filter="url(#glow)">
//             {/* First V - Shadow/3D layers */}
//             <path
//               d="M 55 15 L 80 62 L 105 15"
//               stroke="#000000"
//               strokeWidth="14"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               opacity="0.5"
//               transform="translate(2, 2)"
//             />

//             {/* First V - Main */}
//             <path
//               d="M 55 15 L 80 62 L 105 15"
//               stroke="url(#redGradient)"
//               strokeWidth="12"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />

//             {/* First V - Highlight */}
//             <path
//               d="M 58 20 L 80 58"
//               stroke="#ff6666"
//               strokeWidth="2.5"
//               fill="none"
//               strokeLinecap="round"
//               opacity="0.6"
//             />

//             {/* Dot connector - styled as code point */}
//             <circle cx="120" cy="37" r="4" fill="url(#redGradient)" />

//             {/* Second V - Shadow/3D layers */}
//             <path
//               d="M 135 15 L 160 62 L 185 15"
//               stroke="#000000"
//               strokeWidth="14"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               opacity="0.5"
//               transform="translate(2, 2)"
//             />

//             {/* Second V - Main */}
//             <path
//               d="M 135 15 L 160 62 L 185 15"
//               stroke="url(#redGradient2)"
//               strokeWidth="12"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />

//             {/* Second V - Highlight */}
//             <path
//               d="M 138 20 L 160 58"
//               stroke="#ff6666"
//               strokeWidth="2.5"
//               fill="none"
//               strokeLinecap="round"
//               opacity="0.6"
//             />
//           </g>

//           {/* Decorative code elements */}
//           <g opacity="0.7">
//             {/* HTML-style closing tag */}
//             <text
//               x="95"
//               y="78"
//               fill="url(#redGradient)"
//               fontSize="10"
//               fontFamily="monospace"
//               fontWeight="bold"
//             >
//               &lt;/&gt;
//             </text>

//             {/* Forward slashes */}
//             <line
//               x1="40"
//               y1="12"
//               x2="47"
//               y2="6"
//               stroke="#ff0000"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//             <line
//               x1="193"
//               y1="12"
//               x2="200"
//               y2="6"
//               stroke="#ff0000"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />

//             {/* Curly braces */}
//             <text
//               x="28"
//               y="42"
//               fill="#ff0000"
//               fontSize="16"
//               fontFamily="monospace"
//               opacity="0.5"
//             >
//               &#123;
//             </text>
//             <text
//               x="206"
//               y="42"
//               fill="#ff0000"
//               fontSize="16"
//               fontFamily="monospace"
//               opacity="0.5"
//             >
//               &#125;
//             </text>
//           </g>

//           {/* Pixel/Grid accent */}
//           <g opacity="0.3">
//             <rect x="65" y="68" width="3" height="3" fill="#ff0000" />
//             <rect x="70" y="68" width="3" height="3" fill="#ff0000" />
//             <rect x="65" y="73" width="3" height="3" fill="#ff0000" />

//             <rect x="167" y="68" width="3" height="3" fill="#ff0000" />
//             <rect x="172" y="68" width="3" height="3" fill="#ff0000" />
//             <rect x="172" y="73" width="3" height="3" fill="#ff0000" />
//           </g>

//           {/* Subtitle text */}
//           <text
//             x="120"
//             y="86"
//             fill="#ff0000"
//             fontSize="11"
//             fontFamily="monospace"
//             textAnchor="middle"
//             letterSpacing="2"
//             fontWeight="bold"
//           >
//             FRONTEND DEV
//           </text>
//         </svg>

//         {/* Floating particles effect */}
//         <div
//           className="absolute top-2 left-8 w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce"
//           style={{ animationDuration: "2.5s" }}
//         ></div>
//         <div
//           className="absolute top-4 right-12 w-1 h-1 bg-red-600 rounded-full animate-bounce"
//           style={{
//             animationDuration: "3s",
//             animationDelay: "0.5s",
//           }}
//         ></div>
//         <div
//           className="absolute bottom-3 left-10 w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce"
//           style={{
//             animationDuration: "2.8s",
//             animationDelay: "1s",
//           }}
//         ></div>
//         <div
//           className="absolute bottom-4 right-8 w-1 h-1 bg-red-500 rounded-full animate-bounce"
//           style={{
//             animationDuration: "3.2s",
//             animationDelay: "0.3s",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

export default function Logo() {
  return (
    <div className="relative h-[50px] w-auto max-w-max">
      {/* Animated background circles - BRING THE ENERGY */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-10 h-10 rounded-full border border-[#ff494a]/30 animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute w-12 h-12 rounded-full border border-[#ff494a]/20 animate-pulse"
          style={{ animationDuration: "2s" }}
        ></div>
      </div>

      {/* Main Logo SVG */}
      <svg
        viewBox="0 0 240 100"
        className="relative z-10 drop-shadow-2xl h-[50px] w-auto"
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
