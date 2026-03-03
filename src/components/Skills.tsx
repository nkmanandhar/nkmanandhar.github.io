import { motion } from 'motion/react';
import { Code, Database, BrainCircuit, LineChart, Users, Laptop } from 'lucide-react';

const skillCategories = [
  {
    title: 'Research Skills',
    icon: LineChart,
    skills: ['Quantitative Research', 'Qualitative Research', 'Mixed Methods', 'Participatory Action Research'],
  },
  {
    title: 'Programming & Data',
    icon: Code,
    skills: ['Python (Data & Learning Analytics)', 'R Programming', 'SQL (Data Science)', 'Database Management (MySQL)'],
  },
  {
    title: 'Educational Technology',
    icon: Laptop,
    skills: ['AI in Education', 'Learning Analytics', 'LMS (MOODLE) Management', 'Web Development', 'Graphic Design', 'Video Editing'],
  },
  {
    title: 'Teaching & Leadership',
    icon: Users,
    skills: ['University Teaching (Master’s/MPhil)', 'Research Supervision', 'Curriculum Development', 'STEAM Education Innovation'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            Skills & Competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <category.icon size={24} />
                </div>
                <h3 className="ml-4 text-xl font-display font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-brand-400 rounded-full flex-shrink-0"></span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
