// src/data/projects.js

// Set this once and reuse it everywhere
export const GITHUB_USERNAME = "tomakun123";

// Category tabs on the Projects page. A project can be in several.
export const CATEGORIES = [
  { id: "ai", label: "AI & Automation" },
  { id: "web", label: "Full Stack & Web" },
  { id: "tools", label: "Apps & Tools" },
];

// Curated projects. Keep cards short:
//   tagline - one line
//   points  - max 3 bullets; wrap key numbers/tech in **double asterisks**
//   stack   - names from src/data/techIcons.js get a logo; others a letter tile
//   links   - [{ label, href }]; the first link is the big primary button.
//             If the project has a public `repo`, a GitHub button is added last.
//   repo/owner - optional GitHub repo; owner defaults to GITHUB_USERNAME
export const PROJECTS = [

    {
        id: "Ancad",
        name: "Ancad — AI Networking Platform",
        tagline: "AI networking platform for students",
        status: "In Development",
        categories: ["ai", "web"],
        points: [
            "Captures contacts from LinkedIn with a **published Chrome extension** and finds a verified email",
            "Claude drafts **one personal email per person**, opened as a Gmail draft the student sends",
            "Public internship pages fed by **9,000+ US listings**, refreshed every 6 hours",
        ],
        stack: ["Next.js", "TypeScript", "Supabase", "Anthropic API", "Stripe", "Playwright", "Chrome Extensions API", "Docker", "Railway"],
        links: [
            { label: "Visit ancad.org", href: "https://ancad.org" },
            { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/ancad-prospect-capture/dmoabonppnnejlfhjphpjlcpjfjclkje" },
        ],
        featured: true,
        year: 2026,
    },

    {
        id: "n8nContentAutomation",
        repo: "InstagramContent",
        name: "AI Content Generation & Publishing",
        tagline: "Unattended AI pipeline that writes, renders and publishes short-form videos",
        categories: ["ai"],
        points: [
            "**700+ videos** on YouTube and Instagram, **100,000+ views**, no manual editing",
            "Local **Qwen 2.5 14B** writes stories; TTS, Whisper and FFmpeg render each video",
            "Self-hosted **n8n** schedules runs; GPU + CPU rendering cut runtime **35%**",
        ],
        stack: ["Python", "n8n", "Qwen 2.5 14B", "Whisper", "MoviePy", "FFmpeg", "YouTube API", "Cloudflare"],
        featured: true,
        year: 2025,
    },

    {
        id: "AirTicketReservation",
        repo: "Air-Ticket-Reservation",
        owner: "evandong1976",
        name: "Air Ticket Reservation",
        tagline: "Flight search and booking web app prototype",
        categories: ["web"],
        points: [
            "Search flights, compare results and book through a full checkout flow",
            "**Next.js App Router** in TypeScript with shared typed models",
            "Reservations stored in **Supabase (PostgreSQL)**",
        ],
        stack: ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL"],
        featured: false,
        year: 2025,
    },

    {
        id: "CaffeinatedWin",
        repo: "caffeinated-windows",
        name: "Caffeinated Windows",
        tagline: "Windows tray app that keeps your PC awake",
        categories: ["tools"],
        points: [
            "One click blocks sleep, with an optional keep-display-on mode",
            "**30/60/120-minute timers** with saved preferences",
            "Native **WinAPI** calls, shipped as an **Inno Setup** installer",
        ],
        stack: ["Python", "Inno Setup"],
        featured: false,
        year: 2026,
    },

    {
        id: "YouTubeVideoTransformationRecs",
        repo: "Youtube-Video-Transformation-and-Recommendations-Algorithm",
        owner: "Manasee27",
        name: "YouTube Video Transformation & Recommendations",
        tagline: "Turns long YouTube videos into blog posts and short-form reels",
        categories: ["ai", "web"],
        points: [
            "Suggests **headlines, descriptions and hashtags** from what makes videos go viral",
            "**Exploratory data analysis** on retention drives the recommendations",
            "React client + **Express** API, with Python processing scripts",
        ],
        stack: ["Python", "React", "Node.js", "Express", "YouTube API", "OpenAI"],
        featured: false,
        year: 2023,
    },

    {
        id: "TextTranscriber",
        repo: "Text-Transcriber",
        name: "Text Transcriber",
        tagline: "Text extraction and word detection tool",
        categories: ["tools"],
        points: [
            "Extracts and transcribes text into clean, structured output",
            "**WordDetector** and split-word handling, then an **auto-correct** pass",
            "Small **Flask** web interface",
        ],
        stack: ["Python", "Flask"],
        featured: false,
        year: 2023,
    },

    {
        id: "PortfolioWebsite",
        repo: "PortfolioWebsite",
        name: "Portfolio Website",
        tagline: "This site: projects, experience and resume in one place",
        categories: ["web"],
        points: [
            "Three pages with **React Router**; content lives in plain data files",
            "Dark glass design in **Tailwind CSS** with live repo dates from the **GitHub API**",
            "Static build hosted on **Hostinger**",
        ],
        stack: ["React", "Vite", "Tailwind CSS", "React Router"],
        links: [
            { label: "Live site", href: "https://thomasmotaisportfolio.net" },
        ],
        featured: false,
        year: 2026,
    },

    {
        id: "Hackathon522",
        repo: "hackathon5.22",
        name: "Hackathon (Education)",
        tagline: "Hackathon-winning education app built against the clock",
        categories: ["tools"],
        points: [
            "**Won** an education-themed hackathon with a working demo",
            "Python app with logic split from a simple UI layer",
            "Built and iterated within the competition time limit",
        ],
        stack: ["Python"],
        featured: false,
        year: 2022,
    },

];
