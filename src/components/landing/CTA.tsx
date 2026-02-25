import React from 'react';
import { Button } from '../ui/button';
import InteractiveGlobe from './3d/InteractiveGlobe';

export default function CTA() {
  return (
    <section className="py-32 px-8 bg-gradient-to-b from-background to-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-96 h-96 rounded-full blur-3xl absolute -top-48 -left-48 bg-foreground/30" />
        <div className="w-96 h-96 rounded-full blur-3xl absolute -bottom-48 -right-48 bg-foreground/30" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Ready to Build Something Great?
            </h2>
            <p className="text-white/70 text-lg mt-6 leading-relaxed">
              Let's discuss your next project and how we can help bring your vision to life with cutting-edge technology and design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg"
              className="rounded-full px-12 bg-white text-foreground hover:bg-white/90 hover:scale-105 transition-transform"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full px-12 text-white border-white/30 hover:bg-white/10 hover:scale-105 transition-transform"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <p className="text-white/60 text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <p className="text-white/60 text-sm mt-1">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">12+</div>
              <p className="text-white/60 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Visual - Interactive Globe */}
        <div className="hidden lg:block h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-background/50 to-background border border-white/10">
          <InteractiveGlobe />
        </div>
      </div>
    </section>
  );
}
