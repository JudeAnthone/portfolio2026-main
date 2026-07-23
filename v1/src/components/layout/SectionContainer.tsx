import type { PropsWithChildren } from "react";
import { motion, type Variants } from "framer-motion";

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

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const SectionContainer = ({ id, className = "", children }: SectionContainerProps) => {
	return (
		<motion.section
			id={id}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			className={[
				"scroll-mt-4 border-b border-border md:scroll-mt-24",
				"py-6 md:py-14",
				"first:pt-2 md:first:pt-6",
				"last:border-b-0 last:pb-6 md:last:pb-10",
				className,
			].join(" ")}
		>
			<div className="mx-auto w-full max-w-6xl px-2 md:px-8">{children}</div>
		</motion.section>
	);
};

export const SectionHeader = ({ id, tag, lines, description }: SectionHeaderProps) => {
	const headerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const lineVariants: Variants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	return (
		<motion.header
			className="space-y-2 md:space-y-3"
			variants={headerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.p
				variants={lineVariants}
				className="inline-flex rounded-full border border-border bg-surface/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted md:px-3 md:text-xs md:tracking-[0.14em]"
			>
				{tag}
			</motion.p>

			<h2 id={id} className="space-y-1">
				{lines.map((line, index) => {
					const isLast = index === lines.length - 1;

					return (
						<motion.span
							key={`${id}-line-${index}`}
							variants={lineVariants}
							className={[
								"block text-2xl font-semibold uppercase leading-[1.02] tracking-tight md:text-5xl",
								isLast
									? "bg-night-gradient bg-clip-text text-[#555555]"
									: "text-foreground",
							].join(" ")}
						>
							{line}
						</motion.span>
					);
				})}
			</h2>

			{description ? (
				<motion.p
					variants={lineVariants}
					className="max-w-2xl text-xs leading-relaxed text-muted md:text-sm md:text-base"
				>
					{description}
				</motion.p>
			) : null}
		</motion.header>
	);
};

export default SectionContainer;
