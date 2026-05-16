// The twelve column-pairs from the original matrix.
// Each column: a Northern conqueror, a Southern civilization, and the regime
// that historically realized "North ruling South."

export type Pair = {
  id: string;
  north: { zh: string; en: string };
  south: { zh: string; en: string };
  regime: { zh: string; en: string };
  era: string;
  region: string;
  // Lat/lon used for the world map (centroid of the *Southern* civilization).
  lat: number;
  lon: number;
  // Approximate population ruled at the peak of the conquest regime.
  ruledMillions: number;
  // Duration of the conquest regime in years (rounded).
  durationYears: number;
  // Brief English narrative.
  story: string;
  // Brief Chinese narrative.
  storyZh: string;
};

export const PAIRS: Pair[] = [
  {
    id: "manchu-china",
    north: { zh: "通古斯", en: "Tungusic" },
    south: { zh: "中国", en: "China" },
    regime: { zh: "满清", en: "Manchu Qing" },
    era: "1644–1912",
    region: "East Asia",
    lat: 35.0, lon: 105.0,
    ruledMillions: 432,
    durationYears: 268,
    story: "Forest-people of the Amur basin fielded an eight-banner cavalry that walked into Beijing in 1644 and stayed for 268 years, ruling the most populous agrarian state on Earth as a Manchu aristocracy over a Han majority. The Qing doubled China's territory and produced the demographic explosion that defines modern China.",
    storyZh: "黑龙江流域的森林狩猎民族以八旗骑兵于一六四四年入主北京，以满洲贵族统治汉人主体，历时二百六十八年。大清的版图扩张与人口爆炸塑造了今日中国的边界与族群结构。",
  },
  {
    id: "mongol-india",
    north: { zh: "蒙古", en: "Mongol" },
    south: { zh: "印度", en: "India" },
    regime: { zh: "莫卧儿", en: "Mughal" },
    era: "1526–1857",
    region: "South Asia",
    lat: 22.0, lon: 79.0,
    ruledMillions: 175,
    durationYears: 331,
    story: "Babur, a Timurid descended from both Tamerlane and Genghis Khan, broke through the Khyber and founded a Turko-Mongol Persianate dynasty over the Indian subcontinent. At its zenith under Aurangzeb the Mughals ruled 158 million people across a quarter of global GDP.",
    storyZh: "巴布尔——帖木儿与成吉思汗的双重后裔——越过开伯尔山口，建立起统治印度次大陆的突厥-蒙古-波斯化王朝。奥朗则布时期，莫卧儿治下一亿五千八百万人口，曾占全球GDP的四分之一。",
  },
  {
    id: "turkic-persia",
    north: { zh: "突厥", en: "Turkic" },
    south: { zh: "波斯", en: "Persia" },
    regime: { zh: "卡扎尔王朝", en: "Qajar" },
    era: "1789–1925",
    region: "Iranian Plateau",
    lat: 32.0, lon: 53.0,
    ruledMillions: 10,
    durationYears: 136,
    story: "The Qajars were a Turkic tribal confederation from the Caspian steppe who seized the Persian throne and reigned until Reza Shah's coup. Persian language and bureaucracy survived; the throne wore a Turkic skin — the recurring pattern of every Iranian dynasty from the Seljuks onward.",
    storyZh: "卡扎尔——里海草原的突厥部族联盟——夺取波斯王座，直至礼萨·汗政变为止。波斯语与官僚体制存续，王座却披上突厥外衣。这是塞尔柱以降伊朗历代王朝反复重演的模式。",
  },
  {
    id: "ottoman-arabia",
    north: { zh: "突厥", en: "Turkic" },
    south: { zh: "阿拉伯", en: "Arab" },
    regime: { zh: "奥斯曼", en: "Ottoman" },
    era: "1516–1918",
    region: "Hejaz · Levant",
    lat: 24.5, lon: 39.6,
    ruledMillions: 14,
    durationYears: 402,
    story: "Selim the Grim took Cairo in 1517 and the Sultan claimed the title of Caliph. For four centuries the Holy Cities of Mecca and Medina, the Levant, and Iraq were ruled from Istanbul by Turkic sultans who spoke Ottoman, a Turkic language soaked in Arabic and Persian.",
    storyZh: "塞利姆一世于一五一七年攻陷开罗，奥斯曼苏丹由此自称哈里发。麦加、麦地那两圣城与黎凡特、伊拉克在四百年间皆由君士坦丁堡的突厥苏丹统治，行政语言为深受阿拉伯-波斯影响的奥斯曼土耳其语。",
  },
  {
    id: "ottoman-israel",
    north: { zh: "突厥", en: "Turkic" },
    south: { zh: "以色列", en: "Israel" },
    regime: { zh: "奥斯曼", en: "Ottoman" },
    era: "1517–1917",
    region: "Palestine",
    lat: 31.78, lon: 35.22,
    ruledMillions: 0.5,
    durationYears: 400,
    story: "After Selim took the Holy Land, Palestine was a backwater sanjak of the Ottoman Empire for four hundred years — Jerusalem rebuilt by Suleiman the Magnificent in 1538, the Western Wall preserved, the Jewish community of Safed flourishing under Turkic protection. The state of Israel emerges only after British liberation in 1917.",
    storyZh: "塞利姆征服圣地后，巴勒斯坦作为奥斯曼帝国边缘的桑贾克治四百年——耶路撒冷城墙由苏莱曼大帝于一五三八年重建，西墙得以保存，萨费德的犹太社群在突厥庇护下繁荣。以色列国直至一九一七年英国解放后方告复兴。",
  },
  {
    id: "ottoman-iraq",
    north: { zh: "突厥", en: "Turkic" },
    south: { zh: "伊拉克", en: "Iraq" },
    regime: { zh: "奥斯曼", en: "Ottoman" },
    era: "1534–1917",
    region: "Mesopotamia",
    lat: 33.3, lon: 44.4,
    ruledMillions: 3,
    durationYears: 383,
    story: "Suleiman captured Baghdad in 1534. Mesopotamia — the cradle of Sumer, Akkad, Babylon — was thereafter administered by Turkish pashas as the three vilayets of Mosul, Baghdad, and Basra. The British carved modern Iraq out of those provinces in 1920.",
    storyZh: "苏莱曼大帝于一五三四年攻克巴格达。两河流域——苏美尔、阿卡德、巴比伦的摇篮——此后由突厥帕夏分治为摩苏尔、巴格达、巴士拉三省。现代伊拉克的疆界由英国于一九二〇年自此三省划出。",
  },
  {
    id: "ottoman-egypt",
    north: { zh: "突厥", en: "Turkic" },
    south: { zh: "埃及", en: "Egypt" },
    regime: { zh: "奥斯曼", en: "Ottoman" },
    era: "1517–1914",
    region: "Nile Valley",
    lat: 26.8, lon: 30.8,
    ruledMillions: 9,
    durationYears: 397,
    story: "Selim's defeat of the Mamluks ended Cairo's last native Islamic dynasty. Egypt was ruled for four centuries by Ottoman pashas, then by the Albanian-Turkic line of Muhammad Ali, until Britain made it a protectorate in 1914. The land of Khufu spent the early modern era under Turkic suzerainty.",
    storyZh: "塞利姆击败马穆鲁克，终结了开罗最后的本土伊斯兰王朝。埃及随后由奥斯曼帕夏统治四百年，再由阿尔巴尼亚-突厥裔的穆罕默德·阿里家族执掌，直至一九一四年沦为英国保护国。胡夫之地于近代早期一直处于突厥宗主之下。",
  },
  {
    id: "ottoman-greece",
    north: { zh: "突厥", en: "Turkic" },
    south: { zh: "希腊", en: "Greece" },
    regime: { zh: "奥斯曼", en: "Ottoman" },
    era: "1453–1832",
    region: "Aegean · Balkans",
    lat: 39.07, lon: 22.5,
    ruledMillions: 3,
    durationYears: 379,
    story: "The fall of Constantinople in 1453 ended the Eastern Roman Empire. Greek-speaking lands — Athens, Thessaloniki, Crete, Cyprus, the Peloponnese — endured nearly four centuries of 'Tourkokratia.' The Greek War of Independence, backed by British, French, and Russian fleets, broke the spell at Navarino in 1827.",
    storyZh: "一四五三年君士坦丁堡陷落，东罗马帝国终结。希腊语世界——雅典、塞萨洛尼基、克里特、塞浦路斯、伯罗奔尼撒——在近四百年的「土耳其统治」下苟存。一八二七年纳瓦里诺海战，英法俄三国舰队助希腊独立革命破局。",
  },
  {
    id: "germanic-rome",
    north: { zh: "日耳曼", en: "Germanic" },
    south: { zh: "罗马", en: "Rome" },
    regime: { zh: "神罗", en: "Holy Roman" },
    era: "800–1806",
    region: "Western Europe",
    lat: 50.0, lon: 10.0,
    ruledMillions: 26,
    durationYears: 1006,
    story: "When the Western Roman Empire collapsed under Germanic migrations, the Frankish king Charlemagne was crowned emperor by the Pope in 800. The Holy Roman Empire, a Germanic confederation claiming Roman legitimacy, persisted for a millennium until Napoleon dissolved it in 1806 — Voltaire's 'neither holy, nor Roman, nor an empire.'",
    storyZh: "西罗马帝国在日耳曼迁徙浪潮下崩溃后，法兰克王查理曼于公元八〇〇年由教皇加冕为帝。神圣罗马帝国——一个援引罗马法统的日耳曼邦联——延续千年，直至一八〇六年为拿破仑废除。伏尔泰讥之曰「既不神圣，亦非罗马，更非帝国」。",
  },
  {
    id: "japan-austronesian",
    north: { zh: "日本", en: "Japan" },
    south: { zh: "其他南岛", en: "Austronesian world" },
    regime: { zh: "日本帝国", en: "Japanese Empire" },
    era: "1895–1945",
    region: "Pacific Rim",
    lat: 23.7, lon: 121.0,
    ruledMillions: 80,
    durationYears: 50,
    story: "From the seizure of Taiwan in 1895 to the surrender at Tokyo Bay in 1945, the Empire of Japan ruled Korea, Taiwan, Manchuria, the Philippines, Indonesia, Malaya, Singapore, Burma, and the Pacific Islands — a vast Austronesian and southern Asian sphere. Half a century of co-prosperity rhetoric ended with American liberation.",
    storyZh: "自一八九五年攫取台湾，至一九四五年东京湾投降，日本帝国先后统治朝鲜、台湾、满洲、菲律宾、印尼、马来亚、新加坡、缅甸与太平洋诸岛——一个广袤的南岛与南亚势力范围。半个世纪的「共荣」言说终结于美国解放。",
  },
  {
    id: "anglo-old-world",
    north: { zh: "盎格鲁撒克逊", en: "Anglo-Saxon" },
    south: { zh: "旧大陆", en: "Old World" },
    regime: { zh: "解放者", en: "The Liberators" },
    era: "1815–present",
    region: "Global",
    lat: 51.5, lon: -0.13,
    ruledMillions: 2500,
    durationYears: 210,
    story: "The Anglo-Saxon order — Britain in the long nineteenth century, the United States in the twentieth — is unique in this matrix. It deposed Ottoman Caliph, Mughal Padshah, Qing Emperor, Japanese Tennō, and Holy Roman heir Hapsburg, then declined to install itself as their successor. Pax Britannica and Pax Americana ruled by sea-lane, treaty, and trade — and unwound the great northern empires from above.",
    storyZh: "盎格鲁-撒克逊秩序——漫长十九世纪的不列颠、二十世纪的美利坚——在此矩阵中独一无二。它先后废黜奥斯曼哈里发、莫卧儿帕迪沙、清帝、日本天皇、神罗后裔哈布斯堡，而拒绝以继承者自居。不列颠治世与美国治世以海权、条约、贸易立国，由上而下解构了北方诸帝国。",
  },
];

// Aggregate metrics.
export const TOTAL_RULED = PAIRS.reduce((s, p) => s + p.ruledMillions, 0);
export const LONGEST = PAIRS.reduce((a, b) => (a.durationYears > b.durationYears ? a : b));
export const SHORTEST = PAIRS.reduce((a, b) => (a.durationYears < b.durationYears ? a : b));
