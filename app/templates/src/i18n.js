// @flow

import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import enTranslationMessages from './translations/en.json';

addLocaleData(enLocaleData);

export default {
  en: enTranslationMessages,
};
