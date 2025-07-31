import { Metadata } from 'next';
import { MainLayout } from '../../../shared/layouts';
import { MissionVision, TeamSection } from '../../../features/about';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '../../../core/utils/seo';
import { StructuredData } from '../../../shared/components/ui/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Us - Venture Capital Excellence',
  description: 'Learn about Eastgate Venture Holdings mission, vision, and experienced team. We are dedicated to driving innovation through strategic investments in emerging markets and transformative technologies.',
  keywords: ['about us', 'venture capital firm', 'investment team', 'company mission', 'emerging markets', 'strategic investments'],
  url: '/about',
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  return (
    <MainLayout>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-16">
        <div className="container text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Eastgate</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Venture Capital Excellence in Emerging Markets
          </p>
        </div>
      </div>
      <MissionVision />
      <TeamSection />
    </MainLayout>
  );
}