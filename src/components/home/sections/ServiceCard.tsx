import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { ServiceCardProps } from '@/types/home';

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  isVisible,
  delay
}) => {
  return (
    <Card 
      className={`border-0 bg-white/80 backdrop-blur-xs hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group h-full transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } hover:-translate-y-3 hover:scale-105`}
      style={{ 
        transitionDelay: isVisible ? '0ms' : `${delay}ms` 
      }}
    >
      <CardHeader className="pb-6">
        <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-linear-to-r ${color} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <Icon size={28} />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 leading-relaxed text-base mb-6">
          {description}
        </CardDescription>
        <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
          Learn more <ArrowRight size={16} className="ml-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;