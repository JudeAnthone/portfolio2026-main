export type SkillCategoryKey = "frontend" | "backend" | "database" | "tools" | "devops-cloud";

export interface SkillCategory {
	key: SkillCategoryKey;
	title: string;
	items: string[];
}

export const skillsData: ReadonlyArray<SkillCategory> = [
	{
		key: "frontend",
		title: "Frontend",
		items: [
			"React",
			"JavaScript",
			"TypeScript",
			"HTML",
			"CSS",
			"Tailwind",
			"Axios",
			"Vite",
			"Styled Components",
		],
	},
	{
		key: "backend",
		title: "Backend",
		items: [
			"Node.js",
			"TypeScript",
			"Express.js",
			"Java",
			"Python",
			"C++",
			"JavaScript",
			"JWT",
			"OAUTH",
		],
	},
	{
		key: "database",
		title: "Database",
		items: ["PostgreSQL", "MySQL", "MongoDB"],
	},
	{
		key: "tools",
		title: "Tools & DevOps",
		items: [
			"Git",
			"GitHub",
			"VS Code",
			"Visual Studio",
			"PyCharm",
			"Jupyter Notebook",
			"Docker",
			"CI/CD",
		],
	},
];
