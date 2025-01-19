import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json' with { type: 'json' };

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'translation',
});
