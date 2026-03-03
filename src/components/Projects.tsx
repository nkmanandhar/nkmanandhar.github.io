import { motion } from 'motion/react';
import { Lightbulb, Target, Users, Code, Award } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Grants & Initiatives</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            Major Projects
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-6 border border-emerald-100">
                <Award className="w-4 h-4 mr-2" />
                University Grants Commission (UGC) Grant - 2025
              </div>
              
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4 leading-tight">
                Artificial Intelligence in Education Lab Development
              </h3>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Leading a groundbreaking initiative at Kathmandu University School of Education to establish a state-of-the-art AI in Education Lab. This project aims to position Nepal at the forefront of educational technology innovation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                      <Code size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-bold text-slate-900">AI Software Development</h4>
                    <p className="mt-1 text-sm text-slate-500">Creating AI-based applications tailored for educational contexts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Users size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-bold text-slate-900">Teacher Training</h4>
                    <p className="mt-1 text-sm text-slate-500">Empowering educators with Next-Gen AI skills and methodologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Target size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-bold text-slate-900">National Leadership</h4>
                    <p className="mt-1 text-sm text-slate-500">Leading the country's initiatives for integrating AI in education.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <Lightbulb size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-bold text-slate-900">Lab Infrastructure</h4>
                    <p className="mt-1 text-sm text-slate-500">Developing physical and digital infrastructure for AI research.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-center items-center text-center">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Value</div>
              <div className="text-4xl font-display font-bold text-brand-600 mb-2">NRs. 10M</div>
              <div className="text-lg font-medium text-slate-600 mb-6">(USD 70k)</div>
              
              <div className="w-full h-px bg-slate-200 mb-6"></div>
              
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Focus Areas</div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700">AI in Ed</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700">Software Dev</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700">Training</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700">Infrastructure</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
