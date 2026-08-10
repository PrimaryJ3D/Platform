# Changelog

## 2026-08-10 - Content update: HoC programme, speakers, Estonian Leap, landing page

### Added
- HoC 2027 programme: "Nordics and NB8 Summit" day (Oceans, Ports, Energy, Deep Tech, Resilience).
- Middle East-Europe bridge segment, placed before Africa in the regional sequence.
- Residency copy: "Limited to 42 residencies."
- Footer social links: YouTube (@J3DAI) and House of Collaboration LinkedIn; both added to the Organization JSON-LD `sameAs`.
- `si` sprite-index field on speaker records so sprite crops stay locked to their original positions.
- Past Clients & Partners ticker: Estonian Chamber of Commerce, Wayra, O.P. Jindal Global University, IMT Solutions and Convergence Partners, added to both marquee copies so the loop stays seamless.

### Added (final batch)
- Official House of Collaboration 2027 light logo (`HoC27-Light.svg`, CDN asset) at the top of the HoC and Residency pages and in the footer lockup while those pages are active.
- Luma social link (https://lu.ma/davos27) in the footer and in the Organization JSON-LD `sameAs`.

### Changed
- Renamed "Europe Bridges" to "European Bridges Summit" site-wide.
- Final programme day is now the "Wealth, Capital and Technology Summit" (AI, Quantum, decacorns, unicorns, soonicorns, intergenerational wealth transfer).
- Speaker titles: Dr. Eva-Maria Hempe, Dr. Nele Leosk, Martina Fuchs.
- Residency and Delegate Pass copy rewritten as a matched pair (open vs daytime programme, 17-21 January; Residency keeps accommodation and speaker slot).
- Announcement-bar "Join the Delegation" link now points at /hoc.
- Estonian Leap page: all 2027 references changed to 2026 (scoped to that page only).
- Landing page heading "Clients, partners & collaborators" is now "Past Clients & Partners".
- Foresight Whitepaper download links now point at the docs.j3d.ai PDF with target="_blank" rel="noopener".

### Removed
- UnternehmerTUM chip from the Estonian Leap 2026 partner chip row (speaker title, bio and agenda mention retained).
- Speakers Diene Keita and Helen Zhang from the HoC reel.
- D11Z Ventures, Salzburg University of Applied Sciences and UnternehmerTUM from the landing-page logo block.

### Added (HoC pass 3)
- Four speakers with initials-avatar fallback (no sprite index, no photo): Dr. Carlos Nobre, Indrani Pal-Chaudhuri, Dr. Clara Guerra, Angelina Usanova. SP length is now 52.
- Swipeable speaker overlay: touch swipe with a horizontal-vs-vertical direction threshold, left/right arrow keys, visible prev/next controls (44x44), wrap-around, animated transition that respects `prefers-reduced-motion`.
- HoC 2027 logo in the top nav on /hoc and /residency (on a dark indigo pill so the pale artwork stays legible), matching the existing footer swap.
- Geneva Polo Club chip in both copies of the "Past Clients & Partners" marquee.
- HoC responsiveness sweep: overflow-x containment, `dvh` overlay height, safe-area insets, 44px minimum tap targets, long-string wrapping, narrower reel cards below 400px.

### Changed (HoC pass 3)
- "Nordics and NB8 Summit" is now "New Nordics and NB8 Summit".
- Delegate Pass regains the speaker-slot line; programme access remains the only difference from the Residency.

### Removed (HoC pass 3)
- HoC 2027 lockup from the /hoc and /residency heroes (moved to header and footer).
- primary@j3d.ai from the site footer (retained on /imprint and /privacy-policy).
- Last remaining mentions of Diene Keita and Helen Zhang in the 2026 agenda archive; dangling separators cleaned.

### Changed (bios)
- Bio opening sentences realigned with updated titles for Dr. Eva-Maria Hempe (Executive Director, Public Sector, NVIDIA), Dr. Nele Leosk (ITU BDT candidacy now leads the bio) and Martina Fuchs (The Frequency School co-founding now leads the bio). Remainder of each bio unchanged.

### Added (whitepaper + bio pass)
- Foresight Whitepaper lead-gen band ("Our World in 2125") as a single shared component rendered into every `[data-wp-band]` mount: on /hoc it sits after the Residency/Delegate Pass cards and application CTAs, and it is reused on /reports. HubSpot EU drop-in (`PORTAL_ID_HERE` / `FORM_ID_HERE` constants, `//js-eu1.hsforms.net/forms/embed/v2.js`); while the IDs are placeholders a styled native fallback form renders. Success state shows "Check your inbox - the whitepaper is on its way." plus the direct PDF download link.

### Changed (whitepaper + bio pass)
- Angelina Usanova bio: first paragraph rewritten to lead with the Angelina Usanova Foundation; the Miss Eco International claim removed (zero "Miss Eco" hits in src/). Title and second paragraph unchanged.

