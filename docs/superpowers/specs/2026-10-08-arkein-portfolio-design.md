# Design Specification: Arkein Portfolio Website

- **Project:** Arkein — Full-Stack AI Engineer Portfolio
- **Date:** 2026-10-08 (Updated 2026-10-09)
- **Author:** Arkein & Antigravity
- **Status:** Approved Design Document (Revision: Aurora Glassmorphism)

---

## 1. Executive Summary & Brand Positioning

**Arkein** adalah sebuah website portofolio personal bereputasi tinggi yang memposisikan pemiliknya sebagai **Full-Stack AI Engineer & System Architect**. 

Portofolio ini dirancang untuk membuktikan kapabilitas komprehensif:
1. **AI & Machine Learning Core:** Autonomous Agent loops, Enterprise RAG, prompt routing, fine-tuning, dan evaluasi berbasis benchmark.
2. **Backend & High-Throughput Inference:** FastAPI, async pipelines, vector databases (Qdrant/pgvector), semantic caching, vLLM/TensorRT-LLM.
3. **Modern Frontend & UI/UX:** Desain **Aurora Glassmorphism** (perpaduan dinamis antara frosted glass translucent dengan ambient aurora mesh background), tata letak scrollytelling responsif, dan komponen interaktif langsung di peramban.

---

## 2. Visual Identity & Design System: Aurora Glassmorphism

### 2.1 Palet Warna: Arctic Eclipse (Swiss Architectural Clarity)
* **Latar Belakang Dasar (Canvas):**
  * `void-950`: `#05070B` (Titanium Void abyss — kanvas gelap utama berpresisi tinggi)
  * `void-900`: `#090E17` (Secondary container depth)
  * `void-850`: `rgba(12, 19, 32, 0.72)` (Tertiary frosted card depth)
* **Aurora Dynamic Mesh Gradients (Latar Belakang Hidup):**
  * **Arctic Cobalt Blob 1:** `#60A5FA` (Opasitas 20-26%, blur 100px, drifting animasi lambat 16 detik)
  * **Sky Frost Blob 2:** `#38BDF8` (Opasitas 15-22%, blur 120px, pergerakan counter-clockwise 20 detik)
  * **Platinum Ice Underglow Blob 3:** `#E2E8F0` / `#1E3A8A` (Opasitas 12-16%, blur 110px, memberikan kedalaman kristal es kutub)
  * Menggunakan CSS hardware acceleration (`will-change: transform`, `transform: translate3d(0,0,0)`).
* **Lapisan Permukaan Kaca (Frosted Titanium Glass Surfaces):**
  * Kartu utama: `rgba(12, 19, 32, 0.72)` dengan `backdrop-filter: blur(22px)`
  * Border halus: `1px solid rgba(255, 255, 255, 0.10)`
  * Border hover highlight: `1px solid rgba(96, 165, 250, 0.45)` dengan pantulan pendaran kobalt dingin di tepi kaca
  * Specular top highlight: `inset 0 1px 0 0 rgba(255, 255, 255, 0.15)`
* **Aksen & Sumber Cahaya (Glow & Accents):**
  * **Primary Accent — Arctic Cobalt:** `#60A5FA` (CTA utama, status aktif, highlight indikator)
  * **Secondary Accent — Sky Frost:** `#38BDF8` (Badge data flow, metrik sistem)
  * **Tertiary Metal — Pure Platinum:** `#E2E8F0` (Headings, data teks presisi, border kristal)
* **Palet Sekunder Tersedia:**
  * Didukung oleh dynamic theme engine: *Aurora Mint*, *Deep Cosmos*, *Solstice Amber*, dan *Matrix Monolith*.
* **Tipografi:**
  * **Headings:** *Space Grotesk* (Modern tech, tegas, futuristik)
  * **Body & UI:** *Inter* (Legibilitas tinggi rasio 7.2:1+ / AAA)
  * **Code & Telemetri:** *JetBrains Mono* (Presisi developer, terminal log, metrik ms)

---

## 3. Arsitektur Halaman & Alur Scrollytelling

Halaman disusun dalam narasi bertingkat yang membawa pengunjung dari pengenalan positioning hingga demonstrasi teknis interaktif:

### 3.1 Floating Navigation Dock
* Navigasi kaca melayang (*floating pill dock*) di bagian atas layar dengan latar belakang frosted glass.
* Monogram logo **ARKEIN** dengan status pulse node.
* Link cepat: `01. PHILOSOPHY`, `02. NEURAL LAB`, `03. CASE STUDIES`, `04. STACK`.
* Pill status real-time: `AVAILABLE FOR WORK` dan tombol direct contact.

### 3.2 Hero Section (The Autonomous Architect)
* Headline: *"Architecting Autonomous AI Systems with Full-Stack Precision."*
* Sub-headline: Memperkenalkan peran Full-Stack AI Engineer dari pipeline reasoning hingga antarmuka web reaktif.
* Action buttons: `Explore Neural Lab` (smooth scroll ke playground) dan `View Case Studies`.
* Spec Quickbar: Metrik pembuktian kapabilitas (*99.4% Retrieval Accuracy*, *-45% Inference Latency*, *End-to-End Delivery*).

### 3.3 Section 1: Philosophy & Full-Stack AI Method
* Narasi metodologi kerja dalam 4 tahapan scrollytelling:
  1. *Algorithmic Modeling & Metric Benchmarking*
  2. *Agentic Loops & Hybrid Tool Orchestration*
  3. *High-Throughput Low-Latency Inference*
  4. *Human-in-the-Loop Web Interfaces*

### 3.4 Section 2: Signature Neural Lab (Interactive AI Agent Playground)
* **Centerpiece Utama Portofolio** yang mendemonstrasikan keahlian agentic AI langsung di browser:
  * **Scenario Selector:**
    1. *Enterprise RAG* (Analisis konflik policy akses & zero-trust remediation).
    2. *Code Security Audit* (Taint analysis AST & verifikasi injeksi kode pada sandbox).
    3. *Multi-Agent DAG* (Orkestrasi agen paralel untuk benchmarking quantisasi model).
  * **Interactive Console:**
    * Tombol `Run Agent Simulation` memicu eksekusi alur reasoning bertahap.
    * Tampilan log bertingkat: *Planning* → *Tool Calling* → *Evaluation* → *Synthesis*.
    * Telemetri real-time: Latensi dinamis (`performance.now()`), token counter, dan estimasi biaya komputasi.

### 3.5 Section 3: Deep Production Case Studies
* Kartu studi kasus mendalam berukuran besar dengan latar frosted aurora glass:
  * **Aegis:** *Autonomous Multi-Agent Vulnerability Auditor* (Stack: PyTorch, LangGraph, FastAPI, AST Analysis).
  * **Synapse RAG:** *High-Recall Knowledge Engine* (Stack: Hybrid BM25 + Dense Qdrant + Cross-Encoder Re-ranking).
  * **EdgeQuant:** *Low-Latency SLM Inference Engine* (Stack: vLLM, TensorRT-LLM, WebSocket Streaming).
  * Setiap kartu membedah 3 pilar: *The Challenge*, *System Architecture*, dan *Measured Impact*.

### 3.6 Section 4: Full-Stack & AI Capabilities Matrix (Bento Grid)
* Ringkasan keahlian dalam 3 pilar:
  * **01 / AI & LLM Frameworks:** LangGraph, LlamaIndex, PyTorch, HuggingFace, vLLM, TensorRT-LLM.
  * **02 / Backend & Inference Systems:** Python (FastAPI, AsyncIO), Go, Redis semantic cache, Qdrant/pgvector, Docker, K8s.
  * **03 / Modern Frontend & UI/UX:** Astro, Tailwind CSS v4, Aurora Glassmorphism UI, Vanilla JS DOM streaming, Canvas/SVG.

### 3.7 Section 5: Contact & Gateway Portal
* Kartu kaca dengan ajakan kolaborasi, tautan GitHub, LinkedIn, email, dan copyright footer.

---

## 4. Arsitektur Teknis & Dependensi

* **Framework:** **Astro** (Static zero-JS delivery untuk performa LCP/SEO maksimal).
* **Styling:** **Tailwind CSS v4** (Menggunakan integrasi `@tailwindcss/vite` dengan deklarasi token tema `@theme` dan keyframe animasi Aurora).
* **Interaktivitas:** **Vanilla JavaScript Native murni** (Menggunakan `<script>` native Astro untuk mengontrol simulator Neural Lab, switching skenario, dan kalkulasi telemetri tanpa dependensi framework UI eksternal).
* **Data Management:** File data modular (`src/data/projects.ts` dan `src/data/scenarios.ts`) agar konten mudah dirawat tanpa menyentuh markup presentasional.

---

## 5. Aksesibilitas, Fallback, & Kualitas Kode

1. **Aksesibilitas (WCAG AA):**
   * Rasio kontras teks minimum 4.5:1 terhadap lapisan kaca gelap.
   * Elemen interaktif memiliki *focus visible ring* untuk navigasi keyboard.
2. **Motion Preference:**
   * Mendukung query `@media (prefers-reduced-motion: reduce)` yang menghentikan animasi pergerakan aurora blob dan mengubahnya menjadi gradien statis halus.
3. **Graceful Fallback:**
   * Jika JavaScript dinonaktifkan di browser pengunjung, Neural Lab tetap menampilkan status dan log skenario default yang terbaca secara statis.

---

## 6. Rencana Verifikasi & Validasi

* **Build Validation:** Eksekusi `npm run build` bebas dari error sintaks, type error, atau missing asset.
* **Responsive Layout Testing:** Pengujian tampilan di viewport Mobile (375px), Tablet (768px), dan Desktop (1280px+).
* **Simulator Functional Testing:** Pengujian interaktivitas tombol skenario, tombol eksekusi simulasi, dan update telemetri latensi/token.
