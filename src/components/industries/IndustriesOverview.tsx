import React from 'react';
import Image from 'next/image';

const IndustriesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
                alt="Professional working on laptop"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We provide solutions and services to help customers optimize
              performance, align technology with priorities, reduce costs,
              improve margins, and gain a competitive edge. We make
              organizations agile, resilient, and proactive.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our solutions offer an integrated view of data across brands,
              campaigns, and regions, enabling you to build stronger consumer
              relationships and drive growth.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesOverview;
