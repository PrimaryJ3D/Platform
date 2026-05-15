import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, StatGrid } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/events/house-of-collaboration")({
  head: () => ({
    ...pageHead({
      title: "House of Collaboration · Davos 2027",
      description: "Five days. 860+ delegates. 70+ countries. USD 3T AUM & GDP. The premier public-private partnership execution platform at Davos week.",
      path: "/events/house-of-collaboration",
      ogType: "event",
    }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "House of Collaboration · Davos 2027",
        startDate: "2027-01-18",
        endDate: "2027-01-22",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Talstrasse 52, Davos Platz",
          address: { "@type": "PostalAddress", addressLocality: "Davos", addressCountry: "CH" },
        },
        organizer: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
        url: `${SITE.url}/events/house-of-collaboration`,
      }),
    }],
  }),
  component: HoCPage,
});

const days = [
  {
    d: "Sun 18 Jan", t: "Welcome Reception & Delegate Presentations",
    sub: "Curated arrival experience",
    body: "Curated arrival experience. 2-minute delegate presentations — the fastest route to the conversations that matter most. Welcome reception held at Talstrasse 52, Davos Platz, with rolling check-in from 16:00. Networking dinner concludes by 22:00.",
  },
  {
    d: "Mon 19 Jan", t: "Global Resilience & Wealth Day",
    sub: "Strategic dialogues & Super Connectors Dinner",
    body: "Strategic dialogues on global resilience and wealth creation. Deep collaborative sessions with senior capital allocators, family offices, and sovereign investors. Evening: Super Connectors Dinner — invitation only, 40 seats.",
  },
  {
    d: "Tue 20 Jan", t: "Estonian Leap & New Nordics Nightcap",
    sub: "Full-day ministerial programming",
    body: "Full-day ministerial programming. Estonia Meeting Hub (12 private offices). NB8 Chairmanship programme. New Nordics Reception — 60 guests.",
  },
  {
    d: "Wed 21 Jan", t: "Atlantic Day & Deep Tech for Resilience Dinner",
    sub: "EU·LatAm Strategic Luncheon",
    body: "Midday: EU·LatAm Strategic Luncheon — Chatham House Rule, 30–40 guests. Bilateral facilitation across the Atlantic corridor. Evening: Deep Tech for Resilience Dinner at Belvedere — 120 guests, invitation only.",
  },
  {
    d: "Thu 22 Jan", t: "Health, Technology, Sustainability & Closing",
    sub: "Foresight breakfast & Peace Gala",
    body: "AI-assisted healthcare roundtable. Climate tech showcase. Foresight breakfast with 12 global experts — the launch of the Foresight Whitepaper 2027 edition. Evening: Peace Gala Closing Ceremony.",
  },
];

const speakers = [
  ["EH", "Dr. Eva-Maria Hempe", "Exec. Director Public Sector EMEA, NVIDIA"],
  ["EK", "H.E. Erkki Keldo", "Minister of Economy, Estonia"],
  ["AK", "Ashish Koshy", "CEO · Inception (G42 Company)"],
  ["BK", "Bernhard Kowatsch", "UN World Food Programme"],
  ["JR", "H.E. Jessica Rosencrantz", "Minister for EU Affairs, Sweden"],
  ["LV", "Linnar Viik", "Founder · AI Leap Program"],
  ["TR", "Taavi Rõivas", "Former PM of Estonia"],
  ["HS", "Dr. Helmut Schönenberger", "CEO, UnternehmerTUM"],
];

const orgs = ["SAP", "NVIDIA", "S&P Global", "McKinsey & Company", "Deloitte", "Allianz SE", "Microsoft", "European Commission", "WFP", "UNFPA", "ITU", "ECCC", "MFA Estonia", "Skeleton Technologies", "Silo AI", "bunq", "G42", "Swiss Re", "UnternehmerTUM", "ESMT Berlin"];

function HoCPage() {
  return (
    <>
      <section className="ink-bg relative overflow-hidden">
        <div className="container-x py-24 sm:py-32 lg:py-40 relative">
          <p className="eyebrow text-background/70">Annual Flagship · Davos Platz · January 18–22, 2027</p>
          <h1 className="display-1 mt-6 text-background max-w-5xl">
            House of<br />Collaboration <span className="text-accent">2027</span>
          </h1>
          <p className="mt-6 text-background/80 max-w-2xl">
            Davos, Switzerland · Six minutes from the WEF Congress Centre.
          </p>
          <p className="mt-4 text-background/85 max-w-2xl text-lg">
            <em className="font-display">Better Together: Collaboration Across Borders for Resilient Economies.</em>
            {" "}Not a conference — an execution environment for decision density, bilateral facilitation,
            and sovereign-level dialogue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium">Join Now</Link>
            <Link to="/contact" className="rounded-full border border-background/30 text-background px-6 py-3 text-sm">Access Partnership Prospectus</Link>
          </div>
          <p className="mt-8 text-sm text-background/60">
            Looking for the 2025 edition? <Link to="/events/davos-2025" className="underline">View the Davos 2025 archive</Link>
          </p>
        </div>
      </section>

      <Section>
        <StatGrid items={[
          { value: "860+", label: "Delegates" },
          { value: "70+", label: "Countries" },
          { value: "USD 3T", label: "AUM & GDP" },
          { value: "120+", label: "Speakers" },
        ]} />
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading
          eyebrow="2027 Programme"
          title="Five days. Five distinct arcs."
        />
        <div className="mt-12 space-y-3">
          {days.map((d) => (
            <details key={d.d} className="group bg-background border border-border rounded-lg">
              <summary className="cursor-pointer list-none p-6 flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <p className="eyebrow">{d.d}</p>
                  <h3 className="font-display text-xl mt-1">{d.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.sub}</p>
                </div>
                <span className="text-accent text-sm group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-6 pb-6 text-ink-soft leading-relaxed">{d.body}</div>
            </details>
          ))}
        </div>
      </Section>

      <Section labelledBy="speakers">
        <SectionHeading eyebrow="Past Speakers" title="130 speakers. 70+ countries." id="speakers" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map(([initials, name, role]) => (
            <div key={name} className="flex gap-4 items-start bg-card border border-border rounded-lg p-4">
              <div className="flex-none h-12 w-12 rounded-full bg-accent/15 text-accent grid place-items-center font-display text-lg">
                {initials}
              </div>
              <div>
                <div className="font-medium text-sm">{name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="Members Attended From" title="A selection of organisations represented at HoC 2026." />
        <div className="mt-10 flex flex-wrap gap-3">
          {orgs.map((o) => (
            <span key={o} className="bg-background border border-border rounded-full px-4 py-2 text-sm">{o}</span>
          ))}
        </div>
      </Section>

      <Section labelledBy="apply">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Apply</p>
          <h2 id="apply" className="display-2 mt-3">Join the delegation for 2027.</h2>
          <p className="lede mt-5">Delegate passes are by invitation. B2B sponsorship enquiries via the team directly.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">Secure your invitation</Link>
            <Link to="/contact" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">Sponsorship enquiry</Link>
            <Link to="/hoc-terms" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">HoC Terms & Policy</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
