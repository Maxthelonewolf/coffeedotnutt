# Email Setup Instructions

The free trial form is now set up to submit data to an API endpoint. To actually send emails, you need to integrate an email service.

## Option 1: Resend (Recommended for Vercel)

1. **Sign up for Resend**: Go to https://resend.com and create an account
2. **Get API Key**: In your Resend dashboard, create an API key
3. **Add to Vercel Environment Variables**:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add: `RESEND_API_KEY` with your API key value
4. **Install Resend package**:
   ```bash
   bun add resend
   ```
5. **Update the API route**: Uncomment and update the code in `src/app/api/submit-trial/route.ts`

## Option 2: SendGrid

1. **Sign up for SendGrid**: Go to https://sendgrid.com
2. **Get API Key**: Create an API key in SendGrid dashboard
3. **Add to Vercel Environment Variables**: `SENDGRID_API_KEY`
4. **Install SendGrid package**:
   ```bash
   bun add @sendgrid/mail
   ```
5. **Update the API route** with SendGrid code

## Option 3: Nodemailer (Simple SMTP)

1. **Get SMTP credentials** from your email provider (Gmail, etc.)
2. **Add to Vercel Environment Variables**:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
3. **Install Nodemailer**:
   ```bash
   bun add nodemailer
   ```
4. **Update the API route** with Nodemailer code

## Current Status

The form currently:
- ✅ Collects all form data
- ✅ Validates email format
- ✅ Submits to `/api/submit-trial` endpoint
- ✅ Shows success/error messages
- ⚠️ Logs submissions to console (needs email service to actually send emails)

## Quick Start with Resend

After setting up Resend, update `src/app/api/submit-trial/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST function, replace the console.log with:
await resend.emails.send({
  from: 'CoffeeDonutTV <onboarding@yourdomain.com>',
  to: 'CoffeeDonutTV@gmail.com',
  subject: 'New Free Trial Request',
  html: `
    <h2>New Free Trial Request</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Device:</strong> ${device}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Referral Source:</strong> ${referral}</p>
    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
  `
});
```
