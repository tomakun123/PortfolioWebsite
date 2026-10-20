// src/data/skills.js
// Skills shown on the About page. Logos come from src/data/techIcons.js by
// name; a name without a logo there shows a letter tile instead.

export const SKILL_GROUPS = [
    {
        title: "Languages",
        skills: ["Python", "C++", "JavaScript", "TypeScript", "Java", "SQL (MySQL, PostgreSQL)"],
    },

    {
        title: "Frameworks & Cloud",
        skills: ["React", "Next.js", "Flask", "Azure", "Google Cloud Functions", "Supabase"],
    },

    {
        title: "Tools & AI",
        skills: [
            "Neo4j",
            "Git/GitHub",
            "Docker",
            "Linux",
            "PowerShell",
            "n8n",
            "Slack API",
            "Chrome Extensions API",
            "Jupyter",
            "Anthropic API",
        ],
    },
];

export const SPOKEN_LANGUAGES = [
    { code: "EN", name: "English", level: "Fluent" },
    { code: "FR", name: "French", level: "Fluent" },
    { code: "JA", name: "Japanese", level: "Fluent" },
];
