import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/events/davos-2025")({
  head: () => pageHead({
    title: "Davos 2025 · Peace as Policy",
    description: "The second edition of the House of Collaboration. 150 delegates. Foresight as practice. Technology with purpose.",
    path: "/events/davos-2025",
  }),
  component: Davos2025Page,
});

function Davos2025Page() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Archive · HoC 2025 Edition</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Davos 2025 — <em className="text-accent">Peace as Policy.</em>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            The second edition of the House of Collaboration. 150 delegates. Foresight as practice.
            Technology with purpose.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="2025 Theme"
          title="Peace as Policy. Foresight as Practice. Technology with Purpose."
          lede="The 2025 edition convened 150 delegates from across the world during WEF Davos week. The week was anchored on three propositions: that peace is a policy choice, foresight is a practice rather than a forecast, and technology serves human ends — or it serves none."
        />
        <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed">
          Highlights included the launch of the Foresight Whitepaper (42 experts, 9 visions of the
          future), the inaugural Estonian Leap programme, and the first Peace Gala Dinner alongside the WEF.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/reports" className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm">Download 2025 Insights Report</Link>
          <Link to="/foresight-whitepaper" className="rounded-full border border-foreground/25 px-5 py-2.5 text-sm">Foresight Whitepaper</Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Original 2025 microsite preserved at davos.j3d.ai</p>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="2025 Coverage Highlights" title="Tier-1 global coverage." />
        <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed">
          The 2025 edition received tier-1 global coverage including The New York Times, The Washington Post,
          Blick (lead Davos media partner), and Xinhua News Agency — with combined reach exceeding
          100M impressions across 70+ countries.
        </p>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="display-2">The 2027 edition is now open.</h2>
          <p className="lede mt-5">
            Building on the 2025 and 2026 editions — the 2027 programme is the largest yet.
          </p>
          <Link to="/events/house-of-collaboration" className="mt-8 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm">View HoC Davos 2027</Link>
        </div>
      </Section>
    </>
  );
}
