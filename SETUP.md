# Lou Magazine — Setup Guide

## Quick Start

### 1. Create Sanity Project

1. Go to https://www.sanity.io
2. Sign up or log in with `lucacristell@gmail.com`
3. Create a new project:
   - **Name:** Lou Magazine
   - **Dataset:** production
   - **Type:** Web
   - Keep visibility as default
4. **Copy your Project ID** from the project dashboard (Settings → API)
5. Keep this page open — you'll need it next

### 2. Set Up Environment Variables

```bash
cd /Users/gianlucacristell/.openclaw/workspace/lou
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID_HERE
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `YOUR_PROJECT_ID_HERE` with your actual Project ID from Sanity.

### 3. Deploy Sanity Schemas

In your Sanity project dashboard:
1. Go to **Settings** → **API** → **API Tokens**
2. Create a new token called "Deploy Token" with full access
3. Copy the token
4. Run:

```bash
cd /Users/gianlucacristell/.openclaw/workspace/lou
npx sanity deploy
```

This pushes the schema definitions to your Sanity project.

### 4. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 — you should see the Lou homepage (with placeholder content).

### 5. Create Initial Content in Sanity

1. In your Sanity project, click **Launch Studio**
2. Create **Categories** (these define your content pillars):
   - **AI & Tech** (color: #2563eb, blue)
   - **Business** (color: #dc2626, red)
   - **Fashion** (color: #d946ef, pink)
   - **Food** (color: #ea580c, orange)
   - **Lifestyle** (color: #16a34a, green)
   - **News** (color: #6366f1, indigo)

3. Create an **Author**:
   - **Name:** Lou Editorial
   - **Bio:** "Curating the best in AI, fashion, food, and lifestyle"
   - (Add a profile image if you want)

4. Create a few **Articles** for each category (at least 1 per category)
   - Title, slug, excerpt, body, featured image, category, author
   - Mark 2-3 as "featured" to show on homepage

5. Create **Must Reads** for each category (3-5 per category)
   - These are curated papers, books, or reports

6. Create a **Weekly Glossary** entry with 5-10 terms

### 6. Push to GitHub

```bash
cd /Users/gianlucacristell/.openclaw/workspace/lou

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial Lou Magazine setup"

# Add remote and push
git remote add origin https://github.com/lucacristell-spec/lou.git
git branch -M main
git push -u origin main
```

### 7. Deploy to Vercel

1. Go to https://vercel.com
2. Log in with GitHub (lucacristell-spec)
3. Click **"New Project"**
4. Select the `lou` repository
5. Configure environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your Project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = production
6. Click **Deploy**

Vercel will build and deploy automatically. You'll get a URL like `https://lou.vercel.app`

### 8. Connect Your Domain

Once you own `loumagazine.com`:

1. In Vercel:
   - Go to your Lou project → **Settings** → **Domains**
   - Add `loumagazine.com`
   - Copy the DNS configuration

2. In your domain registrar (Namecheap/Cloudflare):
   - Update DNS to point to Vercel (they'll provide CNAME/A records)
   - Wait 10-30 minutes for DNS to propagate

Your site is now live at `https://loumagazine.com`

---

## Next Steps

- [ ] Write 10-15 articles across categories
- [ ] Set up Sanity webhook for instant Vercel revalidation
- [ ] Add analytics (Plausible or Umami)
- [ ] Create About, Contact pages
- [ ] Connect newsletter to Resend or Mailchimp
- [ ] Add RSS feed
- [ ] Share on social media

---

## Troubleshooting

**"Cannot find module" errors?**
```bash
npm install
npm run build
```

**Sanity connection issues?**
- Double-check your Project ID in `.env.local`
- Make sure the Project ID matches your Sanity dashboard

**Vercel deployment failed?**
- Check build logs in Vercel dashboard
- Ensure `.env` variables are set in Vercel (not just locally)

---

Need help? Let me know.
