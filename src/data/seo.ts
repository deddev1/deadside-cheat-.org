/**
 * Site-wide SEO keyword cluster — optimized for deadsidecheat.org
 */
export const primaryKeyword = 'Deadside Cheats';

export const siteBrand = 'Deadside Cheats';
export const siteDomain = 'deadsidecheat.org';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Deadside Cheats',
	'deadside cheats',
	'deadside hacks',
	'deadside cheat',
	'deadside esp',
	'deadside aimbot',
	'deadside wallhack',
	'deadside radar hack',
	'undetected deadside cheats',
	'deadside cheats 2026',
	'deadside cheats pc',
	'deadside soft aim',
	'deadside mod menu',
	'buy deadside cheats',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Deadside Cheats 2026 | ESP, Aimbot & Hacks for PC';
export const defaultDescription =
	'Deadside cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Deadside Cheats`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | deadsidecheat.org`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('deadside')) return lead.slice(0, 160);
	return `Deadside cheats — ${lead}`.slice(0, 160);
}
