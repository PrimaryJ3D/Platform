import { createFileRoute } from "@tanstack/react-router";
import rawHtml from "../j3d-site.html?raw";

// Inject deep-link bootstrap so /about, /team, /reports, /media, /fellows,
// /privacy, /imprint, /hoc-terms, /davos-2025, /deep-tech-castle, and
// /foresight-whitepaper land on the correct legacy page on first paint.
const deepLinkScript = `
<script>(function(){
  try {
    var p = (location.pathname || '/').replace(/^\\//, '').replace(/\\/$/, '');
    if (!p) return;
    var attempts = 0;
    var t = setInterval(function(){
      attempts++;
      if (typeof window.go === 'function') { window.go(p); clearInterval(t); }
      else if (attempts > 60) { clearInterval(t); }
    }, 50);
  } catch (e) {}
})();</script>`;

const html = rawHtml.replace("</body>", deepLinkScript + "</body>");

const securityHeaders: Record<string, string> = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=0, must-revalidate",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net https://cdn.tickettailor.com https://js-eu1.hs-scripts.com https://js.hsforms.net https://js-eu1.hsforms.net https://forms.hsforms.com https://lovable.dev https://*.lovable.app https://*.lovable.dev",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
    "font-src 'self' data: https://fonts.gstatic.com",
    "img-src 'self' data: blob: https: https://images.pexels.com https://www.google-analytics.com https://stats.g.doubleclick.net",
    "frame-src https://airtable.com https://2b8nv2.share-eu1.hsforms.com https://www.tickettailor.com https://buytickets.at https://calendly.com https://docsend.com https://docs.j3d.ai",
    "frame-ancestors 'self' https://*.lovable.app https://*.lovable.dev https://lovable.dev",
    "connect-src 'self' https: https://www.google-analytics.com https://region1.analytics.google.com https://api.airtable.com https://js-eu1.hs-scripts.com",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; "),
};

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: async () => new Response(html, { headers: securityHeaders }),
    },
  },
});
