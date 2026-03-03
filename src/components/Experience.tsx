import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Lecturer & Undergraduate Program Coordinator',
    company: 'Kathmandu University School of Education',
    date: 'Feb 2022 – Present',
    description: [
      'Coordinate Undergraduate Programs (IT & Mathematics Education).',
      'Teach and supervise research related to Educational Technology, AI in Education, Transformative STEAM Education, Learning Analytics, Research Methods, & Data Analytics.',
      'Supervise MPhil and Master level dissertations/theses.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Kathmandu University School of Education',
    date: 'Jul 2021 – Jan 2022',
    description: [
      'Conducted research and assisted in academic projects within the Department of STEAM Education.',
    ],
  },
  {
    role: 'Visiting Faculty & Quality Assurance Member',
    company: 'Kathmandu University School of Education',
    date: 'Jan 2019 – Jun 2021',
    description: [
      'Served as Visiting Faculty in the Department of STEAM Education.',
      'Acted as Quality Assurance Member under NORHED Quantict and Rupantaran Projects.',
    ],
  },
  {
    role: 'Mathematics Teacher/Educator',
    company: 'Various Institutions',
    date: 'Apr 2010 – Jan 2018',
    description: [
      'Taught mathematics at Graduate, Undergraduate, Higher Secondary, and Secondary levels.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Experience</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            Professional Journey
          </p>
        </div>

        <div className="relative border-l border-slate-200 ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-6 md:ml-10 relative"
            >
              <span className="absolute -left-[35px] md:-left-[49px] flex items-center justify-center w-8 h-8 bg-white rounded-full ring-4 ring-slate-50 border border-slate-200">
                <Briefcase className="w-4 h-4 text-brand-600" />
              </span>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-slate-900">{exp.role}</h3>
                  <div className="flex items-center text-sm text-slate-500 mt-2 sm:mt-0 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.date}
                  </div>
                </div>
                <h4 className="text-lg font-medium text-brand-600 mb-4">{exp.company}</h4>
                <ul className="space-y-2 text-slate-600">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-brand-400 rounded-full flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
