// import i18n from 'i18n-js';
// import {memoize} from '../utils/customUtils';
// import * as en from './languages/en';
// import {I18nManager} from 'react-native';
//
// i18n.missingBehaviour = 'guess';
//
// const translationGetters = {
//   en: () => en.default,
// };
//
// const strLocale = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// );
//
// const setI18nConfig = async language => {
//   strLocale.cache.clear();
//   i18n.translations = {
//     [language.languageKey]: translationGetters[language.languageKey](),
//   };
//   i18n.locale = language.languageKey;
//   I18nManager.forceRTL(language.isRTL);
// };
//
// export {setI18nConfig, strLocale};
