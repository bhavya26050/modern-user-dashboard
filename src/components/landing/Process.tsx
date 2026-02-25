import React from 'react';
import { CheckCircle, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting the experience',
    icon: CheckCircle,
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building with precision',
    icon: Code,
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Going live with confidence',
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-foreground/60 text-lg">
            A streamlined process designed for collaboration and results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+24px)] right-[calc(-100%+24px)] h-1 bg-border"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-md">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
