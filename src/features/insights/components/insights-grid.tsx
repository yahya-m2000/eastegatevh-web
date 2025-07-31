'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArticleCard } from '../../../shared/components/ui/article-card';
import { Button } from '../../../shared/components/ui/button';
import { insightArticles, articleCategories } from '../../../shared/data/insights';
import { InsightArticle } from '../../../core/types';

type CategoryFilter = 'all' | 'market' | 'tech' | 'strategy' | 'regulatory' | 'trends';

export function InsightsGrid() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const t = useTranslations('insights');

  const filterArticles = (articles: InsightArticle[], filter: CategoryFilter): InsightArticle[] => {
    if (filter === 'all') {
      return articles;
    }
    return articles.filter(article => article.category === filter);
  };

  const filteredArticles = filterArticles(insightArticles, activeFilter);
  const featuredArticle = filteredArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured || activeFilter !== 'all');

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {articleCategories.map((category) => (
            <Button
              key={category.key}
              variant={activeFilter === category.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(category.key as CategoryFilter)}
              className="min-w-0"
            >
              {t(`categories.${category.key}`)} ({category.count})
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && activeFilter === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <ArticleCard article={featuredArticle} featured className="max-w-4xl mx-auto" />
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No articles found for the selected category.
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveFilter('all')}
            >
              View All Articles
            </Button>
          </div>
        )}

        {/* Load More Button (Placeholder) */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}