import { useEffect, useState, type ReactNode } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { sectionRoutes, type SectionId } from "../../app/routes";

interface SocialLink {
	label: string;
	href: string;
	icon: ReactNode;
}

const socialLinks: ReadonlyArray<SocialLink> = [
	{
		label: "Instagram",
		href: "https://instagram.com",
		icon: <InstagramIcon fontSize="inherit" />,
	},
	{
		label: "Facebook",
		href: "https://facebook.com",
		icon: <FacebookRoundedIcon fontSize="inherit" />,
	},
	{ label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedInIcon fontSize="inherit" /> },
];

const Header = () => {
	const [activeSection, setActiveSection] = useState<SectionId>(sectionRoutes[0].id);

	useEffect(() => {
		const headerOffset = 130;

		const updateActiveSection = () => {
			let current: SectionId = sectionRoutes[0].id;

			for (const route of sectionRoutes) {
				const sectionElement = document.getElementById(route.id);
				if (!sectionElement) continue;
				if (window.scrollY + headerOffset >= sectionElement.offsetTop) current = route.id;
			}

			setActiveSection((prev) => (prev === current ? prev : current));
		};

		updateActiveSection();
		window.addEventListener("scroll", updateActiveSection, { passive: true });
		window.addEventListener("hashchange", updateActiveSection);

		return () => {
			window.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("hashchange", updateActiveSection);
		};
	}, []);

	return (
		<header className="fixed inset-x-0 top-2 z-50 md:top-4">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-3 md:gap-4 md:px-6">
				<a
					href="#about"
					aria-label="Go to About section"
					className="flex min-w-0 items-center gap-2 rounded-xl border border-border bg-surface/70 px-2 py-2 backdrop-blur-md md:gap-3 md:px-3"
				>
					<img
						src="/logo/logo.v4.png"
						alt="JARD logo"
						className="h-10 w-10 rounded-full object-cover ring-1 ring-border md:h-11 md:w-11"
					/>
					<div className="hidden min-w-0 md:block">
						<p className="truncate text-base font-semibold text-foreground lg:text-lg">
							JARD
						</p>
						<p className="truncate text-xs text-muted lg:text-sm">
							front-end developer | full-stack builder
						</p>
					</div>
				</a>

				<nav
					aria-label="Primary navigation"
					className="mx-auto w-full max-w-md rounded-full border border-border bg-surface/70 px-2 py-2 backdrop-blur-xl shadow-lg shadow-black/30 md:max-w-xl md:px-3"
				>
					<ul className="flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap md:justify-center md:gap-2">
						{sectionRoutes.map((route) => {
							const isActive = activeSection === route.id;

							return (
								<li key={route.id}>
									<a
										href={`#${route.id}`}
										aria-current={isActive ? "page" : undefined}
										className={[
											"inline-flex rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors md:px-4 md:text-sm md:tracking-[0.14em]",
											isActive
												? "bg-accent/30 text-foreground"
												: "text-muted hover:text-foreground",
										].join(" ")}
									>
										{route.label}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>

				<ul className="hidden items-center gap-2 md:flex">
					{socialLinks.map((item) => (
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
										height: 44,
										width: 44,
										borderRadius: "12px",
										border: "1px solid var(--color-border)",
										backgroundColor: "var(--color-surface)",
										color: "var(--color-foreground)",
										fontSize: "1.4rem",
										"&:hover": { backgroundColor: "var(--color-surface-2)" },
									}}
								>
									{item.icon}
								</IconButton>
							</Tooltip>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
