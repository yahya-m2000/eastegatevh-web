export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'leadership' | 'investment' | 'operations' | 'advisory';
  bio: string;
  expertise: string[];
  education: {
    degree: string;
    institution: string;
    year?: number;
  }[];
  experience: {
    company: string;
    role: string;
    years?: string;
    description?: string;
  }[];
  achievements: string[];
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  languages?: string[];
  location: string;
  joinedYear: number;
}