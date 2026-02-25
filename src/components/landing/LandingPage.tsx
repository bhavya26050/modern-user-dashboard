import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import InteractiveStats from './InteractiveStats';
import InteractiveFeatures from './InteractiveFeatures';
import MetricsShowcase from './MetricsShowcase';
import DashboardPreview from './DashboardPreview';
import ValueProposition from './ValueProposition';
import Work from './Work';
import Process from './Process';
import Testimonials from './Testimonials';
import GradientCTA from './GradientCTA';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <InteractiveStats />
      <InteractiveFeatures />
      <MetricsShowcase />
      <DashboardPreview />
      <ValueProposition />
      <Work />
      <Process />
      <Testimonials />
      <GradientCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
