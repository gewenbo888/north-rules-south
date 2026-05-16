"use client";

import { useState } from "react";
import { PAIRS } from "@/data/pairs";

// Equirectangular projection: lon [-180, 180] -> x [0, W], lat [90, -90] -> y [0, H]
const W = 1000;
const H = 500;
function proj(lon: number, lat: number) {
  return [((lon + 180) / 360) * W, ((90 - lat) / 180) * H];
}

// Origins of each "Northern" people, approximated for the arc visual.
const NORTH_ORIGINS: Record<string, [number, number]> = {
  "manchu-china": [128, 47],          // Amur / Manchuria
  "mongol-india": [105, 47],          // Mongolian steppe
  "turkic-persia": [55, 40],          // Caspian steppe
  "ottoman-arabia": [35, 41],         // Anatolia
  "ottoman-israel": [35, 41],
  "ottoman-iraq": [35, 41],
  "ottoman-egypt": [35, 41],
  "ottoman-greece": [35, 41],
  "germanic-rome": [10, 53],          // North German plain
  "japan-austronesian": [138, 36],    // Honshu
  "anglo-old-world": [-1, 52],        // London
};

export default function ConquestMap() {
  const [hover, setHover] = useState<string | null>(null);

  // Simplified continent silhouettes (very rough hand-traced equirectangular paths).
  const continents = (
    <g fill="#1c1f26" stroke="rgba(195, 147, 84, 0.35)" strokeWidth="0.8">
      {/* North America */}
      <path d="M 80 110 L 200 105 L 270 145 L 300 220 L 240 290 L 180 290 L 130 230 L 95 195 L 85 150 Z" />
      {/* South America */}
      <path d="M 250 295 L 310 295 L 330 360 L 305 440 L 270 460 L 245 415 L 240 360 Z" />
      {/* Europe */}
      <path d="M 470 110 L 545 95 L 560 130 L 575 165 L 545 185 L 520 175 L 490 170 L 470 145 Z" />
      {/* Africa */}
      <path d="M 480 190 L 555 195 L 600 230 L 615 295 L 590 365 L 555 410 L 510 405 L 480 345 L 470 270 L 475 220 Z" />
      {/* Middle East / Anatolia */}
      <path d="M 560 175 L 620 175 L 660 200 L 660 235 L 620 240 L 580 225 Z" />
      {/* Central Asia / India */}
      <path d="M 620 175 L 720 175 L 770 215 L 780 290 L 730 305 L 700 270 L 680 245 L 650 225 Z" />
      {/* East Asia */}
      <path d="M 760 130 L 870 130 L 890 195 L 870 250 L 820 270 L 790 240 L 770 200 Z" />
      {/* SE Asia / Indonesia */}
      <path d="M 800 270 L 870 285 L 900 310 L 880 345 L 830 340 L 805 320 Z" />
      {/* Australia */}
      <path d="M 850 365 L 935 360 L 960 395 L 935 425 L 870 425 L 845 405 Z" />
      {/* Japan */}
      <path d="M 880 150 L 905 150 L 920 195 L 905 215 L 885 200 Z" />
      {/* British Isles */}
      <path d="M 488 95 L 510 92 L 514 130 L 495 132 L 487 115 Z" />
    </g>
  );

  function arcPath(x1: number, y1: number, x2: number, y2: number) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dr = Math.sqrt(dx * dx + dy * dy) * 1.1;
    return `M${x1},${y1} A${dr},${dr} 0 0,1 ${x2},${y2}`;
  }

  return (
    <div className="map-wrap">
      <svg viewBox={`0 0 ${W} ${H}`} className="map-svg" role="img" aria-label="World map of conquest dynasties">
        <defs>
          <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b1431f" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#c39354" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Subtle latitude grid */}
        <g stroke="rgba(195,147,84,0.05)" strokeWidth="0.5">
          {[0, 100, 200, 300, 400].map(y => (
            <line key={y} x1="0" y1={y} x2={W} y2={y} />
          ))}
          {[0, 200, 400, 600, 800, 1000].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2={H} />
          ))}
        </g>

        {continents}

        {/* Conquest arcs */}
        {PAIRS.map(p => {
          const [nx, ny] = proj(...NORTH_ORIGINS[p.id]);
          const [sx, sy] = proj(p.lon, p.lat);
          return (
            <path
              key={p.id}
              d={arcPath(nx, ny, sx, sy)}
              className="arc"
              stroke={hover === p.id ? "#c39354" : "url(#arc-grad)"}
              strokeWidth={hover === p.id ? 2.4 : 1.4}
              opacity={hover && hover !== p.id ? 0.18 : 0.7}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}

        {/* North origin markers */}
        {Object.entries(NORTH_ORIGINS).map(([id, [lon, lat]]) => {
          const [x, y] = proj(lon, lat);
          return (
            <circle key={"n-" + id} cx={x} cy={y} r={3.5} className="north-dot" />
          );
        })}

        {/* South capital markers */}
        {PAIRS.map(p => {
          const [x, y] = proj(p.lon, p.lat);
          return (
            <g
              key={"s-" + p.id}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
            >
              <circle cx={x} cy={y} r={hover === p.id ? 9 : 6} fill="#4a8d6b" className="south-dot" stroke="#0c0d10" strokeWidth="1.2" />
              <text
                x={x + 10}
                y={y + 4}
                fill="#f4ede0"
                fontFamily="JetBrains Mono, monospace"
                fontSize="11"
                fontWeight="600"
                style={{ opacity: hover === p.id ? 1 : 0.5, pointerEvents: "none" }}
              >
                {p.south.en}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="map-legend">
        <span><span className="legend-dot" style={{ background: "#b1431f" }} />
          <span className="en-only">Northern origin</span>
          <span className="zh-only">北方起源</span>
        </span>
        <span><span className="legend-dot" style={{ background: "#4a8d6b" }} />
          <span className="en-only">Southern center</span>
          <span className="zh-only">南方中心</span>
        </span>
        <span><span className="legend-dot" style={{ background: "#c39354" }} />
          <span className="en-only">Vector of conquest</span>
          <span className="zh-only">征服方向</span>
        </span>
        <span style={{ marginLeft: "auto", color: "var(--steel)" }}>
          <span className="en-only">hover an arc</span>
          <span className="zh-only">悬停观察</span>
        </span>
      </div>
    </div>
  );
}
