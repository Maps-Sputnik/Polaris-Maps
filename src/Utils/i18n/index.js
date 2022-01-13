import I18n from 'i18n-js';
import en from './locales/en';
import ru from './locales/ru';
import uz from './locales/uz';

export const changeLanguage = (val) => {
  if (val) I18n.locale = val;
  return val;
};
I18n.fallbacks = true;
I18n.defaultLocale = 'uz';

I18n.translations = {
  uz,
  en,
  ru,
};

export default I18n;
