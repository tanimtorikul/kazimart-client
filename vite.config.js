import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      // Additional Rollup options can be configured here
      input: {
        main: './index.html', // Ensure it points to your main HTML file
      },
    },
  },
});
