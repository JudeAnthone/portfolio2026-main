export interface ExperienceResponsibility {
	text: string;
}

export interface ExperienceEntry {
	company: string;
	role: string;
	location: string;
	dateRange: string;
	logoSrc: string;
	responsibilities: ReadonlyArray<ExperienceResponsibility>;
}

export interface ExperienceData {
	current: ExperienceEntry | null;
	past: ReadonlyArray<ExperienceEntry>;
}

export const experienceData: ExperienceData = {
	current: {
		company: "FlyRank AI",
		role: "Backend AI Engineering Intern",
		location: "Remote",
		dateRange: "June 2026 - Present",
		logoSrc: "/logo/flyrank_logo.jpg",
		responsibilities: [
			{
				text: "Developed backend applications using TypeScript, Node.js, and Express.js, building RESTful APIs, CRUD operations, and modular backend services.",
			},
			{
				text: "Integrated PostgreSQL into Dockerized backend applications using a repository-based architecture, enabling persistent and scalable data storage.",
			},
			{
				text: "Implemented secure authentication using Supabase Auth, JWT, and middleware, protecting API endpoints and documenting them with Swagger/OpenAPI.",
			},
			{
				text: "Built backend data pipelines using web scraping and asynchronous background jobs, preparing structured data for AI-driven applications.",
			},
		],
	},
	past: [],
};
