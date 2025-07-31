// Spacing system using 8px grid
export const spacing = {
  // Base spacing scale (8px grid)
  0: '0px',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
  56: '14rem',     // 224px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
} as const;

// Semantic spacing for components
export const componentSpacing = {
  // Container spacing
  container: {
    padding: {
      mobile: spacing[4],      // 16px
      tablet: spacing[6],      // 24px
      desktop: spacing[8],     // 32px
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  
  // Section spacing
  section: {
    padding: {
      y: {
        mobile: spacing[16],   // 64px
        tablet: spacing[20],   // 80px
        desktop: spacing[24],  // 96px
      },
    },
    gap: {
      small: spacing[8],       // 32px
      medium: spacing[12],     // 48px
      large: spacing[16],      // 64px
    },
  },
  
  // Component spacing
  component: {
    // Cards
    card: {
      padding: spacing[6],     // 24px
      gap: spacing[4],         // 16px
    },
    
    // Buttons
    button: {
      padding: {
        sm: { x: spacing[3], y: spacing[2] },    // 12px x 8px
        md: { x: spacing[4], y: spacing[3] },    // 16px x 12px
        lg: { x: spacing[6], y: spacing[4] },    // 24px x 16px
      },
      gap: spacing[2],         // 8px
    },
    
    // Forms
    form: {
      fieldGap: spacing[4],    // 16px
      labelGap: spacing[2],    // 8px
      inputPadding: spacing[3], // 12px
    },
    
    // Navigation
    nav: {
      padding: spacing[4],     // 16px
      itemGap: spacing[6],     // 24px
      height: spacing[16],     // 64px
    },
  },
} as const;

// Border radius system
export const borderRadius = {
  none: '0px',
  sm: '0.125rem',    // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;