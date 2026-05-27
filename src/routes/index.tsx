import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: SITE.url },
    ],
    links: [{ rel: "canonical", href: SITE.url }],
  }),
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative aurora-bg">
        <div className="container-x pt-28 pb-24 sm:pt-40 sm:pb-32">
          <p className="eyebrow">Estonia · Europe · Asia</p>
          <h1 className="display-1 mt-6 max-w-4xl">
            Making collaboration<br />
            <em className="not-italic text-accent">more profitable</em> than competition.
          </h1>
          <p className="lede mt-8 max-w-2xl">
            J3D.AI convenes the senior leaders shaping the next decade — and gives
            them the intelligence to act together.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/hoc"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Apply for House of Collaboration 2027
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/approach" className="underline-link text-sm">
              Our approach
            </Link>
          </div>
        </div>
      </section>

      {/* THREE PILLARS — funnel into HoC */}
      <section className="container-x py-24 sm:py-32">
        <p className="eyebrow">Two platforms · one practice</p>
        <h2 className="display-2 mt-3 max-w-3xl">
          Where capital, policy and technology meet — by invitation.
        </h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          <Pillar
            href="/hoc"
            eyebrow="Flagship · Davos 2027"
            title="House of Collaboration"
            body="Five days. 20 roundtables. 800 senior delegates. The convening room for cross-border deals that don't happen anywhere else."
            cta="Apply to attend"
          />
          <Pillar
            href="/estonian-leap"
            eyebrow="Sovereign tech · 2026"
            title="Estonian Leap"
            body="A focused programme putting Estonia's digital-state operators in the room with Asia's market-makers and Europe's deep-tech founders."
            cta="View programme"
          />
        </div>
      </section>

      {/* PROOF */}
      <section className="ink-bg">
        <div className="container-x py-24 sm:py-32 text-primary-foreground">
          <p className="eyebrow !text-ice">Track record</p>
          <h2 className="display-2 mt-3 max-w-3xl text-primary-foreground">
            Trusted by heads of state, sovereign funds and the operators behind them.
          </h2>
          <dl className="mt-16 grid gap-12 sm:grid-cols-3">
            {[
              ["850+", "Verified senior delegates"],
              ["47", "Convening sessions to date"],
              ["19", "Markets across EU & Asia"],
            ].map(([n, l]) => (
              <div key={l as string}>
                <dt className="display-1 text-ice">{n}</dt>
                <dd className="mt-3 text-sm text-white/70 font-sans">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* APPROACH TEASER */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="display-2 mt-3">
              Advisory, intelligence, and the room itself.
            </h2>
          </div>
          <div>
            <p className="lede">
              We design convenings where deals begin, score AI readiness for boards
              that need a clear signal, and open Asia–Europe corridors for the firms
              prepared to use them.
            </p>
            <Link to="/approach" className="underline-link mt-6 inline-block text-sm font-medium">
              Read the methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA — funnel close */}
      <section className="border-t border-border">
        <div className="container-x py-24 sm:py-32 text-center">
          <h2 className="display-1 max-w-3xl mx-auto">
            The room you're trying to get into is at HoC Davos 2027.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/hoc"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Apply to House of Collaboration
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3.5 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Talk to us first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({
  href, eyebrow, title, body, cta,
}: { href: "/hoc" | "/estonian-leap"; eyebrow: string; title: string; body: string; cta: string }) {
  return (
    <Link to={href} className="group bg-background p-10 sm:p-14 lift">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="display-3 mt-4">{title}</h3>
      <p className="mt-5 text-ink-soft max-w-md">{body}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline-link">
        {cta}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
