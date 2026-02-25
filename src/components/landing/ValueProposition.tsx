import React from 'react';
import { Card } from '../ui/card';
import { Zap, Layers, Target } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Faster Launch Cycles',
    description: 'Get your product to market in weeks, not months with our agile development process.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one without technical debt or rewrites.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Target,
    title: 'Conversion-Driven UI',
    description: 'Every pixel optimized for user engagement and measurable business results.',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

export default function ValueProposition() {
  return (
    <section id="services" className="py-24 px-8 bg-gradient-to-b from-background via-foreground/2 to-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '8s', animationDelay: '0s' }} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-secondary/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Frame & Code
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            We combine strategic thinking with exceptional execution to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <Card 
                key={idx}
                className="p-8 border-border/50 hover:border-foreground/30 transition-all duration-300 hover:shadow-xl bg-card group relative overflow-hidden"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
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
