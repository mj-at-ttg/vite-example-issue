import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	build: {
		minify: false,
		manifest: true,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				"site.js": "./src/index.tsx",
			},
		},
	},
	plugins: [react()],
});
