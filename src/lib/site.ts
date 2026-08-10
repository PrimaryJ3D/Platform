export const SITE = {
  name: "J3D.AI",
  fullName: "J3D.AI Labs OÜ",
  tagline: "Making collaboration more profitable than competition.",
  description:
    "J3D.AI is an Estonian advisory and technology firm. We convene the world's most consequential leaders, score AI readiness, and unlock market access across Europe and Asia.",
  url: "https://j3d.ai",
  email: "primary@j3d.ai",
  press: "press@j3d.ai",
  castle: "castle@j3d.ai",
  calendly: "https://calendly.com/j3d-ai/hoc",
  linkedin: "https://www.linkedin.com/company/j3d-ai/",
  hocLinkedin: "https://www.linkedin.com/company/hocdavos/",
  youtube: "https://www.youtube.com/@J3DAI",
  luma: "https://lu.ma/davos27",
  formEndpoint: "" as string,
  // Airtable application form for House of Collaboration (Davos 2027)
  hocAirtable: "https://airtable.com/embed/app1PFygdKIVq22Sc/pagKpwlgJmumn1Uwq/form",
};

// Primary nav — funnel terminates at HoC.
export const NAV = [
  { to: "/hoc", label: "House of Collaboration" },
  { to: "/estonian-leap", label: "Estonian Leap" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" },
] as const;

// Legacy content pages (served by catch-all from legacy HTML). Use plain string hrefs.
export const LEGACY_LINKS = {
  about: "/about",
  team: "/team",
  fellows: "/fellows",
  reports: "/reports",
  media: "/media",
  foresight: "/foresight-whitepaper",
  davos2025: "/davos-2025",
  deepTechCastle: "/deep-tech-castle",
  members: "/members",
  privacy: "/privacy-policy",
  imprint: "/imprint",
  hocTerms: "/terms-and-conditions",
  cancellation: "/cancellation",
};

export const FOOTER_LINKS: Record<string, { href: string; label: string; external?: boolean }[]> = {
  Platforms: [
    { href: "/hoc", label: "House of Collaboration" },
    { href: "/estonian-leap", label: "Estonian Leap" },
    { href: "/deep-tech-castle", label: "Deep Tech Castle" },
    { href: "/davos-2025", label: "Davos 2025 Archive" },
  ],
  Intelligence: [
    { href: "/reports", label: "Reports" },
    { href: "/foresight-whitepaper", label: "Foresight Whitepaper" },
    { href: "/media", label: "Media & PR" },
    { href: "/members", label: "Members Portal" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/approach", label: "Approach" },
    { href: "/team", label: "Team" },
    { href: "/fellows", label: "Fellows Programme" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/imprint", label: "Imprint" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/cancellation", label: "Cancellation Policy" },
  ],
};
