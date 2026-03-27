import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { motion, type Variants } from "framer-motion";
import { aboutData } from "../../data/about";
import { SectionHeader } from "../layout/SectionContainer";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const About = () => {
    if (!aboutData) {
        return (
            <article aria-labelledby="about-title" className="space-y-3">
                <h2 id="about-title" className="text-2xl font-semibold text-foreground md:text-4xl">
                    About
                </h2>
                <p className="text-sm text-muted">About information is currently unavailable.</p>
            </article>
        );
    }

    const hasHighlights = aboutData.stackHighlights.length > 0;

    return (
        <motion.article
            aria-labelledby="about-title"
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
        >
            <motion.div variants={itemVariants}>
                <SectionHeader
                    id="about-title"
                    tag="/01 Intro"
                    lines={["Crafting", "Digital", "Experiences."]}
                    description={aboutData.intro}
                />
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
                <motion.section
                    variants={itemVariants}
                    className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface/70 backdrop-blur-sm p-4 md:p-6"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/20 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-16 bottom-0 h-36 w-36 rounded-full bg-night-gradient opacity-30 blur-2xl"
                    />
					
                    <div className="relative space-y-5">
                        <p className="text-sm leading-relaxed text-muted md:text-base">
                            {aboutData.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted md:text-sm">
                                <LocationOnOutlinedIcon className="text-base text-foreground" />
                                <span>
                                    <span className="text-foreground">Location:</span> {aboutData.location}
                                </span>
                            </span>	

                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted md:text-sm">
                                <WorkOutlineRoundedIcon className="text-base text-foreground" />
                                <span>
                                    <span className="text-foreground">Status:</span> {aboutData.availability}
                                </span>
                            </span>
                        </div>

                        {hasHighlights ? (
                            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label="Technology highlights">
                                {aboutData.stackHighlights.map((item, index) => (
                                    <motion.li
                                        key={item}
                                        variants={itemVariants}
                                        whileHover={{ y: -2, scale: 1.01 }}
                                        className="rounded-xl border border-border bg-surface-2 px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-surface"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            {index % 2 === 0 ? (
                                                <AutoAwesomeRoundedIcon className="text-base text-foreground/80" />
                                            ) : (
                                                <BoltRoundedIcon className="text-base text-foreground/80" />
                                            )}
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        ) : null}

                        <div className="flex flex-wrap gap-2 pt-1">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-medium text-foreground hover:bg-surface md:text-sm"
                            >
                                View Projects
                                <ArrowOutwardRoundedIcon className="text-base" />
                            </a>

                            <a
                                href="#socials"
                                className="inline-flex items-center gap-1 rounded-lg border border-border bg-night-gradient px-3 py-2 text-xs font-medium text-foreground md:text-sm"
                            >
                                Let&apos;s Connect
                                <ArrowOutwardRoundedIcon className="text-base" />
                            </a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.article>
    );
};

export default About;
