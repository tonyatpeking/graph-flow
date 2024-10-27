import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  const isExample = mode === 'examples';
  return {
    root: isExample ? 'examples' : '.',
    plugins: [
      dts({ include: ['lib'] })
    ],
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: isExample 
          ? {
              index: resolve(__dirname, 'examples/index.html'),
              'hello-world': resolve(__dirname, 'examples/hello-world.html'),
              // Add other example pages here
            }
          : {
              main: resolve(__dirname, 'lib/main.ts')
            },
        external: isExample ? [] : ['@babylonjs/core', '@babylonjs/core/Debug/debugLayer', '@babylonjs/inspector'],
      },
      lib: isExample ? undefined : {
        entry: resolve(__dirname, 'lib/main.ts'),
        name: 'GraphFlow',
        fileName: 'main',
        formats: ['es', 'umd']
      },
    },
  }
})
