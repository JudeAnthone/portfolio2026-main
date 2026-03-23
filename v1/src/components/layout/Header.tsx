import { useEffect, useState } from "react";
import { sectionRoutes, type SectionId } from "../../app/routes";

/**
 * Fixed header with:
 * - floating nav pill
 * - active section highlight based on scroll position
 * - accessible nav semantics
 */
const Header = () => {
	const [activeSection, setActiveSection] = useState<SectionId>(sectionRoutes[0].id);

	useEffect(() => {
		const headerOffset = 140; // offset for fixed header + top spacing

		const updateActiveSection = () => {
			let current: SectionId = sectionRoutes[0].id;

			for (const route of sectionRoutes) {
				const sectionElement = document.getElementById(route.id);
				if (!sectionElement) continue;

				const sectionTop = sectionElement.offsetTop;
				if (window.scrollY + headerOffset >= sectionTop) {
					current = route.id;
				}
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
		<header className="fixed inset-x-0 top-4 z-50">
			<div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 md:px-6">
				<a
					href="#about"
					aria-label="Go to About section"
					className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-surface/80 backdrop-blur-md"
				>
					<img
						src="/logo/logo.v4.png"
						alt="JARD logo"
						className="h-9 w-9 object-contain"
					/>
				</a>

				<nav
					aria-label="Primary navigation"
					className="mx-auto w-full max-w-5xl rounded-full border border-border bg-surface/80 px-3 py-2 backdrop-blur-xl shadow-lg shadow-black/30"
				>
					<ul className="flex items-center justify-center gap-1 overflow-x-auto md:gap-2">
						{sectionRoutes.map((route) => {
							const isActive = activeSection === route.id;

							return (
								<li key={route.id}>
									<a
										href={`#${route.id}`}
										aria-current={isActive ? "page" : undefined}
										className={[
											"inline-flex rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors",
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
			</div>
		</header>
	);
};

export default Header;
