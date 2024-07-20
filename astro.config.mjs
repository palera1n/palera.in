import { defineConfig } from "astro/config";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [lit()]
});