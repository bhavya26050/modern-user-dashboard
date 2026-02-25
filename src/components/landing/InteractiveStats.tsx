import { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

const statsData = [
  { target: 1234, label: 'Active Users', suffix: '+' },
  { target: 45678, label: 'Total Revenue', suffix: '$' },
  { target: 892, label: 'Active Sessions', suffix: '+' },
  { target: 3.42, label: 'Conversion Rate', suffix: '%' },
];

export default function InteractiveStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground text-balance">
            Proven Results
          </h2>
          <p className="text-lg text-foreground/60 mt-4">
            Real metrics from real projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                animation: isVisible
                  ? `slideUp 0.6s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              {isVisible && (
                <AnimatedCounter
                  target={stat.target}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              )}
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
