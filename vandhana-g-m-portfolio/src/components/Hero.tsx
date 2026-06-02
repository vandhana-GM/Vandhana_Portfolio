import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Download, Award, Brain, Star, Code, GraduationCap } from 'lucide-react';
import { portfolioData } from '../types';

interface HeroProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

export default function Hero({ onContactClick, onResumeClick }: HeroProps) {
  const { name, role, college } = portfolioData.personalInfo;
  
  // Custom typing effect
  const roles = [
    'AI & ML Student & Engineer',
    'Full Stack Web Developer',
    'Problem Solver (1100+ Solved)',
    'Computer Science Student'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);
        
        if (currentText === fullText) {
          // Keep active for 1.8 seconds before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 1800);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
        
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Dynamic tech-inspired background accent gradients */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs sm:text-sm font-medium tracking-wide shadow-sm"
            >
              <Brain className="w-4 h-4 animate-pulse mr-1" />
              <span>Pioneering Next-Gen Intelligent Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 dark:text-white leading-none tracking-tight sm:leading-tight"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-h-[2.5rem] flex items-center justify-center lg:justify-start"
            >
              <p className="text-xl sm:text-2xl font-mono text-gray-600 dark:text-gray-300 font-medium">
                {currentText}
                <span className="animate-pulse bg-blue-500 text-blue-500 w-1.5 h-6.5 inline-block ml-1 align-middle" />
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Pursuing <span className="font-semibold text-gray-800 dark:text-gray-200">B.E in Computer Science Engineering (Artificial Intelligence & Machine Learning)</span> at{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400 underline decoration-blue-500/30 decoration-2 underline-offset-4">{college}</span>. Passionate about software engineering, deep learning algorithms, and engineering interactive state-safe modern web applications.
            </motion.p>

            {/* Microstats block inline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 pt-2"
            >
              <div className="bg-white/60 dark:bg-slate-900/60 border border-gray-200/50 dark:border-slate-850 p-3 rounded-xl shadow-sm text-center">
                <p className="text-xl sm:text-2xl font-display font-bold text-blue-600 dark:text-blue-400">8.00</p>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">Academic CGPA</p>
              </div>
              <div className="bg-white/60 dark:bg-slate-900/60 border border-gray-200/50 dark:border-slate-850 p-3 rounded-xl shadow-sm text-center">
                <p className="text-xl sm:text-2xl font-display font-bold text-violet-600 dark:text-violet-400">1100+</p>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">Problems Solved</p>
              </div>
              <div className="bg-white/60 dark:bg-slate-900/60 border border-gray-200/50 dark:border-slate-850 p-3 rounded-xl shadow-sm text-center">
                <p className="text-xl sm:text-2xl font-display font-bold text-emerald-600 dark:text-emerald-400">1</p>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">Industry Intern</p>
              </div>
            </motion.div>

            {/* Actions Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all scale-100 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                id="hero-resume-btn"
                onClick={onResumeClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-800 dark:text-white border border-gray-300 dark:border-slate-800 font-medium flex items-center justify-center space-x-2 shadow-sm hover:shadow transition-all scale-100 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>View Digital Resume</span>
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-5 text-gray-500 dark:text-gray-400 pt-2"
            >
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-905 dark:hover:text-white hover:scale-110 transition-all p-1"
                title="Github Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all p-1"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="hover:text-red-500 hover:scale-110 transition-all p-1"
                title="Send Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Interactive AI / ML Portrait Visual (The Tech/Logo visual card) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85"
            >
              {/* Spinning technical rings */}
              <div className="absolute inset-x-0 inset-y-0 rounded-full border-2 border-dashed border-blue-500/25 animate-[spin_100s_linear_infinite]" />
              <div className="absolute inset-x-4 inset-y-4 rounded-full border border-dashed border-violet-500/20 animate-[spin_50s_linear_infinite_reverse]" />
              <div className="absolute inset-x-12 inset-y-12 rounded-full border border-gray-200 dark:border-slate-800" />

              {/* Central Premium Glass Neon Tech Card */}
              <div className="absolute inset-x-8 inset-y-8 rounded-full bg-gradient-to-tr from-blue-600/30 via-slate-50 to-violet-600/30 dark:from-blue-900/30 dark:to-violet-900/40 p-1 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-full flex flex-col items-center justify-center relative overflow-hidden border border-white/40 dark:border-slate-800">
                  {/* Digital particles floating over circular card */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
                  <div className="absolute top-1/2 right-6 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />

                  {/* Representation of AI Neural network node */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-display text-4xl font-extrabold shadow-lg shadow-indigo-500/30 mb-3 select-none">
                      AI 
                    </div>
                    <span className="text-gray-900 dark:text-white font-display font-semibold text-lg">Vandhana G M</span>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-mono tracking-wider uppercase mt-1">@sece_2024_aiml</span>
                  </div>

                  {/* Horizontal scanned grid light lines */}
                  <div className="absolute top-0 left-0 right-0 h-[100%] bg-[linear-gradient(rgba(0,0,0,0)_0%,rgba(59,130,246,0.06)_50%,rgba(0,0,0,0)_100%)] dark:bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(59,130,246,0.04)_50%,rgba(255,255,255,0)_100%)] pointer-events-none animate-[bounce_8s_infinite_alternate]" />
                </div>
              </div>

              {/* Micro badge floaters */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-3 shadow-md flex items-center space-x-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Java NPTEL</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Elite (82%)</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-3 shadow-md flex items-center space-x-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">SkillRack</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">1000+ Solved</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
