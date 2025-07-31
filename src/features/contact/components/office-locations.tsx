'use client';

import { MapPin, Phone, Mail, Clock, Users, Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../shared/components/ui/card';
import { Button } from '../../../shared/components/ui/button';
import { offices, officeStats } from '../../../shared/data/offices';
import { Office } from '../../../core/types';
import { cn } from '../../../core/utils/cn';

interface OfficeLocationsProps {
  className?: string;
}

const officeTypeColors = {
  headquarters: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200',
  regional: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200',
  representative: 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-200',
};

const officeTypeLabels = {
  headquarters: 'Headquarters',
  regional: 'Regional Office',
  representative: 'Representative Office',
};

function OfficeCard({ office }: { office: Office }) {
  const typeColor = officeTypeColors[office.type];
  const typeLabel = officeTypeLabels[office.type];

  // Format address
  const fullAddress = [
    office.address.street,
    office.address.city,
    office.address.state,
    office.address.country,
    office.address.postalCode
  ].filter(Boolean).join(', ');

  return (
    <Card className="hover:shadow-lg transition-all duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{office.name}</CardTitle>
            <span className={cn("inline-block px-2 py-1 rounded-full text-xs font-medium border", typeColor)}>
              {typeLabel}
            </span>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div>Est. {office.established}</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            {fullAddress}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a 
              href={`tel:${office.contact.phone}`}
              className="text-sm hover:text-primary transition-colors"
            >
              {office.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a 
              href={`mailto:${office.contact.email}`}
              className="text-sm hover:text-primary transition-colors"
            >
              {office.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {office.timezone}
            </span>
          </div>
        </div>

        {/* Team Info */}
        <div className="flex items-center gap-3 pt-2 border-t">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {office.team.size} team members
          </span>
        </div>

        {/* Focus Areas */}
        <div>
          <h5 className="font-medium text-sm mb-2">Focus Areas</h5>
          <div className="flex flex-wrap gap-1">
            {office.focus.slice(0, 3).map((area) => (
              <span
                key={area}
                className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
              >
                {area}
              </span>
            ))}
            {office.focus.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                +{office.focus.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h5 className="font-medium text-sm mb-2">Languages</h5>
          <div className="text-sm text-muted-foreground">
            {office.languages.join(', ')}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => window.open(`mailto:${office.contact.email}`, '_blank')}
          >
            Contact This Office
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function OfficeLocations({ className }: OfficeLocationsProps) {
  const t = useTranslations('contact');

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('office.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our global presence across key emerging markets enables us to identify and support 
            the most promising investment opportunities worldwide.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Building2 className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{officeStats.totalOffices}</div>
            <div className="text-sm text-muted-foreground">Global Offices</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{officeStats.totalTeamMembers}+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{officeStats.countries}</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Clock className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Coverage</div>
          </div>
        </div>

        {/* Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>

        {/* Investment Criteria CTA */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Investment Criteria</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Looking for investment? Learn about our investment thesis, funding stages, 
            and geographic focus areas to determine if we're the right partner for your venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              View Investment Criteria
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}