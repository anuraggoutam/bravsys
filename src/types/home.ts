import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface TechPartner {
  name: string;
  description: string;
  logoSrc: string;
  alt: string;
}

export interface HeroStatsProps {
  stats: StatItem[];
  className?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  isVisible: boolean;
  delay: number;
}

export interface TechPartnerCardProps {
  name: string;
  description: string;
  logoSrc: string;
  alt: string;
}