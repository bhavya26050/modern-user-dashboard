import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ValueProposition from './ValueProposition';
import Work from './Work';
import Process from './Process';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Work />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
