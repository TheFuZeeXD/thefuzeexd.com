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
      // Базовый путь к PHP файлам
      entry: './**/*.php',
      // Настройки прокси для PHP сервера
      proxy: {
        '.*': 'http://localhost:8000' // или ваш PHP сервер
      }
    })
  ],
   server: {
    port: 3000,
    // Настройки для работы с PHP
    cors: true,
    strictPort: true
  },
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
        rollupOptions: {
      input: './index.html', // используйте index.html для сборки
      external: [/\.php$/] // игнорировать PHP файлы
    },
    rollupOptions: {
      input: path.resolve(__dirname, 'index.php'),
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },

  assetsInclude: ['**/*.php'],
    optimizeDeps: {
    exclude: ['**/*.php']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
