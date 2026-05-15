import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://credit-kindred-quest.lovable.app";
const paths = [
  "/", "/about", "/approach", "/events",
  "/events/house-of-collaboration", "/events/estonian-leap",
  "/events/deep-tech-castle", "/events/davos-2025",
  "/foresight-whitepaper", "/reports", "/media",
  "/team", "/fellows", "/members", "/contact",
  "/imprint", "/privacy", "/hoc-terms",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((p) =>
          `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
