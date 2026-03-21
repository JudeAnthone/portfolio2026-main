import { sectionRoutes } from "../../app/routes";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
			<div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
				<a href="#about" className="text-sm font-semibold tracking-[0.2em] text-foreground">
					JARD
				</a>

				<nav aria-label="Primary navigation">
					<ul className="flex items-center gap-6 text-sm">
						{sectionRoutes.map((route) => (
							<li key={route.id}>
								<a
									href={`#${route.id}`}
									className="text-muted transition-colors hover:text-foreground"
								>
									{route.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
