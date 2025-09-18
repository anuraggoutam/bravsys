import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import SolutionsSection from '@/components/services/SolutionsSection';
import DigitalMarketingSection from '@/components/services/DigitalMarketingSection';
import ApproachSection from '@/components/services/ApproachSection';
import AccelerateSection from '@/components/services/AccelerateSection';
import TechnologiesSection from '@/components/services/TechnologiesSection';
import ContactSection from '@/components/services/ContactSection';

const Services = () => {
  return (
    <>
      <ServicesHero />
      <SolutionsSection />
      <ApproachSection />
      <DigitalMarketingSection />
      <TechnologiesSection />
      <AccelerateSection />
      <ContactSection />
    </>
  );
};

export default Services;
