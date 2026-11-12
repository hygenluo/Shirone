/**
 * 游戏展示页数据源
 * 行为与分类规则由 config/games.yaml 控制
 *
 * 迁移说明：这里的条目原本是 Shirone 主题自带的示例（NTE / Minecraft），
 * 已按「不公开展示占位内容」的原则清空。下面是完整字段说明与一个示例，
 * 直接往数组里追加你自己的游戏即可，页面会自动生效。
 *
 * ── 字段说明 | GameItem ────────────────────────────────────────────
 *   enable?      false 可临时隐藏单条
 *   id           唯一标识（kebab-case），也用于 config/games.yaml 的 disabledIds
 *   name         游戏名
 *   developer    开发商 / 发行商
 *   category     必须对应 config/games.yaml 里 categories[].key 之一，现有可选：
 *                  open-world 开放世界 / sandbox 沙盒建造 / rpg 角色扮演
 *                  / action 动作格斗 / casual 休闲派对
 *                （分类本身在 config/games.yaml 里改，没有条目的分类会自动隐藏）
 *   status       "playing" 在玩 | "completed" 已通关 | "backlog" 待玩 | "wishlist" 愿望单
 *   cover?       横屏封面（建议 16:9）。三种写法：内容仓 assets/ 相对路径（构建期压缩转码）、
 *                /public 绝对路径、远程 URL。省略时回退渲染下面的 icon 图标卡片
 *   icon?        Iconify 图标名，例如 "material-symbols:widgets-rounded"
 *   rating?      评分，0–5，支持小数（如 4.5）
 *   hours?       游玩时长（小时）
 *   platform?    "PC" / "PS5" / "Switch" / "Mobile" 等
 *   year?        年份
 *   tags?        标签数组
 *   description  简介（必填）
 *   link?        官网 / 商店页链接
 *   featured?    true 时在页面上突出展示
 * ──────────────────────────────────────────────────────────────────
 */

export type GameStatus = "playing" | "completed" | "backlog" | "wishlist";

export interface GameItem {
	enable?: boolean;
	id: string;
	name: string;
	developer: string;
	category: string;
	status: GameStatus;
	/** 横屏封面（建议 16:9 或更宽）：
	 *  - 省略时回退渲染 icon 图标卡片；
	 *  - 支持内容仓 assets/ 相对路径（参与构建期压缩转码）、
	 *    /public 绝对路径与远程 URL 三种写法。 */
	cover?: string;
	icon?: string;
	rating?: number;
	hours?: number;
	platform?: string;
	year?: string;
	tags?: string[];
	description: string;
	link?: string;
	featured?: boolean;
}

export const gamesData: GameItem[] = [
	// 示例（复制出来取消注释，改成你自己的内容）：
	// {
	// 	id: "my-game",
	// 	name: "游戏名",
	// 	developer: "开发商",
	// 	category: "open-world",
	// 	status: "playing",
	// 	icon: "material-symbols:explore-outline-rounded",
	// 	rating: 4.5,
	// 	hours: 30,
	// 	platform: "PC",
	// 	year: "2026",
	// 	tags: ["标签一", "标签二"],
	// 	description: "一句话简介。",
	// 	link: "https://example.com/",
	// 	featured: true,
	// },
];
