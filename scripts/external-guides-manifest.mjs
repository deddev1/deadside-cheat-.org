/**
 * 1:1 URL manifest for external game guides.
 * Each entry maps exactly one provided URL to game metadata and a unique slug.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @typedef {{ url: string, gameId: string, gameName: string, slug: string, anchorText: string }} GuideManifestEntry */

const ANCHOR_TEXTS = [
	'this resource',
	'more game information',
	'additional guides',
	'related resources',
];

/** @type {string[]} */
export const PROVIDED_URLS = readFileSync(join(__dirname, 'user-provided-guide-urls.txt'), 'utf8')
	.split('\n')
	.map((line) => line.trim())
	.filter(Boolean);

/** Domain pattern → game metadata (first match wins — put specific patterns first). */
const GAME_RULES = [
	{ test: /cheatsforvalorant|hacksforvalorant/i, gameId: 'valorant', gameName: 'Valorant' },
	{ test: /cheatsfortarkov/i, gameId: 'escape-from-tarkov', gameName: 'Escape from Tarkov' },
	{ test: /arkascended/i, gameId: 'ark-survival-ascended', gameName: 'ARK: Survival Ascended' },
	{ test: /arkcheats/i, gameId: 'ark-survival-evolved', gameName: 'ARK: Survival Evolved' },
	{ test: /battlefield/i, gameId: 'battlefield', gameName: 'Battlefield' },
	{ test: /wutheringwaves/i, gameId: 'wuthering-waves', gameName: 'Wuthering Waves' },
	{ test: /combatmaster/i, gameId: 'combat-master', gameName: 'Combat Master' },
	{ test: /foxhole/i, gameId: 'foxhole', gameName: 'Foxhole' },
	{ test: /exoborne/i, gameId: 'exoborne', gameName: 'Exoborne' },
	{ test: /nba2k26/i, gameId: 'nba-2k26', gameName: 'NBA 2K26' },
	{ test: /tf2/i, gameId: 'team-fortress-2', gameName: 'Team Fortress 2' },
	{ test: /scumcheats/i, gameId: 'scum', gameName: 'SCUM' },
	{ test: /grounded/i, gameId: 'grounded', gameName: 'Grounded' },
	{ test: /enlisted/i, gameId: 'enlisted', gameName: 'Enlisted' },
	{ test: /dota2/i, gameId: 'dota-2', gameName: 'Dota 2' },
	{ test: /civ6/i, gameId: 'civilization-6', gameName: 'Sid Meier\'s Civilization VI' },
	{ test: /fragpunk/i, gameId: 'frag-punk', gameName: 'Frag Punk' },
	{ test: /enshrouded/i, gameId: 'enshrouded', gameName: 'Enshrouded' },
	{ test: /pubg/i, gameId: 'pubg', gameName: 'PUBG: Battlegrounds' },
	{ test: /dunecheats/i, gameId: 'dune-awakening', gameName: 'Dune: Awakening' },
	{ test: /codhack|codhacks/i, gameId: 'call-of-duty', gameName: 'Call of Duty' },
	{ test: /deadside/i, gameId: 'deadside', gameName: 'Deadside' },
	{ test: /arcraiders/i, gameId: 'arc-raiders', gameName: 'ARC Raiders' },
	{ test: /genshin/i, gameId: 'genshin-impact', gameName: 'Genshin Impact' },
	{ test: /dbd/i, gameId: 'dead-by-daylight', gameName: 'Dead by Daylight' },
	{ test: /tarkov|eft/i, gameId: 'escape-from-tarkov', gameName: 'Escape from Tarkov' },
	{ test: /unturned/i, gameId: 'unturned', gameName: 'Unturned' },
	{ test: /warthunder/i, gameId: 'war-thunder', gameName: 'War Thunder' },
	{ test: /fortnite|fncheats|fncheat/i, gameId: 'fortnite', gameName: 'Fortnite' },
	{ test: /marathon/i, gameId: 'marathon', gameName: 'Marathon' },
	{ test: /lol|league/i, gameId: 'league-of-legends', gameName: 'League of Legends' },
	{ test: /warzone/i, gameId: 'call-of-duty-warzone', gameName: 'Call of Duty: Warzone' },
	{ test: /valo/i, gameId: 'valorant', gameName: 'Valorant' },
	{ test: /grayzone/i, gameId: 'gray-zone-warfare', gameName: 'Gray Zone Warfare' },
	{ test: /overwatch/i, gameId: 'overwatch-2', gameName: 'Overwatch 2' },
	{ test: /isle/i, gameId: 'the-isle', gameName: 'The Isle' },
	{ test: /dayz/i, gameId: 'dayz', gameName: 'DayZ' },
	{ test: /rust/i, gameId: 'rust', gameName: 'Rust' },
	{ test: /palworld/i, gameId: 'palworld', gameName: 'Palworld' },
	{ test: /r6|siege/i, gameId: 'rainbow-six-siege', gameName: 'Rainbow Six Siege' },
	{ test: /hunt/i, gameId: 'hunt-showdown', gameName: 'Hunt: Showdown' },
	{ test: /destiny2/i, gameId: 'destiny-2', gameName: 'Destiny 2' },
	{ test: /squad/i, gameId: 'squad', gameName: 'Squad' },
	{ test: /oncehuman/i, gameId: 'once-human', gameName: 'Once Human' },
	{ test: /marvelrivals|rivals/i, gameId: 'marvel-rivals', gameName: 'Marvel Rivals' },
	{ test: /meccha|mecca/i, gameId: 'mecha-break', gameName: 'Mecha BREAK' },
	{ test: /caliber/i, gameId: 'caliber', gameName: 'Caliber' },
	{ test: /codcheats/i, gameId: 'call-of-duty', gameName: 'Call of Duty' },
	{ test: /bodycam/i, gameId: 'bodycam', gameName: 'Bodycam' },
	{ test: /abi/i, gameId: 'arena-breakout-infinite', gameName: 'Arena Breakout: Infinite' },
	{ test: /reforger/i, gameId: 'arma-reforger', gameName: 'Arma Reforger' },
	{ test: /backrooms/i, gameId: 'backrooms', gameName: 'Backrooms' },
	{ test: /sandraiders|sandhacks/i, gameId: 'sand', gameName: 'SAND' },
	{ test: /thefinals/i, gameId: 'the-finals', gameName: 'The Finals' },
	{ test: /thefront/i, gameId: 'the-front', gameName: 'The Front' },
	{ test: /lostark/i, gameId: 'lost-ark', gameName: 'Lost Ark' },
	{ test: /naraka/i, gameId: 'naraka-bladepoint', gameName: 'Naraka: Bladepoint' },
	{ test: /minecraft/i, gameId: 'minecraft', gameName: 'Minecraft' },
	{ test: /poe/i, gameId: 'path-of-exile', gameName: 'Path of Exile' },
	{ test: /warframe/i, gameId: 'warframe', gameName: 'Warframe' },
	{ test: /raft/i, gameId: 'raft', gameName: 'Raft' },
	{ test: /seaofthieves/i, gameId: 'sea-of-thieves', gameName: 'Sea of Thieves' },
	{ test: /deltaforce/i, gameId: 'delta-force', gameName: 'Delta Force' },
];

/** Fix malformed URLs (e.g. spaces in hostname) before parsing. */
function normalizeGuideUrl(url) {
	return url.trim().replace(/\s+/g, '');
}

/**
 * @param {string} url
 */
function classifyGame(url) {
	const host = new URL(normalizeGuideUrl(url)).hostname.replace(/^www\./, '');
	for (const rule of GAME_RULES) {
		if (rule.test.test(host)) {
			return { gameId: rule.gameId, gameName: rule.gameName };
		}
	}
	throw new Error(`Unable to classify game for URL: ${url}`);
}

/** Previous long slug format — used for 301 redirects after shortening. */
export function legacyGuideSlug(url) {
	const trimmed = url.trim();
	const hostMatch = trimmed.match(/^https?:\/\/([^/]+)/i);
	const hostRaw = hostMatch ? hostMatch[1] : '';
	const host = hostRaw.replace(/^www\./i, '').replace(/\./g, '-');
	const scheme = /^http:/i.test(trimmed) ? 'http' : 'https';
	return `guide-${host}-${scheme}`;
}

/**
 * Short slug: `{brand}-{tld}` (e.g. deadsidecheats.net → deadside-net).
 * @param {string} url
 */
function urlToSlug(url) {
	const parsed = new URL(normalizeGuideUrl(url));
	const host = parsed.hostname.replace(/^www\./, '');
	const segments = host.split('.');
	const tld = segments.length > 1 ? segments[segments.length - 1] : 'site';
	let label = (segments[0] ?? 'site').replace(/\s+/g, '');
	label = label
		.replace(/aimbot$/i, '')
		.replace(/cheats$/i, '')
		.replace(/cheat$/i, '')
		.replace(/hacks$/i, '')
		.replace(/hack$/i, '');
	if (!label) label = segments[0].replace(/\s+/g, '').slice(0, 16);
	return `${label}-${tld}`.toLowerCase();
}

/**
 * @returns {GuideManifestEntry[]}
 */
export function buildManifest() {
	const seenUrl = new Set();
	const seenSlug = new Set();
	/** @type {GuideManifestEntry[]} */
	const entries = [];

	for (let i = 0; i < PROVIDED_URLS.length; i++) {
		const url = normalizeGuideUrl(PROVIDED_URLS[i]);
		if (seenUrl.has(url)) continue;
		seenUrl.add(url);

		const { gameId, gameName } = classifyGame(url);
		let slug = urlToSlug(url);
		let suffix = 2;
		while (seenSlug.has(slug)) {
			slug = `${urlToSlug(url)}-${suffix++}`;
		}
		seenSlug.add(slug);
		const anchorText = ANCHOR_TEXTS[i % ANCHOR_TEXTS.length];

		entries.push({ url, gameId, gameName, slug, anchorText });
	}

	return entries;
}
