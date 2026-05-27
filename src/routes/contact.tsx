import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — J3D.AI" },
      { name: "description", content: "Speak with J3D.AI about House of Collaboration, Estonian Leap, advisory, or media enquiries." },
      { property: "og:title", content: "Contact — J3D.AI" },
      { property: "og:url", content: `${SITE.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contact` }],
  }),
});

function ContactPage() {
  return (
    <section className="container-x pt-28 pb-32 sm:pt-40 max-w-3xl">
      <p className="eyebrow">Contact</p>
      <h1 className="display-1 mt-6">Talk to us.</h1>
      <p className="lede mt-8">
        The fastest path is to book a 25-minute call. For media, partnership and
        sovereign-programme enquiries, write directly.
      </p>

      <div className="hairline mt-16 pt-12 grid gap-12 sm:grid-cols-2">
        <div>
          <p className="eyebrow">Convening &amp; advisory</p>
          <a href={SITE.calendly} target="_blank" rel="noopener" className="display-3 mt-3 block underline-link">
            Book a call →
          </a>
          <a href={`mailto:${SITE.email}`} className="mt-3 block text-ink-soft underline-link">
            {SITE.email}
          </a>
        </div>
        <div>
          <p className="eyebrow">Media &amp; press</p>
          <a href={`mailto:${SITE.press}`} className="display-3 mt-3 block underline-link">
            {SITE.press}
          </a>
          <p className="mt-3 text-ink-soft">Tallinn, Estonia — EU jurisdiction.</p>
        </div>
      </div>
    </section>
  );
}
