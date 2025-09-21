'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Eco Marketplace Redesign',
    category: 'E-commerce',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description:
      'A complete redesign of an eco-friendly marketplace that increased conversions by 45%.',
  },
  {
    id: 2,
    title: 'Finance Dashboard App',
    category: 'Web App',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description:
      'Interactive finance dashboard with real-time data visualization.',
  },
  {
    id: 3,
    title: 'Luxury Resort Website',
    category: 'Hospitality',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description:
      'Responsive website for a luxury resort with booking functionality.',
  },
  {
    id: 4,
    title: 'Health & Fitness App',
    category: 'Mobile App',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description:
      'Mobile application for fitness tracking with personalized workout plans.',
  },
  {
    id: 5,
    title: 'Corporate Branding',
    category: 'Branding',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description: 'Complete branding package for a technology startup.',
  },
  {
    id: 6,
    title: 'E-learning Platform',
    category: 'Web App',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description:
      'Educational platform with course management and student tracking.',
  },
];

const categories = [
  'All',
  'E-commerce',
  'Web App',
  'Mobile App',
  'Branding',
  'Hospitality',
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects.slice(0, 3) // Only show first 3 projects on homepage
      : projects
          .filter((project) => project.category === activeCategory)
          .slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Our <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-xl text-gray-600">
            Check out some of our recent projects that showcase our expertise
            and creativity.
          </p>
        </div>

        <div className="hidden md:flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                activeCategory === category ? 'default' : 'outline-solid'
              }
              className={activeCategory === category ? 'gradient-bg' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="md:hidden mb-8">
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <span className="text-sm font-medium mb-2 inline-block px-3 py-1 rounded-full bg-brand-purple/80">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="text-brand-purple font-medium inline-flex items-center group-hover:underline"
                >
                  View Case Study{' '}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="gradient-bg hover:opacity-90 transition-opacity"
          >
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
