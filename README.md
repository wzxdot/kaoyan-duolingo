# 考研闯关 App V2

一款仿多邻国（Duolingo）的考研学习 App 前端原型 V2，按框架 `framework-v2-detail.md` 升级，采用「四科目底部导航 + 顶部个人入口」结构，支持 PWA 离线使用。

## 主要升级内容

### 1. 导航与首页

- 底部导航改为四个科目入口：**英语一**、**数学二**、**政治**、**材料（832）**。
- 政治模块当前锁定，点击提示 **「2027年6月开启」**。
- 顶部状态栏保留连胜、XP、红心、宝石，右上角新增 **我的 / 设置** 入口。

### 2. 英语一模块

- 年份范围：**2026 年倒序至 1998 年**，共 29 年。
- 每年真题按 **14 天周期** 推进：
  - 第 1-2 天：Reading Text1（第 2 天复习）
  - 第 3-4 天：Reading Text2（第 4 天复习）
  - 第 5-6 天：Reading Text3（第 6 天复习）
  - 第 7-8 天：Reading Text4（第 8 天复习）
  - 第 9-10 天：翻译（第 10 天复习）
  - 第 11-12 天：完形填空（第 12 天复习）
  - 第 13-14 天：新题型（第 14 天复习）
- 每个学习日包含：**核心词汇、重点词组、长难句拆解、真题演练**。
- 复习日只做词汇/词组/句子复习，**不做新真题**。
- 生词本：Duolingo 式闯关路径，支持「认识 / 模糊 / 不认识」评级，自动调整复习间隔。
- 交互：点击句子查看翻译，**长按英文单词查词并加入生词本**。
- 英语题目均标注来源：**示例真题-扇贝考研风格**。

### 3. 数学二模块

- 按 **张宇考研数学二 2026 版章节** 构建学习路径，共 12 章，包含 **数列极限**。
- 每章细分知识点，提供：
  - 概念卡片
  - 定理 / 公式
  - 张宇 1000 题风格练习题
- 错题自动归入错题本，**第二天自动推送昨日错题**进行复习。
- 题目来源标注：**张宇《考研数学二 2026》1000 题风格示例**。

### 4. 材料科学基础（832）模块

- 按畅研西工大 832 课程划分为 **9 章**：
  1. 工程材料中的原子排列
  2. 材料中的相结构
  3. 凝固
  4. 相图
  5. 材料中的扩散
  6. 塑性变形
  7. 回复与再结晶
  8. 固态相变
  9. 复合效应与界面
- 每章知识点包含：概念卡、判断题、简答题、计算题。
- 题目灵感参考：刘智恩《材料科学基础》第6版、《材料科学基础导教导学导考》，并在页面中明确标注来源。

### 5. 通用功能

- **来源标注**：每道题目均显示 `source` 字段，明确数据来源。
- **XP / 红心 / 宝石 / 连胜**：保留完整游戏化系统。
- **localStorage 持久化**：学习进度、错题、生词本、每日任务自动保存。
- **PWA**：保留 `manifest.json` 与 `service-worker.js`，支持添加到手机桌面与离线缓存。
- **移动优先**：适配小米等 Android 手机浏览器与 PWA。

## 使用方式

### 方式一：直接打开

用现代浏览器直接打开 `index.html` 即可运行。

### 方式二：本地服务器（推荐）

```bash
cd kaoyan-duolingo
python -m http.server 8080
```

然后访问 http://localhost:8080

### 方式三：小米手机使用

1. 电脑启动本地服务器（见方式二）。
2. 查看电脑局域网 IP（如 `192.168.1.5`）。
3. 小米手机连接同一 WiFi，浏览器访问 `http://192.168.1.5:8080`。
4. 点击浏览器菜单 → **添加到桌面 / 添加到主屏幕**，即可像原生 App 一样使用。

### 方式四：GitHub Pages 静态托管（推荐长期方案）

已内置 `.github/workflows/deploy.yml`，推送后即可自动部署。

1. 在 GitHub 新建仓库（如 `kaoyan-duolingo`）。
2. 把当前 `kaoyan-duolingo` 文件夹内所有文件 push 到仓库根目录。
3. 进入仓库 Settings → Pages → Source 选择 **GitHub Actions**。
4. 等待 Actions 运行完成，访问 `https://你的用户名.github.io/kaoyan-duolingo/`。
5. 小米手机用浏览器打开该链接，添加到桌面即可使用。

> 如需国内访问更快，可改用 Netlify / Vercel / Cloudflare Pages，上传同样一套静态文件即可。

### 方式五：生成 Android APK（小米手机直接安装）

已内置 Capacitor Android 工程与 GitHub Actions 自动打包工作流。

1. 把当前 `kaoyan-duolingo` 文件夹内所有文件 push 到 GitHub 仓库根目录。
2. 进入仓库 Actions → 选择 **Build Android APK** → **Run workflow**。
3. 等待约 3-5 分钟，工作流完成后在 Artifacts 中下载 `kaoyan-duolingo-apk.zip`。
4. 解压得到 `app-debug.apk`，发送到小米手机安装即可（需在设置中允许“安装未知来源应用”）。

> 也可以本地用 Android Studio 打开 `android/` 文件夹，直接构建签名 APK。

## 项目结构

```
kaoyan-duolingo/
├── index.html          # 主页面（四科目入口、学习界面、弹窗）
├── styles.css          # 移动端优先样式
├── app.js              # 数据、状态、渲染、答题逻辑
├── manifest.json       # PWA 配置
├── service-worker.js   # 离线缓存
├── www/                # Capacitor 打包用的静态资源
├── android/            # Capacitor Android 工程
├── package.json        # Capacitor 依赖
├── capacitor.config.json
├── .github/workflows/  # GitHub Pages 部署 + APK 自动打包
└── README.md           # 本说明
```

## 数据来源说明

本版本为前端演示原型，题目内容均为基于考纲与教材知识点原创的示例题，并明确标注来源：

- 英语一：**示例真题-扇贝考研风格**
- 数学二：**张宇《考研数学二 2026》1000 题风格示例**
- 材料 832：**参考刘智恩《材料科学基础》第6版示例** / **参考《材料科学基础导教导学导考》示例**
- 政治：待 2027 年 6 月后根据最新大纲与时政上线

上线真实考研真题需使用合法授权资料，可在 `app.js` 中替换示例数据为正式题库。

## 本地存储结构

```json
{
  "xp": 0,
  "gems": 0,
  "hearts": 5,
  "streak": 0,
  "english": {
    "currentYear": 2026,
    "currentDay": 1,
    "completedDays": [],
    "wordbook": { "words": [], "phrases": [], "sentences": [] },
    "mistakes": []
  },
  "math": {
    "currentChapter": "math-limit",
    "currentPoint": "ml-1",
    "completedPoints": [],
    "mistakes": [],
    "yesterdayMistakes": []
  },
  "politics": { "locked": true, "unlockDate": "2027-06-01" },
  "materials": {
    "currentChapter": "mat-atom",
    "completedChapters": [],
    "mistakes": []
  }
}
```

## 开发与扩展

- 所有题目数据集中在 `app.js`，可直接修改数据生成函数扩展题库。
- 更换正式真题时，保持题目对象包含 `type`、`question`、`answer`、`explanation`、`source` 字段即可。
- 样式使用 CSS 变量，可统一调整主题色。
