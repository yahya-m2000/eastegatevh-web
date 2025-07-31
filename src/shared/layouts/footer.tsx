'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';

const footerLinks = [
  { key: 'privacy', href: '/privacy' },
  { key: 'terms', href: '/terms' },
  { key: 'disclaimer', href: '/disclaimer' },
];

export function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-sm font-bold">EG</span>
              </div>
              <span className="font-bold">Eastgate Venture Holdings</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Strategic venture capital investments driving innovation and growth across emerging markets and transformative technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {tCommon('about')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  {tCommon('portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
                  {tCommon('insights')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {tCommon('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{tCommon('contact')}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Dubai, UAE</p>
              <p>London, UK</p>
              <p>Singapore</p>
              <p className="ltr-content">hello@eastgatevh.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            {t('copyright')}
          </p>
          <div className="flex space-x-6 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}