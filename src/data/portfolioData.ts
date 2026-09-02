import salesosImg from "../assets/projects/salesos.png";
import clinicalcopilotImg from "../assets/projects/clinicalcopilot.png";
import aarambamImg from "../assets/projects/aarambam.png";
import veritasnetImg from "../assets/projects/veritasnet.png";

import travelPlaneImg from "../assets/hcl-guvi/travel_plane.png";
import teamPosterImg from "../assets/hcl-guvi/team_poster.png";
import boardingPassImg from "../assets/hcl-guvi/boarding_pass.png";
import presentationScreenImg from "../assets/hcl-guvi/presentation_screen.png";
import certificateImg from "../assets/hcl-guvi/certificate.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string; // If empty, hide GitHub link
  image?: string; // Optional hover image
  caseStudy: {
    problem: string;
    idea: string;
    build: {
      architecture: string;
      decisions: string[];
      components: string[];
    };
    chaos: {
      title: string;
      items: string[];
    };
    result: string;
    learned: string[];
    nextIteration: string;
  };
}

export interface TechSkillProject {
  title: string;
  projectId?: string;
  github?: string;
}

export interface TechSkill {
  name: string;
  category: "AI / ML" | "Frameworks & UI" | "Data & Backend" | "DevOps & Tools";
  logoSvg: string; // SVG path markup string
  projects: TechSkillProject[];
  explanation: string;
}

export interface SoftSkill {
  name: string;
  image: string; // Photo from public/data/ folder
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  placement: string;
  details: string;
  isSpecial: boolean;
  image: string;
  images: string[]; // Specific mapped images
  linkedin?: string;
}

export interface StoryChapter {
  id: number;
  chapterNumber: string;
  headline: string;
  text: string;
  image?: string;
  imageCaption?: string;
}

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/kripa-sree-m/",
  github: "https://github.com/thekripaverse",
  email: "kripasreemohanraj@gmail.com"
};

export const projectsData: Project[] = [
  {
    id: "salesos",
    title: "SalesOS.ai",
    category: "AGENTIC AI",
    description: "Autonomous Sales Intelligence & Revenue Acceleration Agent designed to analyze prospects, understand engagement, prioritize leads and support autonomous sales actions.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Vector Database", "LangGraph", "LLMs"],
    github: "https://github.com/thekripaverse/SalesOS.ai",
    image: salesosImg,
    caseStudy: {
      problem: "Traditional CRM platforms are passive databases. Sales representatives spend up to 60% of their time researching prospects, writing outreach emails, and manually qualifying leads, rather than actually closing deals.",
      idea: "What if we created a semi-autonomous AI colleague that sits inside your system, actively monitors prospect signals, queries multiple vector indices to match context, and drafts hyper-personalized responses dynamically?",
      build: {
        architecture: "The agentic system uses LangGraph to define a complex cyclic state machine. The workflow branches: first, it fetches prospect context, retrieves related semantic history from a vector store, uses an LLM node to grade engagement signals, and then triggers tools for autonomous drafting. If confidence is low, it passes the state back to a human review queue.",
        decisions: [
          "Selected LangGraph over LangChain chains to allow loops and self-correction cycles when drafting outreach documents.",
          "Chose Redis for active session caching and maintaining transient states of multi-agent conversations.",
          "Implemented FastAPI to expose light webhook integration endpoints for CRMs."
        ],
        components: [
          "Lead Scrapper Agent Node",
          "Semantic Context Retrieval Module (Vector DB)",
          "Engagement Grading Guardrail Node",
          "FastAPI State Manager"
        ]
      },
      chaos: {
        title: "Things That Broke",
        items: [
          "Graph Loops going infinite: When the agent self-corrected, it entered recursive loops and maxed out token limits in minutes.",
          "Redis state serialization errors: Attempting to store custom class instances directly in Redis caches without sanitizing schemas.",
          "API Rate Limits: Scraping and querying LLMs simultaneously hit strict API throttling during testing, forcing us to build an active queuing worker with rate-limit limits."
        ]
      },
      result: "A functional, state-driven agent system that reduced manual prospect categorization time by 80% and successfully drafted context-aware engagement emails without human intervention.",
      learned: [
        "State machine definitions must have hard caps on loop iterations.",
        "Deterministic fallbacks are mandatory when agent confidence drops below a specific math threshold."
      ],
      nextIteration: "Integrating local light LLMs (like Llama-3-8B) for primary categorization to save API costs, leaving GPT-4/Claude only for final output drafting."
    }
  },
  {
    id: "clinicalcopilot",
    title: "ClinicalCopilot",
    category: "MULTIMODAL HEALTHCARE AI",
    description: "Agentic healthcare automation concept involving multimodal understanding, patient verification and intelligent workflow automation.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Multimodal LLMs", "FHIR Standards", "Security Encryption"],
    github: "https://github.com/thekripaverse/ClinicalCopilot",
    image: clinicalcopilotImg,
    caseStudy: {
      problem: "Doctors spend hours typing patient records, looking up history, and verifying medical scans. Multimodal records are fragmented, causing transcription errors.",
      idea: "A secure dashboard that accepts combined inputs (voice diagnostics, patient charts, and medical imaging) and maps them into standardized HL7/FHIR profiles.",
      build: {
        architecture: "A secure, HIPAA-compliant gateway that intakes image formats and voice transcriptions, passes them to a visual-text model, runs clinical token verification, and builds a structured clinical summary.",
        decisions: [
          "Used strict end-to-end payload encryption at rest and in transit.",
          "Built a parsing layer conforming to international FHIR health data standards."
        ],
        components: [
          "Multimodal Visual Tokenizer",
          "FHIR Mapping Engine",
          "HIPAA Security Layer"
        ]
      },
      chaos: {
        title: "Things That Broke",
        items: [
          "DICOM Scan Processing: Medical imagery formats were too large and crashed default web loaders.",
          "Medical jargon: Speech-to-text tools frequently misspelled specific drug compounds and surgical procedures."
        ]
      },
      result: "A conceptual prototype demonstrating automated chart parsing and draft diagnostic summary creation, streamlining verification workflows for mock clinical records.",
      learned: [
        "Medical AI must always have a human physician signature step; it is purely an assistant.",
        "Standard dictionaries must be injected into speech recognizers for clinical vocabulary."
      ],
      nextIteration: "Testing compatibility with local visual transformers to run entirely within closed local clinic networks."
    }
  },
  {
    id: "aarambam",
    title: "Aarambam",
    category: "VOICE AI & FINTECH",
    description: "Multilingual Voice UPI assistant with built-in scam shields designed for non-tech-savvy users to enable accessible and secure transactions.",
    technologies: ["Python", "Whisper API", "FastAPI", "LlamaIndex", "Heuristic Rules", "Android SDK"],
    github: "https://github.com/thekripaverse/Aarambam",
    image: aarambamImg,
    caseStudy: {
      problem: "Traditional digital payment apps require visual navigation and technical literacy. Rural and elderly users struggle with English-based interfaces and are highly vulnerable to social engineering scams and fake UPI payment requests.",
      idea: "What if we created a voice-first, multilingual conversational assistant that handles payments through natural spoken language, while running real-time heuristic security checks on merchant details and payment requests?",
      build: {
        architecture: "A speech-to-text pipeline that processes local regional languages, passes the text to a semantic router, invokes an LLM to extract payment parameters (amount, recipient), and performs real-time verification against a database of known spam merchants before calling the UPI intent API.",
        decisions: [
          "Used a local Whisper model for low-latency translation and speech-to-text processing.",
          "Built a rule-based scan shield that intercepts transaction payloads and scores merchant trustworthiness."
        ],
        components: [
          "Voice Input Parser",
          "Multilingual Semantic Router",
          "Scam Shield Risk Engine",
          "UPI Intent Bridge"
        ]
      },
      chaos: {
        title: "Things That Broke",
        items: [
          "Dialect variations: The speech recognizer failed on local rural dialects, requiring custom phonetic mapping.",
          "Latency: Voice-to-payment execution took over 6 seconds initially, solved by streaming audio chunks and caching merchant scores."
        ]
      },
      result: "A functioning voice-assisted fintech app that parses voice commands in 3 local languages and successfully blocks mock scam requests.",
      learned: [
        "Voice UI must be simple and confirm details explicitly before executing final financial transactions.",
        "Heuristic risk engines need offline capabilities for remote areas."
      ],
      nextIteration: "Adding offline voice translation models that run locally on low-cost smartphones."
    }
  },
  {
    id: "veritasnet",
    title: "VeritasNet",
    category: "AI & AUDIO SECURITY",
    description: "AI-powered deepfake voice detection and security gateway designed to verify audio authenticity and block synthetic voice frauds in real-time.",
    technologies: ["Python", "PyTorch", "Librosa", "LSTM Models", "FastAPI", "Docker", "React"],
    github: "https://github.com/thekripaverse/VeritasNet",
    image: veritasnetImg,
    caseStudy: {
      problem: "The rapid rise of Generative AI has made voice cloning and audio deepfakes highly accessible, enabling sophisticated social engineering, identity theft, and financial fraud targeting bank call centers and families.",
      idea: "A real-time audio analysis gateway that ingests incoming voice payloads, processes acoustic features, checks for synthetic voice patterns, and scores authenticity before validating transactions.",
      build: {
        architecture: "An audio processing pipeline built with FastAPI. It ingests speech clips, extracts spectrograms and Mel-Frequency Cepstral Coefficients (MFCCs) using Librosa, feeds them into a custom PyTorch classification model, and returns an authenticity score.",
        decisions: [
          "Selected PyTorch for training the deep learning classification model due to its rich library support for audio processing layers.",
          "Chose FastAPI for the inference endpoint to maintain low-latency response times critical for live audio streams."
        ],
        components: [
          "Acoustic Feature Extractor (Librosa)",
          "PyTorch Deepfake Classifier Model",
          "FastAPI Verification API Gateway"
        ]
      },
      chaos: {
        title: "Things That Broke",
        items: [
          "Noise interference: Background street noise and network compression artifacts caused false positives, resolved by training with augmented noisy audio datasets.",
          "Latency delays: Initial full-clip analysis took over 3 seconds, resolved by analyzing the first 1.5 seconds of streaming audio chunks to predict authenticity."
        ]
      },
      result: "A deep learning model capable of detecting cloned and synthetic voices, deployed as a prototype API gateway with a React frontend.",
      learned: [
        "Audio pre-processing is as critical as the model architecture; clean feature extraction leads to higher detection accuracy.",
        "Real-time security systems must run inference in under 200ms to be viable in call-routing pipelines."
      ],
      nextIteration: "Optimizing the model weights using ONNX runtime to execute directly on edge devices."
    }
  }
];

export const techSkillsData: TechSkill[] = [
  // AI / ML
  {
    name: "Python",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2c-2.3 0-4.3.2-5.7.6C4.2 3.2 3.2 4.7 3.2 6.8v3c0 2.1 1 3.6 3.1 4.2 1.4.4 3.4.6 5.7.6h1v-1.7c0-1.7 1.3-3 3-3h4.6c1.7 0 3-1.3 3-3V6.8c0-2.1-1-3.6-3.1-4.2C18.1 2.2 16.1 2 13.8 2H12z" /><path d="M12 22c2.3 0 4.3-.2 5.7-.6 2.1-.6 3.1-2.1 3.1-4.2v-3c0-2.1-1-3.6-3.1-4.2-1.4-.4-3.4-.6-5.7-.6h-1v1.7c0 1.7-1.3 3-3 3H4.4c-1.7 0-3 1.3-3 3v2.9c0 2.1 1 3.6 3.1 4.2 1.4.4 3.4.6 5.7.6H12z" /><circle cx="8.5" cy="5.5" r="0.75" fill="currentColor" /><circle cx="15.5" cy="18.5" r="0.75" fill="currentColor" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" },
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" },
      { title: "Aarambam", projectId: "aarambam", github: "https://github.com/thekripaverse/Aarambam" },
      { title: "VeritasNet", projectId: "veritasnet", github: "https://github.com/thekripaverse/VeritasNet" }
    ],
    explanation: "Primary language for machine learning engineering, data processing, and stateful agent systems."
  },
  {
    name: "Machine Learning",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22v-4M5 14l3.5-3.5M19 14l-3.5-3.5" /><circle cx="12" cy="15" r="3" /><circle cx="5" cy="15" r="2" /><circle cx="19" cy="15" r="2" /><circle cx="12" cy="5" r="3" /><path d="M12 8v4" /></svg>`,
    projects: [
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" },
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" }
    ],
    explanation: "Implemented core supervised and unsupervised algorithms for anomaly classification and regression telemetry."
  },
  {
    name: "Deep Learning",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="4" cy="6" r="2" /><circle cx="4" cy="18" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="20" cy="6" r="2" /><circle cx="20" cy="18" r="2" /><path d="M6 6l4 4M6 18l4-4M14 10l4-4M14 14l4 4" /></svg>`,
    projects: [
      { title: "VeritasNet", projectId: "veritasnet", github: "https://github.com/thekripaverse/VeritasNet" },
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" }
    ],
    explanation: "Developed and trained artificial neural networks, deploying models for voice deepfake detection and clinical scans classification."
  },
  {
    name: "Computer Vision",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>`,
    projects: [
      { title: "Gesture Virtual Mouse", projectId: "vigyan" },
      { title: "Gesture Brightness Controller" }
    ],
    explanation: "Extracted spatial hand landmark coordinates and ran frame analysis in real-time camera feeds."
  },
  {
    name: "Generative AI / RAG",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" },
      { title: "Aarambam", projectId: "aarambam", github: "https://github.com/thekripaverse/Aarambam" }
    ],
    explanation: "Engineered stateful Retrieval-Augmented Generation context systems and structured vector lookups."
  },
  {
    name: "Agentic AI",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M21 12H3M12 3v18" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" }
    ],
    explanation: "Orchestrated self-correcting multi-agent networks running cyclical loops to scrape and qualify B2B prospects."
  },
  {
    name: "PyTorch",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5h-2v-4h2v4zm0-6h-2v-2h2v2z" /></svg>`,
    projects: [
      { title: "VeritasNet", projectId: "veritasnet", github: "https://github.com/thekripaverse/VeritasNet" }
    ],
    explanation: "Trained LSTM deep learning neural models for audio classification and spectrogram anomaly verification."
  },
  {
    name: "TensorFlow",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" /><path d="M12 2v20M2 7.5h20M2 16.5h20" /></svg>`,
    projects: [
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" }
    ],
    explanation: "Used to build, evaluate, and export deep CNN models for image feature extraction."
  },
  {
    name: "Keras",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>`,
    projects: [
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" }
    ],
    explanation: "Built rapid neural architecture blueprints to prototype medical scan classification workflows."
  },
  {
    name: "NLP",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" },
      { title: "Aarambam", projectId: "aarambam", github: "https://github.com/thekripaverse/Aarambam" }
    ],
    explanation: "Utilized regex parsers and LLM semantic routing to verify natural commands and text sentiment."
  },
  {
    name: "Scikit-learn",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 3v18M3 12h18M12 3l-4 4M12 3l4 4M12 21l-4-4M12 21l4 4" /></svg>`,
    projects: [
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" }
    ],
    explanation: "Engineered feature scaling, train-test splits, and baseline regression models."
  },
  {
    name: "XGBoost",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 4h16v16H4zM4 12h16M12 4v16" /></svg>`,
    projects: [
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" }
    ],
    explanation: "Trained gradient boosted trees on structural health telemetry indicators."
  },
  {
    name: "LangChain",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2m4-4v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2z" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" }
    ],
    explanation: "Used to wrap LLM calls, define structured parser prompts, and orchestrate basic utility chains."
  },
  {
    name: "LangGraph",
    category: "AI / ML",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M12 12h8v8h-8z" /><circle cx="9" cy="17" r="1" /><circle cx="15" cy="9" r="1" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" }
    ],
    explanation: "Engineered stateful cyclical graphs enabling agents to self-correct drafts and recursively scrape lead data."
  },
  // Frameworks & UI
  {
    name: "React",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>`,
    projects: [
      { title: "Personal Portfolio", github: "https://github.com/thekripaverse/portfolio" },
      { title: "VeritasNet Dashboard", projectId: "veritasnet", github: "https://github.com/thekripaverse/VeritasNet" }
    ],
    explanation: "Used to develop high-fidelity user interfaces, responsive digital twins, and web frontends."
  },
  {
    name: "JavaScript",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M15 8h-3v5a1.5 1.5 0 0 0 3 0v-1M9 15a2 2 0 0 0 2-2V8H9v2h1v3a1 1 0 0 1-2 0" /></svg>`,
    projects: [
      { title: "Personal Portfolio", github: "https://github.com/thekripaverse/portfolio" }
    ],
    explanation: "Built light client-side rendering handlers, custom animations, and UI states."
  },
  {
    name: "TypeScript",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 8h4M9 8v8M14 9h4v3a2 2 0 0 1-2 2h-2M15 14h3" /></svg>`,
    projects: [
      { title: "Personal Portfolio", github: "https://github.com/thekripaverse/portfolio" }
    ],
    explanation: "Used to ensure strong-typing, scale frontends, and coordinate digital twin telemetry interfaces."
  },
  {
    name: "Node.js",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2L3.5 7v10l8.5 5 8.5-5V7L12 2z" /><path d="M12 2v20M3.5 7h17M12 12l5-3" /></svg>`,
    projects: [
      { title: "VeritasNet Dashboard", projectId: "veritasnet" }
    ],
    explanation: "Ran microservice configurations and structured bundle builders locally."
  },
  {
    name: "FastAPI",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" },
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" },
      { title: "Aarambam", projectId: "aarambam", github: "https://github.com/thekripaverse/Aarambam" },
      { title: "VeritasNet Gateway", projectId: "veritasnet", github: "https://github.com/thekripaverse/VeritasNet" }
    ],
    explanation: "Used to build high-performance asynchronous API endpoints and serve machine learning inference."
  },
  {
    name: "Flask",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" /></svg>`,
    projects: [
      { title: "Aarambam Sandbox", projectId: "aarambam" }
    ],
    explanation: "Created lightweight microservices to isolate sandbox script runs."
  },
  {
    name: "OpenCV",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="7" r="4.2" /><circle cx="7" cy="16.5" r="4.2" /><circle cx="17" cy="16.5" r="4.2" /><path d="M10 12.8a3 3 0 0 1 4 0" /></svg>`,
    projects: [
      { title: "Gesture Virtual Mouse", projectId: "vigyan" }
    ],
    explanation: "Used for real-time computer vision operations, video analytics, and spatial tracking."
  },
  {
    name: "MediaPipe",
    category: "Frameworks & UI",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" /><circle cx="12" cy="12" r="2.5" fill="currentColor" /></svg>`,
    projects: [
      { title: "Gesture Virtual Mouse", projectId: "vigyan" }
    ],
    explanation: "Used for real-time hand landmark extraction and skeletal coordinate tracking on raw camera streams."
  },
  // Data & Backend
  {
    name: "PostgreSQL",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10s10-4.5 10-10c0-2-1.5-4-3.5-5M6 10a4 4 0 0 1 8 0c0 3-4 6-4 6" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" }
    ],
    explanation: "Used for robust, transactional data storage and relational query structures."
  },
  {
    name: "SQL",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M3 14h18M9 4v16" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos" }
    ],
    explanation: "Wrote optimized database queries, schema configurations, and indexing parameters."
  },
  {
    name: "MongoDB",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2c5.5 4 8 8.5 8 12.5S16.5 22 12 22 4 20.5 4 14.5 6.5 6 12 2z" /></svg>`,
    projects: [
      { title: "ClinicalCopilot Mock DB", projectId: "clinicalcopilot" }
    ],
    explanation: "Mapped non-relational document representations of clinical patient chart records."
  },
  {
    name: "Redis",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="6" rx="1" /><rect x="3" y="15" width="18" height="6" rx="1" /><path d="M6 6h.01M6 18h.01M18 6h.01M18 18h.01" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" }
    ],
    explanation: "Used for session caching, token queue limits, and transient agent conversation states."
  },
  {
    name: "Firebase",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2L3.5 18.5h17L12 2z" /><path d="M12 2l3.5 16.5M12 2L8.5 18.5" /></svg>`,
    projects: [
      { title: "VeritasNet Live Indicators", projectId: "veritasnet" }
    ],
    explanation: "Used as a real-time data sync layer and websocket fallback for telemetry simulation."
  },
  {
    name: "Vector Databases",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><box x="3" y="3" width="7" height="7" rx="1" /><box x="14" y="3" width="7" height="7" rx="1" /><box x="3" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h4M6.5 10v4M14 17.5h-4" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" },
      { title: "Aarambam", projectId: "aarambam", github: "https://github.com/thekripaverse/Aarambam" }
    ],
    explanation: "Stored high-dimensional embeddings for fast semantic similarity search in RAG loops."
  },
  {
    name: "Pandas",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>`,
    projects: [
      { title: "ClinicalCopilot Data Prep", projectId: "clinicalcopilot" },
      { title: "SalesOS.ai Lead Parser", projectId: "salesos" }
    ],
    explanation: "Leveraged for tabular data cleaning, schema merges, and loading telemetry matrices."
  },
  {
    name: "NumPy",
    category: "Data & Backend",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></svg>`,
    projects: [
      { title: "Gesture Virtual Mouse", projectId: "vigyan" }
    ],
    explanation: "Used to compute Euclidean hand landmark distances and execute rapid multi-dimensional array shifts."
  },
  // DevOps & Tools
  {
    name: "Git & GitHub",
    category: "DevOps & Tools",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 15V9a4 4 0 0 0-4-4H9" /><line x1="6" y1="9" x2="6" y2="15" /></svg>`,
    projects: [
      { title: "SalesOS.ai", projectId: "salesos", github: "https://github.com/thekripaverse/SalesOS.ai" },
      { title: "ClinicalCopilot", projectId: "clinicalcopilot", github: "https://github.com/thekripaverse/ClinicalCopilot" },
      { title: "Aarambam", projectId: "aarambam", github: "https://github.com/thekripaverse/Aarambam" }
    ],
    explanation: "Leveraged version control pipelines and structured team repositories for iterative deployments."
  },
  {
    name: "Docker",
    category: "DevOps & Tools",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22 10.5v3a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 13.5v-3" /><path d="M4 10.5h14" /><rect x="5" y="6.5" width="2.5" height="2.5" /><rect x="9.5" y="6.5" width="2.5" height="2.5" /><rect x="14" y="6.5" width="2.5" height="2.5" /><rect x="9.5" y="2" width="2.5" height="2.5" /></svg>`,
    projects: [
      { title: "VeritasNet", projectId: "veritasnet", github: "https://github.com/thekripaverse/VeritasNet" }
    ],
    explanation: "Used to containerize backend services and deep learning inference modules for cloud hosting."
  },
  {
    name: "REST APIs",
    category: "DevOps & Tools",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M12 2v9M7 6l5-4 5 4" /></svg>`,
    projects: [
      { title: "SalesOS.ai integrations", projectId: "salesos" },
      { title: "Aarambam Gateways", projectId: "aarambam" }
    ],
    explanation: "Exposed and integrated standard JSON payloads between client apps and backend inference endpoints."
  },
  {
    name: "Java",
    category: "DevOps & Tools",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M6 22h12M12 18v-4M8 14h8V9a4 4 0 0 0-8 0v5zM12 2C8 2 6 5 6 9h12c0-4-2-7-6-7z" /></svg>`,
    projects: [
      { title: "Academic Systems", github: "https://github.com/thekripaverse" }
    ],
    explanation: "Utilized for core object-oriented structures and algorithmic training assignments."
  },
  {
    name: "C/C++",
    category: "DevOps & Tools",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18 10a6 6 0 1 0-12 4M12 12h8" /></svg>`,
    projects: [
      { title: "Academic Systems", github: "https://github.com/thekripaverse" }
    ],
    explanation: "Leveraged for low-level memory operations, data structures configurations, and hardware tests."
  }
];

export const softSkillsData: SoftSkill[] = [
  {
    name: "Teamwork",
    image: "/data/my-team.jpeg",
    description: "Developed during Smartathon 2.0. Six students had to coordinate under extreme pressure when our dewatering prototype failed at the 22nd hour. By partitioning tasks—code repair, visual dashboard configuration, and component fetching—we successfully presented our idea."
  },
  {
    name: "Leadership",
    image: "/data/conducting-events.jpeg",
    description: "Honed by conducting the 'Creative Caster (Prompt Wizard)' event at Dhruva 2025. Coordinated registration gates, established rules, guided participants, and managed administrative resources for placement teams."
  },
  {
    name: "Communication",
    image: "/data/orators-club.jpeg",
    description: "Polished via the Orators Club and presenting technical systems to judges, parents, and seniors at national R&D symposia. Focused on turning complex deep learning schemas into digestible explanations."
  },
  {
    name: "Problem Solving",
    image: "/data/always-brainstorming.jpeg",
    description: "Tested in intense hackathons when APIs would timeout, models would loop, or components would burn. Focuses on setting hard safeguard limits, rapid debugging, and iterative refinement."
  },
  {
    name: "Event Organization",
    image: "/data/dhruva1.jpeg",
    description: "Co-organized a two-day workshop on Image Processing & Deep Learning at Karpagam College of Engineering. Handled venue setup, resource speaker logistics, registration parameters, and hands-on session grids."
  },
  {
    name: "Collaboration",
    image: "/data/active-in-participation.jpeg",
    description: "Partnered in collaborative research groups at MulticoreWare R&D Symposium and MSME pitching review panels. Learned that ideas get exponentially better when challenged by domain experts."
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ai-by-her",
    title: "AI BY HER — INDIA AI IMPACT SUMMIT 2026",
    organization: "India AI Impact Summit 2026",
    year: "2026",
    placement: "TOP 1.5% GLOBALLY / TOP 150 FINALISTS",
    details: "Shortlisted for Aarambam: Multilingual Voice UPI assistant with built-in scam shields. Invited to New Delhi.",
    isSpecial: true,
    image: "/data/aibyher.jpeg",
    images: ["/data/aibyher.jpeg", "/data/love-to-travel (2).jpeg", "/data/Monisha-mentor.jpeg"],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  },
  {
    id: "dhruva",
    title: "DHRUVA PROMPT WIZARD",
    organization: "Karpagam College of Engineering",
    year: "2025",
    placement: "PROMPT WIZARD EVENT COORDINATOR",
    details: "Conducted the 'Creative Caster (Prompt Wizard)' event at Dhruva 2025, guiding participants in iterative prompt refinement.",
    isSpecial: true,
    image: "/data/dhruva1.jpeg",
    images: ["/data/dhruva1.jpeg", "/data/dhruva2.jpeg", "/data/dhruva3.jpeg"],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  },
  {
    id: "hcl-guvi",
    title: "HCL GUVI — AI IMPACT BUILDATHON 2026",
    organization: "HCL GUVI AI Impact Build Sprints",
    year: "2026",
    placement: "TOP 2% NATIONAL FINALIST (40,000+ PARTICIPANTS)",
    details: "VeritasNet deepfake voice detection pipeline presented to judges at Bharat Mandapam, New Delhi.",
    isSpecial: true,
    image: "/data/HCL-GUVI.jpeg",
    images: [
      "/data/HCL-GUVI.jpeg",
      travelPlaneImg,
      teamPosterImg,
      boardingPassImg,
      presentationScreenImg,
      certificateImg
    ],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  },
  {
    id: "leadership",
    title: "LEADERSHIP & EVENTS / WORKSHOPS",
    organization: "KCE AI Workshops & Coordination",
    year: "2024",
    placement: "CO-ORGANIZER / EVENT LEADERSHIP",
    details: "Co-organized a two-day workshop covering image processing, machine learning and deep learning sessions for peers.",
    isSpecial: true,
    image: "/data/conducting-events.jpeg",
    images: [
      "/data/conducting-events.jpeg",
      "/data/beyond-academics.jpeg",
      "/data/beyond-academics2.jpeg",
      "/data/GUIDE-SURENTHER-SIR.jpeg",
      "/data/image-workshop.jpeg",
      "/data/image-workshop2.jpeg"
    ],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  },
  {
    id: "smartathon",
    title: "SMARTATHON 2.0 — SOLAR DEWATERING TWIN",
    organization: "Smartathon 2.0 National Finals",
    year: "2026",
    placement: "SPECIAL PRIZE FOR INNOVATION / TOP 10",
    details: "Solar Mine Dewatering twin designed and developed under extreme time constraints. Awarded Special Prize for Innovation.",
    isSpecial: true,
    image: "/data/smartathon.jpeg",
    images: ["/data/smartathon.jpeg", "/data/SMARTATHON (2).jpeg"],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  },
  {
    id: "tnau",
    title: "TNAU — AGRITECH & VETTECH VISIT",
    organization: "Tamil Nadu Agricultural University",
    year: "2025",
    placement: "AGRITECH & VETTECH ON-SITE TRAINING",
    details: "Explored the integration of AI in agriculture and veterinary sciences at TNAU research zones.",
    isSpecial: true,
    image: "/data/TNAU.jpeg",
    images: ["/data/TNAU.jpeg", "/data/TNAU2.jpeg", "/data/TNAU3.jpeg"],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  },
  {
    id: "vigyan",
    title: "VIGYAN 2025 — GESTURE VIRTUAL MOUSE",
    organization: "Vigyan 2025 Project Expo",
    year: "2025",
    placement: "VIRTUAL HAND GESTURE MOUSE SHOWCASE",
    details: "Gesture-based virtual hand mouse system utilizing computer vision for natural human-computer interaction.",
    isSpecial: true,
    image: "/data/VIGYAN1.jpeg",
    images: ["/data/VIGYAN1.jpeg", "/data/VIGYAN2.jpeg"],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  },
  {
    id: "kit",
    title: "MSME PITCH — IDEA HACKATHON 5.0",
    organization: "Karpagam Innovation Centre (KIC)",
    year: "2025",
    placement: "MSME IDEA PITCH & REVIEW PROCESS",
    details: "Pitched innovative solution to MSME panels, refining assumptions and incorporating expert guidance into building systems.",
    isSpecial: true,
    image: "/data/msmehackathon.jpeg",
    images: ["/data/msmehackathon.jpeg"],
    linkedin: "https://www.linkedin.com/in/kripa-sree-m/"
  }
];

export const aiByHerStory = {
  title: "AI BY HER — INDIA AI IMPACT SUMMIT 2026",
  year: "2026",
  achievement: "TOP 1.5% GLOBALLY / TOP 150 FINALISTS",
  metadata: {
    participants: "TEAM ASTRACHIP",
    location: "SUSHMA SWARAJ BHAWAN, NEW DELHI",
    date: "2026"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "FROM VISION TO GLOBAL VALIDATION",
      text: "Our student team made history at the AI BY HER – India AI Impact Summit 2026, standing among the World’s Top 1.5% at the AI by HER – Global Impact Challenge. Out of 8,500+ teams worldwide, we emerged as one of the Top 150 Finalists.",
      image: "/data/aibyher.jpeg",
      imageCaption: "AI BY HER GLOBAL CAMPAIGN"
    },
    {
      id: 2,
      chapterNumber: "02",
      headline: "THE ONLY STUDENT TEAM",
      text: "We proudly represented as the only student team in the finals at Sushma Swaraj Bhawan, New Delhi. It was a proud moment of women-led AI innovation, global recognition, and a milestone powered by inclusion, mentorship, and investor-backed opportunities.\n\nThis is not just participation.\nThis is impact.",
      image: "/data/love-to-travel (2).jpeg",
      imageCaption: "SUSHMASWARAJ BHAWAN, NEW DELHI"
    },
    {
      id: 3,
      chapterNumber: "03",
      headline: "POWERED BY MENTORSHIP",
      text: "None of this would have been possible without our dedicated mentors who guided us through the global challenge rounds, offering support, belief, and strategic insights.",
      image: "/data/Monisha-mentor.jpeg",
      imageCaption: "MENTOR DR. MONISHA RAGUNATHAN"
    }
  ]
};

export const dhruvaStory = {
  title: "DHRUVA — CREATIVE CASTER (PROMPT WIZARD)",
  year: "2025",
  achievement: "PROMPT WIZARD EVENT COORDINATOR",
  metadata: {
    participants: "MADHU RITHIKA, KRIPASREE",
    location: "KARPAGAM COLLEGE OF ENGINEERING",
    date: "2025"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "EXPLORING THE WORLD OF AI PROMPTING",
      text: "I successfully conducted the \"Creative Caster (Prompt Wizard)\" event at Dhruva 2025, alongside my amazing teammate Madhu Rithika. Under the guidance of our dedicated mentor, Navaneetha Krishnan Sir, and with valuable ideas from Surenther Sir, we designed a challenge to push the boundaries of imagination and technical skills.",
      image: "/data/dhruva1.jpeg",
      imageCaption: "DHRUVA FEST EVENT SETUP"
    },
    {
      id: 2,
      chapterNumber: "02",
      headline: "CREATIVE VS TECHNICAL PRECISION",
      text: "Participants were tasked with analyzing topics and crafting compelling AI-generated images using prompt engineering techniques. It was fascinating to see how each participant approached the task differently—some focused on artistic creativity, while others emphasized technical precision, ensuring the AI-generated images were as close to reality as possible.",
      image: "/data/dhruva2.jpeg",
      imageCaption: "AI PROMPTING SESSIONS & LAB SCREENINGS"
    },
    {
      id: 3,
      chapterNumber: "03",
      headline: "ITERATIVE PROMPT REFINEMENT",
      text: "Throughout preparation and execution, I gained in-depth knowledge about how different wording structures, levels of detail, and creative approaches affect generative output. I learned the importance of iterative refinement—adjusting and tweaking prompts to get closer to the desired output. Organizing this required intense coordination, problem-solving, and quick decision-making.",
      image: "/data/dhruva3.jpeg",
      imageCaption: "PRESENTING CERTIFICATES TO EVENT WINNERS"
    }
  ]
};

export const hclGuviStory = {
  title: "HCL GUVI — AI Impact Buildathon 2026",
  year: "2026",
  achievement: "TOP 2% NATIONAL FINALIST",
  metadata: {
    participants: "TEAM ASTRACHIP",
    location: "BHARAT MANDAPAM, NEW DELHI",
    date: "16.02.2026"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "SOME STORIES DON'T START WITH CONFIDENCE.",
      text: "Some stories don’t start with confidence or clarity. An ordinary day, with ordinary people, and a tiny decision that later turns into a lifetime memory. Me and my two friends registered for 2 events just like that. We simply wanted to try.",
      image: "/data/HCL-GUVI.jpeg",
      imageCaption: "TEAM ASTRACHIP GRAND FINALE CEREMONY"
    },
    {
      id: 2,
      chapterNumber: "02",
      headline: "WE SIMPLY WANTED TO TRY.",
      text: "This journey began on a random day. It was me and my two friends. We registered for 2 events just like that. We simply wanted to try. We booked our flights to Delhi. We weren't chasing wins. We just wanted to experience something bigger than ourselves.",
      image: travelPlaneImg,
      imageCaption: "EN ROUTE / NEW DELHI / COIMBATORE DEPARTURE"
    },
    {
      id: 3,
      chapterNumber: "03",
      headline: "TOP 2% NATIONWIDE",
      text: "An email popped up in our inboxes. Out of over 40,000 students and builders nationwide, our project VeritasNet stood in the Top 2%. The results of the buildathon sprints were in. That moment… I don’t even have words. I felt like I was flying. Like all the sleepless nights, self-doubt, and quiet efforts were finally being acknowledged.",
      image: boardingPassImg,
      imageCaption: "BHARAT MANDAPAM INVITATION"
    },
    {
      id: 4,
      chapterNumber: "04",
      headline: "THEN CAME DELHI",
      text: "Then came Delhi. More than a city, it became a turning point. We met people. Built connections. Explored powerful ideas and projects. And somewhere in between all those conversations and startup showcases, we felt something beautiful—that realization: 'We already know this. We’ve already worked on things like this. We are not behind.'",
      image: presentationScreenImg,
      imageCaption: "STAGE VIEW / BHARAT MANDAPAM / PRESENTATION SCREEN"
    },
    {
      id: 5,
      chapterNumber: "05",
      headline: "WE DIDN'T WIN A TROPHY.",
      text: "We didn’t win a trophy. But we walked back with something far more valuable. Pride in how far we’ve come. Pride in the path we’re walking. Pride in the people who walked with us. Standing in Bharat Mandapam, seeing our code on the big screens. It was the first biggest milestone of my journey.",
      image: certificateImg,
      imageCaption: "CERTIFICATE OF MERIT — TOP 2% NATIONAL FINALIST"
    },
    {
      id: 6,
      chapterNumber: "06",
      headline: "OUR PILLARS OF STRENGTH",
      text: "My deepest gratitude to Monisha ma’am, for being more than a mentor — for being a constant source of care, belief, and strength. I’m also deeply grateful to our college management and placement team. And to my teammates Madhu Rithika, Raj Moorthy, and Girikannan — thank you for standing beside me, always.",
      image: teamPosterImg,
      imageCaption: "TEAM ASTRACHIP GRAND FINALE CEREMONY"
    }
  ]
};

export const leadershipStory = {
  title: "LEADERSHIP & EVENTS / WORKSHOPS",
  year: "2024",
  achievement: "CO-ORGANIZER / EVENT LEADERSHIP",
  metadata: {
    participants: "CO-ORGANIZER / COORDINATOR",
    location: "COIMBATORE",
    date: "2024"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "LED MY FIRST WORKSHOP",
      text: "I co-organize my first-ever workshop @KCE!! This two-day workshop (16th & 17th Oct 2024) was an exciting dive into the basics of Image Processing, Deep Learning, and a touch of ML.",
      image: "/data/conducting-events.jpeg",
      imageCaption: "CONDUCTING THE WORKSHOP EVENTS"
    },
    {
      id: 2,
      chapterNumber: "02",
      headline: "HANDS-ON DEEP LEARNING",
      text: "The hands-on sessions were a highlight—processing images and predicting outcomes based on input was not only fun but also deeply insightful. What truly made this experience unforgettable was the chance to Lead and Collaborate with my peers, gaining practical knowledge and fostering teamwork.",
      image: "/data/image-workshop.jpeg",
      imageCaption: "HANDS-ON WORKSHOP DELEGATE SESSIONS"
    },
    {
      id: 3,
      chapterNumber: "03",
      headline: "RESOURCE PERSON COLLABORATION",
      text: "The workshop was made even more impactful thanks to the resource person Mohammed Harun Babu R, who brought impressive Expertise, Experience and Knowledge to the table. His guidance made the learning journey truly valuable and inspiring.",
      image: "/data/image-workshop2.jpeg",
      imageCaption: "MOHAMMED HARUN BABU R PRESENTATION"
    },
    {
      id: 4,
      chapterNumber: "04",
      headline: "STEADY DIRECTION & MENTORSHIP",
      text: "Throughout our planning and organizational phases, Dr. Surenther sir stood as a steady guide, sharing strategies on event coordination, promotion, and execution layout, which greatly contributed to the success of our events.",
      image: "/data/GUIDE-SURENTHER-SIR.jpeg",
      imageCaption: "DR. SURENTHER SIR MENTORSHIP SESSION"
    },
    {
      id: 5,
      chapterNumber: "05",
      headline: "BEYOND ACADEMICS",
      text: "Embracing event leadership taught me that building software is only half the battle. Organizing, presenting, coordinating, and collaborating with mentors is what bridges the gap between raw code and actual real-world impact.",
      image: "/data/beyond-academics.jpeg",
      imageCaption: "TEAM ACADEMIC OUTREACH MEETINGS"
    },
    {
      id: 6,
      chapterNumber: "06",
      headline: "COLLABORATIVE PRESENTATION",
      text: "Coordination, quick decision making under pressure, and peer guidance have inspired me to embrace more leadership roles in the future, applying these insights in my upcoming projects.",
      image: "/data/beyond-academics2.jpeg",
      imageCaption: "ORGANIZATIONAL RECONCILIATIONS"
    }
  ]
};

export const smartathonStory = {
  title: "SMARTATHON 2.0 — SOLAR DEWATERING TWIN",
  year: "2026",
  achievement: "SPECIAL INNOVATION PRIZE",
  metadata: {
    participants: "TEAM ASTRACHIP",
    location: "CHENNAI",
    date: "2026"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "WHAT STARTED AS CHAOS",
      text: "We were a team of 6, heading to Smartathon 2.0 with barely any time to prepare. Between our hectic schedules and organizing a hackathon for our own college fest, building a strong prototype felt almost impossible. Still, we packed whatever components we had and headed to Chennai with hope. The moment we stepped in and saw other teams with massive, polished prototypes… we lost confidence instantly.",
      image: "/data/smartathon.jpeg",
      imageCaption: "TEAM AT SMARTATHON 2.0 ARRIVAL"
    },
    {
      id: 2,
      chapterNumber: "02",
      headline: "SPECIAL INNOVATION AWARD",
      text: "Our dewatering solar pump demo failed at the last minute, and other teams had polished modular setups. But our mentor Dr. Monisha ma'am reminded us: 'If your idea is strong, it will stand out.' We ran around, borrowed components, fixed things in a rush... and made it work. We walked out with the Special Prize for Innovation, which meant everything to us. None of this would've been possible without Madhu Rithika R K, Kripasree Mohanraj, Preethi Vigneswaran, Nandita Shree, and RAJ MOORTHY B.",
      image: "/data/SMARTATHON (2).jpeg",
      imageCaption: "TEAM WINNING SPECIAL PRIZE FOR INNOVATION"
    }
  ]
};

export const tnauStory = {
  title: "TNAU — AGRITECH & VETTECH VISIT",
  year: "2025",
  achievement: "PROJECT ON-SITE TRAINING",
  metadata: {
    participants: "TRAINING TEAM",
    location: "TAMIL NADU AGRICULTURAL UNIVERSITY",
    date: "2025"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "GLIMPSE INTO AGRITECH & VETTECH",
      text: "I had the incredible opportunity to visit Tamil Nadu Agricultural University (TNAU) as part of our project training, and it was nothing short of inspiring! We explored agricultural research zones where a wide variety of crops are cultivated purely for research and development.",
      image: "/data/TNAU.jpeg",
      imageCaption: "TNAU EXPERIMENTAL CROPS FIELD VISIT"
    },
    {
      id: 2,
      chapterNumber: "02",
      headline: "EXPERIMENTAL FARMING TECHNIQUES",
      text: "Visiting the Department of Agronomy gave us hands-on exposure to experimental farming techniques and sustainable crop management practices. It bridged the gap between classroom learning and real-world impact.",
      image: "/data/TNAU2.jpeg",
      imageCaption: "AGRONOMY EXPERIMENTAL INFRASTRUCTURE"
    },
    {
      id: 3,
      chapterNumber: "03",
      headline: "INTEGRATING AI IN LIVESTOCK HEALTH",
      text: "What truly amazed us was the integration of AI in agriculture and veterinary sciences! From poultry monitoring to livestock health tracking, we met domain experts and observed cattle, goats, and sheep, sparking our ambition to explore innovative VetTech and AgriTech solutions.",
      image: "/data/TNAU3.jpeg",
      imageCaption: "LIVESTOCK VETERINARY RESEARCH CENTRES"
    }
  ]
};

export const vigyanStory = {
  title: "VIGYAN 2025 — GESTURE VIRTUAL MOUSE",
  year: "2025",
  achievement: "PROJECT EXPO SHOWCASE",
  metadata: {
    participants: "MADHU RITHIKA, KRIPASREE",
    location: "VIGYAN EXPO",
    date: "2025"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "THREE-DAY PROJECT EXPO",
      text: "I had the wonderful opportunity to participate in the 3-day Project Expo – Vigyan 2025, where I, along with my teammate Madhu Rithika R K, showcased our project \"Gesture-Based System (Virtual Hand Gesture Mouse)\". Our project aimed at exploring how human-computer interaction can move beyond traditional devices.",
      image: "/data/VIGYAN1.jpeg",
      imageCaption: "GESTURE MOUSE SYSTEM SETUP"
    },
    {
      id: 2,
      chapterNumber: "02",
      headline: "HUMAN-COMPUTER INTERACTION",
      text: "Our project aimed at exploring how human-computer interaction can move beyond traditional devices like the mouse and keyboard, making technology more natural, accessible, and intuitive. Presenting it to freshers, parents, faculty, and peers was fulfilling, and we learned immensely from our seniors, gaining insights into how projects can evolve with visual-technical depth.",
      image: "/data/VIGYAN2.jpeg",
      imageCaption: "LIVE DEMO TO PEERS AND SENIORS"
    }
  ]
};

export const kitStory = {
  title: "MSME PITCH — IDEA HACKATHON 5.0",
  year: "2025",
  achievement: "MSME IDEA PITCH & REVIEW",
  metadata: {
    participants: "MADHU, KRIPASREE, RAJ",
    location: "KARPAGAM INNOVATION CENTRE (KIC)",
    date: "2025"
  },
  chapters: [
    {
      id: 1,
      chapterNumber: "01",
      headline: "MSME IDEA PITCH & REVIEW PROCESS",
      text: "As a team, myself, Madhu Rithika R K and RAJ MOORTHY B had the incredible opportunity to pitch our idea at the MSME IDEA HACKATHON 5.0 – Review Process held at Karpagam Innovation Centre (KIC), Karpagam College of Engineering. We defended our design, commercial viability, and scalability before a panel of experts, receiving valuable feedback and insights that guided our innovation and entrepreneurship journey.",
      image: "/data/msmehackathon.jpeg",
      imageCaption: "MSME REVIEW PITCH PANEL"
    }
  ]
};

export const storiesData: Record<string, typeof hclGuviStory> = {
  "ai-by-her": aiByHerStory,
  "dhruva": dhruvaStory,
  "hcl-guvi": hclGuviStory,
  "leadership": leadershipStory,
  "smartathon": smartathonStory,
  "tnau": tnauStory,
  "vigyan": vigyanStory,
  "kit": kitStory
};

export const fieldNotesData = []; // Blanked out since Field Notes has been removed
