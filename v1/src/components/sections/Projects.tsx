import { useEffect, useState } from "react";
import { motion } from "motion/react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { projectsData } from "../../data/project";
import ProjectCard from "../ui/ProjectCard";
import { SectionHeader } from "../layout/SectionContainer";
import { containerVariants, itemVariants } from "../../lib/animations";

const CARD_GAP = 16;

const Projects = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [slidesPerView, setSlidesPerView] = useState(1);
	const [cardWidth, setCardWidth] = useState(320);

	const totalSlides = projectsData.length;
	const maxSlide = Math.max(totalSlides - slidesPerView, 0);
	const pageCount = totalSlides > 0 ? maxSlide + 1 : 0;

	useEffect(() => {
		const updateLayout = () => {
			const w = window.innerWidth;

			let nextSlidesPerView = 1;
			let nextCardWidth = 380;

			if (w >= 768) {
				nextSlidesPerView = 2;
				nextCardWidth = 340;
			} else {
				nextSlidesPerView = 1;
				nextCardWidth = Math.min(w - 48, 380);
			}

			setActiveSlide((prev) =>
				Math.min(prev, Math.max(projectsData.length - nextSlidesPerView, 0)),
			);
			setSlidesPerView(nextSlidesPerView);
			setCardWidth(nextCardWidth);
		};

		updateLayout();
		window.addEventListener("resize", updateLayout);
		return () => window.removeEventListener("resize", updateLayout);
	}, []);

	const handlePreviousSlide = () => {
		setActiveSlide((prev) => Math.max(prev - 1, 0));
	};

	const handleNextSlide = () => {
		setActiveSlide((prev) => Math.min(prev + 1, maxSlide));
	};

	const handleSelectSlide = (index: number) => {
		setActiveSlide(Math.min(Math.max(index, 0), maxSlide));
	};

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
					description="Selected builds that represent my current engineering and product approach. Click on the cards to view more details."
				/>
			</motion.div>

			<motion.div variants={itemVariants} className="relative">
				<div className="overflow-hidden rounded-xl border border-border bg-surface-2 px-3 py-3 md:px-4 md:py-4">
					<motion.div
						className="flex"
						style={{ gap: `${CARD_GAP}px` }}
						animate={{
							x: -(activeSlide * (cardWidth + CARD_GAP)),
						}}
						transition={{ type: "spring", stiffness: 340, damping: 34 }}
					>
						{projectsData.map((project) => (
							<div
								key={project.id}
								className="shrink-0"
								style={{ width: `${cardWidth}px` }}
							>
								<ProjectCard project={project} />
							</div>
						))}
					</motion.div>
				</div>

				{totalSlides > slidesPerView ? (
					<div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
						<button
							type="button"
							onClick={handlePreviousSlide}
							disabled={activeSlide === 0}
							aria-label="Previous projects"
							className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/80 text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-35 md:h-10 md:w-10"
						>
							<ChevronLeftRoundedIcon className="text-lg md:text-xl" />
						</button>

						<button
							type="button"
							onClick={handleNextSlide}
							disabled={activeSlide >= maxSlide}
							aria-label="Next projects"
							className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/80 text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-35 md:h-10 md:w-10"
						>
							<ChevronRightRoundedIcon className="text-lg md:text-xl" />
						</button>
					</div>
				) : null}
			</motion.div>

			{pageCount > 1 ? (
				<motion.div variants={itemVariants}>
					<ul
						className="flex items-center justify-center gap-2"
						aria-label="Project pagination"
					>
						{Array.from({ length: pageCount }).map((_, index) => {
							const isActive = activeSlide === index;

							return (
								<li key={"project-page-" + index}>
									<button
										type="button"
										onClick={() => handleSelectSlide(index)}
										aria-label={"Go to project page " + (index + 1)}
										className={
											isActive
												? "h-2 w-4 rounded-full bg-foreground transition-all md:h-2.5 md:w-6"
												: "h-2 w-2 rounded-full bg-border transition-all hover:bg-foreground/60 md:h-2.5 md:w-2.5"
										}
									/>
								</li>
							);
						})}
					</ul>
				</motion.div>
			) : null}
		</motion.article>
	);
};

export default Projects;
