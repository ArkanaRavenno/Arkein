# AI Agent Protocol — Arkein

Binds `AGENTS.md` (checklist), `CLAUDE.md` (rules), `SECURITY.md` (policy).

## 1. Development Workflow
1. **Understand** — restate the task; read relevant docs. Don't work from memory.
2. **Inspect** — check existing code, styles, and data structures.
3. **Plan** — declare files, constraints, and security surface. Risky/new features: `/brainstorm` → `/spec-writer` → `/plan-writer` + `superpowers:writing-plans-self-improvement-assistant`.
4. **Implement** — minimal, reviewable change following Astro + Tailwind CSS v4 conventions.
5. **Validate** — run available checks (`npm run build`) before claiming done.
6. **Report** — Summary · Files changed · Validation run · Next steps.

## 2. Tool Usage Priority
| Priority | Tool | Use for |
|---|---|---|
| 1 | Context7 MCP | up-to-date Astro/Tailwind v4 docs |
| 2 | Playwright / Browser | UI visual verification |
| 3 | Semgrep | SAST on user input/state code |
| 4 | Gitleaks CLI | secret scan |

## 3. Feature Completion Checklist
- [ ] build passes (`npm run build`)
- [ ] responsive design verified
- [ ] relevant docs updated (docs-as-code)
