import { Metadata } from "next";
import { MainLayout } from "../../shared/layouts";
import {
  HeroSection,
  PortfolioPreview,
  TeamPreview,
  ContactCTA,
} from "../../features/landing";
import {
  generateMetadata as generateSEOMetadata,
  generateBreadcrumbSchema,
} from "../../core/utils/seo";
import { StructuredData } from "../../shared/components/ui/structured-data";
import { mockTeamMembers } from "../../shared/data/mock-team";
import { InsightsHub } from "@/features/landing/components/insights-hub";

export const metadata: Metadata = generateSEOMetadata({
  title: "Strategic Venture Capital Investments",
  description:
    "Eastgate Venture Holdings drives innovation through strategic investments in emerging markets and transformative technologies. Discover our portfolio of 50+ companies across tech, fintech, and healthcare.",
  keywords: [
    "venture capital",
    "strategic investments",
    "emerging markets",
    "startup funding",
    "portfolio companies",
  ],
  url: "/",
});

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  return (
    <MainLayout>
      <StructuredData data={breadcrumbSchema} />
      <HeroSection />
      <PortfolioPreview />
      <InsightsHub />
      <TeamPreview members={mockTeamMembers} />
      <ContactCTA />
    </MainLayout>
  );
}
