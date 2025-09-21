'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Target, Code, Users, CheckCircle } from 'lucide-react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '@/hooks/useScrollAnimation';
import Image from 'next/image';

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: approachRef, visibleItems } = useStaggeredAnimation(4, 200);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const approach = [
    {
      title: 'Research',
      description:
        'We research trends and best practices in your industry to keep you ahead of the market and lead with innovative consumer platforms.',
      icon: Search,
    },
    {
      title: 'Strategy',
      description:
        'We collaborate to understand your goals and needs, developing the right technology strategy to optimize creativity, drive innovation, and maximize ROI.',
      icon: Target,
    },
    {
      title: 'Execution',
      description:
        'Our agile approach and lean structure let us act swiftly and efficiently to execute programs, build solutions, and enable rapid market validation.',
      icon: Code,
    },
    {
      title: 'Deployment',
      description:
        'We deliver a full-featured software solution and innovation stack, using industry best practices and a microservices-based architecture.',
      icon: Users,
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '20+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Team Members' },
  ];

  return (
    <section className="py-24 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 transform transition-all duration-1000 ${
            heroVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
              <span className="text-sm font-medium text-blue-700">
                About Bravsys
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-8 text-gray-900 leading-tight">
              We Know Technology
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our company offers full-service software development, identifying
              opportunities and building complex digital transformation
              strategies. We innovate with AI and machine learning to develop
              app prototypes and full-scale solutions.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Fortune 100 trusted partner',
                'AI & ML innovation leaders',
                'End-to-end digital solutions',
                'Global expertise, local delivery',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-start">
                <div className="text-6xl text-blue-500 mr-6 font-serif">"</div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                    We solve business problems with an innovative mindset,
                    delivering solutions that create measurable value and drive
                    sustainable growth.
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      Sanjiv Goyal
                    </p>
                    <p className="text-blue-600 font-medium">
                      President & Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating stats */}
            <div
              ref={statsRef}
              className={`absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 transform transition-all duration-1000 delay-500 ${
                statsVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
              <span className="text-sm font-medium text-blue-700">
                Our Methodology
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-8 text-gray-900">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our goal is simple: help our partners and clients create
              measurable value by leveraging our business acumen, technical
              expertise, and diverse skillsets.
            </p>
          </div>

          <div
            ref={approachRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {approach.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                  visibleItems.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                } hover:-translate-y-2 group`}
                style={{
                  transitionDelay: visibleItems.includes(index)
                    ? '0ms'
                    : `${index * 200}ms`,
                }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your digital
            transformation goals.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
