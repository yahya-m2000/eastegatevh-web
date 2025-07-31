import { ArrowRight, MapPin, Linkedin } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";
import { Card, CardContent } from "../../../shared/components/ui/card";
import { FadeIn } from "../../../shared/components/ui/fade-in";
import { StaggerContainer } from "../../../shared/components/ui/stagger-container";
import { HoverCard } from "../../../shared/components/ui/hover-card";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

interface SimpleMember {
  id: string;
  name: string;
  position: string;
  location: string;
  bio: string;
  experience: number;
  linkedin?: string;
}

interface TeamPreviewProps {
  members: SimpleMember[];
}

export function TeamPreview({ members }: TeamPreviewProps) {
  const t = useTranslations("team");
  const featuredMembers = (members || []).slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
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

        {/* Featured Team Members */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredMembers.map((member) => (
            <HoverCard key={member.id} shadowIntensity="strong" hoverY={-8}>
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .join("")}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.position}
                  </p>

                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-4">
                    <MapPin className="h-3 w-3" />
                    {member.location}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      {member.experience}+ years
                    </span>
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        className="text-primary hover:text-primary/80"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </HoverCard>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/team">
                {t("viewAll")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
