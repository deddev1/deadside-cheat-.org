import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');

/** Seven unique Deadside cheat screenshots — keyword-mapped for deadsidecheats.org SEO. */
const SOURCES = [
	{
		url: 'https://cdn.wh-satano.ru/arcane-wt-s1.webp',
		file: 'deadside-cheats-hero.webp',
		alt: 'Deadside cheats main menu with ESP, wallhack, and aimbot toggles on PC',
	},
	{
		url: 'https://cdn.wh-satano.ru/arcane-wt-s2.webp',
		file: 'deadside-esp-overlay.webp',
		alt: 'Deadside ESP overlay showing enemy player positions and module health through terrain',
	},
	{
		url: 'https://cdn.wh-satano.ru/arcane-wt-s3.webp',
		file: 'deadside-esp-enemies.webp',
		alt: 'Deadside wallhack ESP with enemy outline boxes and distance readouts in loot runs',
	},
	{
		url: 'https://cdn.wh-satano.ru/smg-wt-s1.webp',
		file: 'deadside-esp-modules.webp',
		alt: 'Deadside aimbot lead calculator lock on enemy player turret during squad firefight',
	},
	{
		url: 'https://cdn.wh-satano.ru/smg-wt-s2.webp',
		file: 'deadside-aimbot-menu.webp',
		alt: 'Deadside cheats cheat menu with aimbot, ballistic prediction, and FOV settings',
	},
	{
		url: 'https://cdn.wh-satano.ru/smg-wt-s3.webp',
		file: 'deadside-radar-hack.webp',
		alt: 'Deadside radar hack 2D overlay showing rotation routes and enemy aircraft',
	},
	{
		url: 'https://cdn.wh-satano.ru/wtfecs1.webp',
		file: 'deadside-raid.webp',
		alt: 'Deadside cheats loot run with ESP boxes and aimbot active on capture zone',
	},
];

const VARIANT_WIDTHS = [480, 640, 960, 1400];

async function download(url) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function writeMaster(buffer, file) {
	const masterPath = join(outDir, file);
	await writeFile(masterPath, buffer);
	return masterPath;
}

async function writeVariants(buffer, file) {
	const base = file.replace(/\.webp$/i, '');
	for (const width of VARIANT_WIDTHS) {
		const variantPath = join(outDir, `${base}-${width}w.webp`);
		await sharp(buffer)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: 82 })
			.toFile(variantPath);
	}
}

await mkdir(outDir, { recursive: true });

for (const item of SOURCES) {
	console.log(`Fetching ${item.file}…`);
	const buffer = await download(item.url);
	await writeMaster(buffer, item.file);
	await writeVariants(buffer, item.file);
	console.log(`  ✓ ${item.file} (+ variants)`);
}

console.log('Done — 7 Deadside cheat images installed.');
