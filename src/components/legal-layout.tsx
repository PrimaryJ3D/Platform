import { type ReactNode } from "react";

export function LegalLayout({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <>
      <section className="aurora-bg">
        <div className="container-x py-20 sm:py-28">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-1 mt-5">{title}</h1>
          {intro && <p className="lede mt-5 max-w-3xl">{intro}</p>}
        </div>
      </section>
      <section className="py-20">
        <div className="container-x max-w-3xl prose-legal">{children}</div>
      </section>
      <style>{`
        .prose-legal h2 { font-family: var(--font-display); font-size: 1.75rem; margin-top: 2.5rem; margin-bottom: 1rem; letter-spacing: -.01em; }
        .prose-legal h3 { font-weight: 600; margin-top: 1.75rem; margin-bottom: .5rem; }
        .prose-legal p, .prose-legal li { color: var(--ink-soft); line-height: 1.7; margin-bottom: .75rem; }
        .prose-legal ul { padding-left: 1.25rem; list-style: disc; }
        .prose-legal a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
      `}</style>
    </>
  );
}
