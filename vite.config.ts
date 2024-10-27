import { resolve } from 'path'
import { defineConfig, UserConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }): UserConfig => {
  const isExample = mode === 'examples';
  const config: UserConfig = {
    root: isExample ? 'examples' : '.',
    plugins: [
      dts({ include: ['lib'] })
    ],
    build: {
      outDir: isExample ? 'dist' : 'dist-lib',
      emptyOutDir: true,
      rollupOptions: {
        input: isExample 
          ? {
              index: resolve(__dirname, 'examples/index.html'),
              'hello-world': resolve(__dirname, 'examples/hello-world.html'),
            }
          : {
              main: resolve(__dirname, 'lib/main.ts')
            },
        external: isExample ? [] : ['@babylonjs/core', '@babylonjs/core/Debug/debugLayer', '@babylonjs/inspector'],
      },
      target: ['es2020'],
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
