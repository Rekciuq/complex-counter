import en from "@i18n/en.json";
import "./types/i18n.d.ts";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  defaultLocale: "en",
  messages: { en },
}));
