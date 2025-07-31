'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import { Button } from '../components/ui/button';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { LanguageToggle } from '../components/ui/language-toggle';
import { cn } from '../../core/utils/cn';

const navigationItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'insights', href: '/insights' },
  { key: 'contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('common');
  const tNav = useTranslations('navigation');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-sm font-bold">EG</span>
          </div>
          <span className="hidden font-bold sm:inline-block">
            Eastgate Venture Holdings
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6 md:text-sm lg:space-x-8 ml-8">
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex md:items-center md:space-x-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={tNav('menu')}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container space-y-2 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-2 py-2 text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-2 pt-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}