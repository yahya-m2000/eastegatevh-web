# Eastgate Venture Holdings

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

> **Status:** Alpha Release 🚧  
> **Live Site:** [eastgatevh.vercel.app](https://eastgatevh.vercel.app) (Replace with actual domain)

A modern, multilingual venture capital website built with Next.js 15, featuring strategic investments, portfolio showcase, and comprehensive market insights.

## ✨ Features

### 🌐 **Internationalization**
- **Multi-language support**: English, Arabic, French
- **RTL Support** for Arabic content
- **Dynamic locale routing** with Next.js 15 App Router

### 🎨 **Modern Design System**
- **Satoshi font family** for premium typography
- **shadcn/ui components** with custom theming
- **Framer Motion animations** and micro-interactions
- **Responsive design** across all devices
- **Dark/Light mode** with system preference detection

### 🏗️ **Architecture**
- **Modular structure**: `core/features/shared` pattern
- **Type-safe** with TypeScript and strict mode
- **Performance optimized** with image optimization and lazy loading
- **SEO optimized** with structured data and meta tags

### 📊 **Business Features**
- **Portfolio showcase** with filtering and search
- **Team profiles** with dynamic member pages
- **Market insights** and research articles
- **Contact forms** with office locations
- **Investment criteria** and process documentation

### 🛠️ **Developer Experience**
- **Hot reloading** with Next.js Fast Refresh
- **ESLint + Prettier** for code quality
- **GitHub Actions** for CI/CD
- **Release Please** for automated versioning
- **Vercel deployment** with preview environments

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/eastgatevh-web.git
cd eastgatevh-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── core/                   # Core utilities
│   ├── config/            # Configuration
│   ├── providers/         # Context providers
│   ├── types/             # TypeScript definitions
│   └── utils/             # Utility functions
├── features/              # Feature-based modules
│   ├── landing/           # Landing page components
│   ├── portfolio/         # Portfolio features
│   ├── team/              # Team features
│   └── insights/          # Insights & articles
├── shared/                # Shared components & data
│   ├── components/ui/     # UI component library
│   ├── data/              # Mock data & constants
│   ├── layouts/           # Layout components
│   └── services/          # API services
└── i18n/                  # Internationalization
    ├── navigation.ts      # Localized navigation
    └── routing.ts         # Route configuration
```

## 🌍 Internationalization

The application supports multiple languages with automatic locale detection:

```typescript
// Add new languages in src/i18n/routing.ts
export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en'
});
```

Translation files are located in the `messages/` directory.

## 🎨 Design System

Built with a custom design system based on shadcn/ui:

- **Colors**: Primary, secondary, muted variants
- **Typography**: Satoshi font family with responsive scales
- **Components**: Reusable UI components with consistent styling
- **Animations**: Subtle micro-interactions with Framer Motion

## 📱 Components

### Landing Page
- `HeroSection` - Main hero with animated counters
- `PortfolioPreview` - Featured portfolio companies
- `TeamPreview` - Key team members
- `InsightsHub` - Latest market insights
- `ContactCTA` - Contact call-to-action

### UI Components
- `FadeIn` - Scroll-triggered fade animations
- `StaggerContainer` - Staggered child animations  
- `HoverCard` - Interactive hover effects
- `AnimatedCounter` - Number count-up animations

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel

# Or connect your GitHub repository for automatic deployments
```

### Environment Variables

Create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔄 CI/CD

GitHub Actions workflows are configured for:

- **Release Please**: Automated versioning and changelog generation
- **Vercel Preview**: Preview deployments for pull requests
- **Quality Checks**: Linting, type checking, and testing

Required secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID` 
- `VERCEL_PROJECT_ID`

## 📊 Performance

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image component
- **Font optimization** with next/font
- **Bundle analysis** available via `npm run analyze`

## 🧪 Development

```bash
# Development
npm run dev

# Build
npm run build

# Production preview
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions:
- 📧 Email: [dev@eastgatevh.com](mailto:dev@eastgatevh.com)
- 💬 GitHub Issues: [Create an issue](https://github.com/your-org/eastgatevh-web/issues)

---

**Built with ❤️ by the Eastgate Venture Holdings team**
