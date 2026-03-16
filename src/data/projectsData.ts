import voiceagentimg1 from "../assets/images/VoiceAgent1.png";
import voiceagentimg2 from "../assets/images/VoiceAgent2.png";
import yoga1 from "../assets/images/Yoga1.png";
import yoga2 from "../assets/images/Yoga2.png";
import yoga3 from "../assets/images/Yoga3.png";
import n8n1 from "../assets/images/N8N-1.png";
import n8n2 from "../assets/images/N8N-2.png";
import n8n3 from "../assets/images/N8N-3.png";

import type { Project } from "../types.ts";


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
      voiceagentimg1,
      voiceagentimg2,
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
      yoga1,
      yoga2,
      yoga3,
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
      n8n1,
      n8n2,
      n8n3,
    ],
  },
];
