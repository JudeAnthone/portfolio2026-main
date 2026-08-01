export interface AboutMetric {
	label: string;
	value: string;
}

export interface AboutData {
	intro: string;
	description: string;
	stackHighlights: string[];
	metrics: AboutMetric[];
}

export const aboutData: AboutData = {
	intro: "4th Year Computer Science student and Fullstack Software Developer specializing in building practical, real-world applications with modern web technologies.",
	description:
		"I build full-stack web applications with a focus on clean UI, structured backends, and cloud-native infrastructure.",
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
