// ===================== 常量与数据生成 =====================
const STORAGE_KEY = 'kaoyanAppStateV2';

const ENGLISH_YEARS = (() => {
  const years = [];
  for (let y = 2026; y >= 1998; y--) years.push(y);
  return years;
})();

const SEGMENTS = [
  { key: 'Text1', name: 'Text1', label: 'T1', day1: 'Text 1 精读+真题', day2: 'Text 1 复习' },
  { key: 'Text2', name: 'Text2', label: 'T2', day1: 'Text 2 精读+真题', day2: 'Text 2 复习' },
  { key: 'Text3', name: 'Text3', label: 'T3', day1: 'Text 3 精读+真题', day2: 'Text 3 复习' },
  { key: 'Text4', name: 'Text4', label: 'T4', day1: 'Text 4 精读+真题', day2: 'Text 4 复习' },
  { key: 'Translation', name: '翻译', label: '译', day1: '翻译真题+拆解', day2: '翻译复习' },
  { key: 'Cloze', name: '完形', label: '完', day1: '完形真题', day2: '完形复习' },
  { key: 'NewType', name: '新题型', label: '新', day1: '新题型真题', day2: '新题型总复习' }
];

const WORD_POOL = [
  { word: 'ambiguous', phonetic: '/æmˈbɪɡjuəs/', def: 'adj. 模棱两可的，含糊不清的', example: 'The meaning of this sentence remains ambiguous.' },
  { word: 'substantiate', phonetic: '/səbˈstænʃieɪt/', def: 'v. 证实，支持（论点等）', example: 'Further evidence is needed to substantiate the claim.' },
  { word: 'mitigate', phonetic: '/ˈmɪtɪɡeɪt/', def: 'v. 减轻，缓和', example: 'Measures were taken to mitigate the environmental impact.' },
  { word: 'paradox', phonetic: '/ˈpærədɒks/', def: 'n. 悖论，自相矛盾的人或事', example: 'It is a paradox that standing is more tiring than walking.' },
  { word: 'pragmatic', phonetic: '/præɡˈmætɪk/', def: 'adj. 务实的，实事求是的', example: 'We need a pragmatic approach to solve this problem.' },
  { word: 'coherent', phonetic: '/kəʊˈhɪərənt/', def: 'adj. 连贯的，有条理的', example: 'He presented a coherent argument for the reform.' },
  { word: 'scrutinize', phonetic: '/ˈskruːtənaɪz/', def: 'v. 仔细检查，详审', example: 'The committee will scrutinize the budget proposal.' },
  { word: 'dilemma', phonetic: '/dɪˈlemə/', def: 'n. 进退两难的境地，困境', example: 'She faces the dilemma of choosing between career and family.' },
  { word: 'prevalent', phonetic: '/ˈprevələnt/', def: 'adj. 流行的，普遍的', example: 'This disease is more prevalent in tropical regions.' },
  { word: 'rigid', phonetic: '/ˈrɪdʒɪd/', def: 'adj. 严格的，僵硬的', example: 'The school has rigid rules about uniforms.' },
  { word: 'undermine', phonetic: '/ˌʌndəˈmaɪn/', def: 'v. 逐渐削弱，暗中破坏', example: 'Constant criticism can undermine a child’s confidence.' },
  { word: 'advocate', phonetic: '/ˈædvəkət/', def: 'v./n. 提倡；倡导者', example: 'She advocates for equal opportunities in education.' },
  { word: 'elaborate', phonetic: '/ɪˈlæbərət/', def: 'adj./v. 复杂的；详细阐述', example: 'Could you elaborate on your proposal a little more?' },
  { word: 'feasible', phonetic: '/ˈfiːzəbl/', def: 'adj. 可行的，行得通的', example: 'It is not feasible to finish the project in one week.' },
  { word: 'obsolete', phonetic: '/ˈɒbsəliːt/', def: 'adj. 过时的，淘汰的', example: 'This technology has become obsolete within a decade.' },
  { word: 'skeptical', phonetic: '/ˈskeptɪkl/', def: 'adj. 怀疑的', example: 'Experts remain skeptical about the new policy.' },
  { word: 'compromise', phonetic: '/ˈkɒmprəmaɪz/', def: 'n./v. 妥协，折中', example: 'Both sides finally reached a compromise.' },
  { word: 'incentive', phonetic: '/ɪnˈsentɪv/', def: 'n. 激励，动机', example: 'Tax incentives encourage investment in renewable energy.' },
  { word: 'hinder', phonetic: '/ˈhɪndə(r)/', def: 'v. 阻碍，妨碍', example: 'Bad weather hindered the rescue efforts.' },
  { word: 'notion', phonetic: '/ˈnəʊʃn/', def: 'n. 概念，看法', example: 'The notion of free education is widely supported.' }
];

const PHRASE_POOL = [
  { phrase: 'take into account', def: '考虑到，顾及', example: 'We should take into account the needs of all students.' },
  { phrase: 'in spite of', def: '尽管，不管', example: 'In spite of the rain, they went out for a walk.' },
  { phrase: 'contribute to', def: '有助于；促成', example: 'Regular exercise contributes to better health.' },
  { phrase: 'be attributed to', def: '归因于', example: 'His success can be attributed to hard work.' },
  { phrase: 'in line with', def: '与……一致', example: 'The plan is in line with our original goals.' },
  { phrase: 'by means of', def: '通过，借助于', example: 'They solved the problem by means of a new algorithm.' },
  { phrase: 'with respect to', def: '关于，至于', example: 'With respect to your request, we need more time.' },
  { phrase: 'be prone to', def: '易于……的', example: 'Older people are prone to falls in winter.' },
  { phrase: 'stem from', def: '起源于，由……造成', example: 'The conflict stems from a misunderstanding.' },
  { phrase: 'in favor of', def: '支持，赞成；有利于', example: 'The judge ruled in favor of the plaintiff.' },
  { phrase: 'bring about', def: '导致，引起', example: 'The new policy brought about significant changes.' },
  { phrase: 'keep pace with', def: '与……并驾齐驱', example: 'We must keep pace with technological advances.' }
];

const SENTENCE_POOL = [
  { en: 'What is being called artificial general intelligence, machines that would imitate the way humans think, continues to evade scientists.', zh: '所谓通用人工智能，即模仿人类思维方式的机器，至今仍在困扰科学家。' },
  { en: 'The researchers argue that once we got wise to the environmental damage caused by plastic, we should have acted more decisively.', zh: '研究人员认为，一旦意识到塑料造成的环境破坏，我们就应该更果断地采取行动。' },
  { en: 'It is only by addressing the underlying inequalities that we can hope to build a more sustainable future.', zh: '只有解决潜在的不平等问题，我们才有希望建设一个更可持续的未来。' },
  { en: 'The challenge, then, is not merely to collect more data, but to make sense of the data we already have.', zh: '因此，挑战不仅仅在于收集更多数据，而在于理解我们已经拥有的数据。' },
  { en: 'Critics have long maintained that the test privileges speed over depth, leaving little room for careful reasoning.', zh: '批评者长期以来一直认为，这种测试偏重速度而非深度，几乎没有留下仔细推理的空间。' },
  { en: 'What seems paradoxical at first glance becomes perfectly logical once the historical context is taken into account.', zh: '乍一看似乎矛盾的东西，一旦考虑到历史背景就变得完全合乎逻辑。' },
  { en: 'The findings suggest that early intervention can mitigate the long-term effects of adverse childhood experiences.', zh: '研究结果表明，早期干预可以减轻不良童年经历的长期影响。' },
  { en: 'Rather than viewing failure as an endpoint, successful learners treat it as feedback.', zh: '成功的学习者不会把失败视为终点，而是将其视为反馈。' }
];

const PASSAGE_TEMPLATES = [
  {
    en: 'In recent years, the debate over the role of technology in education has intensified. Proponents argue that digital tools can personalize learning and bridge gaps between students. Critics, however, warn that excessive screen time may undermine deep thinking and social skills. What is needed, most observers agree, is a pragmatic balance that leverages technology without sacrificing human connection.',
    zh: '近年来，关于技术在教育中作用的争论日益激烈。支持者认为数字工具可以实现个性化学习并缩小学生之间的差距。然而，批评者警告说，过多的屏幕时间可能会削弱深度思考和社交能力。大多数观察家认为，需要的是一种务实的平衡：利用技术而不牺牲人际联系。'
  },
  {
    en: 'Urban planners have long struggled with the tension between economic growth and environmental protection. A new generation of designers advocates for compact, mixed-use neighborhoods that reduce car dependency. Yet such plans often face rigid regulations and local opposition. The challenge is to create spaces that are both economically feasible and environmentally sustainable.',
    zh: '城市规划者长期以来一直在经济增长与环境保护之间挣扎。新一代设计师提倡紧凑、多功能的社区，以减少对汽车的依赖。然而，此类计划往往面临严格的法规和当地反对。挑战在于创造既经济可行又环境可持续的空间。'
  },
  {
    en: 'The concept of work-life balance has evolved significantly over the past decades. While earlier generations often prioritized job security, many young professionals today seek flexibility and purpose. Employers who fail to adapt to these changing expectations may find it increasingly difficult to attract and retain talent in a competitive market.',
    zh: '在过去几十年里，工作与生活的平衡概念发生了显著变化。虽然老一辈人往往优先考虑工作保障，但许多年轻专业人士如今寻求灵活性和意义。在竞争激烈的市场中，未能适应这些不断变化期望的雇主可能会发现吸引和留住人才越来越困难。'
  },
  {
    en: 'Medical researchers are making progress in understanding how lifestyle factors influence long-term health. Regular physical activity, adequate sleep, and a balanced diet have all been shown to reduce the risk of chronic diseases. What remains less clear is how to motivate individuals to maintain these habits over a lifetime.',
    zh: '医学研究人员在了解生活方式因素如何影响长期健康方面正在取得进展。规律的体育锻炼、充足的睡眠和均衡的饮食都被证明可以降低慢性病风险。目前仍不清楚的是如何激励个人终生保持这些习惯。'
  }
];

const MATH_CHAPTERS = [
  {
    id: 'math-0basic',
    title: '零基础通关讲义',
    duration: '1 周',
    difficulty: '低',
    points: [
      { id: 'm0-1', title: '基本逻辑与常用命题', desc: '命题形式、逻辑思路、反证与归纳' },
      { id: 'm0-2', title: '解析式的概念与运算', desc: '多项式、分式、根式与指数对数运算' },
      { id: 'm0-3', title: '方程与不等式', desc: '一元二次、高次、分式、绝对值不等式' },
      { id: 'm0-4', title: '函数的概念、图像与基本初等函数', desc: '定义域、单调性、奇偶性、反函数' },
      { id: 'm0-5', title: '数列及其单调性', desc: '等差等比、递推、单调有界' },
      { id: 'm0-6', title: '坐标系及其变换', desc: '极坐标、参数方程、图像变换' }
    ]
  },
  {
    id: 'math-1',
    title: '第1讲 函数极限与连续',
    duration: '1 周',
    difficulty: '中',
    points: [
      { id: 'm1-1', title: '函数极限的定义与基本性质', desc: 'ε-δ 语言、唯一性、局部有界性' },
      { id: 'm1-2', title: '函数极限的计算方法', desc: '四则运算、等价无穷小、洛必达、泰勒' },
      { id: 'm1-3', title: '函数的连续与间断', desc: '连续定义、间断点分类、闭区间性质' }
    ]
  },
  {
    id: 'math-2',
    title: '第2讲 数列极限',
    duration: '0.5 周',
    difficulty: '中',
    points: [
      { id: 'm2-1', title: '数列极限的定义与性质', desc: 'ε-N 语言、收敛数列性质' },
      { id: 'm2-2', title: '单调有界准则与递推数列', desc: '单调有界、压缩映射思想' }
    ]
  },
  {
    id: 'math-3',
    title: '第3讲 一元函数微分学的概念',
    duration: '0.5 周',
    difficulty: '中',
    points: [
      { id: 'm3-1', title: '导数的概念与几何意义', desc: '导数定义、切线法线、高阶导数定义' },
      { id: 'm3-2', title: '微分与可微、可导、连续的关系', desc: '可微等价可导、三者关系' }
    ]
  },
  {
    id: 'math-4',
    title: '第4讲 一元函数微分学的计算',
    duration: '0.5 周',
    difficulty: '中',
    points: [
      { id: 'm4-1', title: '求导公式与求导法则', desc: '基本公式、四则、复合、隐函数、参数' },
      { id: 'm4-2', title: '高阶导数与特殊函数求导', desc: '莱布尼茨、反函数、分段函数' }
    ]
  },
  {
    id: 'math-5',
    title: '第5讲 一元函数微分学的几何应用',
    duration: '0.5 周',
    difficulty: '中',
    points: [
      { id: 'm5-1', title: '函数的单调性、极值与最值', desc: '一阶导判别、二阶导判别、闭区间最值' },
      { id: 'm5-2', title: '凹凸性、拐点、渐近线与曲率', desc: '二阶导、拐点、三种渐近线' }
    ]
  },
  {
    id: 'math-6',
    title: '第6讲 中值定理与微分等式/不等式',
    duration: '1 周',
    difficulty: '高',
    points: [
      { id: 'm6-1', title: '中值定理', desc: '罗尔、拉格朗日、柯西、泰勒' },
      { id: 'm6-2', title: '微分等式与不等式的证明', desc: '构造辅助函数、单调性、凹凸性' }
    ]
  },
  {
    id: 'math-7',
    title: '第7讲 一元函数微分学的物理与经济应用',
    duration: '0.3 周',
    difficulty: '中',
    points: [
      { id: 'm7-1', title: '变化率与相关变化率、经济学应用', desc: '速率、边际、弹性' }
    ]
  },
  {
    id: 'math-8',
    title: '第8讲 一元函数积分学的概念与性质',
    duration: '0.5 周',
    difficulty: '中',
    points: [
      { id: 'm8-1', title: '不定积分与定积分的概念、性质', desc: '原函数、牛顿-莱布尼茨、比较性质' },
      { id: 'm8-2', title: '变限积分与原函数存在定理', desc: '变限积分求导、可积条件' }
    ]
  },
  {
    id: 'math-9',
    title: '第9讲 一元函数积分学的计算',
    duration: '1 周',
    difficulty: '高',
    points: [
      { id: 'm9-1', title: '不定积分的计算方法', desc: '凑微分、换元、分部、有理函数' },
      { id: 'm9-2', title: '定积分的计算技巧', desc: '区间再现、华里士、对称性' }
    ]
  },
  {
    id: 'math-10',
    title: '第10讲 一元函数积分学的几何应用',
    duration: '0.5 周',
    difficulty: '中',
    points: [
      { id: 'm10-1', title: '平面图形的面积与旋转体体积', desc: '直角坐标、极坐标、圆盘/壳层法' },
      { id: 'm10-2', title: '弧长、旋转曲面面积与物理应用', desc: '弧长公式、形心、转动惯量思路' }
    ]
  },
  {
    id: 'math-11',
    title: '第11讲 积分等式与积分不等式',
    duration: '0.5 周',
    difficulty: '高',
    points: [
      { id: 'm11-1', title: '积分等式', desc: '积分中值、换元、分部' },
      { id: 'm11-2', title: '积分不等式', desc: '单调性、凹凸性、柯西-施瓦茨' }
    ]
  },
  {
    id: 'math-12',
    title: '第12讲 一元函数积分学的物理应用',
    duration: '0.3 周',
    difficulty: '中',
    points: [
      { id: 'm12-1', title: '积分在物理中的应用', desc: '变力做功、水压力、引力、质心' }
    ]
  },
  {
    id: 'math-13',
    title: '第13讲 多元函数微分学',
    duration: '1 周',
    difficulty: '中高',
    points: [
      { id: 'm13-1', title: '多元函数极限、连续、偏导数与全微分', desc: '二重极限、偏导、可微判定' },
      { id: 'm13-2', title: '多元复合函数与隐函数求导', desc: '链式法则、隐函数定理' },
      { id: 'm13-3', title: '多元函数的极值与最值', desc: '无条件、条件极值、拉格朗日乘数' }
    ]
  },
  {
    id: 'math-14',
    title: '第14讲 二重积分',
    duration: '0.7 周',
    difficulty: '中',
    points: [
      { id: 'm14-1', title: '二重积分的概念、性质与对称性', desc: '定义、性质、奇偶对称、轮换对称' },
      { id: 'm14-2', title: '二重积分的坐标计算', desc: '直角坐标、极坐标、换序' },
      { id: 'm14-3', title: '二重积分的应用与综合', desc: '形心、转动惯量思路' }
    ]
  },
  {
    id: 'math-15',
    title: '第15讲 常微分方程',
    duration: '0.7 周',
    difficulty: '中',
    points: [
      { id: 'm15-1', title: '一阶微分方程', desc: '可分离、齐次、线性、伯努利' },
      { id: 'm15-2', title: '高阶线性微分方程', desc: '特征方程、待定系数、叠加原理' },
      { id: 'm15-3', title: '微分方程的应用与可降阶方程', desc: '几何、物理、缺 y/x 型' }
    ]
  },
  {
    id: 'math-16',
    title: '第16讲 无穷级数（数二不要求）',
    duration: '—',
    difficulty: '—',
    points: [
      { id: 'm16-1', title: '无穷级数（数学二不作要求）', desc: '数二不要求' }
    ]
  },
  {
    id: 'math-17',
    title: '第17讲 多元函数积分学预备知识（数二不要求）',
    duration: '—',
    difficulty: '—',
    points: [
      { id: 'm17-1', title: '多元函数积分学预备知识（数学二不作要求）', desc: '数二不要求' }
    ]
  },
  {
    id: 'math-18',
    title: '第18讲 多元函数积分学（数二不要求）',
    duration: '—',
    difficulty: '—',
    points: [
      { id: 'm18-1', title: '多元函数积分学（数学二不作要求）', desc: '数二不要求' }
    ]
  },
  {
    id: 'math-x1',
    title: '线代第1讲 行列式',
    duration: '0.5 周',
    difficulty: '低',
    points: [
      { id: 'x1-1', title: '行列式的定义、性质与展开', desc: '排列逆序、性质、展开定理' },
      { id: 'x1-2', title: '行列式的计算与综合应用', desc: '化三角、范德蒙德、克拉默' }
    ]
  },
  {
    id: 'math-x2',
    title: '线代第2讲 矩阵',
    duration: '0.7 周',
    difficulty: '中',
    points: [
      { id: 'x2-1', title: '矩阵运算、逆矩阵与伴随矩阵', desc: '运算律、逆、伴随、特殊矩阵' },
      { id: 'x2-2', title: '初等变换、矩阵的秩与等价', desc: '初等矩阵、秩、等价标准形' },
      { id: 'x2-3', title: '矩阵方程与分块矩阵', desc: '可逆条件、分块运算' }
    ]
  },
  {
    id: 'math-x3',
    title: '线代第3讲 向量组',
    duration: '0.7 周',
    difficulty: '中高',
    points: [
      { id: 'x3-1', title: '向量组的线性相关与线性表示', desc: '定义、判定、性质' },
      { id: 'x3-2', title: '极大线性无关组与向量组的秩', desc: '极大无关组、秩、矩阵与向量' }
    ]
  },
  {
    id: 'math-x4',
    title: '线代第4讲 线性方程组',
    duration: '0.7 周',
    difficulty: '中高',
    points: [
      { id: 'x4-1', title: '线性方程组的解的判定与求解', desc: '齐次、非齐次、通解结构' },
      { id: 'x4-2', title: '公共解、同解与方程组综合', desc: '公共解、同解、参数讨论' }
    ]
  },
  {
    id: 'math-x5',
    title: '线代第5讲 特征值与特征向量',
    duration: '0.7 周',
    difficulty: '中',
    points: [
      { id: 'x5-1', title: '特征值、特征向量与相似对角化', desc: '特征方程、相似、对角化条件' },
      { id: 'x5-2', title: '实对称矩阵与正交相似对角化', desc: '实对称矩阵性质、正交矩阵' }
    ]
  },
  {
    id: 'math-x6',
    title: '线代第6讲 二次型',
    duration: '0.5 周',
    difficulty: '中',
    points: [
      { id: 'x6-1', title: '二次型的概念与标准化', desc: '矩阵表示、正交/配方法化标准形' },
      { id: 'x6-2', title: '正定二次型与正定矩阵', desc: '正定判定、顺序主子式' }
    ]
  }
];

const MATERIALS_CHAPTERS = [
  {
    id: 'mat-atom',
    title: '工程材料中的原子排列',
    points: [
      { id: 'mat-atom-1', title: '晶体与非晶体', desc: '原子排列特点、各向异性' },
      { id: 'mat-atom-2', title: '晶向与晶面指数', desc: 'Miller 指数、晶面间距' }
    ]
  },
  {
    id: 'mat-phase',
    title: '材料中的相结构',
    points: [
      { id: 'mat-phase-1', title: '固溶体', desc: '置换/间隙固溶体、Hume-Rothery 规则' },
      { id: 'mat-phase-2', title: '金属间化合物', desc: '正常价、电子化合物、间隙相' }
    ]
  },
  {
    id: 'mat-solidify',
    title: '凝固',
    points: [
      { id: 'mat-solidify-1', title: '结晶条件与形核', desc: '过冷度、均匀/非均匀形核' },
      { id: 'mat-solidify-2', title: '晶粒细化', desc: '过冷、变质、振动' }
    ]
  },
  {
    id: 'mat-diagram',
    title: '相图',
    points: [
      { id: 'mat-diagram-1', title: '杠杆规则', desc: '两相区相对量计算' },
      { id: 'mat-diagram-2', title: '铁碳相图', desc: '共晶、共析、组织组成' }
    ]
  },
  {
    id: 'mat-diffusion',
    title: '材料中的扩散',
    points: [
      { id: 'mat-diffusion-1', title: '菲克定律', desc: '第一/第二定律、稳态/非稳态' },
      { id: 'mat-diffusion-2', title: '扩散机制', desc: '空位机制、间隙机制、柯肯达尔效应' }
    ]
  },
  {
    id: 'mat-deform',
    title: '塑性变形',
    points: [
      { id: 'mat-deform-1', title: '滑移与孪生', desc: '滑移系、临界分切应力' },
      { id: 'mat-deform-2', title: '加工硬化', desc: '位错密度、流变应力' }
    ]
  },
  {
    id: 'mat-recrystallize',
    title: '回复与再结晶',
    points: [
      { id: 'mat-recrystallize-1', title: '回复', desc: '低温回复、中温回复、高温回复' },
      { id: 'mat-recrystallize-2', title: '再结晶', desc: '再结晶温度、晶粒长大' }
    ]
  },
  {
    id: 'mat-solidtrans',
    title: '固态相变',
    points: [
      { id: 'mat-solidtrans-1', title: '马氏体相变', desc: '无扩散切变、惯习面' },
      { id: 'mat-solidtrans-2', title: '珠光体转变', desc: '扩散型相变、C 曲线' }
    ]
  },
  {
    id: 'mat-composite',
    title: '复合效应与界面',
    points: [
      { id: 'mat-composite-1', title: '复合材料增强机制', desc: '纤维增强、界面作用' },
      { id: 'mat-composite-2', title: '界面结构与性能', desc: '界面结合、润湿性' }
    ]
  }
];

// ===================== 工具函数 =====================
function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function getCountdownDays() {
  const today = new Date();
  const examDate = new Date('2026-12-26');
  const diff = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

function normalize(s) {
  return String(s).toLowerCase().replace(/[\s\u3000，,\.。、;；!！?？]/g, '');
}

function checkAnswer(userAns, correctAns, acceptable = []) {
  const user = normalize(userAns);
  const correct = normalize(correctAns);
  if (user === correct) return true;
  return acceptable.some(a => user === normalize(a));
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hashIndex(seed, max) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h % max;
}

function pickBySeed(pool, seed, count) {
  const idx = hashIndex(seed, pool.length);
  const out = [];
  for (let i = 0; i < count; i++) out.push(pool[(idx + i) % pool.length]);
  return out;
}

// ===================== 数据生成 =====================
function generateEnglishDay(year, segIndex, dayIndex) {
  const seg = SEGMENTS[segIndex];
  const isReview = dayIndex % 2 === 1;
  const seedBase = `${year}-${seg.key}-${dayIndex}`;
  const source = `英语一 ${year} ${seg.name}`;
  const yearData = (typeof ENGLISH_DATA !== 'undefined' ? ENGLISH_DATA[year] : null) || {};
  const section = yearData[seg.name];

  const vocabPool = (typeof VOCAB_DATA !== 'undefined' ? VOCAB_DATA : WORD_POOL) || WORD_POOL;
  // 优先使用真题原文与红宝书词汇的交集
  const sectionVocab = (section && section.vocab) || { words: [], phrases: [] };
  const fallbackWords = pickBySeed(vocabPool.filter(x => x.word && !x.word.includes(' ')), 'w' + seedBase, 8).map((w, i) => ({ ...w, id: `w-${year}-${seg.key}-${dayIndex}-${i}` }));
  const words = (sectionVocab.words && sectionVocab.words.length)
    ? sectionVocab.words.slice(0, 12).map((w, i) => ({ ...w, id: `w-${year}-${seg.key}-${dayIndex}-${i}` }))
    : fallbackWords;
  const fallbackPhrases = pickBySeed(PHRASE_POOL, 'p' + seedBase, 3).map((p, i) => ({ ...p, id: `p-${year}-${seg.key}-${dayIndex}-${i}` }));
  const phraseDefMap = new Map(PHRASE_POOL.map(p => [p.phrase.toLowerCase(), p.def || p.meaning || '']));
  const phrases = (sectionVocab.phrases && sectionVocab.phrases.length)
    ? sectionVocab.phrases.slice(0, 6).map((p, i) => ({
        phrase: p.phrase,
        def: p.def || p.meaning || phraseDefMap.get(p.phrase.toLowerCase()) || '',
        example: p.example || '',
        id: `p-${year}-${seg.key}-${dayIndex}-${i}`
      }))
    : fallbackPhrases;
  let sentences = pickBySeed(SENTENCE_POOL, 's' + seedBase, 2).map((s, i) => ({ ...s, id: `s-${year}-${seg.key}-${dayIndex}-${i}` }));
  let passage = PASSAGE_TEMPLATES[hashIndex('pass' + seedBase, PASSAGE_TEMPLATES.length)];
  let questions = [];
  let daySource = `示例真题-扇贝考研风格（英语一 ${year} ${seg.name}）`;

  if (!isReview && section) {
    daySource = `${source} 真题`;
    if (seg.key === 'translation') {
      const realSentences = (section.sentences || []).map((s, i) => ({
        en: (typeof s === 'object' && s !== null) ? (s.en || '') : String(s || ''),
        zh: (typeof s === 'object' && s !== null) ? (s.zh || '') : ((section.translations && section.translations[i]) || ''),
        id: `s-${year}-${seg.key}-${dayIndex}-${i}`
      }));
      if (realSentences.length) sentences = realSentences;
    } else if (seg.key === 'cloze') {
      passage = (typeof section.passage === 'object' && section.passage !== null) ? section.passage : { en: section.passage || '', zh: '' };
      // 用完形选项构造填空题
      (section.options || []).forEach((opts, i) => {
        if (opts && opts.length >= 4) {
          questions.push({
            type: 'multiple',
            question: `（${daySource}）第 ${i + 1} 空应选？`,
            options: opts.slice(0, 4),
            answer: 0,
            explanation: '真题完形填空，答案待核对。',
            source: daySource
          });
        }
      });
    } else {
      passage = (typeof section.passage === 'object' && section.passage !== null) ? section.passage : { en: section.passage || '', zh: '' };
      questions = (section.questions || []).map((q, i) => {
        let ans = q.answer || '';
        if (typeof ans === 'string' && /^[A-Da-d]$/.test(ans.trim())) {
          ans = ans.trim().toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
        } else if (typeof ans !== 'number') {
          ans = 0;
        }
        return {
          type: 'multiple',
          question: `（${daySource}）${q.question || ''}`,
          options: (q.options || []).slice(0, 4),
          answer: ans,
          explanation: q.explanation ? q.explanation : `参考答案：${q.answer || '待补充'}`,
          source: daySource
        };
      });
    }
  }

  // 构建当日词汇的形态变体集合，用于原文黄色高亮（如 propelling -> propel）
  const dayWordBases = new Set(words.map(x => (x.word || '').toLowerCase()).filter(Boolean));
  const variantSet = new Set();
  dayWordBases.forEach(base => {
    variantSet.add(base);
    generateMorphVariants(base).forEach(v => variantSet.add(v));
  });

  return {
    year,
    day: dayIndex + 1,
    segment: seg.key,
    segmentName: seg.name,
    title: isReview ? seg.day2 : seg.day1,
    isReview,
    words,
    phrases,
    sentences,
    passage,
    questions,
    source: daySource,
    variantSet
  };
}

function generateMorphVariants(base) {
  const variants = new Set();
  const add = s => { if (s && s.length > 2) variants.add(s); };
  // noun plural / verb 3rd person
  if (base.endsWith('y') && /[bcdfghjklmnpqrstvwxz]/.test(base.slice(-2, -1))) {
    add(base.slice(0, -1) + 'ies'); // study -> studies
    add(base.slice(0, -1) + 'ied'); // carry -> carried
  }
  add(base + 's');
  add(base + 'es');
  // verb -ing / -ed
  if (/[aeiou][bcdfghjklmnpqrstvwxz]$/.test(base) && base.length > 2) {
    add(base + base.slice(-1) + 'ing'); // run -> running
    add(base + base.slice(-1) + 'ed'); // stop -> stopped
  } else {
    add(base + 'ing');
    add(base + 'ed');
  }
  if (base.endsWith('e')) {
    add(base.slice(0, -1) + 'ing'); // hope -> hoping
    add(base.slice(0, -1) + 'ed'); // hope -> hoped
  }
  // derivational suffixes (conservative)
  ['tion', 'sion', 'ment', 'ness', 'able', 'ible', 'ful', 'less', 'ous', 'ious', 'ive', 'ity', 'ty', 'en', 'ance', 'ence', 'ly'].forEach(suf => add(base + suf));
  return Array.from(variants);
}

function generateEnglishYear(year) {
  const days = [];
  for (let i = 0; i < 14; i++) {
    days.push(generateEnglishDay(year, Math.floor(i / 2), i));
  }
  return { year, days };
}

function generateMathPointQuestions(pointId) {
  const SOURCE = "张宇《考研数学基础30讲》2027版 / 张宇1000题";
  const data = (typeof MATH_DATA !== 'undefined' ? MATH_DATA : {}) || {};

  const result = data[pointId] || {concept: '未找到知识点 ' + pointId, formula: '', study: [], examples: [], questions: [], source: SOURCE};
  // 将答案统一为现有答题逻辑可识别的格式
  result.questions = (result.questions || []).map(q => {
    const nq = { ...q };
    if (nq.q && !nq.question) nq.question = nq.q;
    delete nq.q;
    nq.source = nq.source || SOURCE;
    if (nq.type === 'multiple') {
      const labels = ['A', 'B', 'C', 'D'];
      if (nq.options && nq.options.length) {
        nq.options = nq.options.map((opt, i) => {
          const re = new RegExp('^' + labels[i] + '\\.\\s*');
          return opt.replace(re, '');
        });
      }
      if (typeof nq.answer === 'string') {
        const ans = nq.answer.trim().toUpperCase();
        if (/^[A-D]$/.test(ans)) {
          nq.answer = ans.charCodeAt(0) - 'A'.charCodeAt(0);
        } else {
          const match = ans.match(/^([A-D])\./);
          if (match) nq.answer = match[1].charCodeAt(0) - 'A'.charCodeAt(0);
        }
      }
    } else if (nq.type === 'truefalse') {
      if (typeof nq.answer === 'string') {
        nq.answer = nq.answer.includes('正确');
      }
    }
    return nq;
  });
  return result;
}


function generateMaterialsPointData(chapterId, pointId) {
  const sourceBase = chapterId === 'mat-atom' ? '参考刘智恩《材料科学基础》第6版示例' :
    chapterId === 'mat-phase' ? '参考《材料科学基础导教导学导考》示例' :
    '参考刘智恩《材料科学基础》第6版及配套导学示例';
  const data = {
    'mat-atom-1': {
      concept: '晶体内部原子在三维空间呈周期性排列，具有长程有序；非晶体原子排列短程有序、长程无序。晶体具有各向异性、固定熔点；非晶体各向同性、无固定熔点。',
      formula: '',
      tfs: [
        { q: '非晶体具有各向异性。', a: false, exp: '非晶体各向同性。' },
        { q: '晶体有固定熔点。', a: true, exp: '晶体具有固定熔点。' }
      ],
      short: [
        { q: '简述晶体与非晶体的本质区别。', a: '晶体原子长程有序排列，非晶体长程无序。', exp: '关键在于原子排列的有序范围。' }
      ],
      calc: [
        { q: '某晶体的配位数为 8，试估算其原子致密度（提示：体心立方）。', a: '0.68', exp: 'BCC 致密度 = 2×(4/3)πr³/a³，其中 a=4r/√3，计算得约 0.68。' }
      ]
    },
    'mat-atom-2': {
      concept: '晶向指数 [uvw] 表示晶体中某一方向；晶面指数 (hkl) 表示某一原子面。晶面间距 d 与晶格常数、晶面指数有关，密排面间距最大。',
      formula: '立方晶系 d_{hkl} = a / √(h²+k²+l²)',
      tfs: [
        { q: '[111] 与 (111) 表示同一几何对象。', a: false, exp: '[111] 是晶向，(111) 是晶面。' },
        { q: '密排面的晶面间距通常较大。', a: true, exp: '密排面原子密度大、面间距大。' }
      ],
      short: [
        { q: '写出立方晶系中 {110} 包含的晶面。', a: '(110)、(101)、(011) 及其负指数共 12 个。', exp: '考虑正负与排列组合。' }
      ],
      calc: [
        { q: '已知体心立方点阵常数 a=0.287 nm，求 (110) 晶面间距。', a: '0.203 nm', exp: 'd=a/√(1²+1²+0²)=0.287/√2≈0.203 nm。' }
      ]
    },
    'mat-phase-1': {
      concept: '固溶体是溶质原子溶入溶剂晶格中而仍保持溶剂晶体结构的相。置换固溶体受尺寸因素、电负性、电子浓度影响；间隙固溶体由小原子填入溶剂间隙形成。',
      formula: '',
      tfs: [
        { q: '间隙固溶体的溶解度通常比置换固溶体大。', a: false, exp: '间隙固溶体因间隙有限，溶解度通常较小。' },
        { q: 'Hume-Rothery 规则可用于判断置换固溶体溶解度。', a: true, exp: '尺寸差<15%、相同晶体结构、电负性相近、电子浓度合适。' }
      ],
      short: [
        { q: '简述影响置换固溶体溶解度的主要因素。', a: '尺寸因素、晶体结构、电负性、电子浓度。', exp: '即 Hume-Rothery 经验规则。' }
      ],
      calc: [
        { q: 'Cu 中溶解 10 at.% Zn，若 Cu 晶格常数为 0.361 nm，估算固溶体点阵常数变化趋势。', a: '略增大', exp: 'Zn 原子半径略大于 Cu，固溶后点阵常数略增。' }
      ]
    },
    'mat-phase-2': {
      concept: '金属间化合物具有特定化学式与晶体结构，分为正常价化合物、电子化合物、间隙相。电子化合物受电子浓度控制，间隙相由过渡族金属与 H/B/C/N 形成。',
      formula: '',
      tfs: [
        { q: '金属间化合物一定具有金属键。', a: false, exp: '部分金属间化合物含离子键或共价键成分。' },
        { q: '电子化合物的结构主要由电子浓度决定。', a: true, exp: '电子浓度 e/a 决定其晶体结构。' }
      ],
      short: [
        { q: '比较固溶体与金属间化合物在结构与性能上的差异。', a: '固溶体保持溶剂结构、塑性较好；金属间化合物有固定结构与化学式，常硬而脆。', exp: '从结构有序度与键合角度分析。' }
      ],
      calc: [
        { q: 'Fe₃C 中碳的质量分数约为多少？（Fe=56，C=12）', a: '6.67%', exp: '12/(3×56+12)=12/180≈6.67%。' }
      ]
    },
    'mat-solidify-1': {
      concept: '结晶需要过冷度以提供相变驱动力。均匀形核依靠液体内部能量起伏和结构起伏；非均匀形核依附外来界面，所需过冷度较小。',
      formula: 'ΔG* = (16πσ³Tm²)/(3ΔHv²)·(1/ΔT²)',
      tfs: [
        { q: '实际凝固中通常以非均匀形核为主。', a: true, exp: '外来杂质与器壁降低形核功。' },
        { q: '过冷度越大，临界晶核半径越大。', a: false, exp: '过冷度越大，临界晶核半径越小。' }
      ],
      short: [
        { q: '简述临界晶核半径与过冷度的关系。', a: 'r* = 2σTm/ΔHv·1/ΔT，过冷度越大，临界半径越小。', exp: '过冷度增大使更多晶胚成为稳定晶核。' }
      ],
      calc: [
        { q: '若某金属熔点 Tm=1000 K，过冷度 ΔT=100 K，求相对过冷度。', a: '0.1', exp: 'ΔT/Tm=100/1000=0.1。' }
      ]
    },
    'mat-solidify-2': {
      concept: '晶粒细化可提高材料强度与韧性。常用方法：增大过冷度、加入形核剂（变质处理）、机械振动与搅拌。晶粒大小与形核率、长大速率的比值有关。',
      formula: 'Hall-Petch：σs = σ0 + kd^(-1/2)',
      tfs: [
        { q: '晶粒越细小，材料强度通常越高。', a: true, exp: 'Hall-Petch 关系。' },
        { q: '变质处理通过降低过冷度细化晶粒。', a: false, exp: '变质处理是增加形核核心。' }
      ],
      short: [
        { q: '列举三种细化铸件晶粒的方法。', a: '增大过冷度、变质处理、振动/搅拌。', exp: '分别对应提高形核率、提供异质核心、破碎晶枝。' }
      ],
      calc: []
    },
    'mat-diagram-1': {
      concept: '杠杆规则用于计算两相区中两相的相对量。以合金成分为支点，两相成分到支点的距离与另一相的量成正比。',
      formula: 'Wα = (Cb-C0)/(Cb-Ca)，Wβ = (C0-Ca)/(Cb-Ca)',
      tfs: [
        { q: '杠杆规则仅适用于两相区。', a: true, exp: '杠杆规则用于平衡两相相对量计算。' },
        { q: '杠杆规则中，某相含量与其成分到合金成分的距离成正比。', a: false, exp: '含量与另一相成分到合金成分的距离成正比。' }
      ],
      short: [
        { q: '简述杠杆规则的物理意义。', a: '由质量守恒推导，表示两相区中两相相对量与成分距离成反比。', exp: '本质是质量平衡。' }
      ],
      calc: [
        { q: '某二元合金含 B 30%，在某一温度下平衡两相成分分别为 10% B 和 70% B，求 α 相质量分数。', a: '66.7%', exp: 'Wα=(70-30)/(70-10)=40/60≈66.7%。' }
      ]
    },
    'mat-diagram-2': {
      concept: '铁碳相图是分析钢与铸铁组织的基础。重要点：共晶点 4.3%C、1148℃；共析点 0.77%C、727℃。室温组织通常由铁素体 F 和渗碳体 Fe₃C 组成。',
      formula: '',
      tfs: [
        { q: '共析钢的含碳量为 0.77%。', a: true, exp: '共析点成分为 0.77%C。' },
        { q: '过共析钢室温组织中没有珠光体。', a: false, exp: '过共析钢室温组织含珠光体和二次渗碳体。' }
      ],
      short: [
        { q: '写出共析反应式。', a: 'γ(0.77%C) ⇌ α(0.0218%C) + Fe₃C(6.69%C)', exp: '在 727℃ 发生。' }
      ],
      calc: [
        { q: '含碳 1.0% 的钢在室温下二次渗碳体质量分数约为多少？', a: '3.7%', exp: 'WFe₃CⅡ=(1.0-0.77)/(6.69-0.77)≈3.7%。' }
      ]
    },
    'mat-diffusion-1': {
      concept: '菲克第一定律描述稳态扩散：扩散通量与浓度梯度成正比，方向相反。菲克第二定律描述非稳态扩散，浓度随时间变化。',
      formula: 'J = -D(dC/dx)；∂C/∂t = D(∂²C/∂x²)',
      tfs: [
        { q: '菲克第一定律适用于稳态扩散。', a: true, exp: '稳态下浓度不随时间变化。' },
        { q: '扩散通量方向与浓度梯度方向相同。', a: false, exp: 'J = -D(dC/dx)，方向相反。' }
      ],
      short: [
        { q: '简述菲克第一定律中负号的物理意义。', a: '表示扩散方向与浓度梯度方向相反，物质从高浓度向低浓度迁移。', exp: '扩散总是使浓度趋于均匀。' }
      ],
      calc: [
        { q: '已知 D=10⁻¹² m²/s，浓度梯度 dC/dx=-2×10⁴ kg/m⁴，求扩散通量 J。', a: '2×10⁻⁸ kg/(m²·s)', exp: 'J=-D(dC/dx)=10⁻¹²×2×10⁴=2×10⁻⁸。' }
      ]
    },
    'mat-diffusion-2': {
      concept: '扩散机制主要有空位机制和间隙机制。空位机制是原子跳入相邻空位；间隙机制是小间隙原子在间隙位置间跳跃。柯肯达尔效应证明空位扩散存在。',
      formula: 'D = D0 exp(-Q/RT)',
      tfs: [
        { q: '柯肯达尔效应说明扩散是双向的且速率可不同。', a: true, exp: '界面移动证明两种原子扩散速率不同。' },
        { q: '间隙机制主要发生在置换固溶体中。', a: false, exp: '间隙机制主要发生在间隙固溶体中。' }
      ],
      short: [
        { q: '比较空位机制与间隙机制的异同。', a: '空位机制：大原子跳入相邻空位；间隙机制：小原子在间隙间跳跃。都需要热激活。', exp: '从扩散原子与机制角度比较。' }
      ],
      calc: [
        { q: '若扩散激活能 Q 增大，扩散系数 D 如何变化？', a: '减小', exp: 'D=D0exp(-Q/RT)，Q 增大使指数项减小。' }
      ]
    },
    'mat-deform-1': {
      concept: '滑移是金属塑性变形的主要方式，发生在密排面和密排方向上。滑移系 = 滑移面 × 滑移方向。临界分切应力 τc 是启动滑移所需的最小分切应力。',
      formula: 'τ = σ cosφ cosλ',
      tfs: [
        { q: '滑移面通常是晶体中的密排面。', a: true, exp: '密排面原子间距小、滑移阻力小。' },
        { q: '临界分切应力与外力方向无关。', a: false, exp: '临界分切应力是材料常数，但启动滑移所需的外力与取向有关。' }
      ],
      short: [
        { q: '什么是滑移系？举例说明 FCC 晶体的滑移系。', a: '滑移面与滑移方向的组合。FCC 滑移面 {111}，滑移方向 <110>，共 12 个滑移系。', exp: '密排面与密排方向组合。' }
      ],
      calc: [
        { q: '若外力 σ=50 MPa，取向因子 cosφcosλ=0.3，求分切应力。', a: '15 MPa', exp: 'τ=σcosφcosλ=50×0.3=15 MPa。' }
      ]
    },
    'mat-deform-2': {
      concept: '加工硬化是金属随变形量增加，强度硬度升高、塑性韧性下降的现象。主要原因是位错密度增加，位错间交互作用增强，阻碍进一步滑移。',
      formula: 'τ = τ0 + αGbp^(1/2)',
      tfs: [
        { q: '加工硬化使材料塑性提高。', a: false, exp: '加工硬化使塑性下降。' },
        { q: '位错密度增加是加工硬化的主要原因。', a: true, exp: '位错缠结阻碍滑移。' }
      ],
      short: [
        { q: '简述加工硬化的工程意义。', a: '可提高构件强度；但继续变形困难，需要再结晶退火恢复塑性。', exp: '利弊两方面。' }
      ],
      calc: []
    },
    'mat-recrystallize-1': {
      concept: '回复是冷变形金属在较低温度加热时，点缺陷和位错运动使内应力降低、电阻下降，但显微组织与性能变化不大的阶段。',
      formula: '',
      tfs: [
        { q: '回复过程中会发生再结晶形核。', a: false, exp: '回复无新晶粒形成，再结晶才有。' },
        { q: '回复可显著降低残余内应力。', a: true, exp: '回复主要消除点缺陷和使位错重排。' }
      ],
      short: [
        { q: '回复与再结晶的本质区别是什么？', a: '回复无新晶粒形成，再结晶产生无应变的新晶粒。', exp: '从组织变化角度区分。' }
      ],
      calc: []
    },
    'mat-recrystallize-2': {
      concept: '再结晶是冷变形金属加热到一定温度以上，形成无畸变新晶粒的过程。再结晶温度通常定义为 1 小时内完成 95% 再结晶的温度，纯金属约为 0.35~0.4Tm。',
      formula: '',
      tfs: [
        { q: '再结晶后金属的强度硬度通常降低。', a: true, exp: '再结晶消除加工硬化。' },
        { q: '再结晶温度对纯金属约为 0.8Tm。', a: false, exp: '约为 0.35~0.4Tm（K）。' }
      ],
      short: [
        { q: '影响再结晶温度的主要因素有哪些？', a: '变形程度、原始晶粒尺寸、杂质与合金元素、退火时间。', exp: '变形越大、晶粒越细，再结晶温度越低。' }
      ],
      calc: [
        { q: '某纯金属熔点 1200 K，估算其再结晶温度范围。', a: '约 420~480 K', exp: '0.35~0.4×1200 = 420~480 K。' }
      ]
    },
    'mat-solidtrans-1': {
      concept: '马氏体相变是无扩散切变型相变，转变速度快，新相与母相存在晶体学取向关系。马氏体硬度高、脆性大，可通过回火调整性能。',
      formula: '',
      tfs: [
        { q: '马氏体相变属于扩散型相变。', a: false, exp: '马氏体相变是无扩散切变型相变。' },
        { q: '马氏体相变具有表面浮凸现象。', a: true, exp: '切变导致表面出现浮凸。' }
      ],
      short: [
        { q: '简述马氏体相变的主要特点。', a: '无扩散、切变、速度快、新相与母相有取向关系、表面浮凸。', exp: '抓住无扩散与切变两个核心。' }
      ],
      calc: []
    },
    'mat-solidtrans-2': {
      concept: '珠光体转变是过冷奥氏体在 A1 以下发生的扩散型共析转变：γ → α + Fe₃C，产物为铁素体与渗碳体层片相间的机械混合物。层片间距随过冷度增大而减小。',
      formula: 'γ(0.77%C) → α(0.0218%C) + Fe₃C(6.69%C)',
      tfs: [
        { q: '珠光体是单相组织。', a: false, exp: '珠光体是 F + Fe₃C 的两相机械混合物。' },
        { q: '过冷度越大，珠光体层片间距越小。', a: true, exp: '过冷度大，扩散距离短，层片更细。' }
      ],
      short: [
        { q: '比较珠光体、索氏体、屈氏体的异同。', a: '三者均为 F+Fe₃C 层片状组织，层片间距依次减小，形成过冷度依次增大。', exp: '本质相同，形貌与性能不同。' }
      ],
      calc: []
    },
    'mat-composite-1': {
      concept: '复合材料由基体和增强体组成，增强机制包括纤维承载、裂纹偏转、拔出效应等。界面性能决定应力传递效率与复合材料综合性能。',
      formula: 'Ec = EfVf + Em(1-Vf)（纵向纤维增强复合材料）',
      tfs: [
        { q: '纤维增强复合材料中，纤维主要承担载荷。', a: true, exp: '高强度纤维是主要承载相。' },
        { q: '复合材料性能仅由基体决定。', a: false, exp: '基体、增强体、界面共同决定性能。' }
      ],
      short: [
        { q: '简述界面在复合材料中的作用。', a: '传递应力、阻止裂纹扩展、影响整体强度与韧性。', exp: '界面结合强度需适中。' }
      ],
      calc: [
        { q: '某复合材料中纤维体积分数 40%，纤维模量 200 GPa，基体模量 10 GPa，估算纵向弹性模量。', a: '86 GPa', exp: 'Ec=200×0.4+10×0.6=80+6=86 GPa。' }
      ]
    },
    'mat-composite-2': {
      concept: '界面结构包括界面结合类型（机械、物理、化学）和界面反应层。润湿性影响界面结合，良好润湿有助于基体包裹增强体并有效传递应力。',
      formula: '',
      tfs: [
        { q: '润湿角越小，润湿性越好。', a: true, exp: '润湿角 <90° 为润湿良好。' },
        { q: '界面反应层越厚对复合材料越有利。', a: false, exp: '过厚反应层可能变脆，降低性能。' }
      ],
      short: [
        { q: '简述改善复合材料界面结合的方法。', a: '纤维表面处理、基体合金化、控制界面反应、优化制备工艺。', exp: '需兼顾结合强度与韧性。' }
      ],
      calc: []
    }
  };
  const d = data[pointId] || { concept: '本知识点待补充。', formula: '', tfs: [], short: [], calc: [] };
  const questions = [];
  d.tfs.forEach((item, i) => questions.push({ type: 'truefalse', question: `${sourceBase}：${item.q}`, answer: item.a, explanation: item.exp, source: sourceBase }));
  d.short.forEach((item, i) => questions.push({ type: 'fill', question: `${sourceBase}：${item.q}`, answer: item.a, acceptable: [item.a], explanation: item.exp, source: sourceBase }));
  d.calc.forEach((item, i) => questions.push({ type: 'fill', question: `${sourceBase}（计算）：${item.q}`, answer: item.a, acceptable: [item.a], explanation: item.exp, source: sourceBase }));
  return { concept: d.concept, formula: d.formula, questions, source: sourceBase };
}

// ===================== 状态管理 =====================
const STATE_VERSION = 2;

const DEFAULT_STATE = {
  version: STATE_VERSION,
  xp: 0,
  gems: 0,
  hearts: 5,
  streak: 0,
  lastStudyDate: null,
  dailyGoal: 50,
  reminderTime: '20:00',
  xpToday: 0,
  lessonsToday: 0,
  reviewsToday: 0,
  settings: { sound: true },
  english: {
    currentYear: 2026,
    currentDay: 1,
    completedDays: [],
    wordbook: { words: [], phrases: [], sentences: [] },
    mistakes: []
  },
  math: {
    currentChapter: MATH_CHAPTERS[0].id,
    currentPoint: MATH_CHAPTERS[0].points[0].id,
    completedPoints: [],
    mistakes: [],
    yesterdayMistakes: []
  },
  politics: { locked: true, unlockDate: '2027-06-01' },
  materials: {
    currentChapter: MATERIALS_CHAPTERS[0].id,
    completedChapters: [],
    mistakes: []
  }
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const merged = deepMerge({ ...DEFAULT_STATE }, parsed);
      // 版本迁移：生词本由用户自主添加，不保留系统预填内容
      if ((merged.version || 0) < STATE_VERSION) {
        merged.english.wordbook = { words: [], phrases: [], sentences: [] };
        merged.version = STATE_VERSION;
      }
      return merged;
    }
  } catch (e) {
    console.error('读取本地状态失败', e);
  }
  return { ...DEFAULT_STATE };
}

function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('保存状态失败', e);
  }
}

function resetState() {
  state = { ...DEFAULT_STATE };
  saveState();
  initDay();
  renderAll();
}

function initDay() {
  const today = todayStr();
  if (state.lastStudyDate !== today) {
    if (state.lastStudyDate) {
      const last = new Date(state.lastStudyDate);
      const cur = new Date(today);
      const diff = Math.ceil((cur - last) / (1000 * 60 * 60 * 24));
      if (diff === 1) {
        state.streak += 1;
      } else if (diff > 1) {
        state.streak = 1;
      }
    } else {
      state.streak = 1;
    }
    state.lastStudyDate = today;
    state.xpToday = 0;
    state.lessonsToday = 0;
    state.reviewsToday = 0;
    state.hearts = Math.min(5, state.hearts + 2);

    // 数学昨日错题轮转
    if (state.math.mistakes.length > 0) {
      state.math.yesterdayMistakes = state.math.mistakes.slice(-10);
      state.math.mistakes = [];
    }
  }
  saveState();
}

function addXp(amount) {
  state.xp += amount;
  state.xpToday += amount;
  if (state.xpToday >= state.dailyGoal) {
    showToast('今日 XP 目标达成！');
  }
}

function addGems(amount) {
  state.gems += amount;
}

function loseHeart() {
  state.hearts = Math.max(0, state.hearts - 1);
}

function addMistake(q, userAnswer, correctAnswer, subject) {
  state[subject].mistakes.push({
    id: Date.now() + Math.random(),
    question: q.question || q.term,
    userAnswer,
    correctAnswer,
    subject,
    source: q.source || '系统练习',
    date: todayStr()
  });
  if (state[subject].mistakes.length > 50) state[subject].mistakes.shift();
}

function removeMistake(subject, id) {
  state[subject].mistakes = state[subject].mistakes.filter(m => m.id !== id);
}

// ===================== 全局渲染 =====================
let currentPage = 'english';
let currentLessonSubject = null;
let currentLessonContext = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedOption = null;
let currentFillAnswer = '';
let lessonHearts = 5;
let lessonXp = 0;
let lessonCorrect = 0;
let answered = false;

function renderAll() {
  renderTopStats();
  renderProfile();
  renderEnglishHome();
  renderMathHome();
  renderMaterialsHome();
  saveState();
}

function renderTopStats() {
  document.getElementById('streak-val').textContent = state.streak;
  document.getElementById('xp-val').textContent = state.xp;
  document.getElementById('hearts-val').textContent = state.hearts;
  document.getElementById('gems-val').textContent = state.gems;
}

function switchPage(pageName) {
  if (pageName === 'politics') {
    showToast('政治模块：2027年6月开启');
    return;
  }
  currentPage = pageName;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageName).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === pageName);
  });
  renderAll();
}

// ===================== 英语模块 =====================
function renderEnglishHome() {
  const completedDays = state.english.completedDays;
  const totalDays = ENGLISH_YEARS.length * 14;
  const pct = Math.round((completedDays.length / totalDays) * 100);
  document.getElementById('english-progress').style.width = pct + '%';
  document.getElementById('english-progress-text').textContent = `${completedDays.length}/${totalDays} 天`;

  const container = document.getElementById('english-content');
  if (container.dataset.view === 'year' && container.dataset.year) {
    renderEnglishYear(container, parseInt(container.dataset.year));
    return;
  }
  if (container.dataset.view === 'day' && container.dataset.year && container.dataset.day) {
    renderEnglishDay(container, parseInt(container.dataset.year), parseInt(container.dataset.day));
    return;
  }
  renderEnglishYearGrid(container);
}

function englishDayKey(year, day) {
  return `${year}-${day}`;
}

function isEnglishDayUnlocked(year, day) {
  if (year === ENGLISH_YEARS[0] && day === 1) return true;
  const years = ENGLISH_YEARS;
  const idx = years.indexOf(year);
  if (idx === 0) {
    return state.english.completedDays.includes(englishDayKey(year, day - 1));
  }
  if (day === 1) {
    return state.english.completedDays.includes(englishDayKey(years[idx - 1], 14));
  }
  return state.english.completedDays.includes(englishDayKey(year, day - 1));
}

function renderEnglishYearGrid(container) {
  container.dataset.view = 'grid';
  delete container.dataset.year;
  delete container.dataset.day;
  let html = '<div class="year-grid">';
  ENGLISH_YEARS.forEach((year, idx) => {
    const completed = Array.from({ length: 14 }, (_, i) => i + 1)
      .every(d => state.english.completedDays.includes(englishDayKey(year, d)));
    const current = !completed && (idx === 0 || state.english.completedDays.includes(englishDayKey(ENGLISH_YEARS[idx - 1], 14)) || state.english.completedDays.some(k => k.startsWith(year + '-')));
    const locked = idx > 0 && !state.english.completedDays.includes(englishDayKey(ENGLISH_YEARS[idx - 1], 14)) && !state.english.completedDays.some(k => k.startsWith(year + '-'));
    html += `
      <button class="year-card ${completed ? 'completed' : ''} ${current ? 'current' : ''} ${locked ? 'locked' : ''}" data-year="${year}">
        <div class="year-number">${year}</div>
        <div class="year-status">${completed ? '已完成' : locked ? '未解锁' : current ? '进行中' : '待开始'}</div>
      </button>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
  container.querySelectorAll('.year-card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('locked')) {
        showToast('请先完成前一年真题');
        return;
      }
      container.dataset.view = 'year';
      container.dataset.year = card.dataset.year;
      renderEnglishYear(container, parseInt(card.dataset.year));
    });
  });
}

function renderEnglishYear(container, year) {
  container.dataset.view = 'year';
  container.dataset.year = year;
  const yearData = generateEnglishYear(year);
  let html = `
    <div class="back-bar">
      <button class="back-btn" id="english-back">← 返回年份</button>
      <span class="back-title">${year} 年真题 · 14 天周期</span>
    </div>
    <div class="day-cycle">
      <div class="day-list">
  `;
  yearData.days.forEach(d => {
    const key = englishDayKey(year, d.day);
    const completed = state.english.completedDays.includes(key);
    const unlocked = isEnglishDayUnlocked(year, d.day);
    const current = unlocked && !completed;
    html += `
      <button class="day-item ${completed ? 'completed' : ''} ${current ? 'current' : ''} ${d.isReview ? 'review' : ''} ${!unlocked ? 'locked' : ''}" data-day="${d.day}">
        <span class="day-num">${d.day}</span>
        <span class="day-tag">${d.isReview ? '复习' : segLabel(d.segment)}</span>
      </button>
    `;
  });
  html += '</div></div>';
  html += `
    <div class="daily-study">
      <h3>学习说明</h3>
      <p class="source-label">示例真题-扇贝考研风格</p>
      <p style="font-size:13px;color:var(--text-light);line-height:1.6">
        第 1-2 天：Text1；第 3-4 天：Text2；第 5-6 天：Text3；第 7-8 天：Text4；
        第 9-10 天：翻译；第 11-12 天：完形；第 13-14 天：新题型。
        偶数天为复习日，只做词汇/词组/句子复习，不做新真题。
      </p>
    </div>
  `;
  container.innerHTML = html;
  container.querySelector('#english-back').addEventListener('click', () => renderEnglishYearGrid(container));
  container.querySelectorAll('.day-item').forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('locked')) {
        showToast('请先完成前面的天数');
        return;
      }
      container.dataset.view = 'day';
      container.dataset.day = item.dataset.day;
      renderEnglishDay(container, year, parseInt(item.dataset.day));
    });
  });
}

function segLabel(seg) {
  const s = SEGMENTS.find(x => x.key === seg);
  return s ? s.label : seg;
}

function renderEnglishDay(container, year, day) {
  container.dataset.view = 'day';
  container.dataset.year = year;
  container.dataset.day = day;
  const dayData = generateEnglishYear(year).days[day - 1];
  const isReview = dayData.isReview;
  let html = `
    <div class="back-bar">
      <button class="back-btn" id="english-day-back">← 返回周期</button>
      <span class="back-title">${year} · 第 ${day} 天</span>
    </div>
    <div class="daily-study">
      <h3>${dayData.title}</h3>
      <p class="source-label">${dayData.source}</p>
  `;

  html += `<h4 style="margin:16px 0 10px;font-size:15px">核心词汇卡片（先学习，再闯关）</h4>`;
  html += `<div class="vocab-card-list">`;
  dayData.words.forEach((w, i) => {
    html += `
      <div class="vocab-card" data-idx="${i}">
        <div class="vocab-card-front">
          <div class="vocab-word">${w.word}</div>
          ${w.form && w.form.toLowerCase() !== (w.word || '').toLowerCase() ? `<div class="vocab-form" style="font-size:12px;color:var(--text-secondary);margin-top:4px">真题中：${w.form}</div>` : ''}
          <div class="vocab-phonetic">${w.phonetic || ''}</div>
          <div class="vocab-tip">点击看释义</div>
        </div>
        <div class="vocab-card-back">
          <div class="vocab-meaning">${w.meaning || w.def || ''}</div>
          <div class="vocab-tags">${(w.tags || []).map(t => `<span class="vocab-tag">${t}</span>`).join('')}</div>
        </div>
      </div>
    `;
  });
  html += `</div>`;

  html += `<h4 style="margin:16px 0 10px;font-size:15px">重点词组</h4>`;
  html += `<div class="mini-card-list">`;
  dayData.phrases.forEach(p => {
    html += `
      <div class="mini-card">
        <div class="term">${p.phrase}</div>
        <div class="def">${p.meaning || p.def || ''}</div>
        <div class="example">${p.example || ''}</div>
      </div>
    `;
  });
  html += `</div>`;

  html += `<h4 style="margin:16px 0 10px;font-size:15px">长难句拆解（点击看翻译）</h4>`;
  html += `<div class="mini-card-list">`;
  dayData.sentences.forEach((s, i) => {
    html += `
      <div class="mini-card sentence-card" data-idx="${i}">
        <div class="term">${wrapWordsForLookup(s.en, dayData)}</div>
        <div class="def translated" id="sentence-zh-${i}" style="display:none;border-top:1px dashed var(--border);padding-top:8px;margin-top:8px">${s.zh}</div>
      </div>
    `;
  });

  if (!isReview && dayData.passage) {
    html += `
      <h4 style="margin:16px 0 10px;font-size:15px">真题原文（黄色为词汇，点击段落调用翻译）</h4>
      <div class="passage-block">
        ${renderParagraphs(dayData.passage.en, dayData)}
        <div class="translated" id="day-passage-zh">${dayData.passage.zh}</div>
      </div>
    `;
  }
  html += `</div>`;

  const key = englishDayKey(year, day);
  const completed = state.english.completedDays.includes(key);
  html += `
    <div style="margin-top:16px;display:flex;gap:10px">
      <button class="btn-primary" id="btn-start-english" style="flex:1">${isReview ? '开始复习' : completed ? '已完成' : '开始真题闯关'}</button>
      ${!completed ? `<button class="btn-secondary" id="btn-add-wordbook" style="flex:1;margin-top:0">加入生词本</button>` : ''}
    </div>
  `;
  html += `</div>`;

  container.innerHTML = html;
  container.querySelector('#english-day-back').addEventListener('click', () => renderEnglishYear(container, year));

  container.querySelectorAll('.vocab-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  container.querySelectorAll('.translatable-paragraph').forEach(para => {
    para.addEventListener('click', () => openTranslate(para.innerText));
  });

  container.querySelectorAll('.sentence-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.dataset.idx;
      const el = document.getElementById(`sentence-zh-${idx}`);
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });
  });

  bindWordLookup(container);

  const startBtn = container.querySelector('#btn-start-english');
  if (!completed) {
    startBtn.addEventListener('click', () => startEnglishLesson(dayData));
  } else {
    startBtn.disabled = true;
    startBtn.style.opacity = '0.6';
  }

  const addBtn = container.querySelector('#btn-add-wordbook');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      addDayToWordbook(dayData);
      showToast('已加入生词本');
    });
  }
}

const ENGLISH_STOPWORDS = new Set(['a','an','the','to','of','in','on','at','by','for','with','as','is','was','are','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','can','cannot','not','no','it','its','this','that','these','those','i','you','he','she','we','they','me','him','her','us','them','my','your','his','our','their','and','or','but','if','then','than','so','because','when','where','what','which','who','whom','whose','how','all','any','both','each','every','few','more','most','other','some','such','only','own','same','too','very','just','now','also','here','there','up','down','out','off','over','under','again','further','once','from','into','about','after','before','above','below','between','through','during','without','within','along','among','against','toward','towards','until','since','while','although','though','unless','whether','either','neither','one','two','three','four','five','six','seven','eight','nine','ten','first','second','last','next','new','old','good','bad','big','small','long','short','high','low','great','little']);

function wrapWordsForLookup(text, dayData) {
  const vocabSet = new Set(((typeof VOCAB_DATA !== 'undefined' ? VOCAB_DATA : []) || []).map(x => x.word && x.word.toLowerCase()).filter(w => w && !ENGLISH_STOPWORDS.has(w) && w.length > 2));
  const dayWordSet = new Set((dayData && dayData.words ? dayData.words : []).map(x => x.word && x.word.toLowerCase()).filter(Boolean));
  const variantSet = dayData && dayData.variantSet ? new Set(dayData.variantSet) : new Set();
  return text.replace(/[a-zA-Z]+/g, w => {
    const lower = w.toLowerCase();
    const isVocab = vocabSet.has(lower) || dayWordSet.has(lower) || variantSet.has(lower);
    return `<span class="word-longpress ${isVocab ? 'vocab-word' : ''}" data-word="${lower}">${w}</span>`;
  });
}

function renderParagraphs(text, dayData) {
  return text.split(/\n{2,}|\n/).map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return '';
    return `<p class="translatable-paragraph" data-idx="${i}">${wrapWordsForLookup(trimmed, dayData)}</p>`;
  }).join('');
}

function bindWordLookup(container) {
  let pressTimer = null;
  let startX = 0, startY = 0;
  let longPressed = false;
  let lastTap = 0;
  let lastTapWord = '';

  container.querySelectorAll('.word-longpress').forEach(el => {
    const start = (e) => {
      const touch = e.touches ? e.touches[0] : e;
      startX = touch.clientX;
      startY = touch.clientY;
      longPressed = false;
      if (pressTimer) clearTimeout(pressTimer);
      pressTimer = setTimeout(() => {
        longPressed = true;
        if (navigator.vibrate) navigator.vibrate(40);
        showWordPopup(el.dataset.word);
      }, 450);
    };

    const end = (e) => {
      if (pressTimer) clearTimeout(pressTimer);
      pressTimer = null;
      if (longPressed) {
        longPressed = false;
        if (e.cancelable) {
          try { e.preventDefault(); } catch (err) {}
        }
        e.stopPropagation();
        return;
      }
      longPressed = false;

      const now = Date.now();
      const word = el.dataset.word;
      if (word === lastTapWord && now - lastTap < 400) {
        lastTap = 0;
        lastTapWord = '';
        addWordToWordbook(word);
        showToast(`已加入生词本：${word}`);
        if (e.cancelable) {
          try { e.preventDefault(); } catch (err) {}
        }
        e.stopPropagation();
      } else {
        lastTap = now;
        lastTapWord = word;
      }
    };

    const move = (e) => {
      const touch = e.touches ? e.touches[0] : e;
      if (Math.abs(touch.clientX - startX) > 12 || Math.abs(touch.clientY - startY) > 12) {
        if (pressTimer) clearTimeout(pressTimer);
        pressTimer = null;
        longPressed = false;
      }
    };

    const cancel = () => {
      if (pressTimer) clearTimeout(pressTimer);
      pressTimer = null;
      longPressed = false;
    };

    el.addEventListener('touchstart', (e) => {
      if (e.cancelable) {
        try { e.preventDefault(); } catch (err) {}
      }
      start(e);
    }, { passive: false });
    el.addEventListener('touchend', end);
    el.addEventListener('touchmove', move, { passive: true });
    el.addEventListener('touchcancel', cancel);
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    el.addEventListener('mousedown', start);
    el.addEventListener('mouseup', end);
    el.addEventListener('mouseleave', cancel);
    el.addEventListener('dragstart', (e) => e.preventDefault());

    el.addEventListener('dblclick', (e) => {
      e.preventDefault();
      e.stopPropagation();
      addWordToWordbook(el.dataset.word);
      showToast(`已加入生词本：${el.dataset.word}`);
    });

    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });
}

function lookupWord(word) {
  const pool = (typeof VOCAB_DATA !== 'undefined' ? VOCAB_DATA : WORD_POOL) || WORD_POOL;
  const w = pool.find(x => x.word === word);
  if (w) return `${w.phonetic || ''} ${w.meaning || w.def || ''}`;
  return `未收录，点击底部"翻译"调用翻译软件。`;
}

function openTranslate(text) {
  const url = `https://www.bing.com/translator?from=en&to=zh-Hans&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function showWordPopup(word, event) {
  const popup = document.getElementById('word-popup');
  document.getElementById('word-popup-word').textContent = word;
  document.getElementById('word-popup-def').textContent = lookupWord(word);
  popup.dataset.word = word;
  popup.classList.add('active');
}

function hideWordPopup() {
  document.getElementById('word-popup').classList.remove('active');
}

function addWordToWordbook(word) {
  const pool = (typeof VOCAB_DATA !== 'undefined' ? VOCAB_DATA : WORD_POOL) || WORD_POOL;
  let w = pool.find(x => x.word === word);
  if (!w) {
    w = { word, phonetic: '', meaning: '（结合真题语境记忆）', def: '（结合真题语境记忆）', example: '' };
  }
  if (!state.english.wordbook.words.find(x => x.word === word)) {
    state.english.wordbook.words.push({ ...w, interval: 1, nextReview: todayStr(), mastered: false });
    saveState();
  }
}

function addDayToWordbook(dayData) {
  dayData.words.forEach(w => {
    if (!state.english.wordbook.words.find(x => x.word === w.word)) {
      state.english.wordbook.words.push({ ...w, interval: 1, nextReview: todayStr(), mastered: false });
    }
  });
  dayData.phrases.forEach(p => {
    if (!state.english.wordbook.phrases.find(x => x.phrase === p.phrase)) {
      state.english.wordbook.phrases.push({ ...p, interval: 1, nextReview: todayStr(), mastered: false });
    }
  });
  dayData.sentences.forEach(s => {
    if (!state.english.wordbook.sentences.find(x => x.en === s.en)) {
      state.english.wordbook.sentences.push({ ...s, interval: 1, nextReview: todayStr(), mastered: false });
    }
  });
  saveState();
}

function renderWordbook() {
  const container = document.getElementById('english-content');
  container.dataset.view = 'wordbook';
  let html = `
    <div class="back-bar">
      <button class="back-btn" id="wordbook-back">← 返回英语</button>
      <span class="back-title">生词闯关</span>
    </div>
    <div class="wordbook-path">
  `;
  const groups = [];
  ENGLISH_YEARS.forEach(year => {
    const ydata = generateEnglishYear(year);
    ydata.days.forEach(d => {
      const dayWords = d.words.filter(w => state.english.wordbook.words.find(x => x.word === w.word));
      const dayPhrases = d.phrases.filter(p => state.english.wordbook.phrases.find(x => x.phrase === p.phrase));
      const daySentences = d.sentences.filter(s => state.english.wordbook.sentences.find(x => x.en === s.en));
      if (dayWords.length || dayPhrases.length || daySentences.length) {
        groups.push({ year, day: d.day, segment: d.segmentName, words: dayWords, phrases: dayPhrases, sentences: daySentences });
      }
    });
  });

  if (groups.length === 0) {
    html += `<div class="empty-state"><div class="empty-state-icon">📚</div><p>生词本为空，学习真题时长按单词加入。</p></div>`;
  } else {
    groups.forEach(g => {
      html += `<div class="wordbook-group"><h4>${g.year} · 第 ${g.day} 天 · ${g.segment}</h4><div class="wordbook-items">`;
      g.words.forEach(w => {
        const item = state.english.wordbook.words.find(x => x.word === w.word);
        const cls = item.mastered ? 'mastered' : 'learning';
        html += `<span class="wordbook-badge ${cls}" data-type="word" data-id="${w.word}">${w.word}</span>`;
      });
      g.phrases.forEach(p => {
        const item = state.english.wordbook.phrases.find(x => x.phrase === p.phrase);
        const cls = item.mastered ? 'mastered' : 'learning';
        html += `<span class="wordbook-badge ${cls}" data-type="phrase" data-id="${p.phrase}">${p.phrase}</span>`;
      });
      g.sentences.forEach(s => {
        const item = state.english.wordbook.sentences.find(x => x.en === s.en);
        const cls = item.mastered ? 'mastered' : 'learning';
        html += `<span class="wordbook-badge ${cls}" data-type="sentence" data-id="${encodeURIComponent(s.en)}">句</span>`;
      });
      html += `</div></div>`;
    });
  }
  html += `</div>`;
  container.innerHTML = html;
  container.querySelector('#wordbook-back').addEventListener('click', () => renderEnglishYearGrid(container));
  container.querySelectorAll('.wordbook-badge').forEach(badge => {
    badge.addEventListener('click', () => startWordbookChallenge(badge.dataset.type, decodeURIComponent(badge.dataset.id)));
  });
}

function startWordbookChallenge(type, id) {
  let item;
  if (type === 'word') item = state.english.wordbook.words.find(x => x.word === id);
  else if (type === 'phrase') item = state.english.wordbook.phrases.find(x => x.phrase === id);
  else item = state.english.wordbook.sentences.find(x => x.en === id);
  if (!item) return;

  currentLessonSubject = 'english';
  currentLessonContext = { type: 'wordbook', item, itemType: type };
  currentQuestions = [{ type: 'wordbook', data: item, itemType: type }];
  currentQuestionIndex = 0;
  selectedOption = null;
  currentFillAnswer = '';
  lessonHearts = 5;
  lessonXp = 0;
  lessonCorrect = 0;
  answered = false;
  document.getElementById('lesson-screen').classList.add('active');
  document.getElementById('lesson-title').textContent = '生词闯关';
  document.getElementById('lesson-hearts-val').textContent = lessonHearts;
  renderQuestion();
}

function startEnglishLesson(dayData) {
  currentLessonSubject = 'english';
  currentLessonContext = { type: 'english-day', dayData };
  const questions = dayData.isReview ? [] : dayData.questions.slice();
  // 复习日也加入词汇识别题
  if (dayData.isReview) {
    dayData.words.forEach(w => {
      questions.push({
        type: 'multiple',
        question: `复习："${w.word}" 的含义是？`,
        options: [w.def.split(' ').slice(1).join(' ') || '核心含义', '模糊的', '过时的', '无关的'],
        answer: 0,
        explanation: `${w.word}：${w.def}`,
        source: dayData.source
      });
    });
  }
  currentQuestions = shuffleArray(questions);
  if (currentQuestions.length === 0) {
    showToast('今天没有题目');
    return;
  }
  currentQuestionIndex = 0;
  selectedOption = null;
  currentFillAnswer = '';
  lessonHearts = state.hearts;
  lessonXp = 0;
  lessonCorrect = 0;
  answered = false;
  document.getElementById('lesson-screen').classList.add('active');
  document.getElementById('lesson-title').textContent = `${dayData.year} · Day ${dayData.day}`;
  document.getElementById('lesson-hearts-val').textContent = lessonHearts;
  renderQuestion();
}

// ===================== 数学模块 =====================
function renderMathHome() {
  const completed = state.math.completedPoints.length;
  const total = MATH_CHAPTERS.reduce((sum, c) => sum + c.points.length, 0);
  const pct = Math.round((completed / total) * 100);
  document.getElementById('math-progress').style.width = pct + '%';
  document.getElementById('math-progress-text').textContent = `${completed}/${total} 点`;

  const container = document.getElementById('math-content');
  if (container.dataset.view === 'point' && container.dataset.point) {
    renderMathPoint(container, container.dataset.point);
    return;
  }

  let html = '<div class="chapter-list">';
  MATH_CHAPTERS.forEach((ch, cidx) => {
    html += `
      <div class="chapter-card">
        <div class="chapter-header">
          <h4>${ch.title}</h4>
          <span class="chapter-meta">${ch.duration} · 难度 ${ch.difficulty}</span>
        </div>
        <div class="point-list">
    `;
    ch.points.forEach((p, pidx) => {
      const completed = state.math.completedPoints.includes(p.id);
      const prevCompleted = pidx === 0 || state.math.completedPoints.includes(ch.points[pidx - 1].id);
      const current = !completed && prevCompleted;
      const locked = !completed && !prevCompleted;
      html += `
        <div class="point-item ${completed ? 'completed' : ''} ${current ? 'current' : ''}" data-point="${p.id}" data-locked="${locked}">
          <div class="point-icon ${completed ? 'completed' : ''}">${completed ? '✓' : pidx + 1}</div>
          <div class="point-body">
            <div class="point-title">${p.title}</div>
            <div class="point-desc">${p.desc}</div>
          </div>
        </div>
      `;
    });
    html += `</div></div>`;
  });
  html += '</div>';
  container.innerHTML = html;
  container.querySelectorAll('.point-item').forEach(item => {
    item.addEventListener('click', () => {
      if (item.dataset.locked === 'true') {
        showToast('请先完成前面的知识点');
        return;
      }
      container.dataset.view = 'point';
      container.dataset.point = item.dataset.point;
      renderMathPoint(container, item.dataset.point);
    });
  });
}

function renderMathPoint(container, pointId) {
  const chapter = MATH_CHAPTERS.find(c => c.points.some(p => p.id === pointId));
  const point = chapter.points.find(p => p.id === pointId);
  const pdata = generateMathPointQuestions(pointId);
  const completed = state.math.completedPoints.includes(pointId);
  let html = `
    <div class="back-bar">
      <button class="back-btn" id="math-point-back">← 返回章节</button>
      <span class="back-title">${chapter.title}</span>
    </div>
    ${pdata.framework && pdata.framework.length ? `
      <div class="framework-card">
        <h4>🗺️ 基础知识结构</h4>
        <div class="framework-tree">
          ${pdata.framework.map((line, i) => `<div class="framework-node level-${(line.match(/^　/g) || []).length}" style="padding-left:${(line.match(/^　/g) || []).length * 16}px">${line.replace(/^　+/g, '')}</div>`).join('')}
        </div>
      </div>
    ` : ''}
    <div class="concept-card">
      <h4>${point.title}</h4>
      <p class="math-concept">${pdata.concept}</p>
      ${pdata.formula ? `<div class="formula math-formula">${pdata.formula.replace(/\\n/g, '<br>')}</div>` : ''}
      ${pdata.notes && pdata.notes.length ? `
        <div class="notes-card">
          <h5>📝 注 / 易错点 / 补充</h5>
          <ul>
            ${pdata.notes.map(n => `<li>${n}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${pdata.keypoints ? `
        <div class="keypoints-card">
          <h5>🎯 核心考点</h5>
          <ul>
            ${pdata.keypoints.map(k => `<li>${k}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      <p class="source-label" style="margin-top:12px;margin-bottom:0">${pdata.source}</p>
    </div>
    <div class="study-card">
      <h4>📚 知识要点与解题技巧</h4>
      <ul>
        ${pdata.study.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
    <div class="example-section" id="math-examples" style="display:none">
      <h4>📝 典型例题</h4>
      ${pdata.examples.map((ex, i) => `
        <div class="example-card">
          <div class="example-q">例${i + 1}. ${ex.q}</div>
          <div class="example-sol"><strong>解：</strong>${(ex.solution || '').replace(/\\n/g, '<br>')}</div>
        </div>
      `).join('')}
    </div>
    <div class="math-actions">
      <button class="btn-secondary" id="btn-math-examples">查看例题</button>
      <button class="btn-primary" id="btn-math-practice">开始练习</button>
    </div>
    ${completed ? '<div style="color:var(--primary);font-weight:700;text-align:center;padding:12px">本知识点已完成</div>' : ''}
  `;
  container.innerHTML = html;
  container.querySelector('#math-point-back').addEventListener('click', () => {
    delete container.dataset.view;
    delete container.dataset.point;
    renderMathHome();
  });
  container.querySelector('#btn-math-examples').addEventListener('click', () => {
    const exSection = document.getElementById('math-examples');
    const btn = container.querySelector('#btn-math-examples');
    if (exSection.style.display === 'none') {
      exSection.style.display = 'block';
      btn.textContent = '隐藏例题';
    } else {
      exSection.style.display = 'none';
      btn.textContent = '查看例题';
    }
  });
  container.querySelector('#btn-math-practice').addEventListener('click', () => startMathPractice(pointId, pdata));
}

function startMathPractice(pointId, pdata) {
  currentLessonSubject = 'math';
  currentLessonContext = { type: 'math-point', pointId };
  currentQuestions = shuffleArray(pdata.questions);
  currentQuestionIndex = 0;
  selectedOption = null;
  currentFillAnswer = '';
  lessonHearts = state.hearts;
  lessonXp = 0;
  lessonCorrect = 0;
  answered = false;
  document.getElementById('lesson-screen').classList.add('active');
  const chapter = MATH_CHAPTERS.find(c => c.points.some(p => p.id === pointId));
  const point = chapter.points.find(p => p.id === pointId);
  document.getElementById('lesson-title').textContent = point.title;
  document.getElementById('lesson-hearts-val').textContent = lessonHearts;
  renderQuestion();
}

function startMathReview() {
  const pool = state.math.yesterdayMistakes.length ? state.math.yesterdayMistakes : state.math.mistakes;
  if (pool.length === 0) {
    showToast('暂无错题');
    return;
  }
  currentLessonSubject = 'math';
  currentLessonContext = { type: 'math-review' };
  currentQuestions = pool.slice(0, 10).map(m => ({
    type: m.question.includes('正确的是') || m.question.includes('的是') ? 'multiple' : 'fill',
    question: m.question,
    options: [m.correctAnswer, m.userAnswer || '错误答案', '待复习', '再想想'],
    answer: 0,
    explanation: '正确答案：' + m.correctAnswer,
    source: m.source
  }));
  currentQuestionIndex = 0;
  selectedOption = null;
  currentFillAnswer = '';
  lessonHearts = 5;
  lessonXp = 0;
  lessonCorrect = 0;
  answered = false;
  document.getElementById('lesson-screen').classList.add('active');
  document.getElementById('lesson-title').textContent = '昨日错题';
  document.getElementById('lesson-hearts-val').textContent = lessonHearts;
  renderQuestion();
}

// ===================== 材料模块 =====================
function renderMaterialsHome() {
  const completed = state.materials.completedChapters.length;
  const total = MATERIALS_CHAPTERS.length;
  const pct = Math.round((completed / total) * 100);
  document.getElementById('materials-progress').style.width = pct + '%';
  document.getElementById('materials-progress-text').textContent = `${completed}/${total} 章`;

  const container = document.getElementById('materials-content');
  if (container.dataset.view === 'chapter' && container.dataset.chapter) {
    renderMaterialsChapter(container, container.dataset.chapter);
    return;
  }

  let html = '<div class="chapter-list">';
  MATERIALS_CHAPTERS.forEach((ch, idx) => {
    const completed = state.materials.completedChapters.includes(ch.id);
    const prevCompleted = idx === 0 || state.materials.completedChapters.includes(MATERIALS_CHAPTERS[idx - 1].id);
    const current = !completed && prevCompleted;
    const locked = !completed && !prevCompleted;
    html += `
      <div class="chapter-card ${locked ? 'locked' : ''}" data-chapter="${ch.id}" data-locked="${locked}" style="cursor:pointer">
        <div class="chapter-header">
          <h4>${idx + 1}. ${ch.title}</h4>
          <span class="chapter-meta">${completed ? '已完成' : locked ? '未解锁' : current ? '进行中' : '待开始'}</span>
        </div>
        <div class="point-list" style="margin-top:8px">
          ${ch.points.map(p => `<div class="point-item"><div class="point-body"><div class="point-title">${p.title}</div><div class="point-desc">${p.desc}</div></div></div>`).join('')}
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
  container.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.dataset.locked === 'true') {
        showToast('请先完成前面的章节');
        return;
      }
      container.dataset.view = 'chapter';
      container.dataset.chapter = card.dataset.chapter;
      renderMaterialsChapter(container, card.dataset.chapter);
    });
  });
}

function renderMaterialsChapter(container, chapterId) {
  const chapter = MATERIALS_CHAPTERS.find(c => c.id === chapterId);
  let html = `
    <div class="back-bar">
      <button class="back-btn" id="materials-chapter-back">← 返回章节</button>
      <span class="back-title">${chapter.title}</span>
    </div>
  `;
  chapter.points.forEach(p => {
    const pdata = generateMaterialsPointData(chapterId, p.id);
    html += `
      <div class="concept-card">
        <h4>${p.title}</h4>
        <p>${pdata.concept}</p>
        ${pdata.formula ? `<div class="formula">${pdata.formula}</div>` : ''}
        <p class="source-label" style="margin-top:12px;margin-bottom:0">${pdata.source}</p>
      </div>
      <div style="margin-bottom:12px">
        <button class="btn-primary btn-mat-practice" data-point="${p.id}" style="width:100%;margin-bottom:10px">${p.title} 练习</button>
      </div>
    `;
  });
  html += `
    <div style="margin-top:10px">
      <button class="btn-primary" id="btn-mat-complete" style="width:100%">完成本章学习</button>
    </div>
  `;
  container.innerHTML = html;
  container.querySelector('#materials-chapter-back').addEventListener('click', () => {
    delete container.dataset.view;
    delete container.dataset.chapter;
    renderMaterialsHome();
  });
  container.querySelectorAll('.btn-mat-practice').forEach(btn => {
    btn.addEventListener('click', () => startMaterialsPractice(chapterId, btn.dataset.point));
  });
  container.querySelector('#btn-mat-complete').addEventListener('click', () => {
    if (!state.materials.completedChapters.includes(chapterId)) {
      state.materials.completedChapters.push(chapterId);
      addXp(30);
      addGems(5);
      state.lessonsToday++;
      showToast('本章完成！+30 XP');
      saveState();
      renderAll();
      renderMaterialsChapter(container, chapterId);
    }
  });
}

function startMaterialsPractice(chapterId, pointId) {
  const pdata = generateMaterialsPointData(chapterId, pointId);
  if (pdata.questions.length === 0) {
    showToast('本题点暂无题目');
    return;
  }
  currentLessonSubject = 'materials';
  currentLessonContext = { type: 'materials-point', chapterId, pointId };
  currentQuestions = shuffleArray(pdata.questions);
  currentQuestionIndex = 0;
  selectedOption = null;
  currentFillAnswer = '';
  lessonHearts = state.hearts;
  lessonXp = 0;
  lessonCorrect = 0;
  answered = false;
  document.getElementById('lesson-screen').classList.add('active');
  const chapter = MATERIALS_CHAPTERS.find(c => c.id === chapterId);
  const point = chapter.points.find(p => p.id === pointId);
  document.getElementById('lesson-title').textContent = point.title;
  document.getElementById('lesson-hearts-val').textContent = lessonHearts;
  renderQuestion();
}

function startMaterialsReview() {
  if (state.materials.mistakes.length === 0) {
    showToast('暂无错题');
    return;
  }
  currentLessonSubject = 'materials';
  currentLessonContext = { type: 'materials-review' };
  currentQuestions = state.materials.mistakes.slice(0, 10).map(m => ({
    type: 'fill',
    question: m.question,
    answer: m.correctAnswer,
    acceptable: [m.correctAnswer],
    explanation: '正确答案：' + m.correctAnswer,
    source: m.source
  }));
  currentQuestionIndex = 0;
  selectedOption = null;
  currentFillAnswer = '';
  lessonHearts = 5;
  lessonXp = 0;
  lessonCorrect = 0;
  answered = false;
  document.getElementById('lesson-screen').classList.add('active');
  document.getElementById('lesson-title').textContent = '错题重练';
  document.getElementById('lesson-hearts-val').textContent = lessonHearts;
  renderQuestion();
}

// ===================== 错题重练（英语） =====================
function startEnglishReview() {
  if (state.english.mistakes.length === 0) {
    showToast('暂无错题');
    return;
  }
  currentLessonSubject = 'english';
  currentLessonContext = { type: 'english-review' };
  currentQuestions = state.english.mistakes.slice(0, 10).map(m => ({
    type: 'multiple',
    question: m.question,
    options: [m.correctAnswer, m.userAnswer || '错误答案', '未掌握', '需复习'],
    answer: 0,
    explanation: '正确答案：' + m.correctAnswer,
    source: m.source
  }));
  currentQuestionIndex = 0;
  selectedOption = null;
  currentFillAnswer = '';
  lessonHearts = 5;
  lessonXp = 0;
  lessonCorrect = 0;
  answered = false;
  document.getElementById('lesson-screen').classList.add('active');
  document.getElementById('lesson-title').textContent = '错题重练';
  document.getElementById('lesson-hearts-val').textContent = lessonHearts;
  renderQuestion();
}

// ===================== 答题界面 =====================
function renderQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  const progress = currentQuestions.length ? ((currentQuestionIndex) / currentQuestions.length) * 100 : 0;
  document.getElementById('lesson-progress-fill').style.width = progress + '%';
  const counterEl = document.getElementById('lesson-counter');
  if (counterEl) {
    counterEl.textContent = currentQuestions.length ? `${currentQuestionIndex + 1}/${currentQuestions.length}` : '';
  }
  document.getElementById('btn-check').disabled = true;
  document.getElementById('btn-check').textContent = '检查';
  answered = false;
  selectedOption = null;
  currentFillAnswer = '';

  const body = document.getElementById('lesson-body');

  if (q.type === 'wordbook') {
    const item = q.data;
    let front = '', back = '', sub = '';
    if (q.itemType === 'word') {
      front = item.word;
      sub = item.phonetic;
      back = `${item.def}<br><br>例句：${item.example}`;
    } else if (q.itemType === 'phrase') {
      front = item.phrase;
      sub = '词组';
      back = `${item.def}<br><br>例句：${item.example}`;
    } else {
      front = item.en;
      sub = '长难句';
      back = `译文：${item.zh}`;
    }
    body.innerHTML = `
      <div class="wordbook-challenge-card" id="wb-card">
        <div class="wb-front">${front}</div>
        <div class="wb-sub">${sub}</div>
        <div class="wb-back">${back}</div>
        <div class="wb-actions" id="wb-actions" style="display:none">
          <button class="btn-hard" data-rating="hard">不认识</button>
          <button class="btn-okay" data-rating="okay">模糊</button>
          <button class="btn-easy" data-rating="easy">认识</button>
        </div>
      </div>
      <p class="source-label" style="margin-top:12px">生词本挑战</p>
    `;
    const card = document.getElementById('wb-card');
    const actions = document.getElementById('wb-actions');
    card.addEventListener('click', () => {
      card.classList.add('revealed');
      actions.style.display = 'flex';
      document.getElementById('btn-check').style.display = 'none';
    });
    actions.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleWordbookRating(q.itemType, item, btn.dataset.rating);
      });
    });
    // 生词本模式不显示检查按钮
    document.getElementById('btn-check').style.display = 'none';
    return;
  }

  document.getElementById('btn-check').style.display = 'block';

  if (q.type === 'multiple') {
    const labels = ['A', 'B', 'C', 'D'];
    body.innerHTML = `
      <div class="question-type-label">选择题</div>
      <div class="question-title">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <div class="option" data-index="${i}">
            <div class="option-letter">${labels[i]}</div>
            <div>${opt}</div>
          </div>
        `).join('')}
      </div>
      <div class="feedback" id="feedback"></div>
      <p class="source-label" style="margin-top:12px">${q.source || '系统练习'}</p>
    `;
    body.querySelectorAll('.option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        body.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        selectedOption = parseInt(opt.dataset.index);
        document.getElementById('btn-check').disabled = false;
      });
    });
  } else if (q.type === 'truefalse') {
    body.innerHTML = `
      <div class="question-type-label">判断题</div>
      <div class="question-title">${q.question}</div>
      <div class="true-false-options">
        <button class="tf-btn" data-value="true">正确</button>
        <button class="tf-btn" data-value="false">错误</button>
      </div>
      <div class="feedback" id="feedback"></div>
      <p class="source-label" style="margin-top:12px">${q.source || '系统练习'}</p>
    `;
    body.querySelectorAll('.tf-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        body.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedOption = btn.dataset.value === 'true';
        document.getElementById('btn-check').disabled = false;
      });
    });
  } else if (q.type === 'fill') {
    body.innerHTML = `
      <div class="question-type-label">填空题</div>
      <div class="question-title">${q.question}</div>
      <input type="text" class="fill-blank-input" id="fill-input" placeholder="输入答案..." autocomplete="off">
      <div class="feedback" id="feedback"></div>
      <p class="source-label" style="margin-top:12px">${q.source || '系统练习'}</p>
    `;
    const input = document.getElementById('fill-input');
    input.addEventListener('input', () => {
      currentFillAnswer = input.value.trim();
      document.getElementById('btn-check').disabled = !currentFillAnswer;
    });
    setTimeout(() => input.focus(), 100);
  }
}

function handleWordbookRating(type, item, rating) {
  const list = type === 'word' ? state.english.wordbook.words : type === 'phrase' ? state.english.wordbook.phrases : state.english.wordbook.sentences;
  const key = type === 'word' ? 'word' : type === 'phrase' ? 'phrase' : 'en';
  const stored = list.find(x => x[key] === item[key]);
  if (stored) {
    if (rating === 'easy') {
      stored.interval = Math.min(stored.interval * 2, 30);
      stored.mastered = true;
      lessonCorrect++;
      lessonXp += 10;
      showToast('认识！+10 XP');
    } else if (rating === 'okay') {
      stored.nextReview = todayStr();
      stored.mastered = false;
      lessonXp += 5;
    } else {
      stored.interval = 1;
      stored.nextReview = todayStr();
      stored.mastered = false;
      lessonHearts--;
      document.getElementById('lesson-hearts-val').textContent = lessonHearts;
    }
  }
  addXp(lessonXp);
  addGems(3);
  state.reviewsToday += 1;
  document.getElementById('lesson-screen').classList.remove('active');
  saveState();
  renderAll();
  showToast('生词本挑战完成');
}

function checkCurrentQuestion() {
  if (answered) {
    nextQuestion();
    return;
  }
  const q = currentQuestions[currentQuestionIndex];
  const body = document.getElementById('lesson-body');
  const feedback = document.getElementById('feedback');
  let isCorrect = false;
  let userAns = '';
  let correctAns = '';

  if (q.type === 'multiple') {
    isCorrect = selectedOption === q.answer;
    userAns = q.options[selectedOption] || '未作答';
    correctAns = q.options[q.answer];
    body.querySelectorAll('.option').forEach((opt, i) => {
      opt.classList.remove('selected');
      if (i === q.answer) opt.classList.add('correct');
      else if (i === selectedOption && !isCorrect) opt.classList.add('wrong');
    });
  } else if (q.type === 'truefalse') {
    isCorrect = selectedOption === q.answer;
    userAns = selectedOption ? '正确' : '错误';
    correctAns = q.answer ? '正确' : '错误';
    body.querySelectorAll('.tf-btn').forEach(btn => {
      const val = btn.dataset.value === 'true';
      btn.classList.remove('selected');
      if (val === q.answer) btn.classList.add('correct');
      else if (val === selectedOption && !isCorrect) btn.classList.add('wrong');
    });
  } else if (q.type === 'fill') {
    isCorrect = checkAnswer(currentFillAnswer, q.answer, q.acceptable || []);
    userAns = currentFillAnswer;
    correctAns = q.answer;
  }

  answered = true;

  if (isCorrect) {
    lessonCorrect++;
    lessonXp += 10;
    if (feedback) {
      feedback.className = 'feedback correct show';
      const tags = (q.tags || []).map(t => `<span class="question-tag">${t}</span>`).join('');
      const exp = q.explanation ? q.explanation.replace(/\\n/g, '<br>') : '';
      feedback.innerHTML = '回答正确！' + (tags ? '<div style="margin:6px 0">' + tags + '</div>' : '') + (exp ? '<div class="explanation">' + exp + '</div>' : '');
    }
  } else {
    lessonHearts--;
    document.getElementById('lesson-hearts-val').textContent = lessonHearts;
    loseHeart();
    addMistake(q, userAns, correctAns, currentLessonSubject);
    if (feedback) {
      feedback.className = 'feedback wrong show';
      const tags = (q.tags || []).map(t => `<span class="question-tag">${t}</span>`).join('');
      const exp = q.explanation ? q.explanation.replace(/\\n/g, '<br>') : '';
      feedback.innerHTML = '回答错误。' + (tags ? '<div style="margin:6px 0">' + tags + '</div>' : '') + (exp ? '<div class="explanation">' + exp + '</div>' : '');
    }
  }

  if (lessonHearts <= 0) {
    document.getElementById('btn-check').textContent = '结束闯关';
  } else if (currentQuestionIndex >= currentQuestions.length - 1) {
    document.getElementById('btn-check').textContent = '查看结果';
  } else {
    document.getElementById('btn-check').textContent = '下一个';
  }

  renderTopStats();
  saveState();
}

function nextQuestion() {
  if (lessonHearts <= 0) {
    showResult(false);
    return;
  }
  if (currentQuestionIndex >= currentQuestions.length - 1) {
    showResult(true);
    return;
  }
  currentQuestionIndex++;
  renderQuestion();
}

function showResult(success) {
  document.getElementById('lesson-screen').classList.remove('active');
  const result = document.getElementById('result-screen');
  result.classList.add('active');

  const ratio = currentQuestions.length ? lessonCorrect / currentQuestions.length : 0;
  let stars = '⭐';
  if (ratio >= 0.5) stars = '⭐⭐';
  if (ratio >= 0.8) stars = '⭐⭐⭐';

  if (!success) {
    document.getElementById('result-title').textContent = '红心耗尽';
    document.getElementById('result-subtitle').textContent = '休息一下，复习后再来挑战';
    document.getElementById('result-stars').textContent = '💔';
  } else {
    document.getElementById('result-title').textContent = '闯关成功！';
    document.getElementById('result-subtitle').textContent = `答对 ${lessonCorrect}/${currentQuestions.length} 题`;
    document.getElementById('result-stars').textContent = stars;

    // 奖励与进度
    if (currentLessonContext.type === 'english-day') {
      const d = currentLessonContext.dayData;
      const key = englishDayKey(d.year, d.day);
      if (!state.english.completedDays.includes(key)) {
        state.english.completedDays.push(key);
        state.english.currentDay = d.day;
        state.english.currentYear = d.year;
      }
      state.lessonsToday++;
      addXp(lessonXp + 20);
      addGems(5 + Math.floor(lessonCorrect / 2));
    } else if (currentLessonContext.type === 'english-review') {
      addXp(lessonXp + 10);
      state.reviewsToday += currentQuestions.length;
      addGems(3);
    } else if (currentLessonContext.type === 'math-point') {
      if (ratio >= 0.6 && !state.math.completedPoints.includes(currentLessonContext.pointId)) {
        state.math.completedPoints.push(currentLessonContext.pointId);
      }
      state.lessonsToday++;
      addXp(lessonXp + 20);
      addGems(5 + Math.floor(lessonCorrect / 2));
    } else if (currentLessonContext.type === 'math-review') {
      addXp(lessonXp + 10);
      state.reviewsToday += currentQuestions.length;
      addGems(3);
      // 复习答对则从昨日错题中移除
      state.math.yesterdayMistakes = state.math.yesterdayMistakes.filter(m => !currentQuestions.some(q => q.question === m.question));
    } else if (currentLessonContext.type === 'materials-point') {
      state.lessonsToday++;
      addXp(lessonXp + 20);
      addGems(5 + Math.floor(lessonCorrect / 2));
    } else if (currentLessonContext.type === 'materials-review') {
      addXp(lessonXp + 10);
      state.reviewsToday += currentQuestions.length;
      addGems(3);
    }
  }

  document.getElementById('result-xp').textContent = '+' + (lessonXp + (currentLessonContext.type.includes('review') || currentLessonContext.type === 'wordbook' ? 10 : 20));
  document.getElementById('result-gems').textContent = '+' + (currentLessonContext.type.includes('review') || currentLessonContext.type === 'wordbook' ? 3 : 5 + Math.floor(lessonCorrect / 2));
  document.getElementById('result-hearts').textContent = lessonHearts + '/5';
  saveState();
  renderAll();
}

function closeLesson() {
  document.getElementById('lesson-screen').classList.remove('active');
}

// ===================== 我的页 =====================
function renderProfile() {
  document.getElementById('profile-xp').textContent = state.xp;
  document.getElementById('profile-streak').textContent = state.streak;
  const completed = (state.english.completedDays.length) + (state.math.completedPoints.length) + (state.materials.completedChapters.length);
  document.getElementById('profile-lessons').textContent = completed;
  const mistakes = state.english.mistakes.length + state.math.mistakes.length + state.math.yesterdayMistakes.length + state.materials.mistakes.length;
  document.getElementById('profile-mistakes').textContent = mistakes;

  let title = '备考新手';
  if (state.xp >= 500) title = '坚持达人';
  if (state.xp >= 1500) title = '考研勇士';
  if (state.xp >= 3000) title = '学霸预备役';
  if (state.xp >= 6000) title = '准研究生';
  document.getElementById('profile-title').textContent = title;

  document.getElementById('daily-goal').value = state.dailyGoal;
  document.getElementById('reminder-time').value = state.reminderTime;
}

// ===================== 提示 =====================
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===================== 事件绑定 =====================
document.addEventListener('DOMContentLoaded', () => {
  initDay();
  renderAll();

  // 底部导航
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('locked')) {
        showToast('政治模块：2027年6月开启');
        return;
      }
      switchPage(btn.dataset.page);
    });
  });

  // 顶部个人入口
  document.getElementById('btn-profile').addEventListener('click', () => switchPage('profile'));

  // 英语工具栏
  document.getElementById('btn-english-wordbook').addEventListener('click', renderWordbook);
  document.getElementById('btn-english-review').addEventListener('click', startEnglishReview);

  // 数学工具栏
  document.getElementById('btn-math-review').addEventListener('click', startMathReview);

  // 材料工具栏
  document.getElementById('btn-materials-review').addEventListener('click', startMaterialsReview);

  // 答题界面
  document.getElementById('btn-check').addEventListener('click', checkCurrentQuestion);
  document.getElementById('lesson-close').addEventListener('click', closeLesson);

  // 结果界面
  document.getElementById('btn-continue').addEventListener('click', () => {
    document.getElementById('result-screen').classList.remove('active');
    renderAll();
  });

  // 单词弹窗
  const wordPopup = document.getElementById('word-popup');
  document.getElementById('word-popup-close').addEventListener('click', hideWordPopup);
  wordPopup.addEventListener('click', (e) => {
    if (e.target === wordPopup) hideWordPopup();
  });
  document.getElementById('word-popup-add').addEventListener('click', () => {
    const word = wordPopup.dataset.word;
    if (word) {
      addWordToWordbook(word);
      hideWordPopup();
      showToast('已加入生词本');
    }
  });
  document.getElementById('word-popup-translate').addEventListener('click', () => {
    const word = wordPopup.dataset.word;
    if (word) {
      openTranslate(word);
      hideWordPopup();
    }
  });

  // 设置
  document.getElementById('daily-goal').addEventListener('change', (e) => {
    state.dailyGoal = parseInt(e.target.value);
    saveState();
  });
  document.getElementById('reminder-time').addEventListener('change', (e) => {
    state.reminderTime = e.target.value;
    saveState();
  });
  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('确定要重置所有学习进度吗？此操作不可恢复。')) {
      resetState();
      showToast('进度已重置');
    }
  });

  // 顶部统计点击补红心
  document.getElementById('stat-hearts').addEventListener('click', () => {
    if (state.hearts < 5 && state.gems >= 10) {
      if (confirm('花费 10 宝石补满红心？')) {
        state.gems -= 10;
        state.hearts = 5;
        saveState();
        renderTopStats();
        showToast('红心已补满');
      }
    }
  });
});