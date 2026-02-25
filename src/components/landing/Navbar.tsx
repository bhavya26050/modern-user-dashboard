import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 pt-6 px-8 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl shadow-lg' : ''
    }`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-8 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/70 backdrop-blur-md border border-border/50' 
          : 'bg-white/50 backdrop-blur-md border border-white/20 shadow-lg'
      }`}>
        {/* Logo */}
        <div className="text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-300 cursor-pointer">
          Frame & Code
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-foreground/70 hover:text-foreground transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Button className="hidden md:inline-flex rounded-full px-8 hover:scale-105 transition-transform duration-300">
            Start a Project
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-foreground/10 rounded-lg transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 mx-8 bg-card border border-border rounded-2xl p-6 shadow-lg animate-slideDown">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="block py-3 text-foreground/70 hover:text-foreground transition-colors duration-300 border-b border-border/30 last:border-b-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-4 rounded-full">
            Start a Project
          </Button>
        </div>
      )}
    </nav>
  );
}
