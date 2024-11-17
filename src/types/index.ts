export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SkillsData {
  programming: string[];
  frameworks: string[];
  devops: string[];
  databases: string[];
}

// src/types/index.ts

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  relationship: RelationshipType;
  text: string;
  date: string;
  linkedinUrl?: string;
  isPublic?: boolean;
}

export type RelationshipType =
  | "Was Jinal's mentor"
  | "Worked together on the same team"
  | "Was senior to Jinal but didn't manage directly"
  | "Managed Jinal directly";
