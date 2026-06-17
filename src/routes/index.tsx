import { createFileRoute } from "@tanstack/react-router";
import { renderPage, securityHeaders } from "@/lib/render-page";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: async () => new Response(renderPage("/"), { headers: securityHeaders }),
    },
  },
});
