# AGENTS.md — Arkein

Execution checklist untuk AI agents. **`CLAUDE.md` = aturan & referensi; file ini = checklist eksekusi; `SECURITY.md` = kebijakan security.**

> Repo ini punya `SessionStart` hook di `.claude/settings.json` yang otomatis cek marker protokol tiap sesi baru dibuka. Jangan hapus heading `## ⚙️ Alur Kerja Wajib` dari `CLAUDE.md`.

---

## 🚨 Mandatory Pre-Task Checklist — NO EXCEPTIONS

### Step 1: Load Project Context
```bash
git status --short --branch
```
- [ ] Baca `CLAUDE.md` penuh — catat stack, arsitektur, aturan, dan forbidden actions
- [ ] Baca `AGENTS.md` ini
- [ ] Baca spec di `docs/superpowers/specs/` dan plan di `docs/superpowers/plans/`

### Step 2: Declare Intent
Sebelum coding, nyatakan secara eksplisit:
1. **Files yang akan disentuh** — list lengkap
2. **Shared-file risk** — apakah ada file yang saling bergantung?
3. **Constraints dari `CLAUDE.md`** — rule apa yang berlaku untuk task ini?
4. **Security concerns** — input, external URLs, client state.

### Step 3: Security Gate
| Area | Mandatory Check |
|---|---|
| **Input Validation** | Validasi input form/kontak jika ada? |
| **Secret Handling** | Tidak ada API keys/token tersimpan di client-side? |
| **XSS Prevention** | Tidak ada injeksi HTML mentah tanpa sanitasi? |
| **External Links** | Menggunakan `rel="noopener noreferrer"` untuk link eksternal? |

### Step 4: Post-Implementation Validation
```bash
npm run build
```
Jika command tidak bisa dijalankan, sampaikan ke user apa yang perlu divalidasi.

### Step 5: Docs-as-Code — Definition of Done
Task belum "selesai" sampai docs mencerminkan realita. Update dalam commit yang sama dengan code change.

---

## 🛠️ Workflow Skills

| Workflow Fase | Skills yang Digunakan |
|---|---|
| Fase 1: Ideasi | `/brainstorm` |
| Fase 2: Spec | `/spec-writer` |
| Fase 2: Planning | `/plan-writer` + `superpowers:writing-plans-self-improvement-assistant` |
| Fase 3: Eksekusi | `superpowers:subagent-driven-development` + `superpowers:sdd-self-improvement-assistant` |
| Fase 4: Validasi & QA | `/qa-master` |
