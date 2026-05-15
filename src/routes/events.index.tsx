import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/events/")({
  head: () => pageHead({
    title: "Events & Programmes",
    description: "Invitation-only convening for heads of state, capital allocators, deep tech founders, and multilateral leaders. Curated for decision density, not headcount.",
    path: "/events",
  }),
  component: EventsPage,
});

const flagships = [
  {
    tag: "Annual Flagship · Davos, Switzerland",
    title: "House of Collaboration · Davos 2027",
    body: "The premier public-private partnership execution platform at Davos week. Five days. Talstrasse 52, Davos Platz — six minutes from the WEF Congress Center.",
    stats: [["860+", "Delegates"], ["70+", "Countries"], ["USD 3T", "AUM & GDP"]],
    to: "/events/house-of-collaboration",
    primary: "Apply Now",
    secondary: "Full Programme",
  },
  {
    tag: "Sovereign PPP · Embedded in HoC",
    title: "Estonian Leap Programme",
    body: "Estonia's sovereign public-private partnership platform at Davos. Co-produced with MFA Estonia and MKM. Full-day ministerial programming, 12 private offices, NB8 Chairmanship, New Nordics Reception.",
    stats: [["200+", "Delegates"], ["4", "Ministers"], ["100M+", "Media reach"]],
    to: "/events/estonian-leap",
    primary: "Apply Now",
    secondary: "Full Programme",
  },
  {
    tag: "Invitation-only Retreat · Germany",
    title: "Deep Tech Castle · 3rd Edition",
    body: "A highly curated convening of 100+ interdisciplinary leaders working at the intersection of technology, capital, and resilience. 3 days. Historic German castle.",
    stats: [["100+", "Visionaries"], ["30+", "Hours of insights"], ["III", "Editions"]],
    to: "/events/deep-tech-castle",
    primary: "Register Interest",
    secondary: "Full Programme",
  },
];

const calendar = [
  { year: "2026" },
  { event: "Europe-Asia Summit", sub: "Summer Davos · Strategic convening", date: "29 Jun – 1 Jul 2026", loc: "Davos, CH", fmt: "3-day forum", status: "Confirmed" },
  { event: "San Francisco Innovation Salon", sub: "J3D.AI-hosted · Frontier Tower", date: "Mid-Aug 2026", loc: "San Francisco, CA", fmt: "Invitation-only salon", status: "Confirmed" },
  { event: "Tallinn Digital Summit · Road to Davos", sub: "Estonian Leap side event", date: "5–7 Nov 2026", loc: "Tallinn, EE", fmt: "Summit side event", status: "Confirmed" },
  { year: "2027" },
  { event: "House of Collaboration · Davos 2027", sub: "Annual flagship", date: "Jan 18–22, 2027", loc: "Davos Platz, CH", fmt: "5-day convening", status: "Applications open" },
  { event: "Estonian Leap Programme", sub: "Embedded in HoC — sovereign PPP day", date: "Tue 20 Jan, 2027", loc: "Davos Platz, CH", fmt: "Full-day ministerial", status: "Applications open" },
  { event: "Deep Tech Castle — 3rd Edition", sub: "Invitation-only retreat", date: "Q3 2027 — TBC", loc: "Germany (castle venue)", fmt: "3-day immersive", status: "Interest registration" },
  { event: "New Programme — TBA", sub: "AI & governance forum", date: "2027 — TBC", loc: "Europe", fmt: "TBC", status: "Announcing soon" },
];

const past = [
  { t: "HoC Davos 2025 Archive", d: "150 delegates from across the world. The flagship intelligence report and full archive from the second edition.", to: "/events/davos-2025" },
  { t: "CyberBrains × SyntAIgration", d: "3-day intervention. 32 leaders. ESMT Berlin. Deloitte, Swiss Re, Munich Re, AWS, EU Commission, Allianz." },
  { t: "Allianz NextGenIT Think Tank", d: "15+ whitepapers. DAX40 enterprise. Structured cybersecurity roadmap. Multi-year engagement." },
  { t: "Horasis Asia · Vietnam", d: "European delegation to Binh Duong. AI, sustainability, ESG for economic growth. J3D.AI delegation lead." },
  { t: "Gyeonggi DACH Study Tour", d: "South Korea provincial government delegation. DACH innovation ecosystem. Insights fed into provincial AI policy." },
  { t: "China Market Access MoU Delegation", d: "Three bilateral MoUs signed with Chinese institutional partners. J3D.AI-facilitated market access corridor." },
];

function EventsPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Events & Programmes</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Rooms where decisions happen.
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Invitation-only convening for heads of state, capital allocators, deep tech founders,
            and multilateral leaders. Curated for decision density, not headcount.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="2027 Flagship Programmes"
          title="Three platforms. One philosophy."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {flagships.map((f) => (
            <article key={f.title} className="bg-card border border-border rounded-lg p-7 flex flex-col lift">
              <p className="eyebrow">{f.tag}</p>
              <h3 className="display-3 mt-4">{f.title}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed flex-1">{f.body}</p>
              <dl className="mt-6 grid grid-cols-3 gap-2 text-center">
                {f.stats.map(([v, l]) => (
                  <div key={l} className="bg-secondary/60 rounded p-2">
                    <dd className="font-display text-lg">{v}</dd>
                    <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">{l}</dt>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex gap-2">
                <Link to={f.to} className="rounded-full bg-foreground text-background px-4 py-2 text-sm">
                  {f.secondary}
                </Link>
                <Link to="/contact" className="rounded-full border border-foreground/25 px-4 py-2 text-sm">
                  {f.primary}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading
          eyebrow="Intimate Format"
          title="J3D.AI Salons."
          lede="Salons are J3D.AI's intimate dialogue format designed for 15–25 participants. No panel, no audience. A structured conversation among practitioners on a single consequential question."
        />
        <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed">
          Each Salon is built around a live question that matters to the room: AI governance in
          regulated industries, sovereign capital reallocation, climate-tech investment theses, or
          the future of European security. Output: a concise intelligence note distributed to participants.
        </p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">
          Register Interest in Salons
        </Link>
      </Section>

      <Section labelledBy="calendar">
        <SectionHeading eyebrow="Confirmed Dates 2026–2027" title="The full calendar." id="calendar" />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="border-b border-border">
              <tr className="text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-3 pr-4">Event</th>
                <th className="py-3 pr-4">Dates</th>
                <th className="py-3 pr-4">Location</th>
                <th className="py-3 pr-4">Format</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {calendar.map((row, i) =>
                "year" in row ? (
                  <tr key={i} className="bg-secondary/40">
                    <td colSpan={5} className="py-3 px-3 font-display text-lg text-accent">— {row.year} —</td>
                  </tr>
                ) : (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 pr-4">
                      <div className="font-medium">{row.event}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">{row.sub}</div>
                    </td>
                    <td className="py-4 pr-4 align-top">{row.date}</td>
                    <td className="py-4 pr-4 align-top">{row.loc}</td>
                    <td className="py-4 pr-4 align-top">{row.fmt}</td>
                    <td className="py-4 align-top">
                      <span className="inline-block rounded-full bg-accent/15 text-accent px-2.5 py-1 text-xs">{row.status}</span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="Past Programmes" title="A track record of consequential rooms." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {past.map((p) => (
            <article key={p.t} className="bg-background border border-border rounded-lg p-6 lift">
              <h3 className="font-display text-xl">{p.t}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed text-sm">{p.d}</p>
              {p.to && (
                <Link to={p.to} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent">
                  View archive <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
