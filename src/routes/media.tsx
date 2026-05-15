import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, StatGrid } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/media")({
  head: () => pageHead({
    title: "Media & PR",
    description: "Press contact, coverage archive, downloadable assets, and founder profiles for journalists and partners.",
    path: "/media",
  }),
  component: MediaPage,
});

const blocks = [
  { t: "For journalists & press", d: "Interview requests, accreditation for HoC events, expert commentary on AI readiness, sovereign convening, and EU-Asia corridors.", cta: SITE.press, href: `mailto:${SITE.press}` },
  { t: "Logos, photography, fact sheets", d: "High-resolution logos (J3D.AI, House of Collaboration, Estonian Leap), founder photography, event photography, and one-pagers.", cta: "Request Media Kit", href: `mailto:${SITE.press}` },
  { t: "Founders & advisors · Speaker bureau", d: "Yip Thy-Diep Ta and Kevin Varend are available for keynotes, panels, and on-record commentary on AI readiness, EU-Asia corridors, and PPP convening.", cta: "Speaking Enquiry", href: `mailto:${SITE.press}` },
];

const founders = [
  {
    tag: "CEO · Munich",
    name: "Yip Thy-Diep Ta",
    role: "Co-founder & CEO, J3D.AI Labs OÜ",
    bio: "Former McKinsey. INSEAD MBA. Architect of the VAY Score methodology. Confirmed panelist at the Europe-Asia Economic Summit 2026. Available for commentary on AI readiness, EU-Asia corridors, brain capital.",
  },
  {
    tag: "MD · Tallinn / Munich",
    name: "Kevin Varend",
    role: "Co-founder & MD, J3D.AI Labs OÜ",
    bio: "Founder of the House of Collaboration programme. WEF Global Shapers Founding Curator in Estonia. Board member of Estonian Young Leaders. Available for commentary on PPP convening, the Nordic-Baltic corridor, and Estonian digital governance.",
  },
];

const partners = [
  ["The New York Times", "~90M monthly readers · AI Salon & geopolitics"],
  ["Blick", "~90M monthly visits · Lead Davos partner, CH"],
  ["Xinhua News Agency", "Global wire · 200+ countries"],
  ["CGTN", "China Global Television Network · International coverage"],
  ["European Brain Council", "EU institutional · Health & brain"],
  ["MFA Estonia", "Estonian Ministry of Foreign Affairs · Sovereign partner"],
];

function MediaPage() {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Media & PR</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            The right story. The right rooms. Amplified globally.
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Press contact, coverage archive, downloadable assets, and founder profiles for journalists and partners.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.t} className="bg-card border border-border rounded-lg p-7">
              <h3 className="font-display text-xl">{b.t}</h3>
              <p className="mt-3 text-ink-soft text-sm leading-relaxed">{b.d}</p>
              <a href={b.href} className="mt-5 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">{b.cta}</a>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40 border-y border-border">
        <SectionHeading eyebrow="Founder Press Profiles" title="For media & conference programmers." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((f) => (
            <article key={f.name} className="bg-background border border-border rounded-lg p-7">
              <p className="eyebrow">{f.tag}</p>
              <h3 className="display-3 mt-3">{f.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.role}</p>
              <p className="mt-4 text-ink-soft leading-relaxed">{f.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Coverage Partners" title="Tier-1 global coverage." />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {partners.map(([n, d]) => (
            <div key={n} className="bg-card border border-border rounded p-5">
              <div className="font-medium">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{d}</div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <StatGrid items={[
            { value: "1M+", label: "Direct impressions" },
            { value: "100M+", label: "Total reach" },
            { value: "70+", label: "Countries reached" },
            { value: "Tier-1", label: "Global outlets" },
          ]} />
        </div>
        <p className="mt-12 text-center">
          <a href={`mailto:${SITE.email}`} className="font-display text-2xl underline-offset-4 hover:underline">{SITE.email}</a>
        </p>
      </Section>
    </>
  );
}
