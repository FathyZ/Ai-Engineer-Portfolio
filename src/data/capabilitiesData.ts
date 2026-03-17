import type { Capability } from "../types";
import { Brain } from 'lucide-react';
import { Database } from 'lucide-react';
import { BotMessageSquare } from 'lucide-react';
import { SiPython, SiFlask, SiOpenai, SiPostgresql, SiN8N, SiLangchain } from "react-icons/si";

export const CAPABILITIES: Capability[] = [
  {
    title: "AI & Intelligence",
    skills: ["RAG Architectures", "LLM Fine-tuning"],
    icon: "01",
    IconComponent: Brain,
    technologies:[SiOpenai,SiLangchain,SiPython]
  },
  {
    title: "Backend Systems",
    skills: ["Flask / FastAPI", "PostgreSQL"],
    icon: "02",
    IconComponent: Database,
    technologies:[SiFlask,SiPostgresql]
  },
  {
    title: "Agentic Workflows",
    skills: ["Autonomous Agents", "n8n Automation", "API Design"],
    icon: "03",
    IconComponent: BotMessageSquare,
    technologies:[SiN8N]
  }
];