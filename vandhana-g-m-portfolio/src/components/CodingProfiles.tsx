import { motion } from 'motion/react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Award, Code, CheckCircle, ExternalLink, Calendar, Flame, Zap, Check } from 'lucide-react';
import { portfolioData, CodingProfile } from '../types';

export default function CodingProfiles() {
  const profiles = portfolioData.codingProfiles;

  // Let's create an elegant data representation for her solved problems trend (Recharts visual!)
  // This shows standard consistency of a premium developer.
  const solvedTrendData = [
    { month: 'Jan', solved: 150, rate: 85 },
    { month: 'Mar', solved: 380, rate: 90 },
    { month: 'Jun', solved: 600, rate: 88 },
    { month: 'Sep', solved: 820, rate: 92 },
    { month: 'Dec', solved: 1010, rate: 95 },
    { month: '2026', solved: 1100, rate: 98 },
  ];

  return (
    <section
      id="profiles"
      className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-gray-250/30 dark:border-slate-850/50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5 mr-1" />
            <span>Problem Solver Cockpit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight">
            Algorithmic Standing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-sans">
            Tracking code velocity and structured problem-solving metrics across top assessment platforms.
          </p>
        </div>

        {/* Cockpit Cockpit Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Stats Cockpits for SkillRack & LeetCode */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {profiles.map((profile: CodingProfile, index: number) => {
              const isLeet = profile.platform.toLowerCase() === 'leetcode';
              const themeColor = isLeet ? 'orange' : 'blue';
              
              return (
                <motion.div
                  key={profile.platform}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900 border border-gray-200/50 dark:border-slate-850 p-6 rounded-3xl shadow-sm relative group hover:border-violet-500/30 transition-all duration-300 flex-grow"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-violet-600 rounded-l" />

                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white font-display font-black text-xl shadow-xs relative overflow-hidden ${
                        isLeet 
                          ? 'bg-gradient-to-br from-amber-500 to-orange-600' 
                          : 'bg-gradient-to-br from-blue-600 to-blue-800'
                      }`}>
                        {profile.platform[0]}
                      </div>
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-gray-950 dark:text-white leading-none">
                          {profile.platform}
                        </h4>
                        <span className="text-[10px] text-gray-500 font-mono tracking-wider mt-1.5 inline-block">
                          VERIFIED CANDIDATE
                        </span>
                      </div>
                    </div>

                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 px-2.2 text-xs font-semibold rounded-lg bg-gray-50 dark:bg-slate-950 dark:hover:bg-slate-850 hover:bg-gray-100 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-slate-800 flex items-center gap-1 transition"
                    >
                      <span>Public Slate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Solved Big metrics block */}
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100 dark:border-slate-850">
                    <div className="space-y-1 text-left">
                      <span className="text-gray-400 dark:text-gray-400 text-[10px] font-mono tracking-wide uppercase font-semibold">Problems Solved</span>
                      <p className="text-3xl font-display font-black text-gray-900 dark:text-white leading-none">
                        {profile.problemsSolved}+
                      </p>
                    </div>

                    <div className="space-y-1 text-left pl-3 border-l border-gray-150">
                      <span className="text-gray-400 dark:text-gray-400 text-[10px] font-mono tracking-wide uppercase font-semibold">Active Standing</span>
                      <p className="text-lg font-display font-bold text-gray-900 dark:text-white mt-1">
                        {profile.badge}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet Pointers */}
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold font-mono text-gray-500 dark:text-gray-450">
                    <span className="flex items-center text-orange-600 bg-orange-500/10 px-2 py-0.5 rounded">
                      <Flame className="w-3.5 h-3.5 mr-1" />
                      {profile.stars}
                    </span>
                    <span className="flex items-center text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full">
                      <Check className="w-3 h-3 mr-0.5" /> Checked Sync
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Recharts Algorithmic Growth Curve Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-200/50 dark:border-slate-850 p-6 rounded-3xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between pb-4 border-b border-gray-150 dark:border-slate-850">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-gray-950 dark:text-white">
                    Solved Progression Trajectory
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    Visualizing cumulative progress and consistency curves across platforms over time.
                  </p>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-600 font-mono text-[11px] font-bold">
                  <Zap className="w-3.5 h-3.5 mr-0.5 animate-bounce" />
                  <span>100% Verified</span>
                </div>
              </div>

              {/* Solved Trends area Chart (Pure visual delight) */}
              <div className="w-full h-52 sm:h-56 mt-4 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={solvedTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSolved" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      stroke="#888888" 
                      fontSize={11} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#888888" 
                      fontSize={11} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(15, 23, 42, 0.95)', 
                        border: 'none', 
                        borderRadius: '12px',
                        fontSize: '11px',
                        color: '#fff'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="solved" 
                      stroke="#6366f1" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorSolved)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Trajectory Footnote checklist */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-gray-150 dark:border-slate-850 text-xs text-gray-650 dark:text-gray-450 leading-relaxed font-sans">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Optimal Time Complexity:</strong> Striving for O(N) or O(log N) optimal runtime solutions.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Consistent Streaks:</strong> Direct, frequent commits focusing on DSA paradigm enhancements.</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
