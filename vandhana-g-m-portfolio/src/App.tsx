import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUp, Sparkles, Brain, Copyright, Heart } from 'lucide-react';

// Import our modular custom components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import ResumeModal from './components/ResumeModal';
import { portfolioData } from './types';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize theme based on preference or default as Dark (as it fits AI & ML perfectly!)
  useEffect(() => {
    // Add dark class by default to document element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-gray-150 transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. Particle Canvas Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground theme={theme} />
      </div>

      <div className="relative z-10">
        
        {/* 2. Top Frosted-Glass Navbar Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* 3. Hero Section (Animated typing, social links, resume button) */}
        <Hero 
          onContactClick={() => handleScrollToSection('contact')} 
          onResumeClick={() => setIsResumeOpen(true)} 
        />

        {/* 4. About Me Section (Bio + Academic timeline) */}
        <About />

        {/* 5. Core Skills Matrix Section (Progress bars + Tabs filter) */}
        <Skills />

        {/* 6. Professional Experience Section (Better Tomorrow timeline) */}
        <Experience />

        {/* 7. Featured Projects Section (Mocks interactive simulator sandboxes!) */}
        <Projects />

        {/* 8. Academics, achievements & searchable Certifications Grid */}
        <Achievements />

        {/* 9. Coding Profiles trajectory dashboard cockpit + Recharts cumulative curve */}
        <CodingProfiles />

        {/* 10. Contact Section Gateway (form validations + session traces logger ledger) */}
        <Contact />

        {/* 11. Footer Section component (Navigation shortcuts + Social block) */}
        <footer className="bg-slate-100 dark:bg-slate-980 border-t border-gray-200 dark:border-slate-900 py-12 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
              
              {/* Left Identity Foot */}
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm select-none">
                    V
                  </div>
                  <span className="font-display font-black text-lg text-gray-950 dark:text-white bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                    Vandhana G M
                  </span>
                </div>
                <p className="text-xs text-gray-550 dark:text-gray-450 max-w-sm leading-normal font-sans">
                  AI & ML Engineering Scholar specializing in full-stack MERN products and autonomous CV/NLP classifications.
                </p>
              </div>

              {/* Middle Shortcuts Anchors */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-650 dark:text-gray-450">
                <button onClick={() => handleScrollToSection('home')} className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">Top</button>
                <span>•</span>
                <button onClick={() => handleScrollToSection('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">About</button>
                <span>•</span>
                <button onClick={() => handleScrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">Matrix</button>
                <span>•</span>
                <button onClick={() => handleScrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">Featured</button>
                <span>•</span>
                <button onClick={() => handleScrollToSection('academics')} className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">Laurels</button>
                <span>•</span>
                <button onClick={() => handleScrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">Gateway</button>
              </div>

              {/* Right Social metrics list */}
              <div className="flex flex-col items-center md:items-end space-y-3.5">
                <div className="flex space-x-4 text-gray-500 dark:text-gray-450">
                  <a
                    href={portfolioData.personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-900 dark:hover:text-white hover:scale-105 transition"
                    title="Github link"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={portfolioData.personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-650 dark:hover:text-blue-400 hover:scale-105 transition"
                    title="LinkedIn link"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="hover:text-red-500 hover:scale-105 transition"
                    title="Email link"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="flex items-center space-x-1 text-[10px] text-gray-400 font-mono select-none">
                  <Copyright className="w-3.5 h-3.5" />
                  <span>Vandhana G M 2026. Custom Made with</span>
                  <Heart className="w-3 h-3 text-red-500 fill-red-500/10" />
                </div>
              </div>

            </div>
          </div>
        </footer>

      </div>

      {/* 12. Digital Resume A4 Print Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>

      {/* 13. Back to Top Floating Arrow button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 p-3 h-11 w-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg cursor-pointer transform hover:scale-105 active:scale-95 transition flex items-center justify-center focus:outline-none"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
