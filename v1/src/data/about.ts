export interface AboutMetric {
    label: string;
    value: string;
}

export interface AboutData {
    tagline: string;
    intro: string;
    description: string;
    location: string;
    availability: string;
    stackHighlights: string[];
    metrics: AboutMetric[];
}

export const aboutData: AboutData = {
    tagline: "/ 01 About Me",
    intro: "Computer Science student focused on building modern, scalable, and user-centered web products.",
    description:
        "I build clean digital experiences with React + TypeScript on the frontend and Node.js + PostgreSQL on the backend. My approach combines maintainable code, solid UX principles, and practical delivery for real-world use.",
    location: "Philippines",
    availability: "Open for internships, freelance work, and collaboration opportunities",
    stackHighlights: [
        "React + TypeScript",
        "Tailwind CSS + UI Libraries",
        "Node.js + Express",
        "PostgreSQL + REST APIs",
        "Performance + Accessibility Focus",
    ],
    metrics: [
        { label: "Primary Focus", value: "Full-Stack Web Development" },
        { label: "Current Goal", value: "Production-ready portfolio and client projects" },
        { label: "Strength", value: "Frontend architecture with clean UX execution" },
    ],
};
