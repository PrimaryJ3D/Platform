import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl tracking-tight" aria-label={SITE.name}>
          J<sup className="text-[0.55em] -top-2 relative">3</sup>D·AI
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="text-sm font-sans font-normal text-ink-soft hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/hoc"
            className="inline-flex items-center gap-2 text-sm rounded-full bg-foreground text-background px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Apply for HoC 2027
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-border bg-background"
        >
          <nav className="container-x py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.to}
                href={item.to}
                className="py-3 text-lg font-display text-ink-soft hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/hoc"
              className="mt-4 inline-flex justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm"
            >
              Apply for HoC 2027
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
