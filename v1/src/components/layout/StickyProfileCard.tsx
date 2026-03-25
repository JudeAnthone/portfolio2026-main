import type { ReactNode } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

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

// left card
const StickyProfileCard = () => {
	return (
		<article
			aria-label="Profile card"
			className="card-float-in relative mx-auto w-full max-w-sm overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl shadow-[0_24px_70px_-28px_rgba(0,0,0,0.65)] md:p-6"
		>
			<div className="relative z-10 space-y-5">
				<div className="rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
					<div className="group relative overflow-hidden rounded-2xl bg-card-image-gradient">
						<img
							src="/brand/card-img2.png"
							alt="Profile artwork"
							className="mx-auto h-56 w-full object-cover transition duration-500 ease-out group-hover:brightness-75 sm:h-64"
						/>

						<div className="card-image-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

						<div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
							<div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full card-detail-chip">
								<SchoolRoundedIcon fontSize="small" />
							</div>
							<h3 className="text-3xl font-semibold leading-tight text-foreground">
								Iskolar ng Bayan
							</h3>
							<p className="mt-1 text-xl font-medium text-foreground">
								B.S. Computer Science
							</p>
							<p className="mt-2 inline-flex rounded-md px-2 py-1 text-sm font-medium card-detail-chip">
								2023 - 2027
							</p>
							<p className="mt-2 text-sm font-normal text-foreground/90">
								Eulogio "Amang" Rodriguez Institute of Science and Technology
							</p>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-center text-2xl font-black leading-[1.1] tracking-tight text-foreground sm:text-3xl">
						Jude Duarte
					</h2>
					<p className="mx-auto max-w-[26ch] text-center text-sm font-normal leading-relaxed text-muted sm:text-base">
						A Software Engineer who builds modern, polished, and user-focused digital
						products.
					</p>
				</div>

				<ul className="flex items-center justify-center gap-2 pt-1">
					{socials.map((item) => (
						<li key={item.label}>
							<Tooltip title={item.label} arrow>
								<IconButton
									component="a"
									href={item.href}
									target="_blank"
									rel="noreferrer"
									aria-label={item.label}
									size="small"
									sx={{
										height: 38,
										width: 38,
										borderRadius: "12px",
										border: "1px solid color-mix(in oklab, var(--color-border) 70%, white 30%)",
										color: "var(--color-foreground)",
										fontSize: "1.2rem",
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
									}}
								>
									{item.icon}
								</IconButton>
							</Tooltip>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default StickyProfileCard;
