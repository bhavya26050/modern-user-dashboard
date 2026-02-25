import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen pt-32 px-8 bg-gradient-to-b from-background via-background to-foreground/5 overflow-hidden relative">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl opacity-70"
          style={{
            transform: `translate(${mousePos.x * 0.05}px, ${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-3xl opacity-70"
          style={{
            transform: `translate(${-mousePos.x * 0.05}px, ${-scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl opacity-50 animate-float"
          style={{
            animationDuration: '8s',
          }}
        />

        {/* Animated lines/grid effect */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div
            style={{
              animation: 'slideUp 0.8s ease-out',
            }}
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-foreground text-balance">
              We Design & Build High-Performance Web Products
            </h1>
            <p className="text-lg text-foreground/60 mt-6 leading-relaxed">
              Crafting digital experiences that drive growth and delight users. From concept to launch, we bring innovation to every pixel.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            style={{
              animation: 'slideUp 0.8s ease-out 0.2s both',
            }}
          >
            <Button size="lg" className="rounded-full px-8 group hover:shadow-lg transition-all duration-300">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 border-foreground/20 hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 pt-8 border-t border-foreground/10"
            style={{
              animation: 'slideUp 0.8s ease-out 0.4s both',
            }}
          >
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">50+</div>
              <p className="text-foreground/60 text-sm mt-1">Projects Done</p>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">98%</div>
              <p className="text-foreground/60 text-sm mt-1">Satisfaction</p>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">12+</div>
              <p className="text-foreground/60 text-sm mt-1">Years Exp.</p>
            </div>
          </div>
        </div>

        {/* Right Visual - Animated Grid Showcase */}
        <div
          className="hidden lg:block relative h-96"
          style={{
            animation: 'slideInRight 0.8s ease-out 0.2s both',
          }}
        >
          {/* Main gradient card */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent border border-white/20 backdrop-blur-md shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                animation: 'shimmer 3s infinite',
              }}
            />

            {/* Feature icons showcase */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                {[
                  { icon: '⚡', label: 'Fast' },
                  { icon: '🎨', label: 'Design' },
                  { icon: '🔒', label: 'Secure' },
                  { icon: '📱', label: 'Mobile' },
                  { icon: '🌐', label: 'Global' },
                  { icon: '💡', label: 'Smart' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer group"
                    style={{
                      animation: `float ${3 + idx * 0.2}s ease-in-out infinite`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-xs font-semibold text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
