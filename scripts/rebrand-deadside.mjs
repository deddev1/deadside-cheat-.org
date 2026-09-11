#!/usr/bin/env node
/**
 * Bulk rebrand Enlisted Cheats → Deadside Cheats (deadsidecheat.org)
 */
import { readFileSync, writeFileSync, readdirSync, renameSync, existsSync, unlinkSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'rebrand-deadside.mjs',
	'rebrand-enlisted.mjs',
	'rebrand-warframe.mjs',
	'rebrand-war-thunder.mjs',
	'rebrand-overwatch.mjs',
	'rebrand-arc-raiders.mjs',
	'adapt-rust.mjs',
]);

/** Longest / most specific replacements first. */
const REPLACEMENTS = [
	['https://www.enlistedcheats.org', 'https://deadsidecheat.org'],
	['https://enlistedcheats.org', 'https://deadsidecheat.org'],
	['http://www.enlistedcheats.org', 'https://deadsidecheat.org'],
	['http://enlistedcheats.org', 'https://deadsidecheat.org'],
	['www.enlistedcheats.org', 'www.deadsidecheat.org'],
	['enlistedcheats.org', 'deadsidecheat.org'],
	['support@enlistedcheats.org', 'support@deadsidecheat.org'],
	['/enlisted-wallhack/', '/deadside-wallhack/'],
	['/enlisted-aimbot/', '/deadside-aimbot/'],
	['/enlisted-radar/', '/deadside-radar/'],
	['/enlisted-esp/', '/deadside-esp/'],
	['/enlisted-cheats/', '/deadside-cheats/'],
	['/enlisted-wallhack', '/deadside-wallhack'],
	['/enlisted-aimbot', '/deadside-aimbot'],
	['/enlisted-radar', '/deadside-radar'],
	['/enlisted-esp', '/deadside-esp'],
	['/enlisted-cheats', '/deadside-cheats'],
	['data-enlisted-cheats-video', 'data-deadside-cheats-video'],
	['enlisted-cheats-bg-video.js', 'deadside-cheats-bg-video.js'],
	['enlisted-cheats-video-poster.webp', 'deadside-cheats-video-poster.webp'],
	['enlisted-cheats-preview.mp4', 'deadside-cheats-preview.mp4'],
	['enlisted-cheats-hero.webp', 'deadside-cheats-hero.webp'],
	['enlisted-cheats-main-menu.webp', 'deadside-cheats-main-menu.webp'],
	['enlisted-esp-wallhack-overlay.webp', 'deadside-esp-wallhack-overlay.webp'],
	['enlisted-esp-enemy-boxes.webp', 'deadside-esp-enemy-boxes.webp'],
	['enlisted-aimbot-targeting-menu.webp', 'deadside-aimbot-targeting-menu.webp'],
	['enlisted-radar-hack-minimap.webp', 'deadside-radar-hack-minimap.webp'],
	['enlisted-cheats-combat-esp.webp', 'deadside-cheats-combat-esp.webp'],
	['enlisted-campaign-mission-esp.webp', 'deadside-loot-run-esp.webp'],
	['enlisted-squad-aimbot-combat.webp', 'deadside-squad-aimbot-combat.webp'],
	['enlisted-battlefield-radar.webp', 'deadside-open-world-radar.webp'],
	['enlisted-supply-esp.webp', 'deadside-loot-esp.webp'],
	['enlisted-cheats-settings-panel.webp', 'deadside-cheats-settings-panel.webp'],
	['enlisted-mission.webp', 'deadside-raid.webp'],
	['enlisted-esp-overlay.webp', 'deadside-esp-overlay.webp'],
	['enlisted-gameplay-wallhack.webp', 'deadside-gameplay-wallhack.webp'],
	['enlisted-gameplay-esp.webp', 'deadside-gameplay-esp.webp'],
	['enlisted-gameplay-aimbot.webp', 'deadside-gameplay-aimbot.webp'],
	['enlisted-gameplay-radar-combat.webp', 'deadside-gameplay-radar-combat.webp'],
	['enlisted-gameplay-radar-map.webp', 'deadside-gameplay-radar-map.webp'],
	['enlisted-pricing-shop-bg.webp', 'deadside-pricing-shop-bg.webp'],
	['enlisted-reviews-bg.webp', 'deadside-reviews-bg.webp'],
	['enlisted-faq-bg.jpg', 'deadside-faq-bg.jpg'],
	['enlisted-features-bg.webp', 'deadside-features-bg.webp'],
	['enlisted-official-panorama.webp', 'deadside-official-panorama.webp'],
	['enlisted-official-squad-combat.webp', 'deadside-official-squad-combat.webp'],
	['enlisted-official-squad-thumb.webp', 'deadside-official-squad-thumb.webp'],
	['enlisted-navbar-logo.webp', 'deadside-navbar-logo.webp'],
	['enlisted-logo-mark.svg', 'deadside-logo-mark.svg'],
	['/images/enlisted', '/images/deadside'],
	['/videos/enlisted', '/videos/deadside'],
	['enlisted-unlock-all', 'deadside-unlock-all'],
	['enlisted-wallhack', 'deadside-wallhack'],
	['enlisted-aimbot-hack', 'deadside-aimbot-hack'],
	['enlisted-esp-hack', 'deadside-esp-hack'],
	['enlisted-cheat-download', 'deadside-cheat-download'],
	['enlisted-cheats-2026', 'deadside-cheats-2026'],
	['enlisted-mod-menu', 'deadside-mod-menu'],
	['enlisted-soft-aim', 'deadside-soft-aim'],
	['best-enlisted-cheats', 'best-deadside-cheats'],
	['undetected-enlisted-cheats', 'undetected-deadside-cheats'],
	['eac-bypass-enlisted', 'eac-bypass-deadside'],
	['enlisted-aimbot', 'deadside-aimbot'],
	['enlisted-radar-hack', 'deadside-radar-hack'],
	['enlisted-radar', 'deadside-radar'],
	['enlisted-esp', 'deadside-esp'],
	['enlisted-cheats', 'deadside-cheats'],
	['enlisted-battlefield-farming-guide', 'deadside-loot-farming-guide'],
	['enlisted-patch-notes-guide', 'deadside-patch-notes-guide'],
	['undetected-enlisted-cheats-eac', 'undetected-deadside-cheats-battleye'],
	['voidcheats-vs-enlisted-cheats-two-week-test', 'voidcheats-vs-deadside-cheats-two-week-test'],
	['elitefn-vs-enlisted-cheats-two-week-test', 'elitefn-vs-deadside-cheats-two-week-test'],
	['/products/enlisted', '/products/deadside'],
	['https://enlisted.net/en/game/about/', 'https://deadside.com/'],
	['https://enlisted.net/en/news/', 'https://store.steampowered.com/news/?appids=895400'],
	['https://enlisted.net/', 'https://deadside.com/'],
	['https://enlisted.fandom.com/wiki/Enlisted_Wiki', 'https://deadside.fandom.com/wiki/Deadside_Wiki'],
	['enlisted.fandom.com', 'deadside.fandom.com'],
	['enlisted.net', 'deadside.com'],
	['Eastern Front, Western Front, and urban combat maps', 'military compounds, towns, and highway routes'],
	['Eastern Front, Western Front, and defense sectors', 'map sectors, towns, and extraction zones'],
	['Eastern Front and Western Front campaign routes', 'loot routes across the open map'],
	['Eastern Front and urban maps', 'military zones and towns'],
	['Eastern Front maps', 'northern map sectors'],
	['Western Front maps', 'southern map sectors'],
	['urban combat maps', 'abandoned towns'],
	['tank assault missions', 'armored convoy fights'],
	['duo squad assaults', 'duo loot runs'],
	['Campaign and squad assault presets', 'PvP and loot-run presets'],
	['Campaign & squad assault presets', 'PvP & loot-run presets'],
	['Campaign and squad assault modifier stacks', 'loot-run and PvP modifier stacks'],
	['Campaign enemy density and squad assault modifiers', 'open-world player density and hot-zone modifiers'],
	['campaign missions, squad assaults, and large-scale battles', 'loot runs, squad pushes, and open-world PvP'],
	['campaign missions, squad assaults, and battlefield maps', 'loot runs, extractions, and open-world routes'],
	['campaign missions and large-scale battles', 'loot runs and open-world firefights'],
	['campaign missions and squad assaults', 'loot runs and squad extractions'],
	['campaign missions', 'loot runs'],
	['campaign mission', 'loot run'],
	['squad assault modifier stacks', 'extraction push modifier stacks'],
	['squad assault combat', 'squad PvP combat'],
	['squad assault', 'squad extraction'],
	['squad assaults', 'squad extractions'],
	['Infantry, tank & artillery ESP', 'Player, vehicle & patrol ESP'],
	['infantry, tanks, and artillery', 'players, vehicles, and patrols'],
	['infantry, tanks, artillery, and vehicles', 'players, vehicles, patrols, and drones'],
	['enemy infantry, tank crews, and artillery spotters', 'enemy players, vehicle crews, and AI scouts'],
	['enemy tank', 'armored vehicle'],
	['enemy infantry and tank crews', 'enemy players and vehicle crews'],
	['enemy infantry and tanks', 'enemy players and vehicles'],
	['infantry, tanks, and artillery units', 'players, vehicles, and patrol units'],
	['officers, tank commanders, and heavy vehicles', 'geared players, squad leaders, and armored trucks'],
	['officers, tank commanders, and command units', 'squad leaders, vehicle crews, and elite AI'],
	['Officer, tank & vehicle ESP', 'Geared player & vehicle ESP'],
	['command post assaults', 'compound raids'],
	['bunker emplacements', 'military bunkers'],
	['tanks and artillery', 'armored vehicles and turrets'],
	['tank or artillery unit', 'vehicle or patrol unit'],
	['enemy vehicles', 'enemy vehicles'],
	['enemy soldiers and vehicles', 'enemy players and vehicles'],
	['enemy soldier', 'enemy player'],
	['enemy soldiers', 'enemy players'],
	['squad soldiers', 'squad mates'],
	['your soldier', 'your operator'],
	['your squad soldiers', 'your squad mates'],
	['soldier can actually hit', 'operator can actually hit'],
	['Soldier ESP', 'Player ESP'],
	['soldier ESP', 'player ESP'],
	['artillery and tank threat', 'sniper and vehicle threat'],
	['reload and squad status markers', 'health and stamina markers'],
	['Reload and squad status tracking', 'Health and stamina tracking'],
	['reload timers', 'healing timers'],
	['Squad ESP', 'Squad ESP'],
	['smoke and cover effects', 'smoke and foliage'],
	['smoke and cover', 'smoke and hard cover'],
	['squad combat', 'close-quarters PvP'],
	['campaign map', 'open world map'],
	['supply missions', 'loot routes'],
	['defense runs', 'raid runs'],
	['defense sectors', 'hot zones'],
	['defense, assault, and conquest', 'raids, extractions, and PvP'],
	['defense, assault, and squad pushes', 'raids, extractions, and squad pushes'],
	['capture point', 'loot point'],
	['defense or assault objective', 'raid or extraction objective'],
	['public matches', 'public servers'],
	['Gaijin Enlisted status', 'Bad Pixel Deadside status'],
	['Gaijin Enlisted', 'Bad Pixel Deadside'],
	['Gaijin and Enlisted patches', 'Bad Pixel and Deadside patches'],
	['Gaijin', 'Bad Pixel'],
	['Enlisted update log', 'Deadside update log'],
	['Enlisted Intel', 'Deadside Intel'],
	['enlisted intel', 'deadside intel'],
	['Enlisted patch', 'Deadside patch'],
	['Enlisted patches', 'Deadside patches'],
	['Enlisted or anti-cheat patches', 'Deadside or anti-cheat patches'],
	['Enlisted punishes', 'Deadside punishes'],
	['Enlisted mixes', 'Deadside mixes'],
	['Enlisted game guides', 'Deadside game guides'],
	['Enlisted mission types', 'Deadside raid types'],
	['Enlisted Wiki', 'Deadside Wiki'],
	['open world missions', 'open-world raids'],
	['open world mission', 'open-world raid'],
	['battlefield objectives', 'loot and extraction objectives'],
	['battlefield', 'open world'],
	['battlefield content', 'open-world content'],
	['battlefield farming', 'loot farming'],
	['capture objectives', 'loot objectives'],
	['squad fights', 'squad firefights'],
	['squad fight', 'squad firefight'],
	['flank routes', 'rotation routes'],
	['flank pushes', 'third-party pushes'],
	['supply route', 'extraction route'],
	['Medkit & supply ESP', 'Medkit & loot ESP'],
	['medkits, ammo crates, and supply drops', 'medkits, ammo, and weapon crates'],
	['medkits', 'medkits'],
	['medkit markers', 'medkit markers'],
	['Supply crate & ammo markers', 'Loot crate & weapon markers'],
	['ammo, supplies, and equipment crates', 'ammo, weapons, and gear crates'],
	['supply tracking', 'loot tracking'],
	['supply ESP', 'loot ESP'],
	['rifles, SMGs, and sidearms', 'assault rifles, SMGs, and pistols'],
	['rifles, SMGs, and sniper rifles', 'assault rifles, SMGs, and DMRs'],
	['rifles, SMGs, and sidearms — tuned for campaign missions, squad assaults, and large-scale battles', 'assault rifles, SMGs, and pistols — tuned for loot runs, extractions, and open-world PvP'],
	['Enlisted Cheats', 'Deadside Cheats'],
	['Enlisted ESP', 'Deadside ESP'],
	['Enlisted Aimbot', 'Deadside Aimbot'],
	['Enlisted Wallhack', 'Deadside Wallhack'],
	['Enlisted wallhack', 'Deadside wallhack'],
	['Enlisted Radar', 'Deadside Radar'],
	['Enlisted radar', 'Deadside radar'],
	['Enlisted cheats', 'Deadside cheats'],
	['Enlisted cheat', 'Deadside cheat'],
	['Enlisted aimbot', 'Deadside aimbot'],
	['Enlisted battlefields', 'Deadside map zones'],
	['undetected enlisted cheats', 'undetected deadside cheats'],
	['enlisted wallhack', 'deadside wallhack'],
	['enlisted aimbot', 'deadside aimbot'],
	['enlisted esp', 'deadside esp'],
	['enlisted cheats', 'deadside cheats'],
	['enlisted cheats 2026', 'deadside cheats 2026'],
	['enlisted hack', 'deadside hack'],
	['Enlisted', 'Deadside'],
	['project-name=enlistedcheats', 'project-name=deadsidecheats'],
	['name = "enlisted-cheats-net"', 'name = "deadside-cheats-org"'],
	['name = "enlistedcheats"', 'name = "deadsidecheats"'],
	['"enlisted-cheats"', '"deadside-cheats"'],
	['Buy Enlisted Cheats', 'Buy Deadside Cheats'],
	["const APEX_HOST = 'enlistedcheats.org'", "const APEX_HOST = 'deadsidecheat.org'"],
	["const WWW_HOST = 'www.enlistedcheats.org'", "const WWW_HOST = 'www.deadsidecheat.org'"],
	["const CANONICAL_ORIGIN = 'https://enlistedcheats.org'", "const CANONICAL_ORIGIN = 'https://deadsidecheat.org'"],
	["if (lead.toLowerCase().includes('enlisted'))", "if (lead.toLowerCase().includes('deadside'))"],
	['return `Enlisted cheats — ${lead}`', 'return `Deadside cheats — ${lead}`'],
	['optimized for enlistedcheats.org', 'optimized for deadsidecheat.org'],
	['| enlistedcheats.org', '| deadsidecheat.org'],
	['| Enlisted Cheats', '| Deadside Cheats'],
	["shortName: 'EN'", "shortName: 'DS'"],
	["game: 'Enlisted'", "game: 'Deadside'"],
	['Enlisted Cheats logo', 'Deadside Cheats logo'],
	['crossed rifles emblem', 'Deadside tactical emblem'],
	['enlistedImages', 'deadsideImages'],
	['enlistedHeroVideo', 'deadsideHeroVideo'],
	['enlistedVideo', 'deadsideVideo'],
	['enlistedHeroImage', 'deadsideHeroImage'],
	['enlistedScreenshots', 'deadsideScreenshots'],
	['EnlistedScreenshot', 'DeadsideScreenshot'],
	["from './enlisted'", "from './deadside'"],
	["from '../data/enlisted'", "from '../data/deadside'"],
	['EnlistedAuthorityLinks', 'DeadsideAuthorityLinks'],
	['enlistedAuthorityLinks', 'deadsideAuthorityLinks'],
	['Hero-matched Enlisted palette', 'Hero-matched Deadside palette'],
	['Enlisted atmosphere images', 'Deadside atmosphere images'],
	['Enlisted-themed', 'Deadside-themed'],
	['WWII soldiers', 'Deadside operators'],
	['WWII battlefield', 'Deadside open world'],
	['WWII', 'survival'],
	['enlisted-authority-title', 'deadside-authority-title'],
	['Private — for enlistedcheats.org deployment only.', 'Private — for deadsidecheat.org deployment only.'],
	['for enlistedcheats.org', 'for deadsidecheat.org'],
	['public/enlisted/', 'public/deadside/'],
	['storage/v1/object/public/enlisted/', 'storage/v1/object/public/deadside/'],
	['fetch-enlisted-gameplay-images.mjs', 'fetch-deadside-gameplay-images.mjs'],
	['fetch-enlisted-official-images.mjs', 'fetch-deadside-official-images.mjs'],
];

const PAGE_DIR_RENAMES = [
	['enlisted-cheats', 'deadside-cheats'],
	['enlisted-esp', 'deadside-esp'],
	['enlisted-aimbot', 'deadside-aimbot'],
	['enlisted-wallhack', 'deadside-wallhack'],
	['enlisted-radar', 'deadside-radar'],
];

function walk(dir, files = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

function apply(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (result.includes(from)) result = result.split(from).join(to);
	}
	return result;
}

function renamePageDirs() {
	for (const [from, to] of PAGE_DIR_RENAMES) {
		const src = join(root, 'src', 'pages', from);
		const dest = join(root, 'src', 'pages', to);
		if (existsSync(src)) {
			renameSync(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		}
	}
}

function renameDataFile() {
	const src = join(root, 'src', 'data', 'enlisted.ts');
	const dest = join(root, 'src', 'data', 'deadside.ts');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed src/data/enlisted.ts → deadside.ts');
	} else if (existsSync(dest)) {
		let content = readFileSync(dest, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
	}
}

function renameComponent() {
	const src = join(root, 'src', 'components', 'EnlistedAuthorityLinks.astro');
	const dest = join(root, 'src', 'components', 'DeadsideAuthorityLinks.astro');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed EnlistedAuthorityLinks.astro → DeadsideAuthorityLinks.astro');
	} else if (existsSync(dest)) {
		let content = readFileSync(dest, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
	}
}

function renameBgVideoScript() {
	const src = join(root, 'public', 'scripts', 'enlisted-cheats-bg-video.js');
	const dest = join(root, 'public', 'scripts', 'deadside-cheats-bg-video.js');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed enlisted-cheats-bg-video.js → deadside-cheats-bg-video.js');
	} else if (existsSync(dest)) {
		let content = readFileSync(dest, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
	}
}

function renameImageFiles() {
	const imagesDir = join(root, 'public', 'images');
	if (!existsSync(imagesDir)) return;
	let renamed = 0;
	for (const entry of readdirSync(imagesDir)) {
		if (!entry.includes('enlisted')) continue;
		const newName = apply(entry);
		if (newName !== entry) {
			renameSync(join(imagesDir, entry), join(imagesDir, newName));
			renamed++;
		}
	}
	const videosDir = join(root, 'public', 'videos');
	if (existsSync(videosDir)) {
		for (const entry of readdirSync(videosDir)) {
			if (!entry.includes('enlisted')) continue;
			const newName = apply(entry);
			if (newName !== entry) {
				renameSync(join(videosDir, entry), join(videosDir, newName));
				renamed++;
			}
		}
	}
	console.log(`Renamed ${renamed} image/video files`);
}

function transformFiles() {
	const files = walk(root);
	let changed = 0;
	for (const file of files) {
		if (!TEXT_EXTENSIONS.has(extname(file))) continue;
		if (SKIP_FILES.has(file.split(/[/\\]/).pop())) continue;
		const original = readFileSync(file, 'utf8');
		const updated = apply(original);
		if (updated !== original) {
			writeFileSync(file, updated);
			changed++;
		}
	}
	console.log(`\nTransformed ${changed} files`);
}

function patchMiddlewareRedirects() {
	const file = join(root, 'functions', '_middleware.js');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);
	const extraRedirects = {
		'/enlisted-cheats': '/deadside-cheats/',
		'/enlisted-cheats/': '/deadside-cheats/',
		'/enlisted-esp': '/deadside-esp/',
		'/enlisted-esp/': '/deadside-esp/',
		'/enlisted-aimbot': '/deadside-aimbot/',
		'/enlisted-aimbot/': '/deadside-aimbot/',
		'/enlisted-wallhack': '/deadside-wallhack/',
		'/enlisted-wallhack/': '/deadside-wallhack/',
		'/enlisted-radar': '/deadside-radar/',
		'/enlisted-radar/': '/deadside-radar/',
	};
	for (const [from, to] of Object.entries(extraRedirects)) {
		const key = `'${from}': '${to}'`;
		if (!content.includes(key)) {
			content = content.replace(
				'const PATH_REDIRECTS = {',
				`const PATH_REDIRECTS = {\n\t'${from}': '${to}',`,
			);
		}
	}
	if (!content.includes("'enlistedcheats.org'")) {
		content = content.replace(
			"'www.enlistedcheats.org',",
			"'www.enlistedcheats.org',\n\t'enlistedcheats.org',",
		);
	}
	writeFileSync(file, content);
	console.log('Patched functions/_middleware.js redirects');
}

function patchPublicRedirects() {
	const file = join(root, 'public', '_redirects');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);
	const lines = [
		'/enlisted-cheats /deadside-cheats/ 301',
		'/enlisted-cheats/ /deadside-cheats/ 301',
		'/enlisted-esp /deadside-esp/ 301',
		'/enlisted-esp/ /deadside-esp/ 301',
		'/enlisted-aimbot /deadside-aimbot/ 301',
		'/enlisted-aimbot/ /deadside-aimbot/ 301',
		'/enlisted-wallhack /deadside-wallhack/ 301',
		'/enlisted-wallhack/ /deadside-wallhack/ 301',
		'/enlisted-radar /deadside-radar/ 301',
		'/enlisted-radar/ /deadside-radar/ 301',
	];
	for (const line of lines) {
		if (!content.includes(line.split(' ')[0])) {
			content += `\n${line}`;
		}
	}
	writeFileSync(file, content);
	console.log('Patched public/_redirects');
}

console.log('Rebranding Enlisted Cheats → Deadside Cheats...\n');
renamePageDirs();
renameDataFile();
renameComponent();
renameBgVideoScript();
renameImageFiles();
transformFiles();
patchMiddlewareRedirects();
patchPublicRedirects();
console.log('\nRebrand complete. Next: npm run generate:i18n && npm run generate:blog && npm run build:validate');
