// src/data/projects.js
export const LINKS = [
  { label: "Resume", href: "" },
  { label: "GitHub", href: "https://github.com/tomakun123" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thomas-motais-de-narbonne/" },
];

// Set this once and reuse it everywhere
export const GITHUB_USERNAME = "tomakun123";

// Curated projects (your copy + tags + featured). Keep repo name separately.
export const PROJECTS = [
  {
    id: "PhishingScanner",
    repo: "PhishingScanner", // GitHub repo name
    name: "PhishingScanner",
    tagline: "Email threat analysis toolkit + local mail lab",
    description:
      "Analyze .eml files, parse headers/MIME, detect suspicious links, and output structured JSON reports.",
    tags: ["Cybersecurity", "Systems"],
    stack: ["Python"],
    highlights: [
    "Parses RFC 5322 headers + MIME parts to extract HTML/text/attachments",
    "Flags suspicious signals (spoofed From/Reply-To, mismatched domains, risky URLs)",
    "Exports a structured JSON report for automation and dashboards",
    ],
    links: { demo: "" }, // GitHub URL will be filled automatically
    featured: true,
    year: 2026,
  },
  {
    id: "caffeinated-windows",
    repo: "caffeinated-windows",
    name: "Caffeinated for Windows",
    tagline: "Full-stack platform prototype",
    description:
      "Backend + data modeling + APIs. Built with reliability and clear workflows in mind.",
    tags: ["...", "..."],
    stack: ["Python", "Inno Setup"],
    highlights: [
    "Parses RFC 5322 headers + MIME parts to extract HTML/text/attachments",
    "Flags suspicious signals (spoofed From/Reply-To, mismatched domains, risky URLs)",
    "Exports a structured JSON report for automation and dashboards",
    ],
    links: { demo: "" },
    featured: true,
    year: 2026,
  },
];
