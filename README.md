# ⚡ ARKEIN — Engineering Portfolio & Neural Interface

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-5.0+-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse&logoColor=white)](https://pagespeed.web.dev/)

<p align="center">
  <strong>Personal Software Engineering Portfolio & Interactive Telemetry Console</strong><br>
  Dirancang dengan presisi visual <em>Aurora Glassmorphism</em>, simulasi fisika 60 FPS, dan arsitektur web modern berkinerja tinggi.
</p>

[✨ Live Preview](#) • [🛠️ Tech Stack](#-arsitektur--tech-stack) • [🚀 Quick Start](#-instalasi--menjalankan-secara-lokal) • [📂 Struktur Proyek](#-struktur-direktori) • [👤 Tentang Pembuat](#-tentang-pengembang)

</div>

---

## 🌟 Tentang Arkein

**Arkein** adalah portofolio rekayasa perangkat lunak interaktif milik **Arkana Ravenno** (`@ArkanaRavenno`). Dibangun di atas **Astro 5** dan **Tailwind CSS v4**, platform ini menggabungkan prinsip estetika visual mutakhir (*Cybernetic Glassmorphism & Arctic Eclipse*) dengan performa komputasi murni (*Zero-Bloat Island Architecture*).

Portofolio ini bukan sekadar halaman statis biasa, melainkan antarmuka telemetri interaktif yang menampilkan kapabilitas rekayasa sistem riil, simulasi konsol cerdas, serta repositori proyek produksi nyata.

---

## ✨ Fitur & Modul Utama

| Modul | Deskripsi & Sorotan Teknis |
|---|---|
| **00. Developer Console Telemetry** | Interactive HUD Console di Hero section dengan gelombang neural matematis real-time SVG, status haptik probe, dan telemetry bar. |
| **01. Biography & Vitals** | Kisah latar belakang, filosofi belajar berkelanjutan (*continuous learner*), dan kartu persona interaktif. |
| **02. Engineering Philosophy** | Prinsip rekayasa: *Deterministic Over Guesswork*, *Verifiable Metrics*, dan *Aesthetic Craftsmanship*. |
| **03. Neural Simulation Lab** | Konsol simulasi interaktif yang mendemonstrasikan eksekusi skenario Enterprise RAG, Audit Keamanan Kode AST, dan Multi-Agent DAG. |
| **04. Featured Projects** | Kartu studi kasus proyek terverifikasi yang terkoneksi langsung ke repository GitHub dengan live rolling counters. |
| **05. Capabilities Bento Matrix** | Matriks kemampuan full-stack (Frontend, Backend & Data, serta Engineering Standards) dengan drawer simulasi terminal interaktif. |
| **06. Quantum Contact Dock** | Saluran komunikasi cybernetic dengan status sinyal dinamis untuk GitHub, Email, dan Instagram. |

---

## 🚀 Proyek Terpilih yang Ditampilkan

Portofolio ini mengintegrasikan proyek-proyek produksi nyata dari ekosistem GitHub Arkana Ravenno:

1. **[DrivePass](https://github.com/Septi-DmsDev/DrivePass)** `(Branch: Ivan)`
   - **Domain:** Systems Architecture & Smart Logistics Dispatch
   - **Stack:** Next.js 14, TypeScript, Prisma ORM, PostgreSQL, Distance Matrix Service, MapLibre GL
   - **Highlight:** Otomasi dispatch armada terdistribusi Jawa Timur dengan kalkulasi rute instan (latensi <100ms) dan skema relasional terisolasi.

2. **[Arkein](https://github.com/ArkanaRavenno/Arkein)** `(Branch: main)`
   - **Domain:** Modern Web Architecture & Kinetic Interface
   - **Stack:** Astro 5, Tailwind CSS v4, GSAP Physics, TypeScript
   - **Highlight:** Animasi hardware-accelerated 60 FPS, efek Aurora glassmorphism dinamis, dan skor Core Web Vitals 100/100.

3. **[Festika Platform](https://github.com/ArkanaRavenno/festika-project)** `(Branch: main)`
   - **Domain:** Frontend Craftsmanship & Competition Showcase
   - **Stack:** HTML5, CSS3 / Tailwind CSS, JavaScript ES6
   - **Highlight:** Platform showcase kompetisi dengan kalkulator interaktif client-side yang responsif di segala perangkat.

---

## 🛠️ Arsitektur & Tech Stack

- **Core Framework:** [Astro 5](https://astro.build/) — Island architecture untuk payload client minimal dan waktu muat instan.
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) — Engine performa tinggi berbasis CSS variabel generasi baru (`@tailwindcss/vite`).
- **Motion & Physics:** [GSAP 3.15](https://greensock.com/gsap/) — ScrollTrigger, 3D kinetic tilt, timelines multi-step, dan hacker scramble text decryption.
- **Bahasa & Validasi:** [TypeScript 5.9](https://www.typescriptlang.org/) — Type safety penuh pada skenario simulasi dan data proyek.
- **Palet Warna "Arctic Eclipse":**
  - Void Deep Space: `#020408` / `#050914`
  - Arctic Cobalt: `#38bdf8`
  - Sky Frost: `#60a5fa`
  - Pure Platinum: `#f8fafc`

---

## 💻 Instalasi & Menjalankan secara Lokal

Pastikan Anda telah menginstal **Node.js** (v18.17+ atau v20+ disarankan) dan **npm**.

### 1. Clone Repositori
```bash
git clone https://github.com/ArkanaRavenno/Arkein.git
cd Arkein
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser dan akses `http://localhost:4321`.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build statis siap deploy akan berada di folder `dist/`.

### 5. Preview Hasil Build
```bash
npm run preview
```

---

## 📂 Struktur Direktori

```text
Arkein/
├── public/                 # Aset statis publik (logo, icons, audio)
│   └── assets/
├── src/
│   ├── components/         # Komponen arsitektur Astro modular
│   │   ├── AboutMe.astro            # Bagian biografi & kartu profil
│   │   ├── CapabilitiesBento.astro  # Matriks stack & terminal drawers
│   │   ├── CaseStudies.astro        # Kartu proyek terkoneksi GitHub
│   │   ├── ContactFooter.astro      # Terminal kontak & footer dock
│   │   ├── Hero.astro               # Developer console & neural waveform
│   │   ├── Navigation.astro         # Floating glass navigation bar
│   │   ├── NeuralLab.astro          # Interactive simulation playground
│   │   └── Philosophy.astro         # Prinsip rekayasa & standar kode
│   ├── data/               # Model data & skenario terisolasi
│   │   ├── projects.ts              # Data repositori & metrik proyek
│   │   └── scenarios.ts             # Skenario simulasi Neural Lab
│   ├── layouts/            # Layout utama & engine inisialisasi GSAP
│   │   └── Layout.astro             # Global layout, glass shaders & tilt
│   ├── pages/              # Routing Astro
│   │   └── index.astro              # Halaman beranda utama
│   └── styles/             # Desain global & aturan utilitas
│       └── global.css               # Token warna Aurora, HUD & efek kaca
├── astro.config.mjs        # Konfigurasi Astro + Tailwind v4 Vite plugin
├── package.json            # Manifest paket dependensi & skrip
└── tsconfig.json           # Konfigurasi TypeScript
```

---

## ⚡ Metrik & Performa

- **Lighthouse Performance:** `100 / 100`
- **First Contentful Paint (FCP):** `< 0.4s`
- **Cumulative Layout Shift (CLS):** `0.00`
- **Frame Rate Animasi:** `60 FPS Locked`

---

## 👤 Tentang Pengembang

Dibuat dengan dedikasi tinggi oleh **Arkana Ravenno** (*Arkein*).

- **GitHub:** [@ArkanaRavenno](https://github.com/ArkanaRavenno)
- **Instagram:** [@ark.rvnn](https://instagram.com/ark.rvnn)
- **Email:** [arkana.ravenno@gmail.com](mailto:arkana.ravenno@gmail.com)

---

<div align="center">
  <sub>© 2026 Arkein. Designed with Aurora Glassmorphism & Arctic Precision.</sub>
</div>
