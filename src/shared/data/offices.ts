import { Office } from '../../core/types';

export const offices: Office[] = [
  {
    id: 'dubai-hq',
    name: 'Dubai Headquarters',
    type: 'headquarters',
    address: {
      street: 'Level 42, Emirates Towers',
      city: 'Dubai',
      country: 'United Arab Emirates',
      postalCode: 'P.O. Box 72253'
    },
    contact: {
      phone: '+971 4 319 8888',
      email: 'dubai@eastgatevh.com',
      fax: '+971 4 319 8899'
    },
    coordinates: {
      lat: 25.2173963,
      lng: 55.2796671
    },
    timezone: 'Asia/Dubai',
    languages: ['English', 'Arabic', 'Hindi'],
    team: {
      size: 15,
      departments: ['Investment', 'Operations', 'Legal', 'Marketing']
    },
    focus: ['MENA Markets', 'Fintech', 'Healthcare', 'Energy'],
    established: 2015
  },
  {
    id: 'singapore-office',
    name: 'Singapore Office',
    type: 'regional',
    address: {
      street: '50 Raffles Place, #32-01',
      city: 'Singapore',
      country: 'Singapore',
      postalCode: '048623'
    },
    contact: {
      phone: '+65 6532 3000',
      email: 'singapore@eastgatevh.com'
    },
    coordinates: {
      lat: 1.2845175,
      lng: 103.8517663
    },
    timezone: 'Asia/Singapore',
    languages: ['English', 'Mandarin', 'Malay'],
    team: {
      size: 12,
      departments: ['Investment', 'Research', 'Portfolio Management']
    },
    focus: ['Southeast Asia', 'Technology', 'B2B SaaS', 'Supply Chain'],
    established: 2018
  },
  {
    id: 'london-office',
    name: 'London Office',
    type: 'regional',
    address: {
      street: '25 Old Broad Street',
      city: 'London',
      country: 'United Kingdom',
      postalCode: 'EC2N 1HN'
    },
    contact: {
      phone: '+44 20 7946 0958',
      email: 'london@eastgatevh.com'
    },
    coordinates: {
      lat: 51.5156177,
      lng: -0.0859583
    },
    timezone: 'Europe/London',
    languages: ['English'],
    team: {
      size: 8,
      departments: ['Regulatory Affairs', 'Investor Relations', 'ESG']
    },
    focus: ['European Markets', 'Regulatory Compliance', 'ESG Investing'],
    established: 2019
  },
  {
    id: 'mumbai-office',
    name: 'Mumbai Office',
    type: 'representative',
    address: {
      street: 'Bandra Kurla Complex, Unit 1504',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      postalCode: '400051'
    },
    contact: {
      phone: '+91 22 6749 7000',
      email: 'mumbai@eastgatevh.com'
    },
    coordinates: {
      lat: 19.0625449,
      lng: 72.8673134
    },
    timezone: 'Asia/Kolkata',
    languages: ['English', 'Hindi', 'Marathi'],
    team: {
      size: 6,
      departments: ['Investment', 'Local Partnerships']
    },
    focus: ['South Asian Markets', 'Healthcare', 'Edtech', 'Fintech'],
    established: 2021
  },
  {
    id: 'cairo-office',
    name: 'Cairo Office',
    type: 'representative',
    address: {
      street: 'Nile City Towers, North Tower, 25th Floor',
      city: 'Cairo',
      country: 'Egypt',
      postalCode: '11624'
    },
    contact: {
      phone: '+20 2 2461 9200',
      email: 'cairo@eastgatevh.com'
    },
    coordinates: {
      lat: 30.0594885,
      lng: 31.2234019
    },
    timezone: 'Africa/Cairo',
    languages: ['English', 'Arabic', 'French'],
    team: {
      size: 5,
      departments: ['Investment', 'ESG', 'Government Relations']
    },
    focus: ['North African Markets', 'Renewable Energy', 'Agriculture Tech'],
    established: 2020
  }
];

export const officeStats = {
  totalOffices: offices.length,
  totalTeamMembers: offices.reduce((sum, office) => sum + office.team.size, 0),
  countries: [...new Set(offices.map(office => office.address.country))].length,
  languages: [...new Set(offices.flatMap(office => office.languages))],
  focusAreas: [...new Set(offices.flatMap(office => office.focus))]
};

export const getOfficesByType = (type: Office['type']) => {
  return offices.filter(office => office.type === type);
};

export const getOfficeById = (id: string) => {
  return offices.find(office => office.id === id);
};