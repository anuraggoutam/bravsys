
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import ServiceCard from './sections/ServiceCard';
import { services } from '@/constants/homeData';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(services.length, 150);

  return (
    <section className="py-24 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-linear-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
            <span className="text-sm font-medium text-blue-700">Our Expertise</span>
          </div>
          <h2 className="text-5xl font-bold mb-8 text-gray-900">What we do</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We provide comprehensive digital solutions to help businesses innovate and thrive in the modern landscape. Our expertise spans across cutting-edge technologies and proven methodologies.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              isVisible={visibleItems.includes(index)}
              delay={index * 150}
            />
          ))}
        </div>

        <div className="text-center mt-20">
          <Button asChild className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
