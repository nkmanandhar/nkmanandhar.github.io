import { motion } from 'motion/react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'Factors affecting the integration of generative artificial intelligence in mathematics education in Nepal: A survey study.',
    authors: 'Manandhar, N. K.',
    year: 'In Press',
    type: 'Journal Article',
  },
  {
    title: 'Perceptions and readiness of faculty and students in AI integration in university education: A survey study.',
    authors: 'Manandhar, N. K.',
    year: 'In Press',
    type: 'Journal Article',
  },
  {
    title: 'Integrated projects for meaningful learning: a collaborative action research from Nepal.',
    authors: 'Pandey, D., Sunar, P. K., Manadhar, N. K., & Pant, B. P.',
    year: '2025',
    type: 'Journal Article',
    link: 'https://doi.org/10.1080/03004279.2025.2495969',
  },
  {
    title: 'Stories of stress: Unveiling professional anxiety in mathematics teaching.',
    authors: 'Simkhada, D. R., Dahal, N., Pant, B. P., Luitel, L., Manandhar, N. K.',
    year: '2025',
    type: 'Journal Article',
    link: 'https://doi.org/10.3389/feduc.2025.1553932',
  },
  {
    title: 'STEAM Education in Nepal: Status, Opportunities, Challenges and Future Perspectives for Nurturing 21st Century Learners.',
    authors: 'Pant, B. P., Dahal, N., Luitel, B. C., Shrestha, I. M., Manandhar, N. K., ...Luitel, L.',
    year: '2024',
    type: 'Journal Article',
    link: 'https://doi.org/10.3126/mefc.v9i1.73876',
  },
  {
    title: 'Connecting academic and non-academic lifeworlds for envisioning a transformative STEAM Education in Nepal: An evocative autoethnographic inquiry',
    authors: 'Manandhar, N. K.',
    year: '2021',
    type: 'Dissertation',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Research & Writing</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            Selected Publications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {pub.type === 'Dissertation' ? (
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                  ) : (
                    <FileText className="w-5 h-5 text-brand-500" />
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {pub.type}
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-900 bg-white px-2 py-1 rounded-md border border-slate-200">
                  {pub.year}
                </span>
              </div>
              
              <h3 className="text-lg font-display font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand-600 transition-colors duration-200">
                {pub.title}
              </h3>
              
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                {pub.authors}
              </p>
              
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 mt-auto"
                >
                  Read Publication
                  <ExternalLink className="ml-1.5 w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-200"
          >
            View All on Google Scholar
            <ExternalLink className="ml-2 -mr-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
