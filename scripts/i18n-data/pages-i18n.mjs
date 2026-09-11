import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases, KW } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Deadside Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Deadside indetectables para Deadside en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Bad Pixel anti-cheat. Entrega digital instantánea.', h1: 'Deadside Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Deadside en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Bad Pixel anti-cheat tras cada parche.', imageAlt: 'Hero deadside-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Deadside Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Deadside Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en misiones y co-op missions.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Deadside Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Deadside indétectables pour Deadside sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Bad Pixel anti-cheat. Livraison numérique instantanée.', h1: 'Deadside Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Deadside sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Bad Pixel anti-cheat après chaque patch.', imageAlt: 'Hero deadside-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Deadside Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Deadside Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Idéal pour repérer les escouades ennemies en loot runs, squad extractions et missions en coop.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Deadside Cheats für Deadside auf PC. ESP Wallhack, Radar Hack und Aimbot mit Bad Pixel anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Deadside Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Deadside: ESP Wallhack, Radar und Aimbot mit Bad Pixel anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Deadside-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Deadside Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Deadside Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in missions und co-op missions zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Deadside Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Deadside indetectáveis para Deadside no PC. ESP wallhack, radar hack e Aimbot com manutenção Bad Pixel anti-cheat. Entrega digital instantánea.', h1: 'Deadside Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Deadside no Windows PC: ESP wallhack, radar e Aimbot com manutenção Bad Pixel anti-cheat após cada patch.', imageAlt: 'Hero deadside-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Deadside Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Deadside Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e co-op missions.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Deadside Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Deadside indetectable per Deadside su PC. ESP wallhack, radar hack e Aimbot con manutenzione Bad Pixel anti-cheat. Consegna digitale istantanea.', h1: 'Deadside Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Deadside su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Bad Pixel anti-cheat dopo ogni patch.', imageAlt: 'Hero deadside-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Deadside Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Deadside Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in missions e co-op missions.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Deadside cheats voor Deadside op PC. ESP wallhack, radar hack en Aimbot met Bad Pixel anti-cheat-onderhoud. Directe digitale levering.', h1: 'Deadside Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Deadside: ESP wallhack, radar en Aimbot met Bad Pixel anti-cheat-onderhoud na elke patch.', imageAlt: 'Deadside-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Deadside Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Deadside Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in missions en co-op missions.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Deadside Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Deadside dla Deadside na PC. ESP wallhack, radar hack i Aimbot z konserwacją Bad Pixel anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Deadside Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Deadside na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Bad Pixel anti-cheat po każdym patchu.', imageAlt: 'Hero deadside-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Deadside Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Deadside Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i co-op missions.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Deadside Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Deadside для Deadside на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Bad Pixel anti-cheat. Мгновенная цифровая доставка.', h1: 'Deadside Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Deadside на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Bad Pixel anti-cheat после патчей.', imageAlt: 'Hero deadside-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Deadside Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Deadside Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и co-op missions.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Deadside Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Deadside için undetected hileler. ESP wallhack, radar hack ve Aimbot — Bad Pixel anti-cheat bakımı. Anında dijital teslimat.', h1: 'Deadside Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Deadside Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Bad Pixel anti-cheat bakımı dahil.', imageAlt: 'Deadside-cheats player ESP wallhack ve Aimbot undetected', gallery: 'Deadside Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Deadside Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve co-op missions\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Deadside Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Deadside undetected لـ Deadside على PC. ESP wallhack ورadar hack وAimbot مع صيانة Bad Pixel anti-cheat. تسليم رقمي فوري.', h1: 'Deadside Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Deadside على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Bad Pixel anti-cheat.', imageAlt: 'Hero deadside-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Deadside Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Deadside Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وco-op missions.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Deadside Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Deadside向けundetectedチート。ESP wallhack、radar hack、Aimbot、Bad Pixel anti-cheatメンテナンス。即時デジタル配信。', h1: 'Deadside Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Deadside Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Bad Pixel anti-cheatメンテナンス付き。', imageAlt: 'deadside-cheats player ESP wallhackとAimbot undetected', gallery: 'Deadside Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にDeadside Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとco-op missionsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Deadside Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Deadside undetected 치트. ESP wallhack, radar hack, Aimbot, Bad Pixel anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Deadside Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Deadside Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Bad Pixel anti-cheat 유지보수 포함.', imageAlt: 'deadside-cheats player ESP wallhack 및 Aimbot undetected', gallery: 'Deadside Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Deadside Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 co-op missions에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Deadside Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Deadside undetected作弊。ESP wallhack、radar hack、Aimbot、Bad Pixel anti-cheat维护。即时数字交付。', h1: 'Deadside Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Deadside Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Bad Pixel anti-cheat维护。', imageAlt: 'deadside-cheats player ESP wallhack与Aimbot undetected', gallery: 'Deadside Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Deadside Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和co-op missions中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Deadside Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Deadside undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Deadside Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Deadside Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'deadside-cheats player ESP wallhack और Aimbot undetected', gallery: 'Deadside Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Deadside Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और co-op missions में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Deadside undetected untuk Deadside di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Bad Pixel anti-cheat. Pengiriman digital instan.', h1: 'Deadside Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Deadside di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Bad Pixel anti-cheat.', imageAlt: 'Hero deadside-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Deadside Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan co-op missions.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Deadside Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Deadside undetected สำหรับ Deadside บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Deadside Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Deadside บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero deadside-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Deadside Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ co-op missions', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Deadside undetected cho Deadside trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Bad Pixel anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Deadside Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Deadside trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Bad Pixel anti-cheat.', imageAlt: 'Hero deadside-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Deadside Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và co-op missions.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Deadside Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Deadside для Deadside на PC. ESP wallhack, radar hack, Aimbot, обслуговування Bad Pixel anti-cheat. Мгновенная цифровая доставка.', h1: 'Deadside Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Deadside на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Bad Pixel anti-cheat.', imageAlt: 'Hero deadside-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Deadside Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і co-op missions.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Deadside Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Deadside cheaty pro Deadside na PC. ESP wallhack, radar hack, Aimbot, údržba Bad Pixel anti-cheat. Okamžité digitální doručení.', h1: 'Deadside Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Deadside na Windows PC: ESP wallhack, radar, Aimbot s údržbou Bad Pixel anti-cheat.', imageAlt: 'Hero deadside-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Deadside Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a co-op missions.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Deadside Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Deadside undetected pentru Deadside pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Bad Pixel anti-cheat. Livrare digitală instantă.', h1: 'Deadside Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Deadside pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Bad Pixel anti-cheat.', imageAlt: 'Hero deadside-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Deadside Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și co-op missions.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Deadside cheats för Deadside på PC. ESP wallhack, radar hack, Aimbot, Bad Pixel anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Deadside Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Deadside på Windows PC: ESP wallhack, radar, Aimbot med Bad Pixel anti-cheat-underhåll.', imageAlt: 'Deadside-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Deadside Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Deadside Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och co-op missions.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(p.topicEnemySquads), p.s2()),
			section(m.h2b, p.s1(p.topicOneLicense), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'deadside-esp': { suffix: 'enemy boxes & Wallhack', focus: 'enemy boxes, medkit markers, and wallhack overlays' },
	'deadside-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'Anti-cheat maintenance Log', focus: 'anti-cheat patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and anti-cheat questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'Anti-cheat safe Status', focus: 'undetected maintenance after Bad Pixel anti-cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how anti-cheat updates are handled for Deadside Cheats' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Deadside cheats checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Deadside Cheats pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Deadside cheats' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Deadside' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Deadside Cheats', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Deadside Cheats ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(stripZadeyoFromMeta(p.metaDesc(topicName))),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} — ${p.maps}.`),
		imageAlt: `deadside-cheats ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Deadside Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(p.espRead), p.s2()),
			section(p.sectionEspUndetected, p.s1(p.overlayToggle), p.s3()),
			section(p.delivery.charAt(0).toUpperCase() + p.delivery.slice(1), p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'deadside-esp': { en: 'Deadside ESP', es: 'Deadside ESP', fr: 'Deadside ESP', de: 'Deadside ESP', pt: 'Deadside ESP', it: 'Deadside ESP', nl: 'Deadside ESP', pl: 'Deadside ESP', ru: 'Deadside ESP', tr: 'Deadside ESP', ar: 'Deadside ESP', ja: 'Deadside ESP', ko: 'Deadside ESP', zh: 'Deadside ESP', hi: 'Deadside ESP', id: 'Deadside ESP', th: 'Deadside ESP', vi: 'Deadside ESP', uk: 'Deadside ESP', cs: 'Deadside ESP', ro: 'Deadside ESP', sv: 'Deadside ESP' },
	'deadside-aimbot': { en: 'Deadside Aimbot', es: 'Deadside Aimbot', fr: 'Deadside Aimbot', de: 'Deadside Aimbot', pt: 'Deadside Aimbot', it: 'Deadside Aimbot', nl: 'Deadside Aimbot', pl: 'Deadside Aimbot', ru: 'Deadside Aimbot', tr: 'Deadside Aimbot', ar: 'Deadside Aimbot', ja: 'Deadside Aimbot', ko: 'Deadside Aimbot', zh: 'Deadside Aimbot', hi: 'Deadside Aimbot', id: 'Deadside Aimbot', th: 'Deadside Aimbot', vi: 'Deadside Aimbot', uk: 'Deadside Aimbot', cs: 'Deadside Aimbot', ro: 'Deadside Aimbot', sv: 'Deadside Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Deadside Wallhack', es: 'Deadside Wallhack', fr: 'Deadside Wallhack', de: 'Deadside Wallhack', pt: 'Deadside Wallhack', it: 'Deadside Wallhack', nl: 'Deadside Wallhack', pl: 'Deadside Wallhack', ru: 'Deadside Wallhack', tr: 'Deadside Wallhack', ar: 'Deadside Wallhack', ja: 'Deadside Wallhack', ko: 'Deadside Wallhack', zh: 'Deadside Wallhack', hi: 'Deadside Wallhack', id: 'Deadside Wallhack', th: 'Deadside Wallhack', vi: 'Deadside Wallhack', uk: 'Deadside Wallhack', cs: 'Deadside Wallhack', ro: 'Deadside Wallhack', sv: 'Deadside Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'Anti-cheat bypass', es: 'Bypass Bad Pixel anti-cheat', fr: 'Bypass Bad Pixel anti-cheat', de: 'Anti-cheat bypass', pt: 'Bypass Bad Pixel anti-cheat', it: 'Bypass Bad Pixel anti-cheat', nl: 'Anti-cheat bypass', pl: 'Bypass Bad Pixel anti-cheat', ru: 'Bypass Bad Pixel anti-cheat', tr: 'anti-cheat bypass', ar: 'Bypass Bad Pixel anti-cheat', ja: 'Anti-cheat bypass', ko: 'Anti-cheat bypass', zh: 'Anti-cheat bypass', hi: 'Anti-cheat bypass', id: 'Bypass Bad Pixel anti-cheat', th: 'Anti-cheat bypass', vi: 'Bypass Bad Pixel anti-cheat', uk: 'Bypass Bad Pixel anti-cheat', cs: 'Anti-cheat bypass', ro: 'Bypass Bad Pixel anti-cheat', sv: 'Anti-cheat bypass' },
	'cheats-2026': { en: 'Deadside Cheats 2026', es: 'Deadside Cheats 2026', fr: 'Deadside Cheats 2026', de: 'Deadside Cheats 2026', pt: 'Deadside Cheats 2026', it: 'Deadside Cheats 2026', nl: 'Deadside Cheats 2026', pl: 'Deadside Cheats 2026', ru: 'Deadside Cheats 2026', tr: 'Deadside Cheats 2026', ar: 'Deadside Cheats 2026', ja: 'Deadside Cheats 2026', ko: 'Deadside Cheats 2026', zh: 'Deadside Cheats 2026', hi: 'Deadside Cheats 2026', id: 'Deadside Cheats 2026', th: 'Deadside Cheats 2026', vi: 'Deadside Cheats 2026', uk: 'Deadside Cheats 2026', cs: 'Deadside Cheats 2026', ro: 'Deadside Cheats 2026', sv: 'Deadside Cheats 2026' },
	hacks: { en: 'Deadside Cheats', es: 'Deadside Cheats', fr: 'Deadside Cheats', de: 'Deadside Cheats', pt: 'Deadside Cheats', it: 'Deadside Cheats', nl: 'Deadside Cheats', pl: 'Deadside Cheats', ru: 'Deadside Cheats', tr: 'Deadside Cheats', ar: 'Deadside Cheats', ja: 'Deadside Cheats', ko: 'Deadside Cheats', zh: 'Deadside Cheats', hi: 'Deadside Cheats', id: 'Deadside Cheats', th: 'Deadside Cheats', vi: 'Deadside Cheats', uk: 'Deadside Cheats', cs: 'Deadside Cheats', ro: 'Deadside Cheats', sv: 'Deadside Cheats' },
	'cheat-download': { en: 'Deadside Cheats Download', es: 'Descarga Deadside Cheats', fr: 'Téléchargement Deadside Cheats', de: 'Deadside Cheats Download', pt: 'Download Deadside Cheats', it: 'Download Deadside Cheats', nl: 'Deadside Cheats Download', pl: 'Pobieranie Deadside Cheats', ru: 'Скачать Deadside Cheats', tr: 'Deadside Hile İndir', ar: 'Deadside Cheats Download', ja: 'Deadside Cheats Download', ko: 'Deadside Cheats Download', zh: 'Deadside Cheats Download', hi: 'Deadside Cheats Download', id: 'Deadside Cheats Download', th: 'Deadside Cheats Download', vi: 'Deadside Cheats Download', uk: 'Завантаження Deadside Cheats', cs: 'Deadside Cheats Download', ro: 'Descărcare Deadside Cheats', sv: 'Deadside Cheats Download' },
	'mod-menu': { en: 'Deadside Mod Menu', es: 'Deadside Mod Menu', fr: 'Deadside Mod Menu', de: 'Deadside Mod Menu', pt: 'Deadside Mod Menu', it: 'Deadside Mod Menu', nl: 'Deadside Mod Menu', pl: 'Deadside Mod Menu', ru: 'Deadside Mod Menu', tr: 'Deadside Mod Menu', ar: 'Deadside Mod Menu', ja: 'Deadside Mod Menu', ko: 'Deadside Mod Menu', zh: 'Deadside Mod Menu', hi: 'Deadside Mod Menu', id: 'Deadside Mod Menu', th: 'Deadside Mod Menu', vi: 'Deadside Mod Menu', uk: 'Deadside Mod Menu', cs: 'Deadside Mod Menu', ro: 'Deadside Mod Menu', sv: 'Deadside Mod Menu' },
	'soft-aim': { en: 'Deadside Soft Aim', es: 'Deadside Soft Aim', fr: 'Deadside Soft Aim', de: 'Deadside Soft Aim', pt: 'Deadside Soft Aim', it: 'Deadside Soft Aim', nl: 'Deadside Soft Aim', pl: 'Deadside Soft Aim', ru: 'Deadside Soft Aim', tr: 'Deadside Soft Aim', ar: 'Deadside Soft Aim', ja: 'Deadside Soft Aim', ko: 'Deadside Soft Aim', zh: 'Deadside Soft Aim', hi: 'Deadside Soft Aim', id: 'Deadside Soft Aim', th: 'Deadside Soft Aim', vi: 'Deadside Soft Aim', uk: 'Deadside Soft Aim', cs: 'Deadside Soft Aim', ro: 'Deadside Soft Aim', sv: 'Deadside Soft Aim' },
	'best-cheats': { en: 'Best Deadside Cheats', es: 'Mejores Deadside Cheats', fr: 'Meilleures Deadside Cheats', de: 'Beste Deadside Cheats', pt: 'Melhores Deadside Cheats', it: 'Migliori Deadside Cheats', nl: 'Beste Deadside Cheats', pl: 'Najlepsze Deadside Cheats', ru: 'Лучшие Deadside Cheats', tr: 'En İyi Deadside Hileleri', ar: 'Best Deadside Cheats', ja: 'Best Deadside Cheats', ko: 'Best Deadside Cheats', zh: 'Best Deadside Cheats', hi: 'Best Deadside Cheats', id: 'Best Deadside Cheats', th: 'Best Deadside Cheats', vi: 'Best Deadside Cheats', uk: 'Найкращі Deadside Cheats', cs: 'Nejlepší Deadside Cheats', ro: 'Cele mai bune Deadside Cheats', sv: 'Bästa Deadside Cheats' },
	'aimbot-hack': { en: 'Deadside Aimbot Hack', es: 'Deadside Aimbot Hack', fr: 'Deadside Aimbot Hack', de: 'Deadside Aimbot Hack', pt: 'Deadside Aimbot Hack', it: 'Deadside Aimbot Hack', nl: 'Deadside Aimbot Hack', pl: 'Deadside Aimbot Hack', ru: 'Deadside Aimbot Hack', tr: 'Deadside Aimbot Hack', ar: 'Deadside Aimbot Hack', ja: 'Deadside Aimbot Hack', ko: 'Deadside Aimbot Hack', zh: 'Deadside Aimbot Hack', hi: 'Deadside Aimbot Hack', id: 'Deadside Aimbot Hack', th: 'Deadside Aimbot Hack', vi: 'Deadside Aimbot Hack', uk: 'Deadside Aimbot Hack', cs: 'Deadside Aimbot Hack', ro: 'Deadside Aimbot Hack', sv: 'Deadside Aimbot Hack' },
	'esp-hack': { en: 'Deadside ESP Hack', es: 'Deadside ESP Hack', fr: 'Deadside ESP Hack', de: 'Deadside ESP Hack', pt: 'Deadside ESP Hack', it: 'Deadside ESP Hack', nl: 'Deadside ESP Hack', pl: 'Deadside ESP Hack', ru: 'Deadside ESP Hack', tr: 'Deadside ESP Hack', ar: 'Deadside ESP Hack', ja: 'Deadside ESP Hack', ko: 'Deadside ESP Hack', zh: 'Deadside ESP Hack', hi: 'Deadside ESP Hack', id: 'Deadside ESP Hack', th: 'Deadside ESP Hack', vi: 'Deadside ESP Hack', uk: 'Deadside ESP Hack', cs: 'Deadside ESP Hack', ro: 'Deadside ESP Hack', sv: 'Deadside ESP Hack' },
	'unlock-all': { en: 'Deadside Unlock All', es: 'Deadside Unlock All', fr: 'Deadside Unlock All', de: 'Deadside Unlock All', pt: 'Deadside Unlock All', it: 'Deadside Unlock All', nl: 'Deadside Unlock All', pl: 'Deadside Unlock All', ru: 'Deadside Unlock All', tr: 'Deadside Unlock All', ar: 'Deadside Unlock All', ja: 'Deadside Unlock All', ko: 'Deadside Unlock All', zh: 'Deadside Unlock All', hi: 'Deadside Unlock All', id: 'Deadside Unlock All', th: 'Deadside Unlock All', vi: 'Deadside Unlock All', uk: 'Deadside Unlock All', cs: 'Deadside Unlock All', ro: 'Deadside Unlock All', sv: 'Deadside Unlock All' },
};

const CTA2_HREF = {
	'deadside-esp': '/deadside-wallhack/',
	'deadside-aimbot': '/deadside-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/deadside-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/deadside-cheats/',
	wallhack: '/deadside-esp/',
	radar: '/deadside-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/deadside-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/deadside-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/deadside-aimbot/',
	'esp-hack': '/deadside-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Deadside Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(p.metaDesc(h1))),
		h1,
		intro: p.s1(`${h1} — deadsidecheats.org`),
		imageAlt: `deadside-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Deadside Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.legalCollect,
				kind === 'privacy' ? p.legalPayment : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.legalUse,
				kind === 'terms' ? p.legalRisk : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				p.legalEmail,
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
