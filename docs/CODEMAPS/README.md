# Codemaps — Arkein

Peta arsitektur token-lean: struktur folder, entry point, dan alur data — supaya agent baru bisa orientasi cepat tanpa membaca seluruh codebase.

## Struktur Awal Proyek
```
src/
├── components/    # Komponen UI (Hero, Navbar, NeuralLab, CaseStudies, Bento, Footer)
├── data/          # Data statis terstruktur (projects.ts, scenarios.ts)
├── layouts/       # Base Layout Astro (Layout.astro)
├── pages/         # Route halaman (index.astro)
└── styles/        # Global CSS & Tailwind v4 @theme tokens (global.css)
```

## Aturan
- Codemap diperbarui setiap kali struktur folder atau domain modul berubah signifikan.
