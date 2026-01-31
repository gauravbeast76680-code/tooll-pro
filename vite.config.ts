import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    base: './', // Ensures assets are loaded correctly on GitHub Pages
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || ''),
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      target: 'esnext',
      chunkSizeWarningLimit: 1000
    }
  };
});