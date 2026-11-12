/**
 * 番剧收藏本地数据源
 * 用于番剧展示页：/anime/
 */

export type AnimeStatus =
	| "watching"
	| "completed"
	| "planned"
	| "onHold"
	| "dropped";

export interface AnimeIdentity {
	provider: "local" | "bangumi" | "bilibili";
	sourceId?: string;
	seasonId?: string;
	subjectId?: string;
}

export interface AnimeItem {
	title: string;
	cover?: string;
	link?: string;
	status: AnimeStatus;
	rating: number;
	progress?: { watched: number; total: number };
	description?: string;
	year: string;
	studio?: string;
	genres: string[];
	period?: { start: string; end: string };
	identity?: AnimeIdentity;
}

export const animeData: AnimeItem[] = [
	{
		title: "Lycoris Recoil",
		cover: "/assets/anime/lkls.webp",
		link: "https://www.bilibili.com/bangumi/media/md28338623",
		status: "completed",
		rating: 9.8,
		progress: { watched: 12, total: 12 },
		description: "Girl's gunfight",
		year: "2022",
		studio: "A-1 Pictures",
		genres: ["Action", "Slice of life"],
		period: { start: "2022-07", end: "2022-09" },
	},
	{
		title: "Yowamushi Pedal",
		cover: "/assets/anime/rynh.webp",
		link: "https://www.bilibili.com/bangumi/media/md2590",
		status: "watching",
		rating: 9.5,
		progress: { watched: 8, total: 12 },
		description: "Girl's daily life, sweet and healing",
		year: "2015",
		studio: "Nexus",
		genres: ["Daily life", "Healing"],
		period: { start: "2015-07", end: "2015-09" },
	},
	{
		title: "Asteroid in Love",
		cover: "/assets/anime/laxxx.webp",
		link: "https://www.bilibili.com/bangumi/media/md28224128",
		status: "watching",
		rating: 9.2,
		progress: { watched: 5, total: 12 },
		description: "Meeting girls among the stars, pure love and healing",
		year: "2020",
		studio: "Doga Kobo",
		genres: ["Romance", "Healing"],
		period: { start: "2020-01", end: "2020-03" },
	},
	{
		title: "Is the Order a Rabbit?",
		cover: "/assets/anime/tz1.webp",
		link: "https://www.bilibili.com/bangumi/media/md2762",
		status: "planned",
		rating: 9.0,
		progress: { watched: 12, total: 12 },
		description: "A group of girls' warm daily life",
		year: "2014",
		studio: "White Fox",
		genres: ["Daily life", "Healing"],
		period: { start: "2014-04", end: "2014-06" },
	},
	{
		title: "The Secret of the Magic Girl",
		cover: "/assets/anime/cmmn.webp",
		link: "https://www.bilibili.com/bangumi/media/md26625039",
		status: "watching",
		rating: 9.0,
		progress: { watched: 8, total: 12 },
		description: "Muli, Muli!",
		year: "2024",
		studio: "C2C",
		genres: ["Daily life", "Healing", "Magic"],
		period: { start: "2025-07", end: "2025-10" },
	},
];
