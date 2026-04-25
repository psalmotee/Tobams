# Tobams Group Landing Page

**Frontend Intern Assessment – Next.js + Tailwind CSS Implementation**

A production-ready, pixel-perfect landing page built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Fully responsive across mobile (425px), tablet (768px), and desktop (1280px+) with semantic HTML, accessibility compliance, and optimized performance.

---

## Project Overview

This project implements the [Tobams Group Figma design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1) as a production-ready Next.js application. The focus is on translating design specifications into clean, maintainable code while adhering to best practices for accessibility, performance, and responsive design.

---

## Live Demo

**[View Live Site](https://tobams-app.netlify.app/)** – Deployed on Netlify

---

## Tech Stack

| Technology       | Version  | Purpose                                                                        |
| ---------------- | -------- | ------------------------------------------------------------------------------ |
| **Next.js**      | 16       | React framework with App Router for production-grade performance               |
| **TypeScript**   | Latest   | Type-safe development and improved code maintainability                        |
| **Tailwind CSS** | Latest   | Utility-first CSS framework (no custom stylesheets or external CSS frameworks) |
| **next/font**    | Built-in | Optimized font loading (Nunito + Nunito Sans) with zero layout shift           |
| **next/image**   | Built-in | Automatic image optimization and responsive image serving                      |
| **React Icons**  | Latest   | Scalable vector icons (LinkedIn, Instagram, Twitter, etc.)                     |

---

## Project Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd tob
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

### Build & Deployment

```bash
# Build for production
npm run build

# Start production server locally
npm run start

# View build analysis
npm run build -- --analyze
```

---

## Project Structure

```text
tobams/
├── app/
│   ├── page.tsx            # Main landing page
├── components/
│   ├── Header.tsx          # Navigation header component
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Features.tsx        # Features grid section
│   ├── ProgramShowcase.tsx # Programs/solutions showcase
│   ├── CtaBanner.tsx       # Call-to-action banner
│   ├── Testimonial.tsx     # Client testimonials section
│   ├── Footer.tsx          # Footer with links and contact info
│   └── ui/
│       └── Button.tsx      # Reusable button component
├── public/
│   ├── tobams-logo.png
│   ├── hero.jpg
│   ├── lms.jpg
│   ├── corporate.jpg
│   ├── personalise.jpg
│   ├── capacity.jpg
│   ├── management-program.jpg
│   └── testimonial-*.jpg   # Testimonial avatars
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
├── package.json
└── README.md
```

---

## Design Decisions & Technical Justifications

### 1. **Component Architecture**

- **Decision:** Organized page into logical, reusable components (`Header`, `Hero`, `Features`, etc.)
- **Rationale:** Improves maintainability, testability, and allows components to be shared across pages if the site scales
- **Structure:** Each component lives in its own file under `/components` with clear, descriptive names

### 2. **Responsive Design Strategy**

- **Breakpoints Used:**
  - `425px` (mobile) – No prefix needed for base styles
  - `sm:` (640px) – Tablet adjustments
  - `md:` (768px) – Medium tablet/small desktop
  - `lg:` (1024px+) – Full desktop layout
- **Rationale:** Used Tailwind's responsive prefixes exclusively for consistency. Mobile-first approach ensures the best experience at smallest viewports
- **No Custom Media Queries:** All responsive behavior is achieved through Tailwind utilities for maintainability

### 3. **Tailwind Design Tokens**

- **Primary Color:** `#571244` – Brand purple for CTAs, primary actions
- **Secondary Color:** `#EF4353` – Brand red for highlights, accents
- **Background:** `#11040E` – Deep dark theme for contrast
- **Rationale:** Defined in `tailwind.config.ts` for consistency and single-source-of-truth color management

### 4. **Typography & Font Optimization**

- **Fonts:** Nunito (headings) + Nunito Sans (body) via `next/font`
- **Rationale:**
  - `next/font` provides zero layout shift (CLS improvement)
  - Self-hosted fonts eliminate external request dependencies
  - Automatic subsetting for better performance
- **Font Loading:** Configured in `app/layout.tsx` with `display: swap` for optimal performance

### 5. **Image Optimization**

- **Strategy:** All images use `next/image` component
- **Benefits:**
  - Automatic format conversion (WebP with fallbacks)
  - Responsive image sizing via `srcSet`
  - Lazy loading by default
  - Built-in blur placeholder support
- **Example:** Hero image, feature cards, testimonial avatars

### 6. **CSS Framework Choice**

- **Decision:** Tailwind CSS only – no Bootstrap, MUI, or Chakra UI
- **Rationale:**
  - Utility-first approach provides precise control for pixel-perfect design matching
  - Minimal bundle size compared to component libraries
  - Full alignment with Figma specifications without component abstraction layers
  - Better learning outcome for frontend assessment

### 7. **Semantic HTML Structure**

- **Usage:**
  - `<nav>` for navigation header
  - `<main>` for primary content
  - `<section>` for major content blocks (Hero, Features, Testimonials, CTA)
  - `<footer>` for footer content
- **Rationale:** Improves SEO, accessibility, and code clarity

---

## Accessibility Implementation

### WCAG 2.1 Compliance (AA Level)

| Feature                 | Implementation                                                        |
| ----------------------- | --------------------------------------------------------------------- |
| **Alt Text**            | All images have descriptive, meaningful `alt` attributes              |
| **Keyboard Navigation** | All interactive elements (buttons, links) are keyboard-focusable      |
| **Focus Indicators**    | Visible focus rings on all interactive elements using `focus-visible` |
| **Color Contrast**      | Typography meets minimum 4.5:1 contrast ratio against backgrounds     |
| **Semantic HTML**       | Proper heading hierarchy (h1, h2, h3) and landmark elements           |
| **Link Context**        | All links have clear, descriptive text (no "click here")              |
| **CTA Buttons**         | Clear, high-contrast buttons with `:hover` and `:focus` states        |

### Focus Management

```tsx
// Example from Button component
className =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";
```

---

## Performance Optimizations

1. **Image Optimization:** All images served through `next/image` with automatic format conversion
2. **Font Loading:** Self-hosted fonts via `next/font` with preload strategy
3. **Code Splitting:** Built-in with Next.js App Router
4. **Static Generation:** Page generated as SSG for maximum performance
5. **CSS Optimization:** Tailwind's PurgeCSS removes unused styles in production
6. **Bundle Analysis:** ESBuild-based bundle optimization

---

## Figma Design Compliance

### Pixel-Perfect Matching

 **Layout & Spacing**

- Section padding and margins match Figma specifications exactly
- Grid layouts (2, 3, 5 columns) implemented with responsive Tailwind grid utilities
- Gap spacing consistent across breakpoints

 **Typography**

- Font sizes: 12px → 16px (mobile) and 16px → 24px (desktop) as designed
- Font weights: Regular (400), Semibold (600), Bold (700)
- Line heights optimized for readability

 **Colors**

- Primary: `#571244` for buttons and primary actions
- Secondary: `#EF4353` for accents and highlights
- White/Gray scale for text and backgrounds

 **Components**

- Header with navigation menu
- Hero section with gradient overlay and CTA
- Feature cards with icons
- Program showcase grid
- Testimonial section with avatars
- CTA banner
- Footer with multi-column layout

### Design Deviations

None. The implementation matches the Figma design specification at all breakpoints.

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## Code Quality Standards

 **Followed Best Practices:**

- ✓ No inline styles – 100% Tailwind utilities
- ✓ Descriptive component and variable names
- ✓ No unused imports or dead code
- ✓ TypeScript strict mode enabled
- ✓ Semantic HTML throughout
- ✓ Clean git history with meaningful commits

 **Linting & Formatting:**

- ESLint configured for code quality
- TypeScript strict checking enabled
- All components type-safe with explicit prop typing

---

## Deployment

### Netlify Deployment

The site is deployed on Netlify at: **[Live](https://tobams-app.netlify.app)/**

**Deployment Steps:**

1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### Deployment Checklist

- ✓ GitHub repository is public
- ✓ Live URL is functional and up-to-date
- ✓ Build passes without warnings
- ✓ Lighthouse performance >90
- ✓ Mobile responsiveness verified

---

## Design Reference

**Figma Design:** [Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1)

---

## Contact & Support

For questions about this implementation:

- **Repository:** [GitHub](https://github.com/psalmotee/Tobams)
- **Live Site:** [Live](https://tobams-app.netlify.app/)
- **Email:** [Email](samsonmoradeyo@gmail.com)
