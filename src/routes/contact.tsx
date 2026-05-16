import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Section } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact",
      description:
        "Apply for HoC 2027, request a VAY Score, or open a market access conversation.",
      path: "/contact",
    }),
  component: ContactPage,
});

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  org: z.string().trim().max(140).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  topic: z.string().trim().min(1).max(80),
  message: z.string().trim().min(10, "A short message helps us reply well").max(2000),
});

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

function ContactPage() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [errors, setErrors] = useState<Partial<Record<keyof z.infer<typeof ContactSchema>, string>>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = ContactSchema.safeParse({
      name: fd.get("name"),
      org: fd.get("org") ?? "",
      email: fd.get("email"),
      topic: fd.get("topic"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof z.infer<typeof ContactSchema>;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setState({ kind: "sending" });

    const payload = parsed.data;

    // 1. Real endpoint if configured (Formspree / Getform / Basin)
    if (SITE.formEndpoint) {
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        form.reset();
        setState({ kind: "success" });
        return;
      } catch (err) {
        setState({
          kind: "error",
          message: err instanceof Error ? err.message : "Submission failed. Please email us directly.",
        });
        return;
      }
    }

    // 2. Mailto fallback
    const subject = encodeURIComponent(`[J3D.AI] ${payload.topic} — ${payload.name}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nOrganisation: ${payload.org || "—"}\nEmail: ${payload.email}\nTopic: ${payload.topic}\n\n${payload.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setState({ kind: "success" });
  };

  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-20 sm:py-28 lg:py-32">
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

            {state.kind === "success" ? (
              <div
                role="status"
                className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-6 text-sm"
              >
                Thanks — we received your enquiry. Our team replies within 2 business days.
                {!SITE.formEndpoint && (
                  <>
                    {" "}
                    If your mail client didn't open, write to{" "}
                    <a className="underline" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>.
                  </>
                )}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setState({ kind: "idle" })}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" autoComplete="name" required error={errors.name} />
                  <Field id="org" label="Organisation" autoComplete="organization" error={errors.org} />
                </div>
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  required
                  error={errors.email}
                />
                <div>
                  <label htmlFor="topic" className="text-sm font-medium">
                    What can we help with?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue="AI Readiness (VAY Score)"
                    className="mt-2 w-full rounded border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>AI Readiness (VAY Score)</option>
                    <option>House of Collaboration · Davos</option>
                    <option>Estonian Leap Programme</option>
                    <option>Deep Tech Castle</option>
                    <option>Advisory & Consulting</option>
                    <option>Members Portal</option>
                    <option>Press &amp; Media</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    className="mt-2 w-full rounded border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                {state.kind === "error" && (
                  <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                    {state.message} — please email{" "}
                    <a className="underline" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>{" "}
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.kind === "sending"}
                  className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60 min-h-11"
                >
                  {state.kind === "sending" ? "Sending…" : "Submit Enquiry"}
                </button>
                <p className="text-xs text-muted-foreground">
                  Or email{" "}
                  <a className="underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="eyebrow">Where We Operate</p>
              <h3 className="display-3 mt-3">Tallinn HQ. Four regions.</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <strong>Tallinn, Estonia</strong> — Registered HQ · J3D.AI Labs OÜ
                </li>
                <li>
                  <strong>Munich, Germany</strong> — DACH strategy, events & advisory
                </li>
                <li>
                  <strong>Dubai, UAE</strong> — Gulf capital network
                </li>
                <li>
                  <strong>Mumbai, India</strong> — South Asia operations
                </li>
                <li className="text-muted-foreground">
                  + Vietnam (Ho Chi Minh City) · China (Beijing &amp; Shanghai)
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="eyebrow">Book a Call</p>
              <p className="mt-3 text-sm text-ink-soft">
                For a structured 30-minute conversation. The form lets us tailor the call to your
                needs.
              </p>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm min-h-11 items-center"
              >
                Book via Calendly
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  required,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className="mt-2 w-full rounded border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
