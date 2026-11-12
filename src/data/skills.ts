/**
 * 技能图谱数据源
 * 用于 /skills/ 页面展示
 *
 * 内容依据：本站 2025-11 ~ 2026-07 的 51 篇文章所覆盖的实际主题
 * （LangGraph 源码专题、Transformer、Python 系列、FastAPI、Streamlit、
 * LeetCode Hot 100 与 DSA 题解、开源参与、站点构建与部署）。
 * 熟练度为按文章深度给的估计值，可随时自行调整。
 *
 * 分类键需与 config/skills.yaml 的 categories[].key 一致。
 */

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface SkillItem {
	enable?: boolean;
	name: string;
	description?: string;
	icon?: string;
	category: string;
	level: SkillLevel;
}

export const skillsData: SkillItem[] = [
	// ── AI / 大模型 ─────────────────────────────────────────────
	{
		name: "LangGraph",
		description:
			"从底层原理、源码解析到 State 状态模式、Router 路由与 Tool Calling 的源码级梳理，能搭建多节点 Agent 工作流。",
		icon: "material-symbols:hub",
		category: "ai",
		level: "advanced",
	},
	{
		name: "LLM 应用开发",
		description:
			"Agent / RAG 方向的工程实践：提示组织、工具调用、多轮问答流程编排与模型接入。",
		icon: "material-symbols:smart-toy-rounded",
		category: "ai",
		level: "intermediate",
	},
	{
		name: "Transformer 与注意力机制",
		description:
			"从自注意力、多头机制到位置编码的入门梳理，理解主流大模型的骨架结构。",
		icon: "material-symbols:memory",
		category: "ai",
		level: "intermediate",
	},
	{
		name: "机器学习基础",
		description: "K-Means 聚类等经典算法的原理理解与手写实现。",
		icon: "material-symbols:scatter-plot-rounded",
		category: "ai",
		level: "intermediate",
	},

	// ── 后端与脚本 ──────────────────────────────────────────────
	{
		name: "Python",
		description:
			"语言核心语法（数据模型、流程控制、容器、函数、模块、面向对象）与 AI 应用方向的脚本开发。",
		icon: "simple-icons:python",
		category: "backend",
		level: "advanced",
	},
	{
		name: "FastAPI",
		description: "接口服务的路由、参数校验与依赖注入，能独立完成入门级 API 项目。",
		icon: "simple-icons:fastapi",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Streamlit",
		description: "用极少代码把脚本变成交互式 Web 应用，用于数据展示与 AI 应用原型。",
		icon: "material-symbols:widgets-rounded",
		category: "backend",
		level: "intermediate",
	},

	// ── 算法与数据结构 ──────────────────────────────────────────
	{
		name: "数据结构与算法",
		description:
			"约 34 篇题解积累，覆盖哈希表、链表、栈与队列、矩阵、排序与模拟等常规题型。",
		icon: "material-symbols:code-rounded",
		category: "algorithms",
		level: "advanced",
	},
	{
		name: "双指针与滑动窗口",
		description:
			"高频题型的模式化掌握：对撞指针、快慢指针、定长与变长窗口及其边界处理。",
		icon: "material-symbols:swap-horiz-rounded",
		category: "algorithms",
		level: "advanced",
	},
	{
		name: "动态规划与前缀和",
		description:
			"状态定义与转移推导、区间求和优化，含 Kadane 等专题的完整推导笔记。",
		icon: "material-symbols:trending-up-rounded",
		category: "algorithms",
		level: "intermediate",
	},

	// ── 前端与建站 ──────────────────────────────────────────────
	{
		name: "Astro",
		description:
			"本站的构建框架：内容集合、静态路由、岛屿架构与构建期资源优化。",
		icon: "simple-icons:astro",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "TypeScript",
		description: "站点数据实体与配置的类型约束，按强类型契约维护内容层结构。",
		icon: "simple-icons:typescript",
		category: "frontend",
		level: "intermediate",
	},

	// ── 工具与协作 ──────────────────────────────────────────────
	{
		name: "Markdown 与技术写作",
		description:
			"持续输出 50 余篇结构化技术笔记，习惯把原理讲清再落笔。",
		icon: "simple-icons:markdown",
		category: "tooling",
		level: "advanced",
	},
	{
		name: "Git 与开源协作",
		description: "分支与提交流程、上游同步、PR 参与方式，以及多仓协作的日常操作。",
		icon: "simple-icons:git",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "静态站点构建与 CI/CD",
		description:
			"内容与模板分仓管理，GitHub Actions 校验与派发、托管平台源码模式构建与部署钩子联动。",
		icon: "material-symbols:rocket-launch-rounded",
		category: "tooling",
		level: "intermediate",
	},
];
