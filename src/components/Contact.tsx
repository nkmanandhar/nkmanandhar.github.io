import { motion } from 'motion/react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-900/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-brand-400 tracking-wide uppercase mb-3">Get in Touch</h2>
            <p className="mt-2 text-4xl leading-10 font-display font-bold tracking-tight text-white sm:text-5xl mb-6">
              Let's build the future of education together.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              Whether you're interested in collaborative research, consulting on AI in education, or discussing STEAM pedagogy, I'm always open to connecting.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/5">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Email</p>
                  <a href="mailto:nkmanandhar@gmail.com" className="text-lg font-medium text-white hover:text-brand-400 transition-colors">
                    nkmanandhar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/5">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Phone</p>
                  <a href="tel:+9779844203453" className="text-lg font-medium text-white hover:text-brand-400 transition-colors">
                    +977-9844203453
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/5">
                  <Globe size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Website</p>
                  <a href="https://nkmanandhar.com.np" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-brand-400 transition-colors">
                    nkmanandhar.com.np
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/5">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Location</p>
                  <p className="text-lg font-medium text-white">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-slate-900 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
