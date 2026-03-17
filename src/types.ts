import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  featured: boolean;
  imagePaths: string[];
  year: string; 
  challenge: string;
  execution: string;
  result: string;
}


export interface Capability {
  title: string;
  skills: string[];
  icon: string;
  IconComponent: LucideIcon;
  technologies:IconType[];
}