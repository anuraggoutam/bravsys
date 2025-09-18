import React from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Shield,
} from 'lucide-react';

const StartTransformation = () => {
  const transformationSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description:
        'We analyze your current systems, identify opportunities, and develop a comprehensive transformation roadmap.',
      duration: '2-4 weeks',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description:
        'Our experts design scalable solutions tailored to your business needs and technical requirements.',
      duration: '3-6 weeks',
    },
    {
      step: '03',
      title: 'Development & Integration',
      description:
        'We build and integrate cutting-edge solutions using the latest AI and cloud technologies.',
      duration: '8-16 weeks',
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description:
        'We deploy your solutions and continuously optimize performance for maximum ROI.',
      duration: '2-4 weeks',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Align technology with your business objectives',
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Fast-track your digital transformation journey',
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Proven methodologies to minimize project risks',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to seasoned professionals and specialists',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700">
                Start Your Journey Today
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
              Begin Your
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-blue-800">
                Digital Transformation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your business with AI-powered solutions, cloud
              infrastructure, and cutting-edge technology. Let's build the
              future together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6 rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-24 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-linear-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
              <span className="text-sm font-medium text-blue-700">
                Our Methodology
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results through strategic
              planning, expert execution, and continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 h-full border border-gray-100">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block border border-blue-100">
                    {step.duration}
                  </div>
                </div>
                {index < transformationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-20 w-64 h-64 bg-linear-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-64 h-64 bg-linear-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
              <span className="text-sm font-medium text-blue-700">
                Our Advantages
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Approach?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our methodology combines industry best practices with innovative
              thinking to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of companies that have successfully transformed their
            operations with our proven methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-xs text-lg px-8 py-6 rounded-xl transition-all duration-300"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartTransformation;
