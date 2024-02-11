import { defineConfig } from 'vite'

export default defineConfig({
    root: './',
    publicDir: "./public/",
    base: './',
    server:
    {
        host: true,
        open: true
    },
    build:
    {
        outDir: "./dist",
        emptyOutDir: true,
        sourcemap: true
    }
})