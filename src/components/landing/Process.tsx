import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Code, Rocket } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const steps = [
  { number: '01', title: 'Discovery', description: 'Understanding your vision', icon: Lightbulb },
  { number: '02', title: 'Design', description: 'Crafting the experience', icon: CheckCircle },
  { number: '03', title: 'Development', description: 'Building with precision', icon: Code },
  { number: '04', title: 'Launch', description: 'Going live with confidence', icon: Rocket },
];

export default function Process() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="process"
      className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}
    >
      {/* Background lights */}
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300'
        }`}
      />
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className={`absolute bottom-1/3 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
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
            <span className="text-sm font-semibold">Our Process</span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            How We{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}
          >
            A streamlined process designed for collaboration and exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group"
              >
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                    className={`hidden md:block absolute top-20 left-[calc(50%+24px)] right-[calc(-100%+24px)] h-1 origin-left ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500'
                        : 'bg-gradient-to-r from-pink-400 to-rose-400'
                    }`}
                  />
                )}

                <div
                  className={`relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 h-full ${
                    theme === 'dark'
                      ? 'bg-neutral-900/60 border border-neutral-800 group-hover:border-pink-500/50 group-hover:shadow-pink-500/10'
                      : 'bg-white/80 border border-gray-200 group-hover:border-pink-400/50 group-hover:shadow-pink-300/20'
                  }`}
                >
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/5 to-rose-500/5 pointer-events-none"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-5xl font-bold bg-gradient-to-br from-pink-500 to-rose-500 bg-clip-text text-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      >
                        {step.number}
                      </motion.div>
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-white group-hover:text-pink-300'
                          : 'text-gray-900 group-hover:text-pink-600'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-neutral-400 group-hover:text-neutral-300'
                          : 'text-gray-600 group-hover:text-gray-700'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
