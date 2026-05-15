import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/members")({
  head: () => pageHead({
    title: "Members Portal",
    description: "A private platform for J3D.AI alumni, delegates, and research fellows. Access intelligence archives, bilateral facilitation tools, and exclusive event content.",
    path: "/members",
  }),
  component: MembersPage,
});

function MembersPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Invitation Only</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">Members Portal.</h1>
          <p className="lede mt-6 max-w-2xl">
            A private platform for J3D.AI alumni, delegates, and research fellows. Access intelligence
            archives, bilateral facilitation tools, and exclusive event content.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://accounts.j3d.ai" className="rounded-full bg-foreground text-background px-6 py-3 text-sm">Log in to Members Portal</a>
            <Link to="/contact" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">Request access</Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Secured by Clerk · invitation only</p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What's Inside"
          title="The members platform."
          lede="The J3D.AI Members Portal gives verified delegates and partners access to the intelligence, connections, and content that live beyond the event floor. Curated, secure, and continuously updated."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            ["Intelligence Archives", "14 curated reports across HoC, Foresight, Policy, and AI readiness. Continuously updated."],
            ["Event Recordings & Session Notes", "Davos 2025 and 2026 sessions, keynotes, and Chatham House breakouts — full recordings for confirmed delegates."],
            ["Delegate Directory", "860+ verified members. Filter by country, sector, and focus area. Request bilateral introductions."],
            ["Bilateral Facilitation", "Structured tools for partner matching, MoU follow-up, and post-event relationship management."],
          ].map(([t, d]) => (
            <li key={t} className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="display-2">Apply for membership.</h2>
          <p className="lede mt-5">
            Membership is by invitation or successful application to a J3D.AI event. Alumni, delegates, and verified research fellows only.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://accounts.j3d.ai" className="rounded-full bg-foreground text-background px-6 py-3 text-sm">Log in</a>
            <Link to="/contact" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">Apply for Membership</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
