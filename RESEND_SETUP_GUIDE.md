# Complete Resend Email Setup Guide

## Step 1: Create Resend Account

1. Go to https://resend.com
2. Click "Sign Up" (you can use Google/GitHub to sign up quickly)
3. Verify your email address

## Step 2: Get Your API Key

1. After logging in, go to **API Keys** in the left sidebar
2. Click **"Create API Key"**
3. Give it a name like "CoffeeDonutTV Production"
4. Copy the API key (it starts with `re_` - you'll only see it once!)
5. **Save it somewhere safe** - you'll need it for Vercel

## Step 3: Add API Key to Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your **CoffeeDonutTV** project
3. Click on **Settings** tab
4. Click on **Environment Variables** in the left sidebar
5. Click **"Add New"**
6. Fill in:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Paste your Resend API key (the one starting with `re_`)
   - **Environment**: Select all three (Production, Preview, Development)
7. Click **"Save"**
8. **Important**: Go to **Deployments** tab and redeploy your site for the env variable to take effect

## Step 4: Set Up Your Domain in Resend (For Production)

### Option A: Use Resend's Default Domain (Quick Start - For Testing)

You can skip domain setup initially and use Resend's default domain. This works for testing but emails come from `onboarding@resend.dev`.

### Option B: Add Your Custom Domain (Recommended for Production)

1. In Resend dashboard, go to **Domains** in the left sidebar
2. Click **"Add Domain"**
3. Enter your domain (e.g., `coffeedonuttv.com` or `yourdomain.com`)
4. Click **"Add"**

### Step 5: Configure DNS Records

Resend will show you DNS records to add. You need to add these to your domain's DNS settings:

#### DNS Records to Add:

1. **SPF Record** (Type: TXT)
   - Name: `@` (or your domain root)
   - Value: `v=spf1 include:resend.com ~all`

2. **DKIM Record** (Type: TXT)
   - Name: `resend._domainkey` (or similar - Resend will show exact name)
   - Value: (Resend provides this - it's a long string)

3. **DMARC Record** (Type: TXT) - Optional but recommended
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=none; rua=mailto:CoffeeDonutTV@gmail.com`

#### Where to Add DNS Records:

**If using Vercel Domains:**
- Go to Vercel Dashboard → Your Project → Settings → Domains
- Click on your domain → DNS Records
- Add the records there

**If using other DNS provider (GoDaddy, Namecheap, Cloudflare, etc.):**
- Log into your domain registrar/DNS provider
- Go to DNS Management
- Add the TXT records shown by Resend

### Step 6: Verify Domain

1. After adding DNS records, go back to Resend
2. Click **"Verify"** next to your domain
3. Wait 5-10 minutes for DNS to propagate
4. Once verified, you'll see a green checkmark ✅

## Step 7: Update Your Code

The code is already set up! Just make sure you have the Resend package installed.

### Install Resend Package:

```bash
bun add resend
```

Or if using npm:
```bash
npm install resend
```

### The API Route is Already Updated!

The code in `src/app/api/submit-trial/route.ts` is ready. Just uncomment the Resend code (it's already there, just commented).

## Step 8: Test Your Setup

1. Deploy to Vercel (or redeploy if already deployed)
2. Go to your website's free trial page
3. Fill out the form and submit
4. Check your email: `CoffeeDonutTV@gmail.com`
5. You should receive the trial request email!

## Troubleshooting

### Emails not sending?
- Check Vercel logs: Go to your deployment → Functions → View logs
- Verify `RESEND_API_KEY` is set in Vercel environment variables
- Make sure you redeployed after adding the env variable
- Check Resend dashboard → Logs to see if emails are being sent

### Domain verification failing?
- Wait 10-15 minutes for DNS propagation
- Double-check DNS records are exactly as Resend shows
- Use a DNS checker tool like https://dnschecker.org to verify records

### Getting rate limited?
- Resend free tier: 3,000 emails/month
- Upgrade to paid plan if needed

## Quick Reference

**Vercel Environment Variable:**
```
Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxx (your actual key)
```

**From Email Address:**
- Testing: `onboarding@resend.dev` (works immediately)
- Production: `noreply@yourdomain.com` (after domain setup)

**To Email Address:**
- `CoffeeDonutTV@gmail.com` (your receiving email)

## Next Steps After Setup

1. ✅ Add `RESEND_API_KEY` to Vercel
2. ✅ Install Resend package: `bun add resend`
3. ✅ Uncomment Resend code in the API route
4. ✅ Deploy to Vercel
5. ✅ Test the form!
