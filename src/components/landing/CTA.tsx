import React from 'react';
import { Button } from '../ui/button';

export default function CTA() {
  return (
    <section className="py-32 px-8 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Ready to Build Something Great?
        </h2>
        <p className="text-white/70 text-lg mb-12 leading-relaxed">
          Let's discuss your next project and how we can help bring your vision to life.
        </p>
        <Button 
          size="lg"
          className="rounded-full px-12 bg-white text-foreground hover:bg-white/90"
        >
          Start Your Project
        </Button>
      </div>
    </section>
  );
}
