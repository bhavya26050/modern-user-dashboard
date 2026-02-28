import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: 'Frame & Code transformed our vision into reality. Their attention to detail and technical excellence is unmatched.',
    author: 'Sarah Chen',
    role: 'CEO, TechVenture Inc',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Working with this team was seamless. They understood our goals and delivered beyond expectations.',
    author: 'Marcus Thompson',
    role: 'Founder, Digital Studios',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    rating: 5,
  },
  {
    id: 3,
    quote: 'The level of professionalism and innovation they brought to our project was exceptional. Highly recommended!',
    author: 'Emma Rodriguez',
    role: 'Product Director, StartupXYZ',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section
      id="testimonials"
      className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-neutral-950' : 'bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50'
      }`}
    >
      {/* Background */}
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300'
        }`}
      />
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className={`absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-rose-600' : 'bg-rose-300'
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
                ? 'bg-pink-500/10 border-pink-500/30 text-pink-400'
                : 'bg-pink-100/80 border-pink-300 text-pink-700'
            }`}
          >
            <span className="text-sm font-semibold">Client Testimonials</span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}
          >
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
                      ? 'bg-neutral-900/60 border-neutral-800 hover:border-pink-500/50 hover:shadow-pink-500/10'
                      : 'bg-white/80 border-gray-200 hover:border-pink-400/50 hover:shadow-pink-300/20'
                  }`}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${
                      theme === 'dark' ? 'from-pink-500/5 to-rose-500/5' : 'from-pink-300/10 to-rose-300/10'
                    } pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 0 }}
                          animate={{ rotate: 360, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        >
                          <Star
                            className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    <p
                      className={`mb-8 leading-relaxed text-lg italic transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                      }`}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div
                      className={`flex items-center gap-4 pt-6 border-t transition-colors duration-300 ${
                        theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'
                      }`}
                    >
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className={`w-14 h-14 rounded-full object-cover border-2 transition-all duration-300 ${
                          theme === 'dark'
                            ? 'border-pink-500/30 group-hover:border-pink-500'
                            : 'border-pink-300 group-hover:border-pink-500'
                        }`}
                      />
                      <div>
                        <div
                          className={`font-bold transition-colors duration-300 ${
                            theme === 'dark' ? 'text-white group-hover:text-pink-300' : 'text-gray-900 group-hover:text-pink-600'
                          }`}
                        >
                          {testimonial.author}
                        </div>
                        <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
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
                ? 'hover:bg-pink-500/20 hover:border-pink-500/50 border border-neutral-800'
                : 'hover:bg-pink-100 hover:border-pink-400 border border-gray-300'
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
                  backgroundColor:
                    idx === activeIndex
                      ? theme === 'dark' ? '#ec4899' : '#db2777'
                      : theme === 'dark' ? 'rgba(115, 115, 115, 0.5)' : 'rgba(209, 213, 219, 1)',
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
                ? 'hover:bg-pink-500/20 hover:border-pink-500/50 border border-neutral-800'
                : 'hover:bg-pink-100 hover:border-pink-400 border border-gray-300'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
