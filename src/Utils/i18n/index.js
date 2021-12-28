import I18n from 'react-native-i18n';
import en from './locales/en';
import ru from './locales/ru';
import uz from './locales/uz';

export const changeLanguage = (val) => {
  if (val) I18n.locale = val;
  return val;
};

I18n.defaultLocale = 'uz';
I18n.fallbacks = true;

I18n.translations = {
  en,
  ru,
  uz,
};

export default I18n;
