export type SupportedLocale = 'ru' | 'en';

export interface I18nMessage {
  key: string;
  locale: SupportedLocale;
  value: string;
}
