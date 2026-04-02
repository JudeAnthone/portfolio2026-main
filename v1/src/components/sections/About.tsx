import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
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
	const hasMetrics = aboutData.metrics.length > 0;

	return (
		<motion.article
			aria-labelledby="about-title"
			className="space-y-6 md:space-y-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div variants={itemVariants}>
				<SectionHeader
					id="about-title"
					tag="/01 Intro"
					lines={["Crafting", "Digital", "Experiences."]}
					description={aboutData.intro}
				/>
			</motion.div>


			{/* main about section */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
				<motion.section
					variants={itemVariants}
					className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-8 md:p-6"
				>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/20 blur-3xl"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-night-gradient opacity-30 blur-2xl"
					/>

					<div className="relative space-y-5">
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5">
							<RocketLaunchRoundedIcon className="text-base text-foreground" />
							<span className="text-xs font-medium uppercase tracking-[0.12em] text-foreground">
								Currently Building
							</span>
						</div>

						<p className="text-sm leading-relaxed text-muted md:text-base">
							{aboutData.description}
						</p>

						<div className="flex flex-wrap gap-2">
							<span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted md:text-sm">
								<LocationOnOutlinedIcon className="text-base text-foreground" />
								<span>
									<span className="text-foreground">Location:</span>{" "}
									{aboutData.location}
								</span>
							</span>

							<span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted md:text-sm">
								<WorkOutlineRoundedIcon className="text-base text-foreground" />
								<span>
									<span className="text-foreground">Status:</span>{" "}
									{aboutData.availability}
								</span>
							</span>
						</div>

						{hasHighlights ? (
							<ul
								className="grid grid-cols-1 gap-2 sm:grid-cols-2"
								aria-label="Technology highlights"
							>
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
								Let's Connect
								<ArrowOutwardRoundedIcon className="text-base" />
							</a>
						</div>
					</div>
				</motion.section>



				{/* right part grid */}
				<motion.aside variants={itemVariants} className="space-y-3 md:col-span-4">
					<div className="relative overflow-hidden rounded-2xl border border-border bg-night-gradient p-4 md:p-5">
						<div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-foreground/10 blur-2xl" />
						<div className="relative">
							<p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/70">
								Profile Snapshot
							</p>
							<p className="mt-2 text-sm leading-relaxed text-foreground md:text-base">
								Full-stack focused with strong interest in modern SaaS products,
								dashboards, and scalable UX systems.
							</p>
						</div>
					</div>

					{hasMetrics ? (
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1">
							{aboutData.metrics.map((metric, index) => (
								<motion.div
									key={metric.label}
									variants={itemVariants}
									whileHover={{ y: -2 }}
									className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
								>
									<div className="flex items-start justify-between gap-2">
										<p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
											0{index + 1}
										</p>
										<InsightsRoundedIcon className="text-base text-foreground/50" />
									</div>
									<p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
										{metric.label}
									</p>
									<p className="mt-1 text-sm font-semibold leading-snug text-foreground md:text-base">
										{metric.value}
									</p>
								</motion.div>
							))}
						</div>
					) : (
						<div className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm">
							<p className="text-sm text-muted">No metrics available yet.</p>
						</div>
					)}
				</motion.aside>
			</div>
		</motion.article>
	);
};

export default About;
