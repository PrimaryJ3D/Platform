import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/reports")({
  head: () => pageHead({
    title: "Reports & Publications",
    description: "Intelligence from the world's most consequential conversations — HoC Insights, Foresight, and case studies.",
    path: "/reports",
  }),
  component: ReportsPage,
});

const reports = [
  { tag: "Annual Report · 2026", t: "J3D.AI House of Collaboration · Davos 2026 Insights Report", d: "860 delegates. 70+ countries. Documenting outcomes across AI readiness, GovTech, sovereign infrastructure, and capital deployment.", cta: "Download" },
  { tag: "Whitepaper · 2025", t: "Inside Davos Foresight Whitepaper — Our World in 2125", d: "42 global experts. 9 visions of the future. With the Bavarian Foresight Institute. Distributed to heads of state.", cta: "View", to: "/foresight-whitepaper" },
  { tag: "Government Report", t: "South Korea Gyeonggi Leader Development Program · DACH Study Tour", d: "South Korea government delegation to Austria and Germany. AI and innovation insights fed into provincial AI policy.", cta: "Key insights" },
  { tag: "Sustainability", t: "Future of Climate Summit · Exemplary Models", d: "Holistic, collaborative approach for public and private sectors at the intersection of sustainability, AI, and the road to 2030.", cta: "Key insights" },
  { tag: "Enterprise Intelligence · DAX40", t: "Allianz NextGenIT & Cybersecurity Think Tank", d: "15+ whitepapers. Building the cybersecurity roadmap of a DAX40 enterprise.", cta: "Request access" },
  { tag: "Technology · Munich", t: "Wayra by Telefónica Stage · Bits & Pretzels 2024", d: "Corporate innovation, fundraising dynamics, deep tech transformation.", cta: "Key insights" },
];

function ReportsPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Publications</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Intelligence from the world's most consequential conversations.
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {reports.map((r) => (
            <article key={r.t} className="bg-card border border-border rounded-lg p-7 lift flex flex-col">
              <p className="eyebrow">{r.tag}</p>
              <h2 className="display-3 mt-3">{r.t}</h2>
              <p className="mt-4 text-ink-soft leading-relaxed flex-1">{r.d}</p>
              {r.to ? (
                <Link to={r.to} className="mt-6 self-start rounded-full bg-foreground text-background px-5 py-2.5 text-sm">{r.cta}</Link>
              ) : (
                <Link to="/contact" className="mt-6 self-start rounded-full border border-foreground/25 px-5 py-2.5 text-sm">{r.cta}</Link>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
