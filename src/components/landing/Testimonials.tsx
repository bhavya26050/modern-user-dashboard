import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from '../../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: 'Frame & Code transformed our vision into reality. Their attention to detail and technical excellence is unmatched.',
    author: 'Sarah Chen',
    role: 'CEO, TechVenture Inc',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
    company: 'TechVenture Inc',
  },
  {
    id: 2,
    quote: 'Working with this team was seamless. They understood our goals and delivered beyond expectations.',
    author: 'Marcus Thompson',
    role: 'Founder, Digital Studios',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    rating: 5,
    company: 'Digital Studios',
  },
  {
    id: 3,
    quote: 'The level of professionalism and innovation they brought to our project was exceptional. Highly recommended!',
    author: 'Emma Rodriguez',
    role: 'Product Director, StartupXYZ',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    rating: 5,
    company: 'StartupXYZ',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section id="testimonials" className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-900/50 via-slate-900 to-slate-900/50'
        : 'bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50'
    }`}>
      {/* Animated background lights */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-300'
        }`}
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className={`absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-violet-600' : 'bg-violet-300'
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4 ${
              theme === 'dark'
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                : 'bg-indigo-100/80 border-indigo-300 text-indigo-700'
            }`}
          >
            <span className="text-sm font-semibold">Client Testimonials</span>
          </motion.div>

          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            What Our <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Join 50+ companies that trust us with their digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <motion.div
                key={`${activeIndex}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className={`p-8 relative overflow-hidden group transition-all duration-300 h-full cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-slate-800/40 border-slate-700/50 hover:border-indigo-500/50 hover:shadow-indigo-500/20'
                      : 'bg-white/80 border-gray-200 hover:border-indigo-400/50 hover:shadow-indigo-300/20'
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${
                      theme === 'dark'
                        ? 'from-indigo-500/10 to-violet-500/10'
                        : 'from-indigo-300/10 to-violet-300/10'
                    } pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-1 mb-6"
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 0 }}
                          animate={{ rotate: 360, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        >
                          <Star
                            className={`w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    <p className={`mb-8 leading-relaxed text-lg italic transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'text-slate-300 group-hover:text-white'
                        : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      "{testimonial.quote}"
                    </p>

                    <motion.div
                      className={`flex items-center gap-4 pt-6 border-t transition-colors duration-300 ${
                        theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200'
                      }`}
                    >
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className={`w-14 h-14 rounded-full object-cover border-2 transition-all duration-300 ${
                          theme === 'dark'
                            ? 'border-indigo-500/30 group-hover:border-indigo-500'
                            : 'border-indigo-300 group-hover:border-indigo-500'
                        }`}
                      />
                      <div>
                        <div className={`font-bold transition-colors duration-300 ${
                          theme === 'dark'
                            ? 'text-white group-hover:text-indigo-300'
                            : 'text-gray-900 group-hover:text-indigo-600'
                        }`}>
                          {testimonial.author}
                        </div>
                        <div className={`text-sm transition-colors duration-300 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {testimonial.role}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'hover:bg-indigo-500/20 hover:border-indigo-500/50 border border-slate-700/50'
                : 'hover:bg-indigo-100 hover:border-indigo-400 border border-gray-300'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                animate={{
                  width: idx === activeIndex ? 32 : 12,
                  backgroundColor: idx === activeIndex
                    ? theme === 'dark' ? '#818cf8' : '#4f46e5'
                    : theme === 'dark' ? 'rgba(100, 116, 139, 0.5)' : 'rgba(209, 213, 219, 1)',
                }}
                transition={{ duration: 0.3 }}
                className="h-3 rounded-full"
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'hover:bg-indigo-500/20 hover:border-indigo-500/50 border border-slate-700/50'
                : 'hover:bg-indigo-100 hover:border-indigo-400 border border-gray-300'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
