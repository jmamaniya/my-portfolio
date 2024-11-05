import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const config = defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
});

export default config;
