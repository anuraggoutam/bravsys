import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Highlights from '@/components/home/Highlights';
import About from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Clients from '@/components/home/Clients';
import Blog from '@/components/home/Blog';
import Cta from '@/components/home/Cta';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <Services />

      {/* Company Highlights */}
      <Highlights />

      {/* About Company */}
      <About />

      {/* Portfolio Showcase */}
      <Portfolio />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Client Logos */}
      <Clients />

      {/* Latest Insights */}
      <Blog />

      {/* Call to Action */}
      <Cta />
    </>
  );
};

export default Index;



