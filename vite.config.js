import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        '@recycle': path.resolve(__dirname, './src/components/recycle'),
        '@content': path.resolve(__dirname, './src/components/content'),
        '@header': path.resolve(__dirname, './src/components/header'),
        '@footer': path.resolve(__dirname, './src/components/footer'),
        '@public': path.resolve(__dirname, './public')
      }
    },
    root: resolve(__dirname, 'src'),
    build: {
      outDir: '../dist'
    },
    server: {
      host: `${env.VITE_IP_CONFIG}`,
      port: 8080
    },
    // Optional: Silence Sass deprecation warnings. See note below.
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
      },
    },
  }
})
