import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0',
    port:3001,
    proxy:{
    '/api': {
    //target: 'http://101.43.206.30:3000/api',
    target: 'http://localhost:8093',
    //target: 'http://101.43.136.80:5000/',
    changeOrigin: true,//允许跨域
    rewrite: (path) => path.replace(/^\/api/, '') //将作为识别用途的/api字符串从
    },
    }
    },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src"),
      "com":path.resolve(__dirname,"src/components")
    }
  },
  css:{
    //css预处理
    preprocessorOptions:{
      scss:{
        //引入varibles.scss全局预定义变量
        additionalData:`@import "./src/styles/variables.scss";`,
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
