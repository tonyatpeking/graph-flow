import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({ include: ['lib'] })
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'GraphFlow',
            // the proper extensions will be added
            fileName: 'main',
            formats: ['es']
        },
        copyPublicDir: false,
        minify: false,
        sourcemap: true,
        rollupOptions: {
            external: ['@babylonjs/core', '@babylonjs/core/Debug/debugLayer', '@babylonjs/inspector'],
        }
        //     // make sure to externalize deps that shouldn't be bundled
        //     // into your library
        //     external: ['vue'],
        //     output: {
        //         // Provide global variables to use in the UMD build
        //         // for externalized deps
        //         globals: {
        //             vue: 'Vue',
        //         },
        //     },
        // },
    },
})