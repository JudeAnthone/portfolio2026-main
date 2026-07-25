import projectecs1 from "../assets/ecs1.png";
import projectecs2 from "../assets/ecs2.png";
import projectecs3 from "../assets/ecs3.png";
import projectecs4 from "../assets/ecs4.png";
import projectecs5 from "../assets/ecs5.png";
import projectecs6 from "../assets/ecs6.png";
import projectecs7 from "../assets/ecs7.png";
import projectecs8 from "../assets/ecs8.png";
import projectecs9 from "../assets/ecs9.png";

export type ProjectStatus = "Live" | "In Progress" | "Planned" | "Done";

export interface ProjectItem {
	id: string;
	title: string;
	description: string;
	details: string;
	stack: string[];
	status: ProjectStatus;
	imageSrcs: string[];
	repoUrl: string;
	liveUrl?: string;
}

// add deets here
export const projectsData: ReadonlyArray<ProjectItem> = [
	{
		id: "enhanced-eecs",
		title: "EARIST Extension Services System",
		description:
			"A web-based system for managing extension services, streamlining requests, tracking activities, and improving coordination between stakeholders.",
		details:
			"Developed a full-stack system designed to digitize and manage EARIST’s extension service operations. The platform enables submission and tracking of service requests, organizes project activities, and provides a structured interface for both administrators and users. Built with a focus on clean UI, responsive design, and scalable architecture to support real-world institutional workflows.",
		stack: ["React", "NextJs", "TypeScript", "Tailwind CSS", "Go Lang", "PostgreSQL"],
		status: "Done",
		imageSrcs: [projectecs1, projectecs2, projectecs3, projectecs4, projectecs5, projectecs6, projectecs7, projectecs8, projectecs9],
		repoUrl: "https://github.com/Crapm-dev/ECS",
		liveUrl: "",
	},
	{
		id: "eacon",
		title: "EARIST CONNECT (EACON):  Smart Blogging and Media Sharing Platform",
		description: "A modern platform for seamless blogging and media sharing within the EARIST community.",
		details: "EACON is a feature-rich blogging and media sharing platform designed to foster engagement and communication among students, faculty, and staff at EARIST. It offers a user-friendly interface for creating and managing posts, uploading media content, and interacting with the community through comments and likes.",
		stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Docker"],
		status: "Done",
		imageSrcs: [],
		repoUrl: "https://github.com/Crapm-dev/ECS",
		liveUrl: "",
	},
	{
		id: "brewcrafter",
		title: "BrewCrafter: Your Drink, Your Rules. A Smart Cafe System with Custom Drink Builder and Sales Analytics",
		description: "A smart cafe system that allows customers to create custom drinks and provides sales analytics for management.",
		details: "BrewCrafter is a comprehensive cafe management system that combines a user-friendly interface for custom drink creation with robust sales analytics. It enables customers to design their perfect beverage while providing detailed insights into sales performance and customer preferences.",
		stack: ["React", "Javascript", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Material UI", "Chart.js"],
		status: "Done",
		imageSrcs: [],
		repoUrl: "https://github.com/Crapm-dev/ECS",
		liveUrl: "",
	},
	{
		id: "lever",
		title: "Lever: Seamless Digital Video Codec-Format Converter and Identifier Suite",
		description: "A comprehensive solution for converting and identifying digital video codecs and formats.",
		details: "Lever is a powerful tool designed to streamline the process of converting and identifying digital video codecs and formats. It offers a user-friendly interface and robust functionality to meet the needs of content creators and distributors.",
		stack: ["React", "Electron.js", "TypeScript",  "Node.js", "Express.js", "Tailwind CSS", "PostgreSQL", "Docker"],
		status: "Done",
		imageSrcs: [],
		repoUrl: "https://github.com/Crapm-dev/ECS",
		liveUrl: "",
	},
	{
		id: "bigblackcompiler",
		title: "BBC: Big Black Compiler - A Custom Programming Language Compiler with Filipino/Colloquial Keywords and Windows Forms IDE",
		description: "A custom programming language compiler built with VB.NET that features unique Filipino/colloquial keywords and a complete Windows Forms IDE. This project demonstrates compiler design principles including lexical analysis, parsing, and code execution.",
		details: "The BIG BLACK COMPILER is a custom programming language compiler built with VB.NET. It features unique Filipino/colloquial keywords and a complete Windows Forms IDE. This project demonstrates compiler design principles including lexical analysis, parsing, and code execution.",
		stack: ["VB.NET", "Windows Forms"],
		status: "Done",
		imageSrcs: [],
		repoUrl: "https://github.com/Crapm-dev/ECS",
		liveUrl: "",
	},
	{
		id: "portfolio-website",
		title: "My Portfolio Website",
		description: "A modern portfolio website showcasing my projects and skills.",
		details: "This is my personal portfolio website, built with React and TypeScript. It features a responsive design, smooth animations, and a clean layout to effectively showcase my work.",
		stack: ["React", "TypeScript", "Tailwind CSS"],
		status: "Done",
		imageSrcs: [],
		repoUrl: "https://github.com/Crapm-dev/ECS",
		liveUrl: "",
	},
];
