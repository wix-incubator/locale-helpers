'use strict'

import * as Countries from './Countries'
import * as Locales from './Locales'
import * as Languages from './Languages'
import _ from 'lodash'

export const bestLocaleFor = ({language, countryCode}) => {
	const locale = `${language}_${countryCode}`
	
	// For valid locales, just return the locale
	if (_.includes(Locales.all, locale)) {
		return locale
	}
	
	// For invalid locales, fall back to a same-language locale in the country that has the most speakers of this language.
	const langaugeLargestCountry = Languages.largestCountries[language]
	if (langaugeLargestCountry && _.includes(Locales.all, `${language}_${langaugeLargestCountry}`)) {
		return `${language}_${langaugeLargestCountry}`
	}
	
	// If unknown, use any valid locale with the same language.
	const validLocale = _.find(Locales.all, (locale) => {
		return (locale.substr(0, 2) === language)
	})
	if (validLocale) {
		return validLocale
	}
	
	// If all else fails, use English (United States)
	return 'en_US'
}
