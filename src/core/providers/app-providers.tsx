'use client';

import { QueryProvider } from './query-client-provider';
import { ThemeProvider } from './theme-provider';
import { PerformanceProvider } from './performance-provider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <PerformanceProvider>
          {children}
        </PerformanceProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}