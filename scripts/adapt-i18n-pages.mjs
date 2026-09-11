#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'deadside-esp'],
	['warzone-aimbot', 'deadside-aimbot'],
	["'ricochet'", "'eac-bypass'"],
	['ricochet-bypass', 'eac-bypass-deadside'],
	['undetected-warzone-cheats', 'undetected-deadside-cheats'],
	['warzone-wallhack', 'deadside-wallhack'],
	['warzone-radar-hack', 'deadside-radar-hack'],
	['warzone-cheats-2026', 'deadside-cheats-2026'],
	['call-of-duty-warzone-cheats', 'deadside-cheats'],
	['call-of-duty-warzone', 'rust'],
	['Call of Duty: Warzone', 'Deadside'],
	['Call of Duty Warzone', 'Deadside'],
	['Warzone Cheats', 'Deadside Cheats'],
	['Warzone cheats', 'Deadside cheats'],
	['Warzone cheat', 'Deadside cheat'],
	['Warzone ESP', 'Deadside ESP'],
	['Warzone Aimbot', 'Deadside Aimbot'],
	['Warzone wallhack', 'Deadside wallhack'],
	['Warzone radar', 'Deadside radar'],
	['Warzone firefights', 'Deadside firefights'],
	['Warzone combat', 'Deadside combat'],
	['Warzone patches', 'Deadside patches'],
	['Warzone updates', 'Deadside updates'],
	['Warzone setup', 'Deadside setup'],
	['Warzone license', 'Deadside license'],
	['Warzone licenses', 'Deadside licenses'],
	['Warzone sessions', 'Deadside sessions'],
	['in Warzone', 'in Deadside'],
	['for Warzone', 'for Deadside'],
	['Warzone on', 'Deadside on'],
	['Warzone or', 'Deadside or'],
	['Warzone\'s', 'Deadside\'s'],
	['Warzone ', 'Deadside '],
	['Ricochet anti-cheat', 'Bad Pixel anti-cheat (EAC)'],
	['Ricochet maintenance', 'anti-cheat maintenance'],
	['Ricochet bypass', 'anti-cheat bypass'],
	['Ricochet Bypass', 'EAC Bypass'],
	['Ricochet', 'Bad Pixel anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['support@warzonescheats.net', 'support@deadsidecheats.org'],
	['Verdansk, Urzikstan, and Rebirth Island', 'loot objectives, extraction routes, and ranked seasons'],
	['Verdansk, Urzikstan and Rebirth Island', 'loot objectives, extraction routes and ranked seasons'],
	['gulag fights', 'map rotations'],
	['gulag fight', 'extraction route fight'],
	['gulag rounds', 'respawn rounds'],
	['gulag', 'control point'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'supply drop'],
	['Resurgence and loot runs', 'loot objectives and raids'],
	['BR and Resurgence', 'large-scale battles and loot runs'],
	['BR & Resurgence', 'PVE & PVP'],
	['loadout drops', 'loot chests'],
	['loadout drop', 'loot chest'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Embark\''],
	['Call of Duty combat pace', 'Deadside combat pace'],
	['COD', 'Deadside'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Deadside Cheats',
	game: 'Deadside',
	checkout: 'Zadeyo',
	eac: 'Bad Pixel anti-cheat (EAC)',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'loot objectives, extraction routes, and ranked seasons'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
