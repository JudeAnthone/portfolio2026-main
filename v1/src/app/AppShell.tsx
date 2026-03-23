import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SectionContainer from "../components/layout/SectionContainer";
import { sectionRoutes } from "./routes";

/**
 * App shell controls page composition:
 * header -> section content -> footer.
 */
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

			<main id="main-content" className="pt-24 md:pt-28">
				{sectionRoutes.map(({ id, Component }) => (
					<SectionContainer key={id} id={id}>
						<Component />
					</SectionContainer>
				))}
			</main>

			<Footer />
		</div>
	);
};

export default AppShell;
