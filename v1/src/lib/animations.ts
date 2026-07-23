import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.05,
		},
	},
};

export const itemVariants: Variants = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const letterVariants: Variants = {
	hidden: { opacity: 0, y: 20, rotateX: -90 },
	show: (i: number) => ({
		opacity: 1,
		y: 0,
		rotateX: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
			delay: i * 0.03,
		},
	}),
};

export const pulseAnimation = {
	scale: [1, 1.02, 1],
	transition: {
		duration: 3,
		repeat: Infinity,
		ease: "easeInOut",
	},
};

export const floatAnimation = {
	y: [0, -8, 0],
	transition: {
		duration: 4,
		repeat: Infinity,
		ease: "easeInOut",
	},
};
