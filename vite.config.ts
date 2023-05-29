import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 消除node错误提示，需要安装 npm i -D @types/node
import { visualizer } from 'rollup-plugin-visualizer' //查看生成stats打包视图
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  VantResolve,
  ElementPlusResolve,
  NutuiResolve,
  AntdResolve,
} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel:{
        /**
         *  如果你有js文件中用到了jsx语法，请使用这个插件，然后组件的头部引入
         *  import React from 'react'
         */ 
        // plugins:['@babel/plugin-transform-react-jsx']
      }
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    }),
    createStyleImportPlugin({
      resolves: [
        AndDesignVueResolve(),
        VantResolve(),
        ElementPlusResolve(),
        NutuiResolve(),
        AntdResolve(),
      ],
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => {
            if (name !== 'theme') {
              return `antd/es/${name}/style/index`
            }
          },
        },
      ],
    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] //导入时想要忽略的扩展名列表
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix'
    },
    preprocessorOptions: {
      less: {
        // 由于antd5摒弃了less，完全采用了css in js，所以网上的配置这个达到修改antd ui主色的是走不通的
      }
    }
  },
  server: {
    // 服务端口
    port: 3020,
    // 主机 解决vite use--host to expose
    host: '0.0.0.0',
    // 自动打开浏览器,由于每次启动都会弹出，所以这个可以适当的关闭
    open: false,
    cors: true
    // https: false,
    // 代理跨域（mock 不需要配置，这里只是个事列）
    // proxy: {
    //   '/api': {
    //     target: 'https://mock.xx.com/mock/x', // easymock
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // },
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 1500
  },
})
