import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/pages/Home.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        
    ],
    esbuild: {
        jsx: 'automatic',
    },
});