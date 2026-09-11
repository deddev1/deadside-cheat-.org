import { siteConfig } from './site';
import { deadsideImages, deadsideHeroAlt } from './deadside';
import { englishPaths, sitemapPageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/** Sitemap image assignments for indexable pages only (see sitemapPageIds in routing.ts). */
const sitemapImagesByPageId: Partial<Record<PageId, SitemapImage[]>> = {
	home: [
		img(deadsideImages.hero, 'Deadside Cheats', deadsideHeroAlt),
		img(deadsideImages.espWallhack, 'Deadside ESP', 'Deadside ESP wallhack overlay'),
		img(deadsideImages.aimbotCombat, 'Deadside Aimbot', 'Deadside Aimbot combat preview'),
	],
	hacks: [
		img(deadsideImages.battleRoyaleCombat, 'Deadside Cheats', 'Deadside cheats campaign squad firefight preview'),
		img(deadsideImages.espWallhack, 'Deadside Cheats ESP', 'Deadside wallhack ESP on enemy players, vehicles, and patrols'),
	],
	'deadside-esp': [
		img(deadsideImages.espWallhack, 'Deadside ESP', 'Deadside ESP wallhack overlay'),
		img(deadsideImages.playerEsp, 'Deadside Enemy ESP', 'Deadside Enemy ESP markers'),
	],
	'deadside-aimbot': [
		img(deadsideImages.aimbotCombat, 'Deadside Aimbot', 'Deadside Aimbot combat preview'),
		img(deadsideImages.squadFight, 'Deadside Aimbot squad firefight', 'Deadside Aimbot in close-quarters PvP'),
	],
	wallhack: [
		img(deadsideImages.espWallhack, 'Deadside Wallhack', 'Deadside wallhack ESP view'),
		img(deadsideImages.cover, 'Deadside Wallhack overlay', 'Deadside ESP boxes through terrain'),
	],
	radar: [
		img(deadsideImages.radarHack, 'Deadside Radar Hack', 'Deadside radar hack minimap overlay'),
		img(deadsideImages.rebootFight, 'Deadside Radar Hack overlay', 'Deadside 2D radar for flank detection'),
	],
	features: [
		img(deadsideImages.hero, 'Deadside Cheats Features', 'Deadside Cheats feature overview'),
		img(deadsideImages.loadoutBuilder, 'Deadside Cheats menu', 'Deadside Cheats in-client controls'),
	],
	pricing: [
		img(deadsideImages.cover, 'Deadside Cheats Pricing', 'Deadside Cheats license plans'),
		img(deadsideImages.cheatsPackage, 'Deadside Cheats package', 'Deadside Cheats product package'),
	],
	setup: [
		img(deadsideImages.squadFight, 'Deadside Cheats Setup', 'Deadside Cheats installation guide'),
	],
	updates: [
		img(deadsideImages.hero, 'Deadside Cheats Updates', 'Deadside Cheats patch status'),
	],
	faq: [
		img(deadsideImages.loadoutBuilder, 'Deadside Cheats FAQ', 'Deadside Cheats frequently asked questions'),
	],
	support: [
		img(deadsideImages.headerArt, 'Deadside Cheats Support', 'Deadside Cheats help center'),
	],
	privacy: [
		img(deadsideImages.cover, 'Deadside Cheats Privacy Policy', 'Deadside Cheats privacy policy'),
	],
	refund: [
		img(deadsideImages.cover, 'Deadside Cheats Refund Policy', 'Deadside Cheats refund policy'),
	],
	terms: [
		img(deadsideImages.squadFight, 'Deadside Cheats Terms', 'Deadside Cheats terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core deadside-cheats URLs only. */
export const pageSitemapEntries: PageSitemapEntry[] = sitemapPageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: sitemapImagesByPageId[pageId]!,
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = deadsideImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
