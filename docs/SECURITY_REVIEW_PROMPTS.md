# Security & Review Prompts — Arkein

Copy-paste prompts for AI-assisted reviews.

## 1. Security & Input Review
> Review the changed files (`git diff`). Check: all user inputs validated; external links have `rel="noopener noreferrer"`; no API keys or secrets in client bundle; no unsanitized HTML injection.

## 2. UI / UX & Responsive Regression
> Verify loading states, responsive layouts across Mobile (375px), Tablet (768px), and Desktop (1280px); contrast ratios WCAG AA (4.5:1); smooth glassmorphism effects and prefers-reduced-motion support.

## 3. Performance & Bundle Review
> Verify zero-JS static rendering for non-interactive content; minimal client-side script footprint; image/font loading optimization.
