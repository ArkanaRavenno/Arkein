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
