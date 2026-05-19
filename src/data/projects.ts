// Centralized project data loader — reads from /src/data/projects/*.json
// To add/edit a project: just modify or add a JSON file in that folder.

import endgit from "@/data/projects/endgit.json";
import siteDrift from "@/data/projects/site-drift.json";

export interface TechItem {
  name: string;
  category: string;
}

export interface ProjectLinks {
  live: string | null;
  github: string | null;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  status: string;
  date: string;
  tags: string[];
  color: string;
  icon?: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: TechItem[];
  highlights: string[];
  links: ProjectLinks;
}

// Register all projects here — order controls display order
export const projects: Project[] = [
  endgit as Project,
  siteDrift as Project,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
