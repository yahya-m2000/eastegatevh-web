// Typography system for professional venture capital website
export const typography = {
  // Font families (using Satoshi)
  fontFamily: {
    sans: ['var(--font-satoshi)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
  },
  
  // Font sizes with line heights
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],          // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],      // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],         // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],      // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],       // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
    '5xl': ['3rem', { lineHeight: '1' }],             // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }],          // 60px
    '7xl': ['4.5rem', { lineHeight: '1' }],           // 72px
    '8xl': ['6rem', { lineHeight: '1' }],             // 96px
    '9xl': ['8rem', { lineHeight: '1' }],             // 128px
  },
  
  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

// Semantic typography styles
export const textStyles = {
  // Headings
  h1: {
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.lineHeight.tight,
  },
  h2: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.lineHeight.tight,
  },
  h3: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.lineHeight.snug,
  },
  h4: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.lineHeight.snug,
  },
  h5: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.lineHeight.normal,
  },
  h6: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.lineHeight.normal,
  },
  
  // Body text
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.lineHeight.relaxed,
  },
  bodyLarge: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.lineHeight.relaxed,
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.lineHeight.normal,
  },
  
  // Special text styles
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.wide,
    lineHeight: typography.lineHeight.normal,
  },
  overline: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.widest,
    lineHeight: typography.lineHeight.normal,
    textTransform: 'uppercase' as const,
  },
  quote: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.lineHeight.relaxed,
    fontStyle: 'italic' as const,
  },
} as const;