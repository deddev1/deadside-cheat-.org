import { getHomeLocaleRedirect } from './locale-redirect.js';
import { LOCALE_PATH_REDIRECTS } from './locale-path-redirects.js';

const CANONICAL_ORIGIN = 'https://deadsidecheat.org';
const APEX_HOST = 'deadsidecheat.org';
const WWW_HOST = 'www.deadsidecheat.org';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'enlistedcheats.org',
	'www.enlistedcheats.org',
	'deadsidecheat.org',
	'www.deadsidecheat.org',
	'arcraidershacks.net',
	'www.arcraidershacks.net',
	'arcraidershacks.com',
	'www.arcraidershacks.com',
	'overwatchhacks.com',
	'www.overwatchhacks.com',
	'warthunderhacks.net',
	'www.warthunderhacks.net',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/deadside-radar/': '/deadside-radar/',
	'/deadside-radar': '/deadside-radar/',
	'/deadside-wallhack/': '/deadside-wallhack/',
	'/deadside-wallhack': '/deadside-wallhack/',
	'/deadside-aimbot/': '/deadside-aimbot/',
	'/deadside-aimbot': '/deadside-aimbot/',
	'/deadside-esp/': '/deadside-esp/',
	'/deadside-esp': '/deadside-esp/',
	'/deadside-cheats/': '/deadside-cheats/',
	'/deadside-cheats': '/deadside-cheats/',
	'/warframe-radar/': '/deadside-radar/',
	'/warframe-radar': '/deadside-radar/',
	'/warframe-wallhack/': '/deadside-wallhack/',
	'/warframe-wallhack': '/deadside-wallhack/',
	'/warframe-aimbot/': '/deadside-aimbot/',
	'/warframe-aimbot': '/deadside-aimbot/',
	'/warframe-esp/': '/deadside-esp/',
	'/warframe-esp': '/deadside-esp/',
	'/warframe-cheats/': '/deadside-cheats/',
	'/warframe-cheats': '/deadside-cheats/',
	'/sitemap-0.xml': '/sitemap.xml',
	'/blog/deadside-cheats-2026-whats-new/': '/blog/cheats-guide-2026/',
	'/blog/deadside-cheats-2026-whats-new': '/blog/cheats-guide-2026/',
	'/blog/deadside-cheats-complete-guide-2026/': '/blog/cheats-guide-2026/',
	'/blog/deadside-cheats-complete-guide-2026': '/blog/cheats-guide-2026/',
	'/blog/deadside-cheats-buyers-guide/': '/blog/cheats-buyers/',
	'/blog/deadside-cheats-buyers-guide': '/blog/cheats-buyers/',
	'/blog/deadside-aimbot-settings-guide/': '/blog/aimbot-settings/',
	'/blog/deadside-aimbot-settings-guide': '/blog/aimbot-settings/',
	'/blog/deadside-esp-wallhack-explained/': '/blog/esp-wallhack/',
	'/blog/deadside-esp-wallhack-explained': '/blog/esp-wallhack/',
	'/blog/undetected-deadside-cheats-eac/': '/blog/undetected-eac/',
	'/blog/undetected-deadside-cheats-eac': '/blog/undetected-eac/',
	'/blog/deadside-cheats-vs-cheatvault-comparison/': '/blog/vs-cheatvault/',
	'/blog/deadside-cheats-vs-cheatvault-comparison': '/blog/vs-cheatvault/',
	'/blog/voidcheats-vs-deadside-cheats-two-week-test/': '/blog/vs-voidcheats/',
	'/blog/voidcheats-vs-deadside-cheats-two-week-test': '/blog/vs-voidcheats/',
	'/blog/deadside-cheats-vs-ghostware-features-pricing/': '/blog/vs-ghostware/',
	'/blog/deadside-cheats-vs-ghostware-features-pricing': '/blog/vs-ghostware/',
	'/blog/deadside-cheats-download-pc/': '/blog/cheats-download/',
	'/blog/deadside-cheats-download-pc': '/blog/cheats-download/',
	'/blog/deadside-hack-pc-guide/': '/blog/hack-pc/',
	'/blog/deadside-hack-pc-guide': '/blog/hack-pc/',
	'/blog/best-deadside-cheats-2026/': '/blog/best-cheats-2026/',
	'/blog/best-deadside-cheats-2026': '/blog/best-cheats-2026/',
	'/blog/deadside-radar-hack-guide/': '/blog/radar-hack/',
	'/blog/deadside-radar-hack-guide': '/blog/radar-hack/',
	'/blog/deadside-cheats-free-scams/': '/blog/free-scams/',
	'/blog/deadside-cheats-free-scams': '/blog/free-scams/',
	'/blog/deadside-cheats-windows-11-setup/': '/blog/win11-setup/',
	'/blog/deadside-cheats-windows-11-setup': '/blog/win11-setup/',
	'/guides/other-games/': '/guides/#other-games-guides',
	'/guides/other-games': '/guides/#other-games-guides',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/deadside-cheats/',
	'/fortnite-hacks/': '/deadside-cheats/',
	'/fortnite-aimbot': '/deadside-aimbot/',
	'/fortnite-aimbot/': '/deadside-aimbot/',
	'/fortnite-esp': '/deadside-esp/',
	'/fortnite-esp/': '/deadside-esp/',
	'/fortnite-wallhack': '/deadside-wallhack/',
	'/fortnite-wallhack/': '/deadside-wallhack/',
	'/undetected-fortnite-cheats': '/deadside-cheats/',
	'/undetected-fortnite-cheats/': '/deadside-cheats/',
	'/eac-bypass-fortnite': '/deadside-cheats/',
	'/eac-bypass-fortnite/': '/deadside-cheats/',
	'/eac-bypass': '/deadside-cheats/',
	'/eac-bypass/': '/deadside-cheats/',
	'/warzone-aimbot': '/deadside-aimbot/',
	'/warzone-aimbot/': '/deadside-aimbot/',
	'/warzone-esp': '/deadside-esp/',
	'/warzone-esp/': '/deadside-esp/',
	'/ricochet-bypass': '/deadside-cheats/',
	'/ricochet-bypass/': '/deadside-cheats/',
	'/arc-raiders-hacks': '/deadside-cheats/',
	'/arc-raiders-hacks/': '/deadside-cheats/',
	'/arc-raiders-esp': '/deadside-esp/',
	'/arc-raiders-esp/': '/deadside-esp/',
	'/arc-raiders-aimbot': '/deadside-aimbot/',
	'/arc-raiders-aimbot/': '/deadside-aimbot/',
	'/arc-raiders-wallhack': '/deadside-wallhack/',
	'/arc-raiders-wallhack/': '/deadside-wallhack/',
	'/arc-raiders-radar': '/deadside-radar/',
	'/arc-raiders-radar/': '/deadside-radar/',
	'/overwatch-hacks': '/deadside-cheats/',
	'/overwatch-hacks/': '/deadside-cheats/',
	'/overwatch-esp': '/deadside-esp/',
	'/overwatch-esp/': '/deadside-esp/',
	'/overwatch-aimbot': '/deadside-aimbot/',
	'/overwatch-aimbot/': '/deadside-aimbot/',
	'/overwatch-wallhack': '/deadside-wallhack/',
	'/overwatch-wallhack/': '/deadside-wallhack/',
	'/overwatch-radar': '/deadside-radar/',
	'/overwatch-radar/': '/deadside-radar/',
	'/war-thunder-hacks': '/deadside-cheats/',
	'/war-thunder-hacks/': '/deadside-cheats/',
	'/war-thunder-esp': '/deadside-esp/',
	'/war-thunder-esp/': '/deadside-esp/',
	'/war-thunder-aimbot': '/deadside-aimbot/',
	'/war-thunder-aimbot/': '/deadside-aimbot/',
	'/war-thunder-wallhack': '/deadside-wallhack/',
	'/war-thunder-wallhack/': '/deadside-wallhack/',
	'/war-thunder-radar': '/deadside-radar/',
	'/war-thunder-radar/': '/deadside-radar/',
	'/rust-hacks': '/deadside-cheats/',
	'/rust-hacks/': '/deadside-cheats/',
	'/rust-aimbot': '/deadside-aimbot/',
	'/rust-aimbot/': '/deadside-aimbot/',
	'/rust-esp': '/deadside-esp/',
	'/rust-esp/': '/deadside-esp/',
	'/deadside-cheats': '/deadside-cheats/',
	'/deadside-esp': '/deadside-esp/',
	'/deadside-aimbot': '/deadside-aimbot/',
	'/deadside-wallhack': '/deadside-wallhack/',
	'/deadside-radar': '/deadside-radar/',
	'/deadside-radar-hack': '/deadside-radar/',
	'/deadside-radar-hack/': '/deadside-radar/',
	'/undetected-deadside-cheats': '/deadside-cheats/',
	'/undetected-deadside-cheats/': '/deadside-cheats/',
	'/eac-bypass-deadside': '/deadside-cheats/',
	'/eac-bypass-deadside/': '/deadside-cheats/',
	'/deadside-cheats-2026': '/deadside-cheats/',
	'/deadside-cheats-2026/': '/deadside-cheats/',
	'/best-deadside-cheats': '/deadside-cheats/',
	'/best-deadside-cheats/': '/deadside-cheats/',
	'/deadside-cheat-download': '/pricing/',
	'/deadside-cheat-download/': '/pricing/',
	'/deadside-mod-menu': '/features/',
	'/deadside-mod-menu/': '/features/',
	'/deadside-soft-aim': '/deadside-aimbot/',
	'/deadside-soft-aim/': '/deadside-aimbot/',
	'/deadside-aimbot-hack': '/deadside-aimbot/',
	'/deadside-aimbot-hack/': '/deadside-aimbot/',
	'/deadside-esp-hack': '/deadside-esp/',
	'/deadside-esp-hack/': '/deadside-esp/',
	'/deadside-unlock-all': '/features/',
	'/deadside-unlock-all/': '/features/',
	'/blog/elitefn-vs-deadside-cheats-two-week-test': '/blog/vs-voidcheats/',
	'/blog/elitefn-vs-deadside-cheats-two-week-test/': '/blog/vs-voidcheats/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"media-src 'self'",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self' 'unsafe-inline'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

/** Partner guide routes — hub, wrappers, and legacy paths must never be indexed. */
function isPartnerGuidePath(pathname) {
	return pathname === '/guides' || pathname.startsWith('/guides/');
}

function applySecurityHeaders(headers, { html = false, noindex = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (noindex) {
		headers.set('X-Robots-Tag', 'noindex, nofollow');
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
	}
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		// Never redirect to the same URL — prevents loops if LEGACY_HOSTS is misconfigured.
		if (target.origin + target.pathname + target.search !== url.origin + url.pathname + url.search) {
			const headers = new Headers({
				Location: target.toString(),
				'Cache-Control': 'no-store',
				'CDN-Cache-Control': 'no-store',
				'Cloudflare-CDN-Cache-Control': 'no-store',
			});
			applySecurityHeaders(headers, { noindex: isPartnerGuidePath(mappedPath) });
			return new Response(null, { status: 301, headers });
		}
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers, {
			noindex: isPartnerGuidePath(url.pathname) || isPartnerGuidePath(pathRedirect.split('#')[0]),
		});
		return new Response(null, { status: 301, headers });
	}

	const localePathRedirect = LOCALE_PATH_REDIRECTS[url.pathname];
	if (localePathRedirect) {
		const headers = new Headers({
			Location: new URL(localePathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const homeLocaleRedirect = getHomeLocaleRedirect(
		url.pathname,
		url.search,
		context.request.headers,
	);
	if (homeLocaleRedirect) {
		const headers = new Headers({
			Location: new URL(homeLocaleRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 302, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, {
		html: isHtml,
		noindex: isPartnerGuidePath(url.pathname),
	});

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
