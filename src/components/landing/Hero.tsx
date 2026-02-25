import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import RotatingCube from './3d/RotatingCube';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen pt-32 px-8 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-foreground text-balance">
              We Design & Build High-Performance Web Products
            </h1>
            <p className="text-lg text-foreground/60 mt-6 leading-relaxed">
              Crafting digital experiences that drive growth and delight users.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 border-foreground/20 hover:bg-foreground/5 hover:scale-105 transition-transform"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Visual - 3D Cube */}
        <div className="hidden lg:block relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-background to-background/50 border border-border">
          <RotatingCube />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-foreground/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + i}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Parallax background elements */}
      <div
        className="absolute top-10 right-10 w-64 h-64 bg-foreground/5 rounded-3xl blur-3xl pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div
        className="absolute bottom-32 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
}
