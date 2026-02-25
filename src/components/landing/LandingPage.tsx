import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ValueProposition from './ValueProposition';
import Work from './Work';
import Process from './Process';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProposition />
      <Work />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
