"use client";

import { useEffect, useRef, useState } from "react";

// Composite Wude / Martial-Virtue Index — heuristic, deliberately legible.
//   territorial reach × dynasty longevity × per-capita scientific output × military innovation × continued influence
// Normalized to 100. Disputable on purpose: meant to be argued with, not believed.

const NORTHERN = [
  { zh: "盎格鲁撒克逊", en: "Anglo-Saxon", score: 100, note: "Two world orders. Two thalassocracies." },
  { zh: "蒙古",        en: "Mongol",      score: 86,  note: "Largest contiguous land empire ever." },
  { zh: "突厥",        en: "Turkic",      score: 78,  note: "From Bilge Khagan to Erdoğan, twelve centuries on horseback." },
  { zh: "日耳曼",      en: "Germanic",    score: 74,  note: "Holy Rome, Habsburg, Hohenzollern, two Reichs." },
  { zh: "日本",        en: "Japanese",    score: 68,  note: "Meiji crash-modernization, Pacific war, post-1945 economic dominance." },
  { zh: "通古斯",      en: "Tungusic",    score: 64,  note: "Manchu Qing — the longest-lived conquest dynasty." },
];

const SOUTHERN = [
  { zh: "以色列", en: "Israel",  score: 100, note: "Six wars. Five Nobel-tier physicists. Mossad, Unit 8200, Iron Dome." },
  { zh: "罗马",   en: "Rome",    score: 88,  note: "Legions, Latin, law, and the Catholic Church." },
  { zh: "希腊",   en: "Greece",  score: 76,  note: "Phalanx, philosophy, the Aegean fleet." },
  { zh: "中国",   en: "China",   score: 72,  note: "Han, Tang, Ming offensives — and the long Republican / PLA arc." },
  { zh: "波斯",   en: "Persia",  score: 60,  note: "Achaemenid, Sasanian, Safavid — repeatedly broken and remade." },
  { zh: "阿拉伯", en: "Arab",    score: 56,  note: "Rashidun cavalry, Andalusian science, modern hydrocarbon leverage." },
  { zh: "埃及",   en: "Egyptian",score: 38,  note: "Pyramid builders. Then forty centuries of foreign rule." },
  { zh: "印度",   en: "Indian",  score: 36,  note: "Brilliant scholarship. Repeated conquest from the Khyber." },
];

function Card({ title, titleZh, subtitle, subtitleZh, rows }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="metric-card" ref={ref}>
      <h4>
        <span className="en-only">{title}</span>
        <span className="zh-only">{titleZh}</span>
        <span className="zh en-only">{titleZh}</span>
      </h4>
      <p className="desc">
        <span className="en-only">{subtitle}</span>
        <span className="zh-only">{subtitleZh}</span>
      </p>
      <div className="bars">
        {rows.map((r: any, i: number) => (
          <div className="bar-row" key={r.en}>
            <span className="label">
              <span className="en-only">{r.en}</span>
              <span className="zh-only">{r.zh}</span>
            </span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ transform: `scaleX(${visible ? r.score / 100 : 0})`, transitionDelay: `${i * 80}ms` }}
              />
            </div>
            <span className="value">{r.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MartialVirtue() {
  return (
    <div className="metric-grid">
      <Card
        title="Northern Martial Virtue Index"
        titleZh="北方武德排名"
        subtitle="Among the conquering peoples of the table, the Anglo-Saxon order leads on every dimension that matters in the modern era — naval reach, institutional longevity, and the unique ability to unbuild rival empires without inheriting them."
        subtitleZh="表中诸征服者之中，盎格鲁-撒克逊秩序在近代每一维度上领先：海权、制度寿命、以及解构他帝国而拒为继承者的独有能力。"
        rows={NORTHERN}
      />
      <Card
        title="Southern Martial Virtue Index"
        titleZh="南方武德排名"
        subtitle="Among the civilizations that endured Northern rule, Israel is the anomaly — a Southerner people that re-armed itself in 1948 and now fields one of the most lethal militaries per capita in human history."
        subtitleZh="在曾被北方统治的诸文明之中，以色列是异数——一个南方人在一九四八年重新武装自己，并锻造出人类史上人均战力最强的军队之一。"
        rows={SOUTHERN}
      />
    </div>
  );
}
