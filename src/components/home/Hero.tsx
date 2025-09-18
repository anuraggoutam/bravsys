"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import HeroStats from './sections/HeroStats';
import { heroStats } from '@/constants/homeData';
import Link from 'next/link';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen py-12 md:py-20 lg:py-24 bg-linear-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-32 w-72 h-72 md:w-96 md:h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-blue-50 rounded-full mb-4 md:mb-6 border border-blue-100">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs md:text-sm font-medium text-blue-700">AI-Powered Digital Innovation</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight">
              Transform your
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-blue-800">
                digital future
              </span>
              with AI & Innovation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-xl leading-relaxed">
              For over two decades, we've empowered Fortune 100 companies with cutting-edge AI, machine learning, and digital transformation solutions that drive measurable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8 md:mb-12">
              <Link href="/start-transformation">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
              <Link href="/watch-our-story">
                <Button variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl border-2 border-gray-200 hover:bg-gray-50 group transition-all duration-300 w-full sm:w-auto">
                  <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </Button>
              </Link>
            </div>

            <HeroStats stats={heroStats} />
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                      <span className="text-lg md:text-2xl font-bold text-white">AI</span>
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Advanced AI solutions that learn and adapt</p>
                  </div>
                  
                  <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl md:rounded-3xl p-4 md:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">D</div>
                    <div className="text-xs md:text-sm font-semibold">DIGITAL INNOVATION</div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6 mt-6 md:mt-12">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" 
                      alt="Analytics dashboard"
                      className="w-full h-16 md:h-24 object-cover rounded-lg md:rounded-xl mb-2 md:mb-4"
                    />
                    <p className="text-xs md:text-sm font-medium text-gray-700">Web App Development</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-linear-to-br from-green-500 to-teal-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                      <span className="text-lg md:text-2xl text-white">∞</span>
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">Cloud Solutions</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Scalable infrastructure for growth</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-10 h-10 md:w-16 md:h-16 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
