export const SITE = {
  name: "J3D.AI",
  fullName: "J3D.AI Labs OÜ",
  tagline: "Making collaboration more profitable than competition.",
  description:
    "J3D.AI is an advisory and technology company delivering market access advisory, AI readiness scoring, and sovereign convening across Europe and Asia.",
  url: "https://credit-kindred-quest.lovable.app",
  email: "primary@j3d.ai",
  press: "press@j3d.ai",
  castle: "castle@j3d.ai",
  calendly: "https://calendly.com/j3dai",
  linkedin: "https://www.linkedin.com/company/j3d-ai/",
  // Paste your Formspree / Getform / Basin endpoint here, e.g.
  //   "https://formspree.io/f/xxxxxxxx" or "https://getform.io/f/xxxxxxxx".
  // While empty the contact form falls back to mailto:.
  formEndpoint: "" as string,
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
  { to: "/events", label: "Events" },
  { to: "/events/house-of-collaboration", label: "Davos 2027" },
  { to: "/foresight-whitepaper", label: "Whitepaper" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  Company: [
    { to: "/about", label: "About" },
    { to: "/approach", label: "Approach" },
    { to: "/team", label: "Team" },
    { to: "/fellows", label: "Fellows" },
    { to: "/media", label: "Media & PR" },
  ],
  Programmes: [
    { to: "/events", label: "All Events" },
    { to: "/events/house-of-collaboration", label: "HoC Davos 2027" },
    { to: "/events/estonian-leap", label: "Estonian Leap" },
    { to: "/events/deep-tech-castle", label: "Deep Tech Castle" },
    { to: "/events/davos-2025", label: "Davos 2025 Archive" },
  ],
  Intelligence: [
    { to: "/foresight-whitepaper", label: "Foresight Whitepaper" },
    { to: "/reports", label: "Reports" },
    { to: "/members", label: "Members Portal" },
  ],
  Legal: [
    { to: "/imprint", label: "Imprint" },
    { to: "/privacy", label: "Privacy" },
    { to: "/hoc-terms", label: "HoC Terms" },
    { to: "/contact", label: "Contact" },
  ],
};
