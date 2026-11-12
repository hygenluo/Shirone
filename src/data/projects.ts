/**
 * 开源项目数据源
 * 用于 /projects/ 页面展示
 *
 * 内容依据：均为本站与其仓库中可核实的实际产物 —— 博客站点本身、
 * 文章《AI应用-实战》中实现的 AI 对话应用，以及 2026-10 完成的
 * 内容分离与自动化部署改造。其余个人项目需要你自己补充。
 *
 * 分类键需与 config/projects.yaml 的 categories[].key 一致。
 */

export type ProjectPhase = "shipped" | "building" | "exploring";

export interface ProjectItem {
	enable?: boolean;
	key: string;
	title: string;
	summary: string;
	category: string;
	phase: ProjectPhase;
	technologies: string[];
	icon?: string;
	cover?: string;
	coverAlt?: string;
	featured?: boolean;
	website?: string;
	repository?: string;
	year?: string;
}

export const projectsData: ProjectItem[] = [
	{
		key: "hyblog",
		title: "HyBlog 个人博客",
		summary:
			"基于 Astro 的静态个人博客。2026-10 迁移到 Shirone 主题，并改造为「内容与模板分离」的双仓结构：文章、配置与媒体资源放进独立的私有内容仓，主题代码单独公开，内容推送后由托管平台自动重建发布。",
		category: "web",
		phase: "shipped",
		technologies: ["Astro", "Svelte", "TypeScript", "Tailwind CSS", "pnpm"],
		icon: "material-symbols:web-rounded",
		featured: true,
		website: "https://www.hygen.red/",
		repository: "https://github.com/hygenluo/Shirone",
		year: "2025",
	},
	{
		key: "ai-companion",
		title: "AI 智能伴侣",
		summary:
			"用 Streamlit 快速搭建交互界面、接入 DeepSeek 大模型 API 的对话应用，作为 Python 与 LLM 应用方向的入门实战。",
		category: "web",
		phase: "shipped",
		technologies: ["Python", "Streamlit", "DeepSeek API"],
		icon: "material-symbols:smart-toy-rounded",
		year: "2026",
	},
	{
		key: "content-pipeline",
		title: "博客内容分离与自动化部署",
		summary:
			"把内容与主题代码拆成两个仓库：私有内容仓保存文章与配置，公开主题仓只保留代码。内容推送经 GitHub Actions 校验后触发托管平台以源码模式重建，构建期按令牌拉取私有内容，全流程无需本地构建。",
		category: "tool",
		phase: "shipped",
		technologies: ["GitHub Actions", "Vercel", "Astro", "YAML"],
		icon: "material-symbols:rocket-launch-rounded",
		repository: "https://github.com/hygenluo/Shirone",
		year: "2026",
	},
];
