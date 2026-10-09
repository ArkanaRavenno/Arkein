# Rencana Implementasi: Arkein Personal AI Agent Playground (9Router Local Edition)

**Referensi Spec:** [docs/superpowers/specs/2026-10-09-personal-ai-playground-design.md](file:///c:/Users/HP/Arkein/docs/superpowers/specs/2026-10-09-personal-ai-playground-design.md)  
**Status:** Sedang Dikerjakan  
**Tujuan:** Mengintegrasikan section Neural Lab dengan 9Router lokal (`http://localhost:20128/v1`) untuk pengalaman autonomous agent yang adaptif dengan memori dialog multi-turn dan streaming real-time.

---

## Task Breakdown

### Task 1: Perkaya Persona & Agent Prompt (`src/data/aiKnowledge.ts`)
- **Tujuan:** Memberikan instruksi agentik mutakhir agar AI adaptif terhadap alur tanya-jawab multi-turn, mempertahankan konteks percakapan, dan merespons dengan gaya profesional representasi digital Arkana.
- **Validasi:** Export `SYSTEM_PERSONA_PROMPT` diperbarui dengan panduan multi-turn context retention & proactive follow-up recommendations.

### Task 2: Implementasi 9Router Adapter & Multi-Turn State (`src/components/NeuralLab.astro`)
- **Tujuan:** Menghubungkan client terminal ke 9Router lokal di `http://localhost:20128/v1`.
- **Fitur Utama:**
  - `chatHistory`: Menyimpan array percakapan `[{role, content}]` untuk multi-turn retention.
  - Auto-discovery Model dari `http://localhost:20128/v1/models` (default `ag/gemini-3.8-flash`).
  - Streaming SSE / Real-time token streaming dari `POST /v1/chat/completions`.
  - Settings Drawer untuk endpoint URL, model selector, dan 9Router API key dengan tautan 1-klik ke Dashboard 9Router (`http://localhost:20128/dashboard`).
  - Graceful Fallback ke Local Persona Core jika 9Router offline.

### Task 3: Verifikasi Build & E2E Test
- **Tujuan:** Menjalankan build validasi Astro (`npm run build`) dan verifikasi fungsionalitas chat di browser.
