import { es } from './es';
import { en } from './en';

export type Locale = 'es' | 'en';
export type Translations = typeof es;

export const translations: Record<Locale, Translations> = { es, en };

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Locale;
  return 'es';
}

export function useTranslations(lang: Locale) {
  return translations[lang];
}

export function getLocalePath(lang: Locale, path: string = ''): string {
  if (lang === 'es') return path || '/';
  return `/${lang}${path || ''}`;
}

export { es, en };
