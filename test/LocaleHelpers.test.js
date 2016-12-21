'use strict'

import {expect} from 'chai'
import * as LocaleHelpers from '../src/LocaleHelpers'

describe('LocaleHelpers', () => {
	describe('bestLocaleFor', () => {
		it ('supports English (United States)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'en',
				countryCode: 'US'
			})).to.equal('en_US')
		})

		it ('supports French (France)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'fr',
				countryCode: 'FR'
			})).to.equal('fr_FR')
		})
		
		it ('supports English (United Kingdom)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'en',
				countryCode: 'GB'
			})).to.equal('en_GB')
		})
		
		it ('supports Hebrew (Israel)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'he',
				countryCode: 'IL'
			})).to.equal('he_IL')
		})
		
		it ('supports Norwegian (Bokmål)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'nb',
				countryCode: 'NO'
			})).to.equal('nb_NO')
		})
		
		it ('overrides invalid locales with the locale language\'s default locale (if there is one)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'it',
				countryCode: 'FR'
			})).to.equal('it_IT')
		})
		
		it ('overrides invalid locales with any valid locale in the same language (for languages with no default locale)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'pl',
				countryCode: 'US'
			}).substr(0, 2)).to.equal('pl')
		})
		
		it ('falls back to English (United States)', () => {
			expect(LocaleHelpers.bestLocaleFor({
				language: 'xx',
				countryCode: 'XX'
			})).to.equal('en_US')
		})
	})
})
