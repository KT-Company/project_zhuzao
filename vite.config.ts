import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true,
    // 代理
    proxy: {
      "/api": {
        target: "http://101.200.140.188:8090/WebService.asmx",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.type === "asset" &&
            /\.(jpe?g|png|gif|svg|webp)$/i.test(assetInfo.name)
          ) {
            return "static/img/[name].[hash][ext]";
          }
          if (
            assetInfo.type === "asset" &&
            /\.(ttf|woff|woff2|eot)$/i.test(assetInfo.name)
          ) {
            return "static/fonts/[name].[hash][ext]";
          }
          return "static/[ext]/name1-[hash].[ext]";
        },
      },
    },
  },
});
