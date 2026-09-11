/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'deadside-esp', 'deadside-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/**
 * Banner image per page — thematic Deadside screenshots (see public/images/deadside-*).
 */
export const HERO_IMAGES = {
	home: 'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/deadside/index-new-bg-5.webp',
	'deadside-esp': '/images/deadside-esp-wallhack-overlay.webp',
	'deadside-aimbot': '/images/deadside-squad-aimbot-combat.webp',
	features: '/images/deadside-cheats-main-menu.webp',
	pricing: '/images/deadside-cheats-main-menu.webp',
	setup: '/images/deadside-cheats-settings-panel.webp',
	updates: '/images/deadside-loot-run-esp.webp',
	faq: '/images/deadside-cheats-settings-panel.webp',
	support: '/images/deadside-cheats-main-menu.webp',
	undetected: '/images/deadside-cheats-combat-esp.webp',
	wallhack: '/images/deadside-esp-enemy-boxes.webp',
	radar: '/images/deadside-radar-hack-minimap.webp',
	'eac-bypass': '/images/deadside-loot-run-esp.webp',
	'cheats-2026': 'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/deadside/index-new-bg-5.webp',
	hacks: '/images/deadside-cheats-combat-esp.webp',
	'cheat-download': '/images/deadside-cheats-main-menu.webp',
	'mod-menu': '/images/deadside-cheats-main-menu.webp',
	'soft-aim': '/images/deadside-squad-aimbot-combat.webp',
	'best-cheats': '/images/deadside-loot-run-esp.webp',
	'aimbot-hack': '/images/deadside-aimbot-targeting-menu.webp',
	'esp-hack': '/images/deadside-esp-wallhack-overlay.webp',
	'unlock-all': '/images/deadside-loot-esp.webp',
	privacy: '/images/deadside-raid.webp',
	refund: '/images/deadside-raid.webp',
	terms: '/images/deadside-raid.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string; gameFeatures?: string; buy?: string; watchTrailer?: string; viewPricing?: string; systemRequirements?: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string; verifiedLabel?: string; seeAll?: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
\thomeAbout: {
\t\ttitle: string; lead: string; text1: string; text2: string; modulesLabel: string;
\t\twallhack: string; radar: string; premiumTitle: string; premiumCopy: string; viewPricing: string;
\t};
\thomeFaq: {
\t\ttitle: string; intro: string; seeAll: string; readGuides: string;
\t\titems: { category: string; question: string; answer: string }[];
\t};
};
export type PageId = 'home' | 'deadside-esp' | 'deadside-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy Deadside Cheats/g, 'Buy Deadside Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	epic: '<a href="https://www.digitalextremes.com/" target="_blank" rel="noopener noreferrer">Bad Pixel</a>',
	rust: '<a href="https://deadside.com/" target="_blank" rel="noopener noreferrer">official Deadside patch notes</a>',
	status: '<a href="https://store.steampowered.com/news/?appids=895400" target="_blank" rel="noopener noreferrer">Deadside PC update notes</a>',
	eac: '<a href="https://deadside.com/" target="_blank" rel="noopener noreferrer">Deadside anti-cheat</a>',
};
