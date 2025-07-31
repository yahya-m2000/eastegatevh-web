'use client';

import { useState } from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TeamCard } from '../../../shared/components/ui/team-card';
import { Button } from '../../../shared/components/ui/button';
import { teamMembers, teamDepartments, teamStats } from '../../../shared/data/team';
import { TeamMember } from '../../../core/types';
import { cn } from '../../../core/utils/cn';

type DepartmentFilter = 'all' | 'leadership' | 'investment' | 'operations' | 'advisory';

export function TeamSection() {
  const [activeFilter, setActiveFilter] = useState<DepartmentFilter>('all');
  const [showDetailed, setShowDetailed] = useState(false);
  const t = useTranslations('about');

  const filterTeamMembers = (members: TeamMember[], filter: DepartmentFilter): TeamMember[] => {
    if (filter === 'all') {
      return members;
    }
    return members.filter(member => member.department === filter);
  };

  const filteredMembers = filterTeamMembers(teamMembers, activeFilter);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('team')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Meet the experienced professionals driving innovation and growth across emerging markets through strategic venture capital investments.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{teamStats.totalMembers}+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Award className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{teamStats.averageExperience}+</div>
            <div className="text-sm text-muted-foreground">Avg. Experience</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{teamStats.totalPortfolioCompanies}+</div>
            <div className="text-sm text-muted-foreground">Portfolio Companies</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Globe className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{teamStats.globalLocations}</div>
            <div className="text-sm text-muted-foreground">Global Offices</div>
          </div>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {teamDepartments.map((department) => (
            <Button
              key={department.key}
              variant={activeFilter === department.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(department.key as DepartmentFilter)}
              className="min-w-0"
            >
              {department.name} ({department.count})
            </Button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border p-1">
            <Button
              variant={!showDetailed ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setShowDetailed(false)}
            >
              Grid View
            </Button>
            <Button
              variant={showDetailed ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setShowDetailed(true)}
            >
              Detailed View
            </Button>
          </div>
        </div>

        {/* Team Grid */}
        <div className={cn(
          "grid gap-6",
          showDetailed 
            ? "grid-cols-1 lg:grid-cols-2" 
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}>
          {filteredMembers.map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              detailed={showDetailed}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No team members found for the selected department.
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveFilter('all')}
            >
              View All Team Members
            </Button>
          </div>
        )}

        {/* Join Us CTA */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our mission of driving innovation 
            across emerging markets. Explore opportunities to make a meaningful impact.
          </p>
          <Button size="lg">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
}