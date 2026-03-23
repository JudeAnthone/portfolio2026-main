export type SkillCategoryKey =
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "devops-cloud";

export interface SkillCategory {
    key: SkillCategoryKey;
    title: string;
    items: string[];
}

export const skillsData: ReadonlyArray<SkillCategory> = [
    {
        key: "frontend",
        title: "Frontend",
        items: ["React", "TypeScript", "HTML", "CSS", "Tailwind", "Axios"],
    },
    {
        key: "backend",
        title: "Backend",
        items: ["Node.js", "TypeScript", "Express.js", "Java", "Python", "C++", "JavaScript"],
    },
    {
        key: "database",
        title: "Database",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
        key: "tools",
        title: "Tools",
        items: ["VS Code", "Git", "GitHub", "PyCharm"],
    },
    {
        key: "devops-cloud",
        title: "DevOps & Cloud",
        items: ["Docker", "CI/CD"],
    },
];