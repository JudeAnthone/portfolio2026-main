import { useEffect, useState } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { motion, type Variants } from "framer-motion";

const roles = [
	"Fullstack Software Developer",
	"Cloud Engineer",
	"AI Automation",
	"Computer Science",
	"Frontend Developer",
	"Backend Developer",
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.06,
			delayChildren: 0.05,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const Hero = () => {
	const [roleIndex, setRoleIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentRole = roles[roleIndex];

		const timeout = setTimeout(
			() => {
				if (!isDeleting) {
					setDisplayText(currentRole.substring(0, displayText.length + 1));

					if (displayText.length === currentRole.length) {
						setTimeout(() => setIsDeleting(true), 2000);
					}
				} else {
					setDisplayText(currentRole.substring(0, displayText.length - 1));

					if (displayText.length === 0) {
						setIsDeleting(false);
						setRoleIndex((prev) => (prev + 1) % roles.length);
					}
				}
			},
			isDeleting ? 50 : 100,
		);

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting, roleIndex]);

	return (
		<motion.article
			aria-labelledby="hero-title"
			className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden text-center md:min-h-[60vh] lg:min-h-[70vh]"
			variants={containerVariants}
			initial="hidden"
			animate="show"
		>
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
				<div className="absolute bottom-0 left-1/4 h-[200px] w-[200px] rounded-full bg-night-start/30 blur-[60px] sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />
			</div>

			<motion.div variants={itemVariants} className="mb-3 md:mb-4">
				<span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted backdrop-blur-sm md:px-4 md:py-2 md:text-xs md:tracking-[0.14em]">
					<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success md:h-2 md:w-2" />
					Open to opportunities
				</span>
			</motion.div>

			<motion.h1
				id="hero-title"
				variants={itemVariants}
				className="px-2 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
			>
				Jude Duarte
			</motion.h1>

			<motion.div
				variants={itemVariants}
				className="mt-3 h-6 overflow-hidden sm:h-8 md:mt-4 md:h-10"
			>
				<p className="text-base font-medium sm:text-lg md:text-2xl md:text-3xl">
					<span
						className="bg-clip-text text-white"
						style={{
							backgroundSize: "100%",
						}}
					>
						{displayText}
					</span>
					<span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-foreground/70 sm:h-6 sm:w-[3px] md:h-8" />
				</p>
			</motion.div>

			<motion.p
				variants={itemVariants}
				className="mt-4 max-w-sm px-4 text-xs leading-relaxed text-muted sm:max-w-lg sm:text-sm md:mt-6 md:text-base"
			>
				Student Fullstack Software Developer specializing in
				building practical, real-world applications with modern web technologies.
			</motion.p>

			<motion.div
				variants={itemVariants}
				className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8"
			>
				<a
					href="#projects"
					className="inline-flex items-center gap-2 rounded-lg bg-night-gradient px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 md:px-5 md:py-3 md:text-sm"
				>
					View Projects
					<ArrowOutwardRoundedIcon className="text-sm md:text-base" />
				</a>

				<a
					href="#socials"
					className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-4 py-2.5 text-xs font-medium text-foreground backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-surface md:px-5 md:py-3 md:text-sm"
				>
					Get In Touch
				</a>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-5"
			>
				<motion.a
					href="#about"
					animate={{
						y: [0, 8, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="inline-flex flex-col items-center gap-1 text-muted transition-colors hover:text-foreground"
					aria-label="Scroll down"
				>
					<span className="text-[10px] uppercase tracking-[0.12em] md:text-xs md:tracking-[0.14em]">
						Scroll
					</span>
					<KeyboardArrowDownRoundedIcon className="text-lg md:text-xl" />
				</motion.a>
			</motion.div>
		</motion.article>
	);
};

export default Hero;
