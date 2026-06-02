import { motion } from 'motion/react';
import { User, BookOpen, GraduationCap, Award, Calendar, Heart, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../types';

export default function About() {
  const { aboutMe, college, degree, cgpa } = portfolioData.personalInfo;

  const milestones = [
    {
      year: '2022 - 2026',
      title: 'B.E. Computer Science and Engineering (AI & ML)',
      institution: 'Sri Eshwar College of Engineering',
      desc: 'Specialized focus in programming paradigms, machine learning engineering, data structures, algorithms design, and database integrity.',
      badge: 'CGPA: 8.00 / 10',
    },
    {
      year: '2020 - 2022',
      title: 'Higher Secondary Schooling',
      institution: 'Board of Secondary Education',
      desc: 'Excelled in mathematics, physics, and computer science applications, fostering strong problem-solving fundamentals.',
      badge: 'First Class with Distinction',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white dark:bg-slate-900 border-y border-gray-200/50 dark:border-slate-800/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 mr-1" />
            <span>Developer Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight">
            About My Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-sans">
            Bridging fundamental software systems with next-tier intelligence architectures.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story Cards */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-gray-200/50 dark:border-slate-850 shadow-sm relative group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-blue-600/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              
              <h3 className="text-xl font-display font-bold text-gray-950 dark:text-white flex items-center mb-4">
                <Heart className="w-5 h-5 text-red-500 mr-2.5 fill-red-500/10" />
                Who I Am & My Commitment
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-sans text-sm sm:text-base">
                {aboutMe}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-250/50 dark:border-slate-800">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">AI-Driven Coding</h5>
                    <p className="text-[11px] text-gray-500 dark:text-gray-450 mt-0.5">Scoping smart models & vision pipelines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">MERN Integration</h5>
                    <p className="text-[11px] text-gray-500 dark:text-gray-450 mt-0.5">Crafting complete web ecosystems</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Educational Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-display font-bold text-gray-950 dark:text-white flex items-center px-1 mb-2">
              <GraduationCap className="w-5.5 h-5.5 text-blue-600 dark:text-blue-400 mr-2.5" />
              Educational Background
            </h3>

            <div className="relative border-l border-gray-200 dark:border-slate-800 ml-4 space-y-8 py-2">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-7 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 dark:bg-blue-500 scale-100 group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Milestones Content */}
                  <div className="bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100/50 dark:hover:bg-slate-950/90 border border-gray-250/40 dark:border-slate-850 p-5 rounded-xl transition-all shadow-xs">
                    <span className="inline-flex items-center text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20 px-2 py-0.5 rounded mr-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.year}
                    </span>
                    <span className="inline-block text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                    
                    <h4 className="text-base sm:text-lg font-display font-bold text-gray-900 dark:text-white mt-3">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
