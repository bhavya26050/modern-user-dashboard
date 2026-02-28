import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ParticleCanvas from './ParticleCanvas';

const typingWords = ['High-Performance', 'Scalable', 'Beautiful', 'Interactive'];

export default function Hero() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const currentWord = typingWords[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          if (displayText.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className={`min-h-screen pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}
    >
      {/* Interactive particle canvas */}
      <ParticleCanvas />

      {/* Floating orbs - concentrated on the right to match dust explosion */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0], opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/4 right-[10%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300'
        }`}
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, -10, 0], opacity: [0.04, 0.14, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute bottom-1/4 right-[20%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-rose-600' : 'bg-rose-300'
        }`}
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className={`absolute top-1/3 right-[5%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-fuchsia-600' : 'bg-fuchsia-300'
        }`}
      />

      {/* Grid pattern */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.02]'
        }`}
        style={{
          backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border w-fit backdrop-blur-sm transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-pink-500/10 border-pink-500/30 text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/20'
                : 'bg-pink-100/80 border-pink-300 text-pink-700 hover:border-pink-400 hover:bg-pink-100'
            }`}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-semibold">Welcome to Frame & Code</span>
          </motion.div>

          {/* Heading with typing effect */}
          <motion.h1
            variants={itemVariants}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            We Design & Build{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-gradient-to-b from-pink-400 to-rose-400 rounded-full"
              />
            </span>{' '}
            Web Products
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-2xl transition-colors duration-500 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}
          >
            Crafting digital experiences that drive growth and delight users. From concept to launch,
            we bring innovation to every pixel.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: theme === 'dark' ? '0 0 50px rgba(236, 72, 153, 0.5)' : '0 0 50px rgba(219, 39, 119, 0.35)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-2xl font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              Get Started
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 w-full sm:w-auto backdrop-blur-sm ${
                theme === 'dark'
                  ? 'border-neutral-800 hover:bg-neutral-900 text-white hover:border-pink-500/50'
                  : 'border-gray-300 hover:bg-gray-50 text-gray-900 hover:border-pink-400'
              }`}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className={`grid grid-cols-3 gap-8 pt-16 border-t ${
              theme === 'dark' ? 'border-neutral-800/50' : 'border-gray-200'
            }`}
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '12+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                className={`p-4 rounded-2xl cursor-default transition-all duration-300 ${
                  theme === 'dark' ? 'hover:bg-neutral-900/60' : 'hover:bg-gray-50'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.15, duration: 0.6, type: 'spring' }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className={`text-sm transition-colors duration-500 ${theme === 'dark' ? 'text-neutral-500' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5 ${
            theme === 'dark' ? 'border-neutral-700' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-pink-400' : 'bg-gray-500'}`}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
