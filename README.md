# Utsav Soni — Portfolio

Premium portfolio website for **Utsav Soni**, React Native Developer & Full Stack Engineer.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Shadcn UI** (Radix primitives)
- **Dark theme** (optimized single theme)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) — import this repo and deploy with zero config.

Set environment variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_from_web3forms.com
```

**Contact form emails:** Uses [Web3Forms](https://web3forms.com) from the browser (free plan). Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` and Vercel env vars, then restart dev server.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages & layouts
├── components/
│   ├── common/          # Reusable UI (GlassCard, SectionHeading, etc.)
│   ├── effects/         # Cursor, gradients, loading screen
│   ├── layout/          # Header, Footer, Theme
│   ├── sections/        # Page sections (hero, about, skills, ...)
│   └── ui/              # Shadcn UI primitives
├── hooks/               # Custom React hooks
├── lib/
│   ├── data/            # Static content (projects, skills, profile)
│   ├── seo.ts           # Metadata & Open Graph
│   └── utils.ts
└── types/               # TypeScript interfaces
```

## Customization

- **Profile & links**: `src/lib/data/profile.ts`
- **Projects**: `src/lib/data/projects.ts`
- **Skills**: `src/lib/data/skills.ts`
- **SEO**: `src/lib/seo.ts`
- **Resume**: Replace `public/resume.pdf` with your PDF

## License

Private — © Utsav Soni
