'use client';

import { Target, Eye, Heart, Lightbulb, Globe, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/components/ui/card';

export function MissionVision() {
  const t = useTranslations('about');

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We seek out groundbreaking technologies and business models that have the potential to transform industries and create new markets.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our investments focus on solutions that can scale globally while addressing the unique challenges of emerging markets.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work closely with entrepreneurs as true partners, providing not just capital but strategic guidance and operational support.'
    },
    {
      icon: Heart,
      title: 'Sustainable Growth',
      description: 'We prioritize investments that create long-term value for all stakeholders while contributing to positive social and environmental outcomes.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">{t('mission')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate innovation and economic growth in emerging markets by partnering with 
                visionary entrepreneurs and providing them with the capital, expertise, and networks 
                needed to build transformative companies that create lasting value for all stakeholders.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">{t('vision')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading venture capital firm bridging the gap between emerging market 
                innovation and global opportunities, fostering a new generation of companies that 
                drive sustainable economic development and technological advancement worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('values')}</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core values guide every investment decision and partnership we forge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in 2015, Eastgate Venture Holdings emerged from a simple but powerful observation: 
              the world's most innovative solutions often come from entrepreneurs who understand the unique 
              challenges of emerging markets firsthand.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our founders, having witnessed the transformative potential of technology in developing economies, 
              set out to create a venture capital firm that could bridge the gap between local innovation and 
              global opportunities. Today, with offices across three continents and a portfolio of 50+ companies, 
              we continue to champion entrepreneurs who are building the future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From fintech solutions revolutionizing financial inclusion to healthcare platforms expanding 
              access to quality care, our portfolio companies are not just building successful businesses—they're 
              creating positive impact for millions of people across emerging markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}