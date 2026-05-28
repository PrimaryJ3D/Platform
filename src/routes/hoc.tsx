import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import heroDavos from "@/assets/hero-davos.jpg";

export const Route = createFileRoute("/hoc")({
  component: HoCPage,
  head: () => ({
    meta: [
      { title: "House of Collaboration — Davos 2027 · J3D.AI" },
      {
        name: "description",
        content:
          "Five days in Davos. 20 roundtables. 800 senior delegates. By invitation only — apply for a delegation to HoC 2027.",
      },
      { property: "og:title", content: "House of Collaboration — Davos 2027" },
      { property: "og:description", content: "By-invitation convening of leaders shaping cross-border collaboration." },
      { property: "og:url", content: `${SITE.url}/hoc` },
      { property: "og:type", content: "event" },
      { property: "og:image", content: `${SITE.url}/og-hoc.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/hoc` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "House of Collaboration — Davos 2027",
        startDate: "2027-01-19",
        endDate: "2027-01-23",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: { "@type": "Place", name: "Davos", address: "Davos, Switzerland" },
        organizer: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
      }),
    }],
  }),
});

function HoCPage() {
  return (
    <>
      {/* HERO with image */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroDavos}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.45]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="container-x pt-28 pb-24 sm:pt-44 sm:pb-32">
          <p className="eyebrow">Davos · January 19–23, 2027</p>
          <h1 className="display-1 mt-6 max-w-4xl">
            Better Together.
          </h1>
          <p className="lede mt-8 max-w-2xl">
            An exclusive convening of global leaders shaping tomorrow through
            meaningful collaboration across borders for resilient economies.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Apply for a delegation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3.5 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Book a briefing
            </a>
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <dl className="grid gap-12 sm:grid-cols-4">
          {[["5", "Days"], ["20", "Roundtables"], ["800", "Delegates"], ["312", "Insights"]].map(
            ([n, l]) => (
              <div key={l as string}>
                <dt className="display-1">{n}</dt>
                <dd className="mt-2 text-sm eyebrow !text-ink-soft">{l}</dd>
              </div>
            ),
          )}
        </dl>
      </section>

      <section className="container-x pb-24 grid gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Who's in the room</p>
          <h2 className="display-3 mt-3">Heads of state. Sovereign funds. Founders.</h2>
          <p className="lede mt-5">
            Curated delegations from the EU, Gulf, and Asia. Every seat is vetted.
          </p>
        </div>
        <div>
          <p className="eyebrow">What gets done</p>
          <h2 className="display-3 mt-3">Deals, not panels.</h2>
          <p className="lede mt-5">
            Closed-door roundtables on energy corridors, capital flows, AI sovereignty,
            and the policy scaffolding that makes them durable.
          </p>
        </div>
      </section>

      {/* APPLICATION — Airtable embed */}
      <section id="apply" className="ink-bg scroll-mt-24">
        <div className="container-x py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow !text-ice">Application · 2027 cohort</p>
            <h2 className="display-2 mt-3 text-primary-foreground">
              Request your delegation.
            </h2>
            <p className="lede mt-5 !text-white/70 max-w-xl">
              Applications are reviewed in waves. Submit below — our team will be in
              touch within 5 business days.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl">
            <iframe
              title="House of Collaboration 2027 — Application"
              src={SITE.hocAirtable}
              className="block w-full"
              style={{ height: "1200px", background: "transparent" }}
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-xs text-white/50">
            Or email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> if you'd prefer a private intro.
          </p>
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <Link to="/" className="underline-link text-sm">← Back to J3D.AI</Link>
      </section>
    </>
  );
}
