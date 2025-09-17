
import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Clients = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: clientsRef, visibleItems } = useStaggeredAnimation(6, 100);

  const clients = [
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Google', logo: 'G' },
    { name: 'Amazon', logo: 'A' },
    { name: 'IBM', logo: 'IBM' },
    { name: 'Oracle', logo: 'O' },
    { name: 'Salesforce', logo: 'SF' },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full mb-6 border border-white/20">
            <span className="text-sm font-medium text-white">Strategic Partners</span>
          </div>
          <h3 className="text-4xl font-bold mb-6 text-white">Trusted by Industry Leaders</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We've partnered with Fortune 100 companies and global organizations across various industries to deliver exceptional results.
          </p>
        </div>

        <div ref={clientsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center h-24 bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } hover:-translate-y-2 hover:scale-105`}
              style={{ 
                transitionDelay: visibleItems.includes(index) ? '0ms' : `${index * 100}ms` 
              }}
            >
              <span className="text-3xl font-bold text-white/80 hover:text-white transition-colors">
                {client.logo}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Join the ranks of successful companies that trust us with their digital transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
