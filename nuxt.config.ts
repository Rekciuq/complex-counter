import { fileURLToPath } from "url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    display: "swap",
    subsets: "latin",
    families: {
      Montserrat: true,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  ssr: false,
  css: ["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  alias: {
    "@i18n": fileURLToPath(new URL("./i18n/translation", import.meta.url)),
    "@database": fileURLToPath(
      new URL("./public/counters_data.json", import.meta.url)
    ),
  },
});
