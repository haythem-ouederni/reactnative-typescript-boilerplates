import I18n from 'react-native-i18n';
import en from './en';
import fr from './fr';  

I18n.fallbacks = true;

I18n.translations = {
  en: Object.assign(I18n.translations.en ? I18n.translations.en : {}, en),
  fr: Object.assign(I18n.translations.fr ? I18n.translations.fr : {}, fr)
};

export default I18n; 