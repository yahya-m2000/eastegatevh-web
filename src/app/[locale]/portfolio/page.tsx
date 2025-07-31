import { Metadata } from 'next';
import { MainLayout } from '../../../shared/layouts';
import { PortfolioGrid } from '../../../features/portfolio';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '../../../core/utils/seo';
import { StructuredData } from '../../../shared/components/ui/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Investment Portfolio',
  description: 'Explore Eastgate Venture Holdings portfolio of 50+ innovative companies across technology, fintech, healthcare, and emerging markets. Our strategic investments drive growth and transformation.',
  keywords: ['investment portfolio', 'portfolio companies', 'venture capital investments', 'startup portfolio', 'tech investments'],
  url: '/portfolio',
});

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' }
  ]);

  return (
    <MainLayout>
      <StructuredData data={breadcrumbSchema} />
      <PortfolioGrid />
    </MainLayout>
  );
}