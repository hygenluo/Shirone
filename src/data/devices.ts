/**
 * 个人设备展示页数据源
 * 行为与分类规则由 config/devices.yaml 控制
 */

export type DeviceStatus = "active" | "backup" | "archived" | "wishlist";

export interface DeviceSpecItem {
	key: string;
	label: string;
	value: string;
}

export interface DeviceItem {
	enable?: boolean;
	id: string;
	name: string;
	brand: string;
	category: string;
	status: DeviceStatus;
	specs: string;
	specDetails?: DeviceSpecItem[];
	description: string;
	image?: string;
	icon?: string;
	link?: string;
	featured?: boolean;
	year?: string;
}

export const devicesData: DeviceItem[] = [
	{
		id: "oneplus-13t",
		name: "OnePlus 13T",
		brand: "OnePlus",
		category: "mobile",
		status: "active",
		specs: "Gray / 16G + 1TB",
		description:
			"Flagship performance, Hasselblad imaging, 80W SuperVOOC.",
		image: "/images/device/oneplus13t.png",
		icon: "material-symbols:phone-iphone",
		featured: true,
		link: "https://www.oneplus.com/cn/13t",
	},
	{
		id: "gl-mt3000",
		name: "GL-MT3000",
		brand: "GL.iNet",
		category: "network",
		status: "active",
		specs: "1000Mbps / 2.5G",
		description:
			"Portable WiFi 6 router suitable for business trips and home use.",
		image: "/images/device/mt3000.png",
		icon: "material-symbols:router-rounded",
		featured: true,
		link: "https://www.gl-inet.cn/products/gl-mt3000/",
	},
];
