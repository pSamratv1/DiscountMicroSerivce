import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import path from "path";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "./",
  server: {
    port: 9004,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: __dirname,
      },
      // assets: path.resolve(__dirname, "./src/assets"),
      // helpers: path.resolve(__dirname, "./src/helpers"),
      // utils: path.resolve(__dirname, "./src/utils"),
      // views: path.resolve(__dirname, "./src/views"),
      // "redux-app": path.resolve(__dirname, "./src/redux-app"),
    ],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: "organization-module",
      filename: "remoteEntry.js",
      exposes: {
        "./RolePage": "./src/views/organization/RolePage",
        "./ButtonTest": "./src/ButtonTest",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
