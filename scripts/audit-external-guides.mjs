#!/usr/bin/env node
/** Prints audit table for external guides manifest. */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildManifest } from './external-guides-manifest.mjs';
import { guideIgnImages } from '../src/data/guides/ign-images.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const raw = readFileSync(join(__dirname, 'user-provided-guide-urls.txt'), 'utf8')
	.split('\n')
	.map((l) => l.trim())
	.filter(Boolean);
const manifest = buildManifest();

const lines = [
	`Total Provided (file lines): ${raw.length}`,
	`Dedicated Pages Created: ${manifest.length}`,
	`Missing: ${raw.length - manifest.length}`,
	'',
	'| Provided URL | Game/Niche | Created Page Path | IGN Image Used | Anchor Text Used |',
	'| --- | --- | --- | --- | --- |',
];

for (const entry of manifest) {
	const img = guideIgnImages[entry.gameId]?.src ?? '(missing)';
	lines.push(
		`| ${entry.url} | ${entry.gameName} | /guides/${entry.slug}/ | ${img} | ${entry.anchorText} |`,
	);
}

const out = join(__dirname, '..', 'GUIDES-AUDIT.md');
writeFileSync(out, lines.join('\n'), 'utf8');
console.log(lines.slice(0, 5).join('\n'));
console.log(`\nWrote ${out}`);
