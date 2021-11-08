// Guide: https://medium.com/i18n-and-l10n-resources-for-developers/the-ultimate-guide-to-vue-localization-with-vue-i18n-bf98b1d40c65
const supportedLocales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',');

function getBrowserLocale(options = {}) {
    const defaultOptions = { countryCodeOnly: false }

    const opt = { ...defaultOptions, ...options }

    const navigatorLocale =
        navigator.languages !== undefined
            ? navigator.languages[0]
            : navigator.language

    if (!navigatorLocale) {
        return undefined
    }

    const trimmedLocale = opt.countryCodeOnly
        ? navigatorLocale.trim().split(/-|_/)[0]
        : navigatorLocale.trim()

    return trimmedLocale
}

function supportedLocalesInclude(locale) {
    return supportedLocales.includes(locale)
}

export function getStartingLocale() {
    const browserLocale = getBrowserLocale({ countryCodeOnly: true })

    if (supportedLocalesInclude(browserLocale)) {
        return browserLocale
    } else {
        return process.env.VUE_APP_I18N_LOCALE || "en"
    }
}

export function loadLocaleMessages() {
    const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}