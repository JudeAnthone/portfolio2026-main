import { useEffect, useState } from "react";
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
		<header className="fixed inset-x-0 top-2 z-50 md:top-4">
			<div className="mx-auto w-full max-w-7xl px-3 md:px-6">
				<nav
					aria-label="Primary navigation"
					className="mx-auto w-full max-w-md rounded-full border border-border bg-surface/70 px-2 py-2 backdrop-blur-sm shadow-lg shadow-black/30 md:max-w-xl md:px-3"
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
												? "bg-night-gradient text-foreground"
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
			</div>
		</header>
	);
};

export default Header;
