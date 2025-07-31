export interface PortfolioCompany {
  id: string;
  name: string;
  description: string;
  industry: string;
  sector: 'tech' | 'fintech' | 'healthcare' | 'logistics' | 'energy' | 'other';
  stage: 'seed' | 'series-a' | 'series-b' | 'series-c' | 'growth' | 'exit';
  foundedYear: number;
  investmentYear: number;
  location: string;
  website?: string;
  logo?: string;
  valuation?: string;
  funding?: string;
  employees?: string;
  status: 'active' | 'exited' | 'ipo';
  exitDetails?: {
    type: 'acquisition' | 'ipo' | 'merger';
    acquirer?: string;
    exitYear: number;
    exitValue?: string;
  };
  metrics?: {
    revenue?: string;
    growth?: string;
    marketShare?: string;
  };
  keyAchievements?: string[];
}