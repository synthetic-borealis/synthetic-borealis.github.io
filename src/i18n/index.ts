import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json' with { type: 'json' };

function configureI18n(lng: string) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
    },
    lng,
    fallbackLng: 'en',
    defaultNS: 'translation',
  });
}

export default { configureI18n };
