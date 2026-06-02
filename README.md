# Quixivo Landing Page

Quixivo is a modern landing page for an all-in-one institute management platform. The page presents product features for coaching institutes, schools, and academies, including fee management, attendance, live classes, student portals, analytics, pricing, testimonials, and demo booking.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons

## Sections

- Hero with product dashboard preview and primary CTAs
- Stats and trust bar
- Institute type coverage
- Feature grid for institute operations
- Live classes section
- Problem-solving and AI insights section
- Student portal section
- Testimonials
- Pricing plans
- Demo call-to-action
- Footer with contact and resource links

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
```

Starts the Next.js development server with Turbopack.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production server after building.

```bash
npm run lint
```

Runs the Next.js lint command.

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  DemoSection.tsx
  Features.tsx
  Footer.tsx
  Hero.tsx
  InstituteTypes.tsx
  LiveClasses.tsx
  Navbar.tsx
  Pricing.tsx
  ProblemSolving.tsx
  Stats.tsx
  StudentPortal.tsx
  Testimonials.tsx
  TrustBar.tsx
```

## Notes

Generated folders such as `.next/` and `node_modules/` are ignored by Git. Use `npm install` to restore dependencies after cloning.
