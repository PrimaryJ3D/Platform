import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, StatGrid } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/events/deep-tech-castle")({
  head: () => pageHead({
    title: "Deep Tech Castle · 3rd Edition",
    description: "A highly curated convening of 100+ interdisciplinary leaders working at the intersection of technology, capital, and resilience.",
    path: "/events/deep-tech-castle",
    ogType: "event",
  }),
  component: DTCPage,
});

const speakers = [
  ["Prof. Dr. Gerhard Blechinger", "Rector, Salzburg University of Applied Sciences"],
  ["Prof. Dr. Anabel Ternès von Hattburg", "President, Club of Budapest"],
  ["Dr. Karsten Nohl", "Founder, Security Research Labs"],
  ["Dr. Efi Pylarinou", "Global fintech & blockchain leader"],
  ["Dr. Hanna Poikonen", "Neuroscientist, ETH Zurich · WiseMotion"],
  ["Dr. Lorenzo Servadei", "Head of AI for Chip Design, Sony AI"],
  ["Prof. Dr. Tomas Veloz", "Founder FIDSTA · Foresight & Interdisciplinary AI"],
  ["Dr. Sabine Kapasi", "UN Global Strategy Lead · Planetary health"],
];

function DTCPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">A J3D.AI Initiative · Invitation-only Retreat</p>
          <h1 className="display-1 mt-6">Deep Tech<br/>Castle.</h1>
          <p className="mt-6 text-sm text-muted-foreground">3rd Edition · Q4 2026 · Historic Castle, Germany</p>
          <p className="lede mt-6 max-w-2xl">
            A highly curated convening of interdisciplinary leaders working at the intersection of
            technology, capital, and resilience — building deep tech solutions to global problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-foreground text-background px-6 py-3 text-sm">Register your interest</Link>
            <a href="mailto:castle@j3d.ai" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">castle@j3d.ai</a>
          </div>
        </div>
      </section>

      <Section>
        <StatGrid items={[
          { value: "III", label: "Editions" },
          { value: "100+", label: "Visionaries" },
          { value: "30+", label: "Hours of insights" },
          { value: "25+", label: "Mentors & investors" },
        ]} />
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="The experience" title="What to expect." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["i. 100+ Visionaries", "A hand-picked cohort of founders, technologists, scientists and investors. By application or invitation only."],
            ["ii. 3 Days & Nights", "Living together at a historic German castle. Customizable healthy food, deep wellbeing programming, and structured collaboration."],
            ["iii. 30+ Hours of Insights", "Curated sessions across emerging technologies and applications. Every participant can apply to lead or co-design a session."],
            ["iv. 25+ Mentors & Investors", "Collective expertise across health, sustainability and technology — supported by an alumni network spanning Davos and beyond."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background border border-border rounded-lg p-7">
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-3 text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Past Speakers" title="Voices of the cohort." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map(([n, r]) => (
            <div key={n} className="bg-card border border-border rounded-lg p-5">
              <div className="font-medium">{n}</div>
              <div className="text-sm text-muted-foreground mt-1">{r}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">3rd Edition · Q4 2026</p>
          <h2 className="display-2 mt-3">Join the next cohort.</h2>
          <p className="lede mt-5">
            The 3rd edition is being curated now. Register your interest — selected applicants are invited to a discovery call.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm">Register your interest</Link>
        </div>
      </Section>
    </>
  );
}
