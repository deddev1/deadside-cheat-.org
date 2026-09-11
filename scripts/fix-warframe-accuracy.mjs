#!/usr/bin/env node
/**
 * Normalize copy for Deadside — removes Fortnite/Rust/Epic/EAC leftovers.
 * Run: node scripts/fix-warframe-accuracy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** @type {[string | RegExp, string][]} */
const RULES = [
	[/Epic services/gi, 'Deadside servers'],
	[/Epic platform/gi, 'Deadside launcher'],
	[/Epic's rules/gi, "Bad Pixel' Terms of Service"],
	[/Epic terms/gi, 'Bad Pixel terms'],
	[/If Epic services/gi, 'If Deadside servers'],
	[/Embark' anti-cheat/gi, 'Bad Pixel anti-cheat'],
	[/Deadside or EAC patch/gi, 'Deadside or anti-cheat patch'],
	[/and EAC questions/gi, 'and anti-cheat questions'],
	[/EAC patch/gi, 'anti-cheat patch'],
	[/EAC history/gi, 'anti-cheat history'],
	[/EAC comparison/gi, 'anti-cheat comparison'],
	[/Battle royale fights happen in three dimensions — rooftops, windows, and flanks\./gi,
		'Multi-floor tilesets stack vertical fights — catwalks, doorways, and side spawns.'],
	[/extraction loop/gi, 'mission loop'],
	[/extraction phase rounds/gi, 'hot zones and squad extraction modifiers'],
	[/extraction phase/gi, 'hot zones'],
	[/extraction route/gi, 'squad extraction route'],
	[/endgame circles/gi, 'hot zones'],
	[/ranked squad firefight/gi, 'campaign squad firefight'],
	[/ranked objective fight/gi, 'loot runs objective fight'],
	[/ranked-critical/gi, 'mission-critical'],
	[/ranked lobbies/gi, 'co-op squads'],
	[/ranked block/gi, 'mission session'],
	[/before ranked/gi, 'before loot runs'],
	[/Built for ranked pressure/gi, 'Built for loot runs pressure'],
	[/before a third party/gi, 'before a flank wave'],
	[/third parties/gi, 'flank waves'],
	[/third-party flanks/gi, 'flank waves'],
	[/enemy squads/gi, 'enemy units'],
	[/enemy player/gi, 'enemy unit'],
	[/enemy players/gi, 'enemy units'],
	[/closest player/gi, 'closest enemy'],
	[/vehicles, loot, chests/gi, 'lockers, resource caches, and pickups'],
	[/vehicles and chests/gi, 'lockers and resource caches'],
	[/loot and chest/gi, 'pickups and lockers'],
	[/loot chests/gi, 'resource caches'],
	[/supply-drop/gi, 'pickup'],
	[/mid-match/gi, 'mid-mission'],
	[/map rotations/gi, 'tileset rotations'],
	[/map rotation/gi, 'tileset rotation'],
	[/POIs/g, 'tileset areas'],
	[/POI/g, 'tileset area'],
	[/loot routes/gi, 'farm routes'],
	[/drop path/gi, 'farm route'],
	[/track players and containers/gi, 'track enemies and containers'],
	[/track players/gi, 'track enemies'],
	[/player threats/gi, 'enemy threats'],
	[/enemy players/gi, 'enemy units'],
	[/enemy player/gi, 'enemy unit'],
	[/Deadside' live seasons/gi, "Deadside's live updates"],
	[/season updates from/gi, 'game updates from'],
	[/season calendars/gi, 'update calendars'],
	[/season notes from/gi, 'patch notes from'],
	[/season messaging/gi, 'official patch messaging'],
	[/season maps/gi, 'tileset updates'],
	[/for ranked/gi, 'for loot runs'],
	[/in ranked/gi, 'in loot runs'],
	[/ranked loadout/gi, 'mission loadout'],
	[/ranked climb/gi, 'loot runs progression'],
	[/ranked grinders/gi, 'loot runs players'],
	[/ranked/gi, 'loot runs'],
	[/FNCS/gi, 'squad extraction'],
	[/vbucks/gi, 'Platinum'],
	[/V-Bucks/gi, 'Platinum'],
	[/Bugha/gi, 'pro Tenno'],
	[/zero-build/gi, 'ability-only'],
	[/Battle Pass/gi, 'Prime Access'],
	[/Embark/gi, 'Bad Pixel'],
	[/Epic patch/gi, 'Deadside patch'],
	[/every Epic patch/gi, 'every Deadside patch'],
	[/Epic health/gi, 'server status'],
	[/Cheats are flanking tools/gi, 'Cheats are third-party tools'],
	[/for Embark bans/gi, 'for game bans'],
	[/notice vehicles before/gi, 'spot armored vehicles and turrets before'],
	[/mark chests worth/gi, 'mark lockers and caches worth'],
	[/players, loot, and vehicles/gi, 'enemies, pickups, and lockers'],
	[/loot, chests, and vehicles/gi, 'pickups, lockers, and caches'],
	[/see players, loot, vehicles/gi, 'see enemies, pickups, and lockers'],
	[/live matches/gi, 'live missions'],
	[/in BR —/gi, 'in co-op —'],
	[/\bBR loop\b/gi, 'mission loop'],
	[/\bBR players\b/gi, 'loot runs players'],
	[/\bBR stack\b/gi, 'full cheat stack'],
	[/\bin BR\b/gi, 'in missions'],
	[/in BR and/gi, 'in squad extractions and'],
	[/ghostware rust/gi, 'ghostware warframe'],
	[/rust wallhack/gi, 'deadside wallhack'],
	[/loot esp/gi, 'resource esp'],
	[/wipe-to-raid/gi, 'mission-to-rewards'],
	[/OW2/gi, 'Deadside'],
	[/payload corners/gi, 'objective corners'],
	[/payload escorts/gi, 'hot zones'],
	[/per-hero/gi, 'per-weapon'],
	[/hitscan and projectile/gi, 'primaries and secondaries'],
	[/AK, SMG, and bolt/gi, 'assault rifles, SMGs, and DMRs'],
	[/AK, SMG ve bolt/gi, 'rifle, shotgun ve sniper'],
	[/Hammer AR/gi, 'Soma Prime'],
	[/hammer ar/gi, 'soma prime'],
	[/box fights/gi, 'close-quarters fights'],
	[/creative 1v1s/gi, 'Simulacrum testing'],
	[/Creative warmup/gi, 'Simulacrum warmup'],
	[/Creative Mode/gi, 'Simulacrum'],
	[/island codes/gi, 'training scenarios'],
	[/Reboot Van/gi, 'defense objective'],
	[/control point/gi, 'defense objective'],
	[/battle royale/gi, 'loot runs'],
	[/loot objectives/gi, 'co-op missions'],
	[/Player, vehicle, and ability/gi, 'Enemy, vehicle or patrol unit, and ability'],
	[/vehicle threat cues/gi, 'vehicle or patrol unit threat cues'],
	[/vehicle cues/gi, 'vehicle or patrol unit cues'],
	[/vehicle pushes/gi, 'vehicle or patrol unit pushes'],
	[/vehicle ESP/gi, 'vehicle or patrol unit ESP'],
	[/vehicle and pickup/gi, 'vehicle or patrol unit and pickup'],
	[/vehicle positions/gi, 'vehicle or patrol unit positions'],
	[/building clears/gi, 'tileset clears'],
	[/pub lobbies/gi, 'public servers'],
	[/pubs\b/gi, 'public servers'],
	[/playlists/gi, 'mission types'],
	[/assault rifles/gi, 'rifles'],
	[/long-range AR /gi, 'long-range rifle '],
	[/AR beams/gi, 'rifle beams'],
	[/AR fights/gi, 'rifle fights'],
	[/AR and SMG/gi, 'rifle and shotgun'],
	[/AR \//gi, 'rifle/'],
	[/ SMG /gi, ' shotgun '],
	[/SMGs/gi, 'shotguns'],
	[/SMG profile/gi, 'shotgun profile'],
	[/SMG profiles/gi, 'shotgun profiles'],
	[/SMG tracking/gi, 'shotgun tracking'],
	[/SMG pushes/gi, 'shotgun pushes'],
	[/SMG in/gi, 'shotgun in'],
	[/first AR/gi, 'first rifle'],
	[/Deadside itself is published by/gi, 'Deadside is developed and published by'],
	[/loot runs lobbies/gi, 'loot runs'],
	[/large-scale battles and loot runs play/gi, 'open world and loot runs'],
	[/shows players, loot/gi, 'shows enemies, loot'],
	[/player ESP wallhack/gi, 'enemy ESP wallhack'],
	[/Player ESP/gi, 'Enemy ESP'],
	[/player ESP/gi, 'enemy ESP'],
	[/player outlines/gi, 'enemy outlines'],
	[/Player ESP boxes/gi, 'Enemy ESP boxes'],
	[/player boxes/gi, 'enemy boxes'],
	[/Player boxes/gi, 'Enemy boxes'],
	[/player ESP in/gi, 'enemy ESP in'],
	[/only need player ESP/gi, 'only need enemy ESP'],
	[/player ESP —/gi, 'enemy ESP —'],
	[/ability-only-meta-broken-aggressive-strategies/gi, 'deadside-cheats-complete-guide-2026'],
];

const FILES = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'src/data/site.ts',
	'scripts/generate-blog-posts.mjs',
	'src/data/schema.ts',
	'src/components/HomeSeo.astro',
	'src/data/i18n/gallery-ui.ts',
	'src/data/warframe.ts',
	'src/components/Gallery.astro',
	'src/data/page-sitemap.ts',
];

function applyRules(text) {
	let out = text;
	for (const [from, to] of RULES) {
		out = out.replace(from, to);
	}
	return out;
}

for (const rel of FILES) {
	const path = join(ROOT, rel);
	const next = applyRules(readFileSync(path, 'utf8'));
	writeFileSync(path, next);
	console.log('✓', rel);
}

// English UI image alts — canonical Deadside terminology
const uiPath = join(ROOT, 'scripts/i18n-data/ui-strings-part1.mjs');
let ui = readFileSync(uiPath, 'utf8');
ui = ui.replace(
	/aimbotCombat: '[^']+'/,
	"aimbotCombat: 'Deadside aimbot targeting a armored vehicle during a loot run'",
);
ui = ui.replace(
	/squadFight: '[^']+'/,
	"squadFight: 'Deadside squad co-op fight with ESP and aimbot active in a squad extraction'",
);
ui = ui.replace(
	/battleRoyale: '[^']+'/,
	"battleRoyale: 'Deadside loot runs fight with undetected ESP overlays'",
);
ui = ui.replace(
	/battleRoyaleIsland: '[^']+'/,
	"battleRoyaleIsland: 'Deadside cheats menu with per-weapon aimbot profiles'",
);
ui = ui.replace(
	/espWallhack: '[^']+'/,
	"espWallhack: 'Deadside ESP overlay highlighting enemy players and vehicles units through walls'",
);
ui = ui.replace(
	/playerEsp: '[^']+'/,
	"playerEsp: 'Deadside wallhack ESP boxes on Grineer, Corpus, and enemy vehicles in loot runs'",
);
ui = ui.replace(
	/rebootFight: '[^']+'/,
	"rebootFight: 'Deadside radar hack 2D minimap showing rotation routes in a squad extraction'",
);
writeFileSync(uiPath, ui);
console.log('✓ scripts/i18n-data/ui-strings-part1.mjs (en image alts)');

// Normalize rebootFight alts across all locale UI files (remove BR leftovers)
for (const part of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	const partPath = join(ROOT, 'scripts/i18n-data', part);
	let partUi = readFileSync(partPath, 'utf8');
	partUi = partUi.replace(/rebootFight: '[^']*'/g, "rebootFight: 'Deadside squad extraction defense fight with aimbot cheats active'");
	writeFileSync(partPath, partUi);
	console.log('✓ scripts/i18n-data/' + part);
}

console.log('Done. Run: npm run generate:i18n && node scripts/generate-blog-posts.mjs');
