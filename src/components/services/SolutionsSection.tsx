"use client"
import React from 'react';
import { Cpu, Database, Globe, Users, Code, ArrowRight, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    id: 'consulting-innovation',
    title: 'Consulting & Innovation',
    description: 'Stay ahead of industry trends with our innovation-focused consulting services. We guide you toward sustainable growth, helping you leverage technology for long-term success. Innovate with us.',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'digital-transformation',
    title: 'End-to-End Digital Transformation',
    description: 'Reimagine your business with cutting-edge digital solutions. We help you navigate the complexities of cloud migration, software development, and system modernization, delivering measurable results. Start transforming today.',
    icon: Globe,
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 'hybrid-teams',
    title: 'IT Hybrid Teams',
    description: 'Deploy the best minds across the globe to solve your toughest challenges. Our hybrid team model ensures that you get the expertise you need, where and when you need it. Start working smarter, not harder.',
    icon: Code,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'data-annotation',
    title: 'Data Annotation Services for AI',
    description: 'Improve the accuracy of your AI models with our data annotation services. Our skilled teams provide high-quality labeling and annotation for images, text, audio, and video. We help you create robust datasets that enhance machine-learning outcomes. Elevate your AI initiatives with our data annotation expertise.',
    icon: Database,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'web-app-development',
    title: 'Web App Development',
    description: 'Build modern, scalable web applications with cutting-edge technologies. From progressive web apps to enterprise-grade platforms, we deliver responsive, high-performance solutions that drive business growth and user engagement.',
    icon: Monitor,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Create powerful native and cross-platform mobile applications for iOS and Android. Our expert development team crafts intuitive, feature-rich mobile solutions that enhance user experience and maximize business value.',
    icon: Smartphone,
    color: 'from-cyan-500 to-cyan-600'
  }
];

const SolutionsSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(services.length + 2, 150);

  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center max-w-4xl mx-auto mb-16 transform transition-all duration-700 ${
          visibleItems.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Cpu className="w-4 h-4 mr-2" />
            Premium Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Solutions & Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your business with our cutting-edge solutions designed for the modern enterprise
          </p>
        </div>
        
        <div className={`mb-20 text-center max-w-5xl mx-auto transform transition-all duration-700 delay-150 ${
          visibleItems.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/60 backdrop-blur-xs rounded-3xl p-12 shadow-elegant border border-white/20">
            <div className="flex items-center justify-center mb-8">
              <div className="service-icon bg-linear-to-r from-blue-600 to-indigo-600">
                <Database size={32} />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Enterprise AI & ML Solutions
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Supercharge your operations with custom AI and ML solutions. From predictive analytics to intelligent automation, we build scalable, tailored systems that address your specific business needs.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Discover AI Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card transform transition-all duration-700 hover:-translate-y-2 hover:scale-105 ${
                visibleItems.includes(index + 2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className={`service-icon bg-linear-to-r ${service.color}`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>

              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-all duration-300 relative z-10">
                Learn more <ArrowRight size={16} className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transform transition-all duration-700 ${
          visibleItems.includes(services.length + 2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Button 
            size="lg" 
            className="bg-linear-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-12 py-4 rounded-2xl shadow-glow hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            Explore All Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
