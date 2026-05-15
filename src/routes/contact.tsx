import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({
    title: "Contact",
    description: "Apply for HoC 2027, request a VAY Score, or open a market access conversation.",
    path: "/contact",
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`[J3D.AI] ${data.get("topic") || "Enquiry"} — ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nOrganisation: ${data.get("org")}\nEmail: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setTimeout(() => { setSending(false); setSubmitted(true); }, 400);
  };

  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">Start a conversation.</h1>
          <p className="lede mt-6 max-w-2xl">
            Apply for HoC 2027, request a VAY Score, or open a market access conversation.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Send a Message</p>
            <h2 className="display-3 mt-3">Tell us what you need.</h2>

            {submitted ? (
              <div className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-6 text-sm">
                Thanks — your email client should have opened. If not, write to{" "}
                <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" autoComplete="name" required />
                  <Field id="org" label="Organisation" autoComplete="organization" />
                </div>
                <Field id="email" label="Email" type="email" autoComplete="email" required />
                <div>
                  <label htmlFor="topic" className="text-sm font-medium">What can we help with?</label>
                  <select id="topic" name="topic" className="mt-2 w-full rounded border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>AI Readiness (VAY Score)</option>
                    <option>House of Collaboration · Davos</option>
                    <option>Estonian Leap Programme</option>
                    <option>Advisory & Consulting</option>
                    <option>Members Portal</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60"
                >
                  {sending ? "Opening…" : "Submit Enquiry"}
                </button>
                <p className="text-xs text-muted-foreground">
                  Or email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="eyebrow">Where We Operate</p>
              <h3 className="display-3 mt-3">Tallinn HQ. Four regions.</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li><strong>Tallinn, Estonia</strong> — Registered HQ · J3D.AI Labs OÜ</li>
                <li><strong>Munich, Germany</strong> — DACH strategy, events & advisory</li>
                <li><strong>Dubai, UAE</strong> — Gulf capital network</li>
                <li><strong>Mumbai, India</strong> — South Asia operations</li>
                <li className="text-muted-foreground">+ Vietnam (Ho Chi Minh City) · China (Beijing & Shanghai)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="eyebrow">Book a Call</p>
              <p className="mt-3 text-sm text-ink-soft">
                For a structured 30-minute conversation. The form lets us tailor the call to your needs.
              </p>
              <a href="https://calendly.com/j3dai" className="mt-5 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">Book via Calendly</a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({ id, label, type = "text", autoComplete, required }: { id: string; label: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}{required && " *"}</label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
