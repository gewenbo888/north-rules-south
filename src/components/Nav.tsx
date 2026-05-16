"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("nrs-lang")) as "en" | "zh" | null;
    if (saved === "en" || saved === "zh") setLang(saved);
    const initial = saved ?? "en";
    document.documentElement.setAttribute("data-lang", initial);
    document.documentElement.setAttribute("lang", initial === "zh" ? "zh-CN" : "en");
  }, []);

  function change(next: "en" | "zh") {
    setLang(next);
    document.documentElement.setAttribute("data-lang", next);
    document.documentElement.setAttribute("lang", next === "zh" ? "zh-CN" : "en");
    try { localStorage.setItem("nrs-lang", next); } catch {}
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-glyph">北</span>
          <span>
            <span className="en-only">North Rules South</span>
            <span className="zh-only">北 治 南</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#matrix"><span className="en-only">Matrix</span><span className="zh-only">十二格</span></a>
          <a href="#thesis"><span className="en-only">Thesis</span><span className="zh-only">本论</span></a>
          <a href="#cases"><span className="en-only">Cases</span><span className="zh-only">案例</span></a>
          <a href="#map"><span className="en-only">Map</span><span className="zh-only">舆图</span></a>
          <a href="#metrics"><span className="en-only">Metrics</span><span className="zh-only">武德</span></a>
          <a href="#anomaly"><span className="en-only">Anomalies</span><span className="zh-only">变数</span></a>
          <a href="#future"><span className="en-only">Future</span><span className="zh-only">未来</span></a>
        </div>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button onClick={() => change("en")} className={lang === "en" ? "active" : ""}>EN</button>
          <button onClick={() => change("zh")} className={lang === "zh" ? "active" : ""}>中</button>
        </div>
      </div>
    </nav>
  );
}
