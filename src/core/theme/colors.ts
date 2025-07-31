// Corporate color palette for Eastgate Venture Holdings
export const colors = {
  // Primary brand colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main brand blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  
  // Secondary colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  
  // Accent colors
  accent: {
    emerald: {
      50: '#ecfdf5',
      500: '#10b981',
      600: '#059669',
    },
    amber: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
    },
    red: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
    },
  },
  
  // Neutral colors
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
} as const;

// Semantic color mappings
export const semanticColors = {
  // Background colors
  background: {
    primary: colors.neutral[0],
    secondary: colors.neutral[50],
    tertiary: colors.neutral[100],
    dark: colors.neutral[950],
    darkSecondary: colors.neutral[900],
  },
  
  // Text colors
  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[600],
    tertiary: colors.neutral[500],
    inverse: colors.neutral[0],
    inverseDark: colors.neutral[100],
  },
  
  // Brand colors
  brand: {
    primary: colors.primary[500],
    primaryHover: colors.primary[600],
    primaryActive: colors.primary[700],
  },
  
  // Status colors
  status: {
    success: colors.accent.emerald[500],
    warning: colors.accent.amber[500],
    error: colors.accent.red[500],
    info: colors.primary[500],
  },
  
  // Border colors
  border: {
    primary: colors.neutral[200],
    secondary: colors.neutral[300],
    dark: colors.neutral[700],
  },
} as const;