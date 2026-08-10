import rawHtml from "../j3d-site.html?raw";

const BASE_URL = "https://j3d.ai";

type PageMeta = {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const PAGES: Record<string, PageMeta> = {
  "/": {
    title: "J3D.AI - Advisory, AI Readiness & Sovereign Convening",
    description:
      "J3D.AI: advisory, AI readiness scoring, and sovereign convening for organizations navigating the AI transition across Europe and Asia.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "J3D.AI Labs OÜ",
        alternateName: "J3D.AI",
        url: BASE_URL,
        logo: `${BASE_URL}/favicon.svg`,
        image: `${BASE_URL}/og-j3d.jpg`,
        email: "primary@j3d.ai",
        address: { "@type": "PostalAddress", addressLocality: "Tallinn", addressCountry: "EE" },
        sameAs: [
          "https://www.linkedin.com/company/j3d-ai/",
          "https://www.linkedin.com/company/hocdavos/",
          "https://www.youtube.com/@J3DAI",
          "https://lu.ma/davos27",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "J3D.AI",
        url: BASE_URL,
        description:
          "Advisory, AI readiness, and sovereign convening for organizations navigating the AI transition.",
        publisher: { "@type": "Organization", name: "J3D.AI Labs OÜ" },
      },
    ],
  },
  "/about": {
    title: "About - J3D.AI",
    description:
      "An advisory and technology company built on the conviction that collaboration should be more profitable than competition.",
  },
  "/approach": {
    title: "Our Approach - J3D.AI",
    description:
      "Cybernetic foresight, technology mastery, and wisdom: how J3D.AI works with clients and partners across borders.",
  },
  "/team": {
    title: "Team - J3D.AI",
    description: "The people behind J3D.AI's advisory, AI readiness, and convening practice.",
  },
  "/fellows": {
    title: "Fellows - J3D.AI",
    description: "J3D.AI Fellows: a curated network of practitioners shaping AI policy and practice.",
  },
  "/members": {
    title: "Members Portal - J3D.AI",
    description: "Members portal for J3D.AI clients, fellows, and convening participants.",
  },
  "/reports": {
    title: "Reports - J3D.AI",
    description:
      "Intelligence from the world's most consequential conversations. Publications and research from J3D.AI.",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "J3D.AI Reports",
      description: "Publications and research from J3D.AI.",
      url: `${BASE_URL}/reports`,
      isPartOf: { "@type": "WebSite", name: "J3D.AI", url: BASE_URL },
    },
  },
  "/media": {
    title: "Media - J3D.AI",
    description: "Press, talks, and media coverage of J3D.AI's work across Europe and Asia.",
  },
  "/foresight-whitepaper": {
    title: "Davos Foresight Whitepaper: Our World in 2125 - J3D.AI",
    description:
      "Davos Foresight Whitepaper - Our World in 2125: a long-form foresight publication by J3D.AI.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Davos Foresight Whitepaper - Our World in 2125",
      author: { "@type": "Organization", name: "J3D.AI" },
      publisher: { "@type": "Organization", name: "J3D.AI" },
      datePublished: "2025-01-25",
      image: `${BASE_URL}/og-j3d.jpg`,
      url: `${BASE_URL}/foresight-whitepaper`,
    },
  },
  "/davos-2025": {
    title: "Davos 2025 - Peace as Policy - J3D.AI",
    description: "Davos 2025: Peace as Policy. Cross-border collaboration convened by J3D.AI.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "House of Collaboration at Davos 2025",
      description: "Cross-border collaboration convening alongside the World Economic Forum.",
      startDate: "2025-01-20",
      endDate: "2025-01-24",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Davos",
        address: { "@type": "PostalAddress", addressLocality: "Davos", addressCountry: "CH" },
      },
      organizer: { "@type": "Organization", name: "J3D.AI", url: BASE_URL },
      url: `${BASE_URL}/davos-2025`,
    },
  },
  "/hoc": {
    title: "House of Collaboration 2027 - J3D.AI",
    description:
      "House of Collaboration: rooms where decisions happen. Applications for HoC 2027 are open.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "House of Collaboration 2027",
      description: "Curated, sovereign convening for leaders working at the AI frontier.",
      startDate: "2027-01-17",
      endDate: "2027-01-21",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Davos",
        address: { "@type": "PostalAddress", addressLocality: "Davos", addressCountry: "CH" },
      },
      organizer: { "@type": "Organization", name: "J3D.AI", url: BASE_URL },
      url: `${BASE_URL}/hoc`,
    },
  },
  "/residency": {
    title: "HoC 2027 Residency - J3D.AI",
    description:
      "Join the residency at House of Collaboration 2027, Davos. Full week, a slot on the programme, place to stay. Limited slots - first come, first served.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "House of Collaboration 2027 Residency",
      description:
        "The HoC 2027 Residency: your full week on the programme, a slot on the programme, and a place to stay - curated end to end. Only 42 residencies exist.",
      startDate: "2027-01-17",
      endDate: "2027-01-21",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Davos",
        address: { "@type": "PostalAddress", addressLocality: "Davos", addressCountry: "CH" },
      },
      organizer: { "@type": "Organization", name: "J3D.AI", url: BASE_URL },
      offers: {
        "@type": "Offer",
        url: "https://airtable.com/app1PFygdKIVq22Sc/pagKpwlgJmumn1Uwq/form",
        availability: "https://schema.org/LimitedAvailability",
      },
      url: `${BASE_URL}/residency`,
    },
  },
  "/deep-tech-castle": {
    title: "Deep Tech Castle - J3D.AI",
    description: "Where zebracorns convene: cybersecurity meets philosophy at C-suite level.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Deep Tech Castle",
      description: "Curated convening for deep tech founders, operators, and policymakers.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Europe",
        address: { "@type": "PostalAddress", addressCountry: "EE" },
      },
      organizer: { "@type": "Organization", name: "J3D.AI", url: BASE_URL },
      url: `${BASE_URL}/deep-tech-castle`,
    },
  },
  "/estonian-leap": {
    title: "Estonian Leap - J3D.AI",
    description:
      "Estonian Leap: a country embedded, not hosted. A blueprint for digital and economic transition.",
  },
  "/contact": {
    title: "Contact - J3D.AI",
    description: "Start a conversation with J3D.AI.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - J3D.AI",
    description:
      "How J3D.AI Labs OÜ collects, uses and protects personal data, under the GDPR and Estonian law.",
  },
  "/imprint": {
    title: "Imprint - J3D.AI",
    description: "Legal imprint for J3D.AI Labs OÜ, Tallinn, Estonia.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions - J3D.AI",
    description:
      "Participant Terms & Conditions for the House of Collaboration, operated by J3D.AI Labs OÜ.",
  },
  "/cancellation": {
    title: "Cancellation Policy - J3D.AI",
    description:
      "Event cancellation, substitution and refund policy for events organised by J3D.AI Labs OÜ.",
  },
};

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const deepLinkScript = `
<script>(function(){
  try {
    var path = (location.pathname || '/').replace(/\\/+$/, '') || '/';
    var isHome = path === '/';
    /* Strip any stray hash on non-home routes so the URL is always
       exactly the pathname (e.g. /residency, never /residency#anything). */
    var scrubHash = function(){
      if (!isHome && location.hash) {
        try { history.replaceState(null, '', path); } catch (e) {}
      }
    };
    scrubHash();
    if (!isHome) {
      window.addEventListener('hashchange', scrubHash);
    }
    var p = path.replace(/^\\//, '');
    if (!p) return;
    var hideAll = function(){
      var nodes = document.querySelectorAll('div.pg');
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove('on');
        nodes[i].style.display = 'none';
      }
    };
    hideAll();
    var attempts = 0;
    var t = setInterval(function(){
      attempts++;
      hideAll();
      if (typeof window.go === 'function') {
        window.go(p);
        scrubHash();
        clearInterval(t);
      } else if (attempts > 80) { clearInterval(t); }
    }, 50);
  } catch (e) {}
})();</script>`;

export function normalizePath(pathname: string): string {
  const lower = (pathname || "/").toLowerCase();
  return lower === "" ? "/" : lower.replace(/\/+$/, "") || "/";
}

export const REDIRECTS: Record<string, string> = {
  "/privacy": "/privacy-policy",
  "/privacypolicy": "/privacy-policy",
  "/privacy-and-policy": "/privacy-policy",
  "/hoc-terms": "/terms-and-conditions",
  "/terms": "/terms-and-conditions",
  "/termsandconditions": "/terms-and-conditions",
  "/cancellation-policy": "/cancellation",
  "/cancellations": "/cancellation",
  "/impressum": "/imprint",
};

export function getRedirect(pathname: string): string | null {
  return REDIRECTS[normalizePath(pathname)] ?? null;
}

export function renderPage(pathname: string): string {
  const path = normalizePath(pathname);
  const meta = PAGES[path] ?? PAGES["/"];
  const url = `${BASE_URL}${path === "/" ? "/" : path}`;
  const title = escapeAttr(meta.title);
  const desc = escapeAttr(meta.description);
  const ogType = path === "/" ? "website" : "article";

  let html = rawHtml;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

  // Per-tag replacements
  const replacements: Array<[RegExp, string]> = [
    [/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`],
    [/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`],
    [/<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${ogType}">`],
    [/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`],
    [/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`],
    [/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${desc}">`],
    [/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`],
    [/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${desc}">`],
  ];
  for (const [re, val] of replacements) html = html.replace(re, val);

  // Inject route-specific JSON-LD just before </head>
  if (meta.schema) {
    const schemas = Array.isArray(meta.schema) ? meta.schema : [meta.schema];
    const tags = schemas
      .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join("\n");
    html = html.replace("</head>", `${tags}\n</head>`);
  }

  // Inject deep-link bootstrap
  html = html.replace("</body>", deepLinkScript + "</body>");
  return html;
}

export const KNOWN_PATHS: ReadonlySet<string> = new Set(Object.keys(PAGES));

export function isKnownPath(pathname: string): boolean {
  return KNOWN_PATHS.has(normalizePath(pathname));
}

export function renderNotFoundPage(pathname: string): string {
  const safePath = escapeAttr(pathname || "/");
  const title = "Page not found - J3D.AI";
  const desc = "The page you are looking for doesn't exist.";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${BASE_URL}${safePath}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root{--ind:#2A2947;--ind2:#1E1C36;--lav:#997CB7;--ice:#C6F0FF;--w:#fff;--warm:#F5F4F0;--serif:'Cormorant Garamond',Georgia,serif;--rounded:'Inter',system-ui,sans-serif}
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{font-family:var(--rounded);background:var(--ind2);color:var(--w);display:flex;align-items:center;justify-content:center;padding:24px;line-height:1.6;-webkit-font-smoothing:antialiased;
    background-image:radial-gradient(ellipse at 20% 20%,rgba(198,240,255,.12),transparent 55%),radial-gradient(ellipse at 80% 80%,rgba(153,124,183,.28),transparent 60%),linear-gradient(135deg,var(--ind2),var(--ind));}
  main{max-width:560px;text-align:center}
  .eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--ice);margin-bottom:18px}
  h1{font-family:var(--serif);font-weight:600;font-size:clamp(40px,8vw,72px);line-height:1.05;letter-spacing:-.02em;margin-bottom:14px}
  p{color:rgba(255,255,255,.78);font-size:15px;margin-bottom:28px}
  code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;color:var(--ice);background:rgba(255,255,255,.06);padding:2px 8px;border-radius:3px;word-break:break-all}
  .acts{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px}
  a.btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:12px 22px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;border:1px solid rgba(255,255,255,.25);color:#fff;transition:background .15s,border-color .15s}
  a.btn:hover{background:rgba(255,255,255,.06);border-color:var(--lav)}
  a.btn.primary{background:var(--lav);border-color:var(--lav)}
  a.btn.primary:hover{background:#b89dd3;border-color:#b89dd3}
</style>
</head>
<body>
  <main>
    <div class="eyebrow">404 &middot; Not found</div>
    <h1>This page doesn't exist.</h1>
    <p>We couldn't find <code>${safePath}</code> on J3D.AI. It may have been moved, or the link is mistyped.</p>
    <div class="acts">
      <a class="btn primary" href="/">Return home</a>
      <a class="btn" href="/contact">Contact us</a>
    </div>
  </main>
</body>
</html>`;
}

export const securityHeaders: Record<string, string> = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=0, must-revalidate",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net https://cdn.tickettailor.com https://js-eu1.hs-scripts.com https://js.hsforms.net https://js-eu1.hsforms.net https://forms.hsforms.com https://google.com https://www.google.com https://www.gstatic.com https://recaptcha.net https://www.recaptcha.net https://lovable.dev https://*.lovable.app https://*.lovable.dev",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
    "font-src 'self' data: https://fonts.gstatic.com",
    "img-src 'self' data: blob: https: https://images.pexels.com https://www.google-analytics.com https://stats.g.doubleclick.net",
    "frame-src https://forms-eu1.hsforms.com https://www.youtube.com https://www.youtube-nocookie.com https://airtable.com https://2b8nv2.share-eu1.hsforms.com https://js-eu1.hsforms.net https://google.com https://www.google.com https://recaptcha.net https://www.recaptcha.net https://www.tickettailor.com https://buytickets.at https://calendly.com https://docsend.com https://docs.j3d.ai",
    "frame-ancestors 'self' https://*.lovable.app https://*.lovable.dev https://lovable.dev",
    "connect-src 'self' https: https://www.google-analytics.com https://region1.analytics.google.com https://api.airtable.com https://js-eu1.hs-scripts.com",
    "object-src 'none'",
    "base-uri 'self'",
    "upgrade-insecure-requests",
  ].join("; "),
};
