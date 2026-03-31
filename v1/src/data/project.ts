import projectImgSample from "../assets/project-img-sample.png";

export type ProjectStatus = "Live" | "In Progress" | "Planned";

export interface ProjectItem {
	id: string;
	title: string;
	description: string;
	details: string;
	stack: string[];
	status: ProjectStatus;
	imageSrc: string;
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
		status: "In Progress",
		imageSrc: projectImgSample,
		repoUrl: "https://github.com/Crapm-dev/ECS",
		liveUrl: "",
	},
];
