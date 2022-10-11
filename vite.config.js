import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/sass/abstracts/_variables.scss";
          @import "./src/assets/sass/abstracts/_mixins.scss";
          @import "./src/assets/sass/abstracts/_extends.scss";
          @import "./src/assets/sass/abstracts/_function.scss";
        `,
      },
    },
  },
});
