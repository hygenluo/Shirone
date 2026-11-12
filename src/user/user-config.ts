/**
 * 用户配置覆盖层（由 `pnpm content:sync` 生成，请勿手工编辑）。
 *
 * 内容来自内容仓的以下文件，改配置请改那边：
 * - config/site.yaml
 * - config/permalink.yaml
 * - config/profile.yaml
 * - config/license.yaml
 * - config/expressive-code.yaml
 * - config/announcement.yaml
 * - config/post-list.yaml
 * - config/article.yaml
 * - config/comment.yaml
 * - config/context-menu.yaml
 * - config/fab.yaml
 * - config/sidebar.yaml
 * - config/footer.yaml
 * - config/image-bloom.yaml
 * - config/skills.yaml
 * - config/projects.yaml
 * - config/timeline.yaml
 * - config/devices.yaml
 * - config/games.yaml
 * - config/music.yaml
 * - config/anime.yaml
 * - config/font.yaml
 * - config/llms.yaml
 * - config/umami.yaml
 * - config/compass.yaml
 * - config/series.yaml
 * - config/nav-bar.yaml
 *
 * 每个领域的类型标注让 `tsc` 直接校验用户配置：拼错的键、越界的枚举、填错的类型
 * 都会在这里报错，错误信息里的行号可以对回上面的 YAML 文件。
 */

import type { AnimeConfig } from "@/types/animeConfig";
import type { AnnouncementConfig } from "@/types/announcementConfig";
import type { ArticleConfig } from "@/types/articleConfig";
import type { CommentConfig } from "@/types/commentConfig";
import type { CompassConfig } from "@/types/compassConfig";
import type { ExpressiveCodeConfig, LicenseConfig, ProfileConfig, SiteConfig } from "@/types/config";
import type { ContextMenuConfig } from "@/types/contextMenuConfig";
import type { DevicesConfig } from "@/types/devicesConfig";
import type { FabConfig } from "@/types/fabConfig";
import type { FontConfig } from "@/types/fontConfig";
import type { FooterConfig } from "@/types/footerConfig";
import type { GamesConfig } from "@/types/gamesConfig";
import type { ImageBloomConfig } from "@/types/imageBloomConfig";
import type { LlmsConfig } from "@/types/llmsConfig";
import type { MusicConfig } from "@/types/musicConfig";
import type { NavBarConfigOverride } from "@/types/navBarConfig";
import type { PermalinkConfig } from "@/types/permalinkConfig";
import type { PostListConfig } from "@/types/postListConfig";
import type { ProjectsConfig } from "@/types/projectsConfig";
import type { SeriesConfig } from "@/types/seriesConfig";
import type { SidebarConfig } from "@/types/sidebarConfig";
import type { SkillsConfig } from "@/types/skillsConfig";
import type { TimelineConfig } from "@/types/timelineConfig";
import type { UmamiConfig } from "@/types/umamiConfig";

/**
 * 用户只需要写想改的键，因此每个领域都按「深度可选」校验。
 *
 * 数组保持原类型不放宽：清单类配置（侧栏 widget、社交链接）的覆盖语义是整体替换，
 * 半个元素没有意义，而且保留完整类型才能让判别联合的 `type` 字段继续生效。
 */
type DeepPartial<T> = T extends readonly unknown[]
	? T
	: T extends object
		? { [K in keyof T]?: DeepPartial<T[K]> }
		: T;

// config/site.yaml
const site: DeepPartial<SiteConfig> = {
	site: "https://www.hygen.red/",
	base: "/",
	title: "HyBlog",
	subtitle: "A Blog belonging to Hygen",
	lang: "zh_CN",
	timeZone: "Asia/Shanghai",
	topAppBar: {
		contentAlign: "center",
	},
	displaySettings: {
		colorStyle: true,
		colorSpec: true,
		wallpaperMode: true,
		layoutMode: true,
		reduceMotion: true,
		texture: true,
	},
	themeColor: {
		hue: 60,
		fixed: false,
		style: "tonalSpot",
		spec: "2025",
	},
	wallpaperMode: {
		defaultMode: "banner",
	},
	texture: {
		enable: true,
		defaultPreset: "starlight",
		defaultOpacity: 0.12,
		allowMotion: true,
	},
	banner: {
		src: {
			desktop: [
				"assets/images/banner/desktop/1.webp",
				"assets/images/banner/desktop/2.webp",
				"assets/images/banner/desktop/3.webp",
				"assets/images/banner/desktop/4.webp",
				"assets/images/banner/desktop/5.webp",
				"assets/images/banner/desktop/6.webp",
			],
			mobile: [
				"assets/images/banner/mobile/1.webp",
				"assets/images/banner/mobile/2.webp",
				"assets/images/banner/mobile/3.webp",
				"assets/images/banner/mobile/4.webp",
				"assets/images/banner/mobile/5.webp",
				"assets/images/banner/mobile/6.webp",
			],
		},
		position: "center",
		dim: {
			enable: true,
			opacity: 0.24,
		},
		homeText: {
			enable: true,
			title: "Hygen's Blog",
			subtitle: [
				"大道至简",
				"Always on the road.",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
				loop: true,
			},
		},
		carousel: {
			enable: true,
			interval: 3000,
			fadeDuration: 1200,
			animation: "ken-burns",
		},
		waves: {
			enable: true,
		},
	},
	imageOptimization: {
		noReferrerDomains: [
			"*.hdslb.com",
		],
	},
	toc: {
		enable: true,
		depth: 2,
	},
	progressIndicator: {
		style: "dual",
	},
	favicon: [],
};

// config/permalink.yaml
const permalink: DeepPartial<PermalinkConfig> = {
	enable: false,
	format: "%postname%",
};

// config/profile.yaml
const profile: DeepPartial<ProfileConfig> = {
	avatar: "assets/images/avatar.webp",
	name: "Hygen",
	bio: "温馨小屋",
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/177022500/dynamic",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/hygenluo",
		},
	],
};

// config/license.yaml
const license: DeepPartial<LicenseConfig> = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// config/expressive-code.yaml
const expressiveCode: DeepPartial<ExpressiveCodeConfig> = {
	theme: "github-dark",
	lightTheme: "github-light",
	darkTheme: "github-dark",
};

// config/announcement.yaml
const announcement: DeepPartial<AnnouncementConfig> = {
	title: "",
	content: "This is my home.",
	closable: true,
	link: {
		enable: true,
		text: "Learn More",
		url: "/about/",
		external: false,
	},
};

// config/post-list.yaml
const postList: DeepPartial<PostListConfig> = {
	pageSize: 8,
	layout: {
		mode: "list",
		cover: "right",
		cardWidth: "regular",
	},
};

// config/article.yaml
const article: DeepPartial<ArticleConfig> = {
	lastUpdated: {
		enable: true,
		minimumAgeDays: 90,
	},
	discovery: {
		enable: true,
		related: {
			enable: true,
			count: 5,
		},
		random: {
			enable: true,
			count: 5,
		},
	},
	share: {
		enable: true,
		includeCover: true,
	},
};

// config/comment.yaml
const comment: DeepPartial<CommentConfig> = {
	enable: false,
	provider: "twikoo",
	lazy: true,
	twikoo: {
		envId: "https://twikoo.vercel.app",
		scriptUrl: "https://cdn.jsdelivr.net/npm/twikoo@1.7.20/dist/twikoo.min.js",
		lang: "zh-CN",
		placeholder: "Share your thoughts...",
	},
	giscus: {
		repo: "",
		repoId: "",
		category: "Announcements",
		categoryId: "",
		mapping: "pathname",
		strict: false,
		reactionsEnabled: true,
		emitMetadata: false,
		inputPosition: "bottom",
		theme: {
			light: "light",
			dark: "dark",
		},
		lang: "auto",
		scriptUrl: "https://giscus.app/client.js",
	},
};

// config/context-menu.yaml
const contextMenu: DeepPartial<ContextMenuConfig> = {
	enable: true,
	actions: [
		"copySelection",
		"backToTop",
		"sharePageLink",
	],
};

// config/fab.yaml
const fab: DeepPartial<FabConfig> = {
	enable: true,
	align: "end",
	size: "regular",
	offset: {
		bottom: "var(--m3e-space-8)",
		right: "var(--m3e-space-6)",
	},
	items: [
		{
			type: "top",
			enable: true,
			devices: [
				"mobile",
				"tablet",
				"desktop",
			],
		},
		{
			type: "toc",
			enable: true,
			devices: [
				"mobile",
				"tablet",
			],
			pages: [
				"post",
			],
			depth: 3,
			closeOnSelect: true,
		},
		{
			type: "comment",
			enable: true,
			devices: [
				"mobile",
				"tablet",
			],
			pages: [
				"post",
			],
		},
		{
			type: "home",
			enable: true,
			devices: [
				"mobile",
				"tablet",
			],
			onlySubPages: true,
		},
	],
};

// config/sidebar.yaml
const sidebar: DeepPartial<SidebarConfig> = {
	enable: true,
	arrangement: "dual",
	side: "left",
	components: [
		{
			type: "profile",
			enable: true,
			slot: "top",
		},
		{
			type: "announcement",
			enable: true,
			slot: "top",
		},
		{
			type: "tags",
			enable: true,
			slot: "top",
			collapseAfter: 20,
		},
		{
			type: "toc",
			enable: true,
			slot: "sticky",
		},
		{
			type: "stats",
			enable: true,
			slot: "top",
			column: "secondary",
		},
		{
			type: "calendar",
			enable: true,
			slot: "top",
			column: "secondary",
		},
		{
			type: "categories",
			enable: true,
			slot: "sticky",
			column: "secondary",
			collapseAfter: 5,
		},
		{
			type: "music",
			enable: true,
			slot: "sticky",
			column: "secondary",
		},
	],
};

// config/footer.yaml
const footer: DeepPartial<FooterConfig> = {
	enable: false,
};

// config/image-bloom.yaml
const imageBloom: DeepPartial<ImageBloomConfig> = {
	enable: true,
	blurRadius: 20,
	opacity: 0.7,
	transitionDuration: 300,
};

// config/skills.yaml
const skills: DeepPartial<SkillsConfig> = {
	enable: true,
	categories: [
		{
			key: "ai",
			label: "AI / 大模型",
			icon: "material-symbols:neurology-rounded",
		},
		{
			key: "backend",
			label: "后端与脚本",
			icon: "material-symbols:dns-rounded",
		},
		{
			key: "algorithms",
			label: "算法与数据结构",
			icon: "material-symbols:account-tree-rounded",
		},
		{
			key: "frontend",
			label: "前端与建站",
			icon: "material-symbols:web-rounded",
		},
		{
			key: "tooling",
			label: "工具与协作",
			icon: "material-symbols:construction-rounded",
		},
	],
};

// config/projects.yaml
const projects: DeepPartial<ProjectsConfig> = {
	enable: true,
	categories: [
		{
			key: "web",
			label: "站点与应用",
			icon: "material-symbols:web-rounded",
		},
		{
			key: "tool",
			label: "工具与工程",
			icon: "material-symbols:construction-rounded",
		},
	],
};

// config/timeline.yaml
const timeline: DeepPartial<TimelineConfig> = {
	enable: true,
	categories: [
		{
			key: "project",
			label: "项目",
			icon: "material-symbols:code-rounded",
		},
		{
			key: "achievement",
			label: "里程碑",
			icon: "material-symbols:trophy-rounded",
		},
	],
	order: "desc",
};

// config/devices.yaml
const devices: DeepPartial<DevicesConfig> = {
	enable: false,
	categories: [
		{
			key: "mobile",
			label: "移动便携",
			icon: "material-symbols:phone-iphone",
			description: "随身电子设备与便携数码",
		},
		{
			key: "network",
			label: "网络设备",
			icon: "material-symbols:router-rounded",
			description: "路由器与家庭网络设备",
		},
	],
};

// config/games.yaml
const games: DeepPartial<GamesConfig> = {
	enable: false,
	categories: [
		{
			key: "open-world",
			label: "开放世界",
			icon: "material-symbols:explore-outline-rounded",
			description: "广袤世界的探索与冒险",
		},
		{
			key: "sandbox",
			label: "沙盒建造",
			icon: "material-symbols:widgets-rounded",
			description: "自由建造与生存创造",
		},
		{
			key: "rpg",
			label: "角色扮演",
			icon: "material-symbols:shield-outline-rounded",
			description: "剧情驱动的角色扮演",
		},
		{
			key: "action",
			label: "动作格斗",
			icon: "material-symbols:swords-outline-rounded",
			description: "动作、射击与格斗",
		},
		{
			key: "casual",
			label: "休闲派对",
			icon: "material-symbols:extension-outline-rounded",
			description: "轻松休闲与聚会游戏",
		},
	],
};

// config/music.yaml
const music: DeepPartial<MusicConfig> = {
	enable: true,
	provider: "meting",
	defaultVolume: 0.7,
	defaultMode: "sequence",
	meting: {
		server: "netease",
		type: "playlist",
		id: "17390339934",
		api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&r=:r",
	},
};

// config/anime.yaml
const anime: DeepPartial<AnimeConfig> = {
	enable: true,
	source: {
		kind: "snapshot",
		provider: "bangumi",
		file: "bangumi.json",
		fetchOnDev: false,
	},
	fallback: {
		kind: "local",
	},
	providers: {
		bangumi: {
			enable: true,
			userId: "718137",
			request: {
				pageSize: 30,
				maxItems: 300,
				minDelayMs: 300,
			},
		},
		bilibili: {
			enable: false,
			vmid: "177022500",
			sessdataEnv: "BILI_SESSDATA",
			cover: {
				mode: "local",
				mirror: "",
				useWebp: true,
			},
			request: {
				pageSize: 30,
				maxItems: 300,
				minDelayMs: 300,
			},
		},
	},
	snapshot: {
		directory: "src/data/anime-snapshots",
		staleAfterDays: 30,
		keepLastValid: true,
	},
};

// config/font.yaml
const font: DeepPartial<FontConfig> = {
	mode: "custom",
	fontFamilies: [
		{
			id: "zen-maru-gothic-body",
			family: "Zen Maru Gothic Medium",
			role: "body",
			source: "local",
			variants: [
				{
					file: "src/assets/fonts/ZenMaruGothic-Medium.ttf",
					weight: 400,
					style: "normal",
				},
			],
			fallback: [
				"ui-sans-serif",
				"system-ui",
				"sans-serif",
			],
			display: "swap",
			preload: false,
		},
		{
			id: "loli-second-edition-cjk",
			family: "Loli Second Edition",
			role: "cjk",
			source: "local",
			variants: [
				{
					file: "src/assets/fonts/Loli-Second-Edition.ttf",
					weight: 500,
					style: "normal",
				},
			],
			fallback: [
				"system-ui",
				"sans-serif",
			],
			display: "swap",
			preload: false,
		},
		{
			id: "jetbrains-mono",
			family: "JetBrains Mono",
			role: "mono",
			source: "fontsource",
			variants: [
				{
					file: "@fontsource/jetbrains-mono/400.css",
					weight: 400,
					style: "normal",
				},
				{
					file: "@fontsource/jetbrains-mono/400-italic.css",
					weight: 400,
					style: "italic",
				},
			],
			fallback: [
				"ui-monospace",
				"monospace",
			],
			display: "swap",
			preload: false,
		},
	],
};

// config/llms.yaml
const llms: DeepPartial<LlmsConfig> = {
	enable: true,
	generateFull: true,
};

// config/umami.yaml
const umami: DeepPartial<UmamiConfig> = {
	enable: false,
	shareUrl: "",
};

// config/compass.yaml
const compass: DeepPartial<CompassConfig> = {
	enable: false,
};

// config/series.yaml
const series: DeepPartial<SeriesConfig> = {
	enable: false,
	title: "$t:series",
	description: "",
	cardPosition: "bottom",
};

// config/nav-bar.yaml
const navBar: NavBarConfigOverride = {
	links: [
		{
			preset: "Home",
		},
		{
			preset: "Archive",
		},
		{
			name: "Links",
			icon: "material-symbols:link-rounded",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/hygenluo",
					icon: "fa7-brands:github",
					external: true,
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/177022500/dynamic",
					icon: "fa7-brands:bilibili",
					external: true,
				},
			],
		},
		{
			name: "My",
			icon: "material-symbols:person-outline-rounded",
			children: [
				{
					preset: "Anime",
				},
				{
					preset: "Moments",
				},
				{
					preset: "Albums",
				},
			],
		},
		{
			name: "About",
			icon: "material-symbols:info-outline-rounded",
			children: [
				{
					preset: "About",
				},
				{
					preset: "Friends",
				},
			],
		},
		{
			name: "Others",
			icon: "material-symbols:more-horiz",
			children: [
				{
					preset: "Projects",
				},
				{
					preset: "Skills",
				},
				{
					preset: "Timeline",
				},
				{
					preset: "Games",
				},
			],
		},
	],
};

/** 领域名 -> 该领域的用户覆盖值（仅包含用户显式声明的键）。 */
export const userConfigOverrides: Readonly<Record<string, unknown>> = {
	site,
	permalink,
	profile,
	license,
	expressiveCode,
	announcement,
	postList,
	article,
	comment,
	contextMenu,
	fab,
	sidebar,
	footer,
	imageBloom,
	skills,
	projects,
	timeline,
	devices,
	games,
	music,
	anime,
	font,
	llms,
	umami,
	compass,
	series,
	navBar,
};

/** 本次生成消费了内容仓中的哪些文件，用于溯源与错误提示。 */
export const userConfigSources: readonly string[] = [
	"config/site.yaml",
	"config/permalink.yaml",
	"config/profile.yaml",
	"config/license.yaml",
	"config/expressive-code.yaml",
	"config/announcement.yaml",
	"config/post-list.yaml",
	"config/article.yaml",
	"config/comment.yaml",
	"config/context-menu.yaml",
	"config/fab.yaml",
	"config/sidebar.yaml",
	"config/footer.yaml",
	"config/image-bloom.yaml",
	"config/skills.yaml",
	"config/projects.yaml",
	"config/timeline.yaml",
	"config/devices.yaml",
	"config/games.yaml",
	"config/music.yaml",
	"config/anime.yaml",
	"config/font.yaml",
	"config/llms.yaml",
	"config/umami.yaml",
	"config/compass.yaml",
	"config/series.yaml",
	"config/nav-bar.yaml",
];
