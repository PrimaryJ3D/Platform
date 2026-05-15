import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () => pageHead({
    title: "Team",
    description: "A lean, global team and interdisciplinary advisory council across Europe, Asia, and the Americas.",
    path: "/team",
  }),
  component: TeamPage,
});

const founders = [
  {
    loc: "Tallinn / Munich",
    name: "Kevin Varend",
    role: "Co-founder & Managing Director",
    bio: "Founder of the House of Collaboration programme. WEF Global Shapers Founding Curator in Estonia. Board member of Estonian Young Leaders. Leads global events, strategic partnerships, and the Nordic-Baltic corridor.",
  },
  {
    loc: "Munich",
    name: "Yip Thy-Diep Ta",
    role: "Co-founder & CEO",
    bio: "Leads company strategy, advisory practice, and platform development. Former McKinsey. INSEAD MBA. Architect of the VAY Score methodology. Confirmed panelist at the Europe-Asia Economic Summit 2026.",
  },
];

const team = [
  ["Remote", "Dakshata Lingayat", "Digital Marketing Manager & Executive Assistant"],
  ["Remote", "Prof. Dr. Tomas Veloz", "Founder, FIDSTA · Vrije Universiteit Brussel"],
  ["Remote", "Shrey Shah", "Digital Marketing Associate"],
  ["Remote", "Sarthak Thakkar", "Sales Associate & Media Assets"],
  ["Sweden", "Loïc Claveau", "Fractional CMO"],
  ["Tallinn", "Karl Kreevald", "Legal Counsel"],
  ["Ho Chi Minh City", "An Mai", "Vietnam Operations · President, IMT Solutions"],
];

const advisors = [
  ["Product", "Chief Product Advisor (CPO)", "Senior product leader with B2B SaaS or intelligence platform background. Shaping J3D.AI's digital platform roadmap."],
  ["Asia Market", "Asia-Pacific Advisor", "Senior representative with established networks across China, India, Vietnam, and ASEAN corridors."],
  ["AI & ML", "AI / Machine Learning Advisor", "Practitioner-researcher bridging academic AI and enterprise deployment. Supporting VAY Score methodology."],
  ["Communications", "PR & Media Advisor", "Tier-1 media relationships and strategic communications experience. Davos-level press and broadcast network."],
  ["Foresight", "Strategic Foresight Advisor", "Deep foresight methodology expertise. Supporting Cybernetic Foresight pillar and the Foresight Whitepaper series."],
  ["Wisdom", "Wisdom & Wellbeing Advisor", "Practitioner bridging contemplative wisdom traditions with organisational resilience, longevity, and brain capital."],
];

const positions = [
  ["Partnerships Director", "Munich or Davos · Full-time", "Owns the B2B partner pipeline. Existing relationships with DAX40, sovereign funds, or multilateral organisations."],
  ["Experience & Programme Director", "Munich or Davos · Full-time", "Owns event design, speaker curation, delegate experience for HoC and J3D.AI convenings."],
  ["Chief of Staff", "Munich or Tallinn · Full-time", "Sits at the intersection of operations, strategy, and execution. Translates priorities into systems and deliverables."],
];

function TeamPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">The Team</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">Built by the people in the room.</h1>
          <p className="lede mt-6 max-w-2xl">
            A lean, global team and interdisciplinary advisory council across Europe, Asia, and the Americas.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Founding Team" title="The founders." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((f) => (
            <article key={f.name} className="bg-card border border-border rounded-lg p-7">
              <p className="eyebrow">{f.loc}</p>
              <h3 className="display-3 mt-3">{f.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.role}</p>
              <p className="mt-4 text-ink-soft leading-relaxed">{f.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="Core Team & Extended Network" title="Operators across four regions." />
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {team.map(([loc, name, role]) => (
            <div key={name} className="bg-background border border-border rounded p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{loc}</p>
              <div className="mt-2 font-medium">{name}</div>
              <div className="text-sm text-muted-foreground mt-1">{role}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Advisory Council"
          title="Six independent advisors."
          lede="Supporting J3D.AI across product, market access, AI/ML, communications, foresight, and wisdom. Council is currently forming — confirmed members announced in 2027."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {advisors.map(([area, role, d]) => (
            <article key={role} className="bg-card border border-border rounded-lg p-6">
              <p className="eyebrow">{area}</p>
              <h3 className="font-display text-lg mt-2">{role}</h3>
              <p className="mt-3 text-sm text-ink-soft">{d}</p>
            </article>
          ))}
        </div>
        <Link to="/contact" className="mt-10 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">Enquire about the Advisory Council</Link>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="Open Positions · J3D.AI is Growing" title="Join the team." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {positions.map(([t, m, d]) => (
            <article key={t} className="bg-background border border-border rounded-lg p-6 lift">
              <h3 className="font-display text-lg">{t}</h3>
              <p className="text-xs text-muted-foreground mt-1">{m}</p>
              <p className="mt-3 text-sm text-ink-soft">{d}</p>
              <Link to="/contact" className="mt-5 inline-flex text-sm font-medium hover:text-accent">Apply →</Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
