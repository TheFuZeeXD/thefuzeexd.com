import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'
import usePHP from 'vite-plugin-php'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  plugins: [
    react(),
    usePHP({
      entry: './**/*.php',
      proxy: {
        '.*': 'http://localhost:8000'
      }
    })
  ],
  server: {
    port: 3000,
    cors: true,
    strictPort: true
  },
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.php'),
<<<<<<< HEAD
      external: [],
=======
      external: [], 
>>>>>>> 43464bc8670e69a86637ce558e0197b5f857b311
    }
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  assetsInclude: ['**/*.php']
<<<<<<< HEAD
})
=======
})
>>>>>>> 43464bc8670e69a86637ce558e0197b5f857b311
