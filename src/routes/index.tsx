import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading, StatGrid } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: SITE.tagline,
      description: SITE.description,
      path: "/",
    }),
  component: HomePage,
});

const stats = [
  { value: "850+", label: "Delegates · HoC 2026" },
  { value: "70+", label: "Countries represented" },
  { value: "USD 3T", label: "GDP in the room" },
  { value: "15+", label: "Whitepapers · Allianz" },
];

const partners = [
  "Allianz SE", "Deloitte", "European Commission", "UN World Food Programme",
  "ITU", "MFA Estonia", "G42 / Inception", "Microsoft",
  "ESMT Berlin", "UnternehmerTUM", "Bavarian Foresight Institute", "Sony AI",
  "ETH Zurich", "Security Research Labs", "Ashoka", "Club of Budapest",
];

const pillars = [
  {
    n: "01",
    title: "Cybernetic Foresight",
    h: "China, India & New Nordics corridors.",
    body: "Strategic advisory for organizations entering markets in Asia and Europe. We open doors governments have already unlocked — structuring MoUs, building relationships, and facilitating bilateral partnerships across four active corridors.",
    link: "/approach",
    cta: "View case studies",
  },
  {
    n: "02",
    title: "Technology Mastery",
    h: "VAY Score — board-ready in four weeks.",
    body: "J3D.AI's proprietary methodology for measuring an organization's AI readiness across five dimensions. Scored, benchmarked, and board-ready — from a single assessment to a full implementation programme.",
    link: "/approach",
    cta: "VAY Score methodology",
  },
  {
    n: "03",
    title: "Wisdom",
    h: "The House of Collaboration · Davos.",
    body: "J3D.AI's flagship public-private partnership execution platform at Davos. Not a conference — a structured environment for bilateral facilitation, MoU signing, and sovereign-level dialogue. 860+ delegates. 70+ countries. USD 3T in the room.",
    link: "/events/house-of-collaboration",
    cta: "View HoC programme",
  },
];

const events = [
  {
    tag: "Annual Flagship · Davos",
    title: "House of Collaboration · Davos 2027",
    date: "18–22 Jan 2027 · Talstrasse 52, Davos",
    body: "The premier public-private partnership execution platform at Davos week. 860+ delegates. 70+ countries. USD 3T.",
    to: "/events/house-of-collaboration",
  },
  {
    tag: "Sovereign PPP · Embedded in HoC",
    title: "Estonian Leap Programme",
    date: "Tue, 20 Jan 2027 · Davos Platz",
    body: "Estonia's sovereign platform at Davos. Co-produced with MFA Estonia and MKM. 200+ delegates, 4 ministerial appearances.",
    to: "/events/estonian-leap",
  },
  {
    tag: "Invitation-only Retreat",
    title: "Deep Tech Castle · 3rd Edition",
    date: "Q4 2026 · Historic Castle, Germany",
    body: "A highly curated convening of 100+ interdisciplinary leaders working at the intersection of technology, capital, and resilience.",
    to: "/events/deep-tech-castle",
  },
];

const voices = [
  {
    quote: "Observing the progression of our dialogues, and our collective approach to the subjects has been truly enlightening. The method fruitfully guides our solutions.",
    name: "Marius von Spreti",
    role: "Head of Cybersecurity, Deloitte",
  },
  {
    quote: "The event was a truly life-changing experience, not just for me but for many others. The quality of decision-makers in the room is unmatched anywhere during Davos week.",
    name: "Dr. Ralf Schneider",
    role: "Head of Cybersecurity & NextGenIT, Allianz SE",
  },
  {
    quote: "J3D.AI has a really good process to craft experiences for meaningful and fast networking between intellectuals of all different backgrounds.",
    name: "Tsutomu Ishiai",
    role: "Deputy Managing Editor, The Asahi Shimbun",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="aurora-bg absolute inset-0 -z-10" aria-hidden />
        <div className="container-x pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          <p className="eyebrow">Advisory · AI Readiness · Sovereign Convenings</p>
          <h1 className="display-1 mt-6 max-w-5xl text-balance">
            Making collaboration{" "}
            <em className="text-accent not-italic font-display">more profitable</em>
            <br className="hidden sm:block" /> than competition.
          </h1>
          <p className="lede mt-8 max-w-2xl">
            J3D.AI is an advisory and technology company. We deliver market access advisory,
            AI readiness scoring and implementation, and public-private sovereign convening
            for organizations navigating the most consequential transitions of our time.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Book a meeting <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm hover:bg-foreground/5 transition"
            >
              Our approach
            </Link>
          </div>
          <div className="mt-16">
            <StatGrid items={stats} />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-y border-border bg-secondary/40 py-10">
        <div className="container-x">
          <p className="eyebrow text-center mb-6">Clients, partners & collaborators</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            {partners.map((p) => (
              <span key={p} className="font-medium">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <Section labelledBy="what-we-do">
        <SectionHeading
          eyebrow="What we do"
          id="what-we-do"
          title={<>Three disciplines.<br />One integrated advisory firm.</>}
          lede="Cybernetic Foresight. Technology Mastery. Wisdom. The three disciplines that define how J3D.AI advises organizations navigating the AI transition."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.n} className="lift bg-card border border-border rounded-lg p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-accent">{p.n}</span>
                <span className="eyebrow">{p.title}</span>
              </div>
              <h3 className="display-3 mt-6">{p.h}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed flex-1">{p.body}</p>
              <Link
                to={p.link}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition"
              >
                {p.cta} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* EVENTS */}
      <Section className="bg-secondary/40 border-y border-border" labelledBy="events">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Events & Programmes"
            id="events"
            title="Where decisions happen."
          />
          <Link to="/events" className="text-sm font-medium hover:text-accent inline-flex items-center gap-1.5">
            All events <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="bg-background border border-border rounded-lg p-7 lift">
              <p className="eyebrow">{e.tag}</p>
              <h3 className="display-3 mt-4">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.date}</p>
              <p className="mt-4 text-ink-soft leading-relaxed">{e.body}</p>
              <Link to={e.to} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent">
                View programme <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* VOICES */}
      <Section labelledBy="voices">
        <SectionHeading
          eyebrow="Voices"
          id="voices"
          title="From people in the room."
          lede="A small selection — read 100+ C-level testimonials in our reports."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {voices.map((v) => (
            <figure key={v.name} className="bg-card border border-border rounded-lg p-7">
              <blockquote className="font-display text-xl leading-snug">
                "{v.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{v.name}</div>
                <div className="text-muted-foreground">{v.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* MEMBERS */}
      <Section className="ink-bg" labelledBy="members">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-background/70">For Alumni, Delegates & Partners</p>
            <h2 id="members" className="display-2 mt-4 text-background">The members portal.</h2>
            <p className="mt-5 text-background/80 leading-relaxed max-w-xl">
              A private platform for J3D.AI alumni, delegates, and research fellows. Access
              intelligence archives, bilateral facilitation tools, the member directory, and
              exclusive event content.
            </p>
            <ul className="mt-6 space-y-2.5 text-background/85">
              <li>· Curated intelligence reports & foresight archives</li>
              <li>· Bilateral facilitation & partner matching</li>
              <li>· Exclusive post-event content & session recordings</li>
              <li>· Private network directory — verified delegates only</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-medium">
                Contact to apply
              </Link>
              <Link to="/events/house-of-collaboration" className="rounded-full border border-background/30 text-background px-5 py-2.5 text-sm">
                Apply for HoC 2027
              </Link>
            </div>
          </div>
          <div className="grid gap-3">
            {[
              { t: "Intelligence Archives", s: "14 reports — HoC, Foresight, Policy" },
              { t: "Event Recordings", s: "Davos 2025 & 2026 sessions" },
              { t: "Delegate Directory", s: "850+ verified members" },
            ].map((c) => (
              <div key={c.t} className="bg-background/5 border border-background/15 rounded-lg p-5 backdrop-blur-sm">
                <div className="text-background font-medium">{c.t}</div>
                <div className="text-background/70 text-sm mt-1">{c.s}</div>
              </div>
            ))}
            <p className="text-xs text-background/55 mt-2">Secured by Clerk — invitation only</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section labelledBy="cta">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Get Started</p>
          <h2 id="cta" className="display-2 mt-4">Ready to start a conversation?</h2>
          <p className="lede mt-5">
            Apply for HoC 2027. Request a VAY Score. Open a market access conversation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
              Book a meeting
            </Link>
            <Link to="/events/house-of-collaboration" className="rounded-full border border-foreground/25 px-6 py-3 text-sm">
              Join HoC 2027
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
