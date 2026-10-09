# Spesifikasi Desain: Arkein Personal AI Agent Playground (9Router Local Edition)

**Tanggal:** 2026-10-09  
**Status:** Draf Disetujui  
**Penulis:** Antigravity AI & Arkana Ravenno  
**Tujuan:** Mentransformasikan section AI Playground (`NeuralLab.astro`) menjadi Autonomous Personal AI Agent interaktif berbasis **9Router Local Gateway** (`http://localhost:20128/v1`) yang adaptif terhadap pertanyaan user dengan multi-turn memory, reasoning matrix dinamis, model selector, dan fallback mulus ke Local Persona Core.

---

## 1. Problem & Goal

### Problem
Asisten AI sebelumnya beroperasi secara stateless (single-turn) dan awalnya menargetkan API eksternal Google Gemini langsung. User menginginkan AI yang dapat beradaptasi secara dinamis terhadap rangkaian pertanyaan percakapan selayaknya agent sungguhan, serta menggunakan token dan model dari gateway **9Router lokal** (`http://localhost:20128/v1`) yang sudah berjalan di sistem lokal user.

### Goal
1. **Agentic Adaptability & Multi-Turn Retention:**
   - Menyimpan dan menyertakan riwayat percakapan interaktif (`messages: [{role, content}]`) sehingga agent memahami konteks lanjutan (follow-up questions), referensi kata ganti, dan alur diskusi teknis.
   - Persona adaptif: mampu menyajikan jawaban ringkas jika santai, dan breakdown teknis mendalam dengan cuplikan arsitektur jika ditanya detail rekayasa.
2. **Integrasi 9Router Lokal:**
   - Menggunakan gateway lokal `http://localhost:20128/v1` (OpenAI-compatible).
   - Mendukung model-model mutakhir yang terdaftar di 9Router (misal: `ag/gemini-3.8-flash`, `ag/claude-sonnet-5-5`, `cx/gpt-5.5`).
   - Auto-discovery model dari endpoint `GET http://localhost:20128/v1/models`.
   - Streaming SSE token-by-token real-time dari `POST /v1/chat/completions`.
3. **UI/UX Cybernetic & Telemetri Real-Time:**
   - Visualisasi alur berpikir agentic (*Reasoning Matrix*).
   - Status HUD: Model aktif, latency ms, token counter, dan health status 9Router.
   - Drawer Settings intuitif dengan link cepat ke 9Router Dashboard (`http://localhost:20128/dashboard`).
   - Fallback otomatis ke *Local Persona Core* jika 9Router offline atau kunci belum disetel.

---

## 2. Arsitektur & Alur Data

```
                      +---------------------------------------+
                      |           Pengunjung Web              |
                      +-------------------+-------------------+
                                          | Input Pertanyaan
                                          v
                      +---------------------------------------+
                      |   Arkein Neural Terminal Interface    |
                      |   - Multi-Turn Memory Array           |
                      |   - Live Reasoning Matrix             |
                      +-------------------+-------------------+
                                          |
                                          v
                      +---------------------------------------+
                      |         Engine Router Dispatcher      |
                      +---------+-------------------+---------+
                                |                   |
             (Jika 9Router Aktif|                   | (Fallback / Offline)
              & Key Tersedia)   v                   v
            +-----------------------+   +-----------------------------+
            | 9Router Local Gateway |   | Local Neural Persona Core   |
            | http://localhost:20128|   | - Fuzzy Intent Matcher      |
            | /v1/chat/completions  |   | - Static Knowledge Vault    |
            | [Stream SSE Reader]   |   | - Deterministic Reasoning   |
            +-----------+-----------+   +--------------+--------------+
                        |                              |
                        +--------------+---------------+
                                       |
                                       v
                      +---------------------------------------+
                      |     Real-Time Token-by-Token Render   |
                      |      + Dynamic Context Retention      |
                      +---------------------------------------+
```

---

## 3. Keamanan & Kebijakan Rahasia
1. **Strict Secret Isolation:** Kunci API 9Router tidak di-hardcode ke kode sumber repo. Pengguna memasukkan API Key melalui UI drawer Settings dan disimpan secara privat di `localStorage` klien browser (`arkein_9router_key`).
2. **Blind Handling:** Agen AI pengembang tidak pernah membaca atau menampilkan nilai rahasia/token ke log atau artefak.
3. **XSS Sanitization:** Semua konten input pengguna dan hasil inferensi di-escape atau di-render secara aman dengan format markdown terstruktur.

---

## 4. Kriteria Penerimaan (Definition of Done)
- [x] AI mengingat konteks percakapan sebelumnya dalam satu sesi (Multi-Turn Conversation).
- [x] Terhubung ke 9Router lokal di `http://localhost:20128/v1` dengan model default `ag/gemini-3.8-flash`.
- [x] Model dropdown dapat mendeteksi/memilih model yang tersedia di 9Router secara otomatis.
- [x] Streaming output bekerja secara real-time.
- [x] Fallback mulus ke Local Persona Core jika koneksi 9Router tidak tersedia.
- [x] Build Astro berhasil 100% tanpa error (`npm run build`).
