/**
 * 大事记时间线数据源
 * 用于 /timeline/ 页面展示
 *
 * 内容依据：均为可核实的站点与写作里程碑 —— 站点启用日期取自原站点配置
 * （2025-11-02），其余节点的日期与主题取自本站 51 篇文章的发布时间与内容。
 * 学历与工作经历一类无从核实的信息没有编造，需要时请自行补充。
 *
 * 分类键需与 config/timeline.yaml 的 categories[].key 一致。
 */

export interface TimelineLink {
	label: string;
	url: string;
	icon?: string;
}

export interface TimelineItem {
	enable?: boolean;
	title: string;
	date: string;
	category?: string;
	subtitle?: string;
	location?: string;
	description?: string;
	highlights?: string[];
	tags?: string[];
	links?: TimelineLink[];
	icon?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		title: "站点启用",
		date: "2025.11",
		category: "project",
		subtitle: "个人博客上线",
		description:
			"启用个人站点作为技术笔记与学习记录的归档地，配上归档、分类、标签与全文搜索。",
		highlights: ["确定站点定位：以技术笔记为主", "建立文章归档与分类结构"],
		tags: ["Astro", "博客"],
		icon: "material-symbols:rocket-launch-rounded",
	},
	{
		title: "LangGraph 源码级专题（6 篇）",
		date: "2025.11",
		category: "achievement",
		subtitle: "AI / 大模型",
		description:
			"从底层构建原理、源码解析一路写到 State 状态模式、Router 路由与 Tool Calling，并完成一次接入大模型做问答流程的实战。",
		highlights: [
			"梳理图执行机制与状态传递",
			"覆盖条件边、结构化输出与工具调用",
			"完成接入大模型的问答流程实战",
		],
		tags: ["LangGraph", "Agent", "LLM"],
		icon: "material-symbols:hub",
		featured: true,
	},
	{
		title: "算法题解起步（DSA）",
		date: "2025.11 ~ 2025.12",
		category: "achievement",
		subtitle: "算法与数据结构",
		description:
			"开始系统记录 LeetCode 与笔试算法题解，覆盖双指针、滑动窗口、哈希表、栈等常规题型，并补充开源参与与 FastAPI 的实践笔记。",
		highlights: ["形成「题目描述 → 思路 → 代码 → 复杂度」的固定写法"],
		tags: ["算法", "LeetCode", "FastAPI"],
		icon: "material-symbols:code-rounded",
	},
	{
		title: "Python 核心语法系列（6 篇）+ AI 应用实战",
		date: "2026.05",
		category: "achievement",
		subtitle: "Python 工程",
		description:
			"系统整理 Python 核心语法（数据模型、流程控制、容器、函数、模块、面向对象），并以 Streamlit 搭配 DeepSeek 完成一个 AI 对话应用作为收尾实战。",
		highlights: ["语法系列成体系，便于回查", "用 Streamlit 把脚本变成可交互应用"],
		tags: ["Python", "Streamlit", "DeepSeek"],
		icon: "simple-icons:python",
	},
	{
		title: "LeetCode Hot 100 专题（18 篇）",
		date: "2026.06 ~ 2026.07",
		category: "achievement",
		subtitle: "算法与数据结构",
		description:
			"按哈希、双指针、滑动窗口、子串、普通数组、矩阵分类推进 Hot 100，中途补充 Kadane 算法等专题推导。",
		highlights: [
			"覆盖 Hot 100 六大类题型",
			"为动态规划与滑动窗口建立模式化模板",
		],
		tags: ["算法", "hot100", "动态规划"],
		icon: "material-symbols:swap-horiz-rounded",
	},
	{
		title: "站点迁移：内容与模板分离",
		date: "2026.10",
		category: "project",
		subtitle: "工程改造",
		description:
			"博客从单仓结构切换到双仓架构——文章、配置与媒体资源存放在独立的内容仓并设为私有，主题代码单独公开；构建由托管平台以源码模式完成，内容推送后自动触发部署。",
		highlights: [
			"51 篇文章与全部媒体资源无损迁移",
			"私有内容仓 + 公开主题仓，主题可随时跟随上游更新",
			"推送内容即自动构建发布，无需本地构建",
		],
		tags: ["Astro", "GitHub Actions", "Vercel"],
		links: [
			{
				label: "主题代码仓",
				url: "https://github.com/hygenluo/Shirone",
				icon: "fa7-brands:github",
			},
			{
				label: "站点",
				url: "https://www.hygen.red/",
				icon: "material-symbols:language",
			},
		],
		icon: "material-symbols:rocket-launch-rounded",
		featured: true,
	},
];
