// src/data/projects.js
export const LINKS = [
  { label: "Resume", href: "" },
  { label: "GitHub", href: "https://github.com/tomakun123" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thomas-motais-de-narbonne/" },
];

// Set this once and reuse it everywhere
export const GITHUB_USERNAME = "tomakun123";

// Curated projects. Each project has two descriptions:
//   overview  - what it is, who uses it, and how it's used
//   technical - how it's built and how it works
// repo/owner are optional; owner defaults to GITHUB_USERNAME.
// links are extra links shown after the GitHub link: [{ label, href }]
export const PROJECTS = [

    {
        id: "Ancad",
        name: "Ancad — AI Networking Platform",
        tagline: "Founder & Developer. AI-assisted networking for students: find professionals, write personal outreach, land coffee chats.",
        status: "In Development",
        overview:
            "Ancad helps students network their way into internships. A student captures a contact, usually from LinkedIn with the Ancad Chrome extension. Ancad finds a verified email and the person's role and education history, Claude writes an email for that one person, and Ancad opens it as a pre-filled Gmail draft. The student always presses Send; Ancad never sends mail itself. ancad.org also hosts public internship pages, matched to each student's target roles, drawn from 9,000+ US listings.",
        technical:
            "Three codebases. The main app is Next.js 16 (React 19, TypeScript) on Railway, using Supabase for Postgres, Auth and row-level security, Apollo for contact enrichment, Claude Haiku 4.5 with one request per recipient so no two emails match, and Stripe for subscriptions and credit packs. A Manifest V3 Chrome extension (React + Vite) reads LinkedIn and Apollo profiles and authenticates with the user's Supabase session. A separate Node/TypeScript service at internships.ancad.org ingests listings every 6 hours from GitHub JSON feeds, 360+ ATS board APIs, JSON-LD and Playwright crawls into its own Supabase project, and serves them through a rate-limited /match API.",
        tags: ["AI", "Full Stack", "Web", "Startup", "Automation", "Data Pipeline"],
        stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Anthropic API", "Stripe", "Playwright", "Chrome Extensions API", "Docker", "Railway"],
        highlights: [
            "Listings database isolated in its own Supabase project, so 6-hourly bulk rewrites can never touch user accounts, contacts or billing",
            "Ingest pipeline normalizes, geo-tags, classifies into 30 roles, dedupes and unpublishes stale listings; nothing is deleted and a failed source is never swept",
            "Nothing is public by default: listings publish only after deterministic checks pass and a local Qwen 2.5 14B review approves them with at least 0.8 confidence, at no per-listing API cost",
            "Crawlers respect robots.txt and per-domain rate budgets",
            "All credit and billing accounting runs server-side in Postgres RPCs; the client never decides balances",
            "Google OAuth with sign-in scopes only; Gmail drafts open through compose URLs, so Ancad needs no send permission",
            "Published Chrome extension on the Chrome Web Store for capturing contacts from LinkedIn and Apollo",
            "Public internship pages server-rendered and indexed, with ISR revalidating every 15 minutes"
        ],
        links: [
            { label: "ancad.org", href: "https://ancad.org" },
            { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/ancad-prospect-capture/dmoabonppnnejlfhjphpjlcpjfjclkje" },
        ],
        featured: true,
        year: 2026,
    },

    {
        id: "n8nContentAutomation",
        repo: "InstagramContent",
        name: "Automated AI Content Generation & Publishing System",
        tagline: "Unattended AI pipeline that writes, renders and publishes short-form horror videos",
        overview:
            "A fully unattended content channel: the system writes horror stories, turns them into narrated, subtitled short-form videos, and publishes them to YouTube and Instagram with no manual editing or uploading. It has published 700+ videos with 100,000+ total views.",
        technical:
            "Self-hosted n8n orchestrates every run with cron scheduling, execution locking and conditional steps. A local Qwen 2.5 14B model writes the stories, text-to-speech narrates them, Whisper generates subtitles, and MoviePy + FFmpeg render the final video. A watchdog file trigger starts rendering when metadata lands, and finished videos publish through the OAuth-secured YouTube API. Splitting work across GPU and CPU cut pipeline runtime by 35%.",
        tags: ["AI", "Automation", "Content Pipeline", "Social Media"],
        stack: ["Python", "n8n", "Qwen 2.5 14B", "Whisper", "MoviePy", "FFmpeg", "APIs", "Cloudflare"],
        highlights: [
            "700+ videos published across YouTube and Instagram with 100,000+ total views, fully unattended",
            "End-to-end pipeline for AI story generation, TTS, subtitles, and video rendering",
            "Workflow orchestration via self-hosted n8n with cron scheduling, concurrency control and conditional execution",
            "Local LLM inference (Qwen 2.5 14B) integrated into production workflows via API",
            "Filesystem-based automation using watchdog to trigger rendering from metadata drops",
            "Automated publishing via OAuth-secured YouTube API with metadata reuse and notifications",
            "GPU + CPU rendering optimizations reduced pipeline runtime by 35%"
        ],
        featured: true,
        year: 2025,
    },

    {
        id: "AirTicketReservation",
        repo: "Air-Ticket-Reservation",
        owner: "evandong1976",
        name: "Air Ticket Reservation",
        tagline: "Air ticket reservation web app prototype (Next.js + TypeScript + Supabase/PostgreSQL)",
        overview:
            "A prototype web app for searching flights and booking air tickets, covering the flight search, results, and checkout flows a traveler goes through.",
        technical:
            "Built with the Next.js App Router in TypeScript, organized into reusable components, hooks, shared utilities and typed models. Reservation data persists in Supabase (PostgreSQL), client-side hooks handle data fetching, and environment-based configuration separates local development from deployment.",
        tags: ["Web", "Full Stack", "Prototype", "Database", "UI/UX"],
        stack: ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL"],
        highlights: [
            "Next.js App Router prototype for flight search + booking flows",
            "TypeScript-first codebase with shared types for safer UI/data handling",
            "Supabase-backed persistence layer (PostgreSQL) for core reservation data",
            "Clean component architecture for reusable UI (results, forms, checkout steps)",
            "Client-side data fetching/hooks pattern for responsive interactions",
            "Environment-based configuration for local dev vs deployment"
        ],
        featured: false,
        year: 2025,
    },

    {
        id: "CaffeinatedWin",
        repo: "caffeinated-windows",
        name: "Caffeinated Windows",
        tagline: "Windows tray utility to prevent sleep with configurable timers and installer support",
        overview:
            "A lightweight Windows tray utility that keeps your PC awake. One click blocks sleep, optionally keeps the display on, and can run on a 30, 60 or 120 minute timer or start automatically at login.",
        technical:
            "Written in Python using native WinAPI power-management calls to block sleep and restore the default behavior on exit. Timer presets and preferences persist between runs, and the app ships as a native Windows installer built with Inno Setup, with a minimal dependency footprint.",
        tags: ["Desktop App", "Systems", "Utilities"],
        stack: ["Python", "Inno Setup"],
        highlights: [
            "Lightweight Windows tray utility to block sleep + optional display keep-awake",
            "One-click enable/disable with clean exit restoring default system behavior",
            "Configurable timer presets (30/60/120 min) with persistent preference state",
            "Packaged as a native Windows installer with automated setup (Inno Setup)",
            "Minimal dependency footprint with native WinAPI power management hooks"
        ],
        featured: false,
        year: 2026,
    },

    {
        id: "YouTubeVideoTransformationRecs",
        repo: "Youtube-Video-Transformation-and-Recommendations-Algorithm",
        owner: "Manasee27",
        name: "Youtube Video Transformation and Recommendations Algorithm",
        tagline: "Long-form YouTube → blog + short-form reels with EDA-driven recommendations (Node/React + Python + GPT)",
        overview:
            "Turns long YouTube videos into blog articles and short-form reels, and recommends headlines, descriptions, hashtags and potential ad spots for brand collaborations based on what makes videos go viral.",
        technical:
            "A full-stack app with a React client and an Express server organized into controllers and routes. The YouTube Data API ingests videos and metadata, Python scripts handle processing and analysis, and exploratory data analysis on viral and retention patterns drives the GPT-generated recommendations.",
        tags: ["AI", "Automation", "Data Analysis", "Social Media", "Team Project"],
        stack: ["Python", "React", "Node.js", "APIs", "Full-Stack"],
        highlights: [
            "Transforms long YouTube videos into blog drafts + short-form reel concepts",
            "Full-stack architecture: client app + Express server with controllers/routes",
            "YouTube Data API integration for video ingestion/metadata (API-key driven setup)",
            "EDA on viral/retention patterns to guide content strategy and recommendations",
            "Python utilities/scripts for processing + analysis alongside the Node backend",
            "Generates headline/description/hashtag suggestions + explores AI ad-spot concepts"
        ],
        featured: false,
        year: 2023,
    },

    {
        id: "TextTranscriber",
        repo: "Text-Transcriber",
        name: "Text Transcriber",
        tagline: "Text extraction and word detection tool",
        overview:
            "A tool for extracting and transcribing text and detecting separated words, producing cleaner, structured output, with a small web interface for interactive use.",
        technical:
            "Python modules handle each stage: `WordDetector` finds words, `SeperatedWords` handles split words, and an auto-correct layer cleans up the result. A minimal Flask app wraps the pipeline for interactive use.",
        tags: ["Automation", "Utilities", "Text Processing"],
        stack: ["Python", "Flask"],
        highlights: [
            "Modular text extraction and detection scripts for structured processing",
            "Includes a `WordDetector` and auto-correction pipeline for cleaner output",
            "Contains a minimal Flask folder suggesting an interactive text web interface",
        ],
        featured: false,
        year: 2023,
    },

    {
        id: "PortfolioWebsite",
        repo: "PortfolioWebsite",
        name: "Portfolio Website",
        tagline: "Personal portfolio website for showcasing projects, experience, and technical focus (React + Vite)",
        overview:
            "This site: a recruiter-friendly portfolio that showcases my projects, work experience, resume and links in one place, and acts as a living record of what I'm building.",
        technical:
            "Built with React and Vite, styled with Tailwind CSS, with content kept as plain data files so updates rarely touch components. Project cards pull live repo metadata from the GitHub REST API, and the production build is a static bundle hosted on Hostinger.",
        tags: ["Web", "Frontend", "UI/UX"],
        stack: ["React", "Vite", "Tailwind CSS", "HTML"],
        highlights: [
            "Modern React + Vite setup optimized for fast iteration and deployment",
            "Component-driven layout for reusable sections (projects, skills, contact)",
            "Tailwind-based design system for consistent spacing and typography",
            "Content-first structure tailored for recruiter and internship review",
            "Acts as a living platform for showcasing projects, resume, and links"
        ],
        links: [
            { label: "Live site", href: "https://thomasmotaisportfolio.net" },
        ],
        featured: false,
        year: 2026,
    },

    {
        id: "Hackathon522",
        repo: "hackathon5.22",
        name: "Hackathon (Education theme)",
        tagline: "Hackathon-winning prototype built under time constraints (Python + UI)",
        overview:
            "An education-themed hackathon project, built and shipped within a tight timeframe, that won the competition with a runnable demo of its core idea.",
        technical:
            "A Python application with a clear split between application logic and a simple UI layer, plus supporting scripts used to iterate quickly and demonstrate the core functionality.",
        tags: ["Hackathon", "Prototype", "Team Project"],
        stack: ["Python"],
        highlights: [
            "Hackathon-winning Python prototype delivered under time constraints",
            "Clear separation between application logic and UI layer",
            "Rapid iteration with runnable demo and supporting scripts",
            "Demonstrates execution speed and problem-solving in a competitive setting"
        ],
        featured: false,
        year: 2022,
    },

];
