import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://j3d.ai";
const entries: { path: string; priority: string; changefreq?: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/#about", priority: "0.8" },
  { path: "/#approach", priority: "0.8" },
  { path: "/#hoc", priority: "0.9" },
  { path: "/#events", priority: "0.8" },
  { path: "/#estonian-leap", priority: "0.7" },
  { path: "/#deep-tech-castle", priority: "0.7" },
  { path: "/#foresight-whitepaper", priority: "0.7" },
  { path: "/#reports", priority: "0.7" },
  { path: "/#media", priority: "0.6" },
  { path: "/#team", priority: "0.6" },
  { path: "/#contact", priority: "0.7" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}<priority>${e.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
