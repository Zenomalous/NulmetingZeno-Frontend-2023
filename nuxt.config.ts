console.log('API Key in nuxt.config.js:', process.env.API_KEY);

export default defineNuxtConfig({
  css: ["@/assets/app.scss"],

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      }
    ],
    "nuxt-icons"
  ],

  imports: {
    dirs: ["stores"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_breakpoints.scss" as *;',
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY || '',
    },
  },

  compatibilityDate: "2024-08-01"
});
