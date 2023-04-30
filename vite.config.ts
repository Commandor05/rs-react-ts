/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
      checkProd: false,
      forceBuildInstrument: true,
      include: 'src/*',
      extension: ['.ts', '.tsx', 'js', 'jsx'],
      exclude: ['*.test.tsx', 'setup.ts', '*.cy.tsx', '*.d.ts'],
    }),
  ],

  build: {
    minify: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: true,
  },
});
