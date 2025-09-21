import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-linear-to-br from-primary/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              15+ Years of Digital Excellence
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-linear-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Accelerate your business with cutting-edge AI, Machine Learning,
                and comprehensive digital solutions. We turn complex challenges
                into competitive advantages.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'AI & ML Solutions',
                'Digital Transformation',
                'Custom Development',
                '24/7 Support',
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 py-4 rounded-xl transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="/assets/GeminiS.png"
                alt="Advanced technology solutions and digital transformation"
                fill
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
