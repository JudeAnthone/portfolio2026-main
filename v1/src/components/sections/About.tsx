import React from "react";
import { aboutData } from "../../data/about";

const About = () => {
	// Defensive check for future dynamic data usage.
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
		<article aria-labelledby="about-title" className="space-y-5 md:space-y-7">
			<header className="space-y-3">
				<p className="inline-flex rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
					{aboutData.tagline}
				</p>

				<h2
					id="about-title"
					className="text-2xl font-semibold leading-tight text-foreground md:text-4xl"
				>
					Building modern products with clean code and strong UX foundations.
				</h2>
			</header>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
				{/* Left content block */}
				<section className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:col-span-7 md:p-6">
					<p className="text-base font-medium text-foreground md:text-lg">
						{aboutData.intro}
					</p>

					<p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
						{aboutData.description}
					</p>

					<div className="mt-4 flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:gap-4">
						<span>
							<span className="text-foreground">Location:</span> {aboutData.location}
						</span>
						<span className="hidden md:inline text-border">•</span>
						<span>
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

				{/* Right metrics block */}
				<aside className="space-y-3 md:col-span-5">
					{hasMetrics ? (
						aboutData.metrics.map((metric) => (
							<div
								key={metric.label}
								className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
							>
								<p className="text-xs uppercase tracking-[0.12em] text-muted">
									{metric.label}
								</p>
								<p className="mt-1 text-sm font-semibold text-foreground md:text-base">
									{metric.value}
								</p>
							</div>
						))
					) : (
						<div className="rounded-2xl border border-border bg-surface/70 p-4">
							<p className="text-sm text-muted">No metrics available yet.</p>
						</div>
					)}
				</aside>
			</div>
		</article>
	);
};

export default About;
