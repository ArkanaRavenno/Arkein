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
