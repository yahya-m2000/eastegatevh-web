import { TeamMember } from '../../core/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Managing Partner & CEO',
    department: 'leadership',
    bio: 'Sarah leads Eastgate Venture Holdings with over 15 years of experience in venture capital and private equity. She has successfully led investments in 50+ companies across emerging markets, with a focus on fintech and healthcare innovation.',
    expertise: ['Venture Capital', 'Emerging Markets', 'Fintech', 'Healthcare', 'Strategic Planning'],
    education: [
      {
        degree: 'MBA',
        institution: 'Harvard Business School',
        year: 2008
      },
      {
        degree: 'BSc Computer Science',
        institution: 'Stanford University',
        year: 2004
      }
    ],
    experience: [
      {
        company: 'Goldman Sachs',
        role: 'VP, Private Equity',
        years: '2008-2015',
        description: 'Led technology investments across Asia-Pacific region'
      },
      {
        company: 'McKinsey & Company',
        role: 'Senior Associate',
        years: '2004-2006',
        description: 'Strategy consulting for Fortune 500 companies'
      }
    ],
    achievements: [
      'Named to Forbes "Midas List" of top venture capitalists 2023',
      'Led $400M exit of DataStream Analytics to Bloomberg',
      'Recognized as "VC of the Year" by TechCrunch MENA 2022',
      'Board member of 12 portfolio companies'
    ],
    linkedin: 'https://linkedin.com/in/sarah-chen-vc',
    languages: ['English', 'Mandarin', 'Arabic'],
    location: 'Dubai, UAE',
    joinedYear: 2015
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Investment Director',
    department: 'investment',
    bio: 'Michael specializes in early-stage technology investments with a focus on AI and machine learning startups. He brings deep technical expertise and has been instrumental in sourcing and evaluating our most successful tech investments.',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'SaaS', 'B2B Technology', 'Product Strategy'],
    education: [
      {
        degree: 'MS Computer Science',
        institution: 'MIT',
        year: 2012
      },
      {
        degree: 'BS Electrical Engineering',
        institution: 'UC Berkeley',
        year: 2010
      }
    ],
    experience: [
      {
        company: 'Sequoia Capital',
        role: 'Principal',
        years: '2018-2022',
        description: 'Led seed and Series A investments in AI startups'
      },
      {
        company: 'Google',
        role: 'Senior Software Engineer',
        years: '2012-2018',
        description: 'Machine learning infrastructure and product development'
      }
    ],
    achievements: [
      'Led investments in 3 unicorn companies',
      'Published 15+ papers on ML applications in finance',
      'Former Google AI team member',
      'TEDx speaker on AI in venture capital'
    ],
    linkedin: 'https://linkedin.com/in/michael-rodriguez-vc',
    twitter: 'https://twitter.com/mrodriguez_vc',
    languages: ['English', 'Spanish'],
    location: 'Singapore',
    joinedYear: 2022
  },
  {
    id: 'amira-hassan',
    name: 'Dr. Amira Hassan',
    role: 'ESG Investment Lead',
    department: 'investment',
    bio: 'Dr. Hassan leads our ESG and impact investing initiatives. With a PhD in Environmental Economics and 12 years of experience in sustainable finance, she ensures our investments create positive environmental and social impact.',
    expertise: ['ESG Investing', 'Impact Measurement', 'Environmental Finance', 'Sustainable Development', 'Climate Technology'],
    education: [
      {
        degree: 'PhD Environmental Economics',
        institution: 'London School of Economics',
        year: 2015
      },
      {
        degree: 'MSc Finance',
        institution: 'Cambridge University',
        year: 2011
      },
      {
        degree: 'BSc Economics',
        institution: 'American University of Cairo',
        year: 2009
      }
    ],
    experience: [
      {
        company: 'IFC (World Bank Group)',
        role: 'Senior Investment Officer',
        years: '2015-2020',
        description: 'Led sustainable finance initiatives across MENA region'
      },
      {
        company: 'HSBC',
        role: 'ESG Analyst',
        years: '2011-2015',
        description: 'Developed ESG frameworks for institutional clients'
      }
    ],
    achievements: [
      'Certified ESG Investment Advisor (CESA)',
      'Led $200M green energy investment program',
      'UN Women Global Champion for Gender Lens Investing',
      'Author of "Sustainable Finance in Emerging Markets"'
    ],
    linkedin: 'https://linkedin.com/in/dr-amira-hassan',
    languages: ['English', 'Arabic', 'French'],
    location: 'Cairo, Egypt',
    joinedYear: 2020
  },
  {
    id: 'james-thompson',
    name: 'James Thompson',
    role: 'Regulatory Affairs Advisor',
    department: 'advisory',
    bio: 'James provides strategic guidance on regulatory compliance and policy matters across our portfolio companies. His extensive background in financial regulation helps navigate complex compliance landscapes.',
    expertise: ['Financial Regulation', 'Compliance', 'Fintech Policy', 'Risk Management', 'Cross-border Finance'],
    education: [
      {
        degree: 'JD Law',
        institution: 'Oxford University',
        year: 2005
      },
      {
        degree: 'BA Politics & Economics',
        institution: 'Cambridge University',
        year: 2002
      }
    ],
    experience: [
      {
        company: 'Bank of England',
        role: 'Senior Policy Advisor',
        years: '2010-2018',
        description: 'Fintech regulation and digital currency policy development'
      },
      {
        company: 'Linklaters',
        role: 'Senior Associate',
        years: '2005-2010',
        description: 'Financial services regulatory law'
      }
    ],
    achievements: [
      'Co-authored UK Open Banking regulations',
      'Advised on 50+ fintech licensing applications',
      'Regular speaker at global fintech conferences',
      'Member of FSB FinTech Task Force'
    ],
    linkedin: 'https://linkedin.com/in/james-thompson-regulatory',
    languages: ['English'],
    location: 'London, UK',
    joinedYear: 2018
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Investment Associate',
    department: 'investment',
    bio: 'Priya focuses on healthcare and biotech investments across South Asia. She brings a unique combination of medical knowledge and financial expertise to evaluate complex healthcare innovations.',
    expertise: ['Healthcare Technology', 'Biotech', 'Medical Devices', 'Digital Health', 'Regulatory Affairs'],
    education: [
      {
        degree: 'MD Medicine',
        institution: 'All Institute of Medical Sciences',
        year: 2016
      },
      {
        degree: 'MBA Healthcare Management',
        institution: 'Indian School of Business',
        year: 2019
      }
    ],
    experience: [
      {
        company: 'Temasek Holdings',
        role: 'Investment Analyst',
        years: '2019-2023',
        description: 'Healthcare and life sciences investments'
      },
      {
        company: 'Apollo Hospitals',
        role: 'Medical Officer',
        years: '2016-2017',
        description: 'Clinical practice and healthcare operations'
      }
    ],
    achievements: [
      'Led $50M investment in telemedicine platform',
      'Certified Medical Professional (MBBS)',
      'Published research on digital health adoption',
      'Youngest partner at previous firm'
    ],
    linkedin: 'https://linkedin.com/in/priya-sharma-healthtech',
    languages: ['English', 'Hindi', 'Tamil'],
    location: 'Mumbai, India',
    joinedYear: 2023
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Chief Financial Officer',
    department: 'operations',
    bio: 'David oversees all financial operations, fund management, and investor relations. His expertise in structured finance and fund operations ensures optimal capital allocation and returns for our LPs.',
    expertise: ['Fund Management', 'Financial Operations', 'Investor Relations', 'Structured Finance', 'Treasury Management'],
    education: [
      {
        degree: 'MBA Finance',
        institution: 'Wharton School',
        year: 2010
      },
      {
        degree: 'BS Accounting',
        institution: 'Seoul National University',
        year: 2006
      }
    ],
    experience: [
      {
        company: 'KKR',
        role: 'VP Fund Operations',
        years: '2015-2020',
        description: 'Managed $5B+ in fund operations and LP relations'
      },
      {
        company: 'PwC',
        role: 'Senior Manager',
        years: '2010-2015',
        description: 'Financial advisory for private equity and VC funds'
      }
    ],
    achievements: [
      'CPA and CFA certified',
      'Managed 3 successful fund closes totaling $800M',
      'Implemented ESG reporting framework',
      'Reduced operational costs by 25%'
    ],
    linkedin: 'https://linkedin.com/in/david-kim-cfo',
    languages: ['English', 'Korean'],
    location: 'Singapore',
    joinedYear: 2020
  }
];

export const teamDepartments = [
  { 
    key: 'all', 
    name: 'All Team', 
    count: teamMembers.length 
  },
  { 
    key: 'leadership', 
    name: 'Leadership', 
    count: teamMembers.filter(m => m.department === 'leadership').length 
  },
  { 
    key: 'investment', 
    name: 'Investment Team', 
    count: teamMembers.filter(m => m.department === 'investment').length 
  },
  { 
    key: 'operations', 
    name: 'Operations', 
    count: teamMembers.filter(m => m.department === 'operations').length 
  },
  { 
    key: 'advisory', 
    name: 'Advisory', 
    count: teamMembers.filter(m => m.department === 'advisory').length 
  }
] as const;

export const teamStats = {
  totalMembers: teamMembers.length,
  averageExperience: 12,
  totalPortfolioCompanies: 50,
  combinedInvestmentExperience: 85,
  globalLocations: ['Dubai', 'Singapore', 'London', 'Mumbai', 'Cairo'].length
};