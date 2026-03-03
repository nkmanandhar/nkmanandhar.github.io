import { motion } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-100/50 blur-3xl opacity-50" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>Available for Consulting & Collaborations</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Education</span> through AI & Data.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              I am <strong className="text-slate-900 font-semibold">Netra Kumar Manandhar</strong>, a Lecturer and STEAM Education Expert at Kathmandu University. I specialize in integrating AI, Learning Analytics, and Educational Technology to shape the future of learning.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Let's Collaborate
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-200"
              >
                View My Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Abstract visual representation instead of a photo since we don't have one */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-white shadow-2xl overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/education/800/800?blur=2')] opacity-40 mix-blend-overlay"></div>
              
              {/* Floating elements representing data/AI/education */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/50 flex items-center justify-center"
              >
                <div className="text-brand-600 font-display font-bold text-2xl">AI</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center justify-center"
              >
                <div className="text-indigo-600 font-display font-bold text-xl text-center leading-tight">STEAM<br/>Edu</div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 15, 0] }} 
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-white/50 flex items-center justify-center rotate-12"
              >
                <div className="text-emerald-600 font-display font-bold text-lg">Data</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
