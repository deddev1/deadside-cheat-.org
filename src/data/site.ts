export const siteConfig = {
	name: 'Deadside Cheats',
	url: 'https://deadsidecheat.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@deadsidecheat.org',
	logo: '/images/deadside-navbar-logo.webp',
	logoRaster: '/images/deadside-navbar-logo.webp',
	logoRasterWidth: 1536,
	logoRasterHeight: 1024,
	logoAlt: 'Deadside Cheats tactical emblem',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fdeadside',
	defaultOgImage: '/images/deadside-hero-video-poster.webp',
	/** Bumped when favicon assets change — busts long-lived browser/CDN cache. */
	faviconVersion: 'deadside-badge-2026',
} as const;

export const productInfo = {
	name: 'Deadside Cheats',
	shortName: 'DS',
	brand: 'Deadside Cheats',
	tagline: 'Deadside cheats for PC — ESP, aimbot, and wallhack with updates after anti-cheat patches',
	summary:
		'Deadside Cheats is a Windows PC package with ESP, aimbot, and wallhack for Deadside. It works in loot runs, squad pushes, and open-world PvP, and we update it after anti-cheat and game patches.',
	game: 'Deadside',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Deadside or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	planSummaries: {
		monthly: [
			'ESP, aimbot, wallhack, and radar',
			'30 days access — $35',
			'anti-cheat updates while your license is active',
			'Instant digital delivery on Windows PC',
		],
		lifetime: [
			'ESP, aimbot, wallhack, and radar',
			'One-time $150 — no renewals',
			'anti-cheat updates for as long as you play',
			'Instant digital delivery on Windows PC',
		],
	},
	features: {
		esp: [
			'Player ESP across loot runs, squad pushes, and open-world PvP',
			'Enemy unit, vehicle, and vehicle or patrol unit outlines through terrain and obstacles',
			'Ability cooldown and health markers for frames and bosses',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for squad firefights',
		],
		aimbot: [
			'Smooth aim targeting for assault rifles, SMGs, and pistols',
			'Smoothness, FOV, and sensitivity controls',
			'Weak-spot priority and target selection options',
			'Hotkey toggles mid-fight without opening menus',
			'Per-weapon profiles for assault rifles, SMGs, and DMRs',
		],
		radar: [
			'2D radar for enemies outside your line of sight',
			'Directional cues for flanks and third-party pushes',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after Deadside patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

/** Quick-scan feature list for pricing page — full explanations live on /features/. */
export const productFeatureCategories = [
	{
		title: 'Aimbot & targeting',
		columns: 1 as const,
		items: [
			'Scoped weak-spot aimbot',
			'Custom FOV arc',
			'FOV circle overlay',
			'Target snaplines',
			'Custom aim hotkey',
			'Hold & toggle aim modes',
			'Aim smoothing slider',
			'Enemy soldier filter',
			'Weak-spot priority',
			'Per-weapon profiles',
		],
	},
	{
		title: 'ESP & wallhack',
		columns: 1 as const,
		items: [
			'Red enemy silhouettes',
			'Green wallhack boxes',
			'Skeleton ESP outlines',
			'Infantry & vehicle ESP',
			'Enemy bounding boxes',
			'Weak-spot markers',
			'Soldier name tags',
			'Distance readouts',
			'ESP distance filter',
			'Health & loot ESP',
		],
	},
	{
		title: 'Radar & intel',
		columns: 2 as const,
		items: [
			'2D open world radar',
			'Off-screen enemy arrows',
			'Snaplines to targets',
			'Squad assault presets',
			'Campaign mission presets',
			'In-match hotkey toggles',
			'Hotkey profiles',
			'Undetected status indicator',
			'In-game mod menu',
			'Supply crate markers',
			'Ammo & reload tracking',
			'Custom crosshair overlay',
		],
	},
] as const;

/** Detailed feature explanations for the /features/ page. */
export const productFeatureDetails = [
	{
		id: 'aimbot',
		title: 'Combat assist',
		summary:
			'Configurable aim assistance for assault rifles, SMGs, and pistols — tuned for loot runs, squad pushes, and open-world PvP.',
		items: [
			{
				name: 'Line-of-sight visibility check',
				description:
					'Only locks onto enemies your operator can actually hit — reduces obvious snaps through walls and smoke and hard cover.',
			},
			{
				name: 'Custom FOV arc',
				description:
					'Set how wide the aimbot scans for players, vehicles, and patrols units so close fights and sniper lanes both feel natural.',
			},
			{
				name: 'FOV circle overlay',
				description: 'Optional on-screen ring showing the active aimbot radius for quick tuning in squad extractions and loot runs.',
			},
			{
				name: 'Target snapline',
				description:
					'Snapline from crosshair to the current lock — useful for verifying weak-point priority on armored vehicles and turrets and enemy vehicles.',
			},
			{
				name: 'Custom aim hotkey',
				description: 'Hold or toggle aimbot with a key you choose — works alongside controller bindings on Windows PC.',
			},
			{
				name: 'Hold & toggle aim modes',
				description: 'Switch between hold-to-aim, toggle, and always-on profiles per weapon class.',
			},
			{
				name: 'Aim smoothing slider',
				description: 'Control how fast the reticle moves to the target — higher smoothness looks more natural in public servers.',
			},
			{
				name: 'Enemy type filter',
				description:
					'Prioritise closest enemy, lowest health, armored vehicles and turrets, or bosses like squad leaders, vehicle crews, and elite AI.',
			},
			{
				name: 'Weak-point targeting',
				description:
					'Bias locks toward weak-point hitboxes on players, vehicles, patrols, and drones units.',
			},
			{
				name: 'Per-weapon profiles',
				description:
					'Save separate aim settings for rifles, shotguns, snipers, and melee — swap mid-mission without retuning.',
			},
		],
	},
	{
		id: 'visual',
		title: 'ESP & overlays',
		summary:
			'ESP and wallhack overlays that surface enemies, loot, and mission threats through terrain and smoke and foliage.',
		items: [
			{
				name: 'Player, vehicle & patrol ESP',
				description:
					'Highlights enemy factions with boxes, health bars, and distance readouts across the open world map.',
			},
			{
				name: 'Outlines through terrain',
				description:
					'Clean outlines on players, vehicles, patrols, and drones units — even through smoke, cover, and smoke and foliage.',
			},
			{
				name: 'Enemy bounding boxes',
				description: 'Box ESP sized to each unit type for precise reads during close-quarters PvP and loot and extraction objectives.',
			},
			{
				name: 'Weak-point markers',
				description: 'Mark weak-point hitboxes for precision shots on armored vehicles and turrets, military bunkers, and compound raids.',
			},
			{
				name: 'Enemy facing indicator',
				description: 'See which way an enemy is facing before you push a corridor or capture a loot point.',
			},
			{
				name: 'Unit name labels',
				description: 'Display unit names above ESP boxes — enemy players, vehicle crews, and AI scouts, and more.',
			},
			{
				name: 'Distance readout',
				description: 'Meters-to-target on every box so you know when to swap weapons or abilities.',
			},
			{
				name: 'ESP distance filter',
				description:
					'Hide far-away clutter — keep overlays readable in map sectors, towns, and extraction zones.',
			},
			{
				name: 'Health orb & pickup ESP',
				description: 'Mark medkits, ammo, and weapon crates during long loot runs and raid runs.',
			},
			{
				name: 'Geared player & vehicle ESP',
				description:
					'Dedicated styling for geared players, squad leaders, and armored trucks in endgame content.',
			},
		],
	},
	{
		id: 'misc',
		title: 'Radar & mission tools',
		summary:
			'Radar, menu toggles, controller support, and quality-of-life tools bundled with every license.',
		items: [
			{
				name: '2D off-screen radar',
				description: 'Minimap-style blips for enemies outside your camera — great for raids, extractions, and PvP.',
			},
			{
				name: 'Defense wave direction cues',
				description: 'Directional hints when new enemy waves push toward your raid or extraction objective.',
			},
			{
				name: 'In-mission hotkey toggles',
				description: 'Flip ESP, radar, and aimbot on or off mid-mission without alt-tabbing.',
			},
			{
				name: 'Hotkey profiles',
				description: 'Save different bind layouts for mouse/keyboard and controller loadouts.',
			},
			{
				name: 'Controller support',
				description: 'Aimbot and menu navigation tested with Xbox and PlayStation pads on Windows.',
			},
			{
				name: 'Patch maintenance status',
				description: 'Maintenance status published on Updates after Bad Pixel and Deadside patches.',
			},
			{
				name: 'In-game mod menu',
				description: 'Full in-game menu for colours, categories, and per-module enable/disable.',
			},
			{
				name: 'Loot crate & weapon markers',
				description: 'Highlight ammo, weapons, and gear crates during farm runs, loot routes, and loot and extraction objectives.',
			},
			{
				name: 'Health and stamina tracking',
				description: 'Track enemy ability timers and your own cooldowns during complex boss and lich fights.',
			},
			{
				name: 'Custom crosshair',
				description: 'Replace the default reticle with sizes and colours that match your ESP theme.',
			},
			{
				name: 'Squad colour coding',
				description: 'Separate colours for your squad mates, allies, and enemies in public servers.',
			},
			{
				name: 'PvP & loot-run presets',
				description:
					'One-click ESP and radar profiles tuned for open-world player density and hot-zone modifiers.',
			},
		],
	},
] as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Deadside Cheats is live for Deadside on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Anti-cheat maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Deadside Cheats', href: '/deadside-cheats/' },
	{ label: 'Deadside ESP', href: '/deadside-esp/' },
	{ label: 'Deadside Aimbot', href: '/deadside-aimbot/' },
	{ label: 'Deadside wallhack', href: '/deadside-wallhack/' },
	{ label: 'Undetected status', href: '/deadside-cheats/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/deadside-cheats/' },
	{ label: 'Aimbot', href: '/deadside-aimbot/' },
	{ label: 'ESP', href: '/deadside-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Deadside update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Deadside Cheats', href: '/deadside-cheats/' },
	{ label: 'ESP', href: '/deadside-esp/' },
	{ label: 'Aimbot', href: '/deadside-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		category: 'Getting started',
		question: 'What is Deadside Cheats?',
		answer:
			'Deadside Cheats is a maintained Windows PC package for <a href="https://deadside.com/" target="_blank" rel="noopener noreferrer">Deadside</a> with <a href="/deadside-esp/">ESP page</a>, <a href="/deadside-wallhack/">wallhack</a>, <a href="/deadside-radar/">radar</a>, and <a href="/deadside-aimbot/">aimbot</a> controls. One license covers the full feature set plus <a href="/setup/">setup help</a>.',
	},
	{
		category: 'Getting started',
		question: 'What is included in one license?',
		answer:
			'Enemy ESP boxes, health and pickup markers, 2D radar overlays, and configurable aim assist — including per-weapon profiles and optional cloud DMA. See the <a href="/features/">full feature list</a> and compare <a href="/pricing/">license plans</a>.',
	},
	{
		category: 'Getting started',
		question: 'How are licenses delivered after checkout?',
		answer:
			'Licenses are delivered digitally after payment clears. Delivery timing can vary slightly by payment method. Keep your order confirmation handy if you contact <a href="/support/">our support team</a>.',
	},
	{
		category: 'Features & gameplay',
		question: 'Does this work for loot runs, squad pushes, and open-world PvP?',
		answer:
			'Yes. ESP and radar help you read enemy positions in loot runs, squad extractions, and <a href="/deadside-esp/">open-world PvP</a> routes like military compounds, towns, and highway pushes. Aim assist covers rifle, shotgun, and sniper profiles for solo or squad play.',
	},
	{
		category: 'Features & gameplay',
		question: 'Can I use a controller?',
		answer:
			'Controller support is available on Windows PC with adjustable FOV and aim settings. Menu navigation with a pad takes a little practice — see the <a href="/setup/">setup guide</a> for baseline values and <a href="/reviews/">player reviews</a> from controller players.',
	},
	{
		category: 'Features & gameplay',
		question: 'What is cloud DMA and do I need it?',
		answer:
			'Cloud DMA is an optional setup path for buyers who want hardware-assisted isolation instead of a standard loader. Most players start with the regular package. Read the <a href="/deadside-cheats/">main guide</a> and ask <a href="/support/">support</a> before choosing DMA.',
	},
	{
		category: 'Updates & support',
		question: 'Is Deadside Cheats permanently undetected?',
		answer:
			'No tool can promise permanent undetected status. Deadside is maintained by <a href="https://www.digitalextremes.com/" target="_blank" rel="noopener noreferrer">Bad Pixel</a> and receives regular patches. We rebuild after anti-cheat updates and post status on the <a href="/updates/">status page</a> — check there before you load in.',
	},
	{
		category: 'Updates & support',
		question: 'Where do I check status after a Deadside patch?',
		answer:
			'Start with our <a href="/updates/">Updates page</a>, then cross-check <a href="https://store.steampowered.com/news/?appids=895400" target="_blank" rel="noopener noreferrer">official PC update notes</a>. For how patches affect cheats, read our <a href="/deadside-cheats/">anti-cheat maintenance guide</a>.',
	},
	{
		category: 'Updates & support',
		question: 'How do I contact support?',
		answer:
			'Use the <a href="/support/">Support page</a> or email support@deadsidecheat.org with your order ID, Windows version, and a short description of the issue. Refund questions are covered on the <a href="/refund-policy/">refund policy</a> page.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		category: 'Product details',
		question: 'What is a Deadside wallhack?',
		answer:
			'A Deadside wallhack is an ESP overlay that highlights players, vehicles, patrols, and drones units through terrain. Deadside Cheats <a href="/deadside-wallhack/">wallhack</a> includes distance readouts, category toggles, and team colours for loot runs and open-world firefights.',
	},
	{
		category: 'Product details',
		question: 'Does Deadside Cheats include a radar hack?',
		answer:
			'Yes. <a href="/deadside-radar/">2D radar overlays</a> show nearby threats outside your direct view — useful for reading flanks during raids, extractions, and squad pushes.',
	},
	{
		category: 'Product details',
		question: 'How does anti-cheat affect Deadside Cheats?',
		answer:
			'Anti-cheat monitors Deadside on Windows PC. After major patches we publish maintenance notes on <a href="/updates/">Updates</a>. Read the <a href="/deadside-cheats/">maintenance guide</a> and <a href="/updates/">patch-day workflow</a> for what to expect after Bad Pixel updates.',
	},
	{
		category: 'Product details',
		question: 'Where can I read Deadside cheats guides?',
		answer:
			'Our <a href="/blog/">Deadside cheats guides</a> cover ESP, aimbot, wallhack, undetected status, vendor comparisons, setup, and anti-cheat maintenance after Bad Pixel patches. For official game lore and patch notes, see the <a href="https://deadside.fandom.com/wiki/Deadside_Wiki" target="_blank" rel="noopener noreferrer">Deadside Wiki</a> and <a href="https://store.steampowered.com/news/?appids=895400" target="_blank" rel="noopener noreferrer">official update notes</a>.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	title: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'krypt0_arc',
		title: 'Soft aim on loot runs',
		rating: 5,
		text: 'Using this for a few weeks on loot runs. Soft aim feels natural on rifles and I have not had issues in public squads. Took me a bit to figure out the menu layout but after that it has been smooth.',
		short: 'Using this for a few weeks on loot runs. Soft aim feels natural on rifles and I have not had issues in public squads.',
		slug: 'deadside-soft-aim-review-xkrypt0',
		seoTitle: 'Soft aim review by @krypt0_arc | Deadside Cheats',
		seoDescription:
			'Real Deadside cheats review from @krypt0_arc on soft aim for loot runs — natural rifle feel and stable squad play on Windows PC after setup.',
		date: '2026-03-14',
	},
	{
		handle: 'extractR4K',
		title: 'ESP on open world',
		rating: 4,
		text: 'ESP helps a lot on military zones and towns when you are trying to spot heavies on ridges before pushing the objective. Radar could be a little bigger on 1080p. Still happy with it for what I paid.',
		short: 'ESP helps on military zones and towns when spotting heavies before pushing the objective. Radar could be bigger on 1080p.',
		slug: 'deadside-esp-realistic-review-buildsr4k',
		seoTitle: 'ESP review by @extractR4K | Deadside Cheats',
		seoDescription:
			'Deadside cheats buyer review from @extractR4K — ESP boxes and radar for Eastern Front battles, spotting heavies before objective pushes on Windows PC.',
		date: '2026-02-08',
	},
	{
		handle: 'jakeDMA',
		title: 'Cloud DMA setup',
		rating: 5,
		text: 'I moved over from another tool that got flagged last patch. DMA setup sounded intimidating but support walked me through it on Discord in under an hour. Still running clean after the latest hotfix.',
		short: 'Moved from another tool that got flagged. Support walked me through DMA setup on Discord. Still running after the latest hotfix.',
		slug: 'deadside-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA review by @jakeDMA | Deadside Cheats',
		seoDescription:
			'Verified Deadside cheats review from @jakeDMA on cloud DMA setup, Discord support, and staying undetected through the latest Deadside patch hotfix.',
		date: '2026-01-22',
	},
	{
		handle: 'padWarMain',
		title: 'Controller support',
		rating: 4,
		text: 'Did not expect controller support to work this well. Aim assist needed some FOV tweaking with my Xbox pad. Opening the menu with a controller is clunky but playable.',
		short: 'Controller support works better than I expected. Needed some FOV tweaks with my Xbox pad.',
		slug: 'deadside-controller-aimbot-review-ctrl-player99',
		seoTitle: 'Controller review by @padWarMain | Deadside Cheats',
		seoDescription:
			'Deadside cheats review from @padWarMain on Xbox controller aim assist, FOV tuning, and in-game menu use — honest feedback after several weeks on PC.',
		date: '2026-04-02',
	},
	{
		handle: 'stormchaser07',
		title: 'Setup took patience',
		rating: 3,
		text: 'Features are solid once everything is running. First launch was annoying because Windows Defender flagged the loader. Not entirely their fault, but the setup guide could be clearer. Support replied in a couple hours with a fix. ESP and pickup markers work well in loot runs.',
		short: 'Solid once running. Setup guide could be clearer and Defender flagged the loader at first. Support helped same day.',
		slug: 'deadside-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup review by @stormchaser07 | Deadside Cheats',
		seoDescription:
			'Honest Deadside cheats review from @stormchaser07 on Windows setup, Defender loader flags, and same-day support — ESP works in loot runs.',
		date: '2026-05-19',
	},
	{
		handle: 'loot_goblin_42',
		title: 'Resource ESP',
		rating: 5,
		text: 'Mostly bought this for loot tracking on long raid runs. Being able to see cooldowns and medkits without tabbing around saves a surprising amount of time.',
		short: 'Mostly bought for loot tracking on raid runs. Cooldown and pickup markers save a lot of time.',
		slug: 'deadside-ability-esp-review-lootgoblinx',
		seoTitle: 'Resource ESP review by @loot_goblin_42 | Deadside Cheats',
		seoDescription:
			'Deadside cheats buyer review from @loot_goblin_42 on loot ESP, cooldown markers, and medkit tracking during long raid runs on Windows PC.',
		date: '2026-06-11',
	},
	{
		handle: 'steelpath42',
		title: 'Weapon profiles',
		rating: 4,
		text: 'Been on this since early access. Separate profiles for rifle and shotgun actually matter in tight tilesets. Only gripe is waiting about a day for an update after one patch. Updates page helped at least.',
		short: 'Separate rifle and shotgun profiles matter in tight tilesets. Waited about a day for one patch update.',
		slug: 'deadside-aimbot-realistic-review-steelpathgrind42',
		seoTitle: 'Aim profiles review by @steelpath42 | Deadside Cheats',
		seoDescription:
			'Deadside cheats review from @steelpath42 on rifle and shotgun aim profiles in tight maps, plus realistic expectations after Deadside patch updates.',
		date: '2026-03-28',
	},
	{
		handle: 'vanlife_arc',
		title: 'Radar on defense',
		rating: 5,
		text: 'Radar makes hot zones way less chaotic. Seeing rotation routes before they hit the pod is huge when you are in a pub squad and nobody is calling spawns.',
		short: 'Radar makes hot zones less chaotic. Seeing rotation routes before they hit the pod is huge in pub squads.',
		slug: 'deadside-radar-hack-review-vanlifefn',
		seoTitle: 'Radar review by @vanlife_arc | Deadside Cheats',
		seoDescription:
			'Deadside cheats review from @vanlife_arc on radar in hot zones — spotting rotation routes early in pub squads when callouts are scarce on PC.',
		date: '2026-07-03',
	},
	{
		handle: 'patchdaymike',
		title: 'Patch day downtime',
		rating: 4,
		text: 'Every cheat goes down on patch day. Difference here is they posted a status update within a few hours and I was back the next morning. That is about all you can ask for.',
		short: 'Goes down on patch day like everything else. Status update within a few hours and back the next morning.',
		slug: 'deadside-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Patch day review by @patchdaymike | Deadside Cheats',
		seoDescription:
			'Deadside cheats review from @patchdaymike on patch-day downtime, quick status updates, and being back online the next morning after an Deadside update.',
		date: '2026-02-27',
	},
	{
		handle: 'snipezonly',
		title: 'Sniper profile',
		rating: 5,
		text: 'Sniper profile plus ESP tags is exactly what I wanted for armored convoy fights. No complaints so far.',
		short: 'Sniper profile plus ESP tags is exactly what I wanted for armored convoy fights.',
		slug: 'deadside-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper profile review by @snipezonly | Deadside Cheats',
		seoDescription:
			'Deadside cheats buyer review from @snipezonly on sniper aim profiles and ESP tags for armored convoy fights — long-range player feedback on PC.',
		date: '2026-07-21',
	},
	{
		handle: 'nightowl_pc',
		title: 'Monthly sub',
		rating: 4,
		text: 'Started on monthly to test it before committing. Performance has been stable enough that I will probably grab lifetime next sale. Menu is a little crowded but you get used to it.',
		short: 'Started monthly to test it. Stable enough that I will probably grab lifetime next sale.',
		slug: 'deadside-monthly-sub-review-nightowl',
		seoTitle: 'Monthly sub review by @nightowl_pc | Deadside Cheats',
		seoDescription:
			'Deadside cheats review from @nightowl_pc on the monthly plan, stable performance over time, and upgrading to a lifetime key after a successful trial on PC.',
		date: '2026-05-06',
	},
	{
		handle: 'oldvet_wf',
		title: 'Lifetime key',
		rating: 5,
		text: 'Picked up lifetime after bouncing between free menus for years. Having one package with ESP, aim assist, and radar that actually gets updated is worth it to me.',
		short: 'Picked up lifetime after years of bouncing between free menus. One package that actually gets updated.',
		slug: 'deadside-lifetime-key-review-oldvet',
		seoTitle: 'Lifetime key review by @oldvet_wf | Deadside Cheats',
		seoDescription:
			'Deadside cheats review from @oldvet_wf on switching from free menus to a lifetime key — ESP, aim assist, radar, and updates in one package on PC.',
		date: '2026-01-09',
	},
	{
		handle: 'duoqueue',
		title: 'Playing with a friend',
		rating: 4,
		text: 'Me and a friend both run it for duo loot runs. ESP and radar make callouts way easier when we are on voice and not staring at the same screen. Wish there was a cleaner way to reset settings between missions.',
		short: 'Friend and I both run it for duo loot runs. ESP and radar make callouts easier on voice.',
		slug: 'deadside-squad-play-review-duoqueue',
		seoTitle: 'Squad play review by @duoqueue | Deadside Cheats',
		seoDescription:
			'Deadside cheats review from @duoqueue on duo loot runs with ESP and radar — easier voice callouts when you and a friend run Deadside cheats on PC.',
		date: '2026-04-18',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating:
		Math.round(
			(customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length) * 10,
		) / 10,
	totalCount: customerReviews.length,
} as const;
