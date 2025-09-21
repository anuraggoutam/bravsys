'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Droisys transformed our digital infrastructure with their AI-powered solutions. The results exceeded our expectations, delivering 40% improvement in operational efficiency.',
    name: 'Sarah Johnson',
    title: 'CTO',
    company: 'TechCorp Industries',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 2,
    quote:
      'Their consultative approach and deep industry expertise helped us navigate complex digital transformation challenges. Outstanding results delivered on time.',
    name: 'Michael Chen',
    title: 'VP of Digital Strategy',
    company: 'Global Finance Corp',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    quote:
      'The web applications developed by Droisys have revolutionized our business operations. We now have faster, more efficient digital processes.',
    name: 'Amanda Rodriguez',
    title: 'Head of Analytics',
    company: 'Innovation Labs',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how we've helped organizations across industries achieve
            measurable results through innovative technology solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="animate-fade-in">
              <Card className="border-0 bg-white shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center">
                      <div className="relative">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 96px, 128px"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <Quote size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                        "{testimonials[activeIndex].quote}"
                      </p>
                      <h4 className="text-xl font-bold mb-1 text-gray-900">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[activeIndex].title},{' '}
                        {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-xl transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-xl transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
