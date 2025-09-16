# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 charity website for Taylor Made Dreams, a children's charity. The site uses:
- Next.js 15.5.3 with App Router
- React 19.1.0
- TypeScript
- Tailwind CSS 3.x (downgraded from v4 for stability)
- Framer Motion for animations
- Lucide React for icons

## Development Commands

```bash
# Development server
npm run dev

# Production build (uses Turbopack)
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Component Structure
All components are in `app/components/` and are client-side components using `'use client'`. Key components:
- `Hero.tsx` - Landing section with animated elements
- `Contact.tsx` - Contact form (requires Formspree configuration)
- `Support.tsx` - Donation form (needs payment integration)
- `Events.tsx`, `Stories.tsx`, `Services.tsx` - Content sections
- `Header.tsx`, `Footer.tsx` - Layout components

### Form Integration Requirements

**CRITICAL**: Forms are not yet connected to backends. See `FORM_INTEGRATION.md` for setup instructions.

1. **Contact Form** (`app/components/Contact.tsx`):
   - Currently configured for Formspree but needs form ID
   - Line 30: Replace `YOUR_FORM_ID` with actual Formspree form ID
   - Includes honeypot field for spam protection

2. **Donation Form** (`app/components/Support.tsx`):
   - Shows alert for demo purposes
   - Needs integration with payment processor (Stripe/PayPal)

### Styling Approach
- Uses Tailwind CSS with custom configuration
- Global styles in `app/globals.css`
- Consistent color scheme using Tailwind classes
- Responsive design with mobile-first approach

## Important Considerations

1. **Form Backend**: Always verify forms have proper backend integration before deployment
2. **Tailwind Version**: Project uses Tailwind CSS v3 (not v4) for stability
3. **Build Process**: Uses Turbopack for production builds (`--turbopack` flag)
4. **Client Components**: Most components use `'use client'` for interactivity