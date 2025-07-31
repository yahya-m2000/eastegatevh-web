'use client';

import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '../../../shared/components/ui/button';
import { Card, CardContent } from '../../../shared/components/ui/card';
import { FadeIn } from '../../../shared/components/ui/fade-in';
import { StaggerContainer } from '../../../shared/components/ui/stagger-container';
import { Link } from '../../../i18n/navigation';
// Mock office data to avoid import issues
const MOCK_PRIMARY_OFFICE = {
  id: 'dubai-hq',
  name: 'Dubai Headquarters',
  city: 'Dubai',
  country: 'UAE',
  email: 'hello@eastgatevh.com',
  phone: '+971 4 123 4567',
  isPrimary: true
};

export function ContactCTA() {
  const t = useTranslations('contact');
  const primaryOffice = MOCK_PRIMARY_OFFICE;

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('ctaTitle')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('ctaSubtitle')}
              </p>
            </div>
          </FadeIn>

          {/* Contact Options */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Get in touch with our team
                </p>
                <Link 
                  href={`mailto:${primaryOffice.email}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  {primaryOffice.email}
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Speak with our investment team
                </p>
                <Link 
                  href={`tel:${primaryOffice.phone}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  {primaryOffice.phone}
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {primaryOffice.city}, {primaryOffice.country}
                </p>
                <Link 
                  href="/contact"
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  View All Offices
                </Link>
              </CardContent>
            </Card>
          </StaggerContainer>

          {/* CTA Buttons */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}