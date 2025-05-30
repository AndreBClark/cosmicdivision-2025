import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains"
      },
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter"
      }
    ]
  },
	vite: {
		plugins: [tailwindcss()],
	},
});