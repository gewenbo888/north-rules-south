import Nav from "@/components/Nav";
import Matrix from "@/components/Matrix";
import ConquestMap from "@/components/ConquestMap";
import MartialVirtue from "@/components/MartialVirtue";
import Founders from "@/components/Founders";
import Timeline from "@/components/Timeline";
import { PAIRS, TOTAL_RULED, LONGEST } from "@/data/pairs";

export default function Page() {
  return (
    <>
      <Nav />
      <div id="top" />

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="container">
          <span className="eyebrow">
            <span className="en-only">A Theory of Conquest Dynasties</span>
            <span className="zh-only">征服王朝论 · 十二格</span>
          </span>
          <h1 style={{ marginTop: 20 }}>
            <span className="en-only">North <span className="accent">Rules</span> South</span>
            <span className="zh-only">北 · <span className="accent">治</span> · 南</span>
          </h1>
          <span className="zh-title en-only">北 · 治 · 南</span>
          <span className="zh-title zh-only">North Rules South</span>
          <p className="deck en-only">
            For four thousand years the great agrarian civilizations of the Old World — China, India, Persia, Mesopotamia, Egypt, Greece, Rome, the Levant — were repeatedly conquered and ruled by horse-bow nomads, forest hunters, and sea-faring outsiders from their northern frontiers. The pattern is so consistent that it begs a theory.
          </p>
          <p className="deck zh zh-only">
            四千年来，旧大陆的伟大农耕文明——中国、印度、波斯、两河、埃及、希腊、罗马、黎凡特——一再被来自其北方边疆的弓骑游牧、森林猎手与航海异族所征服与统治。其模式之一贯，必待一理论以解。
          </p>

          <div className="hero-meta">
            <div className="stat">
              <div className="num">12</div>
              <div className="label"><span className="en-only">Civilization Pairs</span><span className="zh-only">文明对</span></div>
            </div>
            <div className="stat">
              <div className="num">{(TOTAL_RULED / 1000).toFixed(1)}B</div>
              <div className="label"><span className="en-only">Souls Ruled at Peak</span><span className="zh-only">极盛治下人口</span></div>
            </div>
            <div className="stat">
              <div className="num">{LONGEST.durationYears}</div>
              <div className="label"><span className="en-only">Years (Longest · {LONGEST.regime.en})</span><span className="zh-only">最长统治年数</span></div>
            </div>
            <div className="stat">
              <div className="num">4000</div>
              <div className="label"><span className="en-only">Year Span</span><span className="zh-only">时间跨度</span></div>
            </div>
            <div className="stat">
              <div className="num">5</div>
              <div className="label"><span className="en-only">Jewish "Fathers"</span><span className="zh-only">犹太五父</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ MATRIX ============ */}
      <section className="block" id="matrix-section">
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">The Twelve-Cell Matrix</span>
              <span className="zh-only">十二格矩阵</span>
              <span className="zh en-only">十二格矩阵</span>
            </h2>
            <span className="eyebrow">
              <span className="en-only">§ 01 · Click any column</span>
              <span className="zh-only">§ 01 · 任点一列</span>
            </span>
          </div>
          <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.6, color: "var(--paper-2)", marginBottom: 48, maxWidth: 880 }}>
            <span className="en-only">
              Twelve columns. Three rows. Every column names a Northern people, the Southern civilization it conquered, and the regime that realized the conquest. The matrix is the source diagram of this site — the entire argument unpacks from these thirty-six cells.
            </span>
            <span className="zh-only zh">
              十二列，三行。每一列指认一个北方民族、其所征服的南方文明、以及实现此征服的王朝。本矩阵乃全站之源图——三十六格中藏全部论证。
            </span>
          </p>
          <Matrix />
        </div>
      </section>

      {/* ============ THESIS ============ */}
      <section className="block" id="thesis">
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">The Pattern, the Mechanism, the Exception</span>
              <span className="zh-only">模式 · 机理 · 例外</span>
              <span className="zh en-only">模式 · 机理 · 例外</span>
            </h2>
            <span className="eyebrow">§ 02 · Thesis</span>
          </div>

          <div className="two-col">
            <div className="prose en-only">
              <p>
                <span className="drop">F</span>or most of recorded history, the great civilizations of the Old World did not rule themselves. Their throne, their army, and their ruling caste were imported from beyond their northern frontier. Imperial China was Manchu, imperial India was Turko-Mongol, imperial Persia was Turkic, imperial Arabia was Ottoman Turkish, imperial Rome (in its second life as the Holy Roman Empire) was Germanic, and the colonized Austronesian-Pacific world was, for fifty years, Japanese. Six of the eleven Old-World civilizations on this matrix spent their early-modern centuries under a foreign Northern regime.
              </p>
              <p>
                The mechanism is geographic and ecological. North of every great agricultural belt — the Yellow River loess, the Indo-Gangetic plain, the Iranian plateau, Mesopotamia, the Nile valley, the Aegean — sits a hard frontier where farming yields collapse: steppe, forest, mountain, or open sea. The peoples who survive there are selected, generation after generation, for mobility, lethality, cold-tolerance, and political confederation. When climatic, demographic, or institutional shocks weaken the southern agrarian state, the Northerners pour through the gap.
              </p>
              <p>
                The southern civilization is not destroyed by this. Its language survives, its religion survives, its peasants survive, its bureaucracy is often co-opted intact. What changes is the throne. The conquerors arrive with three to five hundred thousand sword-bearing men and end up administering a population of a hundred million through the apparatus they found. The Manchus learned to write memorials in Classical Chinese. The Mughals patronized Persian poetry. The Ottomans built mosques in the style of Justinian's Hagia Sophia. The form persists; the head changes.
              </p>
              <p>
                Two civilizations on the matrix break the pattern, and they do so in opposite directions. The Anglo-Saxons — a Northern people in our schema, mobile and sea-faring — built the only modern order that <em>refused to inherit</em> the empires it defeated. London and Washington unbuilt the Ottoman, Mughal, Qing, and Romanov sovereignties without installing themselves on their thrones. They governed by sea-lane, treaty, and trade — what scholars call hegemony rather than empire. This is the meaning of the seventh-from-right cell: <strong>Anglo-Saxons · Old World · Liberators.</strong>
              </p>
              <p>
                The other exception is Israel — a Southern civilization on every dimension (agrarian, literate, oriental, Mediterranean) that nevertheless re-armed itself in 1948 and now possesses, per capita, the most lethal military and the densest concentration of Nobel-tier scientists outside of Massachusetts. The footnote of the original matrix gestures at this: <em>Jews learned the science.</em> Where Anglo-Saxons proved that a Northerner could refuse empire, Israel proves that a Southerner could refuse subjection.
              </p>
            </div>
            <div className="prose zh zh-only">
              <p>
                <span className="drop">史</span>之大半，旧大陆诸大文明非自治者也。其王座、其军队、其统治阶层皆自北方边疆而来：皇汉中国为满清，皇印度为突厥-蒙古，皇波斯为突厥，皇阿拉伯为奥斯曼土耳其，皇罗马（以其神圣罗马帝国之再生身分）为日耳曼，而被殖民之南岛-太平洋世界则在五十年间为日本所统。本矩阵十一个旧大陆文明中有六个，其近代早期皆度于外来北方王朝之下。
              </p>
              <p>
                其机理乃地理生态。每一大农业带——黄河黄土、印度-恒河平原、伊朗高原、两河流域、尼罗河谷、爱琴海——之北侧，皆有一道农耕陡然失败之硬边疆：草原、森林、高山、或大洋。能在此中存活之民族，代代被选中以高机动、高杀伤、耐寒、与政治结盟。当气候、人口、制度之冲击削弱南方农业国家时，北方人便由其裂口涌入。
              </p>
              <p>
                南方文明并未被毁。其语犹存，其教犹存，其民犹存，其官僚体系常被完整收编。所变者唯王座。征服者携三五十万持剑之人而至，最终以南方既有之机制治百万计之人口。满人学奏摺写文言，莫卧儿崇波斯诗，奥斯曼仿圣索菲亚建清真寺。形式不变；首脑易主。
              </p>
              <p>
                矩阵中有二文明破此模式，方向相反。盎格鲁-撒克逊——按本图式属北方人，机动而擅航海——所建之近代秩序，乃唯一<em>拒绝继承</em>所败帝国者。伦敦与华盛顿瓦解奥斯曼、莫卧儿、大清、罗曼诺夫诸主权，而拒坐其位。其治世以海道、条约、贸易为本——学者称之为「霸权」而非「帝国」。此即矩阵右数第二格所指：<strong>盎格鲁撒克逊 · 旧大陆 · 解放者。</strong>
              </p>
              <p>
                另一例外为以色列——按每一维度皆属南方文明（农耕、文字、东方、地中海）——而于一九四八年自我武装，并在人均上拥有最致命之军队、最浓密的诺奖级科学家集群（除麻州外冠绝寰宇）。原矩阵脚注所指即此：<em>犹太人学到了科技知识。</em>盎格鲁-撒克逊证明北方人可拒绝帝国；以色列证明南方人可拒绝被治。
              </p>
            </div>
          </div>

          <div className="footnote-box" style={{ marginTop: 64 }}>
            <span className="en-only">
              "Northerners with the strongest martial virtue are the British. The British liberated the other Southerners. Southerners with the strongest martial virtue are Israel. The Jews learned the science. Einstein, father of relativity. Von Neumann, father of the computer. Von Kármán, father of aerodynamics. Oppenheimer, father of the atomic bomb. Edward Teller, father of the hydrogen bomb."
              <span className="src">The footnotes of the original matrix · ca. 2025</span>
            </span>
            <span className="zh-only zh">
              「北方人武德第一英国人。英国人解救了其他南方人。南方人武德第一以色列，犹太人学到了科技知识。相对论之父爱因斯坦，计算机之父冯诺依曼，空气动力学之父冯卡门，原子弹之父奥本海默，氢弹之父爱德华泰勒。」
              <span className="src">原矩阵两条脚注 · 二〇二五年</span>
            </span>
          </div>
        </div>
      </section>

      {/* ============ CASES ============ */}
      <section className="block" id="cases" style={{ background: "var(--ink-2)" }}>
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">Eleven Cases of Conquest, One Case of Liberation</span>
              <span className="zh-only">征服十一案 · 解放一案</span>
              <span className="zh en-only">征服十一案 · 解放一案</span>
            </h2>
            <span className="eyebrow">§ 03 · Cases</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "1px", background: "var(--line)", border: "1px solid var(--line)" }}>
            {PAIRS.map((p, i) => (
              <article key={p.id} style={{ background: "var(--ink)", padding: "32px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
                  <span className="eyebrow">№ {String(i + 1).padStart(2, "0")} · {p.era}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--bronze)", letterSpacing: "0.12em" }}>{p.durationYears}y</span>
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 500, marginBottom: 4 }}>
                  <span className="en-only">{p.regime.en}</span>
                  <span className="zh-only">{p.regime.zh}</span>
                </h3>
                <div style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--steel-2)", marginBottom: 18 }}>
                  <span className="en-only">{p.north.en} <span style={{ color: "var(--bronze)" }}>▶</span> {p.south.en}</span>
                  <span className="zh-only">{p.north.zh}　<span style={{ color: "var(--bronze)" }}>▶</span>　{p.south.zh}</span>
                </div>
                <p style={{ fontFamily: "var(--serif)", fontSize: 15.5, lineHeight: 1.55, color: "var(--paper-2)" }} className="en-only">{p.story}</p>
                <p style={{ fontFamily: "var(--serif-zh)", fontSize: 14, lineHeight: 1.95, color: "var(--paper-2)", letterSpacing: "0.02em" }} className="zh-only">{p.storyZh}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="block" id="map">
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">The Vector Field</span>
              <span className="zh-only">征服向量图</span>
              <span className="zh en-only">征服向量图</span>
            </h2>
            <span className="eyebrow">§ 04 · Cartography</span>
          </div>
          <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.6, color: "var(--paper-2)", marginBottom: 36, maxWidth: 880 }}>
            <span className="en-only">
              Every arc on this map flies south. The northern origin of each conquering people; the southern center of each civilization conquered. Hover any line to isolate it. The geometry is the argument.
            </span>
            <span className="zh-only zh">
              此图每一弧线皆南向而飞。征服者北方起源点，被征服文明南方中心点，二点之间以弧连结。悬停以孤立单线观察。几何即论证。
            </span>
          </p>
          <ConquestMap />
        </div>
      </section>

      {/* ============ METRICS ============ */}
      <section className="block" id="metrics" style={{ background: "var(--ink-2)" }}>
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">The Martial Virtue Indices</span>
              <span className="zh-only">武德指数</span>
              <span className="zh en-only">武德指数</span>
            </h2>
            <span className="eyebrow">§ 05 · A heuristic ranking</span>
          </div>
          <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.6, color: "var(--paper-2)", marginBottom: 48, maxWidth: 880 }}>
            <span className="en-only">
              <em>Wude</em> (武德) — martial virtue, the Chinese term — combines territorial reach, dynastic longevity, military innovation, and continued geopolitical relevance. The two rankings below are heuristic and contested on purpose. Argue with them.
            </span>
            <span className="zh-only zh">
              <em>武德</em>者，疆域之广、王朝之久、军事之新、与持续之影响力之合成也。下列两榜，刻意为启发性而非定论。当争之，非当信之。
            </span>
          </p>
          <MartialVirtue />
        </div>
      </section>

      {/* ============ JEWISH ANOMALY ============ */}
      <section className="block" id="anomaly">
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">The Jewish Anomaly</span>
              <span className="zh-only">犹太异数</span>
              <span className="zh en-only">犹太异数</span>
            </h2>
            <span className="eyebrow">§ 06 · Five Fathers</span>
          </div>
          <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.6, color: "var(--paper-2)", marginBottom: 48, maxWidth: 880 }}>
            <span className="en-only">
              The original matrix names five "fathers" — the architects of relativity, the computer, modern aerodynamics, the atomic bomb, and the hydrogen bomb. All five were Jews. Three of the five were born in Budapest. They built the physics, the silicon, and the bombs on which the twentieth century turned.
            </span>
            <span className="zh-only zh">
              原矩阵列五位「之父」——相对论、计算机、近代空气动力学、原子弹、氢弹之缔造者。五人皆犹太人。其中三人生于布达佩斯。他们建造了二十世纪赖以转动的物理学、硅与核弹。
            </span>
          </p>
          <Founders />
        </div>
      </section>

      {/* ============ PULLQUOTE ============ */}
      <section className="block" style={{ padding: "120px 0", background: "linear-gradient(180deg, var(--ink), var(--ink-2))" }}>
        <div className="container-narrow">
          <div className="pullquote">
            <span className="en-only">
              The Anglo-Saxons did to empires what fire does to forests. They cleared the canopy of the great Northern dynasties, allowed the soil of the conquered Souths to be reseeded, and walked away.
            </span>
            <span className="zh-only zh">
              盎格鲁-撒克逊之于帝国，犹火之于森林。彼焚北方诸王朝之华盖，使南方故土再播其种，然后转身而去。
            </span>
            <span className="attrib">
              <span className="en-only">A reading of the matrix</span>
              <span className="zh-only">十二格之读解</span>
            </span>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="block" id="timeline">
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">Twelve Centuries of the Pattern</span>
              <span className="zh-only">十二个世纪</span>
              <span className="zh en-only">十二个世纪</span>
            </h2>
            <span className="eyebrow">§ 07 · Chronology</span>
          </div>
          <Timeline />
        </div>
      </section>

      {/* ============ FUTURE ============ */}
      <section className="block" id="future" style={{ background: "var(--ink-2)" }}>
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="en-only">What Comes Next</span>
              <span className="zh-only">未来何往</span>
              <span className="zh en-only">未来何往</span>
            </h2>
            <span className="eyebrow">§ 08 · Projections</span>
          </div>

          <div className="two-col">
            <div className="prose en-only">
              <p>
                <span className="drop">T</span>he matrix as drawn ends at 1945. Three of its twelve cells now describe rising powers that will, in their own ways, test whether the pattern is geographic destiny or merely a phase of the early-modern world.
              </p>
              <p>
                <strong>China.</strong> The Han majority has, since 1912, restored a Southerner regime over its own civilization for the first time since 1644. The People's Republic is the largest experiment ever run on whether a southern agrarian state can resist conquest from the north (Russia, the steppe), the east (Japan), and the maritime hegemon (the Anglo order) simultaneously. Its martial-virtue score is climbing.
              </p>
              <p>
                <strong>Israel.</strong> The first Southerner state to industrialize war faster than any northern power — three days from mobilization to Sinai in 1967; an iron-dome interception rate above 90% in 2024. The Hebrew physicists are still at MIT, Princeton, the Weizmann, and Tel Aviv. The pattern remains intact: scientific genius surfaces in a Southerner people that learned, the hard way, that it would survive only by out-thinking its Northerners.
              </p>
              <p>
                <strong>The Anglo order.</strong> The seventh column of the table is a verdict in progress. If the Anglo-Saxons can spin down the American century the way they spun down the British one — by handing the baton, not dropping it — the matrix will close with a unique civilization-pair: a Northerner that ended its own dominance voluntarily. If they cannot, a thirteenth column will be drawn by whoever inherits.
              </p>
            </div>
            <div className="prose zh zh-only">
              <p>
                <span className="drop">本</span>矩阵止于一九四五年。其十二格中有三格描述当下之上升势力，将各以己法检验：此模式乃地理之必然，抑或仅近代世界之一阶段。
              </p>
              <p>
                <strong>中国。</strong>自一九一二年以来，汉人主体于本文明上恢复了南方人政权——自一六四四年以来首见。中华人民共和国是有史以来规模最大的实验：检验一南方农业国家能否同时抵御北方（俄罗斯、草原）、东方（日本）与海洋霸权（盎格鲁秩序）之征服。其武德指数正在攀升。
              </p>
              <p>
                <strong>以色列。</strong>历史上第一个工业化战争速度超越任何北方强权之南方人国家——一九六七年由动员至西奈仅三日；二〇二四年铁穹拦截率高于九成。希伯来物理学家仍居麻省理工、普林斯顿、魏茨曼、特拉维夫。模式未变：科学天才在南方人中崛起，他们以艰难方式学到——唯有思胜其北方人，方能存续。
              </p>
              <p>
                <strong>盎格鲁秩序。</strong>本表第七列乃尚未宣判之裁决。盎格鲁-撒克逊若能如卷起不列颠世纪般卷起美国世纪——以传递接力棒之姿、而非掉棒之姿——则矩阵将以一独特之文明对收尾：一北方人主动结束自己之主导。若不能，则第十三列将由其继承者书写。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ READING ============ */}
      <section className="block" id="reading">
        <div className="container-narrow">
          <div className="section-head">
            <h2>
              <span className="en-only">Further Reading</span>
              <span className="zh-only">深读书目</span>
              <span className="zh en-only">深读书目</span>
            </h2>
            <span className="eyebrow">§ 09 · Library</span>
          </div>

          <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.8, color: "var(--paper-2)" }}>
            {[
              { a: "Owen Lattimore", t: "Inner Asian Frontiers of China", y: "1940", n: "The grandfather of the steppe-vs-sown thesis." },
              { a: "Joseph Fletcher", t: "The Mongols: Ecological and Social Perspectives", y: "1986", n: "How the steppe ecology produced a particular kind of warrior." },
              { a: "Pamela Crossley", t: "A Translucent Mirror: History and Identity in Qing Imperial Ideology", y: "1999", n: "How the Manchus thought about ruling Han China." },
              { a: "Halil İnalcık", t: "The Ottoman Empire: The Classical Age 1300–1600", y: "1973", n: "The Turkic conquest of the Roman, Arab, Greek, and Egyptian Souths." },
              { a: "John F. Richards", t: "The Mughal Empire", y: "1993", n: "Cambridge volume on the Turko-Mongol-Persianate conquest of India." },
              { a: "Niall Ferguson", t: "Empire: The Rise and Demise of the British World Order", y: "2003", n: "The seventh column from the inside." },
              { a: "George Marx", t: "The Martians of Science: Five Physicists Who Changed the Twentieth Century", y: "2001", n: "Wigner, von Kármán, Szilárd, von Neumann, Teller." },
              { a: "Walter Russell Mead", t: "God and Gold: Britain, America, and the Making of the Modern World", y: "2007", n: "Why the Anglo-Saxons declined to install themselves as Caliph." },
              { a: "Yuval Levin", t: "The Great Debate", y: "2014", n: "On the conservative-liberal split inside the Anglo order." },
              { a: "Saul Friedländer", t: "Nazi Germany and the Jews", y: "1997/2007", n: "The pogrom that drove the Hungarian Martians to America." },
            ].map(b => (
              <div key={b.t} style={{ padding: "18px 0", borderBottom: "1px dashed var(--line)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--bronze)", letterSpacing: "0.14em", marginBottom: 4 }}>
                  {b.y.toUpperCase()}
                </div>
                <strong style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--paper)", fontSize: 19 }}>{b.t}</strong>
                <span style={{ color: "var(--steel-2)", marginLeft: 12 }}>— {b.a}</span>
                <div style={{ fontSize: 15, color: "var(--steel-2)", marginTop: 6 }}>{b.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="container">
          <div className="row">
            <div>
              <strong style={{ color: "var(--bronze)" }}>NORTH · RULES · SOUTH</strong>
              <span style={{ marginLeft: 16 }}>北 · 治 · 南</span>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              <a href="https://psyverse.fun">PSYVERSE</a>
              <a href="https://psyverse.fun/atlas.html">ATLAS</a>
              <a href="https://github.com/gewenbo888/north-rules-south">GITHUB</a>
            </div>
          </div>
          <div className="credit">
            <span className="en-only">
              A reading of a single twelve-cell table, expanded. Part of the Psyverse — a constellation of single-question sites by Gewenbo.
            </span>
            <span className="zh-only">
              此站乃对一张十二格表之展读。属 Psyverse——歌闻博之单问站系列——之一。
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
