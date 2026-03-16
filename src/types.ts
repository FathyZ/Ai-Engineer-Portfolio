
export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  featured: boolean;
  imagePaths: string[];
}


export interface Capability {
  title: string;
  skills: string[];
  icon: string;
}