import React from "react";
import { SectionHeader } from "../layout/SectionContainer";

// CHANGE START: local starter data so section is complete now
const projectItems = [
    {
        title: "Portfolio V1",
        description:
            "A modern portfolio focused on section storytelling, clean architecture, and responsive UI.",
        stack: ["React", "TypeScript", "Tailwind"],
        status: "In Progress",
    },
    {
        title: "Task Manager",
        description:
            "A productivity app concept with clean UX, board workflow, and reusable component patterns.",
        stack: ["React", "Node.js", "PostgreSQL"],
        status: "Planned",
    },
];
// CHANGE END

const Projects = () => {
    return (
        <article aria-labelledby="projects-title" className="space-y-6 md:space-y-8">
            {/* CHANGE START: unified header pattern */}
            <SectionHeader
                id="projects-title"
                tag="/03 Projects"
                lines={["Featured", "Works."]}
                description="Selected work and builds that represent my current process and engineering style."
            />
            {/* CHANGE END */}

            <section aria-label="Featured projects" className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projectItems.map((project) => (
                    <article
                        key={project.title}
                        className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                            <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
                                {project.status}
                            </span>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
                            {project.stack.map((item) => (
                                <li
                                    key={`${project.title}-${item}`}
                                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        </article>
    );
};

export default Projects;
