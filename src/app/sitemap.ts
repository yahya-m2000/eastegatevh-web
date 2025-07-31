import { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastgatevh.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: '',
      priority: 1,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/about',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/portfolio',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/insights',
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/contact',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each locale
  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === 'en' 
        ? `${baseUrl}${route.url}`
        : `${baseUrl}/${locale}${route.url}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: routing.locales.reduce((acc, lang) => {
            const altUrl = lang === 'en' 
              ? `${baseUrl}${route.url}`
              : `${baseUrl}/${lang}${route.url}`;
            acc[lang] = altUrl;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  return sitemapEntries;
}