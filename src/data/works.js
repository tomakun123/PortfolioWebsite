// src/data/works.js

export const WORKS = [
    {
        id: "equal-experts-swe",
        company: "Equal Experts",
        role: "Software Engineer Intern",
        location: "London, UK",
        date: "Aug 2026",
        highlights: [
            "Extended an email-only timesheet reminder system using Python, Google Cloud Functions, Java, and Vue, adding a Slack notification channel for client reminders.",
            "Resolved employee IDs to Slack accounts using Cypher and Neo4j, eliminating notification mismatches caused by duplicate or unmatched accounts.",
            "Built a TDD-driven admin tool using Python, Java, and Vue/TypeScript, enabling developers to trigger and verify test Slack notifications across the full stack.",
            "Developed unit and integration tests with structured error handling, validating recipient resolution, message delivery, and failure scenarios end-to-end.",
        ],
        stack: [
            "Python",
            "Java",
            "Vue",
            "TypeScript",
            "Google Cloud Functions",
            "Neo4j",
            "Cypher",
            "Slack API",
            "TDD",
        ],
    },

    {
        id: "gameon-scheduler-sde",
        company: "GameOn Scheduler",
        role: "Software Developer Intern",
        location: "Remote",
        date: "Jan 2026 – May 2026",
        highlights: [
            "Engineered AI-powered outbound calling agents with Vapi, migrating from Twilio to improve flexibility and reduce costs; automated product-demo scheduling across 5 facility verticals.",
            "Developed real-time conversation logic that adapted agent responses to client dialogue and triggered automated SMS confirmations and reminders.",
            "Built an automated Excel/CSV data-cleaning pipeline with configurable column selection and null-value handling, reducing manual contact-list preparation.",
        ],
        stack: [
            "Vapi",
            "Twilio",
            "Voice AI",
            "SMS Automation",
            "Python",
            "Excel/CSV",
        ],
    },

    {
        id: "giorgio-armani-it",
        company: "Giorgio Armani",
        role: "IT Intern",
        location: "New York, NY",
        date: "Jun 2025 – Jul 2025",
        highlights: [
            "Provisioned users and devices across the Americas using Active Directory, Azure, and Microsoft 365, managing role-based access, employee identifiers, and F3/E5 licensing for enterprise tools such as Outlook and Teams.",
            "Collaborated with cross-functional IT teams (networking, POS, RFID, infrastructure) to understand system dependencies and support workflows across retail operations.",
            "Analyzed and triaged IT support tickets, identifying common issues, proposing solutions, and assisting with account access, device setup, and configuration problems.",
            "Built and standardized end-to-end device provisioning workflows for laptops, iPads, RFID scanners, printers, and networking equipment, ensuring consistency and readiness for deployment.",
            "Imaged and configured laptops from scratch using scripted USB workflows and PDQ Deploy to wipe data, remove bloatware, and push required applications at scale.",
            "Set up retail store infrastructure from the ground up for 9 Macy’s locations, including laptops, iPads, Zebra and HP printers, Wi-Fi hubs, RFID scanners, and associated peripherals.",
            "Designed and implemented a JotForm-based tracking system to replace email-based gift card requests, improving request visibility, reducing errors, and preventing lost information.",
        ],
        stack: [
            "Active Directory",
            "Azure",
            "Microsoft 365",
            "PDQ Deploy",
            "Zscaler",
            "Cisco",
            "JotForm",
            "Powershell",
        ],
    },

    {
        id: "aicamp",
        company: "AI Camp",
        role: "Software Engineering Intern (Guided Program)",
        location: "Remote",
        date: "Sep 2023 – Dec 2023",
        highlights: [
            "Built an AI-assisted content transformation pipeline to convert long-form YouTube videos into short-form clips and article drafts.",
            "Analyzed YouTube retention and engagement data using exploratory data analysis to identify viral patterns and inform content recommendations.",
            "Developed a speech-to-text transcription pipeline using OpenAI Whisper, including dataset preparation and batch processing for long videos.",
            "Integrated transcription outputs into downstream NLP workflows for automated headline, description, and hashtag generation.",
            "Collaborated in a guided engineering environment to design, iterate, and demonstrate a working end-to-end prototype."
        ],
        stack: [
            "Python",
            "OpenAI Whisper",
            "Exploratory Data Analysis (EDA)",
            "Batch Processing",
            "NLP Pipelines",
            "React",
            "HTML",
        ],
        link: "https://github.com/Manasee27/Youtube-Video-Transformation-and-Recommendations-Algorithm",
    },

    {
        id: "flemings-host",
        company: "Fleming’s Prime Steakhouse",
        role: "Host",
        location: "Edgewater, NJ",
        date: "Jun 2024 – Sep 2025",
        highlights: [
            "Managed guest flow, seating logistics, and waitlists during both low-volume weekdays and high-volume weekend and holiday service (200–400+ guests/night).",
            "Coordinated in real time with 2–3 other hosts to maintain smooth operations during peak service periods without reservation prioritization.",
            "Handled first-come, first-served seating policies while tracking arrivals, walk-ins, and wait times to ensure fairness and efficiency.",
            "Served as the primary point of contact for in-person guests and phone inquiries, including reservations, takeout coordination, and general service questions.",
            "Trained and onboarded a new host, explaining workflows, guest communication standards, and high-pressure service expectations.",
            "Supported front-of-house operations beyond seating, including coat check management and coordinating prepared orders for delivery services."
        ],
        stack: [
            "Operations & Logistics",
            "Customer Coordination",
            "Team Collaboration",
            "High-Pressure Environments",
            "Communication"
        ]
    }

];
