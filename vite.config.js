import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  // Served from https://<user>.github.io/carewell-clinic/ on GitHub Pages
  base: process.env.GITHUB_PAGES ? "/carewell-clinic/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
