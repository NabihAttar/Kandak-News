'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

export const langToDir = (lng) => (lng === 'ar' ? 'rtl' : 'ltr');

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: 'ar',
      fallbackLng: 'ar',
      supportedLngs: ['ar', 'en'],
      ns: ['common'],
      defaultNS: 'common',
      backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
      detection: { order: ['cookie', 'querystring', 'localStorage', 'navigator'], caches: [] },
      interpolation: { escapeValue: false },
      react: { useSuspense: false }
    });
}

export default i18n;
