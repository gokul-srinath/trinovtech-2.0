# Trinovtech SPA

A polished, performant static Single Page Application built with Next.js 14, Tailwind CSS, and design tokens extracted from Figma.

## Project Structure

```
trinovtech-spa/
├── public/
│   └── assets/              # All static assets
│       ├── images/          # WebP images (optimized)
│       ├── frames/          # SVG animation frames
│       └── videos/          # MP4 + poster images
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── sections/        # Section components (lazy-loaded)
│   │   │   ├── HeroCard.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── VideoSection.tsx
│   │   │   └── ...
│   │   └── SectionRenderer.tsx  # Dynamic section renderer
│   ├── content/             # Typed content data (swap with Supabase)
│   │   └── home.ts
│   ├── lib/
│   │   ├── types.ts         # TypeScript interfaces
│   │   └── registry.ts      # Component → Section type map
│   └── styles/
│       ├── tokens.css       # Design tokens (colors, spacing, typography)
│       └── globals.css      # Global styles
├── tailwind.config.ts       # Tailwind config (extends tokens)
├── next.config.ts           # Next.js config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies

```

## Design Tokens

All colors, spacing, and typography are defined in `src/styles/tokens.css`:

```css
:root {
  /* Colors */
  --heading1: linear-gradient(...), #2d9cdb;
  --color-heading2: #1f7a63;
  --color-body: #1a1a1a;
  --color-card: #f0f6ff;
  --color-bg: #faf9f6;

  /* Typography */
  --font-heading1-size: 36px;
  --font-body-size: 24px;

  /* Spacing */
  --space-section: 5rem;
  --space-gap: 1.5rem;
}
```

Update tokens in **one place** — all components reference them automatically.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Edit content:**
   Update `src/content/home.ts` to change page sections without touching components.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Adding Sections

1. **Create a new section component** in `src/components/sections/MySection.tsx`
2. **Add the component to the registry** in `src/lib/registry.ts`
3. **Add a new section type** to `SectionType` in `src/lib/types.ts`
4. **Add content** to `src/content/home.ts`

Example:

```tsx
// src/components/sections/MySection.tsx
export function MySection({ heading, items }: MySectionProps) {
  return (
    <section className="section">
      <h2 className="text-heading1">{heading}</h2>
      {/* ... */}
    </section>
  )
}
```

```ts
// src/lib/registry.ts
export const REGISTRY = {
  my_section: dynamic(() =>
    import('@/components/sections/MySection').then((mod) => mod.MySection)
  ),
  // ...
}
```

## Migrating to Supabase

No refactoring needed. Simply:

1. Update `src/content/home.ts` to fetch from Supabase instead of importing static data
2. Components stay 100% the same

Example:

```ts
// Before
import { homeSections } from '@/content/home'

// After
const { data: homeSections } = await supabase
  .from('sections')
  .select('*')
```

## Performance Checklist

- [ ] All images optimized as WebP
- [ ] Video files < 10MB
- [ ] Components lazy-loaded with IntersectionObserver
- [ ] Blurash placeholders for images
- [ ] Bundle size < 200KB (gzipped)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Design System References](#) (in `.agents/skills/nextjs-spa-skill/references/`)
