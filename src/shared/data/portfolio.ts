import { PortfolioCompany } from '../../core/types';

export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: 'techflow-solutions',
    name: 'TechFlow Solutions',
    description: 'AI-powered supply chain optimization platform helping enterprises reduce costs and improve efficiency.',
    industry: 'Supply Chain Technology',
    sector: 'tech',
    stage: 'series-b',
    foundedYear: 2019,
    investmentYear: 2021,
    location: 'Dubai, UAE',
    website: 'https://techflow.example.com',
    valuation: '$150M',
    funding: '$25M',
    employees: '150+',
    status: 'active',
    metrics: {
      revenue: '$50M ARR',
      growth: '300% YoY',
      marketShare: '15% in MENA'
    },
    keyAchievements: [
      'Secured partnerships with 5 Fortune 500 companies',
      'Expanded to 12 countries across MENA region',
      'Won "Best AI Innovation" at Dubai Tech Summit 2023'
    ]
  },
  {
    id: 'finpay-digital',
    name: 'FinPay Digital',
    description: 'Digital payment platform enabling seamless cross-border transactions for SMEs in emerging markets.',
    industry: 'Financial Technology',
    sector: 'fintech',
    stage: 'series-a',
    foundedYear: 2020,
    investmentYear: 2022,
    location: 'Singapore',
    website: 'https://finpay.example.com',
    valuation: '$75M',
    funding: '$12M',
    employees: '85+',
    status: 'active',
    metrics: {
      revenue: '$20M ARR',
      growth: '250% YoY',
      marketShare: '8% in Southeast Asia'
    },
    keyAchievements: [
      'Processed over $500M in transactions',
      'Licensed in 8 countries',
      'Featured in Forbes "Fintech 50" list'
    ]
  },
  {
    id: 'healthtech-innovations',
    name: 'HealthTech Innovations',
    description: 'Telemedicine platform connecting patients with healthcare providers across Africa.',
    industry: 'Healthcare Technology',
    sector: 'healthcare',
    stage: 'growth',
    foundedYear: 2018,
    investmentYear: 2020,
    location: 'Lagos, Nigeria',
    website: 'https://healthtech.example.com',
    valuation: '$200M',
    funding: '$40M',
    employees: '300+',
    status: 'active',
    metrics: {
      revenue: '$80M ARR',
      growth: '180% YoY',
      marketShare: '25% in West Africa'
    },
    keyAchievements: [
      'Served over 2 million patients',
      'Partnership with WHO for rural healthcare',
      'IPO preparation underway for Q3 2025'
    ]
  },
  {
    id: 'datastream-analytics',
    name: 'DataStream Analytics',
    description: 'Advanced data analytics platform for financial institutions and investment firms.',
    industry: 'Data Analytics',
    sector: 'tech',
    stage: 'exit',
    foundedYear: 2017,
    investmentYear: 2019,
    location: 'London, UK',
    valuation: '$300M',
    funding: '$35M',
    employees: '200+',
    status: 'exited',
    exitDetails: {
      type: 'acquisition',
      acquirer: 'Bloomberg LP',
      exitYear: 2024,
      exitValue: '$400M'
    },
    keyAchievements: [
      'Acquired by Bloomberg for $400M',
      'Used by 150+ financial institutions globally',
      '5x return for investors'
    ]
  },
  {
    id: 'greenenergy-solutions',
    name: 'GreenEnergy Solutions',
    description: 'Solar energy infrastructure and smart grid technology for emerging markets.',
    industry: 'Renewable Energy',
    sector: 'energy',
    stage: 'series-c',
    foundedYear: 2016,
    investmentYear: 2018,
    location: 'Cairo, Egypt',
    website: 'https://greenenergy.example.com',
    valuation: '$500M',
    funding: '$80M',
    employees: '450+',
    status: 'active',
    metrics: {
      revenue: '$120M ARR',
      growth: '150% YoY',
      marketShare: '20% in North Africa'
    },
    keyAchievements: [
      'Installed 500MW of solar capacity',
      'Government contracts in 6 countries',
      'Carbon credits worth $50M annually'
    ]
  },
  {
    id: 'edutech-platform',
    name: 'EduTech Platform',
    description: 'Online education and skills development platform for emerging market professionals.',
    industry: 'Education Technology',
    sector: 'tech',
    stage: 'series-a',
    foundedYear: 2021,
    investmentYear: 2023,
    location: 'Mumbai, India',
    website: 'https://edutech.example.com',
    valuation: '$100M',
    funding: '$18M',
    employees: '120+',
    status: 'active',
    metrics: {
      revenue: '$25M ARR',
      growth: '400% YoY',
      marketShare: '12% in South Asia'
    },
    keyAchievements: [
      'Over 1 million registered users',
      'Partnerships with 50+ corporations',
      'Achieved profitability in 18 months'
    ]
  }
];

export const portfolioStats = {
  totalCompanies: portfolioCompanies.length,
  activeCompanies: portfolioCompanies.filter(c => c.status === 'active').length,
  exitedCompanies: portfolioCompanies.filter(c => c.status === 'exited').length,
  totalInvestment: '$288M',
  totalValuation: '$1.5B+',
  averageGrowth: '250%',
  sectors: {
    tech: portfolioCompanies.filter(c => c.sector === 'tech').length,
    fintech: portfolioCompanies.filter(c => c.sector === 'fintech').length,
    healthcare: portfolioCompanies.filter(c => c.sector === 'healthcare').length,
    energy: portfolioCompanies.filter(c => c.sector === 'energy').length,
    other: portfolioCompanies.filter(c => !['tech', 'fintech', 'healthcare', 'energy'].includes(c.sector)).length,
  }
};