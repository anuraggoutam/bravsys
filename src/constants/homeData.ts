import {
  Cpu,
  Database,
  Globe,
  Users,
  Code,
  BarChart,
  BarChart3,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { StatItem, Service, TechPartner } from '@/types/home';

export const heroStats: StatItem[] = [
  { value: '10+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
];

export const services: Service[] = [
  {
    title: 'Digital Transformation',
    description:
      'Let us drive your digital transformation, whether modernizing legacy systems or creating new platforms. We deliver end-to-end solutions that improve efficiency, reduce costs, and accelerate growth.',
    icon: Globe,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Leverage AI and ML to make smarter decisions and unlock new revenue streams. Our advanced web app development, machine learning models, and automation solutions empower your business to personalize customer experiences and optimize operations.',
    icon: Cpu,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Data Annotation for AI',
    description:
      'Power your AI initiatives with high-quality data. Our data annotation services ensure your machine learning models are trained with accurate, detailed data, improving AI performance and decision-making.',
    icon: Database,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Consultative Approach',
    description:
      'Partner with us for customized, results-driven solutions. Our consultative approach ensures that we tailor technology to fit your unique challenges, driving measurable business outcomes from day one.',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Hybrid Global Teams',
    description:
      'Our flexible on-site, onshore, and offshore teams deliver projects faster. We combine global expertise with local efficiency to tackle your most complex projects, ensuring high-quality delivery every time.',
    icon: Code,
    color: 'from-teal-500 to-teal-600',
  },
  {
    title: 'Industry Expertise',
    description:
      'With over two decades of experience across high-tech, fintech, healthcare, pharma, and government, we understand your challenges and how to turn them into growth opportunities.',
    icon: BarChart,
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Digital Marketing',
    description:
      'Boost your online presence with comprehensive SEO, social media marketing, PPC campaigns, and data-driven strategies that drive engagement and conversions.',
    icon: BarChart3,
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Web App Development',
    description:
      'Build scalable, responsive web applications using modern technologies. From single-page applications to complex enterprise platforms, we deliver high-performance solutions that meet your business needs.',
    icon: Monitor,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Mobile App Development',
    description:
      'Create engaging native and cross-platform mobile applications for iOS and Android. Our mobile solutions combine intuitive design with robust functionality to deliver exceptional user experiences.',
    icon: Smartphone,
    color: 'from-cyan-500 to-cyan-600',
  },
];

export const techPartners: TechPartner[] = [
  {
    name: 'Microsoft Azure',
    description: 'Cloud Computing Platform',
    logoSrc: '/lovable-uploads/4c85a257-8138-403c-91c0-714b18d0459d.png',
    alt: 'Microsoft Azure',
  },
  {
    name: 'Amazon AWS',
    description: 'Web Services Platform',
    logoSrc: '/lovable-uploads/bb3572ce-4e00-47f9-a5da-3e6a7d09620e.png',
    alt: 'Amazon AWS',
  },
  {
    name: 'Google Cloud',
    description: 'Cloud Infrastructure',
    logoSrc: '/lovable-uploads/007a5820-08ec-433e-8764-39ac19aef57a.png',
    alt: 'Google Cloud',
  },
  {
    name: 'Oracle',
    description: 'Database Solutions',
    logoSrc: '/lovable-uploads/ee1642a6-5a74-40f0-a116-3558d772e0db.png',
    alt: 'Oracle',
  },
];

export const aiPlatforms: TechPartner[] = [
  {
    name: 'OpenAI',
    description: 'AI & Machine Learning',
    logoSrc: '/lovable-uploads/91e97893-9aa6-41d6-8601-c5bb6d5da066.png',
    alt: 'OpenAI',
  },
  {
    name: 'TensorFlow',
    description: 'ML Framework',
    logoSrc: '/lovable-uploads/1b553577-92be-4cd7-bcef-132612699917.png',
    alt: 'TensorFlow',
  },
  {
    name: 'PyTorch',
    description: 'Deep Learning Platform',
    logoSrc: '/lovable-uploads/0322b9c0-6d7e-4720-9c36-6924bc881048.png',
    alt: 'PyTorch',
  },
];
