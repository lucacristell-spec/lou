# THE LUCID — A Digital Magazine

A modern, editorial-style digital magazine built with **Next.js 14** and **Sanity CMS**.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, Tailwind CSS
- **CMS**: Sanity.io (headless CMS with real-time editing)
- **Fonts**: Playfair Display, Libre Franklin, JetBrains Mono
- **Hosting**: Vercel (recommended)

## Project Structure

```
the-lucid/
├── app/
│   ├── layout.tsx            # Root layout (header + footer)
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Global styles + Tailwind
│   ├── article/[slug]/
│   │   └── page.tsx          # Article detail page
│   └── category/[id]/
│       └── page.tsx          # Category page + Must Reads
├── components/
│   ├── Header.tsx            # Top bar + masthead
│   ├── NavBar.tsx            # Category navigation
│   ├── HeroSection.tsx       # Featured articles hero
│   ├── ArticleCard.tsx       # Reusable article card
│   ├── MustReadLibrary.tsx   # Must Read section (per category)
│   ├── WeeklyGlossary.tsx    # Weekly glossary (homepage)
│   ├── QuoteBanner.tsx       # Quote section
│   ├── Newsletter.tsx        # Newsletter signup
│   └── Footer.tsx            # Site footer
├── lib/
│   ├── sanity.client.ts      # Sanity client config
│   ├── sanity.queries.ts     # GROQ queries
│   └── sanity.fetch.ts       # Data fetching functions
├── sanity/
│   ├── sanity.config.ts      # Sanity Studio config
│   └── schemas/
│       ├── index.ts           # Schema registry
│       ├── article.ts         # Article schema
│       ├── author.ts          # Author schema
│       ├── category.ts        # Category schema
│       ├── blockContent.ts    # Rich text schema
│       ├── mustRead.ts        # Must Read library schema
│       └── glossary.ts        # Weekly Glossary schema
└── .env.local.example        # Environment template
```

## Getting Started

### 1. Create a Sanity project

```bash
# Go to https://www.sanity.io/manage and create a new project
# Note your Project ID
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
# Edit .env.local with your Sanity Project ID
```

### 3. Install dependencies

```bash
npm install
```

### 4. Deploy Sanity schemas

```bash
# From the sanity/ directory
npx sanity deploy
```

### 5. Seed initial content

In Sanity Studio, create:
1. **6 Categories**: AI & Tech, Business, Fashion, Food, Yoga & Wellness, Random Facts
2. **1 Author**: "The Lucid Editorial"
3. **A few articles** to test with
4. **Must Read items** for each category
5. **1 Weekly Glossary** with terms

### 6. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### On-Demand Revalidation

The site uses ISR (Incremental Static Regeneration) with 60-second revalidation. For instant updates when you publish in Sanity, set up a webhook:

1. In Sanity → Settings → API → Webhooks
2. URL: `https://your-site.vercel.app/api/revalidate`
3. Create an API route to handle revalidation

## Content Model

| Type | Description |
|------|-------------|
| **Article** | Main content with rich text body, category, author, images |
| **Category** | AI & Tech, Business, Fashion, Food, Yoga, Facts |
| **Author** | Writer profiles with bio and image |
| **Must Read** | Curated papers/books/reports per category, with optional summaries |
| **Glossary** | Weekly collection of terms with definitions |

## Features

- ✅ Magazine-style editorial design
- ✅ Category-based navigation
- ✅ Featured article hero section
- ✅ Must Read Library per category (with expandable summaries)
- ✅ Weekly Glossary on homepage (with category filters)
- ✅ Newsletter signup
- ✅ Responsive design
- ✅ SEO-optimized with dynamic metadata
- ✅ Static generation with ISR
- ✅ Rich text articles with images

## Next Steps

- [ ] Connect newsletter to email provider (Resend/Buttondown/Mailchimp)
- [ ] Add Sanity webhook for instant content updates
- [ ] Set up Sanity Studio as embedded route (`/studio`)
- [ ] Add analytics (Plausible/Umami)
- [ ] Build About, Contact, and Subscribe pages
- [ ] Add social sharing buttons
- [ ] Set up AI-assisted content drafting pipeline
- [ ] Add RSS feed
- [ ] Add sitemap.xml generation
// Rebuild: AI articles live
