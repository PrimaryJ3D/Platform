import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, StatGrid } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead({
    title: "About",
    description: "J3D.AI is an advisory and technology company headquartered in Tallinn, Estonia, built on the conviction that collaboration should be more profitable than competition.",
    path: "/about",
  }),
  component: AboutPage,
});

const offices = [
  { tag: "Registered HQ", city: "Tallinn, Estonia", body: "J3D.AI Labs OÜ — New Nordics corridor." },
  { tag: "DACH Operations", city: "Munich, Germany", body: "Strategy, events & DACH advisory · Glockenbachviertel." },
  { tag: "Gulf Operations", city: "Dubai, UAE", body: "Capital network · Gulf advisory." },
  { tag: "South Asia Operations", city: "Mumbai, India", body: "India corporate & government advisory." },
];

function AboutPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">About J3D.AI</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            An advisory and technology company built on the conviction that
            collaboration should be more profitable than competition.
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">The Company</p>
            <h2 className="display-2 mt-4">J3D.AI <span className="text-muted-foreground">(JED-EYE)</span></h2>
          </div>
          <div className="space-y-5 text-ink-soft leading-relaxed text-lg">
            <p>
              J3D.AI is an advisory and technology company headquartered in Tallinn, Estonia.
              We deliver market access advisory, AI readiness scoring and implementation, and
              sovereign convening for organizations navigating the AI transition across Europe and Asia.
            </p>
            <p>
              Founded on the principle that <em>peace must become more profitable than war</em> and
              that collaboration, structured correctly, creates more value than competition. This
              shapes every engagement: who is in the room, how dialogue is structured, and what
              outcomes are measured.
            </p>
            <blockquote className="border-l-2 border-accent pl-5 font-display text-2xl text-foreground">
              "We exist to make peace more profitable than war and collaboration more profitable than competition."
              <footer className="mt-3 text-sm not-italic text-muted-foreground font-sans">— Yip Thy-Diep Ta, CEO, J3D.AI</footer>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading
          eyebrow="Who we work with"
          title="Governments, capital, and founders."
          lede="We work with sovereign governments and ministries navigating AI policy and trade corridors, capital allocators seeking intelligence on emerging markets and technology transitions, and deep-tech founders building at the intersection of AI, governance, and resilience. The common thread: organizations where the decisions being made are consequential."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="bg-background border border-border rounded-lg p-7">
            <p className="eyebrow">Case Study</p>
            <h3 className="display-3 mt-3">Allianz NextGenIT & Cybersecurity Think Tank</h3>
            <p className="mt-4 text-ink-soft">15+ whitepapers structuring the cybersecurity roadmap of a DAX40 enterprise. Multi-year engagement.</p>
          </article>
          <article className="bg-background border border-border rounded-lg p-7">
            <p className="eyebrow">Case Study</p>
            <h3 className="display-3 mt-3">Inside Davos Foresight Whitepaper</h3>
            <p className="mt-4 text-ink-soft">42 global experts. 9 visions of the future. Co-developed with the Bavarian Foresight Institute.</p>
          </article>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/approach" className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm">Our approach</Link>
          <Link to="/contact" className="rounded-full border border-foreground/25 px-5 py-2.5 text-sm">Start a conversation</Link>
        </div>
      </Section>

      <Section>
        <StatGrid items={[
          { value: "850+", label: "Delegates · HoC 2026" },
          { value: "70+", label: "Countries represented" },
          { value: "15+", label: "Whitepapers · Allianz" },
          { value: "3", label: "MoUs signed · China market" },
        ]} />
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading
          eyebrow="Operations & Presence"
          title="Headquartered in Tallinn. Operating across four regions."
          lede="Estonia is our legal home and registered headquarters. Our operational presence spans DACH, the New Nordics, Asia, and the UAE."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city} className="bg-background border border-border rounded-lg p-6">
              <p className="eyebrow">{o.tag}</p>
              <p className="mt-3 font-display text-xl">{o.city}</p>
              <p className="mt-3 text-sm text-ink-soft">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
