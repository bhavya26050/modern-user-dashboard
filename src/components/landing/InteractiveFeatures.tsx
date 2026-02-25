import { useState } from 'react';
import { Card } from '../ui/card';

const features = [
  {
    id: 1,
    title: 'Real-time Analytics',
    description: 'Monitor user behavior and conversion metrics in real-time with interactive dashboards.',
    metrics: '1,234 Users',
    color: 'from-purple-500/10 to-blue-500/10',
  },
  {
    id: 2,
    title: 'Revenue Tracking',
    description: 'Comprehensive revenue analytics with detailed breakdown by source and channel.',
    metrics: '$45,678 Monthly',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    id: 3,
    title: 'Session Management',
    description: 'Track active sessions and user engagement patterns with advanced filtering.',
    metrics: '892 Active Now',
    color: 'from-pink-500/10 to-rose-500/10',
  },
  {
    id: 4,
    title: 'Conversion Optimization',
    description: 'Analyze and optimize conversion funnels with AI-powered insights.',
    metrics: '3.42% Rate',
    color: 'from-amber-500/10 to-orange-500/10',
  },
];

export default function InteractiveFeatures() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground text-balance">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/60 mt-4">
            Everything you need to manage and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`relative p-8 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border border-border
                ${
                  hoveredId === feature.id
                    ? 'border-foreground/40 shadow-2xl scale-105'
                    : 'hover:border-foreground/20 hover:shadow-lg'
                }`}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 ${
                  hoveredId === feature.id ? 'opacity-100' : ''
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center transition-all duration-300 ${
                      hoveredId === feature.id
                        ? 'bg-foreground/20 scale-110'
                        : ''
                    }`}
                  >
                    <span className="text-2xl">→</span>
                  </div>
                </div>

                <p className="text-foreground/70 mb-6">
                  {feature.description}
                </p>

                <div
                  className={`inline-block px-4 py-2 rounded-full bg-foreground/5 text-sm font-semibold text-foreground transition-all duration-300 ${
                    hoveredId === feature.id
                      ? 'bg-foreground/15 scale-110'
                      : ''
                  }`}
                >
                  {feature.metrics}
                </div>
              </div>

              {/* Animated border */}
              {hoveredId === feature.id && (
                <div className="absolute inset-0 rounded-2xl border-2 border-foreground/20 animate-pulse pointer-events-none" />
              )}
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
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
