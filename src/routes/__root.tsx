import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="display-2">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-3">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2.5 text-sm"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#1E1C36" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@J3DAI" },
      { title: "J3D.AI Platform" },
      { property: "og:title", content: "J3D.AI Platform" },
      { name: "twitter:title", content: "J3D.AI Platform" },
      { name: "description", content: "Welcome to the world of testing!" },
      { property: "og:description", content: "Welcome to the world of testing!" },
      { name: "twitter:description", content: "Welcome to the world of testing!" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/05fc7028-5e03-4dbc-8861-7aaf01c6ed8a" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/05fc7028-5e03-4dbc-8861-7aaf01c6ed8a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.fullName,
          alternateName: SITE.name,
          url: SITE.url,
          email: SITE.email,
          address: { "@type": "PostalAddress", addressLocality: "Tallinn", addressCountry: "EE" },
          sameAs: ["https://www.linkedin.com/company/j3d-ai/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main" className="pt-16">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
