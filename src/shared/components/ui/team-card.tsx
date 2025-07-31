'use client';

import { MapPin, Calendar, Linkedin, Twitter, Mail, Globe, GraduationCap, Briefcase } from 'lucide-react';
import { TeamMember } from '../../../core/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { HoverCard } from './hover-card';
import { cn } from '../../../core/utils/cn';

interface TeamCardProps {
  member: TeamMember;
  detailed?: boolean;
  className?: string;
}

const departmentColors = {
  leadership: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
  investment: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  operations: 'bg-green-500/10 text-green-700 dark:text-green-300',
  advisory: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
};

export function TeamCard({ member, detailed = false, className }: TeamCardProps) {
  const departmentColor = departmentColors[member.department];
  const initials = member.name.split(' ').map(n => n.charAt(0)).join('');

  if (detailed) {
    return (
      <HoverCard shadowIntensity="strong" glowEffect className={className}>
        <Card className="h-full">
          <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-primary">{initials}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={cn("px-2 py-1 rounded-full text-xs font-medium", departmentColor)}>
                  {member.department}
                </span>
              </div>
              
              <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
              <CardDescription className="text-base font-medium text-primary mb-2">
                {member.role}
              </CardDescription>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Joined {member.joinedYear}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Bio */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.bio}
          </p>

          {/* Expertise */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {member.expertise.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          {member.education.length > 0 && (
            <div>
              <h4 className="font-medium mb-2 text-sm flex items-center gap-2">
                <GraduationCap className="h-3 w-3" />
                Education
              </h4>
              <div className="space-y-2">
                {member.education.slice(0, 2).map((edu, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground">
                      {edu.institution} {edu.year && `• ${edu.year}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Achievements */}
          {member.achievements.length > 0 && (
            <div>
              <h4 className="font-medium mb-2 text-sm">Key Achievements</h4>
              <ul className="space-y-1">
                {member.achievements.slice(0, 3).map((achievement, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Links */}
          <div className="flex items-center gap-2 pt-2 border-t">
            {member.linkedin && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                asChild
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
            {member.twitter && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                asChild
              >
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            )}
            {member.email && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                asChild
              >
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            )}
            
            {/* Languages */}
            {member.languages && member.languages.length > 0 && (
              <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span>{member.languages.join(', ')}</span>
              </div>
            )}
          </div>
        </CardContent>
        </Card>
      </HoverCard>
    );
  }

  // Simple card layout
  return (
    <HoverCard shadowIntensity="medium" hoverY={-8} className={className}>
      <Card className="h-full text-center">
        <CardHeader className="pb-3">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-xl font-bold text-primary">{initials}</span>
        </div>
        
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <CardDescription className="text-primary font-medium">
          {member.role}
        </CardDescription>
        
        <div className="flex items-center justify-center gap-1 mt-2">
          <MapPin className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{member.location}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Department Badge */}
        <span className={cn("inline-block px-2 py-1 rounded-full text-xs font-medium", departmentColor)}>
          {member.department}
        </span>

        {/* Top Expertise */}
        <div className="flex flex-wrap justify-center gap-1">
          {member.expertise.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-1 pt-2">
          {member.linkedin && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              asChild
            >
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="h-3 w-3" />
              </a>
            </Button>
          )}
          {member.twitter && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              asChild
            >
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Twitter`}
              >
                <Twitter className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
        </CardContent>
      </Card>
    </HoverCard>
  );
}