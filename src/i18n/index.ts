import { createI18n } from 'vue-i18n';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

export type AppLocale = keyof typeof messages;

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages,
});
