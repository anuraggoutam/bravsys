
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
const AccelerateSection = () => {
  return (
    <section className="py-24 bg-linear-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-3xl p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-40 -translate-x-40"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xs rounded-full text-white/90 font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Ready to Transform?
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Accelerate Your
              <span className="block">Digital Journey</span>
            </h2>

            <p className="text-xl text-white/90 leading-relaxed">
              Partner with us to unlock your business potential. Our expert team
              is ready to deliver solutions that drive growth, innovation, and
              lasting success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="start-transformation">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                
              </Button>
              </Link>
              <Link href="contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 hover:border-white/50 bg-white/10 text-white px-8 py-4 rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Button>
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-xl"></div>
              <img
                src="/assets/Growth.jpeg"
                alt="Digital transformation and business growth"
                className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccelerateSection;
