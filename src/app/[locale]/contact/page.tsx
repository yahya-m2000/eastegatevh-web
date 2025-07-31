import { Metadata } from 'next';
import { MainLayout } from '../../../shared/layouts';
import { ContactForm, OfficeLocations } from '../../../features/contact';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '../../../core/utils/seo';
import { StructuredData } from '../../../shared/components/ui/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - Get in Touch',
  description: 'Contact Eastgate Venture Holdings for investment inquiries, partnerships, or general questions. Find our office locations in Dubai, Singapore, London, Mumbai, and Cairo.',
  keywords: ['contact us', 'investment inquiries', 'venture capital contact', 'office locations', 'partnerships', 'funding request'],
  url: '/contact',
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);
  return (
    <MainLayout>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-16">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            {/* Quick Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-muted/30 rounded-xl">
                <h3 className="font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">General Inquiries</div>
                    <div className="text-muted-foreground">hello@eastgatevh.com</div>
                  </div>
                  <div>
                    <div className="font-medium">Investment Team</div>
                    <div className="text-muted-foreground">investments@eastgatevh.com</div>
                  </div>
                  <div>
                    <div className="font-medium">Media & Press</div>
                    <div className="text-muted-foreground">press@eastgatevh.com</div>
                  </div>
                  <div>
                    <div className="font-medium">Partnership Inquiries</div>
                    <div className="text-muted-foreground">partnerships@eastgatevh.com</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted/30 rounded-xl">
                <h3 className="font-semibold mb-4">Investment Focus</h3>
                <div className="space-y-2 text-sm">
                  <div>• Seed to Series B funding stages</div>
                  <div>• $1M to $50M investment range</div>
                  <div>• Technology-enabled businesses</div>
                  <div>• Emerging markets focus</div>
                  <div>• ESG-compliant companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <OfficeLocations />
    </MainLayout>
  );
}