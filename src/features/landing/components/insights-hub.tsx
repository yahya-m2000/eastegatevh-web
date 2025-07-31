import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../../../shared/components/ui/button";
import { Card, CardContent } from "../../../shared/components/ui/card";
import { FadeIn } from "../../../shared/components/ui/fade-in";
import { StaggerContainer } from "../../../shared/components/ui/stagger-container";
import { HoverCard } from "../../../shared/components/ui/hover-card";
import { Link } from "../../../i18n/navigation";
// Mock insights data outside component to avoid rendering issues
const MOCK_INSIGHTS = [
  {
    id: "1",
    title: "Emerging Markets: The Next Frontier for Venture Capital",
    excerpt:
      "As traditional markets mature, venture capital is increasingly flowing toward emerging economies.",
    publishedAt: "2025-01-15",
    readTime: "8 min",
    category: "market",
    slug: "emerging-markets-vc",
  },
  {
    id: "2",
    title: "The AI Revolution: How Startups Are Reshaping Industries",
    excerpt:
      "Artificial intelligence is no longer just a buzzword. Startups are leveraging AI to disrupt traditional industries.",
    publishedAt: "2025-01-10",
    readTime: "6 min",
    category: "tech",
    slug: "ai-revolution-startups",
  },
  {
    id: "3",
    title: "Sustainable Investing: The Future of Venture Capital",
    excerpt:
      "ESG considerations are no longer optional in venture capital. Learn how sustainable investing practices are driving returns.",
    publishedAt: "2025-01-05",
    readTime: "7 min",
    category: "strategy",
    slug: "sustainable-investing-future",
  },
];

export function InsightsHub() {
  const t = useTranslations("insights");
  const featuredInsights = MOCK_INSIGHTS;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        {/* Featured Articles */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredInsights.length > 0 ? (
            featuredInsights.map((insight) => (
              <HoverCard key={insight.id} shadowIntensity="strong">
                <Link href={`/insights/${insight.slug}`}>
                  <Card className="h-full">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg flex items-center justify-center">
                        <div className="text-4xl font-bold text-primary/30">
                          {insight.title.charAt(0)}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {insight.publishedAt}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {insight.readTime}
                          </div>
                        </div>

                        <h3 className="font-semibold text-lg mb-2 leading-tight line-clamp-2">
                          {insight.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {insight.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {insight.category}
                          </span>
                          <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </HoverCard>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No insights available at the moment.
              </p>
            </div>
          )}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/insights">
                View All Insights
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
