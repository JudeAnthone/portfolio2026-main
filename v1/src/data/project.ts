export type ProjectStatus = "Live" | "In Progress" | "Planned";

export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    stack: string[];
    status: ProjectStatus;
    liveUrl?: string;
    repoUrl?: string;
}

export const projectsData: ReadonlyArray<ProjectItem> = [
    // CHANGE START: starter project data for Projects section
    {
        id: "portfolio-v1",
        title: "Portfolio V1",
        description:
            "Personal portfolio focused on modern UI, section-driven storytelling, and clean component architecture.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        status: "In Progress",
        liveUrl: "",
        repoUrl: "",
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        description:
            "A productivity app with board-style workflows, reusable UI components, and clean state handling.",
        stack: ["React", "Node.js", "PostgreSQL"],
        status: "Planned",
    },
    {
        id: "inventory-dashboard",
        title: "Inventory Dashboard",
        description:
            "Dashboard concept for inventory tracking, analytics summary cards, and role-based views.",
        stack: ["TypeScript", "Express", "PostgreSQL"],
        status: "Planned",
    },
    // CHANGE END
];