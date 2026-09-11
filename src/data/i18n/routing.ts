import { siteConfig } from '../site';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'deadside-esp'
	| 'deadside-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac-bypass'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'deadside-esp': '/deadside-esp/',
	'deadside-aimbot': '/deadside-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/deadside-cheats/',
	wallhack: '/deadside-wallhack/',
	radar: '/deadside-radar/',
	'eac-bypass': '/deadside-cheats/',
	'cheats-2026': '/deadside-cheats/',
	hacks: '/deadside-cheats/',
	'cheat-download': '/pricing/',
	'mod-menu': '/features/',
	'soft-aim': '/deadside-aimbot/',
	'best-cheats': '/deadside-cheats/',
	'aimbot-hack': '/deadside-aimbot/',
	'esp-hack': '/deadside-esp/',
	'unlock-all': '/features/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/** Core English pages for sitemap.xml — focused deadside-cheats URLs only.
 * Thin keyword-duplicate landings redirect to these canonical pages.
 */
export const sitemapPageIds: PageId[] = [
	'home',
	'hacks',
	'deadside-esp',
	'deadside-aimbot',
	'wallhack',
	'radar',
	'features',
	'pricing',
	'setup',
	'updates',
	'faq',
	'support',
	'privacy',
	'refund',
	'terms',
];

/** Thin keyword landings — built for internal links; 301 to canonical pillar per locale. */
export const thinLandingCanonicalTargets: Partial<Record<PageId, PageId>> = {
	undetected: 'hacks',
	'cheats-2026': 'hacks',
	'eac-bypass': 'hacks',
	'cheat-download': 'pricing',
	'mod-menu': 'features',
	'soft-aim': 'deadside-aimbot',
	'best-cheats': 'hacks',
	'aimbot-hack': 'deadside-aimbot',
	'esp-hack': 'deadside-esp',
	'unlock-all': 'features',
};

export const thinLandingPageIds = Object.keys(thinLandingCanonicalTargets) as PageId[];

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'deadside-esp': {
		en: 'deadside-esp',
		es: 'trucos-deadside-esp',
		fr: 'triche-deadside-esp',
		de: 'deadside-esp-wallhack',
		pt: 'cheats-deadside-esp',
		it: 'trucchi-deadside-esp',
		nl: 'deadside-esp-wallhack',
		pl: 'cheaty-deadside-esp',
		ru: 'deadside-esp-chity',
		tr: 'deadside-esp-hile',
		ar: 'deadside-esp-wallhack',
		ja: 'deadside-esp-wallhack',
		ko: 'deadside-esp-wallhack',
		zh: 'deadside-esp-wallhack',
		hi: 'deadside-esp-wallhack',
		id: 'deadside-esp-wallhack',
		th: 'deadside-esp-wallhack',
		vi: 'deadside-esp-wallhack',
		uk: 'deadside-esp-chity',
		cs: 'deadside-esp-wallhack',
		ro: 'deadside-esp-wallhack',
		sv: 'deadside-esp-wallhack',
	},
	'deadside-aimbot': {
		en: 'deadside-aimbot',
		es: 'trucos-deadside-aimbot',
		fr: 'triche-deadside-aimbot',
		de: 'deadside-aimbot',
		pt: 'cheats-deadside-aimbot',
		it: 'trucchi-deadside-aimbot',
		nl: 'deadside-aimbot',
		pl: 'cheaty-deadside-aimbot',
		ru: 'deadside-aimbot-chity',
		tr: 'deadside-aimbot-hile',
		ar: 'deadside-aimbot',
		ja: 'deadside-aimbot',
		ko: 'deadside-aimbot',
		zh: 'deadside-aimbot',
		hi: 'deadside-aimbot',
		id: 'deadside-aimbot',
		th: 'deadside-aimbot',
		vi: 'deadside-aimbot',
		uk: 'deadside-aimbot-chity',
		cs: 'deadside-aimbot',
		ro: 'deadside-aimbot',
		sv: 'deadside-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-deadside',
		fr: 'fonctionnalites-triche-deadside',
		de: 'deadside-cheats-funktionen',
		pt: 'recursos-cheats-deadside',
		it: 'funzioni-trucchi-deadside',
		nl: 'deadside-cheats-functies',
		pl: 'funkcje-cheatow-deadside',
		ru: 'funkcii-chitov-deadside',
		tr: 'deadside-hile-ozellikleri',
		ar: 'deadside-cheats-features',
		ja: 'deadside-cheats-features',
		ko: 'deadside-cheats-features',
		zh: 'deadside-cheats-features',
		hi: 'deadside-cheats-features',
		id: 'deadside-cheats-features',
		th: 'deadside-cheats-features',
		vi: 'deadside-cheats-features',
		uk: 'funkcii-chitiv-deadside',
		cs: 'deadside-cheats-funkce',
		ro: 'functii-cheats-deadside',
		sv: 'deadside-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-deadside',
		fr: 'prix-triche-deadside',
		de: 'deadside-cheats-preise',
		pt: 'precos-cheats-deadside',
		it: 'prezzi-trucchi-deadside',
		nl: 'deadside-cheats-prijzen',
		pl: 'ceny-cheatow-deadside',
		ru: 'ceny-chitov-deadside',
		tr: 'deadside-hile-fiyatlari',
		ar: 'deadside-cheats-pricing',
		ja: 'deadside-cheats-pricing',
		ko: 'deadside-cheats-pricing',
		zh: 'deadside-cheats-pricing',
		hi: 'deadside-cheats-pricing',
		id: 'deadside-cheats-pricing',
		th: 'deadside-cheats-pricing',
		vi: 'deadside-cheats-pricing',
		uk: 'ciny-chitiv-deadside',
		cs: 'deadside-cheats-ceny',
		ro: 'preturi-cheats-deadside',
		sv: 'deadside-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-deadside',
		fr: 'installation-triche-deadside',
		de: 'deadside-cheats-installation',
		pt: 'instalacao-cheats-deadside',
		it: 'installazione-trucchi-deadside',
		nl: 'deadside-cheats-installatie',
		pl: 'instalacja-cheatow-deadside',
		ru: 'ustanovka-chitov-deadside',
		tr: 'deadside-hile-kurulum',
		ar: 'deadside-cheats-setup',
		ja: 'deadside-cheats-setup',
		ko: 'deadside-cheats-setup',
		zh: 'deadside-cheats-setup',
		hi: 'deadside-cheats-setup',
		id: 'deadside-cheats-setup',
		th: 'deadside-cheats-setup',
		vi: 'deadside-cheats-setup',
		uk: 'vstanovka-chitiv-deadside',
		cs: 'deadside-cheats-instalace',
		ro: 'instalare-cheats-deadside',
		sv: 'deadside-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-deadside',
		fr: 'mises-a-jour-triche-deadside',
		de: 'deadside-cheats-updates',
		pt: 'atualizacoes-cheats-deadside',
		it: 'aggiornamenti-trucchi-deadside',
		nl: 'deadside-cheats-updates',
		pl: 'aktualizacje-cheatow-deadside',
		ru: 'obnovleniya-chitov-deadside',
		tr: 'deadside-hile-guncellemeleri',
		ar: 'deadside-cheats-updates',
		ja: 'deadside-cheats-updates',
		ko: 'deadside-cheats-updates',
		zh: 'deadside-cheats-updates',
		hi: 'deadside-cheats-updates',
		id: 'deadside-cheats-updates',
		th: 'deadside-cheats-updates',
		vi: 'deadside-cheats-updates',
		uk: 'onovlennya-chitiv-deadside',
		cs: 'deadside-cheats-aktualizace',
		ro: 'actualizari-cheats-deadside',
		sv: 'deadside-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-deadside',
		fr: 'faq-triche-deadside',
		de: 'deadside-cheats-faq',
		pt: 'faq-cheats-deadside',
		it: 'faq-trucchi-deadside',
		nl: 'deadside-cheats-faq',
		pl: 'faq-cheatow-deadside',
		ru: 'faq-chitov-deadside',
		tr: 'deadside-hile-sss',
		ar: 'deadside-cheats-faq',
		ja: 'deadside-cheats-faq',
		ko: 'deadside-cheats-faq',
		zh: 'deadside-cheats-faq',
		hi: 'deadside-cheats-faq',
		id: 'deadside-cheats-faq',
		th: 'deadside-cheats-faq',
		vi: 'deadside-cheats-faq',
		uk: 'faq-chitiv-deadside',
		cs: 'deadside-cheats-faq',
		ro: 'faq-cheats-deadside',
		sv: 'deadside-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-deadside',
		fr: 'support-triche-deadside',
		de: 'deadside-cheats-support',
		pt: 'suporte-cheats-deadside',
		it: 'supporto-trucchi-deadside',
		nl: 'deadside-cheats-support',
		pl: 'wsparcie-cheatow-deadside',
		ru: 'podderzhka-chitov-deadside',
		tr: 'deadside-hile-destek',
		ar: 'deadside-cheats-support',
		ja: 'deadside-cheats-support',
		ko: 'deadside-cheats-support',
		zh: 'deadside-cheats-support',
		hi: 'deadside-cheats-support',
		id: 'deadside-cheats-support',
		th: 'deadside-cheats-support',
		vi: 'deadside-cheats-support',
		uk: 'pidtrymka-chitiv-deadside',
		cs: 'deadside-cheats-podpora',
		ro: 'suport-cheats-deadside',
		sv: 'deadside-cheats-support',
	},
	undetected: {
		en: 'undetected-deadside-cheats',
		es: 'trucos-deadside-indetectables',
		fr: 'triche-deadside-indetectable',
		de: 'unentdeckte-deadside-cheats',
		pt: 'cheats-deadside-indetectaveis',
		it: 'trucchi-deadside-indetectabili',
		nl: 'undetected-deadside-cheats',
		pl: 'niewykrywalne-cheats-deadside',
		ru: 'nedecektiruemye-chity-deadside',
		tr: 'tespit-edilemeyen-deadside-hileleri',
		ar: 'undetected-deadside-cheats',
		ja: 'undetected-deadside-cheats',
		ko: 'undetected-deadside-cheats',
		zh: 'undetected-deadside-cheats',
		hi: 'undetected-deadside-cheats',
		id: 'undetected-deadside-cheats',
		th: 'undetected-deadside-cheats',
		vi: 'undetected-deadside-cheats',
		uk: 'nedecektovani-chity-deadside',
		cs: 'undetected-deadside-cheats',
		ro: 'cheats-deadside-nedetectabile',
		sv: 'undetected-deadside-cheats',
	},
	wallhack: {
		en: 'deadside-wallhack',
		es: 'wallhack-trucos-deadside',
		fr: 'wallhack-triche-deadside',
		de: 'deadside-wallhack',
		pt: 'wallhack-cheats-deadside',
		it: 'wallhack-trucchi-deadside',
		nl: 'deadside-wallhack',
		pl: 'wallhack-cheatow-deadside',
		ru: 'wallhack-chity-deadside',
		tr: 'deadside-wallhack-hile',
		ar: 'deadside-wallhack',
		ja: 'deadside-wallhack',
		ko: 'deadside-wallhack',
		zh: 'deadside-wallhack',
		hi: 'deadside-wallhack',
		id: 'deadside-wallhack',
		th: 'deadside-wallhack',
		vi: 'deadside-wallhack',
		uk: 'wallhack-chity-deadside',
		cs: 'deadside-wallhack',
		ro: 'wallhack-cheats-deadside',
		sv: 'deadside-wallhack',
	},
	radar: {
		en: 'deadside-radar-hack',
		es: 'radar-hack-trucos-deadside',
		fr: 'radar-hack-triche-deadside',
		de: 'deadside-radar-hack',
		pt: 'radar-hack-cheats-deadside',
		it: 'radar-hack-trucchi-deadside',
		nl: 'deadside-radar-hack',
		pl: 'radar-hack-cheatow-deadside',
		ru: 'radar-hack-chity-deadside',
		tr: 'deadside-radar-hack',
		ar: 'deadside-radar-hack',
		ja: 'deadside-radar-hack',
		ko: 'deadside-radar-hack',
		zh: 'deadside-radar-hack',
		hi: 'deadside-radar-hack',
		id: 'deadside-radar-hack',
		th: 'deadside-radar-hack',
		vi: 'deadside-radar-hack',
		uk: 'radar-hack-chity-deadside',
		cs: 'deadside-radar-hack',
		ro: 'radar-hack-cheats-deadside',
		sv: 'deadside-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass-deadside',
		es: 'eac-bypass-deadside-trucos',
		fr: 'eac-bypass-deadside-triche',
		de: 'eac-bypass-deadside',
		pt: 'eac-bypass-deadside-cheats',
		it: 'eac-bypass-deadside-trucchi',
		nl: 'eac-bypass-deadside',
		pl: 'eac-bypass-deadside-cheatow',
		ru: 'eac-bypass-deadside-chity',
		tr: 'eac-bypass-deadside',
		ar: 'eac-bypass-deadside',
		ja: 'eac-bypass-deadside',
		ko: 'eac-bypass-deadside',
		zh: 'eac-bypass-deadside',
		hi: 'eac-bypass-deadside',
		id: 'eac-bypass-deadside',
		th: 'eac-bypass-deadside',
		vi: 'eac-bypass-deadside',
		uk: 'eac-bypass-deadside-chity',
		cs: 'eac-bypass-deadside',
		ro: 'eac-bypass-deadside-cheats',
		sv: 'eac-bypass-deadside',
	},
	'cheats-2026': {
		en: 'deadside-cheats-2026',
		es: 'trucos-deadside-2026',
		fr: 'triche-deadside-2026',
		de: 'deadside-cheats-2026',
		pt: 'cheats-deadside-2026',
		it: 'trucchi-deadside-2026',
		nl: 'deadside-cheats-2026',
		pl: 'cheaty-deadside-2026',
		ru: 'chity-deadside-2026',
		tr: 'deadside-hileleri-2026',
		ar: 'deadside-cheats-2026',
		ja: 'deadside-cheats-2026',
		ko: 'deadside-cheats-2026',
		zh: 'deadside-cheats-2026',
		hi: 'deadside-cheats-2026',
		id: 'deadside-cheats-2026',
		th: 'deadside-cheats-2026',
		vi: 'deadside-cheats-2026',
		uk: 'chity-deadside-2026',
		cs: 'deadside-cheats-2026',
		ro: 'cheats-deadside-2026',
		sv: 'deadside-cheats-2026',
	},
	hacks: {
		en: 'deadside-cheats',
		es: 'hacks-trucos-deadside',
		fr: 'hacks-triche-deadside',
		de: 'deadside-cheats',
		pt: 'hacks-cheats-deadside',
		it: 'hacks-trucchi-deadside',
		nl: 'deadside-cheats',
		pl: 'hacks-cheatow-deadside',
		ru: 'haksy-chity-deadside',
		tr: 'deadside-hile-hacks',
		ar: 'deadside-cheats',
		ja: 'deadside-cheats',
		ko: 'deadside-cheats',
		zh: 'deadside-cheats',
		hi: 'deadside-cheats',
		id: 'deadside-cheats',
		th: 'deadside-cheats',
		vi: 'deadside-cheats',
		uk: 'haksy-chity-deadside',
		cs: 'deadside-cheats',
		ro: 'hacks-cheats-deadside',
		sv: 'deadside-cheats',
	},
	'cheat-download': {
		en: 'deadside-cheat-download',
		es: 'descarga-trucos-deadside',
		fr: 'telechargement-triche-deadside',
		de: 'deadside-cheat-download',
		pt: 'download-cheats-deadside',
		it: 'download-trucchi-deadside',
		nl: 'deadside-cheat-download',
		pl: 'pobieranie-cheatow-deadside',
		ru: 'skachat-chity-deadside',
		tr: 'deadside-hile-indir',
		ar: 'deadside-cheat-download',
		ja: 'deadside-cheat-download',
		ko: 'deadside-cheat-download',
		zh: 'deadside-cheat-download',
		hi: 'deadside-cheat-download',
		id: 'deadside-cheat-download',
		th: 'deadside-cheat-download',
		vi: 'deadside-cheat-download',
		uk: 'zavantazhennya-chitiv-deadside',
		cs: 'deadside-cheat-download',
		ro: 'descarcare-cheats-deadside',
		sv: 'deadside-cheat-download',
	},
	'mod-menu': {
		en: 'deadside-mod-menu',
		es: 'menu-mod-trucos-deadside',
		fr: 'menu-mod-triche-deadside',
		de: 'deadside-mod-menu',
		pt: 'menu-mod-cheats-deadside',
		it: 'menu-mod-trucchi-deadside',
		nl: 'deadside-mod-menu',
		pl: 'menu-mod-cheatow-deadside',
		ru: 'mod-menu-chity-deadside',
		tr: 'deadside-mod-menu',
		ar: 'deadside-mod-menu',
		ja: 'deadside-mod-menu',
		ko: 'deadside-mod-menu',
		zh: 'deadside-mod-menu',
		hi: 'deadside-mod-menu',
		id: 'deadside-mod-menu',
		th: 'deadside-mod-menu',
		vi: 'deadside-mod-menu',
		uk: 'mod-menu-chity-deadside',
		cs: 'deadside-mod-menu',
		ro: 'meniu-mod-cheats-deadside',
		sv: 'deadside-mod-menu',
	},
	'soft-aim': {
		en: 'deadside-soft-aim',
		es: 'soft-aim-trucos-deadside',
		fr: 'soft-aim-triche-deadside',
		de: 'deadside-soft-aim',
		pt: 'soft-aim-cheats-deadside',
		it: 'soft-aim-trucchi-deadside',
		nl: 'deadside-soft-aim',
		pl: 'soft-aim-cheatow-deadside',
		ru: 'soft-aim-chity-deadside',
		tr: 'deadside-soft-aim',
		ar: 'deadside-soft-aim',
		ja: 'deadside-soft-aim',
		ko: 'deadside-soft-aim',
		zh: 'deadside-soft-aim',
		hi: 'deadside-soft-aim',
		id: 'deadside-soft-aim',
		th: 'deadside-soft-aim',
		vi: 'deadside-soft-aim',
		uk: 'soft-aim-chity-deadside',
		cs: 'deadside-soft-aim',
		ro: 'soft-aim-cheats-deadside',
		sv: 'deadside-soft-aim',
	},
	'best-cheats': {
		en: 'best-deadside-cheats',
		es: 'mejores-trucos-deadside',
		fr: 'meilleures-triches-deadside',
		de: 'beste-deadside-cheats',
		pt: 'melhores-cheats-deadside',
		it: 'migliori-trucchi-deadside',
		nl: 'beste-deadside-cheats',
		pl: 'najlepsze-cheats-deadside',
		ru: 'luchshie-chity-deadside',
		tr: 'en-iyi-deadside-hileleri',
		ar: 'best-deadside-cheats',
		ja: 'best-deadside-cheats',
		ko: 'best-deadside-cheats',
		zh: 'best-deadside-cheats',
		hi: 'best-deadside-cheats',
		id: 'best-deadside-cheats',
		th: 'best-deadside-cheats',
		vi: 'best-deadside-cheats',
		uk: 'naykrashchi-chity-deadside',
		cs: 'nejlepsi-deadside-cheats',
		ro: 'cele-mai-bune-cheats-deadside',
		sv: 'basta-deadside-cheats',
	},
	'aimbot-hack': {
		en: 'deadside-aimbot-hack',
		es: 'aimbot-hack-trucos-deadside',
		fr: 'aimbot-hack-triche-deadside',
		de: 'deadside-aimbot-hack',
		pt: 'aimbot-hack-cheats-deadside',
		it: 'aimbot-hack-trucchi-deadside',
		nl: 'deadside-aimbot-hack',
		pl: 'aimbot-hack-cheatow-deadside',
		ru: 'aimbot-hack-chity-deadside',
		tr: 'deadside-aimbot-hack',
		ar: 'deadside-aimbot-hack',
		ja: 'deadside-aimbot-hack',
		ko: 'deadside-aimbot-hack',
		zh: 'deadside-aimbot-hack',
		hi: 'deadside-aimbot-hack',
		id: 'deadside-aimbot-hack',
		th: 'deadside-aimbot-hack',
		vi: 'deadside-aimbot-hack',
		uk: 'aimbot-hack-chity-deadside',
		cs: 'deadside-aimbot-hack',
		ro: 'aimbot-hack-cheats-deadside',
		sv: 'deadside-aimbot-hack',
	},
	'esp-hack': {
		en: 'deadside-esp-hack',
		es: 'esp-hack-trucos-deadside',
		fr: 'esp-hack-triche-deadside',
		de: 'deadside-esp-hack',
		pt: 'esp-hack-cheats-deadside',
		it: 'esp-hack-trucchi-deadside',
		nl: 'deadside-esp-hack',
		pl: 'esp-hack-cheatow-deadside',
		ru: 'esp-hack-chity-deadside',
		tr: 'deadside-esp-hack',
		ar: 'deadside-esp-hack',
		ja: 'deadside-esp-hack',
		ko: 'deadside-esp-hack',
		zh: 'deadside-esp-hack',
		hi: 'deadside-esp-hack',
		id: 'deadside-esp-hack',
		th: 'deadside-esp-hack',
		vi: 'deadside-esp-hack',
		uk: 'esp-hack-chity-deadside',
		cs: 'deadside-esp-hack',
		ro: 'esp-hack-cheats-deadside',
		sv: 'deadside-esp-hack',
	},
	'unlock-all': {
		en: 'deadside-unlock-all',
		es: 'unlock-all-trucos-deadside',
		fr: 'unlock-all-triche-deadside',
		de: 'deadside-unlock-all',
		pt: 'unlock-all-cheats-deadside',
		it: 'unlock-all-trucchi-deadside',
		nl: 'deadside-unlock-all',
		pl: 'unlock-all-cheatow-deadside',
		ru: 'unlock-all-chity-deadside',
		tr: 'deadside-unlock-all',
		ar: 'deadside-unlock-all',
		ja: 'deadside-unlock-all',
		ko: 'deadside-unlock-all',
		zh: 'deadside-unlock-all',
		hi: 'deadside-unlock-all',
		id: 'deadside-unlock-all',
		th: 'deadside-unlock-all',
		vi: 'deadside-unlock-all',
		uk: 'unlock-all-chity-deadside',
		cs: 'deadside-unlock-all',
		ro: 'unlock-all-cheats-deadside',
		sv: 'deadside-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slugMap = localizedSlugs[pageId];
	if (!slugMap) {
		return englishPaths[pageId] ?? `/${locale}/`;
	}
	const slug = slugMap[locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return new URL(getLocalizedPath(pageId, locale), siteConfig.url).href;
}

/**
 * Canonical path for SEO — each locale page canonicalizes to its own localized URL.
 */
export function getCanonicalPath(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return getLocalizedPath(pageId, locale);
}

export function absoluteCanonicalUrl(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return absoluteLocalizedUrl(pageId, locale);
}

/** Full hreflang cluster — all locales plus x-default (English). */
export function getHreflangAlternates(pageId: PageId) {
	return [
		...locales.map((locale) => ({
			hreflang: locale.hreflang,
			href: absoluteLocalizedUrl(pageId, locale.code),
		})),
		{ hreflang: 'x-default' as const, href: absoluteLocalizedUrl(pageId, defaultLocale) },
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.cheats ?? 'Cheats', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
		{ label: labels.reviews ?? 'Reviews', href: '/reviews/' },
	];
	return items;
}
