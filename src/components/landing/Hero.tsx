import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className={`min-h-screen pt-32 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}
    >
      {/* Animated lighting background */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-300'
        }`}
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className={`absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-violet-600' : 'bg-violet-300'
        }`}
      />

      {/* Gradient overlay lighting */}
      <div className={`absolute inset-0 pointer-events-none ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-indigo-500/0 via-transparent to-violet-500/5'
          : 'bg-gradient-to-b from-indigo-300/10 via-transparent to-violet-300/10'
      }`} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border w-fit backdrop-blur-sm transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/20'
                : 'bg-indigo-100/80 border-indigo-300 text-indigo-700 hover:border-indigo-400 hover:bg-indigo-100'
            }`}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 rounded-full bg-indigo-400"
            />
            <span className="text-sm font-semibold">Welcome to Frame & Code</span>
          </motion.div>

          {/* Heading with gradient animation */}
          <motion.h1
            variants={itemVariants}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            We Design & Build{' '}
            <motion.span
              initial={{ backgroundPosition: '0% center' }}
              animate={{ backgroundPosition: '100% center' }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent bg-200%"
            >
              High-Performance
            </motion.span>{' '}
            Web Products
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-2xl transition-colors duration-500 ${
              theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
            }`}
          >
            Crafting digital experiences that drive growth and delight users. From concept to launch, we bring innovation to every pixel.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: theme === 'dark' ? '0 0 40px rgba(99, 102, 241, 0.6)' : '0 0 40px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 w-full sm:w-auto backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'border-slate-700/50 hover:bg-slate-800/50 text-white hover:border-indigo-500/50'
                    : 'border-gray-300 hover:bg-gray-50 text-gray-900 hover:border-indigo-400'
                }`}
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Stats with staggered animation */}
          <motion.div
            variants={itemVariants}
            className={`grid grid-cols-3 gap-8 pt-12 border-t ${
              theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200'
            }`}
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '98%', label: 'Satisfaction' },
              { value: '12+', label: 'Years' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p
                  className={`text-sm transition-colors duration-500 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
