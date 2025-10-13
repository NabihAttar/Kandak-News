// "use client";

// import { I18nextProvider } from "react-i18next";
// import i18n from "../i18n/config";

// export default function I18nProvider({ children }) {
//   return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
// }
 
// "use client";

// import i18n from "i18next";
// import { I18nextProvider, initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// // Init i18n ONCE (uses the i18next singleton)
// if (!i18n.isInitialized) {
//   i18n
//     .use(HttpBackend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//       lng: "ar",
//       fallbackLng: "ar",
//       supportedLngs: ["ar", "en"],
//       ns: ["common"],
//       defaultNS: "common",
//       backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
//       detection: { order: ["cookie", "querystring", "localStorage", "navigator"], caches: [] },
//       interpolation: { escapeValue: false },
//       react: {
//         useSuspense: false,
//         bindI18n: "languageChanged loaded",
//         bindI18nStore: "added removed",
//       },
//     });
// }

// export default function I18nProvider({ children }) {
//   return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
// }

"use client";

import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// read preferred language from localStorage on the client
const getInitialLang = () => {
  if (typeof window === "undefined") return "ar";
  return localStorage.getItem("lang") || "ar";
};

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      // start from localStorage (falls back to 'ar')
      lng: getInitialLang(),
      fallbackLng: "ar",
      supportedLngs: ["ar", "en"],
      ns: ["common"],
      defaultNS: "common",
      backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
      detection: {
        // prefer localStorage, then cookie, then others
        order: ["localStorage", "cookie", "querystring", "navigator"],
        lookupLocalStorage: "lang",
        caches: [], // we set localStorage/cookie ourselves
      },
      interpolation: { escapeValue: false },
      react: {
        useSuspense: false,
        bindI18n: "languageChanged loaded",
        bindI18nStore: "added removed",
      },
    });
}

export default function I18nProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
