'use strict'

// Auto-generated:
/*
var fetched = get("https://api.github.com/repos/andyearnshaw/Intl.js/contents/locale-data/json")

console.log('Fetched ' + fetched.length + ' locales.')

var localePattern = /^([a-z]{2})-(.+-){0,1}([A-Z]{2})\.json$/

var fetchedLocales = _(fetched)
	.map((fileInfo) => { return localePattern.exec(fileInfo.name) })
	.compact()
	.map((parts) => { return parts[1] + "_" + parts[3]; })
	.uniq()
	.value()
console.log('Filtered to ' + fetchedLocales.length + ' locales')

var fixedLocales = JSON.parse(JSON.stringify(fetchedLocales))
fixedLocales.push('tl-PH')
console.log('Final is ' + fixedLocales.length + ' locales')

_(fixedLocales)
	.sort()
	.each((locale) => {
		console.log("\t'" + locale + "',")
	})
*/
export const all = [
	'af_NA',
	'af_ZA',
	'ak_GH',
	'am_ET',
	'ar_AE',
	'ar_BH',
	'ar_DJ',
	'ar_DZ',
	'ar_EG',
	'ar_EH',
	'ar_ER',
	'ar_IL',
	'ar_IQ',
	'ar_JO',
	'ar_KM',
	'ar_KW',
	'ar_LB',
	'ar_LY',
	'ar_MA',
	'ar_MR',
	'ar_OM',
	'ar_PS',
	'ar_QA',
	'ar_SA',
	'ar_SD',
	'ar_SO',
	'ar_SS',
	'ar_SY',
	'ar_TD',
	'ar_TN',
	'ar_YE',
	'as_IN',
	'az_AZ',
	'be_BY',
	'bg_BG',
	'bm_ML',
	'bn_BD',
	'bn_IN',
	'bo_CN',
	'bo_IN',
	'br_FR',
	'bs_BA',
	'ca_AD',
	'ca_ES',
	'ca_FR',
	'ca_IT',
	'ce_RU',
	'cs_CZ',
	'cu_RU',
	'cy_GB',
	'da_DK',
	'da_GL',
	'de_AT',
	'de_BE',
	'de_CH',
	'de_DE',
	'de_LI',
	'de_LU',
	'dz_BT',
	'ee_GH',
	'ee_TG',
	'el_CY',
	'el_GR',
	'en_AG',
	'en_AI',
	'en_AS',
	'en_AT',
	'en_AU',
	'en_BB',
	'en_BE',
	'en_BI',
	'en_BM',
	'en_BS',
	'en_BW',
	'en_BZ',
	'en_CA',
	'en_CC',
	'en_CH',
	'en_CK',
	'en_CM',
	'en_CX',
	'en_CY',
	'en_DE',
	'en_DG',
	'en_DK',
	'en_DM',
	'en_ER',
	'en_FI',
	'en_FJ',
	'en_FK',
	'en_FM',
	'en_GB',
	'en_GD',
	'en_GG',
	'en_GH',
	'en_GI',
	'en_GM',
	'en_GU',
	'en_GY',
	'en_HK',
	'en_IE',
	'en_IL',
	'en_IM',
	'en_IN',
	'en_IO',
	'en_JE',
	'en_JM',
	'en_KE',
	'en_KI',
	'en_KN',
	'en_KY',
	'en_LC',
	'en_LR',
	'en_LS',
	'en_MG',
	'en_MH',
	'en_MO',
	'en_MP',
	'en_MS',
	'en_MT',
	'en_MU',
	'en_MW',
	'en_MY',
	'en_NA',
	'en_NF',
	'en_NG',
	'en_NL',
	'en_NR',
	'en_NU',
	'en_NZ',
	'en_PG',
	'en_PH',
	'en_PK',
	'en_PN',
	'en_PR',
	'en_PW',
	'en_RW',
	'en_SB',
	'en_SC',
	'en_SD',
	'en_SE',
	'en_SG',
	'en_SH',
	'en_SI',
	'en_SL',
	'en_SS',
	'en_SX',
	'en_SZ',
	'en_TC',
	'en_TK',
	'en_TO',
	'en_TT',
	'en_TV',
	'en_TZ',
	'en_UG',
	'en_UM',
	'en_US',
	'en_VC',
	'en_VG',
	'en_VI',
	'en_VU',
	'en_WS',
	'en_ZA',
	'en_ZM',
	'en_ZW',
	'es_AR',
	'es_BO',
	'es_CL',
	'es_CO',
	'es_CR',
	'es_CU',
	'es_DO',
	'es_EA',
	'es_EC',
	'es_ES',
	'es_GQ',
	'es_GT',
	'es_HN',
	'es_IC',
	'es_MX',
	'es_NI',
	'es_PA',
	'es_PE',
	'es_PH',
	'es_PR',
	'es_PY',
	'es_SV',
	'es_US',
	'es_UY',
	'es_VE',
	'et_EE',
	'eu_ES',
	'fa_AF',
	'fa_IR',
	'ff_CM',
	'ff_GN',
	'ff_MR',
	'ff_SN',
	'fi_FI',
	'fo_DK',
	'fo_FO',
	'fr_BE',
	'fr_BF',
	'fr_BI',
	'fr_BJ',
	'fr_BL',
	'fr_CA',
	'fr_CD',
	'fr_CF',
	'fr_CG',
	'fr_CH',
	'fr_CI',
	'fr_CM',
	'fr_DJ',
	'fr_DZ',
	'fr_FR',
	'fr_GA',
	'fr_GF',
	'fr_GN',
	'fr_GP',
	'fr_GQ',
	'fr_HT',
	'fr_KM',
	'fr_LU',
	'fr_MA',
	'fr_MC',
	'fr_MF',
	'fr_MG',
	'fr_ML',
	'fr_MQ',
	'fr_MR',
	'fr_MU',
	'fr_NC',
	'fr_NE',
	'fr_PF',
	'fr_PM',
	'fr_RE',
	'fr_RW',
	'fr_SC',
	'fr_SN',
	'fr_SY',
	'fr_TD',
	'fr_TG',
	'fr_TN',
	'fr_VU',
	'fr_WF',
	'fr_YT',
	'fy_NL',
	'ga_IE',
	'gd_GB',
	'gl_ES',
	'gu_IN',
	'gv_IM',
	'ha_GH',
	'ha_NE',
	'ha_NG',
	'he_IL',
	'hi_IN',
	'hr_BA',
	'hr_HR',
	'hu_HU',
	'hy_AM',
	'id_ID',
	'ig_NG',
	'ii_CN',
	'is_IS',
	'it_CH',
	'it_IT',
	'it_SM',
	'ja_JP',
	'ka_GE',
	'ki_KE',
	'kk_KZ',
	'kl_GL',
	'km_KH',
	'kn_IN',
	'ko_KP',
	'ko_KR',
	'ks_IN',
	'kw_GB',
	'ky_KG',
	'lb_LU',
	'lg_UG',
	'ln_AO',
	'ln_CD',
	'ln_CF',
	'ln_CG',
	'lo_LA',
	'lt_LT',
	'lu_CD',
	'lv_LV',
	'mg_MG',
	'mk_MK',
	'ml_IN',
	'mn_MN',
	'mr_IN',
	'ms_BN',
	'ms_MY',
	'ms_SG',
	'mt_MT',
	'my_MM',
	'nb_NO',
	'nb_SJ',
	'nd_ZW',
	'ne_IN',
	'ne_NP',
	'nl_AW',
	'nl_BE',
	'nl_BQ',
	'nl_CW',
	'nl_NL',
	'nl_SR',
	'nl_SX',
	'nn_NO',
	'no_NO',
	'om_ET',
	'om_KE',
	'or_IN',
	'os_GE',
	'os_RU',
	'pa_IN',
	'pa_PK',
	'pl_PL',
	'ps_AF',
	'pt_AO',
	'pt_BR',
	'pt_CV',
	'pt_GW',
	'pt_MO',
	'pt_MZ',
	'pt_PT',
	'pt_ST',
	'pt_TL',
	'qu_BO',
	'qu_EC',
	'qu_PE',
	'rm_CH',
	'rn_BI',
	'ro_MD',
	'ro_RO',
	'ru_BY',
	'ru_KG',
	'ru_KZ',
	'ru_MD',
	'ru_RU',
	'ru_UA',
	'rw_RW',
	'se_FI',
	'se_NO',
	'se_SE',
	'sg_CF',
	'si_LK',
	'sk_SK',
	'sl_SI',
	'sn_ZW',
	'so_DJ',
	'so_ET',
	'so_KE',
	'so_SO',
	'sq_AL',
	'sq_MK',
	'sq_XK',
	'sr_BA',
	'sr_ME',
	'sr_RS',
	'sr_XK',
	'sv_AX',
	'sv_FI',
	'sv_SE',
	'sw_CD',
	'sw_KE',
	'sw_TZ',
	'sw_UG',
	'ta_IN',
	'ta_LK',
	'ta_MY',
	'ta_SG',
	'te_IN',
	'th_TH',
	'ti_ER',
	'ti_ET',
	'tk_TM',
	'tl-PH',
	'to_TO',
	'tr_CY',
	'tr_TR',
	'ug_CN',
	'uk_UA',
	'ur_IN',
	'ur_PK',
	'uz_AF',
	'uz_UZ',
	'vi_VN',
	'yo_BJ',
	'yo_NG',
	'zh_CN',
	'zh_HK',
	'zh_MO',
	'zh_SG',
	'zh_TW',
	'zu_ZA'
]

// Auto-generated:
/*
final List<String> locales = Arrays.asList(
	// Locales.all
);
try (final Writer writer = new OutputStreamWriter(new FileOutputStream('locales.json'), 'UTF-8')) {
	for (String locale : locales) {
		final Locale l = new Locale(locale.substring(0, 2), locale.substring(3, 5));
		writer.append('\'' + locale + '\': \'' + l.getDisplayName(l) + '\',\n');
	}
}
*/
export const names = {
	'af_NA': 'Afrikaans (Namibia)',
	'af_ZA': 'Afrikaans (South Africa)',
	'ak_GH': 'Akan (Ghana)',
	'am_ET': 'Amharic (Ethiopia)',
	'ar_AE': 'العربية (الإمارات)',
	'ar_BH': 'العربية (البحرين)',
	'ar_DJ': 'العربية (Djibouti)',
	'ar_DZ': 'العربية (الجزائر)',
	'ar_EG': 'العربية (مصر)',
	'ar_EH': 'العربية (Western Sahara)',
	'ar_ER': 'العربية (Eritrea)',
	'ar_IL': 'العربية (Israel)',
	'ar_IQ': 'العربية (العراق)',
	'ar_JO': 'العربية (الأردن)',
	'ar_KM': 'العربية (Comoros)',
	'ar_KW': 'العربية (الكويت)',
	'ar_LB': 'العربية (لبنان)',
	'ar_LY': 'العربية (ليبيا)',
	'ar_MA': 'العربية (المغرب)',
	'ar_MR': 'العربية (Mauritania)',
	'ar_OM': 'العربية (سلطنة عمان)',
	'ar_PS': 'العربية (Palestine)',
	'ar_QA': 'العربية (قطر)',
	'ar_SA': 'العربية (السعودية)',
	'ar_SD': 'العربية (السودان)',
	'ar_SO': 'العربية (Somalia)',
	'ar_SS': 'العربية (South Sudan)',
	'ar_SY': 'العربية (سوريا)',
	'ar_TD': 'العربية (Chad)',
	'ar_TN': 'العربية (تونس)',
	'ar_YE': 'العربية (اليمن)',
	'as_IN': 'Assamese (India)',
	'az_AZ': 'Azerbaijani (Azerbaijan)',
	'be_BY': 'беларускі (Беларусь)',
	'bg_BG': 'български (България)',
	'bm_ML': 'Bambara (Mali)',
	'bn_BD': 'Bengali (Bangladesh)',
	'bn_IN': 'Bengali (India)',
	'bo_CN': 'Tibetan (China)',
	'bo_IN': 'Tibetan (India)',
	'br_FR': 'Breton (France)',
	'bs_BA': 'Bosnian (Bosnia and Herzegovina)',
	'ca_AD': 'català (Andorra)',
	'ca_ES': 'català (Espanya)',
	'ca_FR': 'català (França)',
	'ca_IT': 'català (Itàlia)',
	'ce_RU': 'Chechen (Russia)',
	'cs_CZ': 'čeština (Česká republika)',
	'cu_RU': 'Church Slavic (Russia)',
	'cy_GB': 'Welsh (United Kingdom)',
	'da_DK': 'Dansk (Danmark)',
	'da_GL': 'Dansk (Greenland)',
	'de_AT': 'Deutsch (Österreich)',
	'de_BE': 'Deutsch (Belgien)',
	'de_CH': 'Deutsch (Schweiz)',
	'de_DE': 'Deutsch (Deutschland)',
	'de_LI': 'Deutsch (Liechtenstein)',
	'de_LU': 'Deutsch (Luxemburg)',
	'dz_BT': 'Dzongkha (Bhutan)',
	'ee_GH': 'Ewe (Ghana)',
	'ee_TG': 'Ewe (Togo)',
	'el_CY': 'Ελληνικά (Κύπρος)',
	'el_GR': 'Ελληνικά (Ελλάδα)',
	'en_AG': 'English (Antigua and Barbuda)',
	'en_AI': 'English (Anguilla)',
	'en_AS': 'English (American Samoa)',
	'en_AT': 'English (Austria)',
	'en_AU': 'English (Australia)',
	'en_BB': 'English (Barbados)',
	'en_BE': 'English (Belgium)',
	'en_BI': 'English (Burundi)',
	'en_BM': 'English (Bermuda)',
	'en_BS': 'English (Bahamas)',
	'en_BW': 'English (Botswana)',
	'en_BZ': 'English (Belize)',
	'en_CA': 'English (Canada)',
	'en_CC': 'English (Cocos Islands)',
	'en_CH': 'English (Switzerland)',
	'en_CK': 'English (Cook Islands)',
	'en_CM': 'English (Cameroon)',
	'en_CX': 'English (Christmas Island)',
	'en_CY': 'English (Cyprus)',
	'en_DE': 'English (Germany)',
	'en_DG': 'English (DG)',
	'en_DK': 'English (Denmark)',
	'en_DM': 'English (Dominica)',
	'en_ER': 'English (Eritrea)',
	'en_FI': 'English (Finland)',
	'en_FJ': 'English (Fiji)',
	'en_FK': 'English (Falkland Islands)',
	'en_FM': 'English (Micronesia)',
	'en_GB': 'English (United Kingdom)',
	'en_GD': 'English (Grenada)',
	'en_GG': 'English (Guernsey)',
	'en_GH': 'English (Ghana)',
	'en_GI': 'English (Gibraltar)',
	'en_GM': 'English (Gambia)',
	'en_GU': 'English (Guam)',
	'en_GY': 'English (Guyana)',
	'en_HK': 'English (Hong Kong)',
	'en_IE': 'English (Ireland)',
	'en_IL': 'English (Israel)',
	'en_IM': 'English (Isle Of Man)',
	'en_IN': 'English (India)',
	'en_IO': 'English (British Indian Ocean Territory)',
	'en_JE': 'English (Jersey)',
	'en_JM': 'English (Jamaica)',
	'en_KE': 'English (Kenya)',
	'en_KI': 'English (Kiribati)',
	'en_KN': 'English (Saint Kitts And Nevis)',
	'en_KY': 'English (Cayman Islands)',
	'en_LC': 'English (Saint Lucia)',
	'en_LR': 'English (Liberia)',
	'en_LS': 'English (Lesotho)',
	'en_MG': 'English (Madagascar)',
	'en_MH': 'English (Marshall Islands)',
	'en_MO': 'English (Macao)',
	'en_MP': 'English (Northern Mariana Islands)',
	'en_MS': 'English (Montserrat)',
	'en_MT': 'English (Malta)',
	'en_MU': 'English (Mauritius)',
	'en_MW': 'English (Malawi)',
	'en_MY': 'English (Malaysia)',
	'en_NA': 'English (Namibia)',
	'en_NF': 'English (Norfolk Island)',
	'en_NG': 'English (Nigeria)',
	'en_NL': 'English (Netherlands)',
	'en_NR': 'English (Nauru)',
	'en_NU': 'English (Niue)',
	'en_NZ': 'English (New Zealand)',
	'en_PG': 'English (Papua New Guinea)',
	'en_PH': 'English (Philippines)',
	'en_PK': 'English (Pakistan)',
	'en_PN': 'English (Pitcairn)',
	'en_PR': 'English (Puerto Rico)',
	'en_PW': 'English (Palau)',
	'en_RW': 'English (Rwanda)',
	'en_SB': 'English (Solomon Islands)',
	'en_SC': 'English (Seychelles)',
	'en_SD': 'English (Sudan)',
	'en_SE': 'English (Sweden)',
	'en_SG': 'English (Singapore)',
	'en_SH': 'English (Saint Helena)',
	'en_SI': 'English (Slovenia)',
	'en_SL': 'English (Sierra Leone)',
	'en_SS': 'English (South Sudan)',
	'en_SX': 'English (Sint Maarten (Dutch part))',
	'en_SZ': 'English (Swaziland)',
	'en_TC': 'English (Turks And Caicos Islands)',
	'en_TK': 'English (Tokelau)',
	'en_TO': 'English (Tonga)',
	'en_TT': 'English (Trinidad and Tobago)',
	'en_TV': 'English (Tuvalu)',
	'en_TZ': 'English (Tanzania)',
	'en_UG': 'English (Uganda)',
	'en_UM': 'English (United States Minor Outlying Islands)',
	'en_US': 'English (United States)',
	'en_VC': 'English (Saint Vincent And The Grenadines)',
	'en_VG': 'English (British Virgin Islands)',
	'en_VI': 'English (U.S. Virgin Islands)',
	'en_VU': 'English (Vanuatu)',
	'en_WS': 'English (Samoa)',
	'en_ZA': 'English (South Africa)',
	'en_ZM': 'English (Zambia)',
	'en_ZW': 'English (Zimbabwe)',
	'es_AR': 'español (Argentina)',
	'es_BO': 'español (Bolivia)',
	'es_CL': 'español (Chile)',
	'es_CO': 'español (Colombia)',
	'es_CR': 'español (Costa Rica)',
	'es_CU': 'español (Cuba)',
	'es_DO': 'español (República Dominicana)',
	'es_EA': 'español (EA)',
	'es_EC': 'español (Ecuador)',
	'es_ES': 'español (España)',
	'es_GQ': 'español (Guinea Ecuatorial)',
	'es_GT': 'español (Guatemala)',
	'es_HN': 'español (Honduras)',
	'es_IC': 'español (IC)',
	'es_MX': 'español (México)',
	'es_NI': 'español (Nicaragua)',
	'es_PA': 'español (Panamá)',
	'es_PE': 'español (Perú)',
	'es_PH': 'español (Filipinas)',
	'es_PR': 'español (Puerto Rico)',
	'es_PY': 'español (Paraguay)',
	'es_SV': 'español (El Salvador)',
	'es_US': 'español (Estados Unidos)',
	'es_UY': 'español (Uruguay)',
	'es_VE': 'español (Venezuela)',
	'et_EE': 'Eesti (Eesti)',
	'eu_ES': 'Basque (Spain)',
	'fa_AF': 'Persian (Afghanistan)',
	'fa_IR': 'Persian (Iran)',
	'ff_CM': 'Fulah (Cameroon)',
	'ff_GN': 'Fulah (Guinea)',
	'ff_MR': 'Fulah (Mauritania)',
	'ff_SN': 'Fulah (Senegal)',
	'fi_FI': 'suomi (Suomi)',
	'fo_DK': 'Faroese (Denmark)',
	'fo_FO': 'Faroese (Faroe Islands)',
	'fr_BE': 'français (Belgique)',
	'fr_BF': 'français (Burkina Faso)',
	'fr_BI': 'français (Burundi)',
	'fr_BJ': 'français (Benin)',
	'fr_BL': 'français (Saint-Barthélemy)',
	'fr_CA': 'français (Canada)',
	'fr_CD': 'français (République démocratique du Congo)',
	'fr_CF': 'français (République Centre-Africaine)',
	'fr_CG': 'français (Congo)',
	'fr_CH': 'français (Suisse)',
	'fr_CI': 'français (Côte d\'Ivoire)',
	'fr_CM': 'français (Cameroun)',
	'fr_DJ': 'français (Djibouti)',
	'fr_DZ': 'français (Algérie)',
	'fr_FR': 'français (France)',
	'fr_GA': 'français (Gabon)',
	'fr_GF': 'français (Guyane française)',
	'fr_GN': 'français (Guinée)',
	'fr_GP': 'français (Guadeloupe)',
	'fr_GQ': 'français (Guinée Equatoriale)',
	'fr_HT': 'français (Haïti)',
	'fr_KM': 'français (Comores)',
	'fr_LU': 'français (Luxembourg)',
	'fr_MA': 'français (Maroc)',
	'fr_MC': 'français (Monaco)',
	'fr_MF': 'français (Saint-Martin)',
	'fr_MG': 'français (Madagascar)',
	'fr_ML': 'français (Mali)',
	'fr_MQ': 'français (Martinique)',
	'fr_MR': 'français (Mauritanie)',
	'fr_MU': 'français (Maurice)',
	'fr_NC': 'français (Nouvelle-Calédonie)',
	'fr_NE': 'français (Niger)',
	'fr_PF': 'français (Polynésie Française)',
	'fr_PM': 'français (Saint-Pierre-et-Miquelon)',
	'fr_RE': 'français (La Réunion)',
	'fr_RW': 'français (Rwanda)',
	'fr_SC': 'français (Seychelles)',
	'fr_SN': 'français (Sénégal)',
	'fr_SY': 'français (Syrie)',
	'fr_TD': 'français (Tchad)',
	'fr_TG': 'français (Togo)',
	'fr_TN': 'français (Tunisie)',
	'fr_VU': 'français (Vanuatu)',
	'fr_WF': 'français (Wallis-et-Futuna)',
	'fr_YT': 'français (Mayotte)',
	'fy_NL': 'Frisian (Netherlands)',
	'ga_IE': 'Gaeilge (Éire)',
	'gd_GB': 'Scottish Gaelic (United Kingdom)',
	'gl_ES': 'Gallegan (Spain)',
	'gu_IN': 'Gujarati (India)',
	'gv_IM': 'Manx (Isle Of Man)',
	'ha_GH': 'Hausa (Ghana)',
	'ha_NE': 'Hausa (Niger)',
	'ha_NG': 'Hausa (Nigeria)',
	'he_IL': 'עברית (ישראל)',
	'hi_IN': 'हिंदी (भारत)',
	'hr_BA': 'hrvatski (Bosnia and Herzegovina)',
	'hr_HR': 'hrvatski (Hrvatska)',
	'hu_HU': 'magyar (Magyarország)',
	'hy_AM': 'Armenian (Armenia)',
	'id_ID': 'Bahasa Indonesia (Indonesia)',
	'ig_NG': 'Igbo (Nigeria)',
	'ii_CN': 'Sichuan Yi (China)',
	'is_IS': 'íslenska (Ísland)',
	'it_CH': 'italiano (Svizzera)',
	'it_IT': 'italiano (Italia)',
	'it_SM': 'italiano (San Marino)',
	'ja_JP': '日本語 (日本)',
	'ka_GE': 'Georgian (Georgia)',
	'ki_KE': 'Kikuyu (Kenya)',
	'kk_KZ': 'Kazakh (Kazakhstan)',
	'kl_GL': 'Greenlandic (Greenland)',
	'km_KH': 'Khmer (Cambodia)',
	'kn_IN': 'Kannada (India)',
	'ko_KP': '한국어 (북한)',
	'ko_KR': '한국어 (대한민국)',
	'ks_IN': 'Kashmiri (India)',
	'kw_GB': 'Cornish (United Kingdom)',
	'ky_KG': 'Kirghiz (Kyrgyzstan)',
	'lb_LU': 'Luxembourgish (Luxembourg)',
	'lg_UG': 'Ganda (Uganda)',
	'ln_AO': 'Lingala (Angola)',
	'ln_CD': 'Lingala (The Democratic Republic Of Congo)',
	'ln_CF': 'Lingala (Central African Republic)',
	'ln_CG': 'Lingala (Congo)',
	'lo_LA': 'Lao (Laos)',
	'lt_LT': 'Lietuvių (Lietuva)',
	'lu_CD': 'Luba-Katanga (The Democratic Republic Of Congo)',
	'lv_LV': 'Latviešu (Latvija)',
	'mg_MG': 'Malagasy (Madagascar)',
	'mk_MK': 'македонски (Македонија)',
	'ml_IN': 'Malayalam (India)',
	'mn_MN': 'Mongolian (Mongolia)',
	'mr_IN': 'Marathi (India)',
	'ms_BN': 'Bahasa Melayu (Brunei)',
	'ms_MY': 'Bahasa Melayu (Malaysia)',
	'ms_SG': 'Bahasa Melayu (Singapura)',
	'mt_MT': 'Malti (Malta)',
	'my_MM': 'Burmese (Myanmar)',
	'nb_NO': 'Norwegian Bokmål (Norge)',
	'nb_SJ': 'Norwegian Bokmål (Svalbard And Jan Mayen)',
	'nd_ZW': 'North Ndebele (Zimbabwe)',
	'ne_IN': 'Nepali (India)',
	'ne_NP': 'Nepali (Nepal)',
	'nl_AW': 'Nederlands (Aruba)',
	'nl_BE': 'Nederlands (België)',
	'nl_BQ': 'Nederlands (Bonaire, Sint Eustatius and Saba)',
	'nl_CW': 'Nederlands (Curaçao)',
	'nl_NL': 'Nederlands (Nederland)',
	'nl_SR': 'Nederlands (Suriname)',
	'nl_SX': 'Nederlands (Sint Maarten (Dutch part))',
	'nn_NO': 'Norwegian Nynorsk (Norge)',
	'om_ET': 'Oromo (Ethiopia)',
	'om_KE': 'Oromo (Kenya)',
	'or_IN': 'Oriya (India)',
	'os_GE': 'Ossetian (Georgia)',
	'os_RU': 'Ossetian (Russia)',
	'pa_IN': 'Panjabi (India)',
	'pa_PK': 'Panjabi (Pakistan)',
	'pl_PL': 'polski (Polska)',
	'ps_AF': 'Pushto (Afghanistan)',
	'pt_AO': 'português (Angola)',
	'pt_BR': 'português (Brasil)',
	'pt_CV': 'português (Cabo Verde)',
	'pt_GW': 'português (Guiné Bissau)',
	'pt_MO': 'português (Macau, Região Admin. Especial da China)',
	'pt_MZ': 'português (Moçambique)',
	'pt_PT': 'português (Portugal)',
	'pt_ST': 'português (São Tomé e Príncipe)',
	'pt_TL': 'português (Timor-Leste)',
	'qu_BO': 'Quechua (Bolivia)',
	'qu_EC': 'Quechua (Ecuador)',
	'qu_PE': 'Quechua (Peru)',
	'rm_CH': 'Raeto-Romance (Switzerland)',
	'rn_BI': 'Rundi (Burundi)',
	'ro_MD': 'română (Moldova)',
	'ro_RO': 'română (România)',
	'ru_BY': 'русский (Беларусь)',
	'ru_KG': 'русский (Киргизстан)',
	'ru_KZ': 'русский (Казахстан)',
	'ru_MD': 'русский (Молдова)',
	'ru_RU': 'русский (Россия)',
	'ru_UA': 'русский (Украина)',
	'rw_RW': 'Kinyarwanda (Rwanda)',
	'se_FI': 'Northern Sami (Finland)',
	'se_NO': 'Northern Sami (Norway)',
	'se_SE': 'Northern Sami (Sweden)',
	'sg_CF': 'Sango (Central African Republic)',
	'si_LK': 'Sinhalese (Sri Lanka)',
	'sk_SK': 'Slovenčina (Slovenská republika)',
	'sl_SI': 'Slovenščina (Slovenija)',
	'sn_ZW': 'Shona (Zimbabwe)',
	'so_DJ': 'Somali (Djibouti)',
	'so_ET': 'Somali (Ethiopia)',
	'so_KE': 'Somali (Kenya)',
	'so_SO': 'Somali (Somalia)',
	'sq_AL': 'shqip (Shqipëria)',
	'sq_MK': 'shqip (Macedonia)',
	'sq_XK': 'shqip (XK)',
	'sr_BA': 'Српски (Босна и Херцеговина)',
	'sr_ME': 'Српски (Montenegro)',
	'sr_RS': 'Српски (Serbia)',
	'sr_XK': 'Српски (XK)',
	'sv_AX': 'svenska (Åland)',
	'sv_FI': 'svenska (Finland)',
	'sv_SE': 'svenska (Sverige)',
	'sw_CD': 'Swahili (The Democratic Republic Of Congo)',
	'sw_KE': 'Swahili (Kenya)',
	'sw_TZ': 'Swahili (Tanzania)',
	'sw_UG': 'Swahili (Uganda)',
	'ta_IN': 'Tamil (India)',
	'ta_LK': 'Tamil (Sri Lanka)',
	'ta_MY': 'Tamil (Malaysia)',
	'ta_SG': 'Tamil (Singapore)',
	'te_IN': 'Telugu (India)',
	'th_TH': 'ไทย (ประเทศไทย)',
	'ti_ER': 'Tigrinya (Eritrea)',
	'ti_ET': 'Tigrinya (Ethiopia)',
	'tk_TM': 'Turkmen (Turkmenistan)',
	'tl-PH': 'Tagalog (Philippines)',
	'to_TO': 'Tonga (Tonga)',
	'tr_CY': 'Türkçe (Cyprus)',
	'tr_TR': 'Türkçe (Türkiye)',
	'ug_CN': 'Uighur (China)',
	'uk_UA': 'українська (Україна)',
	'ur_IN': 'Urdu (India)',
	'ur_PK': 'Urdu (Pakistan)',
	'uz_AF': 'Uzbek (Afghanistan)',
	'uz_UZ': 'Uzbek (Uzbekistan)',
	'vi_VN': 'Tiếng Việt (Việt Nam)',
	'yo_BJ': 'Yoruba (Benin)',
	'yo_NG': 'Yoruba (Nigeria)',
	'zh_CN': '中文 (中国)',
	'zh_HK': '中文 (香港)',
	'zh_MO': '中文 (澳门特区)',
	'zh_SG': '中文 (新加坡)',
	'zh_TW': '中文 (台灣)',
	'zu_ZA': 'Zulu (South Africa)'
}
