import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { satoshi } from "../../core/theme/fonts";
import { AppProviders } from "../../core/providers";
import { routing } from '../../i18n/routing';
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema, generateWebsiteSchema } from "../../core/utils/seo";
import { StructuredData } from "../../shared/components/ui/structured-data";
import "../globals.css";

export const metadata: Metadata = generateSEOMetadata();

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <StructuredData data={[generateOrganizationSchema(), generateWebsiteSchema()]} />
      </head>
      <body className={`${satoshi.variable} antialiased`}>
        <AppProviders>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </AppProviders>
      </body>
    </html>
  );
}