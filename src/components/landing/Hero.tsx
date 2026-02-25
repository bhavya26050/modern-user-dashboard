import React from 'react';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              We Design & Build High-Performance Web Products
            </h1>
            <p className="text-lg text-foreground/60 mt-6 leading-relaxed">
              Crafting digital experiences that drive growth and delight users.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8">
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 border-foreground/20 hover:bg-foreground/5"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full h-96">
            {/* Abstract geometric shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-3xl shadow-lg"></div>
            <div className="absolute bottom-12 left-12 w-48 h-48 bg-secondary rounded-2xl shadow-md"></div>
            <div className="absolute top-24 left-1/4 w-32 h-32 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
