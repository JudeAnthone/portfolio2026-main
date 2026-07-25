export interface AboutMetric {
	label: string;
	value: string;
}

export interface AboutData {
	intro: string;
	description: string;
	location: string;
	availability: string;
	stackHighlights: string[];
	metrics: AboutMetric[];
}

export const aboutData: AboutData = {
	intro: "4th Year Computer Science student and Fullstack Software Developer specializing in building practical, real-world applications with modern web technologies.",
	description:
		"I build full-stack web applications using React, TypeScript, Node.js, and PostgreSQL, focusing on clean UI and structured backend systems. As a Cloud Engineer, I work with Docker, CI/CD pipelines, and cloud infrastructure to deploy scalable applications. My work in AI Automation integrates data-driven features and intelligent workflows, with a strong interest in SaaS and dashboard-driven applications.",
	location: "Philippines",
	availability: "Open for internships, freelance projects, and collaboration opportunities",
	stackHighlights: [
		"React + TypeScript",
		"Tailwind CSS + Responsive UI",
		"Node.js + Express",
		"PostgreSQL + REST APIs",
		"Docker + CI/CD + Cloud Engineering",
		"AI Automation & Machine Learning",
	],
	metrics: [
		{
			label: "Primary Focus",
			value: "Fullstack Software Development & Cloud Engineering",
		},
		{
			label: "Specializations",
			value: "AI Automation, Scalable Web Systems & Data-Driven Solutions",
		},
	],
};
