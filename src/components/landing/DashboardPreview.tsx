import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function DashboardPreview() {
  const { ref, isVisible } = useScrollReveal();

  const dashboardFeatures = [
    {
      title: 'Real-time Dashboard',
      description: 'Monitor all your metrics in one beautiful, intuitive interface',
      icon: '📊',
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights into user behavior and conversion patterns',
      icon: '📈',
    },
    {
      title: 'Interactive Charts',
      description: 'Dynamic visualizations that update in real-time',
      icon: '📉',
    },
    {
      title: 'Data Export',
      description: 'Export reports in multiple formats for further analysis',
      icon: '📥',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-8 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground text-balance">
            Comprehensive Dashboard
          </h2>
          <p className="text-lg text-foreground/60 mt-4">
            Everything you need to manage your business, integrated into one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animation: isVisible
                  ? `slideUp 0.6s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Dashboard Preview Card */}
        <Card
          className={`relative rounded-3xl border-2 border-border overflow-hidden ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: isVisible ? 'slideUp 0.6s ease-out 0.4s both' : 'none',
          }}
        >
          <div className="bg-gradient-to-br from-foreground/5 to-primary/5 p-8 md:p-12">
            {/* Mock Dashboard UI */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Dashboard Overview
                  </h3>
                  <p className="text-foreground/60 mt-1">
                    Last updated: Just now
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border-2 border-secondary" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Users', value: '1,234', change: '+12.5%' },
                  { label: 'Revenue', value: '$45.6K', change: '-8.2%' },
                  { label: 'Sessions', value: '892', change: '+23.1%' },
                  { label: 'Conversion', value: '3.42%', change: '+4.3%' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-card rounded-xl p-4 border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-md"
                  >
                    <p className="text-foreground/60 text-sm font-medium">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-foreground mt-2">
                      {stat.value}
                    </p>
                    <p className="text-xs text-primary mt-2">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Mock Chart */}
              <div className="bg-card rounded-xl p-6 border border-border h-64 flex items-end justify-between gap-3 group hover:shadow-lg transition-all duration-300">
                {[40, 65, 45, 85, 35, 55, 70].map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-primary/40 rounded-t-lg hover:bg-primary transition-all duration-300 group-hover:scale-105"
                    style={{
                      height: `${height}%`,
                      transformOrigin: 'bottom',
                      transitionDelay: `${idx * 50}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center mt-8">
              <Button size="lg" className="rounded-full group">
                <span>Explore Full Dashboard</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </Card>
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
