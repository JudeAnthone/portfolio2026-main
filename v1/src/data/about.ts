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
	intro: "3rd Year Computer Science student focused on full-stack development and building practical, real-world applications.",
	description:
		"I build full-stack web applications using React, TypeScript, Node.js, and PostgreSQL, focusing on clean UI and structured backend systems. I’m expanding into DevOps (Docker, CI/CD) and exploring AI/ML to integrate data-driven features, with a strong interest in SaaS and dashboard-driven applications.",
	location: "Philippines",
	availability: "Open for internships, freelance projects, and collaboration opportunities",
	stackHighlights: [
		"React + TypeScript",
		"Tailwind CSS + Responsive UI",
		"Node.js + Express",
		"PostgreSQL + REST APIs",
		"Docker + CI/CD (Learning)",
		"Machine Learning & AI (Fundamentals)",
	],
	metrics: [
		{
			label: "Primary Focus",
			value: "Full-Stack Web Development, Data Science, and Data Analytics",
		},
		{
			label: "Current Goal",
			value: "Building production-ready and scalable projects",
		},
		{
			label: "Interests",
			value: "SaaS Platforms, Dashboard Systems, and Data-Driven Solutions",
		},
	],
};
