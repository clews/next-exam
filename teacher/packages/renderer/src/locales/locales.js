import {createI18n} from 'vue-i18n'
//import { createI18n } from 'vue-i18n'

import en from './en.json'
import de from './de.json'
import fr from './fr.json'

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    legacy: false,
    messages: {
        en,
        de,
        fr,
    }
})

export default i18n




