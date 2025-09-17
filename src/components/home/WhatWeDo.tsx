import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Share2, 
  BarChart3, 
  Target, 
  Mail, 
  Smartphone,
  ArrowRight 
} from 'lucide-react';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const WhatWeDo = () => {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies tailored to your business goals.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social media platforms with targeted campaigns.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Digital Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting to optimize your digital marketing performance.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Pay-Per-Click Advertising",
      description: "Maximize ROI with strategic PPC campaigns across Google Ads, Facebook, and other advertising platforms.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that drive engagement and conversions.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Reach customers on-the-go with mobile-optimized campaigns and app marketing strategies for maximum engagement.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const { ref, visibleItems } = useStaggeredAnimation(services.length, 150);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions to grow your business and reach your target audience effectively
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`border-0 bg-white hover:bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full transform ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } hover:-translate-y-2`}
            >
              <CardHeader className="pb-6">
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-linear-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Digital Marketing Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;