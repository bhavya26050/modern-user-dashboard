import Navbar from './Navbar';
import Hero from './Hero';
import ValueProposition from './ValueProposition';
import InteractiveStats from './InteractiveStats';
import Work from './Work';
import Process from './Process';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProposition />
      <InteractiveStats />
      <Work />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
