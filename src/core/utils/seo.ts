import { Metadata } from 'next';

// Base SEO configuration
export const seoConfig = {
  title: 'Eastgate Venture Holdings',
  description: 'Strategic venture capital investments driving innovation and growth across emerging markets and transformative technologies.',
  keywords: [
    'venture capital',
    'investment',
    'startup funding',
    'private equity',
    'emerging markets',
    'technology investment',
    'growth capital',
    'portfolio companies',
    'strategic partnerships',
    'innovation funding'
  ],
  author: 'Eastgate Venture Holdings',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://eastgatevh.com',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@eastgatevh',
  linkedinHandle: 'eastgate-venture-holdings',
};

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: string[];
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  locale = 'en',
  alternateLocales = ['ar', 'fr'],
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${seoConfig.title}`
    : seoConfig.title;
  
  const fullDescription = description || seoConfig.description;
  const fullImage = image || seoConfig.defaultImage;
  const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;
  const allKeywords = [...seoConfig.keywords, ...keywords];

  const metadata: Metadata = {
    metadataBase: new URL(seoConfig.siteUrl),
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    
    // Open Graph
    openGraph: {
      type,
      locale,
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      siteName: seoConfig.title,
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },

    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Verification
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },

    // Alternate languages
    alternates: {
      canonical: fullUrl,
      languages: alternateLocales.reduce((acc, lang) => {
        acc[lang] = `${seoConfig.siteUrl}/${lang}${url || ''}`;
        return acc;
      }, {} as Record<string, string>),
    },
  };

  // Article-specific metadata
  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors,
      section,
      tags,
    };
  }

  return metadata;
}

// JSON-LD structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    image: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
    sameAs: [
      `https://twitter.com/${seoConfig.twitterHandle.replace('@', '')}`,
      `https://linkedin.com/company/${seoConfig.linkedinHandle}`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic', 'French'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'UAE',
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.title,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
    publisher: {
      '@type': 'Organization',
      name: seoConfig.title,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  section,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${seoConfig.siteUrl}${url}`,
    image: image || seoConfig.defaultImage,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.title,
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${seoConfig.siteUrl}${url}`,
    },
    ...(section && { articleSection: section }),
  };
}

export function generatePersonSchema({
  name,
  jobTitle,
  description,
  image,
  sameAs = [],
}: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    ...(image && { image }),
    worksFor: {
      '@type': 'Organization',
      name: seoConfig.title,
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.url}`,
    })),
  };
}