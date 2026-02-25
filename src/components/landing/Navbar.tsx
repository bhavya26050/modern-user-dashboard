import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  const bgColor = theme === 'dark'
    ? 'bg-slate-900/80 border-slate-700/50'
    : 'bg-white/80 border-gray-200';

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subTextColor = theme === 'dark' ? 'text-slate-400' : 'text-gray-600';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 pt-6 px-8 transition-all duration-300 ${
      isScrolled ? 'py-4' : ''
    }`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 lg:px-8 py-4 backdrop-blur-xl shadow-lg border transition-all duration-300 ${bgColor}`}>
        {/* Logo */}
        <div className={`text-2xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer ${textColor}`}>
          Frame & Code
        </div>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-8 ${subTextColor}`}>
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className={`transition-all duration-300 relative group hover:${textColor}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                theme === 'dark' ? 'bg-white' : 'bg-gray-900'
              } group-hover:w-full transition-all duration-300`} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              theme === 'dark'
                ? 'hover:bg-slate-700/50 text-yellow-400'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Desktop CTA */}
          <Button className="hidden md:inline-flex rounded-full px-8 hover:scale-105 transition-transform duration-300">
            Start a Project
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              theme === 'dark'
                ? 'hover:bg-slate-700/50'
                : 'hover:bg-gray-100'
            }`}
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
        <div className={`md:hidden absolute top-full left-0 right-0 mt-4 mx-8 rounded-2xl p-6 shadow-lg backdrop-blur-xl border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-slate-800/40 border-slate-700/50'
            : 'bg-white/80 border-gray-200'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className={`block py-3 transition-colors duration-300 border-b last:border-b-0 ${
                theme === 'dark'
                  ? 'text-slate-400 hover:text-white border-slate-700/30'
                  : 'text-gray-600 hover:text-gray-900 border-gray-200'
              }`}
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
