import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// to build we may need something like:
// build: {
//   lib: {
//     // Could also be a dictionary or array of multiple entry points
//     entry: resolve(__dirname, 'src/lib/main.ts'),
//     name: 'atlasuikit-v2',
//     // the proper extensions will be added
//     fileName: 'my-lib',
//   },
//   rollupOptions: {
//     // make sure to externalize deps that shouldn't be bundled
//     // into your library
//     external: ['react'],
//     output: {
//       // Provide global variables to use in the UMD build
//       // for externalized deps
//       globals: {
//         react: 'React',
//       },
//     },
//   },
// },
export default defineConfig({
  plugins: [react()],
})
