import heroImg from "@/assets/justin-soon.jpg";
import ducketImg from "@/assets/ducket.png";
import pathpilotImg from "@/assets/pathpilot.png";
import boopImg from "@/assets/boop.svg";
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
    "Building blockchain-based NFT ticketing at Ducket. Full-stack developer with expertise in offensive cybersecurity (OSCP, OSEP) and machine learning.",
  image: heroImg,
};

export const projects = [
  {
    slug: "ducket",
    title: "Ducket",
    role: "Co-founder & CTO",
    description:
      "A full-stack NFT ticketing platform on Polygon with enforced resale price caps to combat ticket scalping. Features Stripe Connect payments, dynamic QR validation, smart contract integration, and multi-tenant architecture.",
    image: ducketImg,
    tags: ["React", "TypeScript", "Solidity", "Stripe", "Supabase"],
    featured: true,
    detail: {
      subtitle: "Blockchain-Based NFT Ticketing Platform - Co-Founded Startup",
      overview:
        "Ducket is a full-stack NFT ticketing platform built on Polygon that combats ticket scalping through enforced resale price caps via smart contracts. The platform features hybrid payment options (Stripe and crypto wallets), dynamic QR validation, and a multi-tenant architecture serving buyers, organizers, admins, and event scanners from a single codebase.",
      motivation:
        "The live events industry is plagued by ticket scalping, where bots and resellers buy tickets in bulk and resell them at exorbitant markups. Fans miss out on events they love, and artists lose control over pricing. By minting tickets as NFTs with smart contract-enforced resale price caps, we created a system where tickets can be freely transferred but never sold above a fair price.",
      technologies: [
        { name: "React", icon: "react", description: "Frontend framework with Vite for fast development" },
        { name: "TypeScript", icon: "typescript", description: "Full type safety across the entire stack" },
        { name: "Solidity", icon: "solidity", description: "Smart contracts for ERC-1155 NFT tickets" },
        { name: "Supabase", icon: "supabase", description: "PostgreSQL backend with 67 Edge Functions" },
        { name: "Stripe", icon: "stripe", description: "Payment processing with Stripe Connect" },
        { name: "Polygon", icon: "polygon", description: "Layer 2 blockchain for low-cost NFT minting" },
      ],
      features: [
        { title: "NFT Ticket Minting", description: "ERC-1155 smart contracts with flexible ticket tiers, prices, and supply limits." },
        { title: "Price-Capped Resale", description: "Smart contract-enforced maximum resale prices prevent scalping at the protocol level." },
        { title: "Hybrid Payments", description: "Support for both credit card payments via Stripe and cryptocurrency wallet payments." },
        { title: "Dynamic QR Validation", description: "Rotating QR codes for ticket validation prevent screenshot fraud." },
        { title: "Multi-Tenant Architecture", description: "Single codebase serving buyer, organizer, admin, and scanner interfaces." },
        { title: "Real-Time Availability", description: "Live ticket availability updates using Supabase Realtime subscriptions." },
      ],
      challenges: [
        { title: "Smart Contract Security", description: "Handling real money and NFT assets required bulletproof logic.", solution: "Comprehensive testing with Hardhat, OpenZeppelin patterns, careful access control." },
        { title: "Payment Flow Complexity", description: "Supporting both fiat and crypto while maintaining consistent state.", solution: "Robust payment queue system with idempotent webhook handlers and state machines." },
        { title: "QR Code Anti-Fraud", description: "Static QR codes are vulnerable to screenshot sharing.", solution: "Dynamic QR codes with server-side rotation and time-based validation tokens." },
        { title: "Multi-Tenant Deployment", description: "Serving four apps from a single codebase cleanly.", solution: "Vite multi-entry config with shared component library and feature flag system." },
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
      "A mobile app for real-world exploration with NFC check-in, stamp collecting, achievement badges, and social features.",
    image: boopImg,
    tags: ["React Native", "TypeScript", "Supabase", "Expo"],
    detail: {
      subtitle: "Real-World Exploration App with NFC Check-ins & Social Discovery",
      overview:
        "Boop is a mobile application for real-world exploration with NFC check-in capabilities. Users discover locations, collect stamps, earn badges, and connect through a social layer.",
      motivation:
        "I wanted to create an app that encourages people to explore the world around them in a fun, social way. By combining NFC check-ins, stamp collections, and a friend activity feed, Boop turns exploration into a collectible experience.",
      technologies: [
        { name: "React Native", icon: "react", description: "Cross-platform mobile with Expo 54" },
        { name: "TypeScript", icon: "typescript", description: "Type-safe development across the codebase" },
        { name: "Supabase", icon: "supabase", description: "Backend with PostgreSQL and real-time subs" },
        { name: "PostGIS", icon: "postgresql", description: "Geospatial queries for location discovery" },
        { name: "TanStack Query", icon: "reactquery", description: "Server state management with caching" },
        { name: "Zustand", icon: "npm", description: "Lightweight client state management" },
      ],
      features: [
        { title: "Location Discovery", description: "Interactive map with PostGIS-powered geospatial search." },
        { title: "NFC Check-ins", description: "Check in at locations with photos, captions, and participant tags." },
        { title: "Stamp Collection", description: "Digital passport with location-specific stamps on first visits." },
        { title: "Achievement Badges", description: "Badge system tied to activities, streaks, and milestones." },
        { title: "Social Feed", description: "Friend system with real-time activity feed showing friend boops." },
        { title: "Group Boops", description: "Multi-user check-ins for shared exploration experiences." },
      ],
      challenges: [
        { title: "Geospatial Performance", description: "Efficient location search across thousands of venues.", solution: "PostGIS spatial indexes with Supabase RPC functions." },
        { title: "Real-time Feed", description: "Responsive activity feed with subscription lifecycle management.", solution: "Supabase Realtime with TanStack Query caching." },
        { title: "Offline-First", description: "Handling check-ins without network access.", solution: "Zustand for optimistic local state with background sync." },
        { title: "NFC Reliability", description: "NFC varies across Android devices.", solution: "Fallback proximity-based check-ins with graceful degradation." },
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
      "Co-founded a blockchain-based NFT ticketing startup. Architected the full platform from smart contracts to frontend, backend (67 Supabase Edge Functions), and payments (Stripe Connect).",
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
