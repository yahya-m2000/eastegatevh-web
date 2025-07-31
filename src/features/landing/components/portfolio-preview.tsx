'use client';

import { ArrowRight, TrendingUp, Building2, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '../../../shared/components/ui/button';
import { Card, CardContent } from '../../../shared/components/ui/card';
import { AnimatedCounter } from '../../../shared/components/ui/animated-counter';
import { FadeIn } from '../../../shared/components/ui/fade-in';
import { StaggerContainer } from '../../../shared/components/ui/stagger-container';
import { HoverCard } from '../../../shared/components/ui/hover-card';
import { Link } from '../../../i18n/navigation';
import { portfolioCompanies, portfolioStats } from '../../../shared/data/portfolio';

export function PortfolioPreview() {
  const t = useTranslations('portfolio');
  const featuredCompanies = portfolioCompanies.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Building2 className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">
              <AnimatedCounter end={portfolioStats.totalCompanies} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">{t('companies')}</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">
              <AnimatedCounter end={2.5} prefix="$" suffix="B+" />
            </div>
            <div className="text-sm text-muted-foreground">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Globe className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">
              <AnimatedCounter end={25} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">
              <AnimatedCounter end={5.2} suffix="x" />
            </div>
            <div className="text-sm text-muted-foreground">Average Return</div>
          </div>
        </StaggerContainer>

        {/* Featured Companies */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCompanies.map((company) => (
            <HoverCard key={company.id} shadowIntensity="strong" glowEffect>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-tight">{company.name}</h3>
                      <p className="text-sm text-muted-foreground">{company.industry}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {company.description}
                  </p>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{company.location}</span>
                    {company.metrics?.growth && (
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        {company.metrics.growth}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </HoverCard>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}