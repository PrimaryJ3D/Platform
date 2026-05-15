import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/fellows")({
  head: () => pageHead({
    title: "Fellows",
    description: "A curated cohort of practitioners, researchers, and policymakers who contribute to and shape the intellectual output of J3D.AI.",
    path: "/fellows",
  }),
  component: FellowsPage,
});

const blocks = [
  ["What Fellows Contribute", "Research & Intelligence", "Co-authoring J3D.AI foresight publications, contributing domain expertise to the Foresight Whitepaper series, and shaping annual Insights Reports."],
  ["What Fellows Receive", "Platform & Access", "Priority access to J3D.AI convenings, Members Portal intelligence archive, bilateral facilitation, and the J3D.AI Speaker Series platform."],
  ["How to Join", "By Invitation Only", "Fellowship is by invitation from the J3D.AI founding team. Prospective fellows may express interest via the contact page."],
];

const cohort = [
  ["AI Governance · Europe", "Research Fellow · AI Policy", "Contributing to AI governance frameworks and foresight publications. Specialisation: EU AI Act implementation and national AI strategies."],
  ["Capital & Finance · Gulf", "Research Fellow · Sovereign Finance", "Sovereign wealth and capital allocation intelligence. Facilitates Gulf-Europe investment corridor through J3D.AI platforms."],
  ["Technology · Deep Tech", "Research Fellow · Emerging Technology", "Deep tech commercialisation and dual-use technology governance. Contributing to J3D.AI's technology mastery pillar."],
];

function FellowsPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Research & Practice</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">J3D.AI Fellows.</h1>
          <p className="lede mt-6 max-w-2xl">
            A curated cohort of practitioners, researchers, and policymakers who contribute to and
            shape the intellectual output of J3D.AI.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What is a J3D.AI Fellow?"
          title="Practitioners who help shape the rooms."
          lede="J3D.AI Fellows are distinguished practitioners, researchers, and policymakers who contribute to J3D.AI's intellectual outputs and convening programmes. Fellowship is by invitation, extended to individuals whose work sits at the intersection of AI governance, technology, capital, and public policy."
        />
        <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed">
          Fellows participate in shaping the agenda at the House of Collaboration, contribute to
          J3D.AI research publications, and have access to the J3D.AI Members Portal and intelligence archives.
        </p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">Enquire about Fellowship</Link>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map(([eyebrow, t, d]) => (
            <article key={t} className="bg-background border border-border rounded-lg p-7">
              <p className="eyebrow">{eyebrow}</p>
              <h3 className="font-display text-xl mt-3">{t}</h3>
              <p className="mt-3 text-ink-soft">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="2025 – 2026 Cohort" title="Current Fellows." lede="The current cohort spans AI policy, sovereign finance, deep technology, and multilateral governance." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cohort.map(([loc, role, d]) => (
            <article key={role} className="bg-card border border-border rounded-lg p-6">
              <p className="eyebrow">{loc}</p>
              <h3 className="font-display text-lg mt-2">{role}</h3>
              <p className="mt-3 text-sm text-ink-soft">{d}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-ink-soft">
          The 2027 Fellow cohort is being curated. Expressions of interest welcome from senior practitioners.
        </p>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">Express interest in Fellowship</Link>
      </Section>

      <Section className="ink-bg">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-background/70">Members Portal</p>
          <h2 className="display-2 mt-3 text-background">Fellows have full Members Portal access.</h2>
          <p className="mt-5 text-background/80">
            Intelligence archives, bilateral facilitation tools, delegate directory, and exclusive event recordings.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/members" className="rounded-full bg-background text-foreground px-6 py-3 text-sm">Log in to Members Portal</Link>
            <Link to="/contact" className="rounded-full border border-background/30 text-background px-6 py-3 text-sm">Enquire about Fellowship</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
