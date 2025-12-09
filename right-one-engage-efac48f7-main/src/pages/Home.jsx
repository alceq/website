import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import DifferenceSection from '../components/home/DifferenceSection';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <DifferenceSection />
      <FaqSection />
      <Footer />
    </div>
  );
}