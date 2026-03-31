import { motion, type Variants } from "motion/react";
import { projectsData } from "../../data/project";
import ProjectCard from "../ui/ProjectCard";
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
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const Projects = () => {
	if (!projectsData.length) {
		return (
			<article aria-labelledby="projects-title" className="space-y-3">
				<h2
					id="projects-title"
					className="text-2xl font-semibold text-foreground md:text-4xl"
				>
					Projects
				</h2>
				<p className="text-sm text-muted">No projects available yet.</p>
			</article>
		);
	}

	return (
		<motion.article
			aria-labelledby="projects-title"
			className="space-y-6 md:space-y-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.16 }}
		>
			<motion.div variants={itemVariants}>
				<SectionHeader
					id="projects-title"
					tag="/02 Projects"
					lines={["Featured", "Works."]}
					description="Selected builds that represent my current engineering and product approach."
				/>
			</motion.div>

			<motion.section
				variants={itemVariants}
				aria-label="Featured projects"
				className="grid grid-cols-1 gap-4"
			>
				<ProjectCard project={projectsData[0]} />
			</motion.section>
		</motion.article>
	);
};

export default Projects;
