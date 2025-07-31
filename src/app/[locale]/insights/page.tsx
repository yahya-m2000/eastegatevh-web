import { Metadata } from 'next';
import { MainLayout } from '../../../shared/layouts';
import { InsightsGrid } from '../../../features/insights';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '../../../core/utils/seo';
import { StructuredData } from '../../../shared/components/ui/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Market Insights & Analysis',
  description: 'Expert insights on venture capital trends, market analysis, and investment strategies from Eastgate Venture Holdings. Stay informed with our latest research and thought leadership.',
  keywords: ['market insights', 'venture capital trends', 'investment analysis', 'market research', 'startup trends', 'industry reports'],
  url: '/insights',
});

export default function InsightsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' }
  ]);

  return (
    <MainLayout>
      <StructuredData data={breadcrumbSchema} />
      <InsightsGrid />
    </MainLayout>
  );
}