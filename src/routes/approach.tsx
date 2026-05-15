import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/approach")({
  head: () => pageHead({
    title: "Approach — Cybernetic Foresight, Technology Mastery, Wisdom",
    description: "Three pillars. One integrated architecture. Operationalised across every J3D.AI engagement with documented outcomes.",
    path: "/approach",
  }),
  component: ApproachPage,
});

const pillars = [
  {
    n: "01",
    title: "Cybernetic Foresight",
    intro: "Strategic advisory for organizations entering markets in Asia (China, Vietnam, India) and Europe (DACH, New Nordics). We open doors governments have already unlocked — structuring MoUs, building bilateral partnerships, and facilitating market entry across four active corridors.",
    detail: "Our market access practice is built on sovereign relationships: MFA Estonia, Ministry of Economic Affairs, and a roster of government-backed enterprise partners across the China, India, and New Nordics corridors. Outputs include signed MoUs, delegation facilitation, and structured partnership agreements.",
    case: {
      tag: "Market Access · China Corridor",
      title: "China MoU Programme & Baltic-Asia Delegation Series",
      meta: "Government-backed · 4 active corridors · 3 MoUs signed",
      body: "Facilitated a series of high-level bilateral engagements between European enterprises and Chinese government-backed entities. Resulted in three signed MoUs and ongoing partnership development across the DACH-China, Baltic-India, and New Nordics corridors.",
      stats: [
        { v: "3", l: "MoUs · China corridor" },
        { v: "4", l: "Active corridors" },
        { v: "Gov.", l: "Backed access" },
      ],
    },
    cta: { label: "Discuss your corridor", to: "/contact" },
  },
  {
    n: "02",
    title: "Technology Mastery",
    intro: "Technology adoption without readiness assessment is expensive and reversible. J3D.AI's VAY Score is a proprietary methodology for measuring an organization's AI readiness across five dimensions — data quality, AI maturity, integration, governance, and ROI yield — producing a single composite number that is scored, weighted, benchmarked, and board-ready.",
    detail: "The VAY Score moves from a single assessment to a full implementation programme. Dimension-level scores feed a prioritised action roadmap. From board presentation to deployment, in four weeks.",
    case: {
      tag: "DAX40 Enterprise AI Readiness",
      title: "Allianz NextGenIT & Cybersecurity Think Tank",
      meta: "Multi-year engagement · DAX40 enterprise · Strategic intelligence",
      body: "A multi-year engagement with one of Europe's largest financial services groups. We built and chaired a structured cybersecurity think tank, facilitating AI readiness assessment and strategic decision-making across a DAX40 enterprise — producing 15+ whitepapers that fed directly into the cybersecurity and AI roadmap.",
      stats: [
        { v: "15+", l: "Whitepapers" },
        { v: "DAX40", l: "Enterprise scale" },
        { v: "5yr+", l: "Engagement" },
      ],
    },
    cta: { label: "Request a VAY Score", to: "/contact" },
  },
  {
    n: "03",
    title: "Wisdom",
    intro: "The design and execution of public-private convenings at sovereign scale — where governments, multilateral institutions, capital allocators, and technology leaders sit in the same room with intent, facilitation, and documented outcomes. Not conferences: execution environments.",
    detail: "J3D.AI's flagship convening is the House of Collaboration at Davos — five days, 860+ delegates, 70+ countries, USD 3T AUM & GDP in the room. The Estonian Leap Programme, embedded within HoC, is Estonia's sovereign platform at Davos. Both are designed with government ministries and executed as bilateral facilitation infrastructure.",
    case: {
      tag: "Sovereign PPP · Davos",
      title: "House of Collaboration · Davos 2026",
      meta: "Co-produced with MFA Estonia · 860+ delegates · 70+ countries",
      body: "The House of Collaboration is J3D.AI's flagship platform at Davos week. Five days of structured dialogue, bilateral facilitation, MoU signing, and sovereign-level decision-making. 860+ delegates. USD 3T AUM & GDP represented. The 2027 edition is now open for applications.",
      stats: [
        { v: "860+", l: "Delegates" },
        { v: "70+", l: "Countries" },
        { v: "USD 3T", l: "AUM & GDP" },
      ],
    },
    cta: { label: "View HoC programme", to: "/events/house-of-collaboration" },
  },
];

function ApproachPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Use Cases</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Cybernetic Foresight. Technology Mastery. Wisdom.
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Three pillars. One integrated architecture. Operationalised across every engagement
            with documented outcomes.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="display-2 mt-3">Better decisions for a better world with data.</h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              We exist at the intersection of market access, AI readiness, and sovereign convening
              because the problems worth solving require all three. The world needs institutions
              that operate across these disciplines without losing coherence. We are building one.
            </p>
          </div>
          <div>
            <p className="eyebrow">Vision</p>
            <h2 className="display-2 mt-3">Making collaboration more profitable than competition.</h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              This is an operating principle that informs how we curate rooms, structure dialogues,
              measure outcomes, and select partners. If collaboration is not producing measurable
              advantage, the room has not been designed correctly.
            </p>
          </div>
        </div>
      </Section>

      {pillars.map((p, i) => (
        <Section
          key={p.n}
          className={i % 2 === 0 ? "bg-secondary/40 border-y border-border" : ""}
          labelledBy={`pillar-${p.n}`}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="font-display text-5xl text-accent">{p.n}</p>
              <h3 id={`pillar-${p.n}`} className="display-2 mt-3">{p.title}</h3>
            </div>
            <div className="space-y-5 text-ink-soft leading-relaxed text-lg">
              <p>{p.intro}</p>
              <p>{p.detail}</p>
            </div>
          </div>
          <article className="mt-12 bg-background border border-border rounded-lg p-8">
            <p className="eyebrow">Case Study · {p.case.tag}</p>
            <h4 className="display-3 mt-3">{p.case.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{p.case.meta}</p>
            <p className="mt-4 text-ink-soft leading-relaxed">{p.case.body}</p>
            <dl className="mt-6 grid grid-cols-3 gap-px bg-border rounded overflow-hidden border border-border">
              {p.case.stats.map((s) => (
                <div key={s.l} className="bg-background p-4">
                  <dd className="font-display text-2xl">{s.v}</dd>
                  <dt className="text-xs text-muted-foreground mt-1">{s.l}</dt>
                </div>
              ))}
            </dl>
            <Link to={p.cta.to} className="mt-6 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">
              {p.cta.label}
            </Link>
          </article>
        </Section>
      ))}

      <Section>
        <SectionHeading
          eyebrow="Technology Mastery in Practice"
          title="VAY Score · AI Readiness Scoring"
          lede="A scored, weighted methodology across five dimensions that produces a single composite number — supported by dimension-level scores and a prioritised action roadmap. Board-ready in four weeks."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr] items-start">
          <dl className="grid gap-3">
            {[
              ["Data Quality", 85],
              ["AI Maturity", 72],
              ["Integration", 68],
              ["Governance", 79],
              ["ROI Yield", 83],
            ].map(([l, v]) => (
              <div key={l as string} className="bg-card border border-border rounded p-4">
                <div className="flex justify-between text-sm">
                  <dt className="font-medium">{l}</dt>
                  <dd className="font-display text-lg">{v}</dd>
                </div>
                <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </dl>
          <div className="bg-foreground text-background rounded-lg p-10 text-center">
            <p className="text-xs uppercase tracking-widest text-background/60">Composite VAY Score</p>
            <p className="font-display text-7xl mt-3">78</p>
            <p className="text-xs text-background/60 mt-2">Illustrative</p>
            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-background text-foreground px-4 py-2 text-sm">
              Request a VAY Assessment
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
