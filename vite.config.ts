import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import * as packageJson from "./package.json";

// https://vitejs.dev/config/s
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    dts({
      include: ["src/"],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      // formats: ["es", "cjs"],
      name: "toyda-react-shared-components",
      // fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
