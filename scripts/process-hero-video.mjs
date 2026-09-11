#!/usr/bin/env node
/**
 * Compress a source MP4 for the homepage hero background and extract a WebP poster.
 *
 * Usage:
 *   node scripts/process-hero-video.mjs "C:\path\to\source.mp4"
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpegPath from 'ffmpeg-static';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const defaultSource =
	'C:\\Users\\3Tee System\\Downloads\\Deadside - Official Console Launch Trailer (online-video-cutter.com) (1).mp4';

const source = process.argv[2] ?? defaultSource;
const videoDir = join(root, 'public', 'videos');
const imageDir = join(root, 'public', 'images');
const outVideo = join(videoDir, 'deadside-hero.mp4');
const tmpFrame = join(imageDir, '.tmp-deadside-hero-poster.jpg');
const outPoster = join(imageDir, 'deadside-hero-video-poster.webp');
const outPoster480 = join(imageDir, 'deadside-hero-video-poster-480w.webp');

if (!existsSync(source)) {
	console.error(`Source video not found: ${source}`);
	process.exit(1);
}
if (!ffmpegPath) {
	console.error('ffmpeg-static binary not found');
	process.exit(1);
}

mkdirSync(videoDir, { recursive: true });
mkdirSync(imageDir, { recursive: true });

console.log('Compressing hero video (H.264, no audio, faststart)…');
execFileSync(
	ffmpegPath,
	[
		'-y',
		'-i',
		source,
		'-an',
		'-vf',
		'scale=min(1920\\,iw):-2:flags=lanczos',
		'-c:v',
		'libx264',
		'-preset',
		'slow',
		'-crf',
		'28',
		'-movflags',
		'+faststart',
		'-pix_fmt',
		'yuv420p',
		outVideo,
	],
	{ stdio: 'inherit' },
);

console.log('Extracting poster frame…');
execFileSync(
	ffmpegPath,
	['-y', '-ss', '00:00:01', '-i', outVideo, '-frames:v', '1', '-q:v', '2', tmpFrame],
	{ stdio: 'inherit' },
);

async function main() {
	console.log('Optimizing poster WebP…');
	await sharp(tmpFrame)
		.webp({ quality: 82, effort: 6 })
		.toFile(outPoster);
	await sharp(tmpFrame)
		.resize({ width: 480, withoutEnlargement: true })
		.webp({ quality: 72, effort: 6 })
		.toFile(outPoster480);

	if (existsSync(tmpFrame)) unlinkSync(tmpFrame);

	console.log(`✓ Hero video → ${outVideo}`);
	console.log(`✓ Poster → ${outPoster}`);
	console.log(`✓ Mobile poster → ${outPoster480}`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
