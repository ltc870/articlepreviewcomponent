import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
    base: "/articlepreviewcomponent/",
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
});
