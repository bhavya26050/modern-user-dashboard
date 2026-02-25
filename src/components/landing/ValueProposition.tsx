import React from 'react';
import { Card } from '../ui/card';

const values = [
  {
    title: 'Faster Launch Cycles',
    description: 'Get your product to market in weeks, not months',
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one',
  },
  {
    title: 'Conversion-Driven UI',
    description: 'Every pixel optimized for user engagement',
  },
];

export default function ValueProposition() {
  return (
    <section id="services" className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Why Choose Frame & Code
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            We combine strategic thinking with exceptional execution to deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <Card 
              key={idx}
              className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl mb-6"></div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
