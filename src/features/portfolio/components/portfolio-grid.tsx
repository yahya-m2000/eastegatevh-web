'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PortfolioCard } from '../../../shared/components/ui/portfolio-card';
import { Button } from '../../../shared/components/ui/button';
import { portfolioCompanies } from '../../../shared/data/portfolio';
import { PortfolioCompany } from '../../../core/types';

type FilterType = 'all' | 'tech' | 'fintech' | 'healthcare' | 'energy' | 'active' | 'exited';

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const t = useTranslations('portfolio');

  const filterCompanies = (companies: PortfolioCompany[], filter: FilterType): PortfolioCompany[] => {
    switch (filter) {
      case 'all':
        return companies;
      case 'tech':
      case 'fintech':
      case 'healthcare':
      case 'energy':
        return companies.filter(company => company.sector === filter);
      case 'active':
      case 'exited':
        return companies.filter(company => company.status === filter);
      default:
        return companies;
    }
  };

  const filteredCompanies = filterCompanies(portfolioCompanies, activeFilter);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    { key: 'tech', label: t('filterTech') },
    { key: 'fintech', label: t('filterFintech') },
    { key: 'healthcare', label: t('filterHealthcare') },
    { key: 'energy', label: 'Energy' },
    { key: 'active', label: 'Active' },
    { key: 'exited', label: 'Exited' },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">{t('companies')}</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-3xl font-bold text-primary mb-2">$2.5B+</div>
            <div className="text-muted-foreground">{t('totalInvestment')}</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-3xl font-bold text-primary mb-2">$8.2B</div>
            <div className="text-muted-foreground">{t('exitValue')}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.key)}
              className="min-w-0"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <PortfolioCard key={company.id} company={company} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No companies found for the selected filter.</p>
            <Button
              variant="outline"
              onClick={() => setActiveFilter('all')}
              className="mt-4"
            >
              View All Companies
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}