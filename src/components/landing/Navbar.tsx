import React from 'react';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md rounded-full px-8 py-4 shadow-md">
        <div className="text-2xl font-bold text-foreground">Frame & Code</div>
        
        <div className="hidden md:flex items-center gap-12">
          <a href="#work" className="text-foreground/70 hover:text-foreground transition-colors">Work</a>
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="text-foreground/70 hover:text-foreground transition-colors">Process</a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
        </div>

        <Button className="rounded-full px-8 py-2">Start a Project</Button>
      </div>
    </nav>
  );
}
