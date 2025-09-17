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

const DigitalMarketingSection = () => {
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
    <section className="py-20 bg-linear-to-br from-indigo-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-linear-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-linear-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Digital Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
            Digital Marketing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to accelerate your growth and maximize your online presence with measurable results
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`service-card h-full transform transition-all duration-700 hover:-translate-y-3 hover:scale-105 ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-6 relative z-10">
                <div className={`service-icon bg-linear-to-r ${service.color} shadow-glow`}>
                  <service.icon size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-all duration-300">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-xs rounded-3xl p-12 shadow-elegant border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Dominate Digital?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Transform your digital presence with our proven marketing strategies and data-driven approaches.
            </p>
            <Button 
              size="lg" 
              className="bg-linear-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground px-12 py-4 rounded-2xl shadow-glow hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              Start Your Digital Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;