import { Link } from "@tanstack/react-router";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-[1.4fr_3fr]">
        <div>
          <Link to="/" className="font-display text-2xl">
            {SITE.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Advisory · AI Readiness · Sovereign Convening. Headquartered in Tallinn,
            operating across DACH, the New Nordics, Asia, and the Gulf.
          </p>
          <p className="mt-4 text-sm">
            <a
              href={`mailto:${SITE.email}`}
              className="underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="eyebrow mb-4">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-soft hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} {SITE.fullName}. All rights reserved.
          </p>
          <p>Tallinn · Munich · Dubai · Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
