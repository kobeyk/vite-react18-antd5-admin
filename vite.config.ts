import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path' // 消除node错误提示，需要安装 npm i -D @types/node
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    // 配置别名
    alias:{
      '@':path.resolve(__dirname,'src')
    },
    extensions:['.js','.jsx', '.ts', '.tsx', '.json'] //导入时想要忽略的扩展名列表
  },
  css:{
    preprocessorOptions:{
      less: {
        javascriptEnabled: true,
        modifyVars: { // 更改主题在这里
          // 'primary-color': '#52c41a',
          'primary-color': 'orange',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        
      }
    }
  },
  server:{
    // 服务端口
    port:3020,
    // 主机 解决vite use--host to expose
    host:'0.0.0.0',
    // 自动打开浏览器
    open:false,
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
})
