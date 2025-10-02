
import React from 'react';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <div className="relative py-16 px-8 md:px-16 bg-linear-to-r from-brand-purple to-brand-blue text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-full -translate-y-1/3 translate-x-1/4"></div>
              <div className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 -translate-y-1/4"></div>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Let's collaborate to create a stunning website that elevates
                your brand and drives results. Get a free consultation and quote
                today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  className="bg-white text-brand-purple hover:bg-gray-100 transition-colors px-8 py-6 text-lg"
                >
                  <Link href="/contact">
                    Get Free Consultation
                    <SendIcon className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white bg-white/10 transition-colors px-8 py-6 text-lg"
                >
                  {/* <Link href="/portfolio">View Our Work</Link> */}
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
