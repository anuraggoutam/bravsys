import React from 'react';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesOverview from '@/components/industries/IndustriesOverview';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import ContactForm from '@/components/industries/ContactForm';

const Industries = () => {
  return (
    <>
      <IndustriesHero />
      <IndustriesOverview />
      <IndustriesGrid />
      <ContactForm />
    </>
  );
};

export default Industries;
