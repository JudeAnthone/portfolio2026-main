import { lazy, Suspense, useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SectionContainer from "../components/layout/SectionContainer";
import StickyProfileCard from "../components/layout/StickyProfileCard";
import { sectionRoutes } from "./routes";

const DotGrid = lazy(() => import("../components/ui/DotGrid"));

const DotGridBackground = () => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 1024px)");
		const update = () => setIsDesktop(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	if (!isDesktop) return null;

	return (
		<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-70">
			<Suspense fallback={null}>
				<DotGrid
					className="h-full w-full"
					dotSize={5}
					gap={15}
					baseColor="#271E37"
					activeColor="#5227FF"
					proximity={120}
					shockRadius={250}
					shockStrength={5}
					resistance={750}
					returnDuration={1.5}
				/>
			</Suspense>
		</div>
	);
};

const AppShell = () => {
	return (
		<div className="relative isolate min-h-screen bg-background text-foreground">
			<DotGridBackground />

			<div className="relative z-10">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
				>
					Skip to main content
				</a>

				<Header />

				<main id="main-content" className="pb-24 pt-4 md:pb-8 md:pt-20 lg:pt-24">
					<div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
						<div
							className="
                                grid grid-cols-1 gap-4
                                md:gap-8
                                lg:grid-cols-[300px_minmax(0,740px)]
                                lg:justify-center
                                lg:items-start
                                lg:gap-8
                                xl:grid-cols-[320px_minmax(0,780px)]
                            "
						>
							<aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-auto">
								<StickyProfileCard />
							</aside>

							<div className="min-w-0">
								{sectionRoutes.map(({ id, Component }) => (
									<SectionContainer key={id} id={id}>
										<Component />
									</SectionContainer>
								))}
								<Footer />
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default AppShell;
