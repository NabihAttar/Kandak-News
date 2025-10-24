"use client";

import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18n with language from URL params
export default function LangI18nProvider({ children, lang }) {
  if (!i18n.isInitialized) {
    i18n
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        lng: lang,
        fallbackLng: "ar",
        supportedLngs: ["ar", "en"],
        ns: ["common"],
        defaultNS: "common",
        backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
        detection: {
          order: ["path", "localStorage", "cookie", "querystring", "navigator"],
          lookupLocalStorage: "lang",
          caches: [],
        },
        interpolation: { escapeValue: false },
        react: {
          useSuspense: false,
          bindI18n: "languageChanged loaded",
          bindI18nStore: "added removed",
        },
      });
  } else {
    // Update language if it changed
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
