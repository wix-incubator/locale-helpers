# locale-helpers

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Infers the best locale given a country and a language.

Sometimes the locale is simply the language/country combination, e.g. ```en``` + ```US``` = ```en_US```.

However, ```it``` + ```FR``` ≠ ```it_FR``` (as it is not a valid locale). A better option would be the valid ```it_IT```.

### Usage
Install the library with `npm install locale-helpers`

```javascript
var LocaleHelpers = require('locale-helpers');

LocaleHelpers.bestLocaleFor({language: 'en', country: 'US'}); //-> 'en_US'
LocaleHelpers.bestLocaleFor({language: 'fr', country: 'FR'}); //-> 'fr_FR'
LocaleHelpers.bestLocaleFor({language: 'en', country: 'GB'}); //-> 'en_GB'
LocaleHelpers.bestLocaleFor({language: 'it', country: 'FR'}); //-> 'it_IT'
```

[downloads-image]: https://img.shields.io/npm/dm/locale-helpers.svg

[npm-url]: https://npmjs.org/package/locale-helpers
[npm-image]: https://img.shields.io/npm/v/locale-helpers.svg
