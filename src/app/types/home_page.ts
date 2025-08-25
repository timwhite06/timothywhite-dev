import { ReactElement, ReactNode } from "react";

export interface SkillCardProps {
  title: string;
  experienceStartYear: number;
  experienceEndYear?: number;
  icon: ReactElement | string;
  link: string;
  children: ReactNode;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  type: string;
  description: ReactNode;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  dateRange: string;
  description: ReactNode;
  grades?: string[];
}

export interface UXFavorite {
  id: string;
  category: string;
  item: string;
  description: string;
  badgeClass: string;
}
