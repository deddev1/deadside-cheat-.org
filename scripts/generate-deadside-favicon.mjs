import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const DEFAULT_SRC = join(publicDir, 'images', 'deadside-favicon-source.jpg');

const src = process.argv[2] || DEFAULT_SRC;

/** Make near-white / light flat pixels transparent (JPEG badge corners). */
async function stripLightBackground(buffer) {
	const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

	const { width, height, channels } = info;
	const px = data;
	const whiteFloor = 228;

	for (let i = 0; i < px.length; i += channels) {
		const r = px[i];
		const g = px[i + 1];
		const b = px[i + 2];
		const min = Math.min(r, g, b);
		const max = Math.max(r, g, b);
		const spread = max - min;

		const isNearWhite = min >= whiteFloor && spread <= 28;
		if (isNearWhite) {
			px[i + 3] = 0;
		}
	}

	return sharp(px, { raw: { width, height, channels: 4 } }).png();
}

async function masterPng() {
	let pipeline = sharp(src).rotate();

	try {
		pipeline = sharp(await sharp(src).rotate().trim({ threshold: 12 }).toBuffer());
	} catch {
		// trim can fail on some inputs; continue without
	}

	const contained = await pipeline
		.resize(512, 512, {
			fit: 'contain',
			background: { r: 0, g: 0, b: 0, alpha: 0 },
		})
		.png()
		.toBuffer();

	return stripLightBackground(contained);
}

const sizes = [
	{ name: 'favicon-16x16.png', size: 16 },
	{ name: 'favicon-32x32.png', size: 32 },
	{ name: 'favicon-48x48.png', size: 48 },
	{ name: 'apple-touch-icon.png', size: 180 },
	{ name: 'favicon.png', size: 192 },
	{ name: 'android-chrome-512x512.png', size: 512 },
];

await mkdir(publicDir, { recursive: true });

const master = await masterPng();
const masterBuf = await master.toBuffer();

for (const { name, size } of sizes) {
	const buf = await sharp(masterBuf)
		.resize(size, size, {
			fit: 'contain',
			background: { r: 0, g: 0, b: 0, alpha: 0 },
		})
		.png()
		.toBuffer();
	await writeFile(join(publicDir, name), buf);
}

const favicon32 = await sharp(masterBuf)
	.resize(32, 32, {
		fit: 'contain',
		background: { r: 0, g: 0, b: 0, alpha: 0 },
	})
	.png()
	.toBuffer();
await writeFile(join(publicDir, 'favicon.ico'), favicon32);

console.log(`Wrote transparent favicons to ${publicDir} from ${src}`);
