'use client';

import { ArrowRight, Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '../../../shared/components/ui/button';
import { FadeIn } from '../../../shared/components/ui/fade-in';
import { AnimatedCounter } from '../../../shared/components/ui/animated-counter';
import { StaggerContainer } from '../../../shared/components/ui/stagger-container';
import { Link } from '../../../i18n/navigation';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Overline */}
          <FadeIn delay={0.1}>
            <div className="mb-6 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="text-primary">●</span>
              <span className="ml-2">Strategic Venture Capital</span>
            </div>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={0.2}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {t('title')}
              <span className="block text-primary">{t('subtitle')}</span>
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.3}>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              {t('description')}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/portfolio">
                  {t('cta')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/about">
                  <Play className="mr-2 h-4 w-4" />
                  {t('ctaSecondary')}
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Stats Preview */}
          <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3" initialDelay={0.6}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Portfolio Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedCounter end={2.5} suffix="B" prefix="$" />
              </div>
              <div className="text-sm text-muted-foreground">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </StaggerContainer>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}