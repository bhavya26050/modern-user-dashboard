import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { addContact } from '../../lib/contactStore';

export default function ContactForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to contact store so dashboard can track it
    addContact(formData);
    console.log('Contact saved:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@frameandcode.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Office', value: 'San Francisco, CA' },
  ];

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3.5 rounded-xl border transition-all duration-300 outline-none ${
      theme === 'dark'
        ? `bg-neutral-900/60 border-neutral-800 text-white placeholder:text-neutral-500 ${
            focusedField === fieldName
              ? 'border-pink-500/50 ring-2 ring-pink-500/20 bg-neutral-900/80'
              : 'hover:border-neutral-700'
          }`
        : `bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 ${
            focusedField === fieldName
              ? 'border-pink-400 ring-2 ring-pink-400/20 bg-white'
              : 'hover:border-gray-300'
          }`
    }`;

  return (
    <section
      id="contact"
      className={`py-28 px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}
    >
      {/* Background */}
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300'
        }`}
      />
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
          theme === 'dark' ? 'bg-rose-600' : 'bg-rose-300'
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            <span className="text-sm font-semibold">Get In Touch</span>
          </motion.div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Let's Talk About Your{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div
                  className={`flex items-start gap-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 group ${
                    theme === 'dark'
                      ? 'bg-neutral-900/60 border-neutral-800 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10'
                      : 'bg-white/80 border-gray-200 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-200/30'
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3
                      className={`font-semibold mb-1 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white group-hover:text-pink-300' : 'text-gray-900 group-hover:text-pink-600'
                      }`}
                    >
                      {item.label}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your name"
                  required
                  className={inputClasses('name')}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your@email.com"
                  required
                  className={inputClasses('email')}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}`}>
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField(null)}
                placeholder="Your company"
                className={inputClasses('company')}
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="Tell us about your project..."
                required
                rows={5}
                className={`${inputClasses('message')} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: theme === 'dark' ? '0 0 40px rgba(236, 72, 153, 0.4)' : '0 0 40px rgba(219, 39, 119, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  : 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50'
              }`}
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-neutral-800'
                  : 'bg-gradient-to-br from-pink-50 to-rose-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Response Time
              </h3>
              <p className={`leading-relaxed mb-4 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                We typically respond to inquiries within 24 hours on business days. For urgent matters, feel free to call us directly.
              </p>
              <div className="space-y-3">
                {['Available Mon-Fri, 9AM-6PM PST', 'Same-day responses for enterprise', 'Free consultation call'].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-400" />
                    <p className={theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}>{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-neutral-900/60 border-neutral-800 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10'
                  : 'bg-white/80 border-gray-200 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-200/30'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Follow Us
              </h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                Stay updated with our latest projects and insights.
              </p>
              <div className="flex gap-3 flex-wrap">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-neutral-800/60 text-neutral-300 border border-neutral-700/50 hover:bg-pink-500/20 hover:text-pink-300 hover:border-pink-500/50'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-400/50'
                    }`}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
