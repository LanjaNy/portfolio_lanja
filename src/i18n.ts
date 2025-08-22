"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        common: require("../public/locales/fr/common.json"),
      },
      en: {
        common: require("../public/locales/en/common.json"),
      },
    },
  });

export default i18n;
