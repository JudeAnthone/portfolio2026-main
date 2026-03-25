import type { ReactNode } from "react";
import WebIcon from "@mui/icons-material/Web";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import HandymanIcon from "@mui/icons-material/Handyman";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { skillsData, type SkillCategoryKey } from "../../data/skills";
import { SectionHeader } from "../layout/SectionContainer";

interface IconMap {
    [key: string]: ReactNode;
}

const categoryIcons: IconMap = {
    frontend: <WebIcon fontSize="inherit" />,
    backend: <DnsIcon fontSize="inherit" />,
    database: <StorageIcon fontSize="inherit" />,
    tools: <HandymanIcon fontSize="inherit" />,
    "devops-cloud": <CloudQueueIcon fontSize="inherit" />,
};

const getCategoryIcon = (key: SkillCategoryKey): ReactNode => {
    return categoryIcons[key] ?? <CheckCircleRoundedIcon fontSize="inherit" />;
};

const Skills = () => {
    if (!skillsData.length) {
        return (
            <article aria-labelledby="skills-title" className="space-y-3">
                <h2 id="skills-title" className="text-2xl font-semibold text-foreground md:text-4xl">
                    Skills
                </h2>
                <p className="text-sm text-muted">No skills available yet.</p>
            </article>
        );
    }

    return (
        <article aria-labelledby="skills-title" className="space-y-6 md:space-y-8">
            {/* CHANGE START: unified header pattern */}
            <SectionHeader
                id="skills-title"
                tag="/02 Skills"
                lines={["Tools", "Of The Trade."]}
                description="Technologies I use to build, ship, and maintain modern web products."
            />
            {/* CHANGE END */}

            <section aria-label="Skill categories" className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                {skillsData.map((category) => (
                    <div
                        key={category.key}
                        className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
                    >
                        <div className="mb-3 flex items-center gap-2">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-lg text-foreground">
                                {getCategoryIcon(category.key)}
                            </span>
                            <h3 className="text-base font-semibold text-foreground md:text-lg">
                                {category.title}
                            </h3>
                        </div>

                        <ul className="flex flex-wrap gap-2" aria-label={`${category.title} technologies`}>
                            {category.items.map((item) => (
                                <li
                                    key={`${category.key}-${item}`}
                                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground md:text-sm"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </article>
    );
};

export default Skills;
