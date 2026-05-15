## Goal

Convert the single 2,855-line `J3DAI_optimized.html` (18 hidden "pages" behind a JS switcher) into a real, responsive, production-grade Lovable site — TanStack Start + Tailwind v4 + shadcn — with each section as its own SSR route, proper mobile UX, and a refreshed premium design language.

## Why a rebuild (not another HTML pass)

The current file is an SPA in disguise: every "page" is a `<div class="pg">` toggled with `display:none`. That kills SEO, social previews, deep links, and mobile performance no matter how much we polish the HTML. A real route-per-page React app fixes all of it at once and gives you a maintainable codebase.

## Information architecture (18 → real routes)

```text
/                       Home
/about                  About
/approach               Approach / Use Cases
/events                 Events index
  /events/house-of-collaboration
  /events/davos-2025
  /events/estonian-leap
  /events/deep-tech-castle
/foresight-whitepaper   Whitepaper
/reports                Reports
/media                  Media
/team                   Team
/fellows                Fellows
/members                Members
/contact                Contact
/imprint                Imprint
/privacy                Privacy
/hoc-terms              HoC Terms
```

Header nav: Home · About · Approach · Events ▾ · House of Collaboration · Whitepaper · Team · Contact. Footer holds legal + secondary links.

## Design refresh (premium, harmonized, not a copy of the HTML)

- **Palette**: keep brand DNA (deep indigo `#1E1C36`, lavender `#8B7FB8`, ice white, warm beige) but rebuild as oklch tokens in `src/styles.css`. Add `--gradient-aurora`, `--shadow-elegant`, `--shadow-glow`.
- **Typography**: Cormorant Garamond (display, 400/600) + Inter (body, 400/500/600). Drop Nunito + Roboto duplication. Tight tracking on headings, generous line-height on body.
- **Layout language**: editorial — large hero type, asymmetric two-column sections, soft aurora gradients, hairline dividers, restrained motion. One primary CTA per section.
- **Components**: shadcn Button/Card/Sheet/NavigationMenu customized via tokens. Custom `<SectionHeading>`, `<EventCard>`, `<TeamGrid>`, `<Ticker>` (paused on hover, `aria-hidden`), `<MobileNav>` (Sheet drawer).
- **Motion**: framer-motion for one hero reveal + scroll-triggered fades. Full `prefers-reduced-motion` guard.

## Mobile-first

- Header collapses to hamburger → shadcn Sheet drawer at `< md`
- Fluid type with `clamp()`, container queries where useful
- All tap targets ≥ 44px, no fixed `top:38px` stacking bugs
- Test viewports: 375, 414, 768, 1280

## SEO + a11y (per route)

- Per-route `head()` with title, description, canonical, og:*, twitter:*
- JSON-LD: `Organization` + `WebSite` in `__root.tsx`; `Event` on each event route; `Article` on whitepaper/reports
- `sitemap.xml` server route enumerating all routes
- `robots.txt` in `public/`
- Real `<Link>` navigation, `<main>`/`<header>`/`<footer>` landmarks, skip-link, `aria-current="page"`, focus-visible rings, WCAG AA contrast on all muted text
- Images: imported assets with explicit width/height, `loading="lazy"`, `decoding="async"`

## Content migration

I'll extract every page's copy, headings, lists, team bios, event details, and form fields verbatim from the current HTML into the new React components. No copy is lost. Team photos and OG image will be re-saved as imported assets in `src/assets/`.

## Deliverables

1. Full React/TanStack Start app replacing the placeholder index
2. 18 routes, shared `<SiteHeader>` + `<SiteFooter>`, mobile drawer
3. New design tokens in `src/styles.css`, premium component library
4. Per-route SEO + JSON-LD + sitemap.xml + robots.txt
5. Working contact form (frontend validation; wire to Lovable Cloud later if you want submissions stored/emailed)
6. QA pass on mobile + desktop preview before handoff

## Out of scope for this pass (callouts)

- Backend storage of contact submissions, member auth, or newsletter — say the word and I'll add Lovable Cloud + a `contact_submissions` table + email via Lovable Email.
- Custom domain / publishing — one click when you're ready.

## Technical notes

- Routes live in `src/routes/` (flat dot-notation: `events.davos-2025.tsx`)
- Shared layout via `__root.tsx` `<Outlet />`; header/footer rendered there
- shadcn primitives already installed; only add what's missing
- All colors via semantic tokens — no raw hex in components
- No Supabase needed unless you opt into the contact-form backend

Approve and I'll build it end-to-end in one pass, then walk you through the result.