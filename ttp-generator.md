# AI-Assisted Adversary Simulation for Purple Teaming

## Overview

This project is a research pipeline for generating, testing, and evaluating adversary simulation code used in purple team exercises. Purple teaming is the practice where red teams (offensive) and blue teams (defensive) work together — the red team simulates real-world attack techniques so the blue team can validate that their detection and response capabilities actually work.

The system takes a MITRE ATT&CK technique identifier as input and produces a compiled binary, an implementation plan, and a detection assessment as output. It uses Retrieval-Augmented Generation (RAG) to ground an LLM in verified reference code, then validates the output through static binary analysis and runtime telemetry capture.

## Why This Exists

Security teams need to simulate hundreds of known attack techniques to test their defences. Writing each simulation by hand requires pulling together fragmented knowledge — framework documentation, reference implementations, API specifications, and past work. This doesn't scale.

LLMs can generate code, but without grounding they produce implementations that reference incorrect APIs or use wrong function signatures. The code looks plausible but doesn't compile. RAG solves this by retrieving relevant, verified reference code and injecting it into the prompt, so the LLM generates from real examples rather than training data alone.

## System Architecture

The pipeline follows a sequential agentic workflow with evaluator-optimizer loops at key stages.

### Retrieval Layer (Context Engineering)

The retrieval layer assembles the right context from multiple sources. A Qdrant vector database holds ~700 indexed documents. Retrieval uses four search strategies in a specific order:

1. **Exact lookup** — payload filter by technique ID. Must run first because its output (technique name, description, associated APIs) seeds every subsequent query.
2. **Semantic search** — vector similarity on the expanded technique description. Filtered to exclude ~400 entries without implementation code.
3. **Tactic search** — metadata filter by attack phase and platform.
4. **Web search** — external queries with automatic source code fetching from public repositories.

Steps 2-4 run concurrently. Results are deduplicated using Jaccard similarity, and the retrieval outcome is classified into scenarios that control how the prompt is framed.

Rank-aware depth control determines how much of each result enters the prompt: the top result gets full source code, ranks 1-3 get key sections (40 lines max), rank 4+ gets metadata only. The assembled prompt is ~8-10K tokens — this is about signal quality, not context window limits.

### Generation and Iterative Correction

The LLM generates code grounded in the retrieved context. If compilation fails, an evaluator-optimizer loop sends the exact compiler error back to the LLM for correction, up to 3 iterations. Convergence guards (empty output, identical output, repeated errors) prevent infinite loops.

Without RAG: 40-60% compile rate. With RAG: 80-90%. With the correction loop: ~95%.

### Static Binary Analysis (Ghidra MCP)

After compilation, Ghidra runs in headless mode via MCP (Model Context Protocol) to analyse the actual compiled binary — not the source code, not the LLM's claims.

The primary analysis extracts the Import Address Table (IAT) from the PE header. The IAT is what the operating system reads at runtime to resolve external function calls. This is ground truth for what the binary actually does. It validates that the generated code matches its intended specification — a verification layer the LLM cannot circumvent because it operates on the compiled artifact, not the source.

Results are cached by SHA256 hash (7-day TTL) with progressive timeouts (30s → 90s → 180s).

### Runtime Execution and Telemetry

The binary executes in an isolated VM with snapshot/restore before each run. Two telemetry streams are captured:

- **Process Monitor (ProcMon)** — operation-centric system activity logging (file, registry, network, process events)
- **Sysmon** — structured event logging with defined event IDs

Custom streaming parsers handle both formats. Captured telemetry is hunted against Sigma detection rules using Chainsaw.

### Detection Scoring (OPSEC Assessment)

The scoring system quantifies how visible the generated binary is to standard detection tooling (0.0 = undetectable, 1.0 = fully detected).

A naive approach — counting detection rule hits — doesn't produce useful feedback because some detections are inherent to the technique being simulated. The system uses LLM-generated detection profiles that classify each behavioural signature as either inherent (unavoidable for this technique) or avoidable (implementation-specific noise). Profiles are validated against detection rule tags to prevent incorrect classifications.

The score only penalises avoidable detections, making the feedback actionable. A detection-aware feedback loop can surface specific signatures for the operator to address in subsequent iterations.

## Design Patterns

The system uses several agentic design patterns:

- **Tool use** — Qdrant, Ghidra, compilation backends, and the execution environment are exposed as tools with defined interfaces. The orchestrator controls invocation.
- **Evaluator-optimizer loops** — compilation correction (compiler error → LLM fix → recompile) and detection feedback (score → specific detections → operator-triggered regeneration).
- **Context engineering** — multi-strategy retrieval with scenario classification, rank-aware depth, and content-based deduplication.
- **Graceful degradation** — every integration point can fail independently without breaking the pipeline. Ghidra timeout → skip static analysis. VM unreachable → defer execution. No Sigma matches → default score.
- **Human-in-the-loop** — detection-aware regeneration requires manual triggering. The system surfaces findings; the operator decides next steps.

## Scope

The pipeline covers techniques that involve local, single-host operations with well-documented APIs — primarily Discovery, Persistence, Defence Evasion, Execution, and Collection categories in the MITRE ATT&CK framework. Techniques requiring network infrastructure, a second machine, or a delivery mechanism are out of scope.

## Technical Stack

- **Retrieval**: Qdrant vector database, all-MiniLM-L6-v2 embeddings, DuckDuckGo API
- **Generation**: LiteLLM (Claude, Gemini, DeepSeek, GPT-4)
- **Analysis**: Ghidra headless via MCP, Chainsaw for Sigma rule hunting
- **Telemetry**: ProcMon (PML), Sysmon (EVTX), custom streaming parsers
- **Infrastructure**: Docker, GCP Compute Engine, WinRM, FastAPI
- **Frontend**: Streamlit
- **Language**: Python (async/await orchestration), C (generated output)