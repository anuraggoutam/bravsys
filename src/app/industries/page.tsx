import React from 'react';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesOverview from '@/components/industries/IndustriesOverview';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import ContactSection from '@/components/services/ContactSection';


const Industries = () => {
  return (
    <>
      <IndustriesHero />
      <IndustriesOverview />
      <IndustriesGrid />
      <ContactSection/>
    </>
  );
};

export default Industries;
