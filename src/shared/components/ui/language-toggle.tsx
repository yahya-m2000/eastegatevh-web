'use client';

import { Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/navigation';
import { Button } from './button';
import { useState } from 'react';
import { cn } from '../../../core/utils/cn';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-9"
        aria-label={t('language')}
      >
        <Languages className="h-4 w-4" />
      </Button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full z-50 mt-1 min-w-[160px] rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  locale === language.code && "bg-accent text-accent-foreground"
                )}
              >
                <span className="text-base">{language.flag}</span>
                <span className="flex-1 text-left">{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}