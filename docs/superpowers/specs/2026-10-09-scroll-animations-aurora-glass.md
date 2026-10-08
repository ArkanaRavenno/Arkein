# Spec: Native Aurora Glow & Staggered Scroll Animations

> **Fitur:** Scroll Reveal Engine & Aurora Shimmer Effects untuk Portfolio Arkein  
> **Status:** Approved  
> **Tech Stack:** Vanilla JS Native (`IntersectionObserver`) + CSS Hardware-Accelerated Transforms + Astro 5  

---

## 1. Tujuan & Filosofi Desain
Memberikan pengalaman scrolling yang imersif, sinematik, dan berbobot teknis tinggi tanpa mengorbankan performa (0 KB external runtime library, 60 FPS mentah). Setiap komponen masuk ke viewport dengan karakter khas **Aurora Glassmorphism & Arctic Eclipse**:
- **Elevasi Spasial:** Kartu terangkat halus dari kedalaman void (`translateY(24px)` -> `0`).
- **Aurora Beam Sweep:** Kilau gradien Arctic Cobalt (`#60A5FA`) & Sky Frost (`#38BDF8`) menyapu border panel kaca saat aktif.
- **Sequential Wave (Stagger):** Grup kartu (Philosophy, Case Studies, Bento Matrix) muncul berurutan (cascade delay 80–120ms).
- **Accessibility Gate:** Penuh dukungan `prefers-reduced-motion: reduce` untuk pengguna sensitif gerakan.

---

## 2. Arsitektur Komponen & Data-Attribute Contract

### Global Scroll Controller (`Layout.astro`)
Menggunakan singleton `IntersectionObserver` yang diinisialisasi sekali pada `DOMContentLoaded` / client hydration.

```html
<!-- Attribute API -->
<div data-reveal>...</div>                          <!-- Default fade-up -->
<div data-reveal data-reveal-delay="100">...</div>    <!-- Delay spesifik ms -->
<div data-reveal-group>                             <!-- Parent container stagger -->
  <div class="reveal-item">...</div>
  <div class="reveal-item">...</div>
</div>
```

### Threshold & Timing Matrix
- **Root Margin:** `0px 0px -60px 0px` (memicu animasi sedikit sebelum elemen mencapai bagian bawah layar untuk pengalaman natural).
- **Threshold:** `0.1` (10% elemen terlihat).
- **Duration & Easing:** `0.7s cubic-bezier(0.16, 1, 0.3, 1)` (kurva fluid khas Apple/Emil Kowalski).
- **GPU Optimization:** Memanfaatkan `will-change: transform, opacity` hanya saat sebelum aktif, lalu dilepas setelah transisi selesai.

---

## 3. Efek Khusus per Section

1. **Philosophy Section (01 / Engineering Philosophy):**
   - 4 fase card muncul secara stagger berurutan (`Phase 1` -> `Phase 2` -> `Phase 3` -> `Phase 4`).
2. **Neural Lab Signature Section (02 / Interactive Signature Lab):**
   - Terminal window membesar halus dari `scale(0.98)` ke `scale(1)`.
   - Efek border beam sweep aurora di sekeliling frame panel kaca saat pertama kali masuk viewport.
   - Indicator status berkedip aktif menandakan runtime siap.
3. **Case Studies (03 / Production Case Studies):**
   - Masing-masing dari 3 kartu case study (Aegis, Synapse, EdgeQuant) terangkat dengan subtle underglow sesuai warna tag masing-masing.
4. **Capabilities Bento Matrix (04 / Tech Capabilities Matrix):**
   - Tiga pilar teknologi muncul dengan jeda cascade (100ms, 200ms, 300ms).
5. **Contact Gateway & Footer:**
   - Card inisiasi kolaborasi mendapatkan efek soft ambient bloom pada border platinum/cobalt.

---

## 4. CSS Engine Specs (`src/styles/global.css`)

```css
/* Base state sebelum reveal */
[data-reveal] {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

/* State setelah aktif */
[data-reveal].revealed {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* Stagger item dalam group */
[data-reveal-group] .reveal-item {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

[data-reveal-group].revealed .reveal-item {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* Aurora Shimmer Beam */
@keyframes auroraBorderBeam {
  0% { border-color: rgba(96, 165, 250, 0.15); box-shadow: 0 0 0 rgba(96, 165, 250, 0); }
  50% { border-color: rgba(56, 189, 248, 0.60); box-shadow: 0 0 30px rgba(96, 165, 250, 0.25); }
  100% { border-color: rgba(255, 255, 255, 0.10); box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.5); }
}

.aurora-beam.revealed {
  animation: auroraBorderBeam 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Reduced motion override */
@media (prefers-reduced-motion: reduce) {
  [data-reveal],
  [data-reveal-group] .reveal-item {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 5. Kriteria Keberhasilan & Validasi
- [x] Zero JavaScript bundle dependencies (tidak menginstall library baru).
- [x] Smooth 60 FPS pada desktop dan mobile tanpa layout jank.
- [x] Validasi `npx astro check` = 0 errors.
- [x] Validasi `npm run build` = PASS.
