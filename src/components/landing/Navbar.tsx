import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['work', 'services', 'process', 'testimonials', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 transition-all duration-500 ${isScrolled ? 'pt-3' : 'pt-6'}`}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 lg:px-8 py-3.5 backdrop-blur-xl shadow-lg border transition-all duration-500 ${
          theme === 'dark'
            ? `${isScrolled ? 'bg-black/90' : 'bg-black/70'} border-neutral-800/50`
            : `${isScrolled ? 'bg-white/90' : 'bg-white/70'} border-gray-200`
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Frame & Code
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                  : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className={`absolute inset-0 rounded-xl -z-10 ${
                    theme === 'dark' ? 'bg-pink-500/10' : 'bg-pink-100/60'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              theme === 'dark' ? 'hover:bg-neutral-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div key="sun" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }} transition={{ duration: 0.3 }}>
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -90, scale: 0 }} transition={{ duration: 0.3 }}>
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: theme === 'dark' ? '0 0 30px rgba(236, 72, 153, 0.4)' : '0 0 30px rgba(219, 39, 119, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm font-semibold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
          >
            Start a Project
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 rounded-xl transition-colors duration-300 ${
              theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'
            }`}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            className={`md:hidden absolute top-full left-0 right-0 mt-3 mx-4 sm:mx-8 rounded-2xl p-5 shadow-xl backdrop-blur-xl border transition-all duration-300 ${
              theme === 'dark' ? 'bg-black/95 border-neutral-800/50' : 'bg-white/95 border-gray-200'
            }`}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 + 0.1 }}
                className={`block py-3 transition-colors duration-300 border-b last:border-b-0 ${
                  activeSection === link.id
                    ? theme === 'dark' ? 'text-pink-400 border-neutral-800/30' : 'text-pink-600 border-gray-200'
                    : theme === 'dark' ? 'text-neutral-400 hover:text-white border-neutral-800/30' : 'text-gray-600 hover:text-gray-900 border-gray-200'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-4 py-3 text-center rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold shadow-lg shadow-pink-500/20"
            >
              Start a Project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
