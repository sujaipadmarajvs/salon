# BA-BU Family Salon - Project Structure Documentation

## 🏠 Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [File Structure](#file-structure)
4. [Design System](#design-system)
5. [Component Architecture](#component-architecture)
6. [Configuration Management](#configuration-management)
7. [Development Guidelines](#development-guidelines)
8. [Performance & Optimization](#performance--optimization)
9. [SEO Best Practices](#seo-best-practices)
10. [Deployment & Maintenance](#deployment--maintenance)

---

## 🏠 Project Overview

**Project Name:** BA-BU Family Salon  
**Type:** Next.js 13 Salon Website  
**Purpose:** Premium beauty and grooming services showcase  
**Location:** North Paravur, Kerala, India  
**Target Audience:** Local customers seeking beauty and grooming services

### Key Features
- ✅ Responsive design with mobile-first approach
- ✅ Video hero carousel with auto-advance
- ✅ WhatsApp integration for direct booking
- ✅ Promotional banner system
- ✅ Floating navigation
- ✅ Contact form with validation
- ✅ Image gallery with carousel
- ✅ Customer testimonials
- ✅ SEO optimized
- ✅ Performance optimized

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 13** with App Router
- **TypeScript** for type safety
- **React 18** with Server Components

### Styling & UI
- **TailwindCSS** for utility-first styling
- **Shadcn UI** + **Radix UI** for components
- **Framer Motion** for animations
- **Lucide React** + **Tabler Icons** for icons

### Forms & Validation
- **React Hook Form** for form handling
- **Zod** for schema validation
- **@hookform/resolvers** for integration

### Performance & Optimization
- **Next.js Image** for optimized images
- **Intersection Observer** for scroll animations
- **Lazy loading** for non-critical components

---

## 📁 File Structure

```
salon/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 blog/                     # Blog pages
│   │   └── page.tsx
│   ├── 📁 gallery/                  # Gallery pages
│   │   └── page.tsx
│   ├── 📁 services/                 # Services pages
│   │   └── page.tsx
│   ├── globals.css                  # Global styles & CSS variables
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Homepage
│
├── 📁 components/                   # React Components
│   ├── 📁 ui/                       # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── carousel.tsx
│   │   ├── dialog.tsx
│   │   ├── floating-navbar.tsx
│   │   ├── form.tsx
│   │   └── ... (40+ components)
│   ├── 📁 magicui/                  # Custom UI components
│   │   └── marquee.tsx
│   ├── About.tsx                    # About section
│   ├── AnimatedButton.tsx           # Custom animated button
│   ├── Contact.tsx                  # Contact form & info
│   ├── CountUp.tsx                  # Animated counters
│   ├── Footer.tsx                   # Site footer
│   ├── Gallery.tsx                  # Image gallery
│   ├── Header.tsx                   # Navigation header
│   ├── Hero.tsx                     # Hero section
│   ├── ScrollToTop.tsx              # Scroll to top button
│   ├── ShinyText.tsx                # Animated text
│   ├── Testimonials.tsx             # Customer reviews
│   └── WhatsAppChat.tsx             # Floating WhatsApp
│
├── 📁 config/                       # Configuration
│   └── site.js                      # Centralized site config
│
├── 📁 Fonts/                        # Custom fonts
│   └── JUST Sans Bold.woff2
│
├── 📁 hooks/                        # Custom React hooks
│   └── use-toast.ts
│
├── 📁 lib/                          # Utility libraries
│   └── utils.ts                     # Utility functions
│
├── 📁 public/                       # Static assets
│   ├── BABU-Black.png              # Logo variants
│   ├── BABU-White.png
│   ├── hero1.mp4                   # Hero videos
│   ├── hero2.mp4
│   ├── hero3.mp4
│   └── GUSSION.woff2               # Font files
│
├── components.json                  # Shadcn UI config
├── next.config.js                   # Next.js config
├── package.json                     # Dependencies
├── postcss.config.js                # PostCSS config
├── tailwind.config.ts               # Tailwind config
└── tsconfig.json                    # TypeScript config
```

---

## 🎨 Design System

### Color Palette

#### Primary Colors
```css
/* BA-BU Brand Colors */
--color-primary: #051822;    /* Dark Blue - Main brand */
--color-secondary: #563827;  /* Dark Brown - Secondary */
--color-accent-1: #A56238;   /* Medium Brown - Accent */
--color-accent-2: #C48E5C;   /* Light Brown/Gold - Highlight */
--color-teal: #2F9D8F;       /* Teal - Interactive */
--color-teal-dark: #186F5E;  /* Dark Teal - Hover states */
```

#### Tailwind Classes
```css
/* Text Colors */
.text-babu-primary    /* #051822 */
.text-babu-secondary  /* #563827 */
.text-babu-accent-1   /* #A56238 */
.text-babu-accent-2   /* #C48E5C */

/* Background Colors */
.bg-babu-primary      /* #051822 */
.bg-babu-secondary    /* #563827 */
.bg-babu-accent-1     /* #A56238 */
.bg-babu-accent-2     /* #C48E5C */
.bg-babu-teal         /* #2F9D8F */
```

### Typography

#### Font Stack
```css
/* Serif - Headings */
font-family: 'Playfair Display', serif;

/* Sans - Body Text */
font-family: 'Inter', 'JustSansBold', sans-serif;

/* Custom Font */
font-family: 'JustSansBold', sans-serif;
```

#### Font Sizes
```css
/* Headings */
.text-4xl lg:text-6xl    /* Hero titles */
.text-3xl lg:text-4xl    /* Section titles */
.text-2xl lg:text-3xl    /* Subsection titles */
.text-xl lg:text-2xl     /* Card titles */

/* Body Text */
.text-lg                  /* Large body text */
.text-base                /* Regular body text */
.text-sm                  /* Small text */
```

### Spacing System
```css
/* Section Spacing */
.py-20                    /* 5rem vertical padding */
.py-16                    /* 4rem vertical padding */
.py-12                    /* 3rem vertical padding */

/* Component Spacing */
.p-8                      /* 2rem padding */
.p-6                      /* 1.5rem padding */
.p-4                      /* 1rem padding */

/* Gap Spacing */
.gap-8                    /* 2rem gap */
.gap-6                    /* 1.5rem gap */
.gap-4                    /* 1rem gap */
```

### Animations

#### Keyframe Animations
```css
/* Fade Animations */
@keyframes fadeInUp
@keyframes fadeIn
@keyframes slideInLeft
@keyframes slideInRight
@keyframes scaleIn
@keyframes slowPulse
@keyframes marquee
```

#### Animation Classes
```css
.animate-fade-in-up
.animate-fade-in
.animate-slide-in-left
.animate-slide-in-right
.animate-scale-in
.animate-marquee
```

---

## 🧩 Component Architecture

### Core Components

#### 1. Header Component (`components/Header.tsx`)
**Purpose:** Main navigation with promotional banner
**Features:**
- Fixed positioning with scroll effects
- Promotional banner with dismissible functionality
- Responsive mobile menu
- Floating navigation integration

**Key Props:**
```typescript
interface HeaderProps {
  // No props - uses siteConfig
}
```

**Usage:**
```tsx
<Header />
```

#### 2. Hero Component (`components/Hero.tsx`)
**Purpose:** Video carousel hero section
**Features:**
- Auto-advancing video carousel (3 videos)
- Smooth transitions
- Call-to-action buttons
- Animated text effects

**Key Props:**
```typescript
interface HeroProps {
  // No props - uses siteConfig
}
```

**Usage:**
```tsx
<Hero />
```

#### 3. Contact Component (`components/Contact.tsx`)
**Purpose:** Contact form and information display
**Features:**
- Form validation with React Hook Form
- WhatsApp integration
- Contact information display
- Map integration

**Key Props:**
```typescript
interface ContactProps {
  // No props - uses siteConfig
}
```

**Usage:**
```tsx
<Contact />
```

### UI Components (`components/ui/`)

#### Shadcn UI Components
- **Button:** Custom styled buttons with variants
- **Carousel:** Image carousel for gallery
- **Dialog:** Modal dialogs
- **Form:** Form components with validation
- **Floating Navbar:** Floating navigation
- **Toast:** Notification system

#### Custom Components
- **AnimatedButton:** Custom animated button
- **ShinyText:** Animated text effects
- **CountUp:** Animated counters
- **ScrollToTop:** Scroll to top functionality

---

## ⚙️ Configuration Management

### Site Configuration (`config/site.js`)

#### Structure
```javascript
export const siteConfig = {
  // Basic Site Info
  siteName: "BA-BU Family Salon",
  tagline: "Get your Glow Up",
  description: "Premium family salon services...",
  
  // Contact Information
  contact: {
    phone: "+919846272333",
    whatsapp: "https://wa.me/919846272333",
    email: "info@babusalon.com",
    address: "North Paravur, Ernakulam, Kerala",
    mapUrl: "https://maps.app.goo.gl/...",
    workingHours: {
      weekdays: "5:30 AM – 11:00 PM",
      sunday: "Closed"
    }
  },
  
  // Social Media
  social: {
    instagram: "https://instagram.com/babusalon",
    facebook: "https://facebook.com/babusalon",
    youtube: "https://youtube.com/babusalon"
  },
  
  // Services Data
  services: [
    {
      id: 1,
      name: "Hair Styling",
      description: "Professional hair cutting...",
      icon: "✂️",
      price: "Starting from ₹500"
    }
    // ... more services
  ],
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Priya Nair",
      rating: 5,
      comment: "Amazing service!...",
      avatar: "/images/testimonials/avatar1.jpg"
    }
    // ... more testimonials
  ],
  
  // Gallery Images
  gallery: [
    "/gallery/salon1.jpg",
    "/gallery/salon2.jpg"
    // ... more images
  ],
  
  // Blog Posts
  blogPosts: [
    {
      id: 1,
      title: "Top 5 Hair Care Tips...",
      excerpt: "Keep your hair healthy...",
      image: "/blog/hair-care-monsoon.jpg",
      date: "2024-01-15",
      slug: "hair-care-tips-monsoon"
    }
    // ... more posts
  ]
};
```

### Tailwind Configuration (`tailwind.config.ts`)

#### Custom Colors
```typescript
colors: {
  'babu-primary': '#051822',
  'babu-secondary': '#563827',
  'babu-accent-1': '#A56238',
  'babu-accent-2': '#C48E5C',
}
```

#### Custom Fonts
```typescript
fontFamily: {
  'sans': ['JustSansBold', 'var(--font-inter)', 'sans-serif'],
  'serif': ['var(--font-playfair)', 'serif'],
  'just-sans': ['JustSansBold', 'sans-serif'],
}
```

#### Custom Animations
```typescript
keyframes: {
  'fade-in-up': { /* ... */ },
  'fade-in': { /* ... */ },
  'slide-in-left': { /* ... */ },
  'slide-in-right': { /* ... */ },
  'scale-in': { /* ... */ },
}
```

---

## 📝 Development Guidelines

### Code Standards

#### TypeScript
- Use strict TypeScript configuration
- Define interfaces for all props
- Use type inference where possible
- Avoid `any` type

#### Component Structure
```typescript
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

const ComponentName = ({ title, description, className }: ComponentProps) => {
  const handleClick = () => {
    // Handle click logic
  };

  return (
    <div className={cn("base-styles", className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};
```

#### Styling Guidelines
- Use Tailwind classes exclusively
- Use `cn()` utility for conditional classes
- Follow mobile-first responsive design
- Use semantic color names

#### Accessibility
- Add `aria-label` to interactive elements
- Use semantic HTML elements
- Ensure keyboard navigation
- Maintain color contrast ratios

### File Naming Conventions
- **Components:** PascalCase (`Header.tsx`)
- **Pages:** lowercase (`page.tsx`)
- **Utilities:** camelCase (`utils.ts`)
- **Config:** camelCase (`site.js`)

### Import Organization
```typescript
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Next.js imports
import Link from 'next/link';
import Image from 'next/image';

// 3. Third-party libraries
import { motion } from 'framer-motion';

// 4. Internal components
import { Button } from '@/components/ui/button';

// 5. Utilities and config
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
```

---

## ⚡ Performance & Optimization

### Next.js Optimizations
- **Server Components:** Use by default
- **Client Components:** Only when needed (`'use client'`)
- **Image Optimization:** Use Next.js Image component
- **Code Splitting:** Automatic with dynamic imports

### Performance Best Practices
- **Lazy Loading:** For non-critical components
- **Intersection Observer:** For scroll animations
- **Debounced Events:** For scroll handlers
- **Memoization:** For expensive calculations

### Core Web Vitals Optimization
- **LCP (Largest Contentful Paint):** Optimize hero images
- **FID (First Input Delay):** Minimize JavaScript
- **CLS (Cumulative Layout Shift):** Use proper image dimensions

---

## 🔍 SEO Best Practices

### Meta Tags & Structured Data
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`
  },
  description: siteConfig.description,
  keywords: ['salon', 'beauty', 'hair', 'spa', 'North Paravur', 'Kerala', 'bridal makeup'],
  authors: [{ name: 'BA-BU Family Salon' }],
  creator: 'BA-BU Family Salon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://babusalon.com',
    title: siteConfig.siteName,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};
```

### Page-Specific SEO
```typescript
// app/services/page.tsx
export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Discover our comprehensive range of premium beauty and grooming services at BA-BU Family Salon.',
  openGraph: {
    title: 'Our Services | BA-BU Family Salon',
    description: 'Professional hair styling, facial treatments, bridal makeup, and more.',
  },
};
```

### Structured Data (JSON-LD)
```typescript
// components/StructuredData.tsx
const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "BA-BU Family Salon",
    "description": siteConfig.description,
    "url": "https://babusalon.com",
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Paravur",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "openingHours": [
      "Mo-Sa 05:30-23:00"
    ],
    "priceRange": "₹₹",
    "serviceType": [
      "Hair Styling",
      "Facial Treatments", 
      "Bridal Makeup",
      "Hair Coloring",
      "Spa Treatments",
      "Men's Grooming"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
```

### Image Optimization
```typescript
// Always use Next.js Image component
import Image from 'next/image';

<Image
  src="/gallery/salon1.jpg"
  alt="Professional hair styling at BA-BU Salon"
  width={800}
  height={600}
  priority={true} // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Sitemap Generation
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://babusalon.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];
}
```

### Robots.txt
```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://babusalon.com/sitemap.xml',
  };
}
```

---

## 🚀 Deployment & Maintenance

### Build Process
```bash
# Development
npm run dev

# Production Build
npm run build
npm start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://babusalon.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

### Performance Monitoring
```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Usage in components
import { trackEvent } from '@/lib/analytics';

const handleBookingClick = () => {
  trackEvent('booking_click', {
    service: 'hair_styling',
    location: 'hero_section'
  });
};
```

### Error Tracking
```typescript
// components/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-4">
              We're sorry, but something went wrong. Please try refreshing the page.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-babu-primary text-white px-4 py-2 rounded-md hover:bg-babu-primary/90"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Update Process

#### Adding New Services
1. Update `config/site.js` services array
2. Add service icons to `components/ui/`
3. Update services page if needed
4. Add structured data for new services

#### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` with proper metadata
3. Update navigation in `Header.tsx`
4. Add to floating navigation
5. Update sitemap

#### Updating Content
1. Modify `config/site.js` for text content
2. Update images in `public/` directory
3. Test responsive design
4. Update metadata if needed
5. Regenerate sitemap

### Monitoring & Analytics
- **Performance:** Core Web Vitals monitoring
- **Analytics:** Google Analytics integration
- **Error Tracking:** Error boundary implementation
- **User Feedback:** Contact form submissions
- **SEO Monitoring:** Search Console integration

---

## 🔧 Troubleshooting Guide

### Common Issues

#### 1. Styling Issues
- Check Tailwind classes are correct
- Verify custom CSS variables
- Ensure responsive breakpoints

#### 2. Performance Issues
- Optimize images with Next.js Image
- Use lazy loading for heavy components
- Implement proper loading states

#### 3. Build Errors
- Check TypeScript types
- Verify import paths
- Ensure all dependencies are installed

#### 4. Responsive Issues
- Test on multiple devices
- Check mobile-first approach
- Verify breakpoint usage

#### 5. SEO Issues
- Verify meta tags are correct
- Check structured data
- Ensure proper heading hierarchy
- Test with Google Rich Results

### Debug Tools
- **React DevTools:** Component inspection
- **Next.js Analytics:** Performance monitoring
- **Lighthouse:** Performance auditing
- **Chrome DevTools:** Network and performance
- **Google Search Console:** SEO monitoring

---

## 🚀 Future Scalability

### Planned Features
- **CMS Integration:** Headless CMS for content management
- **Booking System:** Advanced appointment booking
- **Payment Integration:** Online payment processing
- **Multi-language:** Internationalization support
- **PWA:** Progressive Web App features
- **Blog CMS:** Dynamic blog management
- **Review System:** Customer review management
- **Loyalty Program:** Customer retention features

### Architecture Considerations
- **Micro-frontends:** For complex features
- **API Routes:** Backend functionality
- **Database Integration:** For dynamic content
- **Caching Strategy:** For performance optimization
- **CDN Integration:** For global performance
- **A/B Testing:** For conversion optimization

### Performance Targets
- **LCP:** < 2.5 seconds
- **FID:** < 100ms
- **CLS:** < 0.1
- **Core Web Vitals:** All green
- **Mobile Performance:** 90+ Lighthouse score

---

## 📞 Support & Resources

### Development Team
- **Frontend Developer:** [Your Name]
- **Designer:** [Designer Name]
- **Project Manager:** [PM Name]

### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Google SEO Guide](https://developers.google.com/search/docs)

### Contact Information
- **Email:** [dev@babusalon.com]
- **WhatsApp:** [+919846272333]
- **GitHub:** [Repository URL]

---

## 📋 Checklist for New Features

### Before Development
- [ ] Define requirements and user stories
- [ ] Create component mockups
- [ ] Plan SEO strategy
- [ ] Consider accessibility requirements
- [ ] Plan performance impact

### During Development
- [ ] Follow TypeScript best practices
- [ ] Implement responsive design
- [ ] Add proper error handling
- [ ] Include loading states
- [ ] Test on multiple devices

### Before Deployment
- [ ] Run performance audit
- [ ] Check accessibility compliance
- [ ] Verify SEO optimization
- [ ] Test all user flows
- [ ] Update documentation

### After Deployment
- [ ] Monitor performance metrics
- [ ] Track user engagement
- [ ] Monitor error rates
- [ ] Gather user feedback
- [ ] Plan iterative improvements

---

*Last Updated: January 2024*  
*Version: 1.0.0*  
*Next Review: March 2024*
