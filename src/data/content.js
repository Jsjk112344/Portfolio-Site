import heroImg from "@/assets/justin-soon.jpg";
import ducketImg from "@/assets/ducket.png";
import pathpilotImg from "@/assets/pathpilot.png";
import boopImg from "@/assets/boop.png";
import cafeconnectImg from "@/assets/cafeconnect.png";
import readlyImg from "@/assets/readly.png";
import oscpBadge from "@/assets/oscp.png";
import osepBadge from "@/assets/osep.png";

export const siteConfig = {
  name: "Justin Soon",
  logo: "JS",
  title: "Founder · Builder · Hacker",
  email: "jienkhye01@gmail.com",
  github: "https://github.com/Jsjk112344",
  linkedin: "https://www.linkedin.com/in/justin-soon-558372212/",
  resumePath: "/Justin_Resume_Mar2025.pdf",
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
