import { useEffect, useState } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { motion } from "framer-motion";
import { aboutData } from "../../data/about";
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

	const hasHighlights = aboutData.stackHighlights.length > 0;
	const hasMetrics = aboutData.metrics.length > 0;

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
					description={aboutData.intro}
				/>
			</motion.div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
				<motion.section
					variants={itemVariants}
					className="relative overflow-hidden rounded-md border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-8 md:p-6"
				>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/20 blur-3xl"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-night-gradient opacity-30 blur-2xl"
					/>

					<div className="relative space-y-4 md:space-y-5">
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-2.5 py-1 md:px-3 md:py-1.5">
							<RocketLaunchRoundedIcon className="text-sm text-foreground md:text-base" />
							<span className="text-[10px] font-medium uppercase tracking-[0.1em] text-foreground md:text-xs md:tracking-[0.12em]">
								Currently Building
							</span>
						</div>

						<p className="text-xs leading-relaxed text-muted md:text-sm md:text-base">
							{aboutData.description}
						</p>

						<div className="flex flex-wrap gap-2">
							<span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] text-muted md:px-3 md:py-1.5 md:text-xs md:text-sm">
								<LocationOnOutlinedIcon className="text-sm text-foreground md:text-base" />
								<span>
									<span className="text-foreground">Location:</span>{" "}
									{aboutData.location}
								</span>
							</span>

							<span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] text-muted md:px-3 md:py-1.5 md:text-xs md:text-sm">
								<WorkOutlineRoundedIcon className="text-sm text-foreground md:text-base" />
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
										className="rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-foreground transition-colors duration-200 hover:bg-surface md:text-sm"
									>
										<span className="inline-flex items-center gap-2">
											{index % 2 === 0 ? (
												<AutoAwesomeRoundedIcon className="text-sm text-foreground/80 md:text-base" />
											) : (
												<BoltRoundedIcon className="text-sm text-foreground/80 md:text-base" />
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
					</div>
				</motion.section>

				<motion.aside variants={itemVariants} className="space-y-3 md:col-span-4">
					<div className="relative overflow-hidden rounded-md border border-border bg-night-gradient p-4 md:p-5">
						<div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-foreground/10 blur-2xl" />
						<div className="relative">
							<p className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/70 md:text-xs md:tracking-[0.14em]">
								Profile Snapshot
							</p>
							<p className="mt-2 text-xs leading-relaxed text-foreground md:text-sm md:text-base">
								Student Fullstack Software Developer and Aspiring Cloud Engineer
								focused on modern SaaS products, AI Automation, dashboards, and
								scalable UX systems.
							</p>
						</div>
					</div>

					{hasMetrics ? (
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
							{aboutData.metrics.map((metric, index) => (
								<motion.div
									key={metric.label}
									variants={itemVariants}
									whileHover={{ y: -2 }}
									className="rounded-md border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
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
							))}
						</div>
					) : (
						<div className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm">
							<p className="text-sm text-muted">No metrics available yet.</p>
						</div>
					)}
				</motion.aside>

				<motion.section
					variants={itemVariants}
					className="relative overflow-hidden rounded-md border border-border bg-surface/70 p-2 backdrop-blur-sm md:col-span-12 md:p-4"
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
