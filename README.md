# NG Jewellers – Marketing Site

Fully responsive, multi-page marketing website for NG Jewellers (Indore) built with **React (Vite)**, **TypeScript**, **Tailwind CSS**, **MUI** and **pnpm**. The project ships with modular sections, reusable UI components, lazy-loaded routes, SEO meta tags per page and an automated GitHub Pages deployment workflow.

## Quick start

```bash
# 1. Install dependencies
pnpm install

# 2. Start the local dev server
pnpm dev

# 3. Type-check + build for production
pnpm build

# 4. Preview the production bundle
pnpm preview
```

> **Node 20+** and **pnpm** are required. If you deploy to GitHub Pages, set `VITE_BASE_PATH=/your-repo-name/` before running `pnpm build` so the router resolves correct paths.

## Project structure

```
src/
  assets/          # Optimised WebP imagery used across the site
  components/
    footer/
    navbar/
    sections/      # Home hero + supporting sections
    ui/            # Design-system building blocks (buttons, wrappers, etc.)
  data/            # Centralised content + metadata objects
  layouts/         # Global layout with nav/footer/WhatsApp widget
  pages/           # Route-level pages (Home, About, Categories, Custom Design…)
  router/          # React Router v7 config with lazy loaded routes
  styles/          # Theme + font imports
```

Key technologies:

- **React 19 + Vite 5** with TypeScript, React Router v7 and lazy loading
- **Tailwind CSS** (custom brand palette & typography) alongside **MUI Box/Layout**
- **Framer Motion** for subtle hero/section animations
- **React Hook Form** for the Custom Design + Contact forms
- **React Helmet Async** for per-page SEO tags
- Optimised local **WebP** assets to keep imagery lightweight

## Design system & utilities

- Theme configuration: `src/styles/theme.ts`
- Tailwind tokens (brand colors, fonts, shadows): `tailwind.config.js`
- Base/global styles: `src/index.css` & `src/styles/fonts.css`
- Reusable wrappers/components in `src/components/ui`

## Content management

All static content (navigation, brand details, categories, testimonials, FAQ, gallery, etc.) lives inside `src/data`. Update those files to refresh copy or imagery without touching component logic.

### Image workflow

Local images live in `src/assets/images` and are pre-downloaded as WebP. Import them directly or via `?imagetools` query for automatic optimisation.

## CI/CD (GitHub Pages)

The workflow `.github/workflows/deploy.yml` builds the site with pnpm and deploys the `dist/` folder to GitHub Pages on every push to `main`. Steps:

1. Checkout code
2. Setup pnpm + Node 20
3. `pnpm install --frozen-lockfile`
4. `pnpm build`
5. Upload `dist` artifact and deploy with `actions/deploy-pages`

To point the router to GitHub Pages, either set a repo-specific base path via `.env`:

```
VITE_BASE_PATH=/ng-jewellers/
```

or configure it inside your Pages project settings.

## Hosting alternatives

- **Vercel** (recommended): import repo, select Vite framework. Build command `pnpm build`, output `dist`.
- **Netlify**: build `pnpm build`, publish `dist`.
- **Static hosting (S3/Cloudflare)**: run `pnpm build` and upload the `dist` folder.

## Accessibility & enhancements

- Semantic sections with MUI Box + Tailwind spacing utilities
- Smooth scrolling + Scroll restoration on route change
- Floating WhatsApp CTA, Google Maps embed, forms with basic validation
- Optional Portfolio, FAQ and Testimonials pages included

Questions or new feature ideas? Open an issue or start a discussion. Happy crafting!
