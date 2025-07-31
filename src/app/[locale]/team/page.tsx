import { Metadata } from 'next';
import { MainLayout } from '../../../shared/layouts';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '../../../core/utils/seo';
import { StructuredData } from '../../../shared/components/ui/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Team - Investment Experts',
  description: 'Meet the experienced team at Eastgate Venture Holdings. Our investment professionals bring decades of experience in venture capital and emerging markets.',
  keywords: ['investment team', 'venture capital experts', 'managing partners', 'investment directors'],
  url: '/team',
});

export default function TeamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Team', url: '/team' }
  ]);

  return (
    <MainLayout>
      <StructuredData data={breadcrumbSchema} />
      <div className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals driving innovation in venture capital.
          </p>
        </div>
        
        <div className="text-center py-16">
          <p className="text-muted-foreground">Team page coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
}