import { createFileRoute } from "@tanstack/react-router";
import { renderPage, securityHeaders } from "@/lib/render-page";

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        return new Response(renderPage(url.pathname), { headers: securityHeaders });
      },
    },
  },
});
