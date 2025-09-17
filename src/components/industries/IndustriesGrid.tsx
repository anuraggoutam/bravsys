
import React from 'react';

const IndustriesGrid = () => {
  const industries = [
    {
      title: "Technology & Innovation",
      description: "We leverage cutting-edge technology solutions to transform business operations across industries. With years of experience in technology consulting, we design seamless solutions that help organizations and their stakeholders deliver exceptional experiences. Trusted by Fortune 500 companies, we provide tailored solutions that elevate efficiency and streamline operations.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Healthcare Technology",
      description: "Tomorrow's healthcare depends on innovative technology and solutions. We help customers focus on patient well-being, affordability, and compliance with privacy and HIPAA standards. From research enterprises to insurers, we provide tailored IT solutions that enhance efficiency, incorporate best practices, and keep healthcare providers competitive in a rapidly evolving industry.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Financial Services",
      description: "As a trusted provider for the financial services industry, Droisys brings deep expertise in high-level security and privacy compliance. In today's demanding and risk-sensitive market, customers expect personalized service and secure practices. We help financial service customers navigate this changing landscape with innovative solutions, giving them a distinct competitive advantage.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Industries we service</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
