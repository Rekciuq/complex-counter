import { fileURLToPath } from "url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  alias: {
    "@i18n": fileURLToPath(new URL("./i18n/translation", import.meta.url)),
    "@database": fileURLToPath(
      new URL("./public/counters_data.json", import.meta.url)
    ),
  },
});
