#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'deadside-esp'],
	['warzone-aimbot', 'deadside-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-deadside-cheats'],
	['warzone-wallhack', 'deadside-wallhack'],
	['warzone-radar-hack', 'deadside-radar-hack'],
	['warzone-cheats-2026', 'deadside-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-deadside'],
	['warzonescheats.net', 'deadsidecheats.org'],
	['trucos-warzone', 'trucos-deadside'],
	['triche-warzone', 'triche-deadside'],
	['warzone-cheats', 'deadside-cheats'],
	['cheats-warzone', 'cheats-deadside'],
	['trucchi-warzone', 'trucchi-deadside'],
	['cheaty-warzone', 'cheaty-deadside'],
	['chity-warzone', 'chity-deadside'],
	['chitov-warzone', 'chitov-deadside'],
	['chitiv-warzone', 'chitiv-overwatch'],
	['cheatow-warzone', 'cheatow-deadside'],
	['hile-warzone', 'hile-deadside'],
	['warzone-hile', 'deadside-hile'],
	['warzone-esp-chity', 'deadside-esp-chity'],
	['warzone-aimbot-chity', 'deadside-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-deadside-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-deadside-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-deadside-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-deadside'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-deadside'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-deadside-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-deadside'],
	['cheats-warzone-nedetectabile', 'cheats-deadside-nedetectabile'],
	['basta-warzone-cheats', 'basta-deadside-cheats'],
	['eac-bypass-deadside-trucos-warzone', 'eac-bypass-deadside-trucos-deadside'],
	['eac-bypass-deadside-triche-warzone', 'eac-bypass-deadside-triche-deadside'],
	['eac-bypass-deadside-cheats-warzone', 'eac-bypass-deadside-cheats-deadside'],
	['eac-bypass-deadside-chity-warzone', 'eac-bypass-deadside-chity-deadside'],
	['eac-bypass-deadside-warzone', 'eac-bypass-deadside'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac-bypass': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich deadside-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/deadside-cheats-hero.webp',
	'deadside-esp': '/images/deadside-cheats-esp-wallhack.webp',
	'deadside-aimbot': '/images/deadside-cheats-aimbot-combat.webp',
	features: '/images/deadside-cheats-package.webp',
	pricing: '/images/deadside-cheats-cover.webp',
	setup: '/images/deadside-loadout-builder.webp',
	updates: '/images/deadside-header-art.webp',
	faq: '/images/deadside-squad-fight.webp',
	support: '/images/deadside-cheats-package.webp',
	undetected: '/images/deadside-battle-royale-combat.webp',
	wallhack: '/images/deadside-cheats-esp-wallhack.webp',
	radar: '/images/deadside-player-esp.webp',
	'eac-bypass': '/images/deadside-reboot-van-fight.webp',
	'cheats-2026': '/images/deadside-cheats-hero.webp',
	privacy: '/images/deadside-cheats-aimbot-combat.webp',
	refund: '/images/deadside-cheats-cover.webp',
	terms: '/images/deadside-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'deadside-esp', 'deadside-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'deadside-esp' | 'deadside-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
