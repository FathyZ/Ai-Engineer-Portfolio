export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  featured: boolean;
  imagePaths: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "voice-agent-eslsca",
    title: "Neural Voice Orchestrator",
    category: "Voice AI / RAG",
    tech: ["GPT-4", "Pinecone", "Flask", "Python"],
    description:
      "A real-time voice intelligence system for ESLSCA University. Features a low-latency RAG pipeline for lead qualification and automated campus tour scheduling.",
    featured: true,
    imagePaths: [
      "./src/assets/images/VoiceAgent1.png",
      "./src/assets/images/VoiceAgent2.png",
    ],
  },
  {
    id: "yoga-ai-agent",
    title: "Action-Oriented AI Agent",
    category: "Agentic Workflows",
    tech: ["GPT-4", "Flask", "REST API", "PostgreSQL"],
    description:
      "Autonomous agent for a Yoga Center capable of database introspection. Performs real-time reservations, class availability checks, and order processing via structured tool-calling.",
    featured: true,
    imagePaths: [
      "./src/assets/images/Yoga1.png",
      "./src/assets/images/Yoga2.png",
      "./src/assets/images/Yoga3.png",
    ],
  },
  {
    id: "university-assistant-web",
    title: "AI University Assistant",
    category: "RAG / Automation",
    tech: ["n8n", "GPT-4", "Pinecone", "Google Sheets"],
    description:
      "Web-based lead qualification agent utilizing RAG for prospective student inquiries. Automated lead logging and email confirmation workflows.",
    featured: false,
    imagePaths: [
      "./src/assets/images/N8N-1.png",
      "./src/assets/images/N8N-2.png",
      "./src/assets/images/N8N-3.png",
    ],
  },
];
