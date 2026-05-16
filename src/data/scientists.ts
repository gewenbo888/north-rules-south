// The five "fathers" named in the table's second footnote — the Jewish
// scientific lineage that emerged from a Southerner people who endured
// four centuries of Ottoman rule and a century of European pogroms.

export type Scientist = {
  name: { en: string; zh: string };
  field: { en: string; zh: string };
  born: string;
  birthplace: string;
  arc: { en: string; zh: string };
};

export const FOUNDERS: Scientist[] = [
  {
    name: { en: "Albert Einstein", zh: "爱因斯坦" },
    field: { en: "Father of Relativity", zh: "相对论之父" },
    born: "1879, Ulm, Germany",
    birthplace: "Ulm",
    arc: {
      en: "Special relativity (1905) and general relativity (1915) replaced Newton's clockwork universe with curved spacetime. Fled the Reich in 1933, signed the Einstein–Szilárd letter to Roosevelt, and lived out his life in Princeton — the public face of twentieth-century physics.",
      zh: "一九〇五年的狭义相对论与一九一五年的广义相对论以弯曲时空取代了牛顿的钟表宇宙。一九三三年逃离第三帝国，与西拉德联名致信罗斯福，晚年定居普林斯顿——二十世纪物理学的公共面孔。",
    },
  },
  {
    name: { en: "John von Neumann", zh: "冯·诺依曼" },
    field: { en: "Father of the Computer", zh: "计算机之父" },
    born: "1903, Budapest, Austria-Hungary",
    birthplace: "Budapest",
    arc: {
      en: "The von Neumann architecture — stored program, fetch-decode-execute — underwrites every digital computer ever shipped. He also founded game theory, contributed to the Manhattan Project, and sketched the cellular automata that anticipated artificial life.",
      zh: "「冯·诺依曼架构」——存储程序、取指-译码-执行——构成迄今每一台数字计算机的根基。他另开创博弈论，参与曼哈顿计划，并以元胞自动机预示了人工生命。",
    },
  },
  {
    name: { en: "Theodore von Kármán", zh: "冯·卡门" },
    field: { en: "Father of Modern Aerodynamics", zh: "空气动力学之父" },
    born: "1881, Budapest, Austria-Hungary",
    birthplace: "Budapest",
    arc: {
      en: "Von Kármán's equations describe boundary-layer flow, supersonic shock, and the vortex street behind every flag, smokestack, and bridge. Founded Caltech's Guggenheim Aeronautical Laboratory and JPL, midwifed the American jet age, and named the line at which the atmosphere ends and space begins.",
      zh: "冯·卡门方程描述边界层流动、超音速激波，以及旗帜、烟囱、桥梁尾后的涡街。他创建加州理工的古根海姆航空实验室与JPL，催生美国喷气时代，并以己名命名大气与外空的分界线。",
    },
  },
  {
    name: { en: "J. Robert Oppenheimer", zh: "奥本海默" },
    field: { en: "Father of the Atomic Bomb", zh: "原子弹之父" },
    born: "1904, New York City",
    birthplace: "New York",
    arc: {
      en: "Scientific director at Los Alamos, 1943–1945. Quoted the Bhagavad-Gītā after Trinity: 'Now I am become Death, the destroyer of worlds.' Stripped of his security clearance in 1954 for opposing the hydrogen bomb — the moral cost of fission preserved in American conscience.",
      zh: "一九四三至四五年任洛斯阿拉莫斯科学主任。三位一体试爆后引《薄伽梵歌》曰：「我成了死神，世界的毁灭者。」一九五四年因反对氢弹被吊销安全许可——核裂变的道德代价由此留存于美国良知。",
    },
  },
  {
    name: { en: "Edward Teller", zh: "爱德华·泰勒" },
    field: { en: "Father of the Hydrogen Bomb", zh: "氢弹之父" },
    born: "1908, Budapest, Austria-Hungary",
    birthplace: "Budapest",
    arc: {
      en: "Pushed past Oppenheimer's reservations to build the Teller-Ulam thermonuclear weapon, tested at Ivy Mike in 1952 at 10.4 megatons — five hundred times Hiroshima. Co-founded Lawrence Livermore, fathered the Strategic Defense Initiative, and lived to see the Cold War end without a thermonuclear exchange.",
      zh: "顶过奥本海默的反对意见，建成泰勒-乌拉姆构型氢弹。一九五二年「常青藤·麦克」试爆当量一千零四十万吨，相当于五百颗广岛弹。他与人共建劳伦斯利弗莫尔实验室，催生战略防御倡议，亲见冷战结束而未发生热核交火。",
    },
  },
];

// The "Hungarian phenomenon": four of the five founders were born within
// a hundred miles of Budapest between 1880 and 1910. Add Wigner, Szilárd,
// Erdős — and you have, by population, the densest concentration of
// twentieth-century scientific genius in recorded history.
export const HUNGARIAN_CLUSTER = [
  { name: "Theodore von Kármán", year: 1881 },
  { name: "Leó Szilárd", year: 1898 },
  { name: "Eugene Wigner", year: 1902 },
  { name: "John von Neumann", year: 1903 },
  { name: "Edward Teller", year: 1908 },
  { name: "Paul Erdős", year: 1913 },
];
