import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SectionContainer from "../components/layout/SectionContainer";
import StickyProfileCard from "../components/layout/StickyProfileCard";
import { sectionRoutes } from "./routes";

const AppShell = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
			>
				Skip to main content
			</a>

			<Header />

			<main id="main-content" className="pt-20 pb-8 md:pt-24 lg:pt-28">
				<div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-10">
					{/* Left column: regular flow on mobile, sticky on desktop */}
					<aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-auto">
						<StickyProfileCard />
					</aside>

					{/* Right column: all section content scrolls naturally */}
					<div className="min-w-0">
						{sectionRoutes.map(({ id, Component }) => (
							<SectionContainer key={id} id={id}>
								<Component />
							</SectionContainer>
						))}

						<Footer />
					</div>
				</div>
			</main>
		</div>
	);
};

export default AppShell;
