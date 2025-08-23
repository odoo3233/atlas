# Atlas Al-Sharq Deployment Guide

## Deployment Configuration

The project is configured for **Vercel** deployment with the following settings:

- **Framework**: Next.js 14 (App Router)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Region**: `iad1` (US East)

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI** (optional): `npm i -g vercel`
3. **Environment Variables**: Prepare any required environment variables

## Deployment Methods

### Method 1: Deploy via GitHub (Recommended)

1. **Connect GitHub to Vercel**:
   ```bash
   # Your repository is already pushed to:
   # https://github.com/odoo3233/atlas
   ```

2. **Import Project in Vercel Dashboard**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the `odoo3233/atlas` repository
   - Select the `feature/brand-refresh` branch
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard
   - Example: `DATABASE_URL`, `API_KEY`, etc.

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from Local**:
   ```bash
   # From project root
   vercel
   
   # For production deployment
   vercel --prod
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N` (first time) or `Y` (subsequent)
   - Project name? `atlas-al-sharq`
   - Directory? `./` (current directory)
   - Override settings? `N`

### Method 3: Manual Deployment

1. **Build Locally**:
   ```bash
   npm run build
   ```

2. **Export Static Site** (if needed):
   ```bash
   # Add to package.json scripts:
   "export": "next export"
   
   # Then run:
   npm run export
   ```

## Environment Variables

Create a `.env.production` file or add these in Vercel dashboard:

```env
# Example environment variables (adjust as needed)
NEXT_PUBLIC_API_URL=https://api.atlas-al-sharq.com
NEXT_PUBLIC_SITE_URL=https://atlas-al-sharq.com
```

## Post-Deployment

1. **Verify Deployment**:
   - Check the deployment URL provided by Vercel
   - Test all pages and functionality
   - Verify Arabic RTL rendering
   - Check logo and animations

2. **Custom Domain** (optional):
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain (e.g., `atlas-al-sharq.com`)
   - Update DNS records as instructed

3. **Performance Monitoring**:
   - Vercel Analytics (built-in)
   - Web Vitals monitoring
   - Error tracking

## Troubleshooting

### Common Issues:

1. **Build Failures**:
   ```bash
   # Clear cache and rebuild
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Environment Variables**:
   - Ensure all required env vars are set in Vercel
   - Use `NEXT_PUBLIC_` prefix for client-side variables

3. **Image Optimization**:
   - Vercel automatically optimizes images
   - Ensure all images are in `/public` directory

## Rollback

If issues occur:

1. **Via Vercel Dashboard**:
   - Go to your project
   - Click on "Deployments"
   - Find a previous working deployment
   - Click "..." menu → "Promote to Production"

2. **Via Git**:
   ```bash
   # Revert to previous commit
   git revert HEAD
   git push origin feature/brand-refresh
   ```

## Monitoring

- **Vercel Dashboard**: Monitor deployments, functions, and analytics
- **Logs**: Available in Vercel dashboard under "Functions" tab
- **Performance**: Check Web Vitals in Analytics tab

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Issues**: Create an issue in the GitHub repository
