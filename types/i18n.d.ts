import en from "../i18n/translation/en.json";

declare module "vue-i18n" {
  interface VueI18n {
    t(key: keyof typeof en): string;
  }
}
