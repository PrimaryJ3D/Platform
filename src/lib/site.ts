export const SITE = {
  name: "J3D.AI",
  fullName: "J3D.AI Labs OÜ",
  tagline: "Making collaboration more profitable than competition.",
  description:
    "J3D.AI is an Estonian advisory and technology firm. We convene the world's most consequential leaders, score AI readiness, and unlock market access across Europe and Asia.",
  url: "https://j3d-ai.lovable.app",
  email: "primary@j3d.ai",
  press: "press@j3d.ai",
  castle: "castle@j3d.ai",
  calendly: "https://calendly.com/j3d-ai/hoc",
  linkedin: "https://www.linkedin.com/company/j3d-ai/",
  formEndpoint: "" as string,
};

// Minimal nav. The funnel terminates at HoC.
export const NAV = [
  { to: "/hoc", label: "House of Collaboration" },
  { to: "/estonian-leap", label: "Estonian Leap" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  Platforms: [
    { to: "/hoc", label: "House of Collaboration" },
    { to: "/estonian-leap", label: "Estonian Leap" },
  ],
  Company: [
    { to: "/approach", label: "Approach" },
    { to: "/contact", label: "Contact" },
  ],
  Legal: [
    { to: "/privacy", label: "Privacy" },
    { to: "/imprint", label: "Imprint" },
  ],
};
