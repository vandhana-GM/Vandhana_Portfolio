import { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Search, CheckCircle2, Star, Calendar, Bookmark, Hash } from 'lucide-react';
import { portfolioData, Certification, Achievement } from '../types';

export default function Achievements() {
  const achievements = portfolioData.achievements;
  const certifications = portfolioData.certifications;
  
  const [searchCert, setSearchCert] = useState('');
  const [filterIssuer, setFilterIssuer] = useState<'all' | 'IIT' | 'NPTEL' | 'HP' | 'Learning'>('all');

  // Filter certifications based on search term or issuer criteria
  const filteredCerts = certifications.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchCert.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(searchCert.toLowerCase());
    
    if (filterIssuer === 'all') return matchesSearch;
    if (filterIssuer === 'IIT') return matchesSearch && cert.issuer.includes('IIT');
    if (filterIssuer === 'NPTEL') return matchesSearch && cert.issuer.includes('NPTEL');
    if (filterIssuer === 'HP') return matchesSearch && cert.issuer.includes('HP');
    if (filterIssuer === 'Learning') return matchesSearch && cert.issuer.includes('Great Learning');
    return matchesSearch;
  });

  return (
    <section
      id="academics"
      className="py-20 sm:py-24 bg-white dark:bg-slate-900 border-b border-gray-200/50 dark:border-slate-800/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 mr-1" />
            <span>Laurels & Badges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight">
            Credentials & Achievements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-sans">
            Demonstrated capabilities validated through competitive assessments and global certification platforms.
          </p>
        </div>

        {/* Double Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Competitive Achievements & Laurels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between mb-2 px-1">
              <h3 className="text-xl font-display font-bold text-gray-950 dark:text-white flex items-center">
                <Trophy className="w-5.5 h-5.5 text-amber-500 mr-2.5 fill-amber-500/10" />
                Featured Achievements
              </h3>
              <span className="text-[10px] uppercase font-semibold font-mono tracking-wider bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded">
                Apex Rankings
              </span>
            </div>

            <div className="space-y-4">
              {achievements.map((item: Achievement, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100/50 dark:hover:bg-slate-950 border border-gray-250/40 dark:border-slate-850 p-5 rounded-2xl shadow-xs hover:shadow-md transition duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-l" />
                  
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                    {item.metric && (
                      <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-display font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Professional Certifications Section with Search / Filters */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
              <h3 className="text-xl font-display font-bold text-gray-950 dark:text-white flex items-center">
                <Award className="w-5.5 h-5.5 text-blue-600 dark:text-blue-400 mr-2.5" />
                Verified Certifications
              </h3>

              {/* Quick Search Bar */}
              <div className="relative max-w-xs h-9.5">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by title / issuer"
                  value={searchCert}
                  onChange={(e) => setSearchCert(e.target.value)}
                  className="pl-9 pr-3 py-1.5 w-full h-full text-xs font-semibold bg-slate-50 dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-800 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 transition-all font-sans"
                />
              </div>
            </div>

            {/* Issuer Navigation Tab Filters */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Issuers' },
                { id: 'NPTEL', label: 'NPTEL' },
                { id: 'IIT', label: 'IIT Bombay' },
                { id: 'HP', label: 'HP LIFE' },
                { id: 'Learning', label: 'Great Learning' }
              ].map((term) => (
                <button
                  key={term.id}
                  onClick={() => setFilterIssuer(term.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    filterIssuer === term.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-950 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-slate-850 hover:bg-slate-100'
                  }`}
                >
                  {term.label}
                </button>
              ))}
            </div>

            {/* Certifications Dynamic List/Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCerts.map((cert: Certification, index: number) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.35) }}
                  className="bg-slate-50 dark:bg-slate-950/60 p-4.5 rounded-2xl border border-gray-250/40 dark:border-slate-850 flex items-start space-x-3 hover:bg-white dark:hover:bg-slate-900 duration-300 shadow-xs hover:border-blue-500/20"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Bookmark className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-grow">
                    <h5 className="font-display font-bold text-sm text-gray-950 dark:text-white leading-snug truncate">
                      {cert.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 font-medium tracking-tight mt-0.5">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center justify-between mt-3.5 pt-2 border-t border-gray-150 dark:border-slate-850/50 text-[10px] text-gray-400 font-mono">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        Issued: {cert.date}
                      </span>
                      <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold uppercase bg-emerald-500/5 px-1.5 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 mr-0.5" />
                        Verified
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredCerts.length === 0 && (
                <div className="col-span-full py-12 text-center text-gray-500">
                  <p className="text-sm">No certifications match your queries.</p>
                  <button
                    onClick={() => {
                      setSearchCert('');
                      setFilterIssuer('all');
                    }}
                    className="mt-3.5 text-xs text-blue-600 hover:underline font-semibold"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
