import type { PageId } from '../data/i18n/content.generated';

type NavLabels = {
	home: string;
	aimbot: string;
	esp: string;
	features: string;
	cheats: string;
	pricing: string;
	setup: string;
	updates: string;
	faq: string;
	support: string;
};

const BRAND_PREFIX = /^deadside cheats\s+/i;

/** Strip brand + em-dash subtitle from long SEO H1s for crumbs. */
export function deriveBannerCrumbFromHeading(heading: string, brandName = 'Deadside Cheats'): string {
	let rest = heading.trim();
	const brand = brandName.trim();
	if (brand && rest.toLowerCase().startsWith(brand.toLowerCase())) {
		rest = rest.slice(brand.length).trim();
	}
	rest = rest.replace(BRAND_PREFIX, '').trim();

	const beforeDash = rest.split(/\s[—–-]\s/)[0]?.trim();
	if (beforeDash && beforeDash.length > 0 && beforeDash.length <= 40) {
		return beforeDash;
	}

	const headingBeforeDash = heading.split(/\s[—–-]\s/)[0]?.trim();
	if (headingBeforeDash && headingBeforeDash.length < heading.length && headingBeforeDash.length <= 48) {
		return headingBeforeDash.replace(BRAND_PREFIX, '').trim() || headingBeforeDash;
	}

	return rest || heading;
}

/** Short label for banner crumbs — avoids repeating the full SEO H1. */
export function getPageBreadcrumbLabel(pageId: PageId, nav: NavLabels, heading: string, brandName?: string): string {
	const byPage: Partial<Record<PageId, string>> = {
		pricing: nav.pricing,
		features: nav.features,
		setup: nav.setup,
		updates: nav.updates,
		faq: nav.faq,
		support: nav.support,
		'deadside-esp': nav.esp,
		'deadside-aimbot': nav.aimbot,
		wallhack: 'Wallhack',
		radar: 'Radar',
		hacks: nav.cheats,
		undetected: nav.cheats,
		'eac-bypass': nav.cheats,
		'cheats-2026': nav.cheats,
		'best-cheats': nav.cheats,
		'cheat-download': nav.pricing,
		'mod-menu': nav.features,
		'soft-aim': nav.aimbot,
		'aimbot-hack': nav.aimbot,
		'esp-hack': nav.esp,
		'unlock-all': nav.features,
		privacy: 'Privacy',
		refund: 'Refunds',
		terms: 'Terms',
	};

	const mapped = byPage[pageId];
	if (mapped) return mapped;

	return deriveBannerCrumbFromHeading(heading, brandName);
}
