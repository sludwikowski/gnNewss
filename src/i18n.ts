import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './i18n/en.json'
import plTranslation from './i18n/pl.json'

// Define the resources for each language
const resources = {
  en: { translation: enTranslation },
  pl: { translation: plTranslation },
}

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
