import type { PropsWithChildren } from "react";

interface SectionContainerProps extends PropsWithChildren {
	id: string;
	className?: string;
}
interface SectionHeaderProps {
	id: string;
	tag: string;
	lines: [string, ...string[]];
	description?: string;
}

const SectionContainer = ({ id, className = "", children }: SectionContainerProps) => {
	return (
		<section
			id={id}
			className={`scroll-mt-24 border-b border-border py-16 md:py-24 ${className}`}
		>
			<div className="mx-auto w-full max-w-6xl px-4 md:px-8">{children}</div>
		</section>
	);
};

export const SectionHeader = ({ id, tag, lines, description }: SectionHeaderProps) => {
	return (
		<header className="space-y-3">
			<p className="inline-flex rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
				{tag}
			</p>

			<h2 id={id} className="space-y-1">
				{lines.map((line, index) => {
					const isLast = index === lines.length - 1;

					return (
						<span
							key={`${id}-line-${index}`}
							className={[
								"block text-3xl font-semibold uppercase leading-[1.02] tracking-tight md:text-5xl",
								isLast
									? "bg-night-gradient bg-clip-text text-transparent"
									: "text-foreground",
							].join(" ")}
						>
							{line}
						</span>
					);
				})}
			</h2>

			{description ? (
				<p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
					{description}
				</p>
			) : null}
		</header>
	);
};

export default SectionContainer;
