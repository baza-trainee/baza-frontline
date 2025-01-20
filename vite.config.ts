import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'webp',
        quality: '80',
        w: '0;640;828;1200;1920',
        as: 'picture',
      }),
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Increase size limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router', 'react-helmet-async'],
          ui: ['react-slick', 'react-icons', 'react-fast-marquee'],
          utils: ['clsx', 'tailwind-merge'],
        },
      },
    },
    assetsInlineLimit: 4096, // Only inline assets smaller than 4kb
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
