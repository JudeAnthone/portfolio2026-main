import type { ReactNode } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { motion } from "framer-motion";
import { itemVariants } from "../../lib/animations";

interface CardSocial {
	label: string;
	href: string;
	icon: ReactNode;
}

const socials: ReadonlyArray<CardSocial> = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/jude-anthone-duarte-750288326/",
		icon: <LinkedInIcon fontSize="inherit" />,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/jardurf/",
		icon: <InstagramIcon fontSize="inherit" />,
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/jude.anthone.duarte.2024",
		icon: <FacebookRoundedIcon fontSize="inherit" />,
	},
];

const cardSocialSx = {
	height: 32,
	width: 32,
	borderRadius: "10px",
	border: "1px solid color-mix(in oklab, var(--color-border) 70%, white 30%)",
	color: "var(--color-foreground)",
	fontSize: "1.05rem",
	backgroundColor: "var(--color-night-start)",
	backgroundImage:
		"linear-gradient(135deg, var(--color-night-start) 0%, var(--color-night-end) 100%)",
	backdropFilter: "blur(6px)",
	"&:hover": {
		color: "var(--color-foreground)",
		backgroundColor: "var(--color-night-start)",
		backgroundImage:
			"linear-gradient(135deg, color-mix(in oklab, var(--color-night-start) 88%, black 12%) 0%, color-mix(in oklab, var(--color-night-end) 88%, black 12%) 100%)",
	},
} as const;

const StickyProfileCard = () => {
	return (
		<>
		{/* MOBILE */}
			<motion.article
				aria-label="Profile card"
				initial="hidden"
				animate="show"
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: { staggerChildren: 0.1, delayChildren: 0.05 },
					},
				}}
				className="relative mx-4 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_24px_70px_-28px_rgba(0,0,0,0.65)] lg:hidden"
			>
				<motion.div
					variants={itemVariants}
					className="group relative overflow-hidden rounded-xl bg-card-image-gradient"
				>
					<motion.img
						src="/brand/card-img5.jpg"
						alt="Profile artwork"
						whileTap={{ scale: 0.98 }}
						className="h-65 w-full object-cover object-top transition duration-500 ease-out group-hover:brightness-75 sm:h-64"
						transition={{ duration: 0.5 }}
					/>
					<div className="card-image-overlay pointer-events-none absolute inset-0" />

					<div className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
						<div className="card-detail-chip mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full">
							<SchoolRoundedIcon fontSize="small" />
						</div>
						<h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg">
							Iskolar ng Bayan
						</h3>
						<p className="mt-0.5 text-sm font-medium text-foreground sm:text-base">
							B.S. Computer Science
						</p>
						<p className="card-detail-chip mt-2 inline-flex rounded-md px-2 py-0.5 text-[11px] font-medium">
							2023 - 2027
						</p>
						<p className="mt-1.5 line-clamp-2 text-[11px] font-normal leading-snug text-foreground/90 sm:text-xs">
							Eulogio "Amang" Rodriguez Institute of Science and Technology
						</p>
					</div>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="space-y-4 px-4 pb-5 pt-4 sm:space-y-5 sm:px-5 sm:pb-6 sm:pt-5"
				>
					<div className="space-y-1">
						<h2
							className="text-center text-xl font-black leading-[1.1] tracking-tight sm:text-2xl"
							style={{
								background: "linear-gradient(90deg, #f3f4f4, #5227FF, #f3f4f4)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							Jude Duarte
						</h2>
						<p className="mx-auto max-w-[30ch] text-center text-xs font-normal leading-relaxed text-muted sm:text-sm">
							Welcome to my Portfolio! A digitized short description about me.  
						</p>
					</div>

					<ul className="flex items-center justify-center gap-3">
						{socials.map((item) => (
							<li key={item.label}>
								<Tooltip title={item.label}>
									<IconButton
										component="a"
										href={item.href}
										target="_blank"
										rel="noreferrer"
										aria-label={item.label}
										size="medium"
										sx={{
											...cardSocialSx,
											height: 44,
											width: 44,
											fontSize: "1.2rem",
										}}
									>
										{item.icon}
									</IconButton>
								</Tooltip>
							</li>
						))}
					</ul>
				</motion.div>
			</motion.article>



			{/* DESKTOP*/}
			<motion.article
				aria-label="Profile card"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
				className="relative hidden overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-[0_24px_70px_-28px_rgba(0,0,0,0.65)] md:p-6 lg:block"
			>
				<div className="relative z-10 space-y-4 md:space-y-5">
					<div className="rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
						<div className="group relative overflow-hidden rounded-2xl bg-card-image-gradient">
							<motion.img
								src="/brand/card-img5.jpg"
								alt="Profile artwork"
								className="mx-auto h-48 w-full object-cover object-top transition duration-500 ease-out group-hover:brightness-75 sm:h-56 md:h-64 md:group-hover:brightness-75"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.5 }}
							/>

							<div className="card-image-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

							<div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 p-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:p-4">
								<div className="card-detail-chip mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full md:h-11 md:w-11">
									<SchoolRoundedIcon fontSize="small" />
								</div>
								<h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
									Iskolar ng Bayan
								</h3>
								<p className="mt-1 text-lg font-medium text-foreground md:text-xl">
									B.S. Computer Science
								</p>
								<p className="card-detail-chip mt-2 inline-flex rounded-md px-2 py-1 text-xs font-medium md:text-sm">
									2023 - 2027
								</p>
								<p className="mt-2 text-xs font-normal text-foreground/90 md:text-sm">
									Eulogio "Amang" Rodriguez Institute of Science and Technology
								</p>
							</div>
						</div>
					</div>

					<div className="space-y-2">
						<h2
							className="text-center text-xl font-black leading-[1.1] tracking-tight sm:text-2xl md:text-3xl"
							style={{
								background: "linear-gradient(90deg, #f3f4f4, #5227FF, #f3f4f4)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							Jude Duarte
						</h2>
						<p className="mx-auto max-w-[26ch] text-center text-xs font-normal leading-relaxed text-muted sm:text-sm md:text-base">
							Welcome to my Portfolio! A digitized short description about me.   
						</p>
					</div>

					<ul className="flex items-center justify-center gap-2 pt-1">
						{socials.map((item) => (
							<li key={item.label}>
								<Tooltip title={item.label} arrow>
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3 }}
									>
										<IconButton
											component="a"
											href={item.href}
											target="_blank"
											rel="noreferrer"
											aria-label={item.label}
											size="small"
											sx={{
												...cardSocialSx,
												height: 34,
												width: 34,
												fontSize: "1.1rem",
												md: {
													height: 38,
													width: 38,
													fontSize: "1.2rem",
												},
											}}
										>
											{item.icon}
										</IconButton>
									</motion.div>
								</Tooltip>
							</li>
						))}
					</ul>
				</div>
			</motion.article>
		</>
	);
};

export default StickyProfileCard;
