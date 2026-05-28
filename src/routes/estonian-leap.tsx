import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import heroEstonia from "@/assets/hero-estonia.jpg";

export const Route = createFileRoute("/estonian-leap")({
  component: LeapPage,
  head: () => ({
    meta: [
      { title: "Estonian Leap — Sovereign Tech Programme · J3D.AI" },
      { name: "description", content: "A focused programme connecting Estonia's digital-state operators with Asia's market-makers and Europe's deep-tech founders." },
      { property: "og:title", content: "Estonian Leap — J3D.AI" },
      { property: "og:description", content: "Sovereign tech meets market access." },
      { property: "og:url", content: `${SITE.url}/estonian-leap` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/estonian-leap` }],
  }),
});

function LeapPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x pt-28 pb-20 sm:pt-40">
          <p className="eyebrow">Programme · 2026</p>
          <h1 className="display-1 mt-6 max-w-4xl">
            Estonian Leap.
          </h1>
          <p className="lede mt-8 max-w-2xl">
            Sovereign tech meets market access. We connect the operators
            behind Estonia's digital state with Asia's capital and Europe's
            deep-tech founders — in working sessions, not in conference halls.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Request the briefing
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/hoc" className="underline-link text-sm self-center">
              Or join us at HoC Davos 2027
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-24 grid gap-16 md:grid-cols-3">
        {[
          { t: "Digital-state operators", b: "Engineers and policy architects behind e-Residency, X-Road, and Estonia's AI strategy." },
          { t: "Asia market access", b: "Curated corridors into Singapore, Tokyo, Seoul, and the Gulf — built around real procurement appetite." },
          { t: "Deep-tech founders", b: "Energy, defence, AI infrastructure. The ventures that need sovereign customers, not just sovereign capital." },
        ].map((x) => (
          <div key={x.t}>
            <h3 className="display-3">{x.t}</h3>
            <p className="mt-4 text-ink-soft">{x.b}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 text-center">
          <h2 className="display-2 max-w-2xl mx-auto">Want the 2026 brief?</h2>
          <p className="lede mt-5 max-w-xl mx-auto">
            Tell us who you are and we'll send the programme dossier.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Estonian Leap 2026 brief`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Email {SITE.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
