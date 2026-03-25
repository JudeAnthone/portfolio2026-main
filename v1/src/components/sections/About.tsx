import { aboutData } from "../../data/about";

const About = () => {
	if (!aboutData) {
		return (
			<article aria-labelledby="about-title" className="space-y-3">
				<h2 id="about-title" className="text-2xl font-semibold text-foreground md:text-4xl">
					About
				</h2>
				<p className="text-sm text-muted">About information is currently unavailable.</p>
			</article>
		);
	}

	const hasHighlights = aboutData.stackHighlights.length > 0;
	const hasMetrics = aboutData.metrics.length > 0;

	return (
		<article aria-labelledby="about-title" className="space-y-6 md:space-y-8">
			<header className="space-y-3">
				<p className="inline-flex rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
					{aboutData.tagline}
				</p>

				<div className="space-y-1">
					<h2
						id="about-title"
						className="text-3xl font-semibold uppercase leading-[1.02] tracking-tight text-foreground md:text-5xl"
					>
						Crafting Digital
					</h2>
					<p className="bg-night-gradient bg-clip-text text-3xl font-semibold uppercase leading-[1.02] tracking-tight text-transparent md:text-5xl">
						Experiences
					</p>
				</div>

				<p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
					{aboutData.intro}
				</p>
			</header>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
				<section className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-8 md:p-6">
					<h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
						Profile Summary
					</h3>

					<p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
						{aboutData.description}
					</p>

					<div className="mt-5 flex flex-wrap gap-2 text-sm">
						<span className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-muted">
							<span className="text-foreground">Location:</span> {aboutData.location}
						</span>
						<span className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-muted">
							<span className="text-foreground">Status:</span>{" "}
							{aboutData.availability}
						</span>
					</div>

					{hasHighlights && (
						<ul
							className="mt-5 flex flex-wrap gap-2"
							aria-label="Technology highlights"
						>
							{aboutData.stackHighlights.map((item) => (
								<li
									key={item}
									className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground md:text-sm"
								>
									{item}
								</li>
							))}
						</ul>
					)}
				</section>

				<aside className="space-y-3 md:col-span-4">
					{hasMetrics ? (
						aboutData.metrics.map((metric, index) => (
							<div
								key={metric.label}
								className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
							>
								<p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
									0{index + 1}
								</p>
								<p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
									{metric.label}
								</p>
								<p className="mt-1 text-sm font-semibold text-foreground md:text-base">
									{metric.value}
								</p>
							</div>
						))
					) : (
						<div className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm">
							<p className="text-sm text-muted">No metrics available yet.</p>
						</div>
					)}
				</aside>
			</div>
		</article>
	);
};

export default About;
