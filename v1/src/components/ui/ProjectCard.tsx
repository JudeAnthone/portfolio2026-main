import { useState } from "react";
import { motion } from "motion/react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import type { ProjectItem } from "../../data/project";

interface ProjectCardProps {
	project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			{/* hovered */}
			<motion.button
				type="button"
				onClick={handleOpen}
				whileHover={{ y: -4 }}
				whileTap={{ scale: 0.99 }}
				className="group w-full overflow-hidden rounded-2xl border border-border bg-surface/70 text-left backdrop-blur-sm transition-colors hover:bg-surface"
				aria-label={`Open project details for ${project.title}`}
			>
				<div className="relative overflow-hidden">
					<img
						src={project.imageSrc}
						alt={`${project.title} preview`}
						className="h-48 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03] md:h-56"
					/>

					<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

					<span className="absolute left-3 top-3 rounded-full border border-border bg-surface/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground">
						{project.status}
					</span>

					<span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-night-gradient px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground">
						Details
						<OpenInNewRoundedIcon sx={{ fontSize: 14 }} />
					</span>
				</div>

				<div className="space-y-3 p-4 md:p-5">
					<h3 className="text-xl font-semibold leading-tight text-foreground md:text-2xl">
						{project.title}
					</h3>

					<p className="line-clamp-2 text-sm leading-relaxed text-muted md:text-base">
						{project.description}
					</p>

					<ul className="flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
						{project.stack.slice(0, 4).map((item) => (
							<li
								key={`${project.id}-${item}`}
								className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground"
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</motion.button>



			{/* active/clicked */}
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

					<div className="mt-3 overflow-hidden rounded-xl border border-border">
						<img
							src={project.imageSrc}
							alt={`${project.title} full preview`}
							className="h-auto w-full object-cover"
						/>
					</div>

					<p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
						{project.details}
					</p>

					<div className="mt-4 flex flex-wrap gap-2">
						{project.stack.map((item) => (
							<Chip
								key={`chip-${project.id}-${item}`}
								label={item}
								size="small"
								sx={{
									border: "1px solid var(--color-border)",
									backgroundColor:
										"color-mix(in oklab, var(--color-surface) 80%, transparent 20%)",
									color: "var(--color-foreground)",
								}}
							/>
						))}
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
