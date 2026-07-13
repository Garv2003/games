import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const manifestForPlugIn: Partial<VitePWAOptions> = {
  includeAssets: ['favicon.ico'],
  manifest: {
    name: "Tic Tac Toe",
    short_name: "Tic Tac Toe",
    description: "Play Tic Tac Toe with your friends",
    icons: [{
      src: '/vite.svg',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/vite.svg',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/vite.svg',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: '/vite.svg',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }

    ],
    theme_color: '#000',
    background_color: '#000',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait',
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,jpg,svg,ttf,mp3}'],
  },
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true,
  },
}

export default defineConfig({
  plugins: [
    solid(),
    VitePWA(manifestForPlugIn)
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
