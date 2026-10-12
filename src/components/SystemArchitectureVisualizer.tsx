"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, ArrowRight, CheckCircle2, ShieldCheck, Terminal, GitBranch, Zap, Volume2, Code2 } from "lucide-react";

interface PipelineNode {
  id: string;
  stage: string;
  label: string;
  type: string;
  metric: string;
  status: "idle" | "active" | "verified";
  description: string;
  payload: string;
}

interface ArchitecturePreset {
  id: string;
  name: string;
  badge: string;
  systemSummary: string;
  nodes: PipelineNode[];
}

const PRESETS: ArchitecturePreset[] = [
  {
    id: "agentic-rag",
    name: "Enterprise Multi-Agent RAG",
    badge: "Core Architecture",
    systemSummary: "High-throughput context grounding pipeline routing enterprise queries through vector indexes and deterministic function-calling tools.",
    nodes: [
      {
        id: "ingest",
        stage: "01 / INGESTION",
        label: "Omni-Channel Stream",
        type: "Webhook & Event Bus",
        metric: "18k req/min",
        status: "active",
        description: "Normalizes raw text, tickets, and e-commerce webhooks into structured schemas with HMAC signature validation.",
        payload: `{\n  "source": "api.shopify.com",\n  "event": "review.created",\n  "sentiment_hint": "critical",\n  "latency_budget_ms": 350\n}`
      },
      {
        id: "vector",
        stage: "02 / GROUNDING",
        label: "Qdrant Vector Cluster",
        type: "Hybrid Dense + Sparse",
        metric: "0.94 Cosine Match",
        status: "active",
        description: "Retrieves verified product documentation and customer policy clauses within 18ms using HNSW index partitions.",
        payload: `{\n  "index": "enterprise_kb_v3",\n  "top_k": 4,\n  "rerank_model": "bge-reranker-large",\n  "retrieved_chunks": 4\n}`
      },
      {
        id: "orchestrator",
        stage: "03 / REASONING",
        label: "Agentic Loop & Guardrails",
        type: "Llama-3 / Claude Core",
        metric: "Zero Hallucination",
        status: "active",
        description: "Executes deterministic multi-step tool calls with strict JSON schema constraints and automated hallucination filters.",
        payload: `{\n  "tool_calls": ["check_warranty", "query_inventory"],\n  "guardrail_status": "PASS",\n  "confidence_score": 0.988\n}`
      },
      {
        id: "execution",
        stage: "04 / EXECUTION",
        label: "Sandbox Tool Runner",
        type: "Isolated Node Worker",
        metric: "99.98% SLA",
        status: "verified",
        description: "Dispatches transactional database commits, n8n webhook triggers, and verified customer notifications.",
        payload: `{\n  "action": "dispatch_resolution",\n  "channel": "zendesk_api",\n  "execution_time_ms": 42,\n  "status": "COMMITTED"\n}`
      }
    ]
  },
  {
    id: "vision-compiler",
    name: "Multimodal Design Compiler",
    badge: "Orbis Engine",
    systemSummary: "Proprietary design-to-code compiler transforming UI layouts into type-safe Next.js + Tailwind components.",
    nodes: [
      {
        id: "screenshot",
        stage: "01 / CAPTURE",
        label: "Spatial Layout Parser",
        type: "Vision Tokenizer",
        metric: "1440x900 Canvas",
        status: "active",
        description: "Deconstructs image coordinates into bounding boxes, flex groupings, and color token matrices.",
        payload: `{\n  "element_nodes": 64,\n  "color_palette": ["#f6f5f2", "#121314", "#1b43f4"],\n  "detected_grid": "12-col"\n}`
      },
      {
        id: "ast-gen",
        stage: "02 / SYNTHESIS",
        label: "Deterministic AST Engine",
        type: "TypeScript Transpiler",
        metric: "Strict Type Safety",
        status: "active",
        description: "Generates semantic React components mapping visual hierarchies directly to clean Tailwind classes.",
        payload: `{\n  "target_framework": "Next.js 16 (Turbopack)",\n  "component_depth": 4,\n  "unused_css_tokens": 0\n}`
      },
      {
        id: "verify",
        stage: "03 / VALIDATION",
        label: "Sandboxed Test Runner",
        type: "SSR & Lint Engine",
        metric: "0 Lint Warnings",
        status: "verified",
        description: "Executes instantaneous headless browser hydration checks and WCAG accessibility contrast audits.",
        payload: `{\n  "lighthouse_score": 99,\n  "wcag_aa_compliant": true,\n  "bundle_weight_kb": 14.2\n}`
      }
    ]
  },
  {
    id: "voice-ai",
    name: "Sub-400ms Voice Telephony",
    badge: "Voice Systems",
    systemSummary: "Ultra-low latency conversational AI pipeline for automated inbound customer support and outbound dispatch.",
    nodes: [
      {
        id: "audio-in",
        stage: "01 / TELEPHONY",
        label: "Twilio / SIP Gateway",
        type: "Raw PCM Stream",
        metric: "48ms Jitter Buffer",
        status: "active",
        description: "Ingests bidirectional 16kHz audio streams with active noise suppression and voice activity detection.",
        payload: `{\n  "codec": "audio/PCMU",\n  "bitrate": "64kbps",\n  "vad_confidence": 0.99\n}`
      },
      {
        id: "stt-llm",
        stage: "02 / TRANSCRIPTION",
        label: "Streaming Whisper + LLM",
        type: "Speculative Decoding",
        metric: "165ms TTFT",
        status: "active",
        description: "Streams partial word tokens into lightweight reasoner, beginning response synthesis before user completes utterance.",
        payload: `{\n  "stream_chunk_ms": 20,\n  "interruption_tolerated": true,\n  "intent": "reschedule_appointment"\n}`
      },
      {
        id: "tts-out",
        stage: "03 / SYNTHESIS",
        label: "Neural Voice Synthesizer",
        type: "Cartesia / ElevenLabs",
        metric: "Total Roundtrip: 380ms",
        status: "verified",
        description: "Delivers natural-sounding prosody and inflection directly into the telephone trunk line with zero audible lag.",
        payload: `{\n  "output_sample_rate": 24000,\n  "naturalness_rating": "human_equivalent",\n  "drop_rate": 0.00\n}`
      }
    ]
  }
];

export default function SystemArchitectureVisualizer() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const preset = PRESETS[activePresetIndex];
  const activeNode = preset.nodes[selectedNodeIndex] || preset.nodes[0];

  const handleSelectPreset = (index: number) => {
    setActivePresetIndex(index);
    setSelectedNodeIndex(0);
  };

  return (
    <div className="w-full bg-[#121314] text-brand-cream border-2 border-brand-dark p-6 md:p-8 relative overflow-hidden shadow-[-8px_8px_0px_0px_#1b43f4]">
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 font-mono-roboto text-[10px] font-bold tracking-widest uppercase bg-brand-cobalt/20 text-brand-cobalt border border-brand-cobalt/40 px-2.5 py-1">
              <Terminal className="w-3 h-3" />
              SYSTEM TELEMETRY
            </span>
            <span className="font-mono-roboto text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LIVE PIPELINE PROJECTION
            </span>
          </div>
          <h3 className="font-anton text-2xl md:text-3xl tracking-wide uppercase text-brand-cream">
            {preset.name}
          </h3>
          <p className="font-sans text-xs text-brand-cream/70 max-w-2xl mt-1 leading-relaxed">
            {preset.systemSummary}
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(idx)}
              className={`px-3 py-2 text-[10px] font-mono-roboto font-bold tracking-wider uppercase transition-all duration-150 border ${
                activePresetIndex === idx
                  ? "bg-brand-cobalt text-white border-brand-cobalt shadow-[-2px_2px_0px_0px_#fff]"
                  : "bg-white/5 text-brand-cream/70 border-white/15 hover:bg-white/10 hover:text-white"
              }`}
            >
              {p.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Node Flow Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        
        {/* Nodes Track (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono-roboto text-brand-cream/50 uppercase tracking-widest px-1">
            <span>PIPELINE SEQUENCE ({preset.nodes.length} STAGES)</span>
            <span>CLICK NODE TO INSPECT PAYLOAD</span>
          </div>

          <div className="space-y-2.5">
            {preset.nodes.map((node, idx) => {
              const isSelected = selectedNodeIndex === idx;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeIndex(idx)}
                  className={`w-full p-4 border transition-all duration-200 cursor-pointer text-left relative ${
                    isSelected
                      ? "bg-white/10 border-brand-cobalt shadow-[-4px_4px_0px_0px_#1b43f4]"
                      : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedNodeIndex(idx);
                    }
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 border flex items-center justify-center font-mono-roboto text-[10px] font-bold ${
                        isSelected ? "bg-brand-cobalt text-white border-brand-cobalt" : "bg-white/10 text-brand-cream/70 border-white/20"
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="font-mono-roboto text-[9px] font-bold text-brand-cream/50 tracking-widest block uppercase">
                          {node.stage}
                        </span>
                        <h4 className="font-anton text-base md:text-lg tracking-wide uppercase text-white mt-0.5">
                          {node.label}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block font-mono-roboto text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 uppercase tracking-wider">
                        {node.metric}
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "text-brand-cobalt translate-x-1" : "text-white/30"}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Node Inspector & Schema Detail (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-white/15 bg-black/60 p-5 font-mono-roboto relative">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cobalt" />
                <span className="text-[11px] font-bold tracking-widest text-brand-cream uppercase">
                  NODE INSPECTION // {activeNode.id.toUpperCase()}
                </span>
              </div>
              <span className="text-[9px] text-white/40 tracking-wider">
                {activeNode.type}
              </span>
            </div>

            <div>
              <p className="font-sans text-xs text-brand-cream/80 leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            <div>
              <span className="text-[9px] text-brand-cream/40 uppercase tracking-widest block mb-1.5">
                EXECUTION SCHEMA &amp; TELEMETRY
              </span>
              <pre className="p-3 bg-[#0a0a0c] border border-white/10 text-[10px] text-emerald-400 overflow-x-auto leading-relaxed select-text font-mono-roboto">
                <code>{activeNode.payload}</code>
              </pre>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              DETERMINISTIC VERIFICATION
            </span>
            <span className="text-white/70 font-bold uppercase">
              {activeNode.metric}
            </span>
          </div>
        </div>

      </div>

      {/* Footer System Specs */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono-roboto text-[10px] text-brand-cream/60">
        <div className="flex items-center gap-4">
          <span>FRAMEWORK: TYPESAFE MULTI-AGENT RUNTIME</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">DATA PRIVACY: ZERO RETENTION COMPLIANT</span>
        </div>
        <div className="text-brand-cream/40">
          PROD-ID: REWORKS-ENGINE-2026.4
        </div>
      </div>
    </div>
  );
}
