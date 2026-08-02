import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { SiDocker, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { aboutData } from "../../data/about";
import { experienceData } from "../../data/experience";
import { SectionHeader } from "../layout/SectionContainer";
import { containerVariants, itemVariants } from "../../lib/animations";

interface AboutGalleryImage {
	src: string;
	alt: string;
}

const galleryImages: ReadonlyArray<AboutGalleryImage> = [
	{ src: "/brand/card-img5.jpg", alt: "Gallery photo 5" },
	{ src: "/brand/card-img1.jpg", alt: "Gallery photo 1" },
	{ src: "/brand/card-img6.jpg", alt: "Gallery photo 6" },
	{ src: "/brand/card-img7.jpg", alt: "Gallery photo 7" },
	{ src: "/brand/gallery/05eb7c79-ecc5-42cd-9b65-4e120da2cf19.jpg", alt: "Gallery photo 8" },
	{ src: "/brand/gallery/60d59b68-f3c5-446a-a04f-ea5cc6aee95b.jpg", alt: "Gallery photo 10" },
	{ src: "/brand/gallery/6101c24c-21db-42a1-bc3a-bb060bf6ebd1.jpg", alt: "Gallery photo 11" },
	{ src: "/brand/gallery/626fddeb-c698-4250-930b-bd1086996197.jpg", alt: "Gallery photo 12" },
	{ src: "/brand/gallery/689b0763-6943-499d-b32c-8d138af5351c.jpg", alt: "Gallery photo 13" },
	{ src: "/brand/gallery/6df830d2-dd4a-4ea9-a3da-15a563ef4c0b.jpg", alt: "Gallery photo 14" },
	{ src: "/brand/gallery/75ffebe8-47c7-49a3-a00f-2621e15fc27a.jpg", alt: "Gallery photo 15" },
	{ src: "/brand/gallery/bba1072b-980b-4be4-9760-21fdd8708cbf.jpg", alt: "Gallery photo 16" },
	{ src: "/brand/gallery/cac7e84d-7eb4-4a4d-af11-3c63bd62097c.jpg", alt: "Gallery photo 17" },
	{ src: "/brand/gallery/e3e358a1-9e54-4c53-a15e-9508795cb4f6.jpg", alt: "Gallery photo 18" },
	{ src: "/brand/gallery/ee67a697-c2b5-4f47-8295-ca94f705a0f0 (1).jpg", alt: "Gallery photo 19" },
	{ src: "/brand/gallery/photo_6280332245616759134_y.jpg", alt: "Gallery photo 21" },
	{ src: "/brand/gallery/photo_6280332245616759135_y.jpg", alt: "Gallery photo 22" },
	{ src: "/brand/gallery/photo_6280332245616759138_y.jpg", alt: "Gallery photo 23" },
	{ src: "/brand/gallery/photo_6280332245616759141_y.jpg", alt: "Gallery photo 25" },
	{ src: "/brand/gallery/photo_6280332245616759145_y.jpg", alt: "Gallery photo 27" },
	{ src: "/brand/gallery/photo_6280332245616759147_y.jpg", alt: "Gallery photo 28" },
	{ src: "/brand/gallery/photo_6280332245616759150_y.jpg", alt: "Gallery photo 29" },
	{ src: "/brand/gallery/photo_6280332245616759151_y.jpg", alt: "Gallery photo 30" },
	{ src: "/brand/gallery/photo_6280332245616759152_y.jpg", alt: "Gallery photo 31" },
	{ src: "/brand/gallery/photo_6280332245616759153_y.jpg", alt: "Gallery photo 32" },
	{ src: "/brand/gallery/photo_6280332245616759154_y.jpg", alt: "Gallery photo 33" },
	{ src: "/brand/gallery/photo_6280332245616759155_y.jpg", alt: "Gallery photo 34" },
	{ src: "/brand/gallery/photo_6280332245616759156_y.jpg", alt: "Gallery photo 35" },
	{ src: "/brand/gallery/photo_6280332245616759160_y.jpg", alt: "Gallery photo 37" },
	{ src: "/brand/gallery/photo_6280332245616759162_y.jpg", alt: "Gallery photo 38" },
	{ src: "/brand/gallery/photo_6280332245616759163_y.jpg", alt: "Gallery photo 39" },
	{ src: "/brand/gallery/photo_6280332245616759165_y.jpg", alt: "Gallery photo 41" },
	{ src: "/brand/gallery/photo_6280332245616759166_y.jpg", alt: "Gallery photo 42" },
	{ src: "/brand/gallery/photo_6280332245616759167_y.jpg", alt: "Gallery photo 43" },
	{ src: "/brand/gallery/photo_6280332245616759169_y.jpg", alt: "Gallery photo 44" },
	{ src: "/brand/gallery/photo_6280332245616759170_y.jpg", alt: "Gallery photo 45" },
	{ src: "/brand/gallery/photo_6280332245616759172_y.jpg", alt: "Gallery photo 46" },
	{ src: "/brand/gallery/photo_6280332245616759173_y.jpg", alt: "Gallery photo 47" },
	{ src: "/brand/gallery/photo_6280332245616759175_y.jpg", alt: "Gallery photo 48" },
	{ src: "/brand/gallery/photo_6280332245616759177_y.jpg", alt: "Gallery photo 49" },
	{ src: "/brand/gallery/photo_6280332245616759178_y.jpg", alt: "Gallery photo 50" },
	{ src: "/brand/gallery/photo_6280332245616759180_y.jpg", alt: "Gallery photo 51" },
	{ src: "/brand/gallery/photo_6280332245616759181_y.jpg", alt: "Gallery photo 52" },
	{ src: "/brand/gallery/photo_6280332245616759182_y.jpg", alt: "Gallery photo 53" },
	{ src: "/brand/gallery/photo_6280332245616759186_y.jpg", alt: "Gallery photo 54" },
];

const GALLERY_CARD_GAP = 10;

interface TechItem {
	name: string;
	subtitle: string;
	icon: ReactNode;
	description: string;
}

const N8nIcon = () => (
	<svg
		fill="currentColor"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
	</svg>
);

const techStack: ReadonlyArray<TechItem> = [
	{
		name: "React",
		subtitle: "+ TypeScript",
		icon: <SiReact />,
		description:
			"Building interactive, type-safe user interfaces with component-driven architecture.",
	},
	{
		name: "Tailwind CSS",
		subtitle: "Responsive UI",
		icon: <SiTailwindcss />,
		description:
			"Crafting responsive, utility-first designs that scale across every screen size.",
	},
	{
		name: "Node.js",
		subtitle: "+ Express",
		icon: <SiNodedotjs />,
		description:
			"Building RESTful APIs and server-side logic with JavaScript end-to-end.",
	},
	{
		name: "PostgreSQL",
		subtitle: "REST APIs",
		icon: <SiPostgresql />,
		description:
			"Designing relational data models and optimizing queries for scalable applications.",
	},
	{
		name: "Docker",
		subtitle: "CI/CD + Cloud",
		icon: <SiDocker />,
		description:
			"Containerizing applications and orchestrating deployments with CI/CD pipelines.",
	},
	{
		name: "AI/ML",
		subtitle: "Automation",
		icon: <N8nIcon />,
		description:
			"Integrating machine learning models and automation workflows into web applications.",
	},
];

const About = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [slidesPerView, setSlidesPerView] = useState(1);
	const [cardWidth, setCardWidth] = useState(220);

	const totalSlides = galleryImages.length;
	const maxSlide = Math.max(totalSlides - slidesPerView, 0);
	const pageCount = totalSlides > 0 ? maxSlide + 1 : 0;

	useEffect(() => {
		const updateLayout = () => {
			const w = window.innerWidth;

			let nextSlidesPerView = 1;
			let nextCardWidth = 220;

			if (w >= 768) {
				nextSlidesPerView = 3;
				nextCardWidth = 220;
			} else if (w >= 520) {
				nextSlidesPerView = 2;
				nextCardWidth = 180;
			} else {
				nextSlidesPerView = 1;
				nextCardWidth = Math.min(w - 48, 220);
			}

			setActiveSlide((prev) =>
				Math.min(prev, Math.max(galleryImages.length - nextSlidesPerView, 0)),
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

	const hasMetrics = aboutData.metrics.length > 0;
	const currentExperience = experienceData.current;

	return (
		<motion.article
			aria-labelledby="about-title"
			className="space-y-5 md:space-y-8"
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
				/>
			</motion.div>

			<div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
				<motion.section
					variants={itemVariants}
					className="relative col-span-2 overflow-hidden rounded-md border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-12 md:p-6"
				>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/20 blur-3xl"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-night-gradient opacity-30 blur-2xl"
					/>

					<p className="relative max-w-3xl text-xs leading-relaxed text-muted md:text-sm md:text-base">
						I&apos;m a fourth-year Computer Science student who enjoys building
						software from end to end. From designing user interfaces to developing
						backend systems, I like turning ideas into projects that solve real
						problems. I&apos;m always learning, always building, and always looking
						for ways to create software that&apos;s both useful and enjoyable to
						use.
					</p>
				</motion.section>

				{techStack.map((tech) => (
					<motion.div
						key={tech.name}
						variants={itemVariants}
						whileHover={{ y: -2, scale: 1.02 }}
						className="col-span-1 flex flex-col rounded-xl border border-border bg-surface-2 p-4 transition-colors duration-200 hover:bg-surface md:col-span-4"
					>
						<div className="flex items-center gap-3">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-lg text-foreground/80">
								{tech.icon}
							</span>
							<div>
								<p className="text-sm font-medium text-foreground">{tech.name}</p>
								<p className="text-[10px] text-muted">{tech.subtitle}</p>
							</div>
						</div>
						<p className="mt-3 text-xs leading-relaxed text-muted">
							{tech.description}
						</p>
					</motion.div>
				))}

				<motion.div
					variants={itemVariants}
					className="col-span-2 flex flex-col justify-between gap-3 rounded-md border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-6 md:p-5"
				>
					<div>
						<p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted md:text-[11px] md:tracking-[0.14em]">
							Let&apos;s Work Together
						</p>
						<p className="mt-2 text-xs leading-relaxed text-foreground md:text-sm md:text-base">
							Interested in what I&apos;m building or have a project in mind?
							Explore my featured work or reach out to collaborate.
						</p>
					</div>
					<div className="flex flex-wrap gap-2">
						<a
							href="#projects"
							className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface-2 px-2.5 py-2 text-[10px] font-medium text-foreground hover:bg-surface md:px-3 md:text-xs md:text-sm"
						>
							View Projects
							<ArrowOutwardRoundedIcon className="text-sm md:text-base" />
						</a>

						<a
							href="#socials"
							className="inline-flex items-center gap-1 rounded-lg border border-border bg-night-gradient px-2.5 py-2 text-[10px] font-medium text-foreground md:px-3 md:text-xs md:text-sm"
						>
							Let&apos;s Connect
							<ArrowOutwardRoundedIcon className="text-sm md:text-base" />
						</a>
					</div>
				</motion.div>

				{hasMetrics
					? aboutData.metrics.map((metric, index) => (
							<motion.div
								key={metric.label}
								variants={itemVariants}
								whileHover={{ y: -2 }}
								className="col-span-1 rounded-md border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-3 md:p-5"
							>
								<div className="flex items-start justify-between gap-2">
									<p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted md:text-[11px] md:tracking-[0.14em]">
										0{index + 1}
									</p>
									<InsightsRoundedIcon className="text-sm text-foreground/50 md:text-base" />
								</div>
								<p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-muted md:text-xs md:tracking-[0.12em]">
									{metric.label}
								</p>
								<p className="mt-1 text-xs font-semibold leading-snug text-foreground md:text-sm md:text-base">
									{metric.value}
								</p>
							</motion.div>
						))
					: null}

				{currentExperience ? (
					<motion.section
						variants={itemVariants}
						className="relative col-span-2 overflow-hidden rounded-md border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-12 md:p-6"
					>
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-2.5 py-1 md:px-3 md:py-1.5">
							<WorkOutlineRoundedIcon className="text-sm text-foreground md:text-base" />
							<span className="text-[10px] font-medium uppercase tracking-[0.1em] text-foreground md:text-xs md:tracking-[0.12em]">
								Current Internship
							</span>
						</div>

						<div className="mt-4 flex items-center gap-3 md:mt-5 md:gap-4">
							<img
								src={currentExperience.logoSrc}
								alt={`${currentExperience.company} logo`}
								className="h-14 w-14 shrink-0 rounded-2xl object-cover md:h-16 md:w-16"
							/>
							<div>
								<h3 className="text-base font-semibold leading-tight text-foreground md:text-lg">
									{currentExperience.company}
								</h3>
								<p className="text-sm font-medium text-foreground/90 md:text-base">
									{currentExperience.role}
								</p>
								<p className="mt-1 flex items-center gap-1.5 text-xs text-muted md:text-sm">
									<LocationOnOutlinedIcon className="text-sm" />
									{currentExperience.location}
									<span aria-hidden="true" className="text-border">
										·
									</span>
									{currentExperience.dateRange}
								</p>
							</div>
						</div>

						<ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-5 md:gap-2.5">
							{currentExperience.responsibilities.map((item, index) => (
								<motion.li
									key={`${currentExperience.company}-responsibility-${index}`}
									variants={itemVariants}
									whileHover={{ y: -2, scale: 1.01 }}
									className="rounded-xl border border-border bg-surface-2 px-3 py-2.5 text-xs leading-relaxed text-foreground transition-colors duration-200 hover:bg-surface md:text-sm"
								>
									{item.text}
								</motion.li>
							))}
						</ul>
					</motion.section>
				) : null}

				<motion.section
					variants={itemVariants}
					className="relative col-span-2 overflow-hidden rounded-md border border-border bg-surface/70 p-2 backdrop-blur-sm md:col-span-12 md:p-4"
				>
					<div className="flex items-center justify-between gap-3">
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-2.5 py-1 md:px-3 md:py-1.5">
							<PhotoLibraryRoundedIcon className="text-sm text-foreground md:text-base" />
							<span className="text-[10px] font-medium uppercase tracking-[0.1em] text-foreground md:text-xs md:tracking-[0.12em]">
								Gallery
							</span>
						</div>
						<p className="text-[10px] text-muted md:text-xs">
							{totalSlides === 0
								? "0 / 0"
								: `Showing ${activeSlide + 1}-${Math.min(
										activeSlide + slidesPerView,
										totalSlides,
									)} of ${totalSlides}`}
						</p>
					</div>

					<div className="relative mt-3 md:mt-4">
						<div className="overflow-hidden rounded-xl border border-border bg-surface-2 px-2 py-2 md:px-3 md:py-3">
							<motion.ul
								className="flex"
								style={{ gap: `${GALLERY_CARD_GAP}px` }}
								animate={{
									x: -(activeSlide * (cardWidth + GALLERY_CARD_GAP)),
								}}
								transition={{ type: "spring", stiffness: 340, damping: 34 }}
							>
								{galleryImages.map((image, index) => (
									<li
										key={image.src + "-" + index}
										className="group relative shrink-0 overflow-hidden rounded-lg border border-border/70"
										style={{ width: `${cardWidth}px` }}
									>
										<div className="relative h-[200px] w-full sm:h-[240px] md:h-[260px]">
											<img
												src={image.src}
												alt={image.alt}
												className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
												loading="lazy"
											/>
											<div
												aria-hidden="true"
												className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent"
											/>
										</div>
									</li>
								))}
							</motion.ul>
						</div>

						<div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
							<button
								type="button"
								onClick={handlePreviousSlide}
								disabled={activeSlide === 0}
								aria-label="Previous gallery images"
								className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/80 text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-35 md:h-10 md:w-10"
							>
								<ChevronLeftRoundedIcon className="text-lg md:text-xl" />
							</button>

							<button
								type="button"
								onClick={handleNextSlide}
								disabled={activeSlide >= maxSlide}
								aria-label="Next gallery images"
								className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/80 text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-35 md:h-10 md:w-10"
							>
								<ChevronRightRoundedIcon className="text-lg md:text-xl" />
							</button>
						</div>
					</div>

					<ul
						className="mt-3 flex items-center justify-center gap-2 md:mt-4"
						aria-label="Gallery pagination"
					>
						{Array.from({ length: pageCount }).map((_, index) => {
							const isActive = activeSlide === index;

							return (
								<li key={"gallery-page-" + index}>
									<button
										type="button"
										onClick={() => handleSelectSlide(index)}
										aria-label={"Go to gallery page " + (index + 1)}
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
				</motion.section>
			</div>
		</motion.article>
	);
};

export default About;
