import { motion } from "motion/react";
import { projectsData } from "../../data/project";
import ProjectCard from "../ui/ProjectCard";
import { SectionHeader } from "../layout/SectionContainer";
import { containerVariants, itemVariants } from "../../lib/animations";

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
					tag="/03 Projects"
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
