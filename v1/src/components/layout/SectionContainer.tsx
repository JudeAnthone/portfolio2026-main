import type { PropsWithChildren } from "react";

interface SectionContainerProps extends PropsWithChildren {
	id: string;
	className?: string;
}

// Reusable section wrapper for consistent max-width, spacing, and anchors.
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

export default SectionContainer;
