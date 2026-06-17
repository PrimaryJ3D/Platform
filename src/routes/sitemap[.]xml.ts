import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://j3d.ai";

// Premium React routes + legacy HTML pages served via catch-all.
const entries: { path: string; priority: string; changefreq?: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/hoc", priority: "1.0", changefreq: "weekly" },
  { path: "/estonian-leap", priority: "0.9", changefreq: "monthly" },
  { path: "/approach", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7" },
  { path: "/team", priority: "0.6" },
  { path: "/fellows", priority: "0.6" },
  { path: "/reports", priority: "0.7" },
  { path: "/media", priority: "0.6" },
  { path: "/foresight-whitepaper", priority: "0.7" },
  { path: "/davos-2025", priority: "0.6" },
  { path: "/deep-tech-castle", priority: "0.6" },
  { path: "/members", priority: "0.5" },
  { path: "/privacy", priority: "0.3" },
  { path: "/imprint", priority: "0.3" },
  { path: "/hoc-terms", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc><lastmod>${today}</lastmod>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}<priority>${e.priority}</priority></url>`,
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
