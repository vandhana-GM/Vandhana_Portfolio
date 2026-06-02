import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Star, Sparkles, Building } from 'lucide-react';
import { portfolioData } from '../types';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 bg-white dark:bg-slate-900 border-y border-gray-200/50 dark:border-slate-800/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 mr-1" />
            <span>Professional Vector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-sans">
            Gaining concrete corporate expertise in software development methodologies and full-stack system structures.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Virtual Center Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1.5px] bg-gray-200 dark:bg-slate-800" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-start justify-between mb-12 md:even:flex-row-reverse group"
            >
              {/* Timeline marker with Briefcase background and pulsating ring */}
              <div className="absolute left-4 md:left-1/2 -translate-x-[15px] md:-translate-x-1/2 top-1.5 w-[30px] h-[30px] rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-md z-10 transition-transform group-hover:scale-110">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Grid content blocks */}
              <div className="w-full md:w-[45%] pl-10 md:pl-0 md:text-right md:even:text-left">
                {/* Meta details (period) outside major card */}
                <div className="mb-2 flex md:justify-end md:group-even:justify-start items-center space-x-2">
                  <span className="inline-flex items-center text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20 px-2.5 py-1 rounded">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Main Card Item */}
              <div className="w-full md:w-[45%] pl-10 md:pl-0">
                <div className="bg-slate-50 dark:bg-slate-950/60 border border-gray-200/50 dark:border-slate-850 hover:bg-slate-100/50 dark:hover:bg-slate-950/90 rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-600 to-indigo-600" />
                  
                  {/* Decorative Sparkle icon */}
                  <div className="absolute top-3 right-3 text-blue-600/15 dark:text-blue-400/10 opacity-100 group-hover:opacity-100 group-hover:rotate-12 transition-all">
                    <Sparkles className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-gray-950 dark:text-white leading-tight flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-blue-500" />
                    {exp.company}
                  </h3>
                  <h4 className="text-base font-bold text-indigo-600 dark:text-blue-400 mt-1">
                    {exp.role}
                  </h4>

                  {/* Duties list */}
                  <ul className="mt-5 space-y-3.5 text-left">
                    {exp.description.map((duty, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                          {duty}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tag Cloud */}
                  <div className="mt-6 pt-5 border-t border-gray-200/50 dark:border-slate-850 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-2 py-0.5 rounded transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
