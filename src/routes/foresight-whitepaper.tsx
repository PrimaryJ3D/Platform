import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, StatGrid } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/foresight-whitepaper")({
  head: () => pageHead({
    title: "Inside Davos Foresight Whitepaper · Our World in 2125",
    description: "42 global experts. 9 visions of the future. In partnership with the Bavarian Foresight Institute. Distributed at HoC Davos 2025.",
    path: "/foresight-whitepaper",
    ogType: "article",
  }),
  component: WhitepaperPage,
});

const themes = [
  ["01", "Climate & Planetary Boundaries", "Habitability, biosphere recovery, and the cost of inaction."],
  ["02", "AI & Cognition", "Foundation models, agentic systems, and the future of human cognition."],
  ["03", "Multipolar Geopolitics", "A world without a hegemon — what governance becomes."],
  ["04", "Health & Longevity", "Brain capital, biotech, and what it means to age in 2125."],
  ["05", "Energy Transition", "Fusion, storage, and the geography of post-carbon power."],
  ["06", "Capital & Markets", "What investing looks like when planning horizons exceed lifetimes."],
  ["07", "Education & Knowledge", "From schools to lifelong cognitive infrastructure."],
  ["08", "Cities & Mobility", "Megacities, planetary mobility, and the ground beneath our feet."],
  ["09", "Peace & Cooperation", "Whether peace becomes more profitable than conflict."],
];

function WhitepaperPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Publication · 2025</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Inside Davos Foresight Whitepaper — <em>Our World in 2125.</em>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            42 global experts. 9 visions of the future. In partnership with the Bavarian Foresight
            Institute. Distributed at HoC Davos 2025.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <p className="eyebrow">Methodology</p>
            <h2 className="display-2 mt-3">Foresight as practice, not prediction.</h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              The Foresight Whitepaper is a structured contribution from 42 global experts —
              founders, scientists, policymakers, philosophers and capital allocators — each
              providing a sectoral 100-year forecast under shared methodological constraints. The
              result is <em>nine plausible visions of our world in 2125</em>, grouped across thematic clusters.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Co-developed with the Bavarian Foresight Institute, the document was distributed in
              print at HoC Davos 2025 to heads of state, sovereign wealth funds, and senior multilateral leaders.
            </p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">Download Whitepaper (PDF)</Link>
          </div>
          <div className="ink-bg rounded-lg p-10">
            <p className="text-background/70 text-xs uppercase tracking-widest">Inside Davos Foresight</p>
            <p className="font-display text-background text-4xl mt-3">Our World<br/>in 2125.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-background">
              <div><div className="font-display text-3xl">42</div><div className="text-xs text-background/60">Contributing experts</div></div>
              <div><div className="font-display text-3xl">9</div><div className="text-xs text-background/60">Future scenarios</div></div>
              <div><div className="font-display text-3xl">100yr</div><div className="text-xs text-background/60">Forecast horizon</div></div>
              <div><div className="font-display text-3xl">2025</div><div className="text-xs text-background/60">Davos launch</div></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="9 Themes" title="The thematic clusters." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {themes.map(([n, t, d]) => (
            <article key={n} className="bg-background border border-border rounded-lg p-6">
              <p className="font-display text-2xl text-accent">{n}</p>
              <h3 className="font-display text-xl mt-2">{t}</h3>
              <p className="mt-3 text-sm text-ink-soft">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Next Edition</p>
          <h2 className="display-2 mt-3">Foresight Whitepaper · 2027 Edition.</h2>
          <p className="lede mt-5">An updated and expanded edition is in preparation for HoC Davos 2027.</p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm">Contribute</Link>
        </div>
      </Section>
    </>
  );
}
