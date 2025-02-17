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
  },
  build: {
    //打包文件名称
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
})
