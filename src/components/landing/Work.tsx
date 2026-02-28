import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../ImageWithFallback';
import { useTheme } from '../../context/ThemeContext';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Citizen Portal Gov.in',
    category: 'Full Stack Development',
    description:
      'Scalable government application portal serving lakhs of users with secure OTP + JWT authentication, RBAC-based access control, and performance-optimized Angular architecture.',
    tags: ['Angular', 'Java', 'JWT', 'REST APIs'],
    image: '/images/citizen-portal.png',
    link: 'https://apps.mgov.gov.in',
  },
  {
    title: 'NCS - National Career Service',
    category: 'Frontend & UI/UX',
    description:
      'Built secure employer and jobseeker authentication flows with route guards, dynamic job posting modules, real-time validation (PAN, GST, Postal APIs), and responsive dashboard interfaces.',
    tags: ['Angular', 'Java', 'RxJS', 'REST APIs'],
    image: '/images/ncs.png',
    link: 'https://betacloud.ncs.gov.in',
  },
  {
    title: 'KNK Aquarium E-Commerce',
    category: 'Full Stack Development',
    description:
      'Custom-built e-commerce platform with dynamic product catalog, OAuth authentication, admin dashboard, order tracking, and optimized MySQL-backed architecture.',
    tags: ['React', 'Node.js', 'MySQL', 'OAuth'],
    image: '/images/knk.png',
    link: 'https://knkaquarium.com',
  },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function Work() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className={`py-28 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-neutral-950' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}
    >
      {/* Background decoration */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-400/30'
        }`}
      />
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-rose-600' : 'bg-rose-400/30'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
            <span className="text-sm font-semibold">Featured Work</span>
          </motion.div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Selected{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}
          >
            Explore our portfolio of successful digital transformations
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === cat
                  ? theme === 'dark'
                    ? 'bg-pink-500/20 border-pink-500/50 text-pink-300 shadow-lg shadow-pink-500/10'
                    : 'bg-pink-100 border-pink-400 text-pink-700 shadow-lg shadow-pink-200/50'
                  : theme === 'dark'
                  ? 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                  : 'bg-white/60 border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
                className="group relative cursor-pointer"
                onClick={() => window.open(project.link, '_blank')}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`relative h-full backdrop-blur-xl rounded-[24px] overflow-hidden shadow-lg border transition-all duration-500 ${
                    theme === 'dark'
                      ? 'bg-neutral-900/60 border-neutral-800 hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/10'
                      : 'bg-white/80 border-gray-200 hover:border-pink-400/60 hover:shadow-2xl hover:shadow-pink-200/60'
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative h-56 sm:h-64 overflow-hidden ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-neutral-900 to-black'
                        : 'bg-gradient-to-br from-gray-100 to-gray-200'
                    }`}
                  >
                    <motion.div
                      animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-t ${
                        theme === 'dark'
                          ? 'from-black/90 via-black/40 to-transparent'
                          : 'from-black/60 via-black/20 to-transparent'
                      } flex items-end justify-between p-5`}
                    >
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 10,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex items-center gap-2 text-white text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Project
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 400 }}
                        className="w-10 h-10 rounded-full bg-pink-500/30 backdrop-blur-md flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-md ${
                          theme === 'dark'
                            ? 'bg-white/10 text-white border border-white/20'
                            : 'bg-white/80 text-gray-800 border border-gray-200'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <h3
                      className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-white group-hover:text-pink-300'
                          : 'text-gray-900 group-hover:text-pink-600'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed line-clamp-3 transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-neutral-400 group-hover:text-neutral-300'
                          : 'text-gray-600 group-hover:text-gray-700'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 cursor-default ${
                            theme === 'dark'
                              ? 'bg-neutral-800/60 text-neutral-300 border-neutral-700/50 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-300'
                              : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-pink-400/50 hover:bg-pink-50 hover:text-pink-600'
                          }`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Animated bottom border */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="h-0.5 rounded-full origin-left bg-gradient-to-r from-pink-500 to-rose-500"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: theme === 'dark' ? '0 0 40px rgba(236, 72, 153, 0.4)' : '0 0 40px rgba(219, 39, 119, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
