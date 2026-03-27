import type { ReactNode } from "react";
import Tooltip from "@mui/material/Tooltip";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { FaGithub } from "react-icons/fa";
import { motion, type Variants } from "motion/react";
import { socialsData, type SocialPlatform } from "../../data/socials";
import { SectionHeader } from "../layout/SectionContainer";

interface SocialMeta {
	label: string;
	icon: ReactNode;
	color: string;
}

const platformMeta: Record<SocialPlatform, SocialMeta> = {
	LinkedIn: {
		label: "LinkedIn",
		icon: <LinkedInIcon fontSize="inherit" />,
		color: "#0A66C2",
	},
	Instagram: {
		label: "Instagram",
		icon: <InstagramIcon fontSize="inherit" />,
		color: "#E4405F",
	},
	Facebook: {
		label: "Facebook",
		icon: <FacebookRoundedIcon fontSize="inherit" />,
		color: "#1877F2",
	},
	Github: {
		label: "GitHub",
		icon: <FaGithub />,
		color: "#F3F4F4",
	},
};

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

const Socials = () => {
	if (!socialsData.length) {
		return (
			<article aria-labelledby="socials-title" className="space-y-3">
				<h2
					id="socials-title"
					className="text-2xl font-semibold text-foreground md:text-4xl"
				>
					Socials
				</h2>
				<p className="text-sm text-muted">No social links available yet.</p>
			</article>
		);
	}

	return (
		<motion.article
			aria-labelledby="socials-title"
			className="space-y-6 md:space-y-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.18 }}
		>
			<motion.div variants={itemVariants}>
				<SectionHeader
					id="socials-title"
					tag="/03 Socials"
					lines={["Let's", "Connect."]}
					description="Reach me for opportunities, collaborations, and tech conversations."
				/>
			</motion.div>

			<motion.section
				variants={itemVariants}
				className="relative overflow-hidden rounded-2xl border border-border bg-night-gradient p-4 md:p-5"
			>
				<div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-foreground/10 blur-2xl" />
				<div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-sm text-foreground/90 md:text-base">
						Open to internships, freelance projects, and community collaboration.
					</p>
					<a
						href={socialsData[0]?.url ?? "#"}
						target="_blank"
						rel="noreferrer"
						className="inline-flex w-fit items-center gap-1 rounded-lg border border-border bg-surface/70 px-3 py-2 text-xs font-medium text-foreground hover:bg-surface md:text-sm"
					>
						Start a conversation
						<OpenInNewRoundedIcon className="text-base" />
					</a>
				</div>
			</motion.section>

			<section
				aria-label="Social links"
				className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"
			>
				{socialsData.map((item) => {
					const meta = platformMeta[item.platform];

					return (
						<motion.article
							key={item.platform}
							variants={itemVariants}
							whileHover={{ y: -3 }}
							className="group relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
						>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100"
								style={{ backgroundColor: meta.color, opacity: 0.35 }}
							/>

							<div className="relative">
								<div className="flex items-center gap-3">
									<span
										className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-lg"
										style={{ color: meta.color }}
									>
										{meta.icon}
									</span>

									<div className="min-w-0">
										<h3 className="truncate text-base font-semibold text-foreground">
											{meta.label}
										</h3>
										<p className="truncate text-xs text-muted">{item.handle}</p>
									</div>
								</div>

								<p className="mt-3 text-sm leading-relaxed text-muted">
									{item.description}
								</p>

								<div className="mt-4">
									<Tooltip title={"Open " + meta.label} arrow>
										<a
											href={item.url}
											target="_blank"
											rel="noreferrer"
											aria-label={"Open " + meta.label}
											className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface md:text-sm"
										>
											Open {meta.label}
											<OpenInNewRoundedIcon className="text-base" />
										</a>
									</Tooltip>
								</div>
							</div>
						</motion.article>
					);
				})}
			</section>
		</motion.article>
	);
};

export default Socials;
