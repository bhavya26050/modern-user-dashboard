import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Users, DollarSign, Activity, TrendingUp } from 'lucide-react';

function AnimatedCounter({ target, label, suffix }: { target: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, isDecimal]);

  const display = isDecimal ? count.toFixed(2) : count.toLocaleString();

  return (
    <div>
      <div className="text-3xl font-bold mb-1">
        {suffix === '$' ? `$${display}` : `${display}${suffix}`}
      </div>
      <p className="text-sm text-neutral-400">{label}</p>
    </div>
  );
}

const statsData = [
  { target: 1234, label: 'Active Users', suffix: '+', icon: Users },
  { target: 45678, label: 'Total Revenue', suffix: '$', icon: DollarSign },
  { target: 892, label: 'Active Sessions', suffix: '+', icon: Activity },
  { target: 3.42, label: 'Conversion Rate', suffix: '%', icon: TrendingUp },
];

export default function InteractiveStats() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-28 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-neutral-950' : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}
    >
      {/* Background */}
      <motion.div
        animate={{ opacity: [0.06, 0.15, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300'
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
            <span className="text-sm font-semibold">Proven Results</span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Real{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Metrics
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}
          >
            Real metrics from real projects — numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div
                  className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 group ${
                    theme === 'dark'
                      ? 'bg-neutral-900/60 border-neutral-800 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10'
                      : 'bg-white/80 border-gray-200 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-200/30'
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  {isVisible && (
                    <div className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                      <AnimatedCounter target={stat.target} label={stat.label} suffix={stat.suffix} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
