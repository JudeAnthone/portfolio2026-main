import { useEffect, useState } from "react";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { motion } from "framer-motion";
import { sectionRoutes, type SectionId } from "../../app/routes";

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
		<motion.header
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: 0.35,
				ease: [0.22, 1, 0.36, 1],
				delay: 0.1,
			}}
			className="fixed inset-x-0 bottom-0 z-50 md:bottom-auto md:top-4"
		>
			<div className="mx-auto w-full max-w-7xl px-3 md:px-6">
				<nav
					aria-label="Primary navigation"
					className="mx-auto w-full max-w-md rounded-t-2xl border-x border-t border-border bg-surface/90 px-2 py-3 backdrop-blur-xl md:max-w-xl md:rounded-full md:border md:px-3 md:py-2 md:bg-surface/70 md:shadow-lg md:shadow-black/30"
				>
					<ul className="flex items-center justify-center gap-1 md:gap-2">
						{sectionRoutes.map((route) => {
							const isActive = activeSection === route.id;

							return (
								<li key={route.id}>
									<a
										href={`#${route.id}`}
										aria-current={isActive ? "page" : undefined}
										className={[
											"inline-flex rounded-full px-2 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] transition-colors md:px-4 md:py-2 md:text-sm md:tracking-[0.14em]",
											isActive
												? "bg-night-gradient text-foreground"
												: "text-muted hover:text-foreground",
										].join(" ")}
									>
										{route.label}
									</a>
								</li>
							);
						})}
						<li key="resume">
							<a
								href="/resume/JUDE-CV-READY.2.pdf"
								download="Jude-Duarte-Resume.pdf"
								aria-label="Download resume"
								className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-muted transition-colors hover:text-foreground md:px-4 md:py-2 md:text-sm md:tracking-[0.14em]"
							>
								<DownloadRoundedIcon className="text-xs md:text-sm" />
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</motion.header>
	);
};

export default Header;
