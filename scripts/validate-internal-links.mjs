#!/usr/bin/env node
/**
 * Scan repo for href="/..." internal links and verify targets exist at build time.
 * Run: node scripts/validate-internal-links.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const ENGLISH_PATHS = new Set([
	'/',
	'/deadside-esp/',
	'/deadside-aimbot/',
	'/features/',
	'/pricing/',
	'/setup/',
	'/updates/',
	'/faq/',
	'/support/',
	'/deadside-cheats/',
	'/deadside-wallhack/',
	'/deadside-radar/',
	'/privacy-policy/',
	'/refund-policy/',
	'/terms/',
	'/blog/',
	'/reviews/',
	'/guides/',
	'/guides/other-games/',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);

function walk(dir, out = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, out);
		else out.push(full);
	}
	return out;
}

function loadBlogSlugs() {
	const text = readFileSync(join(root, 'src/data/blog/posts.generated.ts'), 'utf8');
	const slugs = new Set();
	for (const m of text.matchAll(/slug:\s*"([^"]+)"/g)) {
		slugs.add(`/blog/${m[1]}/`);
	}
	return slugs;
}

function loadReviewSlugs() {
	const text = readFileSync(join(root, 'src/data/site.ts'), 'utf8');
	const slugs = new Set(['/reviews/']);
	for (const m of text.matchAll(/slug:\s*'([^']+)'/g)) {
		slugs.add(`/reviews/${m[1]}/`);
	}
	return slugs;
}

function loadGuideSlugs() {
	const path = join(root, 'src/data/guides/posts.generated.ts');
	try {
		const text = readFileSync(path, 'utf8');
		const slugs = new Set();
		for (const m of text.matchAll(/slug:\s*"([^"]+)"/g)) {
			slugs.add(`/guides/${m[1]}/`);
		}
		return slugs;
	} catch {
		return new Set();
	}
}

function loadLocaleBlogPaths() {
	const paths = new Set();
	const text = readFileSync(join(root, 'src/data/i18n/content.generated.ts'), 'utf8');
	for (const m of text.matchAll(/href=\\"(\/[^"\\]+)\\"/g)) {
		let href = m[1];
		if (!href.endsWith('/')) href += '/';
		if (href.startsWith('/blog/') || href.match(/^\/[a-z]{2}\//)) paths.add(href);
	}
	return paths;
}

const valid = new Set([...ENGLISH_PATHS, ...loadBlogSlugs(), ...loadReviewSlugs(), ...loadGuideSlugs()]);

const SCAN_EXT = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.css']);
const HREF_RE = /href=["'](\/(?!\/)[^"'#?]*)["']/g;

const ASSET_SUFFIX_RE = /\.(ico|png|webp|jpg|jpeg|gif|svg|xml|json|woff2?|css|js|mp4|webm|txt)$/i;

function isRoutableHref(href) {
	if (ASSET_SUFFIX_RE.test(href)) return false;
	return true;
}

const errors = [];
const scanRoots = [
	join(root, 'src'),
	join(root, 'scripts', 'i18n-data'),
];

for (const scanRoot of scanRoots) {
	const files = walk(scanRoot);
	for (const file of files) {
		if (!SCAN_EXT.has(file.slice(file.lastIndexOf('.')))) continue;
		const rel = relative(root, file);
		const content = readFileSync(file, 'utf8');
		for (const m of content.matchAll(HREF_RE)) {
			let href = m[1];
			if (!isRoutableHref(href)) continue;
			if (!href.endsWith('/')) href += '/';
			if (href.startsWith('http')) continue;
			if (/^\/[a-z]{2}\//.test(href)) continue;
			if (!valid.has(href)) {
				errors.push(`${rel}: ${href}`);
			}
		}
	}
}

if (errors.length) {
	console.error(`Found ${errors.length} broken internal link(s):\n`);
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}

console.log(`OK — ${valid.size} valid path prefixes/slugs; no broken English internal links in src/ or scripts/.`);
