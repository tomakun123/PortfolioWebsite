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
        id: "n8nContentAutomation",
        repo: "InstagramContent",
        name: "n8n Content Automation",
        tagline: "Automation pipeline for horror short-form content",
        description:
        "End-to-end scripts for generating horror story content, producing audio via TTS, stitching/processing video segments (FFmpeg), and supporting posting workflows.",
        tags: ["AI", "Automation", "Content Pipeline", "Social Media"],
        stack: ["Python", "FFmpeg", "APIs", "Cloudflare"],
        highlights: [
            "End-to-end automated pipeline for AI story generation, TTS, subtitles, and video rendering",
            "Workflow orchestration via self-hosted n8n with cron scheduling and execution locking",
            "Local LLM inference (Meta LLaMA 3.1) integrated into production workflows via API",
            "Audio + video processing pipeline (TTS, transcription, music overlay, final render)",
            "Filesystem-based automation using watchdog to trigger rendering from metadata drops",
            "Automated publishing via OAuth-secured YouTube API with metadata reuse and notifications",
            "Performance-optimized rendering leveraging both GPU and CPU to reduce processing time"
        ],
        links: "https://github.com/tomakun123/InstagramContent",
        featured: true,
        year: 2025,
    },

    {
        id: "AirTicketReservation",
        repo: "Air-Ticket-Reservation",
        name: "Air Ticket Reservation",
        tagline: "Air ticket reservation web app prototype (Next.js + TypeScript + Supabase/PostgreSQL)",
        description:
            "A Next.js (App Router) TypeScript web app scaffold for an air ticket reservation project, organized with reusable components, hooks, shared utilities, and typed models.",
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
        links: "https://github.com/evandong1976/Air-Ticket-Reservation",
        featured: false,
        year: 2025,
    },

    {
        id: "CaffeinatedWin",
        repo: "caffeinated-windows",
        name: "Caffeinated Windows",
        tagline: "Windows tray utility to prevent sleep with configurable timers and installer support",
        description:
        "Lightweight system-tray utility to keep Windows awake, with options for display-on, timer mode, and run-at-startup—packaged with an Inno Setup installer.",
        tags: ["Desktop App", "Systems", "Utilities"],
        stack: ["Python", "Inno Setup"],
        highlights: [
            "Lightweight Windows tray utility to block sleep + optional display keep-awake",
            "One-click enable/disable with clean exit restoring default system behavior",
            "Configurable timer presets (30/60/120 min) with persistent preference state",
            "Packaged as a native Windows installer with automated setup (Inno Setup)",
            "Minimal dependency footprint with native WinAPI power management hooks"
        ],
        links: "https://github.com/tomakun123/caffeinated-windows",
        featured: false,
        year: 2026,
    },

    {
        id: "YouTubeVideoTransformationRecs",
        repo: "Youtube-Video-Transformation-and-Recommendations-Algorithm",
        name: "Youtube Video Transformation and Recommendations Algorithm",
        tagline: "Long-form YouTube → blog + short-form reels with EDA-driven recommendations (Node/React + Python + GPT)",
        description:
            "Pipeline and algorithm work to turn long YouTube videos into blog articles and short reels, plus use exploratory analysis on viral video metrics to generate headlines, descriptions, hashtags, and potential ad spots for brand collaborations.",
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
        links: "https://github.com/Manasee27/Youtube-Video-Transformation-and-Recommendations-Algorithm/tree/main",
        featured: false,
        year: 2023,
    },

    {
        id: "TextTranscriber",
        repo: "Text-Transcriber",
        name: "Text Transcriber",
        tagline: "Text extraction and word detection tool",
        description:
            "Tools and utilities for extracting/transcribing text and detecting separated words, including modules like `WordDetector`, `SeperatedWords`, and an auto-correct layer, with a Flask component for interactive use.",
        tags: ["Automation", "Utilities", "Text Processing"],
        stack: ["Python", "Flask"],
        highlights: [
            "Modular text extraction and detection scripts for structured processing",
            "Includes a `WordDetector` and auto-correction pipeline for cleaner output",
            "Contains a minimal Flask folder suggesting an interactive text web interface",
        ],
        links: "https://github.com/tomakun123/Text-Transcriber",
        featured: false,
        year: 2023,
    },

    {
        id: "PortfolioWebsite",
        repo: "PortfolioWebsite",
        name: "Portfolio Website",
        tagline: "Personal portfolio website for showcasing projects, experience, and technical focus (React + Vite)",
        description:
        "React + Vite based personal portfolio website with a clean, component-driven layout, designed to showcase projects, resume, and technical experience in a recruiter-friendly format.",
        tags: ["Web", "Frontend", "UI/UX"],
        stack: ["React", "Vite", "Tailwind CSS", "HTML"],
        highlights: [
            "Modern React + Vite setup optimized for fast iteration and deployment",
            "Component-driven layout for reusable sections (projects, skills, contact)",
            "Tailwind-based design system for consistent spacing and typography",
            "Content-first structure tailored for recruiter and internship review",
            "Acts as a living platform for showcasing projects, resume, and links"
        ],
        links: "https://github.com/tomakun123/PortfolioWebsite",
        featured: false,
        year: 2026,
    },

    {
        id: "Hackathon522",
        repo: "hackathon5.22",
        name: "Hackathon (Education theme)",
        tagline: "Hackathon-winning prototype built under time constraints (Python + UI)",
        description:
        "Hackathon project developed and shipped within a tight timeframe, featuring a Python application with a simple UI layer and supporting scripts to demonstrate core functionality.",
        tags: ["Hackathon", "Prototype", "Team Project"],
        stack: ["Python"],
        highlights: [
            "Hackathon-winning Python prototype delivered under time constraints",
            "Clear separation between application logic and UI layer",
            "Rapid iteration with runnable demo and supporting scripts",
            "Demonstrates execution speed and problem-solving in a competitive setting"
        ],
        links: "https://github.com/tomakun123/hackathon5.22",
        featured: false,
        year: 2022,
    },

];
