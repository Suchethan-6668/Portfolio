/**
 * Central portfolio content sourced from resumes + LinkedIn.
 * Update placeholder URLs (github/demo links, profile image) as needed.
 */

export const siteConfig = {
  name: "Vilasagaram Suchethan",
  shortName: "Suchethan",
  // Punchy headline derived from LinkedIn/resume positioning
  headline:
"Final Year Computer Science Student at NIT Warangal",
  tagline:
    "B.Tech CSE @ NIT Warangal · APIs · Microservices · AI Infrastructure",
  email: "suchethan06@gmail.com",
  phone: "+91-8688833633",
  location: "Warangal, India",
  // TODO: Replace with your preferred resume file if needed
  resumeUrl: "/resume.pdf",
  social: {
    // TODO: Confirm these URLs match your live profiles
    github: "https://github.com/Suchethan-6668",
    linkedin: "https://www.linkedin.com/in/suchethan-vilasagaram-8bbb98332/",
    email: "mailto:suchethan06@gmail.com",
  },
  // TODO: Add a profile photo at public/profile.jpg and uncomment usage in Hero/Navbar
  profileImage: "/profile.jpg",
};

export const about = {
  summary:
    "I'm a Final year student pursuing B.Tech in Computer Science at NIT Warangal. I design audited API layers, microservices, and AI infrastructure that replace fragile workflows with production-ready systems — focused on reliability, security, and clean engineering.",
  education: [
    {
      school: "National Institute of Technology, Warangal",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – current",
      detail: "CGPA: 7.83",
    },
    {
      school: "Sri Chaitanya Junior College, Hyderabad",
      degree: "Board of Secondary Education, Telangana",
      period: "2023",
      detail: "Percentage: 98.4%",
    },
    {
      school: "Sri Chaitanya Techno School, Hyderabad",
      degree: "Board of Primary Education, Telangana",
      period: "2021",
      detail: "CGPA: 10",
    },
  ],
  achievements: [
    { label: "JEE Mains 2023", value: "AIR 3969" },
    { label: "LeetCode Contest", value: "1803 Rating" },
    { label: "NIT Warangal", value: "CGPA 7.83" },
  ],
};

export const experience = [
  {
    role: "SDE Intern — Backend / AI Infrastructure",
    company: "Xelron.AI",
    period: "May – June 2026",
    highlights: [
      "Replaced a fragile 13-tab spreadsheet workflow with a single audited backend system of record.",
      "Engineered modular RESTful API layers using FastAPI, SQLAlchemy, Alembic, and PostgreSQL.",
      "Architected strict API security, RBAC policies, and input validation to prevent cross-client data contamination.",
      "Built automated ingestion pipelines to reverse-engineer complex GitHub PRs into structured training data for proprietary LLMs (RLHF / Marlin).",
      "Practiced end-to-end SDLC: clean code, peer reviews, and resolving integration bottlenecks through active debugging.",
    ],
    tech: [
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "RBAC",
      "Python",
    ],
  },
];

export const projects = [
  {
    title: "LLMOps RAG Pipeline",
    period: "June 2026",
    description:
      "Full-stack conversational RAG platform for document-grounded Q&A with multi-tenant isolation, hybrid retrieval, and production observability.",
    highlights: [
      "Multi-tenant FastAPI backend with isolated directories and databases for strict tenant privacy.",
      "10-step RAG pipeline: HyDE expansion, hybrid retrieval, RRF, and FlashRank reranking.",
      "Reliability via SlowAPI rate-limiting, SHA-256 deduplication, async PostgreSQL, and retry backoffs.",
      "OpenTelemetry tracing, Supabase JWT auth, and Ragas evaluation harness for output quality.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LlamaIndex",
      "PostgreSQL",
      "ChromaDB",
      "React",
      "Docker",
      "OpenTelemetry",
      "Supabase",
    ],
    // TODO: Add your real GitHub repository URL
    github: "https://github.com/Suchethan-6668",
    // TODO: Add live demo URL when available
    live: "#",
  },
  {
    title: "QuizVerse",
    period: "May 2026",
    description:
      "Secure full-stack quiz management system with role-based access, migrated from a monolith to a decoupled microservices architecture.",
    highlights: [
      "Migrated monolithic backend to Java/Spring Boot microservices for fault isolation and modularity.",
      "Centralized API Gateway for request routing, load management, and secure inter-service communication.",
      "Docker Compose containerization for cloud-ready, consistent deployments.",
      "Google OAuth2 + JWT access control with Spring Data JPA data-access optimization.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "OAuth2",
      "JWT",
      "API Gateway",
    ],
    // TODO: Add your real GitHub repository URL
    github: "https://github.com/Suchethan-6668",
    // TODO: Add live demo URL when available
    live: "#",
  },
  {
    title: "Named Entity Recognition (LSTM)",
    period: "June 2026",
    description:
      "Deep learning sequence-labeling model for automated named entity extraction from custom text inputs.",
    highlights: [
      "Architected an LSTM network for token-level entity identification and classification.",
      "End-to-end NLP pipelines: tokenization, numerical encoding, and sequence padding.",
      "Achieved 97% evaluation accuracy with optimized TensorFlow inference.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "NLTK", "NumPy", "Pandas"],
    // TODO: Add your real GitHub repository URL
    github: "https://github.com/Suchethan-6668",
    // TODO: Add live demo URL when available
    live: "#",
  },
];

export const skills = {
  Languages: ["Java", "Python", "C++", "SQL"],
  "Backend & Web": [
    "REST APIs",
    "Spring Boot",
    "FastAPI",
    "API Gateways",
    "Microservices",
    "Webhooks",
    "React",
  ],
  "AI & ML": [
    "LlamaIndex",
    "TensorFlow",
    "ChromaDB",
    "RAG Pipelines",
    "RLHF",
  ],
  "Developer Tools": [
    "Git",
    "GitHub",
    "Docker",
    "OpenTelemetry",
    "Alembic",
    "Postman",
    "Supabase",
  ],
  Databases: ["PostgreSQL", "MySQL", "Oracle SQL", "ChromaDB"],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
