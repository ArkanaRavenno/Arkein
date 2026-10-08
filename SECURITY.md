# SECURITY.md — Arkein

Security policy for human + AI contributors. Companion to `AGENTS.md` (checklist) and `CLAUDE.md` (rules).

## 1. Principles
- **Defense in depth:** validate + sanitize all user inputs.
- **Client-Side Safety:** jangan hardcode API keys, token, atau secret ke dalam client bundle.
- **Fail closed; no 100% claims.**

## 2. Secret Handling
- Secrets in **server env** only — never in git, code, docs, logs, or error responses.
- `.env`, `.env.*`, `*.pem`, `*.key` are **never** read, printed, or committed.

## 3. AI Coding Agent Rules
- Follow `AGENTS.md`; never bypass the Security Gate.
- Do not: read secret files, hardcode credentials, deploy unapproved changes.
- Run available validation (`npm run build`) before claiming done.

## 4. MCP / Plugin Permission Policy
**Allowed:** read/write project folder · run lint/build/test · run gitleaks/semgrep.  
**Blocked:** read production secrets · unrestricted shell · destructive filesystem operations.

## 5. Required Security Scan Commands
```bash
npm run security:secrets   # gitleaks — secret scan
npm run security:code      # semgrep --config auto — SAST
npm run security:fs        # trivy fs — deps/secret/misconfig
```

## 6. Pre-Deploy Checklist
- [ ] lint + build clean (`npm run build`)
- [ ] No secret diffs (gitleaks); no `.env*` staged
- [ ] Responsive layout & simulator verified
