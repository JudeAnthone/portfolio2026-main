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
	tagline: "About Me",
	intro: "Computer Science student focused on building modern, scalable full-stack products.",
	description:
		"I enjoy turning ideas into clean user experiences using React + TypeScript on the frontend and Node.js + PostgreSQL on the backend. I care about performance, accessibility, and maintainable architecture.",
	location: "Philippines",
	availability: "Open for internships and freelance opportunities",
	stackHighlights: [
		"React + TypeScript",
		"Node + Express",
		"PostgreSQL",
		"UI/UX-minded build process",
	],
	metrics: [
		{ label: "Primary Focus", value: "Full-Stack Web Development" },
		{ label: "Frontend", value: "React + Tailwind + UI Libraries" },
		{ label: "Backend", value: "Node.js, Express, PostgreSQL" },
	],
};
