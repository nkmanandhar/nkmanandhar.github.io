import { motion } from 'motion/react';
import { BookOpen, Award, GraduationCap, Code } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'MPhil GPA', value: '3.96', icon: GraduationCap },
    { label: 'MEd GPA', value: '3.95', icon: Award },
    { label: 'Publications', value: '15+', icon: BookOpen },
    { label: 'Tech Skills', value: 'Python, R, SQL', icon: Code },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            Bridging the gap between Pedagogy and Technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg text-slate-600"
          >
            <p className="mb-6">
              As a Lecturer and Undergraduate Program Coordinator at Kathmandu University School of Education, I am deeply committed to advancing STEAM Education, Educational Technology, and the integration of Artificial Intelligence in learning environments.
            </p>
            <p className="mb-6">
              My academic journey, marked by a Gold Medal (Nepal Bidhya Bhushan 'kha') and exceptional academic records (MPhil GPA 3.96, MEd GPA 3.95), reflects my dedication to academic excellence. I actively teach Master's and MPhil courses, supervise dissertations, and lead research initiatives focusing on Learning Analytics and Transformative Educational Research.
            </p>
            <p>
              Currently, I am spearheading a major UGC Grant project (NRs. 10 million) to develop an Artificial Intelligence in Education Lab at Kathmandu University, aiming to position Nepal at the forefront of AI-driven educational innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-brand-100 text-brand-600 mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
