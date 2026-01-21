import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
    plugins: [vue({
        reactivityTransform: true
    })],
    base: "",
    build: {
        assetsDir: "./"
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/styles/_variables";

                    @import "bootstrap/scss/functions";
                    @import "bootstrap/scss/variables";
                    @import "bootstrap/scss/mixins";
                `
            }
        }
    }
})