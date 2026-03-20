import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
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
