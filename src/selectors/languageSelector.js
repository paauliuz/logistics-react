import { english, lithuanian } from '../languages/languages'

const languageSelector = (languageCode) => {
    if (languageCode === 'en') {
        return english
    } else {
        return lithuanian
    }
}

export { languageSelector as default }