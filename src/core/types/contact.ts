export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  role?: string;
  phone?: string;
  inquiryType: 'investment' | 'partnership' | 'media' | 'careers' | 'general';
  message: string;
  fundingStage?: 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth' | 'other';
  fundingAmount?: string;
  industry?: string;
  location?: string;
  timeline?: string;
  hearAboutUs?: string;
  newsletter?: boolean;
}

export interface Office {
  id: string;
  name: string;
  type: 'headquarters' | 'regional' | 'representative';
  address: {
    street: string;
    city: string;
    state?: string;
    country: string;
    postalCode: string;
  };
  contact: {
    phone: string;
    email: string;
    fax?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  timezone: string;
  languages: string[];
  team: {
    size: number;
    departments: string[];
  };
  focus: string[];
  established: number;
}

export type InquiryType = ContactForm['inquiryType'];
export type FundingStage = ContactForm['fundingStage'];
export type OfficeType = Office['type'];