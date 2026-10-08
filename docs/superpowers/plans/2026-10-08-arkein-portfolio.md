# Arkein Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete, high-performance, Aurora Glassmorphic portfolio web application for Arkein (Full-Stack AI Engineer & System Architect) using Astro 5, Tailwind CSS v4, and Vanilla JS Native with the Arctic Eclipse design system.

**Architecture:** Astro 5 static site generation with scrollytelling sections, dynamic flowing Aurora Mesh background animations, modular typed data layers (`projects.ts`, `scenarios.ts`), and an interactive client-side Island for the Neural Lab Agent Playground powered by pure Vanilla JS Native.

**Tech Stack:** Astro 5, Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript, Vanilla JS Native DOM API, Google Fonts (Space Grotesk, Inter, JetBrains Mono).

## Global Constraints
- **Framework:** Astro 5 with `@tailwindcss/vite` (Tailwind CSS v4).
- **Design System:** Aurora Glassmorphism (Arctic Eclipse: Fluid organic Aurora mesh gradients + Frosted glass surfaces with `backdrop-filter: blur(22px)`).
- **Color Palette Tokens:**
  - Canvas: Void 950 (`#05070B`), Void 900 (`#090E17`), Void 850 (`rgba(12, 19, 32, 0.72)`)
  - Accents: Arctic Cobalt (`#60A5FA`), Sky Frost (`#38BDF8`), Pure Platinum (`#E2E8F0`), Deep Cobalt Underglow (`#1D4ED8`)
  - Text: High contrast WCAG AAA (`#FFFFFF`, `#E2E8F0`, `#94A3B8`)
- **Interactive Script:** Pure Vanilla JS Native in `<script>` tags without React/Vue runtime dependencies.
- **Git Policy:** Never auto-commit or auto-push without explicit user permission.
- **Secret Policy:** Never create or read real secret files (`.env*`, credentials).

---

### Task 1: Project Scaffolding & Tailwind CSS v4 with Arctic Eclipse Tokens

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/styles/global.css`

**Interfaces:**
- Consumes: Node.js npm environment
- Produces: Working Astro 5 build pipeline with `@tailwindcss/vite` and Arctic Eclipse `@theme` tokens

- [x] **Step 1: Create package.json**

```json
{
  "name": "arkein-portfolio",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "astro": "^5.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

- [x] **Step 2: Create astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [x] **Step 3: Create tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [x] **Step 4: Create src/styles/global.css with Arctic Eclipse tokens & keyframes**

```css
@import "tailwindcss";

@theme {
  --color-void-950: #05070b;
  --color-void-900: #090e17;
  --color-void-850: #0f172a;
  
  --color-arctic-cobalt: #60a5fa;
  --color-arctic-dark: #1d4ed8;
  --color-sky-frost: #38bdf8;
  --color-pure-platinum: #e2e8f0;
  
  --font-heading: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

:root {
  color-scheme: dark;
}

body {
  background-color: var(--color-void-950);
  color: #e2e8f0;
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Aurora Background Engine */
.aurora-container {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -10;
}

.aurora-blob-1 {
  position: absolute;
  top: -15%;
  left: 15%;
  width: 750px;
  height: 750px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.26) 0%, rgba(30, 58, 138, 0.20) 45%, transparent 70%);
  filter: blur(100px);
  animation: auroraFlow1 16s ease-in-out infinite alternate;
  will-change: transform;
}

.aurora-blob-2 {
  position: absolute;
  top: 30%;
  right: -5%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(79, 70, 229, 0.22) 50%, transparent 70%);
  filter: blur(120px);
  animation: auroraFlow2 20s ease-in-out infinite alternate-reverse;
  will-change: transform;
}

.aurora-blob-3 {
  position: absolute;
  bottom: -10%;
  left: 20%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(226, 232, 240, 0.16) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 70%);
  filter: blur(110px);
  animation: auroraFlow3 18s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes auroraFlow1 {
  0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
  50% { transform: translate3d(80px, 60px, 0) scale(1.15) rotate(15deg); }
  100% { transform: translate3d(-40px, 90px, 0) scale(0.95) rotate(-10deg); }
}

@keyframes auroraFlow2 {
  0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
  50% { transform: translate3d(-90px, 50px, 0) scale(1.18) rotate(-18deg); }
  100% { transform: translate3d(50px, -60px, 0) scale(0.92) rotate(12deg); }
}

@keyframes auroraFlow3 {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(70px, -70px, 0) scale(1.12); }
  100% { transform: translate3d(-60px, 40px, 0) scale(0.96); }
}

@media (prefers-reduced-motion: reduce) {
  .aurora-blob-1, .aurora-blob-2, .aurora-blob-3 {
    animation: none;
  }
}

/* Frosted Aurora Glass Surfaces */
.glass-panel {
  background: rgba(12, 19, 32, 0.72);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-panel:hover {
  border-color: rgba(96, 165, 250, 0.45);
  box-shadow: 0 20px 48px -10px rgba(0, 0, 0, 0.6), 0 0 28px 0 rgba(96, 165, 250, 0.20);
  transform: translateY(-2px);
}

.glass-badge {
  background: rgba(96, 165, 250, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.30);
  backdrop-filter: blur(10px);
}
```

- [x] **Step 5: Install dependencies & run build verification**

Run: `npm install && npm run build`
Expected: PASS

---

### Task 2: Base Layout with Flowing Aurora Mesh & Navigation Dock

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/components/Navigation.astro`

**Interfaces:**
- Consumes: `src/styles/global.css`
- Produces: `Layout.astro` with ambient aurora background engine & `Navigation.astro`

- [x] **Step 1: Create src/components/Navigation.astro**

```astro
---
// Navigation dock with Arctic Eclipse Aurora Glass styling
---
<header class="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
  <nav class="glass-panel px-6 py-3 rounded-full flex items-center justify-between gap-8 max-w-4xl w-full border border-white/10 shadow-2xl">
    <a href="#hero" class="flex items-center gap-2.5 group">
      <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-arctic-cobalt via-sky-frost to-pure-platinum flex items-center justify-center font-heading font-bold text-void-950 text-sm shadow-lg shadow-arctic-cobalt/25 group-hover:scale-105 transition-transform">
        A
      </div>
      <div class="flex flex-col">
        <span class="font-heading font-bold text-white tracking-wider text-base">ARKEIN</span>
        <span class="font-mono text-[9px] text-arctic-cobalt tracking-widest uppercase">AI Systems</span>
      </div>
    </a>

    <div class="hidden md:flex items-center gap-6 font-mono text-xs text-slate-300">
      <a href="#philosophy" class="hover:text-arctic-cobalt transition-colors">01. PHILOSOPHY</a>
      <a href="#neural-lab" class="hover:text-arctic-cobalt transition-colors flex items-center gap-1.5 text-arctic-cobalt">
        <span class="w-1.5 h-1.5 rounded-full bg-arctic-cobalt animate-pulse"></span>
        02. NEURAL LAB
      </a>
      <a href="#case-studies" class="hover:text-arctic-cobalt transition-colors">03. CASE STUDIES</a>
      <a href="#stack" class="hover:text-arctic-cobalt transition-colors">04. STACK</a>
    </div>

    <div class="flex items-center gap-3">
      <div class="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-[11px] font-mono text-arctic-cobalt">
        <span class="w-2 h-2 rounded-full bg-arctic-cobalt animate-ping"></span>
        <span>AVAILABLE FOR WORK</span>
      </div>
      <a href="#contact" class="px-4 py-1.5 rounded-full bg-arctic-cobalt text-void-950 font-heading font-semibold text-xs hover:bg-sky-300 transition-all shadow-md shadow-arctic-cobalt/25">
        Contact
      </a>
    </div>
  </nav>
</header>
```

- [x] **Step 2: Create src/layouts/Layout.astro with Aurora Mesh Container**

```astro
---
import '../styles/global.css';
import Navigation from '../components/Navigation.astro';

interface Props {
  title?: string;
  description?: string;
}

const {
  title = "ARKEIN — Full-Stack AI Engineer & System Architect",
  description = "Architecting Autonomous AI Systems, High-Throughput Inference Engines, and Interactive Web Applications."
} = Astro.props;
---
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content={description}>
  <title>{title}</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
</head>
<body class="relative min-h-screen bg-void-950 selection:bg-arctic-cobalt selection:text-void-950 text-slate-200">
  <!-- Dynamic Aurora Background Engine -->
  <div class="aurora-container" aria-hidden="true">
    <div class="aurora-blob-1"></div>
    <div class="aurora-blob-2"></div>
    <div class="aurora-blob-3"></div>
  </div>
  
  <Navigation />
  
  <slot />
</body>
</html>
```

- [x] **Step 3: Verify build compilation**

Run: `npm run build`
Expected: PASS

---

### Task 3: Structured Data Layer (Projects & Simulation Scenarios)

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/scenarios.ts`

**Interfaces:**
- Consumes: TypeScript types
- Produces: `projects: CaseStudy[]` and `scenarios: Record<string, SimulationScenario>`

- [x] **Step 1: Create src/data/projects.ts**

```typescript
export interface CaseStudy {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  stack: string[];
  challenge: string;
  architecture: string;
  impactBadge: string;
  impactDesc: string;
}

export const projects: CaseStudy[] = [
  {
    id: "aegis",
    tag: "AGENTIC SYSTEM / LLMOPS",
    tagColor: "text-arctic-cobalt",
    title: "Aegis: Autonomous Multi-Agent Vulnerability Auditor",
    stack: ["PyTorch", "LangGraph", "FastAPI", "AST Analysis"],
    challenge: "Pemeriksaan celah kode statis konvensional lambat dan menghasilkan false positive hingga 65% tanpa pemahaman semantik alur aplikasi.",
    architecture: "Arsitektur multi-agent DAG: Recon Agent mendeteksi sinks, Exploiter Agent memvalidasi di sandbox terisolasi, dan Fixer Agent mengusulkan patch teruji.",
    impactBadge: "-78% False Positive Rate",
    impactDesc: "Waktu audit sistem berkurang dari 4 jam menjadi 9 menit dengan tingkat kepercayaan 99.8%."
  },
  {
    id: "synapse",
    tag: "ENTERPRISE RETRIEVAL / HYBRID SEARCH",
    tagColor: "text-sky-frost",
    title: "Synapse RAG: High-Recall Enterprise Knowledge Engine",
    stack: ["Qdrant", "Astro", "BM25", "Cross-Encoder", "Redis"],
    challenge: "Query teknis kompleks pada repositori dokumen multi-format rentan halusinasi dan kehilangan referensi domain spesifik.",
    architecture: "Hybrid Reciprocal Rank Fusion (RRF) menggabungkan sparse BM25 + dense vector embedding + cross-encoder re-ranking dengan latency budget <200ms.",
    impactBadge: "99.2% Top-3 Precision",
    impactDesc: "Zero-hallucination diverifikasi pada benchmark 10.000 query kebijakan enterprise."
  },
  {
    id: "edgequant",
    tag: "INFERENCE OPTIMIZATION / EDGE AI",
    tagColor: "text-pure-platinum",
    title: "EdgeQuant: Low-Latency Small Language Model Inference",
    stack: ["vLLM", "TensorRT-LLM", "Docker", "WebSockets"],
    challenge: "Tingginya biaya inferensi model besar (>70B) dan latensi tinggi (1.2s p95) menghambat aplikasi agentic real-time.",
    architecture: "Kuantisasi INT4 AWQ pada model 7B/14B yang di-deploy via vLLM engine terdistribusi dengan semantic response caching berlatensi mikro.",
    impactBadge: "-65% Compute Cost & 4.2x Throughput",
    impactDesc: "Inference latency berkurang menjadi 142ms per request dengan throughput 112 token/detik."
  }
];
```

- [x] **Step 2: Create src/data/scenarios.ts**

```typescript
export interface StepLog {
  text: string;
  delay: number;
  color: string;
}

export interface SimulationScenario {
  id: string;
  name: string;
  prompt: string;
  reasoningModel: string;
  toolsLoaded: string;
  steps: StepLog[];
}

export const scenarios: Record<string, SimulationScenario> = {
  rag: {
    id: "rag",
    name: "Enterprise RAG",
    prompt: "Analyze enterprise policy repository for conflicting access control rules and synthesize zero-trust remediation plan.",
    reasoningModel: "Arkein-CoT-v2",
    toolsLoaded: "3 Loaded (Vector, AST, Sandbox)",
    steps: [
      { text: "⚡ [Planning] Parsing intent: conflicting RBAC/ABAC rules in vector index...", delay: 300, color: "text-slate-400" },
      { text: "🔍 [Tool Call] vector_search(collection='policies_v3', top_k=8, filter={'dept': 'engineering'})", delay: 800, color: "text-sky-frost" },
      { text: "📊 [Analysis] Identified 2 semantic contradictions between Section 4.2 and Section 9.1.", delay: 1400, color: "text-amber-400" },
      { text: "🧠 [Synthesis] Generating synthesized remediation matrix with zero-trust recommendations...", delay: 2000, color: "text-arctic-cobalt font-semibold" },
      { text: "✅ [Complete] Policy audit completed with 0 errors. Latency: 142ms, Tokens: 840.", delay: 2600, color: "text-pure-platinum font-bold" }
    ]
  },
  code: {
    id: "code",
    name: "Code Security Audit",
    prompt: "Perform automated security taint analysis on payment webhook endpoint handler.",
    reasoningModel: "Arkein-Security-v1",
    toolsLoaded: "4 Loaded (Semgrep, AST, Sandbox, Git)",
    steps: [
      { text: "⚡ [Planning] Constructing AST graph and tracing untrusted HTTP payload ingress...", delay: 300, color: "text-slate-400" },
      { text: "🔍 [Tool Call] ast_taint_check(source='req.body', sink='eval|execute_raw_sql')", delay: 900, color: "text-sky-frost" },
      { text: "🛡️ [Verification] Parameterized query verified. No SQL injection sinks detected.", delay: 1600, color: "text-arctic-cobalt font-semibold" },
      { text: "✅ [Complete] Security audit passed with high confidence. Confidence score: 0.998.", delay: 2200, color: "text-pure-platinum font-bold" }
    ]
  },
  multi: {
    id: "multi",
    name: "Multi-Agent DAG",
    prompt: "Dispatch parallel sub-agents to benchmark model quantization latency across FP16 vs INT4.",
    reasoningModel: "Arkein-Orchestrator",
    toolsLoaded: "5 Loaded (Benchmark, Hardware, Metrics)",
    steps: [
      { text: "⚡ [Orchestration] Spawning 2 worker agents in isolated test harnesses...", delay: 300, color: "text-slate-400" },
      { text: "🤖 [Sub-Agent 1] Benchmarking FP16 on TensorRT: 48.2 tok/s @ 12.4ms per token", delay: 900, color: "text-sky-frost" },
      { text: "🤖 [Sub-Agent 2] Benchmarking INT4 AWQ: 112.6 tok/s @ 5.8ms per token (2.3x speedup)", delay: 1700, color: "text-arctic-cobalt font-semibold" },
      { text: "✅ [Consensus] Multi-agent execution reconciled. Pareto-optimal configuration selected.", delay: 2400, color: "text-pure-platinum font-bold" }
    ]
  }
};
```

- [x] **Step 3: Verify TypeScript typing**

Run: `npx astro check`
Expected: PASS with 0 errors

---

### Task 4: Hero Section & Philosophy Scrollytelling Components

**Files:**
- Create: `src/components/Hero.astro`
- Create: `src/components/Philosophy.astro`

**Interfaces:**
- Consumes: Arctic Eclipse design tokens & typography
- Produces: Hero with value proposition, metrics quickbar, and 4-phase philosophy scrollytelling

- [x] **Step 1: Create src/components/Hero.astro**

```astro
---
// Hero component with Arctic Eclipse styling
---
<section id="hero" class="pt-16 pb-12 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
  <div class="md:col-span-7 space-y-6">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-arctic-cobalt border-arctic-cobalt/30">
      <span class="w-2 h-2 rounded-full bg-arctic-cobalt animate-pulse"></span>
      <span>FULL-STACK AI ARCHITECT & ENGINEER</span>
    </div>
    
    <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
      Architecting <span class="text-transparent bg-clip-text bg-gradient-to-r from-arctic-cobalt via-sky-frost to-pure-platinum">Autonomous AI</span> with Aurora Precision.
    </h1>

    <p class="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
      Saya mengembangkan sistem AI end-to-end: dari fondasi LLM & Autonomous Agent reasoning, model inference optimization, hingga antarmuka web interaktif berkinerja tinggi.
    </p>

    <div class="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
      <a href="#neural-lab" class="px-6 py-3 rounded-xl bg-gradient-to-r from-arctic-cobalt via-sky-frost to-pure-platinum text-void-950 font-heading font-bold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-arctic-cobalt/30 hover:scale-[1.02] transition-all">
        <span>Explore Neural Lab</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </a>
      <a href="#case-studies" class="px-6 py-3 rounded-xl glass-panel text-white font-heading font-semibold text-sm hover:border-arctic-cobalt/40 transition-all flex items-center gap-2">
        View Case Studies
      </a>
    </div>

    <!-- Quick Spec Telemetry Bar -->
    <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
      <div>
        <div class="font-heading text-2xl font-bold text-arctic-cobalt">99.4%</div>
        <div class="text-xs text-slate-400 font-mono">Retrieval Recall</div>
      </div>
      <div>
        <div class="font-heading text-2xl font-bold text-sky-frost">-45%</div>
        <div class="text-xs text-slate-400 font-mono">Inference Latency</div>
      </div>
      <div>
        <div class="font-heading text-2xl font-bold text-pure-platinum">Full-Stack</div>
        <div class="text-xs text-slate-400 font-mono">End-to-End Delivery</div>
      </div>
    </div>
  </div>

  <!-- Hero Visual Card -->
  <div class="md:col-span-5">
    <div class="glass-panel p-6 rounded-2xl border-white/10 relative overflow-hidden group">
      <div class="absolute -top-12 -right-12 w-48 h-48 bg-arctic-cobalt/15 rounded-full blur-2xl"></div>
      
      <div class="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <span class="font-mono text-xs text-arctic-cobalt font-semibold flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-arctic-cobalt"></span>
          CORE METRICS MONITOR
        </span>
        <span class="font-mono text-[10px] text-slate-400">NODE: ARKEIN-v1</span>
      </div>

      <div class="space-y-4 font-mono text-xs">
        <div class="p-3 rounded-xl bg-void-950/70 border border-white/5 space-y-1.5">
          <div class="flex justify-between text-slate-300">
            <span>Agent Execution Loop</span>
            <span class="text-arctic-cobalt">Active</span>
          </div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-arctic-cobalt via-sky-frost to-pure-platinum h-full w-[88%] animate-pulse"></div>
          </div>
          <div class="flex justify-between text-[10px] text-slate-400">
            <span>State: Self-Healing</span>
            <span>p95 Latency: 142ms</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-void-950/70 border border-white/5 space-y-1.5">
          <div class="flex justify-between text-slate-300">
            <span>Vector Semantic Cache</span>
            <span class="text-sky-frost">94.2% Hit Rate</span>
          </div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div class="bg-sky-frost h-full w-[94%]"></div>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-void-950/70 border border-white/5 flex items-center justify-between">
          <div>
            <div class="text-slate-300">Deployment Architecture</div>
            <div class="text-[10px] text-slate-400">vLLM + TensorRT-LLM on K8s</div>
          </div>
          <span class="px-2 py-0.5 rounded bg-blue-500/20 text-arctic-cobalt text-[10px]">Optimized</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [x] **Step 2: Create src/components/Philosophy.astro**

```astro
---
// 4-Phase Scrollytelling Philosophy
---
<section id="philosophy" class="space-y-12 scroll-mt-24">
  <div class="space-y-3">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-xs font-mono text-arctic-cobalt">
      <span>01 / ENGINEERING PHILOSOPHY</span>
    </div>
    <h2 class="font-heading text-3xl sm:text-4xl font-bold text-white">
      The Full-Stack <span class="text-arctic-cobalt">AI Lifecycle</span>
    </h2>
    <p class="text-slate-400 text-sm max-w-xl">
      Merancang kecerdasan buatan bukan hanya tentang memanggil API model, tetapi membangun ekosistem komputasi yang andal, hemat biaya, dan terukur.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="glass-panel p-6 rounded-2xl border-white/10 space-y-3 relative group">
      <div class="font-mono text-xs text-arctic-cobalt font-bold">PHASE 01</div>
      <h3 class="font-heading text-lg font-bold text-white">Benchmark & Metric Formulation</h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        Menentukan baseline performa, ground-truth dataset, dan metrik evaluasi kuantitatif sebelum menulis model.
      </p>
    </div>

    <div class="glass-panel p-6 rounded-2xl border-white/10 space-y-3 relative group">
      <div class="font-mono text-xs text-sky-frost font-bold">PHASE 02</div>
      <h3 class="font-heading text-lg font-bold text-white">Agentic Loops & Hybrid Retrieval</h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        Orkestrasi alur reasoning, tool calling, self-correction, dan hybrid search (BM25 + Dense) untuk presisi maksimal.
      </p>
    </div>

    <div class="glass-panel p-6 rounded-2xl border-white/10 space-y-3 relative group">
      <div class="font-mono text-xs text-pure-platinum font-bold">PHASE 03</div>
      <h3 class="font-heading text-lg font-bold text-white">Low-Latency Inference Delivery</h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        Kuantisasi model, batching dinamis via vLLM, semantic caching Redis, dan arsitektur async non-blocking.
      </p>
    </div>

    <div class="glass-panel p-6 rounded-2xl border-white/10 space-y-3 relative group">
      <div class="font-mono text-xs text-blue-300 font-bold">PHASE 04</div>
      <h3 class="font-heading text-lg font-bold text-white">Human-Centric Web Interface</h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        Antarmuka modern responsif dengan visualisasi streaming token real-time dan kontrol human-in-the-loop yang mulus.
      </p>
    </div>
  </div>
</section>
```

- [x] **Step 3: Verify build compilation**

Run: `npm run build`
Expected: PASS

---

### Task 5: Interactive Neural Lab Agent Playground Component

**Files:**
- Create: `src/components/NeuralLab.astro`

**Interfaces:**
- Consumes: `src/data/scenarios.ts`
- Produces: Interactive agent simulator with scenario buttons, step-by-step reasoning trace, and real-time telemetry updates.

- [x] **Step 1: Create src/components/NeuralLab.astro**

```astro
---
import { scenarios } from '../data/scenarios';
---
<section id="neural-lab" class="space-y-8 scroll-mt-24">
  <div class="text-center max-w-2xl mx-auto space-y-3">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-xs font-mono text-arctic-cobalt">
      <span>02 / INTERACTIVE SIGNATURE LAB</span>
    </div>
    <h2 class="font-heading text-3xl sm:text-4xl font-bold text-white">
      The Neural Agent <span class="text-arctic-cobalt">Playground</span>
    </h2>
    <p class="text-slate-400 text-sm">
      Simulasi nyata bagaimana autonomous agent mengeksekusi problem solving: reasoning step, tool invocation, dan streaming response secara real-time.
    </p>
  </div>

  <div class="glass-panel rounded-2xl overflow-hidden border border-arctic-cobalt/30 shadow-2xl">
    <div class="bg-void-900/90 border-b border-white/10 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <div class="flex gap-1.5">
          <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>
        <span class="font-mono text-xs text-slate-300 ml-2">arkein-agent://runtime-evaluator</span>
      </div>

      <div class="flex items-center gap-2 font-mono text-xs">
        <span class="text-slate-400 text-[11px] hidden sm:inline">Scenario:</span>
        <button type="button" data-scenario="rag" id="btn-rag" class="scenario-btn px-3 py-1 rounded-lg bg-arctic-cobalt/20 border border-arctic-cobalt text-arctic-cobalt font-medium transition-all">
          Enterprise RAG
        </button>
        <button type="button" data-scenario="code" id="btn-code" class="scenario-btn px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all">
          Code Security Audit
        </button>
        <button type="button" data-scenario="multi" id="btn-multi" class="scenario-btn px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all">
          Multi-Agent DAG
        </button>
      </div>
    </div>

    <div class="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-void-950/80">
      <div class="lg:col-span-5 space-y-4">
        <div class="space-y-1.5">
          <label for="scenario-prompt" class="text-xs font-mono text-slate-400">Agent Task Prompt:</label>
          <div id="scenario-prompt" class="p-3.5 rounded-xl bg-void-900 border border-white/10 font-mono text-xs text-slate-200 leading-relaxed min-h-[90px]">
            "{scenarios.rag.prompt}"
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
          <div class="p-2 rounded-lg bg-white/5 border border-white/5">
            <span class="text-slate-500 block text-[10px]">REASONING MODEL</span>
            <span id="scenario-model" class="text-white">{scenarios.rag.reasoningModel}</span>
          </div>
          <div class="p-2 rounded-lg bg-white/5 border border-white/5">
            <span class="text-slate-500 block text-[10px]">LOADED TOOLS</span>
            <span id="scenario-tools" class="text-arctic-cobalt">{scenarios.rag.toolsLoaded}</span>
          </div>
        </div>

        <button id="run-simulation-btn" type="button" class="w-full py-3 rounded-xl bg-gradient-to-r from-arctic-cobalt via-sky-frost to-pure-platinum text-void-950 font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-arctic-cobalt/20 hover:brightness-110 active:scale-[0.99] transition-all">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
          <span>Run Agent Simulation</span>
        </button>
      </div>

      <div class="lg:col-span-7 flex flex-col space-y-3">
        <div class="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>EXECUTION TRACE & REASONING:</span>
          <span id="agent-status" class="text-arctic-cobalt flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-arctic-cobalt"></span> Ready
          </span>
        </div>

        <div id="output-box" class="h-64 overflow-y-auto p-4 rounded-xl bg-void-900/90 border border-white/10 font-mono text-xs space-y-2.5 text-slate-300 leading-relaxed shadow-inner" role="log" aria-live="polite">
          <div class="text-slate-500 italic">// Click "Run Agent Simulation" to observe step-by-step agentic execution...</div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[11px] text-slate-400">
          <span>Latency: <strong id="telemetry-latency" class="text-white">0 ms</strong></span>
          <span>Tokens: <strong id="telemetry-tokens" class="text-white">0 tok</strong></span>
          <span>Cost: <strong id="telemetry-cost" class="text-arctic-cobalt">$0.0000</strong></span>
        </div>
      </div>
    </div>
  </div>
</section>

<script is:inline define:vars={{ scenariosData: scenarios }}>
  (function() {
    let currentScenarioId = 'rag';
    let isExecuting = false;

    const promptEl = document.getElementById('scenario-prompt');
    const modelEl = document.getElementById('scenario-model');
    const toolsEl = document.getElementById('scenario-tools');
    const outputEl = document.getElementById('output-box');
    const statusEl = document.getElementById('agent-status');
    const runBtn = document.getElementById('run-simulation-btn');
    const latencyEl = document.getElementById('telemetry-latency');
    const tokensEl = document.getElementById('telemetry-tokens');
    const costEl = document.getElementById('telemetry-cost');
    const scenarioBtns = document.querySelectorAll('.scenario-btn');

    function selectScenario(id) {
      if (isExecuting) return;
      currentScenarioId = id;
      const data = scenariosData[id];

      scenarioBtns.forEach(btn => {
        const scenario = btn.getAttribute('data-scenario');
        if (scenario === id) {
          btn.className = "scenario-btn px-3 py-1 rounded-lg bg-arctic-cobalt/20 border border-arctic-cobalt text-arctic-cobalt font-medium transition-all";
        } else {
          btn.className = "scenario-btn px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all";
        }
      });

      if (promptEl) promptEl.textContent = `"${data.prompt}"`;
      if (modelEl) modelEl.textContent = data.reasoningModel;
      if (toolsEl) toolsEl.textContent = data.toolsLoaded;
      if (outputEl) outputEl.innerHTML = '<div class="text-slate-500 italic">// Click "Run Agent Simulation" to observe step-by-step agentic execution...</div>';
      if (statusEl) statusEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-arctic-cobalt"></span> Ready';
      if (latencyEl) latencyEl.textContent = '0 ms';
      if (tokensEl) tokensEl.textContent = '0 tok';
      if (costEl) costEl.textContent = '$0.0000';
    }

    scenarioBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sId = btn.getAttribute('data-scenario');
        if (sId) selectScenario(sId);
      });
    });

    if (runBtn) {
      runBtn.addEventListener('click', () => {
        if (isExecuting) return;
        isExecuting = true;

        runBtn.classList.add('opacity-50', 'cursor-not-allowed');
        if (statusEl) statusEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span> Executing...';
        if (outputEl) outputEl.innerHTML = '';

        const data = scenariosData[currentScenarioId];
        const steps = data.steps;
        const startTime = performance.now();

        steps.forEach((step, idx) => {
          setTimeout(() => {
            if (outputEl) {
              const line = document.createElement('div');
              line.className = step.color;
              line.textContent = step.text;
              outputEl.appendChild(line);
              outputEl.scrollTop = outputEl.scrollHeight;
            }

            const elapsed = Math.round(performance.now() - startTime);
            if (latencyEl) latencyEl.textContent = elapsed + ' ms';
            if (tokensEl) tokensEl.textContent = Math.round((idx + 1) * 280) + ' tok';
            if (costEl) costEl.textContent = '$' + (((idx + 1) * 280 * 0.0000015).toFixed(4));

            if (idx === steps.length - 1) {
              isExecuting = false;
              runBtn.classList.remove('opacity-50', 'cursor-not-allowed');
              if (statusEl) statusEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-pure-platinum"></span> Completed';
            }
          }, step.delay);
        });
      });
    }
  })();
</script>
```

- [x] **Step 2: Verify build compilation**

Run: `npm run build`
Expected: PASS

---

### Task 6: Case Studies & Capabilities Matrix Bento Components

**Files:**
- Create: `src/components/CaseStudies.astro`
- Create: `src/components/CapabilitiesBento.astro`

**Interfaces:**
- Consumes: `src/data/projects.ts`
- Produces: 3 deep case study cards + 3-pillar capabilities matrix

- [x] **Step 1: Create src/components/CaseStudies.astro**

```astro
---
import { projects } from '../data/projects';
---
<section id="case-studies" class="space-y-12 scroll-mt-24">
  <div class="space-y-3">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-xs font-mono text-arctic-cobalt">
      <span>03 / PRODUCTION CASE STUDIES</span>
    </div>
    <h2 class="font-heading text-3xl sm:text-4xl font-bold text-white">
      Engineered for <span class="text-arctic-cobalt">Scale & Precision</span>
    </h2>
    <p class="text-slate-400 text-sm max-w-xl">
      Setiap sistem dirancang dengan fondasi matematis, evaluasi berbasis metrik, dan arsitektur resilient.
    </p>
  </div>

  <div class="space-y-8">
    {projects.map(proj => (
      <div class="glass-panel rounded-2xl p-8 border border-white/10 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class={`text-xs font-mono ${proj.tagColor} tracking-wider uppercase font-semibold`}>
              {proj.tag}
            </span>
            <h3 class="font-heading text-2xl font-bold text-white mt-1">{proj.title}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {proj.stack.map(tech => (
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div class="space-y-2">
            <h4 class="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">The Challenge</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              {proj.challenge}
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">System Architecture</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              {proj.architecture}
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">Measured Impact</h4>
            <div class="p-3 rounded-xl bg-void-950/80 border border-arctic-cobalt/30 space-y-1 font-mono text-xs">
              <div class="text-arctic-cobalt font-bold">{proj.impactBadge}</div>
              <div class="text-slate-300 text-[11px]">{proj.impactDesc}</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
```

- [x] **Step 2: Create src/components/CapabilitiesBento.astro**

```astro
---
// Capabilities Bento Matrix
---
<section id="stack" class="space-y-8 scroll-mt-24">
  <div class="space-y-3">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-xs font-mono text-arctic-cobalt">
      <span>04 / TECH CAPABILITIES MATRIX</span>
    </div>
    <h2 class="font-heading text-3xl sm:text-4xl font-bold text-white">
      Full-Stack & AI <span class="text-arctic-cobalt">Capabilities</span>
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
      <div class="w-10 h-10 rounded-xl bg-arctic-cobalt/10 border border-arctic-cobalt/30 flex items-center justify-center text-arctic-cobalt font-mono font-bold">
        01
      </div>
      <h3 class="font-heading text-xl font-bold text-white">AI & LLM Frameworks</h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        LangGraph, LlamaIndex, PyTorch, HuggingFace, vLLM, TensorRT-LLM, RAG Evaluation, Prompt Routing & Self-Correction Loops.
      </p>
    </div>

    <div class="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
      <div class="w-10 h-10 rounded-xl bg-sky-frost/10 border border-sky-frost/30 flex items-center justify-center text-sky-frost font-mono font-bold">
        02
      </div>
      <h3 class="font-heading text-xl font-bold text-white">Backend & Inference Infrastructure</h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        Python (FastAPI, AsyncIO), Go, Redis semantic caching, Qdrant / pgvector, Docker, Kubernetes, WebSockets streaming.
      </p>
    </div>

    <div class="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
      <div class="w-10 h-10 rounded-xl bg-pure-platinum/10 border border-pure-platinum/30 flex items-center justify-center text-pure-platinum font-mono font-bold">
        03
      </div>
      <h3 class="font-heading text-xl font-bold text-white">Modern Frontend & UI/UX</h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        Astro, Tailwind CSS v4, Aurora Glassmorphism UI design, Vanilla JS Native DOM reactivity, SVG / Canvas data visualizers.
      </p>
    </div>
  </div>
</section>
```

- [x] **Step 3: Verify build compilation**

Run: `npm run build`
Expected: PASS

---

### Task 7: Contact Gateway, Footer & Full Page Assembly

**Files:**
- Create: `src/components/ContactFooter.astro`
- Create: `src/pages/index.astro`

**Interfaces:**
- Consumes: All section components
- Produces: Complete production `index.astro` landing page

- [x] **Step 1: Create src/components/ContactFooter.astro**

```astro
---
// Contact section & Footer
---
<footer id="contact" class="pt-16 pb-12 border-t border-white/10 text-center space-y-8">
  <div class="glass-panel p-8 sm:p-12 rounded-3xl max-w-3xl mx-auto space-y-6 border-white/10">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-xs font-mono text-arctic-cobalt">
      <span>INITIATE COLLABORATION</span>
    </div>
    <h3 class="font-heading text-3xl sm:text-4xl font-bold text-white">
      Ready to Architect <span class="text-arctic-cobalt">Intelligent Systems</span>?
    </h3>
    <p class="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
      Tersedia untuk perancangan arsitektur agentic AI, integrasi sistem enterprise, konsultasi teknis, atau rekayasa full-stack end-to-end.
    </p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="mailto:contact@arkein.ai" class="px-6 py-3 rounded-xl bg-arctic-cobalt text-void-950 font-heading font-bold text-sm shadow-lg shadow-arctic-cobalt/20 hover:bg-sky-300 hover:scale-105 transition-all">
        Send Email Inquiry
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-xl glass-panel text-white font-heading font-semibold text-sm hover:border-arctic-cobalt/40 transition-all">
        GitHub Profile
      </a>
    </div>
  </div>

  <div class="font-mono text-xs text-slate-500 pt-6">
    &copy; 2026 ARKEIN. Designed with Aurora Glassmorphism & Arctic Precision.
  </div>
</footer>
```

- [x] **Step 2: Create src/pages/index.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import Philosophy from '../components/Philosophy.astro';
import NeuralLab from '../components/NeuralLab.astro';
import CaseStudies from '../components/CaseStudies.astro';
import CapabilitiesBento from '../components/CapabilitiesBento.astro';
import ContactFooter from '../components/ContactFooter.astro';
---
<Layout title="ARKEIN — Full-Stack AI Engineer & System Architect">
  <main class="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-32">
    <Hero />
    <Philosophy />
    <NeuralLab />
    <CaseStudies />
    <CapabilitiesBento />
    <ContactFooter />
  </main>
</Layout>
```

- [x] **Step 3: Run full production build verification**

Run: `npm run build`
Expected: Output `[build] Complete!` with zero errors.

---

### Task 8: End-to-End Validation & Documentation Update

**Files:**
- Modify: `CLAUDE.md` (Update Status Sprint & Fitur yang Sudah Dibangun)

**Interfaces:**
- Consumes: Built assets in `dist/`
- Produces: Production-ready portfolio, verified against WCAG AA and responsive layout criteria

- [x] **Step 1: Run production build verification**

Run: `npm run build`
Expected: Exit code 0, static site successfully built in `dist/`.

- [x] **Step 2: Update CLAUDE.md status**

Update `CLAUDE.md` § Status Sprint to mark Sprint 00, 01, 02 completed.

- [ ] **Step 3: Ask User for Git Commit Permission**

Report completion and request permission from the user before running any git commands.
