import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translations from './locales/translation/pt-BR';

const i18nConfig = {
  resources: {
    'pt-BR': {
      translation: translations,
    },
  },
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  defaultNS: 'translation',
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
