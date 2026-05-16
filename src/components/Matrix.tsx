"use client";

import { useState } from "react";
import { PAIRS } from "@/data/pairs";

export default function Matrix() {
  const [active, setActive] = useState<number>(0);
  const pair = PAIRS[active];

  return (
    <>
      <div className="matrix-wrap" id="matrix">
        <div className="matrix" role="grid">
          <div className="cell row-label" role="rowheader">
            <span className="en-only">Northerner</span><span className="zh-only">北方人</span>
            <span className="row-zh en-only">北方人</span>
          </div>
          {PAIRS.map((p, i) => (
            <div
              key={p.id + "-n"}
              className={"cell row-north " + (i === active ? "active" : "")}
              onClick={() => setActive(i)}
              role="gridcell"
            >
              <span className="zh-only">{p.north.zh}</span>
              <span className="en-only">{p.north.zh}</span>
              <span className="pair-en">{p.north.en}</span>
            </div>
          ))}

          <div className="cell row-label" role="rowheader">
            <span className="en-only">Southerner</span><span className="zh-only">南方人</span>
            <span className="row-zh en-only">南方人</span>
          </div>
          {PAIRS.map((p, i) => (
            <div
              key={p.id + "-s"}
              className={"cell row-south " + (i === active ? "active" : "")}
              onClick={() => setActive(i)}
              role="gridcell"
            >
              <span>{p.south.zh}</span>
              <span className="pair-en">{p.south.en}</span>
            </div>
          ))}

          <div className="cell row-label" role="rowheader">
            <span className="en-only">N rules S</span><span className="zh-only">北治南</span>
            <span className="row-zh en-only">北治南</span>
          </div>
          {PAIRS.map((p, i) => (
            <div
              key={p.id + "-r"}
              className={"cell row-regime " + (i === active ? "active" : "")}
              onClick={() => setActive(i)}
              role="gridcell"
            >
              <span>{p.regime.zh}</span>
              <span className="pair-en">{p.regime.en}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="matrix-detail" key={pair.id}>
        <div className="col-meta">
          <span><strong>ERA</strong>{pair.era}</span>
          <span><strong>REGION</strong>{pair.region}</span>
          <span><strong>RULED</strong>≈{pair.ruledMillions}M</span>
          <span><strong>DURATION</strong>{pair.durationYears} years</span>
        </div>
        <h3>
          <span className="en-only">{pair.regime.en} — {pair.north.en} over {pair.south.en}</span>
          <span className="zh-only">{pair.regime.zh}　{pair.north.zh}治{pair.south.zh}</span>
          <span className="zh en-only">{pair.regime.zh}</span>
        </h3>
        <div style={{ marginTop: 18 }}>
          <p className="story en-only">{pair.story}</p>
          <p className="story zh zh-only">{pair.storyZh}</p>
        </div>
      </div>
    </>
  );
}
