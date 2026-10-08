# Plan: Native Aurora Glow & Staggered Scroll Animations

> **Goal:** Mengintegrasikan engine animasi scroll berbasis Vanilla JS Native (`IntersectionObserver`) dan hardware-accelerated CSS transforms ke dalam seluruh section portofolio Arkein.

---

### Task 1: CSS Scroll Reveal Tokens & Keyframes

**Files:**
- Modify: `src/styles/global.css`

**Steps:**
- [x] **Step 1: Tambahkan rule CSS `[data-reveal]`, `[data-reveal-group]`, `.aurora-beam`, dan stagger delays**
- [x] **Step 2: Tambahkan fallback `prefers-reduced-motion`**
- [x] **Step 3: Validasi build css**

---

### Task 2: Global IntersectionObserver Engine di Base Layout

**Files:**
- Modify: `src/layouts/Layout.astro`

**Steps:**
- [x] **Step 1: Tambahkan inline `<script>` IntersectionObserver di `Layout.astro` yang mengamati `[data-reveal]` dan `[data-reveal-group]`**
- [x] **Step 2: Tambahkan logika dynamic stagger delay untuk child items dalam group**
- [x] **Step 3: Pastikan unobserve berjalan efisien setelah animasi terpicu (zero memory leak)**

---

### Task 3: Penerapan Atribut Reveal pada Seluruh Section Komponen

**Files:**
- Modify: `src/components/Philosophy.astro`
- Modify: `src/components/NeuralLab.astro`
- Modify: `src/components/CaseStudies.astro`
- Modify: `src/components/CapabilitiesBento.astro`
- Modify: `src/components/ContactFooter.astro`

**Steps:**
- [x] **Step 1: Update `Philosophy.astro` dengan `data-reveal-group` untuk 4 fase engineering**
- [x] **Step 2: Update `NeuralLab.astro` dengan `data-reveal` dan kelas `aurora-beam` pada container simulator**
- [x] **Step 3: Update `CaseStudies.astro` dengan `data-reveal` pada tiap kartu studi kasus**
- [x] **Step 4: Update `CapabilitiesBento.astro` dengan `data-reveal-group` pada grid 3 pilar**
- [x] **Step 5: Update `ContactFooter.astro` dengan `data-reveal` pada kartu inisiasi kolaborasi**

---

### Task 4: End-to-End Validation & Documentation Update

**Files:**
- Modify: `CLAUDE.md`

**Steps:**
- [x] **Step 1: Jalankan `npx astro check` untuk verifikasi TypeScript**
- [x] **Step 2: Jalankan `npm run build` untuk verifikasi build produksi static**
- [x] **Step 3: Update `CLAUDE.md` § Fitur yang Sudah Dibangun**
