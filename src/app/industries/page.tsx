import React from 'react';
import Layout from '@/components/layout/Layout';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesOverview from '@/components/industries/IndustriesOverview';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import ContactForm from '@/components/industries/ContactForm';

const Industries = () => {
  return (
    <Layout>
      <IndustriesHero />
      <IndustriesOverview />
      <IndustriesGrid />
      <ContactForm />
    </Layout>
  );
};

export default Industries;
