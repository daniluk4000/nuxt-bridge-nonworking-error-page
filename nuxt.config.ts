import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
    bridge: {
        vite: false,
    },
    ssr: true,
    target: 'server',
    buildModules: [
        '@nuxt/bridge',
    ],
    telemetry: false,
});