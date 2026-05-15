import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, StatGrid } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/events/estonian-leap")({
  head: () => ({
    ...pageHead({
      title: "Estonian Leap · Davos 2027",
      description: "Estonia's sovereign public-private partnership platform at Davos. Co-produced with MFA Estonia and MKM. Tuesday 20 January 2027.",
      path: "/events/estonian-leap",
      ogType: "event",
    }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Estonian Leap · Davos 2027",
        startDate: "2027-01-20",
        endDate: "2027-01-20",
        location: { "@type": "Place", name: "Davos Platz", address: { "@type": "PostalAddress", addressCountry: "CH" } },
        organizer: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
        url: `${SITE.url}/events/estonian-leap`,
      }),
    }],
  }),
  component: EstonianLeapPage,
});

const sessions = [
  {
    h: "Session 1 · 10:00–12:00",
    t: "The Sovereign Cloud & the Baltic Sea",
    items: [
      "10:00 — Welcome remarks · Kevin Varend & Yip Thy-Diep Ta (Founders), Mirjam Loertscher (MFA Estonia)",
      "10:10 — Opening Presentation · H.E. Erkki Keldo, Minister of Economic Affairs & Industry, Estonia",
      "10:25 — Panel: From Energy to Sovereignty — H.E. Erkki Keldo · Leanne Todd (S&P Global) · Eva-Maria Hempe (NVIDIA) · Sean Kask (SAP). Mod: Martina Fuchs.",
      "11:00 — Keynote: The Rise of Sovereign Hyperscalers · Arnaud Castaignet (Skeleton Technologies)",
      "11:15 — Panel: Securing Europe's Digital Backbone — Arnaud Castaignet · Luca Tagliaretti (ECCC) · Vijay Mauree (UN ITU). Mod: Vijay Gurbaxani (UCI Paul Merage).",
    ],
  },
  {
    h: "Session 2 · 12:30–14:30",
    t: "The Next Wave of Entrepreneurship & GovTech",
    items: [
      "12:40 — Keynote: e-Residency · Mats Kuuskemaa (e-Residency Estonia, DACH)",
      "12:55 — Panel: Enabling the Next Wave of Unicorns — Damir Tomicic (run.events) · Yip Thy-Diep Ta (J3D.AI) · Mirjam Loertscher. Mod: Mats Kuuskemaa.",
      "13:15 — Keynote: From Digital State to Autonomous Nation · Taavi Rõivas (Chairman, Auve Tech; Former PM of Estonia)",
      "13:30 — Panel: GovTech at Scale — Taavi Rõivas · Helen Zhang (Office of Eric Schmidt) · Fariz Jafarov (C4IR Azerbaijan) · H.E. Eugen Osmochescu (Deputy PM, Moldova). Mod: Jana Krimpe.",
      "14:05 — Lightning · UnternehmerTUM, UVCA, Evergreen Valley Law, VIFC Da Nang.",
    ],
  },
  {
    h: "Session 3 · 15:00–16:15",
    t: "AI Leap & the Upskilling of Nations",
    items: [
      "15:10 — Keynote: Cross-Border Collaboration · Diene Keita, Executive Director UNFPA & UN Under-Secretary-General",
      "15:20 — Keynote: From Digital Nation to AI Nation · Linnar Viik (Co-Founder, AI Leap; Kaamos Family Office)",
      "15:30 — Panel: Building AI-Ready Societies — Linnar Viik · Daniel Dobos (Swisscom; AI House) · Ashish Koshy (Inception, a G42 company) · Markus Wartiovaara (Hanken). Mod: Robin Wood Sailer (Helena Capital).",
      "15:55 — Lightning: AI as a Force for Good · UN ITU, GAIA Lab, UN World Food Programme.",
    ],
  },
  {
    h: "Invite-only · 16:30–18:15",
    t: "New Nordics Innovation Ministerial Reception",
    items: [
      "16:55 — Opening remarks · H.E. Erkki Keldo, Minister of Economic Affairs & Industry, Estonia",
      "17:00 — Ministerial Panel: The New Nordic Innovation Advantage — H.E. Erkki Keldo · H.E. Ville Tavio (Finland) · H.E. Jessica Rosencrantz (Sweden). Mod: Ishaan Tharoor (Washington Post).",
      "17:25 — New Nordics Startup & Scaleup Spotlight · MiFundo · Basemark · Skeleton Technologies · H-Gen · Silo AI · Auve Tech.",
      "17:45 — High-Level Networking Reception.",
    ],
  },
];

const partners = ["MFA Estonia", "MKM Estonia", "NVIDIA", "SAP", "S&P Global", "Skeleton Technologies", "Silo AI", "G42", "bunq", "ECCC", "UN ITU", "UNFPA", "e-Residency Estonia", "Auve Tech", "UnternehmerTUM"];

function EstonianLeapPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Co-produced with MFA Estonia & MKM</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Estonian<br/>Leap.
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Welcome to the Digital Republic. Estonia's sovereign public-private partnership platform
            at Davos — shifting the narrative from <em>digital government exemplar</em> to <em>AI-era governance model</em>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">Apply for 2027</Link>
            <a href="#programme" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">View programme</a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Tuesday · 20 Jan 2027 · Davos Platz</p>
        </div>
      </section>

      <Section>
        <StatGrid items={[
          { value: "200+", label: "Delegates" },
          { value: "4", label: "Ministers" },
          { value: "30+", label: "Countries" },
          { value: "100M+", label: "Media reach" },
        ]} />
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading
          eyebrow="Programme architecture"
          title="A Sovereign PPP execution platform — not a side event."
          lede="Estonian Leap is co-produced with the Ministry of Foreign Affairs of Estonia and the Ministry of Economic Affairs & Communications. A replicable architecture for sovereign public-private partnership at Davos — designed for outcomes, not optics."
        />
        <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed">
          It demonstrates what country-level PPP execution looks like when designed for economic
          development rather than visibility: investment flows, bilateral partnerships, MoU
          pipelines, and technology adoption across emerging markets.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Ministerial keynotes", "AI sovereignty, sovereign infrastructure, and digital state architecture presented by acting ministers."],
            ["Estonia Meeting Hub", "12 boardrooms · Private offices available 24/7 for bilateral government, investment, and partnership meetings."],
            ["NB8 Chairmanship & New Nordics Nightcap", "Estonia holds the NB8 Chairmanship through 2027. Reception — 60 guests, invitation only."],
            ["AI Leap · 20,000 students, 154 schools", "Linnar Viik presents what national-scale AI readiness looks like in practice."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="programme" labelledBy="programme-h">
        <SectionHeading eyebrow="Draft programme · 2027 — subject to change" title="Tuesday, 20 January 2027." id="programme-h" />
        <div className="mt-12 space-y-4">
          {sessions.map((s) => (
            <details key={s.t} className="group bg-card border border-border rounded-lg">
              <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">{s.h}</p>
                  <h3 className="font-display text-xl mt-1">{s.t}</h3>
                </div>
                <span className="text-accent group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <ul className="px-6 pb-6 space-y-2 text-ink-soft text-sm leading-relaxed">
                {s.items.map((i) => <li key={i}>· {i}</li>)}
              </ul>
            </details>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="Why attend" title={<>The only sovereign PPP platform<br/>at Davos week.</>} />
        <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed">
          Estonian Leap is not a networking event. It is a structured execution environment where
          investments are made, partnerships are signed, and bilateral relationships advance.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["12", "Private Boardrooms", "Dedicated Estonia Meeting Hub with 12 private offices for bilateral meetings throughout the day."],
            ["4+", "Active Ministers", "Acting government ministers present, keynote, and participate in bilateral facilitation."],
            ["60", "Seats at the Reception", "The New Nordics Innovation Ministerial Reception closes the day — 60 curated guests."],
          ].map(([n, t, d]) => (
            <div key={t} className="bg-background border border-border rounded-lg p-7">
              <p className="font-display text-5xl text-accent">{n}</p>
              <h3 className="font-display text-xl mt-3">{t}</h3>
              <p className="mt-3 text-sm text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p className="eyebrow mb-4">Technology & government partners featured in 2026</p>
          <div className="flex flex-wrap gap-2.5">
            {partners.map((p) => (
              <span key={p} className="bg-background border border-border rounded-full px-3.5 py-1.5 text-sm">{p}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">A replicable model</p>
          <h2 className="display-2 mt-3">Embedded in the J3D.AI Davos Week.</h2>
          <p className="lede mt-5">
            Estonian Leap runs on Tuesday 20 January as part of the HoC five-day programme at Talstrasse 52, Davos Platz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/events/house-of-collaboration" className="rounded-full bg-foreground text-background px-6 py-3 text-sm">View the full HoC programme</Link>
            <Link to="/contact" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">Enquire About Country Partnership</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
