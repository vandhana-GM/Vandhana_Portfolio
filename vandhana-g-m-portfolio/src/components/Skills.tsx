import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Cpu, Terminal, Code, Database, Binary, Box, Layers, HardDrive, 
  BrainCircuit, Globe, Braces, Sparkles, Server, ServerCrash, GitBranch, 
  PenTool, Activity, Figma, Layout, BarChart, FileSpreadsheet, Eye 
} from 'lucide-react';
import { portfolioData, Skill } from '../types';

// Map icon names to Lucide icons safely
const iconMap: { [key: string]: any } = {
  Cpu, Terminal, Code, Database, Binary, Box, Layers, HardDrive,
  BrainCircuit, Globe, Braces, Sparkles, Server, ServerCrash,
  GitBranch, PenTool, Activity, Figma, Layout, BarChart3: BarChart,
  FileSpreadsheet
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'concepts' | 'web' | 'tools'>('all');
  const skills = portfolioData.skills;

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'programming', label: 'Programming Langs' },
    { id: 'concepts', label: 'Core Concepts' },
    { id: 'web', label: 'Web Stack (MERN)' },
    { id: 'tools', label: 'Tools & Analytics' },
  ];

  const filteredSkills = skills.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming': return 'from-blue-600 to-indigo-600';
      case 'concepts': return 'from-violet-600 to-fuchsia-600';
      case 'web': return 'from-emerald-600 to-teal-500';
      case 'tools': return 'from-amber-500 to-orange-600';
      default: return 'from-blue-600 to-violet-600';
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'programming': return 'Programming Languages';
      case 'concepts': return 'Core CS Concepts';
      case 'web': return 'Web & Application Development';
      case 'tools': return 'Tools, Design & Analytics';
      default: return 'Skill Set';
    }
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 mr-1" />
            <span>Technical Armor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-sans">
            A precise review of engineering methodologies, technology layers, and intelligence models I specialize in.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skills-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-800 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill: Skill, index: number) => {
            const Icon = iconMap[skill.iconName] || Code2;
            const gradColor = getCategoryColor(skill.category);
            
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
                className="bg-white dark:bg-slate-900 border border-gray-200/50 dark:border-slate-850 p-5 rounded-2xl shadow-xs hover:shadow-md hover:border-gray-300 dark:hover:border-slate-800 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradColor} text-white shadow-sm`}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-950 dark:text-white text-base leading-tight">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] text-gray-500 dark:text-gray-450 uppercase font-mono tracking-wider font-semibold">
                        {getCategoryTitle(skill.category)}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Customized Progress Bar */}
                <div className="w-full h-2.5 bg-gray-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${gradColor} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* General CS Foundations Section Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500/5 to-violet-500/5 dark:from-blue-950/20 dark:to-violet-950/30 border border-blue-500/10 dark:border-blue-500/5 rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-block text-[11px] font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded">
                Academics & Problem Solving
              </span>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                Strong Foundation in Data Structures & AI Methodologies
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-sans max-w-2xl">
                Combining object-oriented database design (MySQL), systems principles (Operating Systems), and mathematical model trainings (Machine Learning algorithms).
              </p>
            </div>
            <div className="flex-shrink-0 bg-white dark:bg-slate-900 px-5 py-3 border border-gray-200 dark:border-slate-800 rounded-2xl flex items-center space-x-3 shadow-xs">
              <Eye className="w-5 h-5 text-indigo-500 animate-pulse" />
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-450 font-medium">Core CGPA</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">8.00 / 10</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
