import heroImg from "@/assets/justin-soon.jpg";
import ducketImg from "@/assets/ducket.png";
import pathpilotImg from "@/assets/pathpilot.png";
import boopImg from "@/assets/boop.png";
import cafeconnectImg from "@/assets/cafeconnect.png";
import readlyImg from "@/assets/readly.png";
import fraudfish1Img from "@/assets/fraudfish-1.jpeg";
import fraudfish2Img from "@/assets/fraudfish-2.jpeg";
import ctfAgentImg from "@/assets/ctf-agent.svg";
import ttpGeneratorImg from "@/assets/ttp-generator.svg";
import oscpBadge from "@/assets/oscp.png";
import osepBadge from "@/assets/osep.png";

export const siteConfig = {
  name: "Justin Soon",
  logo: "JS",
  title: "Founder · Builder · Hacker",
  email: "jienkhye01@gmail.com",
  github: "https://github.com/Jsjk112344",
  linkedin: "https://www.linkedin.com/in/justin-soon-558372212/",
  resumePath: "/Justin_Resume.pdf",
};

export const heroData = {
  subtitle: "FOUNDER · BUILDER · HACKER",
  firstName: "Justin",
  lastName: "Soon",
  description:
    "Building Ducket, a vertical SaaS for live event organizers. Full-stack developer with expertise in offensive cybersecurity (OSCP, OSEP) and machine learning.",
  image: heroImg,
};

export const projects = [
  {
    slug: "ducket",
    title: "Ducket",
    role: "Co-founder & CTO",
    description:
      "A vertical SaaS for live event organizers. One unified operating platform for ticketing, check-in, perks, communities, analytics, and payouts, replacing the patchwork of Eventbrite, Mailchimp, Notion, and spreadsheets.",
    image: ducketImg,
    tags: ["React", "TypeScript", "Supabase", "Stripe", "Solidity"],
    featured: true,
    detail: {
      subtitle: "Vertical SaaS for Live Event Organizers - Co-Founded Startup",
      overview:
        "Ducket is the unified operating platform for live event organizers. Ticketing, check-in, perks, communities, analytics, and payouts run from a single back office, replacing the stack of Eventbrite, Mailchimp, Notion, and spreadsheets that organizers stitch together today. As of May 2026 we have ~93 users across 16 organizers, with 5 events run and 65 credentials minted. Pre-PMF, optimizing for learning velocity.",
      motivation:
        "Mid-size organizers (venues, festivals, course providers, fitness studios) run their business across half a dozen disconnected tools. The data lives in different vendors, fan history is invisible across events, and sponsors have no verifiable way to audit attendance claims. Ducket collapses the stack into one product. Underneath the SaaS, an on-chain attendance graph compounds quietly: every scan and perk redemption writes a permanent, verifiable record. The chain is load-bearing for two things only — lock-in protection (organizer and attendee data survives if Ducket disappears) and verifiability (sponsors can trust attendance claims without trusting us). It is invisible to fans. We do not pitch NFT tickets.",
      technologies: [
        { name: "React", icon: "react", description: "Four apps (buyer, organizer, admin, landing) from one Vite codebase" },
        { name: "TypeScript", icon: "typescript", description: "Full type safety across the stack" },
        { name: "Supabase", icon: "supabase", description: "Postgres with RLS plus ~84 Deno edge functions" },
        { name: "Stripe", icon: "stripe", description: "Stripe Connect for organizer payouts and subscription billing" },
        { name: "Solidity", icon: "solidity", description: "ERC-1155 contracts on Polygon for credentials and tickets" },
        { name: "Polygon", icon: "polygon", description: "Layer 2 for low-cost, gas-sponsored credential minting" },
      ],
      features: [
        { title: "Ticketing & Checkout", description: "Tiered tickets, promo codes, refunds, and Stripe-powered checkout with organizer payouts via Stripe Connect." },
        { title: "Check-in & Scanning", description: "Dynamic QR validation with rotating tokens, plus a scanner app for event staff to admit attendees on the door." },
        { title: "Perks & Communities", description: "Reward attendance with redeemable perks; build organizer-owned communities tied to verified event participation." },
        { title: "Analytics & Payouts", description: "Per-event dashboards covering sales, attendance, and engagement, with payouts streamed directly to organizer Stripe accounts." },
        { title: "Custodial Wallets", description: "Every fan gets an auto-provisioned wallet (AES-256-GCM encrypted). Backend sponsors all gas. Fans never sign anything." },
        { title: "On-chain Attendance Graph", description: "Each scan and redemption mints a soulbound credential. Organizer data survives platform risk; sponsors get verifiable proof." },
      ],
      challenges: [
        { title: "Keeping the Chain Invisible", description: "Web3 UX scares off mainstream organizers and fans.", solution: "Custodial wallets, sponsored gas, async mint queue with retries. Fans see a normal ticketing site; the chain runs underneath." },
        { title: "Mint Reliability at Scale", description: "Chain failures must never block ticket purchases.", solution: "Decoupled mint queue with FOR UPDATE SKIP LOCKED dispatch and a cron-driven retry processor, so checkout always completes." },
        { title: "Two-Environment Safety", description: "Real money on mainnet alongside a test environment that is safe to break.", solution: "Strict separation between ducket-test (Polygon Amoy) and ducket-web (Polygon mainnet) databases, with environment-aware edge function deploys." },
        { title: "Multi-App Codebase", description: "Buyer, organizer, admin, and landing surfaces sharing logic without coupling.", solution: "Single Vite codebase with VITE_APP_MODE switching at runtime, shared components, and per-domain entry points." },
      ],
      links: { website: "https://ducket.io" },
    },
  },
  {
    slug: "ttp-generator",
    title: "TTP Generator",
    description:
      "An AI-assisted pipeline for purple-team adversary simulation, built during my offensive-security work at GovTech Singapore. Hand it a MITRE ATT&CK technique ID and it retrieves verified reference code via RAG, generates a compiled implementation, verifies the actual binary with headless Ghidra, then scores how detectable it is against Sigma rules — one agentic loop from technique to assessed artifact.",
    image: ttpGeneratorImg,
    tags: ["Python", "RAG", "Qdrant", "MITRE ATT&CK", "Ghidra"],
    detail: {
      subtitle:
        "AI-Assisted Adversary Simulation for Purple Teaming — GovTech Singapore",
      overview:
        "A research pipeline for generating, testing, and evaluating the adversary-simulation code used in purple-team exercises — where offensive (red) and defensive (blue) teams work together so the blue team can validate that detection and response actually fire. The system takes a single MITRE ATT&CK technique ID and produces three outputs: a compiled binary, an implementation plan, and a detection assessment. It grounds an LLM in verified reference code with Retrieval-Augmented Generation, then validates the result through static binary analysis and runtime telemetry — never trusting the model's own account of what it wrote. Built during my offensive-security engineering stint at GovTech Singapore.",
      motivation:
        "Security teams need to simulate hundreds of known attack techniques to test their defences, and writing each one by hand means stitching together framework docs, reference implementations, and API specs — work that doesn't scale. LLMs can write the code, but ungrounded they hallucinate wrong APIs and signatures: plausible output that won't compile. RAG fixes this by retrieving real, verified reference code so the model generates from examples rather than training data alone. The harder problem is trust — so the pipeline verifies the compiled artifact rather than the model's claims, and quantifies detectability in a way an operator can actually act on.",
      architecture: {
        intro:
          "The pipeline runs as a sequential agentic workflow with evaluator-optimizer loops at the stages that need them. Each stage produces an artifact the next one consumes, and every external dependency — vector DB, compiler, disassembler, execution VM — is exposed to the orchestrator as a discrete tool it invokes and can fall back from.",
        stages: [
          {
            title: "Retrieval Layer — Context Engineering",
            description:
              "A Qdrant store of ~700 indexed documents is queried by four strategies in a deliberate order. An exact technique-ID lookup runs first, because its output (name, description, associated APIs) seeds every later query; semantic search, tactic/platform filtering, and live web search with source fetching then run concurrently. Results are deduplicated by Jaccard similarity and classified into scenarios that decide how the prompt is framed.",
          },
          {
            title: "Generation & Iterative Correction",
            description:
              "The LLM generates an implementation grounded in the retrieved code. If it fails to compile, an evaluator-optimizer loop feeds the exact compiler error back for correction — up to three passes, with convergence guards on empty, identical, or repeating output. Compile rate moves from 40–60% ungrounded, to 80–90% with RAG, to ~95% with the correction loop.",
          },
          {
            title: "Static Binary Analysis — Ghidra over MCP",
            description:
              "Ghidra runs headless over MCP against the compiled binary, not the source. The primary check extracts the Import Address Table from the PE header — the calls the OS resolves at runtime, and therefore ground truth for what the binary actually does. Results are cached by SHA256 (7-day TTL) with progressive timeouts of 30 → 90 → 180 seconds.",
          },
          {
            title: "Runtime Execution & Telemetry",
            description:
              "The binary executes in an isolated VM that is snapshot-restored before every run. Two telemetry streams are captured through custom streaming parsers — Process Monitor (operation-centric file/registry/network/process activity) and Sysmon (structured event IDs) — then hunted against Sigma detection rules with Chainsaw.",
          },
          {
            title: "Detection Scoring — OPSEC Assessment",
            description:
              "Visibility to standard detection tooling is scored from 0.0 (undetectable) to 1.0 (fully detected). Rather than counting rule hits, LLM-generated detection profiles label each behavioural signature as inherent to the technique or avoidable implementation noise — validated against rule tags — and only avoidable detections are penalised, so the feedback stays actionable.",
          },
        ],
      },
      technologies: [
        { name: "Python", icon: "python", description: "Async/await orchestration across retrieval, generation, and analysis" },
        { name: "Qdrant", icon: "qdrant", description: "Vector database of ~700 indexed, verified reference implementations" },
        { name: "Claude / LiteLLM", icon: "anthropic", description: "Code generation via LiteLLM, with Gemini, DeepSeek, and GPT-4 fallbacks" },
        { name: "FastAPI", icon: "fastapi", description: "Service layer wrapping the generate-and-assess pipeline" },
        { name: "Docker", icon: "docker", description: "Containerised build backends and analysis tooling" },
        { name: "Google Cloud", icon: "googlecloud", description: "GCP Compute Engine VMs with snapshot/restore for sandboxed execution" },
      ],
      features: [
        { title: "Multi-Strategy RAG Retrieval", description: "Four search strategies — exact technique lookup, semantic similarity, tactic/platform filtering, and live web search with source fetching — deduplicated by Jaccard similarity and assembled with rank-aware depth, so the strongest result contributes full source and the rest just enough." },
        { title: "Compile-Correction Loop", description: "When generated code fails to build, the exact compiler error is fed back to the LLM for up to three correction passes, with convergence guards against infinite loops. Compile rate climbs from 40–60% ungrounded to ~95% with RAG plus correction." },
        { title: "Ground-Truth Binary Analysis", description: "Headless Ghidra runs over MCP to extract the Import Address Table from the compiled PE — the real set of OS calls the binary resolves at runtime. It verifies behaviour against the artifact itself, a check the model cannot talk its way around." },
        { title: "Sandboxed Telemetry Capture", description: "Binaries run in an isolated VM with snapshot/restore on every execution, capturing both Process Monitor and Sysmon streams through custom parsers for the two formats." },
        { title: "OPSEC Detection Scoring", description: "Captured telemetry is hunted against Sigma rules with Chainsaw, then scored 0–1 for detectability — but only avoidable signatures count, separated from detections inherent to the technique, so the feedback is actionable rather than noise." },
        { title: "Graceful Degradation", description: "Every integration can fail independently without breaking the run: a Ghidra timeout skips static analysis, an unreachable VM defers execution, no Sigma matches falls back to a default score." },
      ],
      decisionsIntro:
        "The interesting decisions here are less about which model to call and more about where to place trust — what to ground, what to verify independently, and what to leave to a human.",
      decisions: [
        {
          group: "AI Engineering",
          items: [
            {
              title: "RAG instead of fine-tuning or raw prompting",
              description:
                "Offensive technique code changes faster than any training cycle, and ungrounded models hallucinate plausible-but-wrong APIs. Retrieving verified reference implementations and generating from them is cheaper to keep current — re-index, don't retrain — and is what moves the compile rate from 40–60% to 80–90% before correction even runs.",
            },
            {
              title: "Ordered retrieval, exact-lookup first",
              description:
                "The four retrieval strategies are not symmetric. The exact technique-ID lookup has to complete first because its metadata (canonical name, description, associated APIs) is what expands every subsequent query; the other three only become high-signal once that seed exists.",
            },
            {
              title: "Rank-aware context depth over filling the window",
              description:
                "Only the top result contributes full source; ranks 1–3 contribute key sections capped at 40 lines, and rank 4+ contributes metadata only. The assembled prompt sits around 8–10K tokens by design — the constraint is signal quality, not the context limit, because padding with weak matches measurably degrades generation.",
            },
            {
              title: "The compiler is the evaluator",
              description:
                "The correction loop never asks the model to grade itself; it feeds back the real compiler error as a deterministic, ground-truth signal. Convergence guards then cap the loop so it can't burn tokens re-emitting the same broken output.",
            },
            {
              title: "Provider-agnostic generation via LiteLLM",
              description:
                "Generation routes through LiteLLM across Claude, Gemini, DeepSeek, and GPT-4 rather than binding to a single vendor — so a model can be swapped for capability, cost, or availability without touching the pipeline.",
            },
          ],
        },
        {
          group: "Security & OPSEC",
          items: [
            {
              title: "Trust the binary, not the model",
              description:
                "An LLM's account of what its own code does is not evidence, least of all for security-relevant behaviour. Verification runs on the compiled artifact through Ghidra's IAT extraction — a check the model cannot influence, because it operates on the PE rather than the source it generated.",
            },
            {
              title: "Snapshot-restore VM isolation on every run",
              description:
                "Generated adversary-simulation code only ever executes inside a disposable VM that is reset to a clean snapshot before each run. That keeps the host safe and guarantees telemetry isn't contaminated by residue from a previous execution.",
            },
            {
              title: "Score avoidable detections, not inherent ones",
              description:
                "Some detections are unavoidable for the technique being simulated, so a raw rule-hit count is just noise. Classifying each signature as inherent or avoidable — and validating that classification against detection-rule tags so the LLM can't mislabel it — turns the OPSEC score into feedback an operator can act on.",
            },
            {
              title: "Human-in-the-loop for evasion iteration",
              description:
                "The system surfaces specific detectable signatures, but detection-aware regeneration is triggered manually. An autonomous loop optimising for evasion is precisely what you don't want running unattended in a purple-team tool; a person stays accountable for each iteration.",
            },
            {
              title: "Deliberately bounded scope",
              description:
                "The pipeline only covers local, single-host techniques with well-documented APIs — Discovery, Persistence, Defence Evasion, Execution, Collection. Anything needing network infrastructure, a second machine, or a delivery mechanism is out of scope by design, keeping this a detection-validation tool rather than an end-to-end attack framework.",
            },
          ],
        },
      ],
      challenges: [
        { title: "Dependent, Then Parallel Retrieval", description: "The exact-ID lookup must finish before the other searches are meaningful, but running all four serially is slow.", solution: "A sequential seed lookup feeds an asyncio fan-out of semantic, tactic, and web search; results are merged with Jaccard-similarity dedup and classified into scenarios that frame the prompt." },
        { title: "Bounding the Correction Loop", description: "Naively retrying on a compiler error can loop forever or keep re-emitting the same broken code, burning tokens for nothing.", solution: "The loop caps at three iterations with convergence guards that halt on empty output, output identical to the previous attempt, or a repeating error signature." },
        { title: "Slow, Flaky Disassembly", description: "Headless Ghidra is heavy and occasionally hangs on a binary, which would otherwise stall the whole pipeline.", solution: "Analysis is cached by SHA256 (7-day TTL) with progressive timeouts of 30 → 90 → 180s; a timeout degrades to skipping static analysis rather than failing the run." },
        { title: "A Brittle Multi-Tool Pipeline", description: "The flow spans a vector DB, several model providers, a disassembler, and a remote execution VM — any one can fail mid-run.", solution: "Graceful degradation at every integration point: a Ghidra timeout skips static analysis, an unreachable VM defers execution, no Sigma matches falls back to a default score — a single failure downgrades the result instead of killing it." },
      ],
      links: {},
    },
  },
  {
    slug: "fraudfish",
    title: "FraudFish",
    description:
      "An autonomous fraud detective for ticket scams. Paste a Carousell, Viagogo, or Telegram listing and a fleet of web agents investigates the seller, verifies the event against official ticket sites, scans market rates for outliers, and hunts cross-platform duplicates — streaming an evidence-backed verdict live. Built solo for a 6-hour TinyFish web-agent hackathon.",
    image: fraudfish1Img,
    tags: ["Python", "FastAPI", "TinyFish", "OpenAI", "React"],
    detail: {
      subtitle: "Autonomous Web-Agent Fraud Investigator — TinyFish SG Hackathon",
      overview:
        "FraudFish investigates suspicious ticket listings on Singapore's secondary marketplaces the way a human analyst would, but autonomously. Paste a listing URL and a fleet of web agents scrape the seller profile, verify the event against official ticket sources, scan market rates for statistical outliers, and search rival platforms for copy-paste scam operations — then a two-tier classifier issues an evidence-backed verdict with a confidence score and signal meters. Every step streams to the UI over Server-Sent Events, so the investigation unfolds live, including a real-time preview of the agent's own browser as it navigates. Built solo for the TinyFish SG Hackathon, a 6-hour build centred on web agents.",
      motivation:
        "Every week in Singapore, fans lose money to ticket scams on peer marketplaces like Carousell. Checking a single listing manually takes 30+ minutes; by then the money is often gone, and marketplaces and regulators have no tooling to monitor fraud at scale. FraudFish turns that manual investigation into an autonomous agent run. The bigger goal was to see how deep a single web-agent integration could go in six hours — orchestrating many coordinated scrapes into one reasoned verdict, not just wrapping an API in a thin UI.",
      technologies: [
        { name: "Python", icon: "python", description: "Async backend orchestrating 5-8 parallel agent calls" },
        { name: "FastAPI", icon: "fastapi", description: "SSE streaming endpoints for investigate, scan, and dashboard modes" },
        { name: "TinyFish", icon: "googlechrome", description: "Web-agent SDK with stealth browser, SG proxy, and live streaming URL" },
        { name: "Pydantic", icon: "pydantic", description: "Typed event + verdict contract shared across mock and live pipelines" },
        { name: "React", icon: "react", description: "React 19 + Vite live investigation timeline" },
        { name: "Tailwind CSS", icon: "tailwindcss", description: "Glassmorphic UI with Framer Motion step reveals" },
      ],
      features: [
        { title: "Live Investigation Stream", description: "Six investigation steps stream over SSE as they run — cards animate pending to active to complete, and the agent's own browser is previewed live via TinyFish's streaming URL." },
        { title: "Two-Tier Classification", description: "A deterministic rules engine catches obvious cases (under 40% of face value, 300%+ markups) at zero LLM cost, falling through to GPT-4o for ambiguous listings, with a validation layer that catches LLM contradictions." },
        { title: "Statistical Outlier Detection", description: "IQR / Tukey-fence analysis over scraped market prices flags a listing as suspiciously high or low with a percentile rank — data-driven, not vibes." },
        { title: "Cross-Platform Duplicate Hunting", description: "Searches rival marketplaces for the same listing text and seller to expose copy-paste scam operations running across platforms." },
        { title: "Threat Dashboard", description: "Auto-discovers high-profile SG events from SISTIC and Ticketmaster, ranks them by fraud risk with an LLM, then batch-scans the top threats for fraudulent listings." },
        { title: "Graceful Degradation", description: "Every agent returns a live/cached flag and silently falls back to cached data if a scrape fails, so the pipeline never breaks — it runs end to end even with no API keys." },
      ],
      challenges: [
        { title: "Avoiding False Timeouts", description: "Cloudflare-protected marketplaces are slow; naive blocking calls give up while the agent is still working server-side.", solution: "Fire-and-poll architecture — start an async TinyFish run, then poll for status and results, so the backend never abandons a run that is still making progress." },
        { title: "Orchestrating Parallel Agents", description: "One investigation needs 5-8 distinct scrapes: listing, seller, event, market rates, and cross-platform.", solution: "asyncio.gather fan-out after a sequential extraction step, plus a batch API with concurrent polling that respects TinyFish's 2-concurrent / 20-pending account limits." },
        { title: "Trustworthy Verdicts", description: "An LLM on its own will occasionally call an obviously fake listing legitimate.", solution: "A rules engine handles clear-cut cases deterministically, and a post-LLM validation layer recalibrates confidence and catches contradictions before the verdict ships." },
        { title: "Earning User Trust", description: "People distrust a black-box 'the AI says scam' verdict.", solution: "Streamed the agent's live browser preview and every piece of evidence step by step over SSE, so each conclusion is backed by visible, inspectable proof." },
      ],
      gallery: [fraudfish1Img, fraudfish2Img],
      links: { github: "https://github.com/Jsjk112344/fraudfish.git" },
    },
  },
  {
    slug: "ctf-agent",
    title: "CTF Agent",
    description:
      "A portable system of AI agents for solving jeopardy-style Capture-the-Flag challenges, built as Claude Code skills. A router triages each challenge, then dispatches to one of nine specialist playbooks — web, pwn, reverse, crypto, forensics, OSINT, OT/hardware, and more. Built for BrainHack CDDC 2026, designed to generalise to any CTF.",
    image: ctfAgentImg,
    tags: ["AI Agents", "Claude Code", "Python", "Docker"],
    detail: {
      subtitle: "Portable AI Agents for Capture-the-Flag — where my AI and security interests meet",
      overview:
        "CTF Agent is an agentic system for solving individual jeopardy-style CTF challenges — the kind where you're handed a prompt, maybe an attachment or a remote endpoint, and have to recover a flag in a known format. It is built as a Claude Code skill bundle: a thin /ctf command orchestrates the run, a router skill triages the challenge, and one of nine specialist reference playbooks (web, pwn, reverse, crypto, forensics, OSINT, OT/hardware, misc, and a shared tooling guide) is loaded on demand to drive the actual solve. Each playbook is a condensed expert methodology — the exact recon commands, category-specific techniques, the right tool for each artifact, and the gotchas that waste time — distilled into something an agent can execute end to end. I built it during BrainHack CDDC 2026, but designed it from the start to be event-agnostic.",
      motivation:
        "This project is where my two interests deliberately meet: AI and offensive security. BrainHack's Cyber Defenders Discovery Camp (CDDC), run by CSIT Singapore, is a defence-themed jeopardy CTF, and its 2026 edition spanned memory and disk forensics, network captures, AES cryptanalysis, web exploitation, OSINT — and, fittingly, a challenge that required prompt-injecting an LLM assistant into leaking credentials. Solving security challenges with an AI agent, including one challenge that was itself about attacking an AI, was too neat a loop to pass up. The deeper motivation was reusability: rather than a one-off hackathon script, I wanted a portable agent I could point at any CTF and trust to run the boring-but-decisive early steps thoroughly.",
      technologies: [
        { name: "Claude Code", icon: "anthropic", description: "Agent skills + slash-command orchestration with progressive context loading" },
        { name: "Python", icon: "python", description: "pwntools, Volatility 3, pymodbus, RsaCtfTool, and scripting glue" },
        { name: "Bash", icon: "gnubash", description: "Recon pipeline: file, strings, binwalk, exiftool, xxd on every artifact" },
        { name: "Docker", icon: "docker", description: "Planned: containerised, tool-loaded solving environments per agent" },
        { name: "Wireshark", icon: "wireshark", description: "PCAP and protocol forensics across network and OT challenges" },
        { name: "Linux", icon: "linux", description: "Sleuth Kit, foremost, zsteg, john/hashcat, and the wider CTF toolchain" },
      ],
      features: [
        { title: "Triage-First Routing", description: "Before touching a tool, the agent extracts the flag format, hypothesises a category, lists every artifact, and commits to three concrete first steps — the discipline that wins most CTFs." },
        { title: "Nine Category Playbooks", description: "Specialist references for web, pwn, reverse, crypto, forensics, OSINT, OT/hardware, misc, and tooling — each a condensed methodology with exact commands, technique decision trees, and known gotchas." },
        { title: "Progressive Context Loading", description: "The router loads only the single playbook matching the challenge, keeping the agent's context lean instead of dumping every reference at once — capability without bloat." },
        { title: "Recon-First Methodology", description: "Runs the cheap generic checks (file, strings, exiftool, binwalk) on every artifact before any category-specific work, because a large share of challenges fall to recon alone." },
        { title: "OT & Hardware Depth", description: "Covers CDDC's defence-themed specialties most generic solvers ignore: Modbus/SCADA, CAN-bus and UDS automotive, AUTOSAR DLT logs, SDR signals, and USB-HID capture decoding." },
        { title: "Scope-Aware and Honest", description: "Operates only on explicitly authorised CTF infrastructure, refuses out-of-scope targets, never fabricates artifacts, and reports flags verbatim with a short reproducible writeup rather than guessing." },
      ],
      challenges: [
        { title: "Breadth vs. Context Budget", description: "Nine detailed playbooks plus a tooling guide will not fit usefully into one context window.", solution: "A thin router classifies the challenge first and lazily loads exactly one reference, so the agent has broad capability across categories without drowning in irrelevant detail." },
        { title: "Generalising Beyond One Event", description: "It was built for CDDC 2026, but a single-event solver is not reusable.", solution: "I encoded event-agnostic methodology — a flag-format table, category routing rules, and universal recon — so the same agents work on picoCTF, HTB, and others by swapping the flag string." },
        { title: "Avoiding a 'Magic Solver'", description: "An over-eager agent invents attachments, brute-forces hints the prompt already gave, or submits the wrong flag wrapper.", solution: "Explicit anti-patterns are baked into the skill: re-read flavor text for load-bearing hints, never fabricate artifacts, submit braces verbatim, and switch playbooks the moment the hypothesis looks wrong." },
        { title: "Reproducible Tooling (In Progress)", description: "The playbooks reference dozens of tools (Volatility 3, zsteg, bkcrack, pymodbus, RsaCtfTool) that are painful to install consistently across machines.", solution: "The roadmap is to containerise each agent into a Docker image with its full toolchain preinstalled and challenge artifacts mounted read-only, so a category agent runs identically — and sandboxed — anywhere." },
      ],
      links: {},
    },
  },
  {
    slug: "pathpilot",
    title: "PathPilot",
    description:
      "A mobile navigation app for food delivery volunteers with route planning using Google Maps API and Firebase backend.",
    image: pathpilotImg,
    tags: ["React Native", "Firebase", "Google Maps"],
    detail: {
      subtitle: "Mobile Navigation App for Food Delivery Volunteers",
      overview:
        "PathPilot is a comprehensive mobile navigation app designed to assist food delivery volunteers with intelligent route planning using Google Maps API.",
      motivation:
        "During volunteering at NUS, I observed volunteers delivering meals to the elderly struggled with navigation and route efficiency. Modern map apps don't support multi-location routing via public transport, forcing volunteers to manually compare addresses. PathPilot solves this.",
      technologies: [
        { name: "React Native", icon: "react", description: "Cross-platform mobile development" },
        { name: "Firebase", icon: "firebase", description: "Backend-as-a-Service for auth and real-time data" },
        { name: "Google Maps API", icon: "googlemaps", description: "Route optimization and navigation" },
        { name: "SQLite", icon: "sqlite", description: "Local database for offline trip storage" },
        { name: "JavaScript", icon: "javascript", description: "Core language with async/await patterns" },
        { name: "Git", icon: "git", description: "Version control with branching strategy" },
      ],
      features: [
        { title: "Route Optimization", description: "TSP algorithm with dynamic programming for efficient multi-stop delivery routes." },
        { title: "Trip Planning", description: "Create, save, and manage delivery routes with persistent SQLite storage." },
        { title: "Live Navigation", description: "Turn-by-turn navigation with voice notifications for hands-free guidance." },
        { title: "Emergency SOS", description: "SOS button with real-time chat support and emergency contact notification." },
        { title: "Task Management", description: "Excel import for beneficiary info with automatic parsing and validation." },
        { title: "Info Center", description: "Database with filtering for beneficiary organizations integrated with FoodConnect.gov." },
      ],
      challenges: [
        { title: "Route Algorithm Complexity", description: "Efficient TSP for mobile devices.", solution: "Held-Karp algorithm with bitmasking and memoization." },
        { title: "Location Tracking", description: "Balancing accuracy with battery efficiency.", solution: "Pre-calculated checkpoints with location-based triggers." },
        { title: "Maps API Limitations", description: "No multi-stop routing for public transport.", solution: "Custom route segmentation with individual API calls." },
        { title: "Deployment", description: "Expo Go issues with native modules.", solution: "Migrated to Firebase App Distribution." },
      ],
      links: { github: "https://github.com/Jsjk112344/Orbital24PathPilot.git" },
    },
  },
  {
    slug: "boop",
    title: "Boop",
    description:
      "A location-based social discovery app. Proximity-verified check-ins, collectible stamps, group sessions joined via QR, and a friend-first activity feed showing what's happening near you right now.",
    image: boopImg,
    tags: ["React Native", "TypeScript", "Supabase", "Expo"],
    detail: {
      subtitle: "Location-Based Social Discovery — Friend Who Knows the City",
      overview:
        "Boop answers one question: what should I do right now, near me, with the people I care about? Every check-in (a 'boop') is proximity-verified within 500m, can carry up to 6 photos plus a caption, and ripples atomically to the map, the friend feed, and the user's passport. Group sessions sync live across phones via Supabase Realtime, joined by QR code, with optional NFC as an Android-only secondary path.",
      motivation:
        "Most discovery apps optimize for star ratings and aggregate history. Boop optimizes for the present tense. Live activity from friends beats anonymous review counts, and friendships form in person during the same group session that produces the shared memory. The product behaves like a friend who knows the city, not an algorithm.",
      technologies: [
        { name: "React Native", icon: "react", description: "Cross-platform mobile with Expo" },
        { name: "TypeScript", icon: "typescript", description: "Type-safe development across the codebase" },
        { name: "Supabase", icon: "supabase", description: "PostgreSQL, Realtime subscriptions, edge functions, storage" },
        { name: "PostGIS", icon: "postgresql", description: "Geospatial queries for proximity verification and discovery" },
        { name: "AWS Rekognition", icon: "aws", description: "Face matching for the YouShot photo-distribution feature" },
        { name: "TanStack Query", icon: "reactquery", description: "Server state management with caching" },
      ],
      features: [
        { title: "Proximity-Verified Check-ins", description: "500m geofenced 'boops' with up to 6 photos. The proximity bound is a trust primitive, not a UX detail." },
        { title: "Group Boops via QR", description: "Live-synced multi-user sessions with shared albums. Friendships auto-form between participants at the moment of the boop." },
        { title: "Friend-First Feed", description: "Activity feed filtered to friends only — no algorithmic ranking, no anonymous noise." },
        { title: "Stamp Passport", description: "Auto-awarded collectible stamps tied to partner venues, displayed as a grid, timeline, and badge collection." },
        { title: "Live Venue Overlays", description: "Map shows who's there now before you arrive — network-based social proof replaces star ratings." },
        { title: "YouShot Photo Distribution", description: "Face-matching pipeline using AWS Rekognition to deliver event photos to the right attendees automatically." },
      ],
      challenges: [
        { title: "Geospatial Correctness", description: "The 500m verification is load-bearing for trust.", solution: "PostGIS RPCs with auto-expanding search radius (5km → 10km → 15km) so users never see an empty map." },
        { title: "Live Group Sync", description: "Multiple phones contributing photos and captions to one session in real time.", solution: "Supabase Realtime subscriptions with shared-album hooks, joined deterministically via QR." },
        { title: "Photo Performance", description: "Photo grids are first-class — compression and load times directly shape the feed feel.", solution: "Storage-side compression with progressive loading and TanStack Query caching for repeat views." },
        { title: "NFC Fragmentation", description: "NFC varies across Android and isn't available on iOS at all.", solution: "QR is the primary join path on every platform. NFC remains as an opt-in Android-only enhancement, never assumed." },
      ],
      links: { github: "#" },
    },
  },
  {
    slug: "cafeconnect",
    title: "CafeConnect",
    description:
      "Java-based inventory and POS system for cafe owners with real-time sales tracking and object-oriented backend.",
    image: cafeconnectImg,
    tags: ["Java", "JavaFX", "JUnit"],
    detail: {
      subtitle: "Comprehensive Cafe Management System",
      overview:
        "CafeConnect is a desktop application for cafe owners to manage customers, staff, and menus. Built with Java and JavaFX, it provides both CLI and GUI interfaces.",
      motivation:
        "Having been a barista myself, I recognized the need for efficient business management systems. Many small cafe owners struggle with disconnected tools. CafeConnect provides an integrated solution.",
      technologies: [
        { name: "Java", icon: "java", description: "Core language with OOP principles" },
        { name: "JavaFX", icon: "javafx", description: "Modern desktop UI framework" },
        { name: "Jackson", icon: "json", description: "JSON processing for data persistence" },
        { name: "JUnit 5", icon: "junit5", description: "Comprehensive testing framework" },
        { name: "Gradle", icon: "gradle", description: "Build automation and dependency management" },
        { name: "Git", icon: "git", description: "Version control workflow" },
      ],
      features: [
        { title: "Customer Management", description: "Complete customer profiles with reward points and visit history." },
        { title: "Staff Management", description: "Employee tracking with roles, shifts, and performance ratings." },
        { title: "Drink Catalog", description: "Dynamic menu management with pricing and inventory tracking." },
        { title: "Loyalty System", description: "Automated reward points (10pts/$) with flexible redemption." },
        { title: "Dual Interface", description: "Hybrid CLI/GUI for power users and visual management." },
        { title: "Data Persistence", description: "Multi-file JSON storage with automatic backup and recovery." },
      ],
      challenges: [
        { title: "CLI Design", description: "Balancing simplicity with comprehensive features.", solution: "Command aliases, parameter validation, and quick shortcuts." },
        { title: "Data Integrity", description: "Ensuring consistency across IDs and references.", solution: "Comprehensive validation layer with unique constraints." },
        { title: "Interface Sync", description: "Keeping CLI and GUI in sync.", solution: "Observer pattern with centralized model management." },
        { title: "Scalable Architecture", description: "Handling growing datasets efficiently.", solution: "SOLID principles with Command and Builder patterns." },
      ],
      links: {
        github: "https://github.com/AY2425S2-CS2103T-T08-3/tp.git",
        userGuide: "https://ay2425s2-cs2103t-t08-3.github.io/tp/UserGuide.html",
        developerGuide: "https://ay2425s2-cs2103t-t08-3.github.io/tp/DeveloperGuide.html",
      },
    },
  },
  {
    slug: "readly",
    title: "Readly",
    description:
      "A Spring Boot book logging app with clean RESTful APIs for tracking personal reading habits.",
    image: readlyImg,
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    detail: {
      subtitle: "Book Logging & Reading Tracker API",
      overview:
        "Readly is a lightweight backend built with Spring Boot for logging books, tracking reading progress, and storing personal reading insights with clean RESTful APIs.",
      motivation:
        "I created Readly to learn Spring Boot while solving a personal problem — tracking books I was reading without bloated apps.",
      technologies: [
        { name: "Java", icon: "java", description: "Backend language for API development" },
        { name: "Spring Boot", icon: "spring", description: "Framework for production-ready REST APIs" },
        { name: "Maven", icon: "apachemaven", description: "Dependency and build management" },
        { name: "PostgreSQL", icon: "postgresql", description: "Relational database for book data" },
        { name: "JSON", icon: "json", description: "API communication format" },
        { name: "Git", icon: "git", description: "Version control" },
      ],
      features: [
        { title: "Book CRUD API", description: "Create, update, delete, and retrieve book entries." },
        { title: "Status Tracker", description: "Track books by status: reading, completed, on-hold, dropped." },
        { title: "User Profiles", description: "Per-user book lists with timestamps and notes." },
        { title: "Search & Filter", description: "Search by author, genre, or keywords with pagination." },
        { title: "RESTful Design", description: "Consistent endpoints with proper HTTP semantics." },
        { title: "Database Integration", description: "PostgreSQL with schema migration and relational structure." },
      ],
      challenges: [
        { title: "Learning Spring Boot", description: "First real Spring Boot project.", solution: "Built modular features one at a time to internalize patterns." },
        { title: "JPA Relationships", description: "Entity relationships caused infinite recursion.", solution: "DTOs with @JsonIgnore to manage entity exposure." },
        { title: "Input Validation", description: "Preventing malformed data.", solution: "@Valid annotations with centralized exception handlers." },
        { title: "Schema Design", description: "Flexible but simple database design.", solution: "Minimal normalized structure with room for expansion." },
      ],
      links: { github: "https://github.com/Jsjk112344/readly.git" },
    },
  },
];

export const skillCategories = [
  {
    label: "FRONTEND",
    skills: ["React", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "BACKEND",
    skills: ["Node.js", "Spring Boot", "Supabase", "Firebase"],
  },
  {
    label: "BLOCKCHAIN",
    skills: ["Solidity", "Polygon", "Smart Contracts", "Web3.js"],
  },
  {
    label: "SECURITY",
    skills: ["Penetration Testing", "OSCP", "OSEP", "Red Teaming"],
  },
];

export const certifications = [
  {
    name: "OSCP",
    fullName: "Offensive Security Certified Professional",
    image: oscpBadge,
    url: "https://www.credential.net/03fc5a83-a1a1-4f13-b9e1-39cab3fe37e2",
  },
  {
    name: "OSEP",
    fullName: "Offensive Security Experienced Pentester",
    image: osepBadge,
    imageClass: "w-[7.5rem] h-[5.5rem] -ml-7 object-contain",
    url: "https://credentials.offsec.com/33bbf414-c222-4b6c-ba28-d04bca40b309",
  },
];

export const experience = [
  {
    title: "Co-founder & CTO",
    company: "Ducket",
    location: "Singapore",
    period: "2025 - Present",
    description:
      "Co-founded a vertical SaaS for live event organizers, with an on-chain attendance graph as the moat. Architected the full platform: four apps from one Vite codebase, ~84 Supabase edge functions, Stripe Connect payouts, custodial wallets with sponsored gas. ~93 users, 16 organizers, 5 events run as of May 2026.",
  },
  {
    title: "Cybersecurity Engineer (Offensive Security)",
    company: "GovTech Singapore",
    location: "Singapore",
    period: "Jan 2026 - Jun 2026",
    description:
      "Developing an AI-assisted framework using LLMs to generate MITRE ATT&CK TTP implementations. Building RAG system with Qdrant hybrid search and automated compilation pipelines.",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Elephantech Inc",
    location: "Tokyo, Japan",
    period: "Jul 2025 - Dec 2025",
    description:
      "Contributed to ML models for high-precision industrial printing systems. Applied data-driven approaches to improve spatial accuracy through model optimization.",
  },
  {
    title: "Software Engineer Intern",
    company: "Koru Partners Pte Ltd",
    location: "Singapore",
    period: "May 2024 - Aug 2024",
    description:
      "Developed permission scripts using Django. Led deployment of cybersecurity solutions including Cloudflare integration and endpoint protection.",
  },
  {
    title: "SOC Analyst",
    company: "The Digital and Intelligence Service",
    location: "Singapore",
    period: "Jan 2023 - Aug 2023",
    description:
      "Identified and analyzed security events for critical SAF infrastructure. Led teams in 24/7 threat monitoring and cyber defence exercises.",
  },
];
