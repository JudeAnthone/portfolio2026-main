import { useEffect, useId, useState, type ReactNode } from "react";
import WebIcon from "@mui/icons-material/Web";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import HandymanIcon from "@mui/icons-material/Handyman";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
	SiAxios,
	SiAuth0,
	SiCplusplus,
	SiDocker,
	SiExpress,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiHtml5,
	SiJavascript,
	SiJupyter,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiPostgresql,
	SiPycharm,
	SiReact,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiVite,
	SiPython,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { DiJava, DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { skillsData, type SkillCategoryKey } from "../../data/skills";
import { SectionHeader } from "../layout/SectionContainer";
import { containerVariants, itemVariants } from "../../lib/animations";

interface CategoryIconMap {
	[key: string]: ReactNode;
}

interface SkillLogoMeta {
	icon: IconType;
	color: string;
}

const categoryIcons: CategoryIconMap = {
	frontend: <WebIcon fontSize="inherit" />,
	backend: <DnsIcon fontSize="inherit" />,
	database: <StorageIcon fontSize="inherit" />,
	tools: <HandymanIcon fontSize="inherit" />,
	"devops-cloud": <CloudQueueIcon fontSize="inherit" />,
};

const getCategoryIcon = (key: SkillCategoryKey): ReactNode => {
	return categoryIcons[key] ?? <CheckCircleRoundedIcon fontSize="inherit" />;
};

const skillLogoMap: Record<string, SkillLogoMeta> = {
	React: { icon: SiReact, color: "#61DAFB" },
	JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
	TypeScript: { icon: SiTypescript, color: "#3178C6" },
	HTML: { icon: SiHtml5, color: "#E34F26" },
	CSS: { icon: FaCss3Alt, color: "#1572B6" },
	Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
	Axios: { icon: SiAxios, color: "#5A29E4" },
	Vite: { icon: SiVite, color: "#646CFF" },
	"Styled Components": { icon: SiStyledcomponents, color: "#DB7093" },

	"Node.js": { icon: SiNodedotjs, color: "#339933" },
	"Express.js": { icon: SiExpress, color: "#F3F4F4" },
	Java: { icon: DiJava, color: "#EA2D2E" },
	Python: { icon: SiPython, color: "#3776AB" },
	"C++": { icon: SiCplusplus, color: "#00599C" },
	JWT: { icon: SiAuth0, color: "#EB5424" },
	OAUTH: { icon: TbBrandOauth, color: "#F3F4F4" },

	PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
	MySQL: { icon: SiMysql, color: "#4479A1" },
	MongoDB: { icon: SiMongodb, color: "#47A248" },

	Git: { icon: SiGit, color: "#F05032" },
	GitHub: { icon: SiGithub, color: "#F3F4F4" },
	"VS Code": { icon: BiLogoVisualStudio, color: "#007ACC" },
	"Visual Studio": { icon: DiVisualstudio, color: "#5C2D91" },
	PyCharm: { icon: SiPycharm, color: "#21D789" },
	"Jupyter Notebook": { icon: SiJupyter, color: "#F37626" },
	Docker: { icon: SiDocker, color: "#2496ED" },
	"CI/CD": { icon: SiGithubactions, color: "#2088FF" },
};

const logoTileBaseClass =
	"inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-2 text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-surface sm:h-10 sm:w-10 md:h-11 md:w-11 md:rounded-lg";

interface SkillTileProps {
	item: string;
	Logo: IconType | undefined;
	logoColor: string;
	isActive: boolean;
	onTap: () => void;
}

const SkillTile = ({ item, Logo, logoColor, isActive, onTap }: SkillTileProps) => {
	const [hovered, setHovered] = useState(false);
	const tipId = useId();
	const show = hovered || isActive;

	return (
		<div className="relative">
			<motion.span
				variants={itemVariants}
				whileHover={{ y: -2, scale: 1.04 }}
				onClick={(event) => {
					event.stopPropagation();
					onTap();
				}}
				onMouseEnter={() => {
					if (window.matchMedia("(hover: hover)").matches) setHovered(true);
				}}
				onMouseLeave={() => setHovered(false)}
				className={logoTileBaseClass}
				aria-label={item}
				aria-describedby={show ? tipId : undefined}
				style={{ color: logoColor }}
			>
				{Logo ? (
					<Logo className="text-[1.15rem] md:text-[1.25rem]" />
				) : (
					<CheckCircleRoundedIcon fontSize="small" />
				)}
				<span className="sr-only">{item}</span>
			</motion.span>

			<div
				id={tipId}
				role="tooltip"
				className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-foreground shadow-lg transition duration-150 ${
					show ? "visible opacity-100" : "invisible opacity-0"
				}`}
			>
				{item}
			</div>
		</div>
	);
};

const Skills = () => {
	const [activeSkill, setActiveSkill] = useState<string | null>(null);

	useEffect(() => {
		const handleDocumentClick = () => setActiveSkill(null);
		document.addEventListener("click", handleDocumentClick);
		return () => document.removeEventListener("click", handleDocumentClick);
	}, []);

	return (
		<motion.article
			aria-labelledby="skills-title"
			className="space-y-6 md:space-y-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.12 }}
		>
			<motion.div variants={itemVariants}>
				<SectionHeader
					id="skills-title"
					tag="/02 Skills"
					lines={["Tools", "Of The Trade."]}
					description="Technologies I use to build, ship, and maintain modern web products."
				/>
			</motion.div>

			<section
				aria-label="Skill categories"
				className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"
			>
				{skillsData.map((category) => (
					<motion.div
						key={category.key}
						variants={itemVariants}
						className="rounded-md border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
					>
						<div className="mb-3 flex items-center gap-2">
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-2 text-lg text-foreground">
								{getCategoryIcon(category.key)}
							</span>
							<h3 className="text-sm font-semibold text-foreground sm:text-base md:text-lg">
								{category.title}
							</h3>
						</div>

						<ul className="flex flex-wrap gap-1.5 sm:gap-2">
							{category.items.map((item) => {
								const logoMeta = skillLogoMap[item];
								const Logo = logoMeta?.icon;
								const logoColor = logoMeta?.color ?? "#F3F4F4";
								const skillKey = category.key + "-" + item;

								return (
									<li key={skillKey}>
										<SkillTile
											item={item}
											Logo={Logo}
											logoColor={logoColor}
											isActive={activeSkill === skillKey}
											onTap={() => {
												setActiveSkill((prev) =>
													prev === skillKey ? null : skillKey,
												);
											}}
										/>
									</li>
								);
							})}
						</ul>
					</motion.div>
				))}
			</section>
		</motion.article>
	);
};

export default Skills;
