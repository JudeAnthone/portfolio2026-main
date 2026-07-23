import type { ReactNode } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { motion } from "framer-motion";

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

const StickyProfileCard = () => {
	return (
		<motion.article
			aria-label="Profile card"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],		
				delay: 0.4,
			}}
			whileHover={{ scale: 1.01 }}
			className="card-float-in relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-[0_24px_70px_-28px_rgba(0,0,0,0.65)] md:p-6"
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
							<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full card-detail-chip md:h-11 md:w-11">
								<SchoolRoundedIcon fontSize="small" />
							</div>
							<h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
								Iskolar ng Bayan
							</h3>
							<p className="mt-1 text-lg font-medium text-foreground md:text-xl">
								B.S. Computer Science
							</p>
							<p className="mt-2 inline-flex rounded-md px-2 py-1 text-xs font-medium card-detail-chip md:text-sm">
								2023 - 2027
							</p>
							<p className="mt-2 text-xs font-normal text-foreground/90 md:text-sm">
								Eulogio "Amang" Rodriguez Institute of Science and Technology
							</p>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<motion.h2
						className="text-center text-xl font-black leading-[1.1] tracking-tight text-foreground sm:text-2xl md:text-3xl"
						animate={{
							backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "linear",
						}}
						style={{
							background: "linear-gradient(90deg, #f3f4f4, #5227FF, #f3f4f4)",
							backgroundSize: "200% 200%",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}
					>
						Jude Duarte
					</motion.h2>
					<p className="mx-auto max-w-[26ch] text-center text-xs font-normal leading-relaxed text-muted sm:text-sm md:text-base">
						A Computer Science student building modern, polished, and user-focused web
						applications.
					</p>
				</div>

				<ul className="flex items-center justify-center gap-2 pt-1">
					{socials.map((item, index) => (
						<li key={item.label}>
							<Tooltip title={item.label} arrow>
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.4,
										ease: [0.22, 1, 0.36, 1],
										delay: 0.6 + index * 0.1,
									}}
								>
									<IconButton
										component="a"
										href={item.href}
										target="_blank"
										rel="noreferrer"
										aria-label={item.label}
										size="small"
										sx={{
											height: 34,
											width: 34,
											borderRadius: "10px",
											border: "1px solid color-mix(in oklab, var(--color-border) 70%, white 30%)",
											color: "var(--color-foreground)",
											fontSize: "1.1rem",
											backgroundColor: "var(--color-night-start)",
											backgroundImage:
												"linear-gradient(135deg, var(--color-night-start) 0%, var(--color-night-end) 100%)",
											backdropFilter: "blur(6px)",
											md: {
												height: 38,
												width: 38,
												fontSize: "1.2rem",
											},
											"&:hover": {
												color: "var(--color-foreground)",
												backgroundColor: "var(--color-night-start)",
												backgroundImage:
													"linear-gradient(135deg, color-mix(in oklab, var(--color-night-start) 88%, black 12%) 0%, color-mix(in oklab, var(--color-night-end) 88%, black 12%) 100%)",
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
	);
};

export default StickyProfileCard;
