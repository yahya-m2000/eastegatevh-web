'use client';

import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { InsightArticle } from '../../../core/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { HoverCard } from './hover-card';
import { Link } from '../../../i18n/navigation';
import { cn } from '../../../core/utils/cn';

interface ArticleCardProps {
  article: InsightArticle;
  featured?: boolean;
  className?: string;
}

const categoryColors = {
  market: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  tech: 'bg-green-500/10 text-green-700 dark:text-green-300',
  strategy: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
  regulatory: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  trends: 'bg-pink-500/10 text-pink-700 dark:text-pink-300',
};

export function ArticleCard({ article, featured = false, className }: ArticleCardProps) {
  const categoryColor = categoryColors[article.category] || categoryColors.market;
  const publishedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (featured) {
    return (
      <HoverCard shadowIntensity="strong" glowEffect className={className}>
        <Card className="h-full overflow-hidden">
          {/* Featured Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary/20">
            {article.title.charAt(0)}
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn("px-2 py-1 rounded-full text-xs font-medium", categoryColor)}>
              {article.category}
            </span>
            {article.featured && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-700 dark:text-yellow-300">
                Featured
              </span>
            )}
          </div>
          
          <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
          
          <CardDescription className="text-sm leading-relaxed">
            {article.excerpt}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{publishedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          {/* Read More Button */}
          <Button asChild variant="outline" size="sm" className="group/btn">
            <Link href={`/insights/${article.slug}`}>
              Read More
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
        </Card>
      </HoverCard>
    );
  }

  return (
    <HoverCard shadowIntensity="medium" className={className}>
      <Card className="h-full">
        <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className={cn("px-2 py-1 rounded-full text-xs font-medium", categoryColor)}>
            {article.category}
          </span>
        </div>
        
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
          <Link href={`/insights/${article.slug}`} className="hover:no-underline">
            {article.title}
          </Link>
        </CardTitle>
        
        <CardDescription className="text-sm leading-relaxed">
          {article.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Author */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">
              {article.author.name.split(' ').map(n => n.charAt(0)).join('')}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium">{article.author.name}</p>
            <p className="text-xs text-muted-foreground">{article.author.role}</p>
          </div>
        </div>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{publishedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{article.readTime} min</span>
          </div>
        </div>
        </CardContent>
      </Card>
    </HoverCard>
  );
}