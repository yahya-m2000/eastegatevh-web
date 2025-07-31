'use client';

import { ExternalLink, MapPin, Calendar, TrendingUp, Users } from 'lucide-react';
import { PortfolioCompany } from '../../../core/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { HoverCard } from './hover-card';
import { cn } from '../../../core/utils/cn';

interface PortfolioCardProps {
  company: PortfolioCompany;
  className?: string;
}

const sectorColors = {
  tech: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  fintech: 'bg-green-500/10 text-green-700 dark:text-green-300',
  healthcare: 'bg-red-500/10 text-red-700 dark:text-red-300',
  logistics: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  energy: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
  other: 'bg-gray-500/10 text-gray-700 dark:text-gray-300',
};

const statusColors = {
  active: 'bg-green-500/10 text-green-700 dark:text-green-300',
  exited: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  ipo: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
};

export function PortfolioCard({ company, className }: PortfolioCardProps) {
  const sectorColor = sectorColors[company.sector] || sectorColors.other;
  const statusColor = statusColors[company.status];

  return (
    <HoverCard shadowIntensity="strong" glowEffect className={className}>
      <Card className="h-full">
        <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {/* Company Logo Placeholder */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {company.name.charAt(0)}
                </span>
              </div>
              <div>
                <CardTitle className="text-lg leading-tight">{company.name}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <span className={cn("px-2 py-1 rounded-full text-xs font-medium", sectorColor)}>
                    {company.sector}
                  </span>
                  <span className={cn("px-2 py-1 rounded-full text-xs font-medium", statusColor)}>
                    {company.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {company.website && (
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              asChild
            >
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${company.name} website`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {company.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Company Details */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Founded {company.foundedYear}</span>
          </div>
          {company.employees && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{company.employees}</span>
            </div>
          )}
          {company.valuation && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              <span>{company.valuation}</span>
            </div>
          )}
        </div>

        {/* Metrics */}
        {company.metrics && (
          <div className="pt-3 border-t">
            <div className="grid grid-cols-1 gap-2 text-sm">
              {company.metrics.revenue && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Revenue:</span>
                  <span className="font-medium">{company.metrics.revenue}</span>
                </div>
              )}
              {company.metrics.growth && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Growth:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {company.metrics.growth}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Exit Information */}
        {company.status === 'exited' && company.exitDetails && (
          <div className="pt-3 border-t">
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-muted-foreground">Exit:</span>
                <span className="font-medium">{company.exitDetails.type}</span>
              </div>
              {company.exitDetails.acquirer && (
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Acquirer:</span>
                  <span className="font-medium">{company.exitDetails.acquirer}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year:</span>
                <span className="font-medium">{company.exitDetails.exitYear}</span>
              </div>
            </div>
          </div>
        )}
        </CardContent>
      </Card>
    </HoverCard>
  );
}