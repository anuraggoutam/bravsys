import React from 'react';
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import ContactSection from '@/components/about/ContactSection';

const AboutUs = () => {
  return (
    <Layout>
      <AboutHero />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
};

export default AboutUs;
