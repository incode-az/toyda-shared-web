import react from '@vitejs/plugin-react';
import { globSync } from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import * as packageJson from './package.json';

function prepareEntry() {
  const entry = globSync('src/**/index.ts');

  return entry.reduce((acc, modulePath) => {
    const updatedModulePath = modulePath.replace('src/', '').replace('src\\', '').replace('.ts', '');

    return {
      ...acc,
      [updatedModulePath]: modulePath,
    };
  }, {});
}

// eslint-disable-next-line no-console
console.log(prepareEntry());

// https://vitejs.dev/config/s
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    dts({
      include: ['src/'],
    }),
  ],
  build: {
    lib: {
      entry: prepareEntry(),
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
