# Taylor Made Dreams - Setup Guide

This guide will help you configure all the essential services to get the website live.

## Table of Contents
1. [Environment Variables](#environment-variables)
2. [Formspree Contact Form](#formspree-contact-form)
3. [Stripe Payment Integration](#stripe-payment-integration)
4. [Sanity CMS Setup](#sanity-cms-setup)
5. [Email Newsletter Integration](#email-newsletter-integration)
6. [Analytics Setup](#analytics-setup)
7. [Deployment Checklist](#deployment-checklist)

---

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=nzkjg3l9
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_USE_CDN=true
SANITY_API_READ_TOKEN=your_read_token_here

# Formspree
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id_here

# Stripe (for donations)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email Service (optional - for newsletter)
MAILCHIMP_API_KEY=xxxxx
MAILCHIMP_AUDIENCE_ID=xxxxx
```

---

## Formspree Contact Form

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (50 submissions/month)
3. Or upgrade to Pro (£8/month for unlimited submissions)

### Step 2: Create a Form
1. Click "New Project" → "Taylor Made Dreams"
2. Click "New Form"
3. Name it "Contact Form"
4. Copy the Form ID (e.g., `mxyzabc123`)

### Step 3: Configure the Form
In Formspree dashboard:
- **Email**: Set to `hello@taylormadedreams.org.uk`
- **Auto-responder**: Enable and customise message:
  ```
  Thank you for contacting Taylor Made Dreams. We've received your message and will respond within 24 hours.

  Best wishes,
  The Taylor Made Dreams Team
  ```
- **reCAPTCHA**: Enable for spam protection (optional)
- **Email notifications**: Enable

### Step 4: Update Environment Variable
Add to `.env.local`:
```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=mxyzabc123
```

### Step 5: Update Contact Component
The contact form in `app/components/Contact.tsx` line 30 will automatically use this environment variable.

**Note**: The form already includes a honeypot field for spam protection.

---

## Stripe Payment Integration

### Step 1: Create Stripe Account
1. Go to [https://stripe.com/gb](https://stripe.com/gb)
2. Sign up for a UK Stripe account
3. Complete verification (required for charities)
4. Submit charity documentation (Charity Commission certificate)

### Step 2: Get API Keys
1. Go to Developers → API keys
2. Copy your **Publishable key** and **Secret key**
3. Start with TEST keys (`pk_test_...` and `sk_test_...`)
4. Switch to LIVE keys when ready to go live

### Step 3: Create Products
In Stripe Dashboard → Products:

**One-time Donation**
- Name: "One-time Donation"
- Type: One-time
- Amount: Customer chooses
- Enable "Customers can specify amount"

**Monthly Giving**
- Name: "Monthly Support"
- Type: Recurring (monthly)
- Amount: Customer chooses
- Enable "Customers can specify amount"

### Step 4: Enable Payment Methods
Go to Settings → Payment methods:
- ✅ Cards (Visa, Mastercard, Amex)
- ✅ Google Pay
- ✅ Apple Pay
- ✅ Bank debits (optional for UK)
- ✅ Wallets (optional)

### Step 5: Configure Tax Settings
Settings → Tax:
- Enable "Tax calculation"
- Set up UK VAT exemption for charity donations

### Step 6: Set Up Webhooks (for automated receipts)
1. Go to Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events:
   - `payment_intent.succeeded`
   - `charge.succeeded`
   - `customer.subscription.created`
4. Copy webhook signing secret

### Step 7: Install Stripe Dependencies
```bash
npm install @stripe/stripe-js stripe
```

### Step 8: Create Stripe Integration Files

**File: `lib/stripe.ts`**
```typescript
import { loadStripe } from '@stripe/stripe-js';

export const getStripe = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
};
```

**File: `app/api/create-payment-intent/route.ts`**
```typescript
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to pence
      currency: 'gbp',
      metadata: {
        charity: 'Taylor Made Dreams',
        charity_number: '1158178',
      },
      receipt_email: null, // Set when customer provides email
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 });
  }
}
```

### Step 9: Update Support Component
Replace the donation button logic in `app/components/Support.tsx` with Stripe checkout flow.

### Gift Aid (UK Tax Benefit)
Important: Add Gift Aid declaration to donation form:
- Adds 25% to donation value
- Only for UK taxpayers
- Requires legal text and checkbox

---

## Sanity CMS Setup

### Step 1: Access Sanity Studio
The studio is already configured at `/studio` route.

### Step 2: Install Sanity CLI (if needed)
```bash
npm install -g @sanity/cli
sanity login
```

### Step 3: Create/Link Project
The project ID `nzkjg3l9` is already configured. If you need a new project:
```bash
sanity init
```

### Step 4: Deploy Studio
```bash
sanity deploy
```
This creates a hosted studio at: `https://taylormadedreams.sanity.studio`

### Step 5: Set Up Schemas
Schemas are already created in `sanity/schemas/`:
- **story.ts**: Success stories
- **event.ts**: Events and news
- **service.ts**: Services offered
- **teamMember.ts**: Team member profiles

### Step 6: Add Content
1. Go to `http://localhost:3000/studio` (or deployed URL)
2. Start adding content:
   - Create 3-5 success stories
   - Add upcoming events
   - Add team members
   - Configure services

### Step 7: Generate Read Token
For draft previews:
1. Go to Sanity dashboard → API
2. Add new token with "Read" permissions
3. Add to `.env.local` as `SANITY_API_READ_TOKEN`

---

## Email Newsletter Integration

### Option 1: Mailchimp (Recommended)

**Step 1: Create Account**
- Go to [mailchimp.com](https://mailchimp.com)
- Free tier: Up to 500 contacts

**Step 2: Create Audience**
- Marketing → Audience → Create Audience
- Name: "Taylor Made Dreams Newsletter"

**Step 3: Get API Key**
- Account → Extras → API keys
- Create new key

**Step 4: Get Audience ID**
- Audience → Settings → Audience name and defaults
- Copy "Audience ID"

**Step 5: Install Mailchimp**
```bash
npm install @mailchimp/mailchimp_marketing
```

**Step 6: Create API Route**
Create `app/api/newsletter/route.ts`:
```typescript
import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextResponse } from 'next/server';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g., 'us1'
});

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: 'subscribed',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}
```

### Option 2: EmailOctopus (UK-based, cheaper alternative)
- £0-15/month depending on subscribers
- Similar setup to Mailchimp

---

## Analytics Setup

### Google Analytics 4

**Step 1: Create GA4 Property**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Admin → Create Property
3. Name: "Taylor Made Dreams"
4. Configure data stream for web

**Step 2: Get Measurement ID**
Copy the Measurement ID (format: `G-XXXXXXXXXX`)

**Step 3: Add to Environment**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Step 4: Install Analytics**
```bash
npm install @next/third-parties
```

**Step 5: Add to Layout**
In `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
}
```

### Cookie Consent
You MUST add cookie consent banner for GDPR compliance before using analytics.

---

## Deployment Checklist

### Pre-Launch Checklist

**Environment**
- [ ] All environment variables set in production
- [ ] Stripe switched to LIVE keys
- [ ] Formspree configured
- [ ] Sanity Studio deployed
- [ ] Analytics configured

**Content**
- [ ] Replace all placeholder images with real photos
- [ ] Add at least 3 success stories
- [ ] Add team member profiles
- [ ] Add upcoming events
- [ ] Update all contact information
- [ ] Create 2-3 blog posts

**Legal & Compliance**
- [ ] Privacy Policy page created
- [ ] Terms & Conditions page created
- [ ] Cookie Policy page created
- [ ] Safeguarding Policy page created
- [ ] GDPR compliance verified
- [ ] Cookie consent banner added

**Forms & Payments**
- [ ] Contact form tested (test submission)
- [ ] Donation form tested (test payment)
- [ ] Form validation working
- [ ] Email notifications received
- [ ] Payment receipts configured

**Technical**
- [ ] SSL certificate active (HTTPS)
- [ ] Domain configured
- [ ] Custom email configured (hello@taylormadedreams.org.uk)
- [ ] 404 page customised
- [ ] Sitemap generated
- [ ] Robots.txt configured

**SEO**
- [ ] Page titles optimised
- [ ] Meta descriptions added
- [ ] Open Graph images set
- [ ] Alt text on all images
- [ ] Structured data added (charity schema)

**Performance**
- [ ] Lighthouse score > 90
- [ ] Images optimised
- [ ] Lazy loading enabled
- [ ] Core Web Vitals passing

**Testing**
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on tablet (iPad)
- [ ] Test on desktop (Chrome, Firefox, Edge)
- [ ] Screen reader test (NVDA/VoiceOver)
- [ ] Keyboard navigation test

### Deployment Platforms

**Recommended: Vercel (Free Tier Available)**
1. Push code to GitHub
2. Import repository to Vercel
3. Add environment variables
4. Deploy

**Alternative: Netlify**
Similar process to Vercel

---

## Support

If you need help with any of these setups:
- **Formspree**: support@formspree.io
- **Stripe**: https://support.stripe.com
- **Sanity**: https://www.sanity.io/help
- **Vercel**: https://vercel.com/support

---

## Security Notes

1. **Never commit `.env.local`** to git
2. **Use environment variables** for all API keys
3. **Enable 2FA** on all service accounts
4. **Rotate keys** if compromised
5. **Use HTTPS** only (automatic on Vercel)
6. **Validate all inputs** on server side
7. **Rate limit** API endpoints
8. **Monitor** Stripe webhooks for suspicious activity

---

## Costs Summary

**Free Tier:**
- Vercel hosting: £0
- Sanity CMS: £0 (3 users)
- Formspree: £0 (50 submissions/month)
- Mailchimp: £0 (500 contacts)
- Google Analytics: £0

**Paid Services (when needed):**
- Domain (.org.uk): £10/year
- Formspree Pro: £8/month (unlimited)
- Mailchimp Standard: £10-30/month (more contacts)
- Stripe fees: 1.4% + 20p per transaction
- Professional email: £4/month (Google Workspace)

**Minimum to start: ~£10/year (domain only)**
