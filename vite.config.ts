import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.3.88: 8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
          // '^/echarts': ''
        
      }
    }
  }
})
