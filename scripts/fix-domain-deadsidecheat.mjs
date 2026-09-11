#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = process.cwd();
const EXTS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html']);
const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);

function walk(dir) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (SKIP.has(entry.name)) continue;
		const path = join(dir, entry.name);
		if (entry.isDirectory()) {
			walk(path);
			continue;
		}
		if (!EXTS.has(extname(entry.name))) continue;
		const text = readFileSync(path, 'utf8');
		if (!text.includes('deadsidecheat.org')) continue;
		writeFileSync(path, text.replaceAll('deadsidecheat.org', 'deadsidecheat.org'), 'utf8');
		console.log('updated', path);
	}
}

walk(root);
