import { createFileRoute } from "@tanstack/react-router";
import { securityHeaders } from "@/lib/render-page";

const FORM = "https://airtable.com/app1PFygdKIVq22Sc/pagn7SumhphcO9Lyv/form";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Media Accreditation - House of Collaboration 2027</title>
<meta name="description" content="Apply for media accreditation for House of Collaboration 2027, Davos, 17 to 21 January 2027.">
<meta property="og:title" content="Media Accreditation - House of Collaboration 2027">
<meta property="og:description" content="Apply for media accreditation for House of Collaboration 2027, Davos, 17 to 21 January 2027.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://j3d.ai/press">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<script>location.replace(${JSON.stringify(FORM)});</script>
<style>
*{box-sizing:border-box;margin:0}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;font-family:Roboto,system-ui,sans-serif;color:#fff;text-align:center;background:linear-gradient(135deg,#1E1C36,#2A2947)}
p{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(22px,4vw,32px);font-weight:600;margin-bottom:20px}
a{color:#C6F0FF;font-size:14px}
</style>
</head>
<body><main><p>Redirecting you to the HoC 2027 media accreditation form...</p><a href="${FORM}">Continue to the form</a></main></body>
</html>`;

export const Route = createFileRoute("/press")({
  server: {
    handlers: {
      GET: async () => new Response(html, { headers: securityHeaders }),
    },
  },
});
