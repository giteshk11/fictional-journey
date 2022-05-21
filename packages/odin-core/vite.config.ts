import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import Unocss from 'unocss/vite';
// import * as pckg from './package.json';
// import fs from 'fs';
// import path from 'path';
// import typescript from 'rollup-plugin-typescript2';

// const componentsDir = path.resolve(__dirname, 'src', 'components');

// const external = Object.keys(pckg.dependencies);

// const capitalize = (s: string) => {
//     if (typeof s !== 'string') return '';
//     return s.charAt(0).toUpperCase() + s.slice(1);
// };

// const components = fs
//     .readdirSync(componentsDir)
//     .filter(
//         (f: string) =>
//             fs.statSync(path.join(componentsDir, f)).isDirectory() && !f.includes('__tests__'),
//     );

// const globals = {
//     // Provide global variable names to replace your external imports
//     // eg. jquery: '$'
//     vue: 'Vue',
// };
// const mapComponent = (name: string) => {
//     return {
//         input: path.join(componentsDir, `${name}/index.ts`),
//         external,
//         output: {
//             name: capitalize(name),
//             file: `dist/components/${name}/index.js`,
//             exports: 'named',
//             globals,
//         },
//         plugins: [
//             typescript({
//                 typescript: require('typescript'),
//                 tsconfig: path.join(process.cwd(), './tsconfig.json'),
//                 tsconfigOverride: {
//                     compilerOptions: {
//                         declaration: false,
//                         module: 'ESNEXT',
//                         target: 'ES2015',
//                     },
//                     exclude: ['node_modules'],
//                 },
//             }),
//         ],
//     };
// };

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({}), Unocss({})],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'odin-core',
            fileName: (format) => `odin.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'vue',
                },
            },
        },
    },
});

// export default [
//     {
//         input: path.resolve(projectRoot, 'src/mocked.entry.ts'),
//         external,
//         output: {
//             format: 'esm',
//             file: pckg.main,
//         },
//         plugins: [progress({ clearLine: true }), typescript(tsConfig)],
//     },

//     {
//         input: path.resolve(projectRoot, 'src/index.ts'),
//         external,
//         output: {
//             format: 'esm',
//             file: 'dist/index.esm.js',
//         },
//         plugins: [
//             progress({ clearLine: true }),
//             typescript(tsConfig),
//             ...baseConfig.plugins.preVue,
//             commonjs(),
//             vue(vueConfig),
//             terser({ output: { comments: false } }),
//             filesize(),
//             visualizer({
//                 filename: `report/report.html`,
//             }),
//         ],
//     },
//     ...components.map((f) => mapComponent(f)),
// ];
