# Plans — Arkein

Implementation plan — breakdown task yang executable, dihasilkan dari spec di `docs/superpowers/specs/`.

## Kombinasi skill wajib saat membuat plan
```
/plan-writer  bersamaan dengan  superpowers:writing-plans-self-improvement-assistant
```

## Naming convention
```
YYYY-MM-DD-{slug-fitur}.md
```
Harus merujuk ke spec dengan slug yang sama di `docs/superpowers/specs/`.

## Isi minimal sebuah plan
- **Referensi spec** — link ke file spec yang jadi sumber
- **Task list berurutan** — dengan dependency order eksplisit
- **File manifest per task** — file mana yang akan disentuh
- **Validation step per task** — command atau kriteria yang membuktikan task selesai
- **User approval checkpoint** — plan harus di-approve user sebelum eksekusi dimulai
