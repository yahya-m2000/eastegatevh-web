import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Use default locale if invalid locale is provided
  const validLocale = routing.locales.includes(locale as any) ? locale : routing.defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});