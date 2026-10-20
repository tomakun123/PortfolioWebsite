// src/data/profile.js
// Everything shown in the About hero and Contact card.

export const PROFILE = {
    name: "Thomas Motais De Narbonne",
    eyebrow: "Software Engineer · Founder of Ancad",
    school: "Computer Science @ NYU Tandon School of Engineering · Sep 2024 - Dec 2027",
    degree: "Minors in Mathematics & Quantum Technology",
    photo: "/ProfilePicture.png",
    about:
        "I'm a Computer Science student at NYU Tandon who builds AI-powered products and the automation behind them. I founded Ancad, an AI networking platform for students, and I've shipped software as an intern at Equal Experts and GameOn Scheduler. I like systems that run unattended in production: reliable pipelines, clean interfaces, and code that's tested end-to-end. I'm fluent in English, French and Japanese.",
    // Logo tiles under About Me. `logo` is a file in public/logos/;
    // GameOn Scheduler has no logo file, so it renders a wordmark instead.
    experience: [
        { company: "Equal Experts", role: "Software Engineer Intern", logo: "/logos/equal-experts.svg", to: "/work#equal-experts-swe" },
        { company: "GameOn Scheduler", role: "Software Developer Intern", wordmark: "gameon", to: "/work#gameon-scheduler-sde" },
        { company: "Ancad", role: "Founder & Developer", logo: "/logos/ancad.png", to: "/work#ancad" },
        { company: "Giorgio Armani", role: "IT Intern", logo: "/logos/armani.svg", to: "/work#giorgio-armani-it" },
    ],
};

export const CONTACT = {
    email: "tsm6956@nyu.edu",
    github: "https://github.com/tomakun123",
    linkedin: "https://www.linkedin.com/in/thomas-motais-de-narbonne/",
    resume: "/Thomas Motais De Narbonne Resume.pdf",
    resumeFileName: "Thomas_Motais_De_Narbonne_Resume.pdf",
};
