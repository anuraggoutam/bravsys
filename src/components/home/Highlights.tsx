
'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Award, Building, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Highlights = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: TrendingUp,
      title: "Consistent growth in 20+ years in business",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Ranked 10 consecutive years on Inc. Magazine's list of the Top 50 SF Bay Area IT companies",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      title: "Recognized by the Business Journal as one of Silicon Valley's fastest-growing private companies",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "We've served customers across six continents",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our achievements and milestones that demonstrate our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className={`transform transition-all duration-700 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-xs shadow-lg ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms' 
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${highlight.color} flex items-center justify-center shadow-lg shrink-0`}>
                    <highlight.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {highlight.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;