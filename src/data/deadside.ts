import { siteConfig } from './site';

const localImage = (file: string) => `/images/${file}`;

export const deadsideSupabaseStorageBase =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/deadside';

export type DeadsideScreenshot = {
	src: string;
	alt: string;
	title: string;
};

export type GameplayPreviewShot = DeadsideScreenshot & {
	badge: 'ESP' | 'Wallhack' | 'Aimbot' | 'Radar' | 'Menu';
	badgeTone: 'green' | 'gold';
	description: string;
	/** i18n routing page id for the showcase card link */
	pageId:
		| 'wallhack'
		| 'deadside-esp'
		| 'deadside-aimbot'
		| 'radar'
		| 'hacks'
		| 'features';
};

const previewFile = (index: number) =>
	localImage(`deadside-gameplay-preview-${String(index).padStart(2, '0')}.webp`);

/** Live Deadside gameplay captures (Sep 2026) — optimized WebP in /public/images after fetch. */
export const gameplayPreviewScreenshots: GameplayPreviewShot[] = [
	{
		src: previewFile(1),
		title: 'Player ESP through cover',
		alt: 'Deadside cheat ESP highlighting enemy players behind walls and wooden cover on the open map',
		badge: 'Wallhack',
		badgeTone: 'green',
		description: 'Wallhack boxes stay readable through buildings, fences, and hard cover during loot runs.',
		pageId: 'wallhack',
	},
	{
		src: previewFile(2),
		title: 'Red enemy silhouettes',
		alt: 'Deadside ESP showing red player outlines across a field before a PvP engagement',
		badge: 'ESP',
		badgeTone: 'green',
		description: 'Bright silhouettes help you spot third parties and squad pushes before they crest a ridge.',
		pageId: 'deadside-esp',
	},
	{
		src: previewFile(3),
		title: 'Distance and name tags',
		alt: 'Deadside ESP with player name tags and distance readouts on enemy operators',
		badge: 'ESP',
		badgeTone: 'green',
		description: 'Name labels and meter readouts make callouts faster for your squad on voice.',
		pageId: 'deadside-esp',
	},
	{
		src: previewFile(4),
		title: 'Iron sights ESP and aimbot',
		alt: 'Deadside cheats first-person view with green ESP boxes, bot distance tags, and iron sights in a forest firefight',
		badge: 'Aimbot',
		badgeTone: 'gold',
		description: 'Smooth aim assist and weak-spot bias for DMR and assault rifle loadouts.',
		pageId: 'deadside-aimbot',
	},
	{
		src: previewFile(5),
		title: 'Combat snaplines',
		alt: 'Deadside cheat snaplines and ESP boxes during a close-quarters firefight',
		badge: 'ESP',
		badgeTone: 'green',
		description: 'Snaplines confirm which target your aimbot locked before you commit to a push.',
		pageId: 'deadside-esp',
	},
	{
		src: previewFile(6),
		title: 'Skeleton ESP overlay',
		alt: 'Deadside skeleton ESP and bounding boxes on players in a town firefight',
		badge: 'ESP',
		badgeTone: 'green',
		description: 'Skeleton overlays show stance and peek direction in urban compounds.',
		pageId: 'deadside-esp',
	},
	{
		src: previewFile(7),
		title: '2D radar blips',
		alt: 'Deadside 2D radar minimap with off-screen enemy blips around the player',
		badge: 'Radar',
		badgeTone: 'gold',
		description: 'Radar catches flanks you cannot see while looting or healing in cover.',
		pageId: 'radar',
	},
	{
		src: previewFile(8),
		title: 'Loot and player ESP',
		alt: 'Deadside ESP marking weapon crates and nearby enemy players during a loot route',
		badge: 'ESP',
		badgeTone: 'green',
		description: 'Combine loot awareness with player ESP for safer extractions.',
		pageId: 'hacks',
	},
	{
		src: previewFile(9),
		title: 'Vehicle and patrol ESP',
		alt: 'Deadside ESP highlighting an armored vehicle and AI patrol near a military compound',
		badge: 'ESP',
		badgeTone: 'green',
		description: 'Vehicle outlines help you avoid convoys or set up ambushes on open roads.',
		pageId: 'hacks',
	},
	{
		src: previewFile(10),
		title: 'Night and foliage ESP',
		alt: 'Deadside wallhack ESP on players moving through trees at dusk on the Deadside map',
		badge: 'Wallhack',
		badgeTone: 'green',
		description: 'ESP stays visible in low light and dense foliage where audio cues fail.',
		pageId: 'wallhack',
	},
	{
		src: previewFile(11),
		title: 'In-game mod menu',
		alt: 'Deadside cheats in-game menu with ESP, aimbot, and radar toggles on Windows PC',
		badge: 'Menu',
		badgeTone: 'gold',
		description: 'Toggle modules mid-raid without alt-tabbing — per-weapon profiles included.',
		pageId: 'features',
	},
	{
		src: previewFile(12),
		title: 'Aimbot FOV settings',
		alt: 'Deadside aimbot settings panel showing FOV arc and smoothing sliders',
		badge: 'Aimbot',
		badgeTone: 'gold',
		description: 'Tune FOV, smoothing, and target filters for legit or aggressive play styles.',
		pageId: 'deadside-aimbot',
	},
	{
		src: previewFile(13),
		title: 'Radar range tuning',
		alt: 'Deadside radar hack settings with range and blip size options in the cheat menu',
		badge: 'Radar',
		badgeTone: 'gold',
		description: 'Shrink radar clutter or widen range for open-world rotations.',
		pageId: 'radar',
	},
	{
		src: previewFile(14),
		title: 'Full package overview',
		alt: 'Deadside Cheats gameplay preview with ESP, radar, and aimbot active in one match',
		badge: 'Menu',
		badgeTone: 'gold',
		description: 'One license covers ESP, wallhack, radar, and aimbot with Bad Pixel patch maintenance.',
		pageId: 'hacks',
	},
];

/** Homepage cheat showcase + feature galleries — all live gameplay previews. */
export const showcaseGameplay: DeadsideScreenshot[] = gameplayPreviewScreenshots;

/** Legacy keys used across feature pages and schema — mapped to preview stills. */
export const gameplayScreenshots = {
	wallhack: gameplayPreviewScreenshots[0],
	esp: gameplayPreviewScreenshots[1],
	aimbot: gameplayPreviewScreenshots[3],
	radarCombat: gameplayPreviewScreenshots[5],
	radarMap: gameplayPreviewScreenshots[6],
} as const satisfies Record<string, DeadsideScreenshot>;

/** Homepage hero background — compressed trailer MP4 + WebP poster fallback. */
export const deadsideHeroVideo = '/videos/deadside-hero.mp4';
export const deadsideHeroVideoPoster = localImage('deadside-hero-video-poster.webp');
export const deadsideHeroVideoPosterMobile = localImage('deadside-hero-video-poster-480w.webp');

/** LCP still / reduced-motion fallback (matches first frame of hero video). */
export const deadsideHeroImage = deadsideHeroVideoPoster;

export const deadsideHeroAlt =
	'Deadside official launch trailer playing behind Deadside Cheats hero — survival operators in the open world';

const g = gameplayScreenshots;

/** Deadside cheat screenshots — all mapped to live Supabase gameplay captures. */
export const deadsideScreenshots = {
	mainMenu: {
		src: g.radarMap.src,
		alt: 'Deadside cheats 2D radar with player threat markers in live combat',
		title: 'Deadside Cheats open world radar',
	},
	espOverlay: {
		src: g.esp.src,
		alt: g.esp.alt,
		title: g.esp.title,
	},
	espBoxes: {
		src: g.wallhack.src,
		alt: g.wallhack.alt,
		title: g.wallhack.title,
	},
	aimbotMenu: {
		src: g.aimbot.src,
		alt: g.aimbot.alt,
		title: g.aimbot.title,
	},
	radarMinimap: {
		src: g.radarMap.src,
		alt: g.radarMap.alt,
		title: g.radarMap.title,
	},
	combatEsp: {
		src: g.radarCombat.src,
		alt: g.radarCombat.alt,
		title: g.radarCombat.title,
	},
	steelPathEsp: {
		src: g.esp.src,
		alt: 'Deadside ESP overlays on enemy units during loot runs',
		title: 'Deadside loot runs ESP',
	},
	sortieAimbot: {
		src: g.aimbot.src,
		alt: 'Deadside aimbot scope highlight during squad PvP combat',
		title: 'Deadside squad extraction aimbot combat',
	},
	openWorldRadar: {
		src: g.radarMap.src,
		alt: 'Deadside open world radar and ESP on northern map sectors',
		title: 'Deadside open world radar',
	},
	lootEsp: {
		src: g.esp.src,
		alt: 'Deadside ESP markers for resources and supply points in combat',
		title: 'Deadside loot ESP',
	},
	settingsPanel: {
		src: g.aimbot.src,
		alt: 'Deadside cheats scoped targeting and combat assist controls',
		title: 'Deadside aimbot targeting view',
	},
} as const satisfies Record<string, DeadsideScreenshot>;

/** Pricing section — shop background beside checkout. */
export const pricingShopImage: DeadsideScreenshot = {
	src: localImage('deadside-pricing-shop-bg.webp'),
	alt: 'Deadside gameplay scene with a survivor by an abandoned bus on a rural road behind the pricing section',
	title: 'Deadside pricing section background',
};

/** Premium access card beside “Cheats for Deadside” — gameplay preview 04. */
export const homeAboutPremiumCard: DeadsideScreenshot = gameplayPreviewScreenshots[3];

/** Homepage “Cheats for Deadside” band — forest outpost gameplay still. */
export const homeAboutSectionBg: DeadsideScreenshot = {
	src: localImage('deadside-home-about-bg.webp'),
	alt: 'Deadside survival operators at a forest outpost behind the cheats for Deadside section',
	title: 'Cheats for Deadside section background',
};

/** Homepage reviews band — squad gameplay at a rural cabin. */
export const reviewsSectionBg: DeadsideScreenshot = {
	src: localImage('deadside-reviews-bg.webp'),
	alt: 'Deadside squad in tactical gear outside a green wooden cabin behind the customer reviews section',
	title: 'Deadside reviews section background',
};

/** Homepage FAQ band — official Deadside.net scr/4 background. */
export const faqSectionBg: DeadsideScreenshot = {
	src: localImage('deadside-faq-bg.webp'),
	alt: 'Deadside game logo at golden hour over a survival open world field behind the FAQ section',
	title: 'Deadside FAQ section background',
};

/** Homepage features band — official Deadside.net scr/thumb-12 background. */
export const featuresSectionBg: DeadsideScreenshot = {
	src: localImage('deadside-features-bg.webp'),
	alt: 'Deadside survival open world background behind the features list',
	title: 'Deadside features section background',
};

/** Official Deadside marketing screenshots — local WebP (mirrored from deadside.com scr assets). */
export const deadsideOfficialScreens = {
	openWorldPanorama: {
		src: localImage('deadside-official-panorama.webp'),
		alt: 'Deadside survival open world panorama with soldiers and vehicles in combat',
		title: 'Deadside open world panorama',
	},
	squadCombat: {
		src: localImage('deadside-official-squad-combat.webp'),
		alt: 'Deadside close-quarters PvP screenshot with infantry action on the front line',
		title: 'Deadside close-quarters PvP',
	},
	squadThumb: {
		src: localImage('deadside-official-squad-thumb.webp'),
		alt: 'Deadside squad gameplay thumbnail from official Deadside screenshots',
		title: 'Deadside squad thumbnail',
	},
} as const satisfies Record<string, DeadsideScreenshot>;

export const reviewsHeroImage = deadsideOfficialScreens.openWorldPanorama.src;
export const reviewsHeroAlt = deadsideOfficialScreens.openWorldPanorama.alt;
export const reviewDetailHeroImage = deadsideOfficialScreens.squadCombat.src;
export const reviewDetailHeroAlt = deadsideOfficialScreens.squadCombat.alt;

/** Official Deadside.net art on secondary page heroes (gameplay shots stay on cheat feature pages). */
export const pageHeroOverrides: Partial<Record<string, string>> = {
	features: deadsideOfficialScreens.openWorldPanorama.src,
	pricing: pricingShopImage.src,
	setup: deadsideOfficialScreens.squadThumb.src,
	updates: deadsideOfficialScreens.squadCombat.src,
	faq: deadsideOfficialScreens.squadCombat.src,
	support: deadsideOfficialScreens.openWorldPanorama.src,
	privacy: deadsideOfficialScreens.squadThumb.src,
	refund: deadsideOfficialScreens.squadThumb.src,
	terms: deadsideOfficialScreens.squadThumb.src,
	hacks: deadsideOfficialScreens.openWorldPanorama.src,
	undetected: deadsideOfficialScreens.openWorldPanorama.src,
	'cheats-2026': deadsideOfficialScreens.openWorldPanorama.src,
	'best-cheats': deadsideOfficialScreens.squadCombat.src,
	'cheat-download': pricingShopImage.src,
	'mod-menu': deadsideOfficialScreens.squadThumb.src,
	'eac-bypass': deadsideOfficialScreens.squadCombat.src,
};

/** Map legacy Supabase hero URLs from generated content to local WebP assets. */
export function mapSupabaseHeroToLocal(heroImage: string): string | undefined {
	if (!heroImage.includes('supabase.co/storage')) return undefined;
	if (heroImage.includes('index-new-bg-5')) return deadsideHeroImage;
	if (heroImage.includes('084206') || heroImage.includes('161627')) return gameplayScreenshots.wallhack.src;
	if (heroImage.includes('084218') || heroImage.includes('161636')) return gameplayScreenshots.esp.src;
	if (heroImage.includes('084240') || heroImage.includes('161643')) return gameplayScreenshots.aimbot.src;
	if (heroImage.includes('084313') || heroImage.includes('161704')) return gameplayScreenshots.radarCombat.src;
	if (heroImage.includes('084335') || heroImage.includes('161712')) return gameplayScreenshots.radarMap.src;
	if (heroImage.includes('bottom-shop-bg')) return pricingShopImage.src;
	return undefined;
}

export function resolvePageHeroImage(pageId: string, heroImage: string): string {
	if (pageHeroOverrides[pageId]) return pageHeroOverrides[pageId]!;
	const localHero = mapSupabaseHeroToLocal(heroImage);
	if (localHero) return localHero;
	if (heroImage.startsWith('http')) return heroImage;
	return legacyGameplayImageMap[heroImage] ?? heroImage;
}

export const pricingGallery: DeadsideScreenshot[] = [pricingShopImage];

/** Feature page section screenshots keyed to productFeatureDetails ids. */
export const featureSectionImages: Record<'aimbot' | 'visual' | 'misc', DeadsideScreenshot> = {
	aimbot: deadsideScreenshots.sortieAimbot,
	visual: deadsideScreenshots.espOverlay,
	misc: deadsideScreenshots.radarMinimap,
};

/** Extra visuals shown below the feature breakdown grid. */
export const featureGallery: DeadsideScreenshot[] = [...showcaseGameplay];

const s = deadsideScreenshots;

export const deadsideImages = {
	hero: deadsideHeroImage,
	cover: s.espOverlay.src,
	logo: siteConfig.logo,
	loadoutBuilder: s.aimbotMenu.src,
	aimbotCombat: s.sortieAimbot.src,
	squadFight: s.combatEsp.src,
	espWallhack: s.espBoxes.src,
	cheatsPackage: s.mainMenu.src,
	headerArt: s.settingsPanel.src,
	battleRoyaleCombat: s.steelPathEsp.src,
	rebootFight: s.radarMinimap.src,
	playerEsp: s.espOverlay.src,
	radarHack: s.radarMinimap.src,
	zeroBuildCombat: s.combatEsp.src,
	zeroBuildMode: s.espBoxes.src,
	openWorldTileset: s.openWorldRadar.src,
	battleRoyaleIsland: g.radarMap.src,
	product: showcaseGameplay.map((image) => ({ src: image.src, alt: image.alt })),
	gallery: gameplayPreviewScreenshots.map((shot) => {
		const hrefByPage: Record<GameplayPreviewShot['pageId'], string> = {
			wallhack: '/deadside-wallhack/',
			'deadside-esp': '/deadside-esp/',
			'deadside-aimbot': '/deadside-aimbot/',
			radar: '/deadside-radar/',
			hacks: '/deadside-cheats/',
			features: '/features/',
		};
		return {
			src: shot.src,
			alt: shot.alt,
			href: hrefByPage[shot.pageId],
		};
	}),
	sitemap: showcaseGameplay.map((image) => ({
		src: image.src,
		title: image.title,
		caption: image.alt,
	})),
} as const;

/** Replace legacy /images paths in generated i18n content (hero excluded). */
export const legacyGameplayImageMap: Record<string, string> = {
	'/images/deadside-esp-wallhack-overlay.webp': g.esp.src,
	'/images/deadside-esp-enemy-boxes.webp': g.wallhack.src,
	'/images/deadside-squad-aimbot-combat.webp': g.aimbot.src,
	'/images/deadside-aimbot-targeting-menu.webp': g.aimbot.src,
	'/images/deadside-radar-hack-minimap.webp': g.radarMap.src,
	'/images/deadside-cheats-combat-esp.webp': g.radarCombat.src,
	'/images/deadside-loot-run-esp.webp': g.esp.src,
	'/images/deadside-cheats-main-menu.webp': g.radarMap.src,
	'/images/deadside-cheats-settings-panel.webp': g.aimbot.src,
	'/images/deadside-loot-esp.webp': g.esp.src,
	'/images/deadside-raid.webp': g.wallhack.src,
	'/images/deadside-open-world-radar.webp': g.radarMap.src,
	'/images/deadside-esp-overlay.webp': g.esp.src,
};

const heroAltSources: DeadsideScreenshot[] = [
	...gameplayPreviewScreenshots,
	...Object.values(gameplayScreenshots),
	...Object.values(deadsideScreenshots),
	...Object.values(deadsideOfficialScreens),
	pricingShopImage,
	homeAboutSectionBg,
	{ src: deadsideHeroImage, alt: deadsideHeroAlt, title: 'Deadside Cheats home hero' },
];

export const heroAltBySrc: Record<string, string> = Object.fromEntries(
	heroAltSources.map((item) => [item.src, item.alt]),
);

/** Match official Deadside.net hero art with descriptive alt text on secondary pages. */
export const pageHeroAltOverrides: Partial<Record<string, string>> = {
	features: deadsideOfficialScreens.openWorldPanorama.alt,
	pricing: pricingShopImage.alt,
	setup: deadsideOfficialScreens.squadThumb.alt,
	updates: deadsideOfficialScreens.squadCombat.alt,
	faq: deadsideOfficialScreens.squadCombat.alt,
	support: deadsideOfficialScreens.openWorldPanorama.alt,
	privacy: deadsideOfficialScreens.squadThumb.alt,
	refund: deadsideOfficialScreens.squadThumb.alt,
	terms: deadsideOfficialScreens.squadThumb.alt,
	hacks: deadsideOfficialScreens.openWorldPanorama.alt,
	undetected: deadsideOfficialScreens.openWorldPanorama.alt,
	'cheats-2026': deadsideOfficialScreens.openWorldPanorama.alt,
	'best-cheats': deadsideOfficialScreens.squadCombat.alt,
	'cheat-download': pricingShopImage.alt,
	'mod-menu': deadsideOfficialScreens.squadThumb.alt,
	'eac-bypass': deadsideOfficialScreens.squadCombat.alt,
};

export function resolvePageHeroAlt(
	pageId: string,
	resolvedHeroImage: string,
	imageAlt: string,
): string {
	if (pageHeroAltOverrides[pageId]) return pageHeroAltOverrides[pageId]!;
	return heroAltBySrc[resolvedHeroImage] ?? imageAlt;
}
