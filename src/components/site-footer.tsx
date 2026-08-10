import { Link } from "@tanstack/react-router";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="hairline mt-32 bg-background">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-2xl">
              J<sup className="text-[0.55em] -top-2 relative">3</sup>D·AI
            </Link>
            <p className="lede mt-4 max-w-sm text-sm">{SITE.tagline}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="underline-link mt-6 inline-block text-sm text-ink-soft"
            >
              {SITE.email}
            </a>
          </div>
          {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
            <div key={heading}>
              <p className="eyebrow mb-4">{heading}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-ink-soft hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="hairline mt-16 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.fullName} - Tallinn, Estonia.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={SITE.linkedin} target="_blank" rel="noopener" className="underline-link">
              LinkedIn
            </a>
            <a href={SITE.hocLinkedin} target="_blank" rel="noopener" className="underline-link">
              HoC LinkedIn
            </a>
            <a href={SITE.youtube} target="_blank" rel="noopener" className="underline-link">
              YouTube
            </a>
            <a href={SITE.luma} target="_blank" rel="noopener" className="underline-link">
              Luma
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
