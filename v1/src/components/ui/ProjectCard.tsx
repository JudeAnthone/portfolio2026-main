import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import type { IconType } from "react-icons";
import {
	SiReact,
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiGo,
	SiPostgresql,
	SiNodedotjs,
	SiExpress,
	SiDocker,
	SiMysql,
	SiMui,
	SiChartdotjs,
	SiElectron,
	SiJavascript,
} from "react-icons/si";
import { FaWindows, FaCss3Alt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import type { ProjectItem } from "../../data/project";

interface ProjectIconMeta {
	icon: IconType;
	color: string;
}

const projectSkillMap: Record<string, ProjectIconMeta> = {
	React: { icon: SiReact, color: "#61DAFB" },
	NextJs: { icon: SiNextdotjs, color: "#ffffff" },
	TypeScript: { icon: SiTypescript, color: "#3178C6" },
	"Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
	"Go Lang": { icon: SiGo, color: "#00ADD8" },
	PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
	"Node.js": { icon: SiNodedotjs, color: "#339933" },
	"Express.js": { icon: SiExpress, color: "#F3F4F4" },
	Docker: { icon: SiDocker, color: "#2496ED" },
	MySQL: { icon: SiMysql, color: "#4479A1" },
	"Material UI": { icon: SiMui, color: "#007FFF" },
	"Chart.js": { icon: SiChartdotjs, color: "#FF6384" },
	"Electron.js": { icon: SiElectron, color: "#47848F" },
	Javascript: { icon: SiJavascript, color: "#F7DF1E" },
	CSS: { icon: FaCss3Alt, color: "#1572B6" },
	"VB.NET": { icon: DiVisualstudio, color: "#5C2D91" },
	"Windows Forms": { icon: FaWindows, color: "#0078D4" },
};

interface ProjectCardProps {
	project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const [open, setOpen] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setImageIndex(0);
	};

	const hasMultipleImages = project.imageSrcs.length > 1;

	const handlePrevImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setImageIndex((prev) => (prev === 0 ? project.imageSrcs.length - 1 : prev - 1));
	};

	const handleNextImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setImageIndex((prev) => (prev === project.imageSrcs.length - 1 ? 0 : prev + 1));
	};

	return (
		<>
			<motion.button
				type="button"
				onClick={handleOpen}
				whileHover={{ y: -4 }}
				whileTap={{ scale: 0.99 }}
				className="group w-full overflow-hidden rounded-xl border border-border bg-surface/70 text-left backdrop-blur-sm transition-colors hover:bg-surface"
				aria-label={`Open project details for ${project.title}`}
			>
				<div className="relative aspect-video w-full overflow-hidden">
					<img
						src={project.imageSrcs[0]}
						alt={`${project.title} preview`}
						className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
					/>
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
					<span className="absolute left-3 top-3 rounded-full border border-border bg-surface/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground">
						{project.status}
					</span>
					{hasMultipleImages ? (
						<span className="absolute right-3 bottom-3 rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-white">
							+{project.imageSrcs.length - 1}
						</span>
					) : null}
				</div>

				<div className="space-y-3 p-4">
					<h3 className="line-clamp-2 text-base font-semibold leading-tight text-foreground md:text-lg">
						{project.title}
					</h3>

					<p className="line-clamp-2 text-xs leading-relaxed text-muted md:text-sm">
						{project.description}
					</p>

					<div className="flex flex-wrap items-center gap-1.5">
						{project.stack.map((item) => {
							const meta = projectSkillMap[item];
							const Logo = meta?.icon;
							const color = meta?.color ?? "#F3F4F4";

							return (
								<Tooltip key={`${project.id}-${item}`} title={item} arrow>
									<span
										className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface-2 text-xs transition-colors hover:bg-surface md:h-8 md:w-8 md:text-sm"
										style={{ color }}
									>
										{Logo ? <Logo /> : null}
										<span className="sr-only">{item}</span>
									</span>
								</Tooltip>
							);
						})}
					</div>
				</div>
			</motion.button>

			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth="md"
				aria-labelledby={`project-dialog-title-${project.id}`}
				PaperProps={{
					sx: {
						borderRadius: "18px",
						border: "1px solid var(--color-border)",
						backgroundColor: "color-mix(in oklab, var(--color-surface) 88%, black 12%)",
						backgroundImage:
							"linear-gradient(135deg, color-mix(in oklab, var(--color-night-start) 55%, transparent 45%) 0%, color-mix(in oklab, var(--color-night-end) 70%, transparent 30%) 100%)",
						backdropFilter: "blur(12px)",
					},
				}}
			>
				<DialogContent sx={{ p: { xs: 2, md: 3 }, color: "var(--color-foreground)" }}>
					<div className="flex items-start justify-between gap-3">
						<h3
							id={`project-dialog-title-${project.id}`}
							className="text-xl font-semibold md:text-2xl"
						>
							{project.title}
						</h3>

						<IconButton
							aria-label="Close project details"
							onClick={handleClose}
							sx={{
								color: "var(--color-foreground)",
								border: "1px solid var(--color-border)",
								borderRadius: "10px",
							}}
						>
							<CloseRoundedIcon />
						</IconButton>
					</div>

					{hasMultipleImages ? (
						<div className="relative mt-3">
							<div className="relative overflow-hidden rounded-xl border border-border">
								<div className="relative aspect-video w-full">
									<AnimatePresence mode="wait">
										<motion.img
											key={imageIndex}
											src={project.imageSrcs[imageIndex]}
											alt={`${project.title} screenshot ${imageIndex + 1}`}
											className="absolute inset-0 h-full w-full object-cover"
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -50 }}
											transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
										/>
									</AnimatePresence>
								</div>
							</div>

							<div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
								<button
									type="button"
									onClick={handlePrevImage}
									aria-label="Previous image"
									className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/80 text-white transition-colors hover:bg-black md:h-10 md:w-10"
								>
									<ChevronLeftRoundedIcon className="text-lg md:text-xl" />
								</button>
								<button
									type="button"
									onClick={handleNextImage}
									aria-label="Next image"
									className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/80 text-white transition-colors hover:bg-black md:h-10 md:w-10"
								>
									<ChevronRightRoundedIcon className="text-lg md:text-xl" />
								</button>
							</div>
						</div>
					) : (
						<div className="mt-3 overflow-hidden rounded-xl border border-border">
							<img
								src={project.imageSrcs[0]}
								alt={`${project.title} full preview`}
								className="h-auto w-full object-cover"
							/>
						</div>
					)}

					{hasMultipleImages ? (
						<div className="mt-2 flex items-center justify-center gap-1.5">
							{project.imageSrcs.map((_, index) => (
								<button
									key={`img-dot-${index}`}
									type="button"
									onClick={() => setImageIndex(index)}
									aria-label={`Go to image ${index + 1}`}
									className={
										index === imageIndex
											? "h-1.5 w-4 rounded-full bg-foreground transition-all md:h-2 md:w-5"
											: "h-1.5 w-1.5 rounded-full bg-border transition-all hover:bg-foreground/60 md:h-2 md:w-2"
									}
								/>
							))}
						</div>
					) : null}

					<p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
						{project.details}
					</p>

					<div className="mt-4 flex flex-wrap gap-1.5">
						{project.stack.map((item) => {
							const meta = projectSkillMap[item];
							const Logo = meta?.icon;
							const color = meta?.color ?? "#F3F4F4";

							return (
								<span
									key={`chip-${project.id}-${item}`}
									className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-foreground"
								>
									{Logo ? <Logo className="text-sm" style={{ color }} /> : null}
									{item}
								</span>
							);
						})}
					</div>

					<div className="mt-5 flex flex-wrap gap-2">
						<Tooltip title="Open GitHub repository" arrow>
							<span>
								<Button
									component="a"
									href={project.repoUrl}
									target="_blank"
									rel="noreferrer"
									variant="contained"
									startIcon={<GitHubIcon />}
									disabled={!project.repoUrl}
									sx={{
										textTransform: "none",
										fontWeight: 600,
										borderRadius: "10px",
										background:
											"linear-gradient(135deg, var(--color-night-start) 0%, var(--color-night-end) 100%)",
										"&:hover": {
											background:
												"linear-gradient(135deg, color-mix(in oklab, var(--color-night-start) 85%, black 15%) 0%, color-mix(in oklab, var(--color-night-end) 85%, black 15%) 100%)",
										},
									}}
								>
									View GitHub
								</Button>
							</span>
						</Tooltip>

						{project.liveUrl ? (
							<Button
								component="a"
								href={project.liveUrl}
								target="_blank"
								rel="noreferrer"
								variant="outlined"
								endIcon={<OpenInNewRoundedIcon />}
								sx={{
									textTransform: "none",
									fontWeight: 600,
									borderRadius: "10px",
									borderColor: "var(--color-border)",
									color: "var(--color-foreground)",
								}}
							>
								Live Preview
							</Button>
						) : null}
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ProjectCard;
