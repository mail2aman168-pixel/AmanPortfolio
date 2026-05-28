# Aman Kumar Portfolio - Gemini Context

This is a premium, futuristic UI Developer portfolio built with **Angular 21**.

## Project Overview

A high-performance, visually rich portfolio designed for 2026 aesthetics. It features glassmorphism, glowing gradients, and ultra-smooth animations.

### Tech Stack
- **Framework:** Angular 21 (Standalone Components, Signals, SSR/SSG)
- **Styling:** SCSS, Bootstrap 5.3+
- **Animations:** 
  - GSAP (Hero & Micro-interactions)
  - AOS (Scroll Reveal)
  - Lenis (Smooth Scroll)
- **Icons:** Bootstrap Icons

### Architecture
- **`src/app/shared/components/`**: Global reusable components (Header, Footer, Loader).
- **`src/app/features/home/`**: Main portfolio page logic.
  - **`components/`**: Individual section components (Hero, About, Skills, etc.).
- **`src/assets/scss/`**: Design system variables (`_variables.scss`).

## Development

### Setup
1. Navigate to root: `cd E:\projects\aman-portfolio`
2. Install dependencies: `npm install`
3. Run dev server: `npm start`

### Key Commands
- **Build:** `npm run build`
- **Serve SSR:** `npm run serve:ssr:portfolio`

## Conventions
- **SSR Compatibility:** Always use `isPlatformBrowser(platformId)` when initializing animation libraries or accessing browser-only APIs (`window`, `document`, `gsap`, `AOS`, `Lenis`).
- **Styling:** Use variables from `_variables.scss`. Leverage `glass-card` and `gradient-text` utility classes.
- **Signals:** Prefer Angular Signals for component state management.
