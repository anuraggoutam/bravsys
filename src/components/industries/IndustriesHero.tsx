
import React from 'react';

const IndustriesHero = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500" 
                  alt="Technology workplace"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=500" 
                  alt="Medical technology"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500" 
                  alt="Gaming industry"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">D</div>
                  <div className="text-sm font-medium">INDUSTRIES</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-6xl font-bold mb-6">
              Industries
            </h1>
            <h2 className="text-4xl font-bold text-blue-600 mb-8">
              Stay ahead
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our solutions help you stay ahead of the innovation curve, speed up time to market, and maximize efficiency.
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

export default IndustriesHero;
