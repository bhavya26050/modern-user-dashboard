import React from 'react';
import { Button } from '../ui/button';

export default function GradientCTA() {
  return (
    <section className="py-24 px-8 bg-gradient-to-r from-foreground via-foreground to-foreground overflow-hidden relative">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/50 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-400/50 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-5xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight"
          style={{
            animation: 'slideUp 0.8s ease-out',
            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's Create Something Amazing Together
        </h2>

        <p
          className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{
            animation: 'slideUp 0.8s ease-out 0.1s both',
          }}
        >
          From innovative startups to established enterprises, we partner with visionary companies to build digital products that drive real business impact.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            animation: 'slideUp 0.8s ease-out 0.2s both',
          }}
        >
          <Button
            size="lg"
            className="rounded-full px-12 bg-white text-foreground hover:bg-white/90 hover:shadow-xl transition-all duration-300 group"
          >
            View Our Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-12 text-white border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-wrap gap-6 justify-center mt-16 pt-16 border-t border-white/20"
          style={{
            animation: 'slideUp 0.8s ease-out 0.3s both',
          }}
        >
          {['Trusted by 50+ Companies', 'Award-Winning Design', 'Expert Development'].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/80 group hover:text-white transition-colors duration-300 cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
              <span className="text-sm font-semibold">{badge}</span>
            </div>
          ))}
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
