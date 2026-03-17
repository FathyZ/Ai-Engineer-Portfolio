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
    tech: ["GPT-4", "Pinecone", "Flask", "Python", "Twilio", "Deepgram"],
    description: "A real-time voice intelligence system for ESLSCA University. Features a low-latency RAG pipeline for lead qualification and automated campus tour scheduling.",
    featured: true,
    year: "2026",
    imagePaths: [voiceagentimg1, voiceagentimg2],
    challenge: "Managing state and context window limits during long voice conversations while maintaining sub-second response times for a natural 'human' feel.",
    execution: "Developed a custom buffering layer in Flask to handle stream-to-text conversion via Deepgram, coupled with a Pinecone-backed RAG to inject university specific data on the fly.",
    result: "Achieved an average latency of 800ms per response and successfully automated 60% of initial lead qualification calls without human intervention."
  },
  {
    id: "yoga-ai-agent",
    title: "Action-Oriented AI Agent",
    category: "Agentic Workflows",
    tech: ["GPT-4", "Flask", "PostgreSQL", "OpenAI Functions", "SQLAlchemy"],
    description: "Autonomous agent for a Yoga Center capable of database introspection. Performs real-time reservations, class availability checks, and order processing via structured tool-calling.",
    featured: true,
    year: "2025",
    imagePaths: [yoga1, yoga2, yoga3],
    challenge: "Safely allowing an LLM to query and write to a production SQL database without the risk of prompt injection or corrupted transactions.",
    execution: "Built a 'Schema-Aware' middleware that validates LLM-generated tool calls against a strict Pydantic model before executing SQLAlchemy operations on the database.",
    result: "Enabled 24/7 autonomous booking capabilities with a 99.2% accuracy rate in tool-calling, eliminating manual data entry for the administrative staff."
  },
  {
    id: "university-assistant-web",
    title: "AI University Assistant",
    category: "RAG / Automation",
    tech: ["n8n", "GPT-4", "Pinecone", "Google Sheets", "Typeform"],
    description: "Web-based lead qualification agent utilizing RAG for prospective student inquiries. Automated lead logging and email confirmation workflows.",
    featured: false,
    year: "2026",
    imagePaths: [n8n1, n8n2, n8n3],
    challenge: "Connecting fragmented tools (Typeform, Gmail, Sheets) into a unified intelligence layer that could provide personalized answers to complex student questions.",
    execution: "Engineered a multi-stage n8n workflow that triggers on form submission, pulls context from a vector DB, and dynamically generates personalized follow-up emails.",
    result: "Reduced lead response time from 24 hours to 15 seconds, resulting in a significant increase in lead-to-tour conversion rates."
  }
];