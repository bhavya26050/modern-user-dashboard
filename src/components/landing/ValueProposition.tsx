import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Zap, Layers, Target } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const values = [
  {
    icon: Zap,
    title: 'Faster Launch Cycles',
    description: 'Get your product to market in weeks, not months with our agile development process.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    lightGradient: 'from-indigo-500/10 to-blue-500/10',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one without technical debt or rewrites.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    lightGradient: 'from-violet-500/10 to-pink-500/10',
  },
  {
    icon: Target,
    title: 'Conversion-Driven UI',
    description: 'Every pixel optimized for user engagement and measurable business results.',
    gradient: 'from-orange-500/20 to-red-500/20',
    lightGradient: 'from-amber-500/10 to-orange-500/10',
  },
];

export default function ValueProposition() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-900/50 via-slate-900 to-slate-900/50'
        : 'bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50'
    }`}>
      {/* Dynamic lighting effects */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-300'
        }`}
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
            <span className="text-sm font-semibold">Our Services</span>
          </motion.div>

          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Frame & Code</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            We combine strategic thinking with exceptional execution to deliver results that matter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card
                  className={`p-8 relative overflow-hidden group transition-all duration-300 cursor-pointer h-full ${
                    theme === 'dark'
                      ? 'bg-slate-800/40 border-slate-700/50 hover:border-indigo-500/50 hover:shadow-indigo-500/20'
                      : 'bg-white/80 border-gray-200 hover:border-indigo-400/50 hover:shadow-indigo-300/20'
                  }`}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' ? value.lightGradient : value.gradient} pointer-events-none`}
                  />

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                    className="relative z-10"
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center backdrop-blur-sm ${
                        theme === 'dark'
                          ? 'bg-indigo-500/20 group-hover:bg-indigo-500/30'
                          : 'bg-indigo-100/80 group-hover:bg-indigo-200'
                      }`}
                    >
                      <Icon className={`w-7 h-7 transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-indigo-400 group-hover:text-indigo-300'
                          : 'text-indigo-600 group-hover:text-indigo-700'
                      }`} />
                    </motion.div>

                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'text-white group-hover:text-indigo-300'
                        : 'text-gray-900 group-hover:text-indigo-600'
                    }`}>
                      {value.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'text-slate-400 group-hover:text-slate-300'
                        : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {value.description}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
