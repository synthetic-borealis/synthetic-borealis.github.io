import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json' with { type: 'json' };
import he from './he.json' with { type: 'json' };

function configureI18n(lng: string) {
  return i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      he: {
        translation: he,
      },
    },
    lng,
    fallbackLng: 'en',
    defaultNS: 'translation',
  });
}

export default { configureI18n };
