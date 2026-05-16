import { FOUNDERS, HUNGARIAN_CLUSTER } from "@/data/scientists";

export default function Founders() {
  return (
    <>
      <div className="founder-grid">
        {FOUNDERS.map((f, i) => (
          <article className="founder-card" key={f.name.en}>
            <div className="num">№ {String(i + 1).padStart(2, "0")}</div>
            <h4>
              <span className="en-only">{f.name.en}</span>
              <span className="zh-only">{f.name.zh}</span>
              <span className="zh en-only">{f.name.zh}</span>
            </h4>
            <div className="field en-only">{f.field.en}</div>
            <div className="field zh-only">{f.field.zh}</div>
            <div className="field-zh en-only">{f.field.zh}</div>
            <div className="born">{f.born}</div>
            <div className="arc en-only">{f.arc.en}</div>
            <div className="arc zh-only">{f.arc.zh}</div>
            <div className="arc zh en-only">{f.arc.zh}</div>
          </article>
        ))}
      </div>

      <div className="footnote-box" style={{ marginTop: 56 }}>
        <span className="en-only">
          Four of the five "fathers" — von Kármán, Szilárd, von Neumann, Teller — were born within a hundred miles of Budapest between 1881 and 1908. Add Eugene Wigner (Nobel, physics) and Paul Erdős (the most prolific mathematician of the twentieth century), and you have, by population, the densest concentration of scientific genius in recorded history. They called themselves the Martians.
        </span>
        <span className="zh-only zh">
          五位「之父」之中，冯·卡门、西拉德、冯·诺依曼、泰勒——四人皆于一八八一至一九〇八年间生于布达佩斯方圆百英里之内。再加上诺贝尔物理学奖得主维格纳，与二十世纪最多产的数学家保罗·埃尔德什，便构成有史以来按人口密度最浓缩的科学天才集群。他们自称「火星人」。
        </span>
        <span className="src">
          <span className="en-only">The Martians of Science · George Marx · 2001</span>
          <span className="zh-only">乔治·马克思《科学界的火星人》 · 二〇〇一</span>
        </span>
      </div>

      <div style={{ marginTop: 32, padding: "20px 0", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--steel-2)" }}>
        <strong style={{ color: "var(--bronze)", marginRight: 16 }}>THE MARTIANS</strong>
        {HUNGARIAN_CLUSTER.map((h, i) => (
          <span key={h.name}>
            {h.name} <span style={{ color: "var(--bronze)" }}>{h.year}</span>
            {i < HUNGARIAN_CLUSTER.length - 1 ? "  ·  " : ""}
          </span>
        ))}
      </div>
    </>
  );
}
