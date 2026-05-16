const EVENTS = [
  {
    year: "800",
    title: { en: "Charlemagne crowned", zh: "查理曼加冕" },
    body: {
      en: "Pope Leo III crowns the Frankish king Imperator Romanorum on Christmas Day, transferring Roman legitimacy to a Germanic king. The Holy Roman Empire — neither holy, nor Roman, nor an empire — begins a thousand-year run.",
      zh: "圣诞日，教皇利奥三世为法兰克王查理加冕为「罗马人皇帝」，将罗马法统移交给一位日耳曼君王。神圣罗马帝国——既不神圣，亦非罗马，更非帝国——由此开启千年统绪。",
    },
  },
  {
    year: "1206",
    title: { en: "Temüjin proclaimed Genghis Khan", zh: "铁木真为成吉思汗" },
    body: {
      en: "The Onon River kurultai unifies the steppe under one banner. Within sixty years the Mongols control Persia, China, Russia, and the Caucasus — the largest contiguous empire ever assembled.",
      zh: "斡难河大忽里勒台将草原诸部归一旗下。六十年内，蒙古版图覆盖波斯、中国、俄罗斯与高加索——史上最大连片帝国就此成形。",
    },
  },
  {
    year: "1453",
    title: { en: "Fall of Constantinople", zh: "君士坦丁堡陷落" },
    body: {
      en: "Mehmed II's cannons breach the Theodosian Walls. The Eastern Roman Empire ends. Greek-speaking Christendom enters four centuries of Turkic rule; the Hagia Sophia becomes a mosque.",
      zh: "穆罕默德二世以巨炮轰破狄奥多西城墙。东罗马帝国终结。希腊语基督教世界自此入突厥治四百年；圣索菲亚改为清真寺。",
    },
  },
  {
    year: "1517",
    title: { en: "Selim takes Cairo", zh: "塞利姆克开罗" },
    body: {
      en: "The Ottomans absorb the Mamluk Sultanate. The Sultan declares himself Caliph. Mecca, Medina, Jerusalem, Damascus, Baghdad, and Cairo are all administered from Istanbul for the next four hundred years.",
      zh: "奥斯曼吞并马穆鲁克苏丹国。苏丹自称哈里发。麦加、麦地那、耶路撒冷、大马士革、巴格达、开罗于此后四百年皆由君士坦丁堡治理。",
    },
  },
  {
    year: "1526",
    title: { en: "Babur wins Panipat", zh: "巴布尔胜帕尼帕特" },
    body: {
      en: "A Timurid prince with 12,000 horse defeats the 100,000-strong Sultanate of Delhi using field artillery. The Mughal Empire — Turko-Mongol, Persianate, ruling an Indo-Aryan and Dravidian sea — begins.",
      zh: "一位帖木儿王子率一万二千骑，凭野战炮兵败十万德里苏丹军。莫卧儿——突厥-蒙古血统、波斯化、统治印欧与达罗毗荼诸民——由此立国。",
    },
  },
  {
    year: "1644",
    title: { en: "Manchus enter Beijing", zh: "满清入北京" },
    body: {
      en: "Dorgon, regent for the boy-emperor Shunzhi, accepts the surrender of the last Ming general at Shanhaiguan and rides into Beijing. The Tungusic forest people will rule Han China for 268 years.",
      zh: "多尔衮以幼帝顺治之摄政，受最后一位明将于山海关之降，入主北京。通古斯森林狩猎民族将治汉地二百六十八年。",
    },
  },
  {
    year: "1815",
    title: { en: "Waterloo · Pax Britannica begins", zh: "滑铁卢 · 不列颠治世起" },
    body: {
      en: "Wellington defeats Napoleon. The Royal Navy is unchallenged at sea. London becomes the world's clearing house. For the next century the British Empire will reshape every continent and depose, in turn, every empire on this site's list.",
      zh: "威灵顿败拿破仑。皇家海军独霸全球海域。伦敦成为世界结算中心。此后一个世纪，大英帝国将重塑各大洲，并陆续废黜本表上的每一个帝国。",
    },
  },
  {
    year: "1905",
    title: { en: "Annus Mirabilis · Einstein", zh: "奇迹年 · 爱因斯坦" },
    body: {
      en: "A 26-year-old Swiss patent clerk publishes four papers — on the photoelectric effect, Brownian motion, special relativity, and E=mc². The Jewish century in physics has begun.",
      zh: "二十六岁的瑞士专利局职员一年发表四篇论文：光电效应、布朗运动、狭义相对论、质能等价。物理学的犹太世纪由此开启。",
    },
  },
  {
    year: "1917",
    title: { en: "Allenby enters Jerusalem", zh: "艾伦比入耶路撒冷" },
    body: {
      en: "British General Edmund Allenby walks through Jaffa Gate on foot, out of respect for the Holy City. Four centuries of Ottoman rule end. The Balfour Declaration, six weeks earlier, promises a Jewish national home.",
      zh: "英将艾伦比为示对圣城之敬，徒步穿过雅法门。奥斯曼四百年治世告终。其前六周，《贝尔福宣言》许犹太人以民族家园。",
    },
  },
  {
    year: "1945",
    title: { en: "Surrender at Tokyo Bay · Pax Americana begins", zh: "东京湾受降 · 美国治世起" },
    body: {
      en: "USS Missouri receives Japanese surrender. American liberation reaches Korea, Taiwan, the Philippines, Indonesia, Malaya, Burma — the entire Austronesian sphere. The last conquest empire of the table collapses.",
      zh: "密苏里号舰上接受日本投降。美国之解放抵朝鲜、台湾、菲律宾、印尼、马来亚、缅甸——整个南岛圈。本表最后一个征服帝国告陨。",
    },
  },
  {
    year: "1948",
    title: { en: "Israel declared", zh: "以色列建国" },
    body: {
      en: "Ben-Gurion reads the Declaration of Independence in Tel Aviv. A Southerner people that survived Ottoman governorship and European pogroms re-arms itself within fourteen hours of statehood and wins the first of six wars.",
      zh: "本-古里安于特拉维夫宣读独立宣言。一个挺过奥斯曼统治与欧洲屠犹的南方人民族，在建国后十四小时内武装自己，并赢得六场战争中的第一场。",
    },
  },
  {
    year: "1991",
    title: { en: "Soviet Union dissolves", zh: "苏联解体" },
    body: {
      en: "The last great northern land empire dissolves without a shot fired by NATO. The Anglo-Saxon strategy of unbuilding rival empires — without inheriting them — completes its long century with the Cold War's end.",
      zh: "最后一个北方陆权大帝国未经北约一枪而瓦解。盎格鲁-撒克逊「解构他帝国而拒为继承者」的战略，借冷战之终，完成其漫长世纪。",
    },
  },
];

export default function Timeline() {
  return (
    <div className="timeline">
      {EVENTS.map(e => (
        <div className="tl-item" key={e.year + e.title.en}>
          <div className="tl-year">{e.year}</div>
          <div className="tl-title">
            <span className="en-only">{e.title.en}</span>
            <span className="zh-only">{e.title.zh}</span>
            <span className="zh en-only">　{e.title.zh}</span>
          </div>
          <div className="tl-body">
            <span className="en-only">{e.body.en}</span>
            <span className="zh-only">{e.body.zh}</span>
            <span className="zh-line en-only">{e.body.zh}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
