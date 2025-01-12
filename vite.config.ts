import { resolve } from 'path'
import { defineConfig, UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig(({ mode }): UserConfig => {
  const isExample = mode === 'examples' || mode === 'github-pages';
  const isGithubPages = mode === 'github-pages';
  const config: UserConfig = {
    base: isGithubPages ? '/graph-flow/' : '/',
    root: isExample ? 'examples' : '.',
    plugins: [
      dts({ include: ['lib'] }), topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: "__tla",
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: i => `__tla_${i}`
      })
    ],
    build: {
      outDir: isExample ? 'dist-examples' : 'dist-lib',
      emptyOutDir: true,
      rollupOptions: {
        input: isExample
          ? {
            // Entry point for the main example page at examples/index.html
            index: resolve(__dirname, 'examples/index.html'),
            'hello-world': resolve(__dirname, 'examples/hello-world.html'),
          }
          : {
            main: resolve(__dirname, 'lib/main.ts')
          },
        external: isExample ? [] : ['@babylonjs/core', '@babylonjs/core/Debug/debugLayer', '@babylonjs/inspector'],
      },
      target: ['es2022'],  // Changed from es2020 to es2022
    },
  };

  if (!isExample) {
    config.build!.lib = {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'GraphFlow',
      fileName: 'main',
      formats: ['es', 'umd']
    };
  }

  return config;
});
