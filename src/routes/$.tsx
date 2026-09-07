import { createFileRoute } from "@tanstack/react-router";
import {
  getRedirect,
  isKnownPath,
  normalizePath,
  renderNotFoundPage,
  renderPage,
  securityHeaders,
} from "@/lib/render-page";

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const pathname = url.pathname;
        const canonical = normalizePath(pathname);
        const redirect =
          getRedirect(pathname) ??
          (isKnownPath(pathname) && canonical !== pathname ? canonical : null);
        if (redirect) {
          // 302 + no-store: browsers cache 301s indefinitely, which previously
          // left stale /residency -> /hoc redirects pinned in user caches.
          return new Response(null, {
            status: 302,
            headers: { Location: redirect + url.search, "Cache-Control": "no-store" },
          });
        }

        if (!isKnownPath(pathname)) {
          return new Response(renderNotFoundPage(pathname), {
            status: 404,
            headers: securityHeaders,
          });
        }
        return new Response(renderPage(pathname), { headers: securityHeaders });
      },
    },
  },
});
