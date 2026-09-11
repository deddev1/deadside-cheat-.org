import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Deadside Cheats 2026 | ESP, Aimbot & Hacks for PC',
		description:
			'Deadside cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.',
		h1: 'Deadside Cheats',
		intro:
			'A focused Windows PC package for Deadside: Enemy ESP, aimbot controls, and wallhack overlays with Bad Pixel anti-cheat maintenance after major patches.',
		imageAlt: 'Deadside Cheats hero banner with Deadside operators in cinematic open world combat',
		galleryTitle: 'Deadside Cheats visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for loot runs pressure',
				'Deadside punishes incomplete information. Deadside Cheats puts ESP, wallhack, and aimbot in one license so you can read co-op missions, third-party pushes, and team pushes before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when anti-cheat or game updates require them.',
				'Compare the <a href="/deadside-cheats/">Deadside Cheats guide</a>, <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>, and <a href="/deadside-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get Enemy ESP, medkit markers, radar cues, and aimbot profiles in a single package aimed at open world and loot runs.',
				'Details live on the <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>, <a href="/deadside-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'deadside-esp': {
		title: 'Deadside ESP 2026 | Wallhack & Enemy Boxes for PC',
		description:
			'Deadside cheats ESP wallhack — enemy boxes, health bars, loot markers & distance readouts. Bundled with aimbot & radar in one license.',
		h1: 'Deadside ESP — Wallhack & Enemy Boxes',
		intro:
			'Visibility tools for Deadside. Read enemy units, lockers, resource caches, and pickups, and distance before you commit to a fight — with toggleable ESP wallhack overlays for large-scale battles and loot runs.',
		imageAlt: 'Deadside ESP overlay with enemy outline boxes, health bars, and distance readouts',
		galleryTitle: 'Deadside ESP overlay visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Deadside wallhack guide',
		ctaSecondaryHref: '/deadside-wallhack/',
		sections: [
			section(
				'What Deadside ESP solves in loot runs',
				'Deadside missions punish incomplete information. Deadside Cheats ESP wallhack helps you spot enemy units early, spot armored vehicles and turrets before they push your position, and mark lockers and caches worth the detour.',
				'On loot runs, co-op missions, and loot runs, that visibility gap is often the difference between a clean flanking and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Deadside live updates and tileset changes are published by ${EXT.epic}. When tileset areas or loot rules shift, ESP categories stay useful because they track enemies and containers — not a single static landmark.`,
			),
			section(
				'Enemy, vehicle or patrol unit, and squad ESP wallhack categories',
				'Toggle enemy unit outlines, vehicle or patrol unit threat cues, pickup awareness markers, and loot or chest pins so only mission-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports co-op missions and co-op squads alike.',
				'Compare category detail on the <a href="/deadside-wallhack/">wallhack page</a> and pair visibility with the <a href="/deadside-radar/">radar hack</a> for flanks outside your FOV.',
				[
					'enemy unit ESP outlines with distance',
					'pickups and lockers markers for faster rotations',
					'vehicle or patrol unit and pickup threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with anti-cheat maintenance',
				'Deadside Cheats ESP wallhack is maintained for Deadside with rebuilds after Bad Pixel anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/deadside-cheats/">anti-cheat maintenance maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first mission session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/deadside-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/deadside-cheats/">best Deadside cheats guide</a> and <a href="/deadside-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'deadside-aimbot': {
		title: 'Deadside Aimbot 2026 | Soft Aim for PC & Controller',
		description:
			'Deadside cheats aimbot with FOV, smoothing & weak-point targeting. Per-weapon profiles for rifles, shotguns & snipers on Windows PC.',
		h1: 'Deadside Aimbot — Soft Aim for PC & Controller',
		intro:
			'Configurable Aimbot tools for Deadside firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Deadside cheats cheat menu with soft aim, FOV slider, and bone priority settings',
		galleryTitle: 'Deadside Aimbot combat previews',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/deadside-esp/',
		sections: [
			section(
				'Aimbot tuned for Deadside combat pace',
				'Deadside mixes long-range rifle fights with close-quarters shotgun pushes. Deadside Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-mission.',
				'Bone priority and target selection options cover closest enemy, lowest health, or highest-threat targets during squad firefights and hot zones and squad extraction modifiers.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for assault rifles, SMGs, and DMRs. Switch between long-range rifle beams and close-quarters room clears without reopening menus every spawn.',
				'Prefer softer tracking? Read the <a href="/deadside-aimbot/">soft aim guide</a>. Want the search term most players use? See <a href="/deadside-aimbot/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/deadside-esp/">ESP wallhack</a> and <a href="/deadside-radar/">2D radar</a> in the same Deadside Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-mission',
					'Per-weapon profile slots for rifle/ shotgun / sniper',
				],
			),
			section(
				'anti-cheat maintenance for undetected Aimbot',
				'Deadside Cheats rebuilds Aimbot behavior when Bad Pixel anti-cheat or major Deadside patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/deadside-cheats/">anti-cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Deadside Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Deadside cheats feature list — ESP, soft aim, radar, hotkeys & controller support. Review every toggle before checkout.',
		h1: 'Deadside Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Deadside Cheats package for Deadside on Windows PC — with anti-cheat maintenance after major patches.',
		imageAlt: 'Deadside ESP overlay with hero boxes and health bars',
		galleryTitle: 'Deadside Cheats feature gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'enemy unit ESP wallhack, vehicle or patrol unit and pickup threat cues, pickups and lockers markers, distance readouts, snaplines, and toggleable ESP categories for mission-critical overlays only.',
				'Team and enemy colour coding supports co-op missions and loot runs. Deep-dive the <a href="/deadside-esp/">ESP page</a> and <a href="/deadside-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when tileset areas rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and final circles, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Deadside sessions. See <a href="/deadside-radar/">radar</a> and <a href="/deadside-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/features/">mod menu page</a> explains mid-mission toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@deadsidecheats.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/deadside-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Buy Deadside Cheats | $35/mo or $150 Lifetime',
		description:
			'Buy Deadside cheats — $35/month or $150 lifetime. ESP, aimbot & wallhack included. Instant digital delivery on Windows PC.',
		h1: 'Deadside Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Deadside Cheats — ESP wallhack, radar hack, and Aimbot for Deadside on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Deadside wallhack ESP showing enemy units and enemy vehicles through objective corners',
		galleryTitle: 'Deadside Cheats package visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Deadside Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Deadside Cheats package — ideal if you play Deadside regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'enemy ESP wallhack, medkit markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Bad Pixel anti-cheat or major Deadside patches.',
				`update calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/deadside-cheats/">best Deadside cheats</a>, <a href="/deadside-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Deadside Cheats Setup | Install Guide for Windows PC',
		description:
			'Install Deadside cheats on Windows 10/11. Activate your license, tune ESP & aimbot profiles, check patch status before queueing.',
		h1: 'Deadside Cheats Setup — PC & Controller Guide',
		intro:
			'Install and configure Deadside Cheats for Deadside on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.',
		imageAlt: 'Deadside aimbot hitbox lock on enemy unit during campaign squad firefight',
		galleryTitle: 'Deadside Cheats setup visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Deadside Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest anti-cheat maintenance build before launching Deadside.',
				`Also glance at ${EXT.status} if Deadside servers look unstable on patch day — a platform outage is not a license fault.`,
				'Deadside Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemies, pickups, and lockers — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-mission. Details for each module live on <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>, and <a href="/features/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/deadside-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Deadside or Bad Pixel anti-cheat patches',
				'When Bad Pixel ships a major Deadside update or Bad Pixel anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/deadside-cheats/">anti-cheat maintenance page</a> and <a href="/deadside-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Deadside Cheats Updates | Patch & Status Log',
		description:
			'Deadside cheats update log — check build status after game patches. Maintenance notes for ESP, aimbot & radar rebuilds.',
		h1: 'Deadside Cheats Updates — Maintenance Log',
		intro:
			'Track anti-cheat maintenance and Deadside patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: 'Deadside wallhack ESP skeleton on armored vehicle or artillery unit hero in loot runs',
		galleryTitle: 'Deadside patch and maintenance visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/deadside-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Deadside and Bad Pixel anti-cheat receive frequent patches. Deadside Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Deadside launcher health and this page for Deadside Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on loot runs and co-op missions.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Bad Pixel anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/deadside-cheats/">anti-cheat maintenance guide</a> and <a href="/deadside-cheats/">undetected Deadside cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow patch notes from ${EXT.rust}, then confirm our rebuild is live before loot runs.`,
				'For urgent status questions after an anti-cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Deadside Cheats FAQ | ESP, Aimbot & Safety',
		description:
			'Deadside cheats FAQ — licensing, ESP, aimbot, controller support, patch-day status & pricing. Clear answers before you buy.',
		h1: 'Deadside Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Deadside Cheats — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and Deadside compatibility on Windows PC.',
		imageAlt: 'Deadside radar hack 2D minimap overlay showing rotation routes and enemy units and enemy vehicles',
		galleryTitle: 'Deadside Cheats FAQ visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Deadside Cheats?',
				'Deadside Cheats is an undetected cheat package for Deadside on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.',
				'Packages cover loot runs and co-op missions. Explore <a href="/features/">Features</a> for the full control list and <a href="/deadside-esp/">ESP</a> / <a href="/deadside-aimbot/">Aimbot</a> for module detail.',
				`Deadside is developed and published by ${EXT.epic}. Cheats are third-party tools and may violate Bad Pixel' Terms of Service — use is at your own risk.`,
			),
			section(
				'Are Deadside Cheats undetected in 2026?',
				'Deadside Cheats is maintained with rebuilds after Bad Pixel anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/deadside-cheats/">undetected Deadside cheats</a> and the <a href="/deadside-cheats/">anti-cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@deadsidecheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Deadside Cheats Support | Contact & Help',
		description:
			'Contact Deadside Cheats support for licenses, setup & billing. Email support@deadsidecheats.org with your order ID.',
		h1: 'Deadside Cheats Support — Contact Us',
		intro:
			'Get help with Deadside Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for Deadside on Windows PC.',
		imageAlt: 'Deadside cheats loot runs objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Deadside Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after anti-cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Deadside Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Bad Pixel bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. anti-cheat maintenance notes live on the dedicated <a href="/deadside-cheats/">Bad Pixel anti-cheat page</a>.',
				'Email: support@deadsidecheats.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Deadside Cheats | Anti-Cheat Maintenance',
		description:
			'How undetected Deadside Cheats maintenance works after Bad Pixel patches — rebuild workflow, Updates log, and what to check before you queue on PC.',
		h1: 'Undetected Deadside Cheats — Anti-Cheat Maintenance',
		intro:
			'Supporting guide: maintenance and “undetected” wording only — not a full feature list. For ESP, aimbot, and pricing, start on the main Deadside Cheats guide at /deadside-cheats/.',
		imageAlt: 'Deadside wallhack ESP skeleton boxes on enemy units and enemy vehicles through map geometry',
		galleryTitle: 'Undetected Deadside Cheats visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'anti-cheat maintenance guide',
		ctaSecondaryHref: '/deadside-cheats/',
		sections: [
			section(
				'What undetected means for Deadside Cheats',
				'Undetected Deadside Cheats means the package is actively maintained against Bad Pixel anti-cheat and major Deadside patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Bad Pixel anti-cheat updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Deadside client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'anti-cheat maintenance workflow',
				'When Bad Pixel anti-cheat or Deadside updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for Deadside outages that can look like product failures.`,
				'Deep technical workflow: <a href="/deadside-cheats/">anti-cheat maintenance Deadside guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/deadside-cheats/">Deadside cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Deadside Wallhack 2026 | ESP Boxes Through Terrain',
		description:
			'Deadside wallhack ESP highlights Grineer, Corpus & Infested through cover. Toggle categories for loot runs & open world.',
		h1: 'Deadside Wallhack — ESP Boxes & Visibility',
		intro:
			'Deadside wallhack ESP for Deadside — see enemies, pickups, and lockers through toggleable wallhack overlays built for large-scale battles and loot runs.',
		imageAlt: 'Deadside wallhack ESP skeleton boxes on enemy unit hero in loot runs',
		galleryTitle: 'Deadside wallhack ESP gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Deadside ESP page',
		ctaSecondaryHref: '/deadside-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Deadside wallhack focuses on information — enemy outlines, loot pins, vehicle or patrol unit threat cues — rather than automatic aiming. Deadside Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and hot zones.',
				'For the broader ESP keyword page see <a href="/deadside-esp/">Deadside ESP</a>; for combat assist see <a href="/deadside-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support loot runs, co-op missions, and loot runs with distance readouts and snaplines for engagement control.',
				`tileset updates and tileset area changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/deadside-radar/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Bad Pixel anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/deadside-cheats/">undetected Deadside cheats</a> and <a href="/deadside-cheats/">anti-cheat maintenance</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/deadside-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Deadside Radar Hack 2026 | 2D Minimap for Deadside',
		description:
			'Deadside radar hack shows off-screen enemies on a 2D minimap. Directional cues for defense, survival & squad play.',
		h1: 'Deadside Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Deadside — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Deadside ESP distance markers and hero health readouts in loot runs',
		galleryTitle: 'Deadside radar hack visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/deadside-esp/',
		sections: [
			section(
				'Why radar hack matters in Deadside',
				'Multi-floor tilesets stack vertical fights — catwalks, doorways, and side spawns. A 2D radar overlay shows nearby enemy threats outside direct line of sight so you can reposition before a flank wave.',
				'Deadside Cheats radar complements <a href="/deadside-esp/">ESP wallhack</a> markers during squad pushes and final-circle scrims.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight hot zones. Directional cues highlight flanks during tileset clears and vehicle or patrol unit pushes across loot runs and co-op missions.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live missions — see the <a href="/features/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/deadside-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive anti-cheat maintenance rebuilds with the full Deadside Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Deadside patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/deadside-cheats/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'Deadside Anti-Cheat Maintenance | Patch Guide',
		description:
			'How Deadside Cheats rebuild after Bad Pixel anti-cheat patches — ESP, aimbot & radar maintenance for PC. Read before queueing.',
		h1: 'Deadside Anti-Cheat — Maintenance Guide',
		intro:
			'Understand Bad Pixel anti-cheat maintenance for Deadside Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Deadside security updates.',
		imageAlt: 'Deadside undetected hacks status with ESP overlay on enemy units and enemy vehicles',
		galleryTitle: 'anti-cheat maintenance visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Bad Pixel anti-cheat overview',
				`Bad Pixel anti-cheat is Bad Pixel’ anti-cheat for Deadside on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Deadside Cheats monitors anti-cheat patch notes and Deadside seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“anti-cheat maintenance” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an anti-cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Deadside service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/deadside-cheats/">undetected Deadside cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'anti-cheat maintenance in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Deadside Cheats 2026 | Season & Patch Overview',
		description:
			'What changed for Deadside Cheats in 2026 — seasonal updates, Bad Pixel patch timing, and where to read rebuild notes before you buy or queue.',
		h1: 'Deadside Cheats 2026 — Season & Patch Overview',
		intro:
			'Supporting guide for the 2026 season: maps, balance, and anti-cheat cadence — not a duplicate of the main product pillar. Compare the Deadside Cheats pillar and Features page before checkout.',
		imageAlt: 'Deadside cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Deadside Cheats 2026 gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Deadside Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Bad Pixel anti-cheat updates. Deadside Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official official patch messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover loot runs and co-op missions loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'enemy ESP wallhack, medkit markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/deadside-cheats/">Deadside Cheats pillar</a>, <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>, <a href="/deadside-wallhack/">wallhack</a>, <a href="/deadside-radar/">radar</a>, <a href="/deadside-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/deadside-cheats/">Deadside Cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/deadside-cheats/">best Deadside cheats</a> checklist, <a href="/pricing/">pricing</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@deadsidecheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Deadside Cheats & Hacks | ESP, Aimbot & Wallhack PC',
		description:
			'Primary Deadside cheats guide — ESP, aimbot, wallhack & radar in one PC license. Pricing, setup, and links to undetected maintenance and 2026 season notes.',
		h1: 'Deadside Cheats & Hacks — ESP, Aimbot & Wallhack',
		intro:
			'Primary product guide for Deadside on Windows PC: one license for ESP wallhack, 2D radar, and aimbot across loot runs and open-world PvP. Use the undetected and Deadside cheats 2026 supporting pages for maintenance and season context — not as replacements for this pillar.',
		imageAlt: 'Deadside cheats loot runs objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Deadside Cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/deadside-cheats/',
		sections: [
			section(
				'What Deadside Cheats include in 2026',
				'Players searching for Deadside Cheats usually want visibility and combat tools without stacking separate downloads. Deadside Cheats bundles enemy ESP wallhack, medkit markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called Deadside cheats.',
				'Coverage spans loot runs and co-op missions with in-client toggles for live missions. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Deadside Cheats vs Deadside cheats — same stack, clear pages',
				'Searchers use Deadside Cheats and Deadside cheats interchangeably. This pillar focuses on hacks language; the <a href="/deadside-cheats/">Deadside cheats 2026</a> and <a href="/deadside-cheats/">best Deadside cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/deadside-esp/">Deadside ESP</a>, <a href="/deadside-aimbot/">Deadside Aimbot</a>, <a href="/deadside-wallhack/">wallhack</a>, <a href="/deadside-radar/">radar hack</a>, and <a href="/deadside-aimbot/">soft aim</a>.',
				'Extra reading lives on our <a href="/blog/">cheats guides hub</a> — product pages here stay the canonical place to compare features, pricing, and setup.',
			),
			section(
				'Deadside Cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Deadside Cheats maps the full mission loop: read enemy units, track lockers and resource caches, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/pricing/">cheat download</a>, <a href="/features/">mod menu</a>, <a href="/deadside-aimbot/">aimbot hack</a>, <a href="/deadside-esp/">ESP hack</a>.',
			),
			section(
				'Undetected Deadside Cheats with anti-cheat maintenance',
				'Undetected Deadside Cheats require rebuilds after Bad Pixel anti-cheat and major Deadside patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/deadside-cheats/">anti-cheat maintenance guide</a> for the practical workflow. Pair with <a href="/deadside-cheats/">undetected Deadside cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Deadside Hack Download 2026 | Instant Access',
		description:
			'Deadside cheat download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
		h1: 'Deadside Hack Download — Instant License Delivery',
		intro:
			'How Deadside cheat download works for Deadside — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Deadside wallhack ESP showing enemy units and enemy vehicles through objective corners',
		galleryTitle: 'Deadside cheat download visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Deadside cheat download delivery works',
				'After checkout confirms payment, Deadside Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Deadside servers are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Deadside cheat download includes enemy ESP wallhack, pickups and lockers markers, 2D radar overlays, Aimbot profiles, and in-client toggles for large-scale battles and loot runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Deadside or Bad Pixel anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/deadside-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Deadside Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Deadside mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected Deadside Cheats package.',
		h1: 'Deadside Mod Menu — In-Client Control Panel',
		intro:
			'Deadside mod menu controls for Deadside — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-mission without leaving your operator session on Windows PC.',
		imageAlt: 'Deadside cheats mod menu with soft aim profiles and ESP toggles',
		galleryTitle: 'Deadside mod menu gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Deadside mod menu controls',
				'A Deadside mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live missions. Deadside Cheats keeps those toggles accessible with hotkeys.',
				'Toggle enemy outlines, medkit markers, vehicle or patrol unit cues, and per-weapon Aimbot settings without alt-tabbing out of Deadside.',
				'Control deep-dives: <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>, <a href="/deadside-radar/">radar</a>.',
			),
			section(
				'Mod menu categories for large-scale battles and loot runs',
				'Separate ESP wallhack categories for players, pickups, lockers, and caches let you reduce overlay noise during rotations and hot zones.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when Deadside balance patches change fight distances and mobility.',
				'Soft tracking players should start with <a href="/deadside-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after anti-cheat patches',
				'Deadside mod menu behavior is rebuilt when Bad Pixel anti-cheat or major Deadside updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/deadside-cheats/">anti-cheat maintenance guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Deadside Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Deadside aimbot settings for natural tracking on PC and controllers. Smoothness, FOV, and bone priority — included in our Deadside Cheats with ESP boxes.',
		h1: 'Deadside Soft Aim — Smooth Aimbot Controls',
		intro:
			'Deadside aimbot settings for Deadside — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Deadside aimbot ESP boxes and FOV circle on enemy units and enemy vehicles in large-scale battles',
		galleryTitle: 'Deadside aimbot gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/deadside-aimbot/',
		sections: [
			section(
				'What Deadside aimbot means',
				'Deadside aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Deadside Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in missions firefights.',
				'Bone priority and target selection cover closest enemy, lowest health, or highest-threat targets during squad firefights.',
				'Full Aimbot documentation: <a href="/deadside-aimbot/">Deadside Aimbot</a>. Alternate wording: <a href="/deadside-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for assault rifles, SMGs, and DMRs. Switch between long-range rifle beams and close-quarters room clears with hotkeys mid-mission.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/deadside-esp/">ESP wallhack</a> and <a href="/deadside-radar/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with anti-cheat maintenance',
				'Aimbot modules rebuild after Bad Pixel anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Deadside Cheats Compared | 2026 Checklist',
		description:
			'Comparison checklist for the best Deadside cheats in 2026 — maintenance, ESP, aimbot, pricing, and support signals before you buy on Windows PC.',
		h1: 'Best Deadside Cheats — Comparison Checklist',
		intro:
			'Shopping comparison page: evaluate Deadside cheat packages (including ours) before checkout — not the main feature walkthrough. Read the Deadside Cheats pillar first, then use this checklist to compare vendors.',
		imageAlt: 'Deadside wallhack ESP showing enemy units and enemy vehicles through objective corners',
		galleryTitle: 'Best Deadside cheats gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Deadside cheats in 2026',
				'The best Deadside cheats combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Deadside Cheats covers loot runs and co-op missions with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Deadside cheats feature checklist',
				'Look for enemy ESP wallhack, medkit markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Deadside patches.',
				'Review <a href="/features/">Features</a>, <a href="/deadside-cheats/">undetected status</a>, and <a href="/deadside-cheats/">Deadside cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/deadside-esp/">ESP</a>, <a href="/deadside-aimbot/">Aimbot</a>, <a href="/deadside-cheats/">hacks</a>.',
			),
			section(
				'Buying the best Deadside cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Bad Pixel terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Deadside Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Deadside aimbot hack with soft aim for PC and controllers. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Deadside Cheats package.',
		h1: 'Deadside Aimbot Hack — Soft Aim Assist',
		intro:
			'Deadside aimbot hack tools for Deadside — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Deadside aimbot hack menu with silent aim and bone priority toggles',
		galleryTitle: 'Deadside aimbot hack gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/deadside-aimbot/',
		sections: [
			section(
				'Deadside aimbot hack vs visibility tools',
				'A Deadside aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Deadside Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Deadside combat pace across large-scale battles and loot runs.',
				'Prefer softer tracking language? See <a href="/deadside-aimbot/">soft aim</a>. Full settings: <a href="/deadside-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-mission without opening menus during rotations or final circles.',
				'Per-weapon profile slots separate long-range rifle tuning from close-quarters shotgun settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Bad Pixel anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/deadside-cheats/">anti-cheat maintenance guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/deadside-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Deadside ESP Hack 2026 | enemy boxes & Loot',
		description:
			'Deadside ESP hack with enemy boxes and medkit markers for PC and controllers. Undetected Deadside cheats with cloud DMA — see overlays and buy.',
		h1: 'Deadside ESP Hack — enemy boxes Guide',
		intro:
			'Deadside ESP hack overlays for Deadside — enemy outlines, vehicle or patrol unit threat cues, pickups and lockers markers with distance readouts across loot runs and co-op missions.',
		imageAlt: 'Deadside ESP hack with hero skeleton, bounding box, and ult tracking labels',
		galleryTitle: 'Deadside ESP hack gallery',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/deadside-esp/',
		sections: [
			section(
				'What a Deadside ESP hack shows',
				'A Deadside ESP hack renders enemy unit outlines, vehicle or patrol unit positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and flanking scenarios.',
				'Canonical visibility guide: <a href="/deadside-esp/">Deadside ESP</a>. Wallhack wording: <a href="/deadside-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for loot runs',
				'Toggle Enemy ESP hack, medkit markers, chest pins, and vehicle or patrol unit cues independently so only mission-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports co-op missions and loot runs.',
				`tileset area and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with anti-cheat maintenance',
				'ESP hack modules rebuild after Bad Pixel anti-cheat and Deadside patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/deadside-radar/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/deadside-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Deadside Unlock All 2026 | What It Really Means',
		description:
			'Deadside unlock all explained vs real Deadside Cheats — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
		h1: 'Deadside Unlock All — What Players Search For',
		intro:
			'Deadside unlock all is a common search term for Deadside — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Deadside Cheats actually provides on Windows PC.',
		imageAlt: 'Deadside ESP boxes and distances on enemy units and enemy vehicles in loot run',
		galleryTitle: 'Deadside unlock all guide visuals',
		ctaPrimary: 'Buy Deadside Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Deadside unlock all usually means',
				'Deadside unlock all searches often refer to instant access to weapons, camos, skins, or Prime Access tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Deadside Cheats focuses on in-match awareness — Enemy ESP, medkit markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Prime Access items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy units, lockers, and resource caches during live missions. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, pickups and lockers markers speed BR rotations — see the <a href="/deadside-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/deadside-cheats/">Deadside Cheats</a> and <a href="/deadside-cheats/">best Deadside cheats</a>.',
			),
			section(
				'Buying Deadside Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Deadside on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Bad Pixel anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Deadside Cheats',
		description:
			'Privacy policy for Deadside Cheats. How we handle support emails, order data, and checkout for Deadside cheats licenses on deadsidecheats.org.',
		h1: 'Deadside Cheats Privacy Policy',
		intro: 'How Deadside Cheats handles information when you browse deadsidecheats.org or contact support about a Deadside license.',
		imageAlt: 'Deadside ESP overlay visual for privacy policy page',
		galleryTitle: 'Deadside Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Deadside Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@deadsidecheats.org with your request details.',
				'Policy updates publish on this page. Continued use of deadsidecheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Deadside Cheats',
		description:
			'Refund policy for Deadside Cheats. Digital delivery terms and eligibility for Deadside Cheats packages with ESP, soft aim, and cloud DMA.',
		h1: 'Deadside Cheats Refund Policy',
		intro:
			'Refund terms for Deadside Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Deadside.',
		imageAlt: 'Deadside ESP overlay visual for refund policy page',
		galleryTitle: 'Deadside Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Deadside Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@deadsidecheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Deadside Cheats Rules',
		description:
			'Terms of use for deadsidecheats.org and Deadside Cheats licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'Deadside Cheats Terms of Use',
		intro: 'Terms governing use of deadsidecheats.org and Deadside Cheats licenses for Deadside on Windows PC.',
		imageAlt: 'Deadside ESP overlay visual for terms of use page',
		galleryTitle: 'Deadside Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Deadside Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Deadside on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Deadside may violate Bad Pixel terms and result in account penalties. Deadside Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/deadside-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@deadsidecheats.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
