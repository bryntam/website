import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        apps: new URL('./apps/index.html', import.meta.url).pathname,
        'cart-scan': new URL('./apps/cart-scan/index.html', import.meta.url).pathname,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
