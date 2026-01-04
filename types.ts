
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
  github?: string;
  category?: string;
}

export interface AppProject extends Project {
  platform: 'Android' | 'iOS' | 'Cross-Platform';
  features: string[];
}

export interface GraphicProject extends Project {
  medium: string;
}

export interface WebProject extends Project {
  techStack: string[];
  role: 'Frontend' | 'Backend' | 'Full Stack';
}

export interface Skill {
  name: string;
  icon: string;
  level: string;
}
