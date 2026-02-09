<div align="center">
  <img width="455" alt="Magic Resume Logo" src="./public/magic-resume-logo.png">
  
  <p><strong>基于 AI 的全流程智能求职助手</strong></p>
  <p>🚀 毕业设计项目展示</p>
  
  [![License](https://img.shields.io/github/license/LinMoQC/Magic-Resume?style=flat-square)](https://github.com/LinMoQC/Magic-Resume/blob/master/LICENSE) [![Stars](https://img.shields.io/github/stars/LinMoQC/Magic-Resume?style=flat-square)](https://github.com/LinMoQC/Magic-Resume/stargazers)
</div>

---

## 🌟 项目简介

**Magic Resume** 是一款融合了前沿 AI 技术的全流程智能求职辅助系统。不同于传统的简历编辑器，本项目利用大语言模型（LLM）和检索增强生成（RAG）技术，为求职者提供从**简历撰写**、**内容优化**、**职业规划**到**面试准备**的一站式解决方案。

本项目基于 **Next.js 14** 全栈开发，集成了 OpenAI/LangChain 等 AI 能力，旨在解决求职过程中“简历针对性差”、“职业规划迷茫”、“面试准备不足”等核心痛点。

---

## ✨ 核心功能 (AI Lab)

除了基础的简历编辑功能外，本项目独创了 **AI Lab (AI 实验室)**，包含四大核心模块：

### 1. 🤖 简历智能优化 (Smart Optimization)
- **深度分析**: 根据目标职位描述 (JD)，自动分析简历与岗位的匹配度。
- **针对性重写**: AI 自动优化简历中的经历描述，使其更符合 JD 要求，突出核心竞争力。
- **Lighthouse 式评分**: 提供多维度的简历健康度分析报告（影响力、清晰度、量化成果等）。

### 2. 🗺️ 职业路径规划 (Career Path Planner)
- **技能差距分析**: 通过雷达图直观展示当前能力与目标职位的差距。
- **智能推断**: 支持自动推断适合的职业发展方向。
- **学习路径推荐**: 生成定制化的学习计划，帮助用户弥补技能短板。

### 3. 💬 AI 模拟面试官 (Mock Interview)
- **沉浸式体验**: AI 化身严厉面试官，基于简历和 JD 进行多轮技术/行为面试。
- **语音交互**: 支持语音输入与 AI 语音回复 (TTS/STT)，还原真实面试场景。
- **实时反馈**: 对用户的回答进行点评，并提供改进建议。

### 4. ✉️ 智能求职信 (Cover Letter Generator)
- **一键生成**: 只需提供 JD，即可生成语气得体、重点突出的求职信。
- **高度定制**: 自动提取简历亮点并与职位要求进行关联。

---

## 🏗️ 技术架构

<div align="center">

| 分类 | 技术栈 |
|------|-------|
| **前端框架** | Next.js 14 (App Router) · React 18 · TypeScript |
| **UI 设计** | Tailwind CSS · Radix UI · shadcn/ui · Framer Motion · Recharts (可视化) |
| **AI 引擎** | LangChain · OpenAI API · Tavily Search (联网搜索) |
| **数据存储** | Zustand (状态管理) · IndexedDB (本地存储) |
| **编辑器** | Tiptap (富文本) · Dnd Kit (拖拽交互) |
| **工具链** | ESLint · Husky · Zod · Speech API |

</div>

## 📁 项目结构

```
resume/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── dashboard/          # 仪表盘与编辑器核心
│   │   │   └── edit/           
│   │   │       └── _components/
│   │   │           └── AiLab/  # AI 实验室核心组件 (面试/规划/优化)
│   ├── lib/                    # 工具库
│   │   └── aiLab/              # AI Agent 定义 (LangChain)
│   ├── prompts/                # AI 提示词工程 (Prompt Engineering)
│   ├── store/                  # 状态管理
│   └── locales/                # 国际化配置
└── public/                     # 静态资源
```

## 🚀 快速开始

### 📦 安装与配置

```bash
# 1. 克隆项目
git clone https://github.com/your-username/magic-resume.git
cd magic-resume

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.local.example .env.local
```

### 🔑 环境变量配置

在 `.env.local` 中填入以下核心配置：

```env
# Clerk 认证 (必需)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# AI 能力 (必需)
OPENAI_API_KEY=sk-...
# 或者使用本地 Ollama
# OPENAI_BASE_URL=http://localhost:11434/v1

# 联网搜索 (可选，用于职业调研)
TAVILY_API_KEY=tvly-...
```

### 🏃‍♂️ 运行项目

```bash
# 开发环境启动
npm run dev

# 打开浏览器访问 http://localhost:3000
```

## 📸 功能预览

<div align="center">
<table>
  <tr>
    <td align="center" width="50%"><strong>🤖 模拟面试</strong></td>
    <td align="center" width="50%"><strong>🗺️ 职业规划</strong></td>
  </tr>
  <tr>
    <td align="center">实时语音交互，沉浸式面试体验</td>
    <td align="center">技能雷达图与学习路径推荐</td>
  </tr>
  <tr>
    <td align="center" width="50%"><strong>✉️ 智能求职信</strong></td>
    <td align="center" width="50%"><strong>📊 简历分析</strong></td>
  </tr>
  <tr>
    <td align="center">一键生成高质量求职信</td>
    <td align="center">多维度简历健康度评分</td>
  </tr>
</table>
</div>

---

## 📄 毕业设计创新点总结

1.  **AI 驱动的全链路闭环**：不仅仅是写简历，更延伸至职业规划和面试准备，形成完整的求职辅助闭环。
2.  **多模态交互**：引入语音识别与合成技术，实现了从“文本交互”到“语音交互”的跨越。
3.  **数据可视化应用**：通过雷达图等图表技术，将抽象的“技能差距”具象化，提升了用户体验。
4.  **Agent 架构实践**：基于 LangChain 构建了多个垂直领域的 AI Agent（面试官 Agent、规划师 Agent、写作 Agent），展示了 LLM 在特定场景下的应用能力。

---

## 🤝 参与贡献

欢迎提交 Issue 或 Pull Request 来改进这个项目！

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源协议。

<div align="center">
  <p>Made with ❤️ for Job Seekers</p>
</div>
