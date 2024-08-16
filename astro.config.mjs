import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  site: "https://renekaesler.github.io",
  base: "stride-astro-theme",
  trailingSlash: "never",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
  },
  integrations: [
    AutoImport({
      imports: ["./src/components/bootstrap/Button.astro"],
    }),
    mdx(),
  ],
});
