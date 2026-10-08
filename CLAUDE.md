# Arkein

> Website portofolio personal bereputasi tinggi untuk Full-Stack AI Engineer & System Architect. Stack: Astro 5 + Tailwind CSS v4 + TypeScript. Status: Development.

**Spec lengkap:** `docs/superpowers/specs/`
**Sprint plans:** `docs/superpowers/plans/`
**Codemaps:** `docs/CODEMAPS/` — peta arsitektur untuk orientasi cepat agent baru

---

## ⚙️ Alur Kerja Wajib (Development Discipline)

Berlaku untuk SETIAP tugas — patuhi sebelum, selama, dan sesudah eksekusi.

### 1. Pipeline Wajib — 4 Fase Tanpa Shortcut

```
FASE 1        FASE 2                                  FASE 3                                        FASE 4
IDEASI    →  SPEC + PLANNING                     →   EKSEKUSI                                  →   QA & DEPLOY
/brainstorm  /spec-writer                             subagent-driven-development +                 /qa-master
             /plan-writer + writing-plans-             sdd-self-improvement-assistant
             self-improvement-assistant                [user approve plan dulu]
```

- **Fase 1 (Ideasi):** Fitur baru / ambigu → `/brainstorm` wajib. Cek tools/library yang sudah ada sebelum membuat baru. Output = keputusan pendekatan yang disepakati.
- **Fase 2 (Spec + Planning):**
  - `/spec-writer` → bangun spesifikasi arsitektur yang benar untuk fitur ini, simpan di `docs/superpowers/specs/`.
  - `/plan-writer` **bersamaan dengan** `superpowers:writing-plans-self-improvement-assistant` → susun implementation plan mendetail dari spec tersebut, simpan di `docs/superpowers/plans/`.
  - User **harus approve plan** sebelum coding dimulai.
- **Fase 3 (Eksekusi):** `superpowers:subagent-driven-development` **bersamaan dengan** `superpowers:sdd-self-improvement-assistant` — setiap task plan dikerjakan oleh sub-agent terisolasi, dites, dan divalidasi.
- **Fase 4 (QA & Deploy):** `/qa-master` sebelum deploy/rilis — evidence-based release gate. Tidak ada deploy tanpa QA Report = GO.

### 2. Konteks dulu — baca dokumentasi sebelum eksekusi
- Baca `CLAUDE.md` + `AGENTS.md` + spec/plan yang relevan sebelum menyentuh kode.
- Verifikasi fakta repo: `git status --short --branch`, `git log --oneline -10` (jika repo git aktif).
- Jangan improvisasi di luar plan — jika butuh perubahan scope, update plan dulu.

### 3. Dokumentasi selalu sinkron (docs-as-code) — WAJIB
Setiap perubahan kode/arsitektur/desain **harus disertai update dokumentasi dalam commit yang sama**.

| Trigger | File yang di-update |
|---|---|
| Sprint selesai | `CLAUDE.md` § Status Sprint |
| Env variable baru | `CLAUDE.md` § Environment Variables |
| Keputusan arsitektur | `CLAUDE.md` § Keputusan Arsitektur |
| Fitur baru deploy | `CLAUDE.md` § Fitur yang Sudah Dibangun |

### 4. Security-first — setiap perubahan berpotensi berisiko
Permukaan sensitif: **client-side state, external link URLs, user form inputs**.
- Validasi input & sanitasi data.
- **Jangan pernah** commit/hardcode secret, token, credentials.

### 5. Bukti sebelum klaim
Jangan klaim build/lint/test berhasil tanpa menjalankan perintahnya dan membaca outputnya.

### 6. Konvensi commit (Conventional Commits)
Format: `<tipe>(scope): ringkasan`. Tipe: `feat | fix | docs | chore | refactor | test | perf`.
*Catatan:* Jangan pernah commit/push git otomatis tanpa izin user.

### Catatan Agent (DevSecOps)
- Ikuti `AGENTS.md` + `SECURITY.md` + `docs/AI_AGENT_PROTOCOL.md`.
- Jalankan `npm run build` sebelum klaim selesai. Laporan akhir ringkas & jujur.

---

## Stack

| Area | Tech |
|---|---|
| Framework | Astro 5 |
| Styling | Tailwind CSS v4 (@tailwindcss/vite) |
| Language | TypeScript / Vanilla JS Native |
| UI Style | Aurora Glassmorphism (Arctic Eclipse: Titanium Void `#05070B` + Arctic Cobalt `#60A5FA` + Sky Frost `#38BDF8` + Pure Platinum `#E2E8F0`) |
| Package Manager | npm |

---

## Struktur Folder — Aturan Wajib

```
src/
├── components/    # Komponen Astro & UI presentasional
├── data/          # Data statis terstruktur (projects.ts, scenarios.ts)
├── layouts/       # Template layout halaman
├── pages/         # Route halaman Astro (index.astro, dll.)
└── styles/        # Global CSS & Tailwind v4 @theme tokens
```

---

## Status Sprint

| Sprint | Topik | Status |
|---|---|---|
| Sprint 00 | Setup & Infrastructure Scaffolding | Completed |
| Sprint 01 | Core Design System & Layout (Aurora Glassmorphism) | Completed |
| Sprint 02 | Interactive Neural Lab Playground (Vanilla JS Native) | Completed |
| Sprint 03 | Case Studies & Capabilities Bento Matrix | Completed |
| Sprint 04 | Native Aurora Glow & Staggered Scroll Reveal Animations | Completed |

---

## Fitur yang Sudah Dibangun
- **Native Aurora Scroll Reveal Engine:** Singleton `IntersectionObserver` client-side tanpa dependensi runtime eksternal, memicu transisi GPU-accelerated halus (elevation lift `translate3d(0, 26px, 0)` -> `0`).
- **Aurora Shimmer Edge Beam:** Keyframe `@keyframes auroraBorderBeam` menyapu frame panel kaca (Neural Lab, Hero, dan Contact) saat masuk ke dalam viewport.
- **Staggered Card Cascade:** Efek reveal bertingkat (stagger delay 100-120ms) pada kartu Philosophy 4-phase, Bento Grid 3-pillar, dan studi kasus.
- **Accessibility & Motion Gate:** Dukungan penuh `prefers-reduced-motion: reduce` untuk menonaktifkan transisi bagi pengguna dengan preferensi minim gerakan.
- **Aurora Mesh Background Engine:** Fluid ambient gradient blobs (`auroraFlow1`, `auroraFlow2`, `auroraFlow3`) dengan fallback `prefers-reduced-motion`.
- **Arctic Eclipse Design Tokens:** Void 950/900/850, Arctic Cobalt `#60A5FA`, Sky Frost `#38BDF8`, Pure Platinum `#E2E8F0` dengan WCAG AAA contrast.
- **Glassmorphic Navigation Dock:** Floating header dengan real-time availability badge dan quick navigation links.
- **Hero & Philosophy Scrollytelling:** Metrics telemetry bar + 4-phase engineering lifecycle.
- **Interactive Neural Lab Playground:** Vanilla JS Native simulator dengan scenario selector (Enterprise RAG, Code Security, Multi-Agent DAG), real-time reasoning trace, dynamic latency/token counter, dan terminal control.
- **Production Case Studies:** Deep-dive cards untuk Aegis, Synapse RAG, dan EdgeQuant dengan challenge, architecture, dan measured metrics.
- **Capabilities Bento Matrix:** 3 pilar kapabilitas (AI & LLM Frameworks, Backend & Inference, Modern Frontend UI/UX).
- **Contact & Collaboration Gateway:** Interactive inquiry actions dengan GitHub profile link berstandar `rel="noopener noreferrer"`.


---

## Dev Commands

```bash
# Dev server
npm run dev

# Type check (bila ada tsconfig)
npx astro check

# Build
npm run build
```

---

## Yang TIDAK Boleh Dilakukan
- Jangan gunakan library runtime JS berat jika cukup dengan Vanilla JS Native.
- Jangan commit file secret (`.env*`, credentials).
- Jangan ubah warna token utama di luar desain sistem yang telah disetujui (Arctic Eclipse: Titanium Void `#05070B`, Arctic Cobalt `#60A5FA`, Sky Frost `#38BDF8`, Pure Platinum `#E2E8F0`).

