export interface SimpleMember {
  id: string;
  name: string;
  position: string;
  location: string;
  bio: string;
  experience: number;
  linkedin?: string;
}

export const mockTeamMembers: SimpleMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    position: "Managing Partner",
    location: "Dubai, UAE",
    bio: "Leading strategic investments across emerging markets with 15+ years of venture capital experience.",
    experience: 15,
    linkedin: "https://linkedin.com/in/sarah-chen",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    position: "Investment Director",
    location: "Singapore",
    bio: "Specializing in technology investments and portfolio company growth acceleration.",
    experience: 12,
    linkedin: "https://linkedin.com/in/michael-rodriguez",
  },
  {
    id: "3",
    name: "Dr. Amira Hassan",
    position: "ESG Investment Lead",
    location: "London, UK",
    bio: "Expert in sustainable investing and impact measurement across diverse sectors.",
    experience: 10,
    linkedin: "https://linkedin.com/in/amira-hassan",
  },
];