import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes("node_modules")) return;
					if (id.includes("gsap")) return "dotgrid-vendor";
					if (id.includes("react-icons")) return "icons-vendor";
					if (id.includes("@mui") || id.includes("@emotion")) return "mui-vendor";
					if (id.includes("framer-motion")) return "motion-vendor";
					if (id.includes("react") || id.includes("scheduler")) return "react-vendor";
					return "vendor";
				},
			},
		},
	},
});
