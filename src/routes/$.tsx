import { createFileRoute } from "@tanstack/react-router";
import { isKnownPath, renderNotFoundPage, renderPage, securityHeaders } from "@/lib/render-page";

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const pathname = url.pathname;
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
