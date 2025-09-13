# Form Integration Setup

## Important: Contact Form Backend Configuration

The contact form in `/app/components/Contact.tsx` requires backend configuration to work properly.

### Current Implementation
The form is set up to use **Formspree** as the backend service, but you need to:

1. **Sign up for Formspree** at https://formspree.io/
2. **Create a new form** in your Formspree dashboard
3. **Get your form ID** (it looks like: `xyzabcde`)
4. **Update the endpoint** in `/app/components/Contact.tsx`:
   - Find line 29: `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';`
   - Replace `YOUR_FORM_ID` with your actual form ID

### Alternative Backend Options

If you prefer not to use Formspree, here are other options:

#### Option 1: Netlify Forms (if deploying to Netlify)
```jsx
// Add to the form tag:
<form data-netlify="true" name="contact" ...>
  // Add hidden input:
  <input type="hidden" name="form-name" value="contact" />
```

#### Option 2: EmailJS
1. Sign up at https://www.emailjs.com/
2. Install: `npm install @emailjs/browser`
3. Update the form submission handler to use EmailJS

#### Option 3: Custom API Endpoint
Create an API route in Next.js:
```js
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email using NodeMailer or similar
}
```

### Donation Form
The donation form in `/app/components/Support.tsx` currently shows an alert for demonstration.
For production, integrate with:
- **Stripe**: https://stripe.com/
- **PayPal**: https://developer.paypal.com/
- **GoCardless**: https://gocardless.com/

### Security Features Implemented
✅ Honeypot field for spam protection
✅ Client-side validation
✅ HTTPS-only form submission
✅ Sanitized inputs

### Testing the Forms
1. Configure your chosen backend service
2. Update the endpoint in the component
3. Test with real submissions
4. Check that emails are received
5. Verify spam protection is working

## Next Steps
1. Choose and configure a form backend service
2. Set up payment processing for donations
3. Add CAPTCHA if needed (reCAPTCHA or hCaptcha)
4. Configure email templates
5. Set up auto-responders