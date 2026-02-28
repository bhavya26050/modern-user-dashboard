import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

const footerLinks = [
  { title: 'Services', links: ['Web Development', 'Product Design', 'Consulting', 'Mobile Apps'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`px-6 lg:px-8 pt-20 pb-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-black border-t border-neutral-800/50' : 'bg-gray-50 border-t border-gray-200'
      }`}
    >
      {/* Subtle gradient bg */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-pink-600/5' : 'bg-pink-400/10'
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Frame & Code
            </h3>
            <p className={`max-w-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
              Modern digital product studio building high-performance web applications that drive growth and delight users.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-neutral-900/60 text-neutral-400 hover:bg-pink-500/20 hover:text-pink-400 border border-neutral-800 hover:border-pink-500/30'
                        : 'bg-white text-gray-500 hover:bg-pink-50 hover:text-pink-600 border border-gray-200 hover:border-pink-300'
                    }`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            >
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`group inline-flex items-center gap-1 text-sm transition-all duration-300 ${
                        theme === 'dark' ? 'text-neutral-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'
                      }`}
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t ${
            theme === 'dark' ? 'border-neutral-800/50' : 'border-gray-200'
          }`}
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-neutral-500' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} Frame & Code. All rights reserved.
          </p>
          <p className={`text-sm flex items-center gap-1 ${theme === 'dark' ? 'text-neutral-500' : 'text-gray-500'}`}>
            Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> by Frame & Code
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
