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
          return new Response(null, {
            status: 301,
            headers: { Location: redirect + url.search, "Cache-Control": "public, max-age=3600" },
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
