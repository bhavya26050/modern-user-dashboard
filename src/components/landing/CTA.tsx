import React from 'react';
import { Button } from '../ui/button';

export default function CTA() {
  return (
    <section className="py-32 px-8 bg-gradient-to-b from-background to-foreground relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        <div
          style={{
            animation: 'slideUp 0.8s ease-out',
          }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-white/70 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your next project and how we can help bring your vision to life with cutting-edge technology and design. Fill out the contact form to get started.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          style={{
            animation: 'slideUp 0.8s ease-out 0.2s both',
          }}
        >
          <Button 
            size="lg"
            className="rounded-full px-12 bg-white text-foreground hover:bg-white/90 hover:shadow-lg transition-all duration-300 group"
          >
            Start Your Project
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="rounded-full px-12 text-white border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Schedule a Call
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20 max-w-2xl mx-auto"
          style={{
            animation: 'slideUp 0.8s ease-out 0.4s both',
          }}
        >
          <div className="group">
            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">50+</div>
            <p className="text-white/60 text-sm mt-1">Projects</p>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">98%</div>
            <p className="text-white/60 text-sm mt-1">Satisfaction</p>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">12+</div>
            <p className="text-white/60 text-sm mt-1">Years</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
