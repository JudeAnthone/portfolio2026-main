import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SectionContainer from "../components/layout/SectionContainer";
import StickyProfileCard from "../components/layout/StickyProfileCard";
import DotGrid from "../components/ui/DotGrid";
import { sectionRoutes } from "./routes";

const AppShell = () => {
    return (
        <div className="relative isolate min-h-screen bg-background text-foreground">
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-70">
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
            </div>

            <div className="relative z-10">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
                >
                    Skip to main content
                </a>

                <Header />

                <main id="main-content" className="pt-20 pb-8 md:pt-24 lg:pt-28">
                    <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-10">
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
                </main>
            </div>
        </div>
    );
};

export default AppShell;
