import { motion } from 'motion/react';
import { X, Printer, Code, Award, GraduationCap, Briefcase, Mail, Landmark, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../types';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const { name, role, college, degree, cgpa, email, githubUsername, linkedinUsername, aboutMe } = portfolioData.personalInfo;

  const handlePrint = () => {
    const printContent = document.getElementById('resume-pdf-view');
    if (!printContent) return;

    const originalContent = document.body.innerHTML;
    const originalStyle = document.head.innerHTML;

    // Open clean print window
    const win = window.open('', '', 'height=1100,width=850');
    if (win) {
      win.document.write(`
        <html>
          <head>
            <title>Vandhana_G_M_Resume</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              body { font-family: 'Inter', sans-serif; }
              @media print {
                .no-print { display: none; }
                body { color: black; background: white; padding: 25px; }
              }
            </style>
          </head>
          <body class="p-8 text-black bg-white">
            ${printContent.innerHTML}
          </body>
        </html>
      `);
      win.document.close();
      win.focus();
      setTimeout(() => {
        win.print();
        win.close();
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity" 
      />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 w-full max-w-4xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
      >
        {/* Navigation Toolbar */}
        <div className="bg-gray-100 dark:bg-slate-950 border-b border-gray-250 dark:border-slate-850 px-6 py-4.5 flex items-center justify-between no-print flex-shrink-0">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded">
              A4 DIGITAL LAYOUT (ATS-FRIENDLY)
            </span>
            <h3 className="text-base sm:text-lg font-display font-bold text-gray-950 dark:text-white mt-1">
              Resume: {name}
            </h3>
          </div>
          
          <div className="flex items-center space-x-3.5">
            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 px-2 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-750 text-gray-800 dark:text-white rounded-xl transition focus:outline-none"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Area */}
        <div className="flex-grow overflow-y-auto p-6 bg-slate-100 dark:bg-slate-950/60 flex justify-center">
          
          {/* Printable Sheet (Simulated A4 with crisp layout) */}
          <div 
            id="resume-pdf-view"
            className="w-full max-w-3xl bg-white text-black p-8 sm:p-10 shadow-lg border border-gray-200 rounded-lg min-h-[1050px] text-left leading-normal text-sm font-sans"
          >
            {/* Header Identity Block */}
            <div className="border-b-2 border-gray-900 pb-5 mb-5 flex flex-col sm:flex-row items-stretch justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-3xl font-display font-extrabold text-black uppercase tracking-tight">{name}</h1>
                <p className="text-blue-700 font-semibold text-xs tracking-wider uppercase font-mono">{role}</p>
                <p className="text-gray-500 text-xs flex items-center gap-1.5 font-display mt-1">
                  <Landmark className="w-3.5 h-3.5" />
                  {college}
                </p>
              </div>

              {/* Digital Metadata details column */}
              <div className="space-y-1 sm:text-right text-xs text-gray-600 font-mono self-end">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Github className="w-3.5 h-3.5 text-black" />
                  <span>github.com/{githubUsername}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>linkedin.com/in/{linkedinUsername}</span>
                </p>
              </div>
            </div>

            {/* Resume Bio */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-gray-500 border-b border-gray-200 pb-1 mb-2">Professional Summary</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{aboutMe}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Left Column: Education & Experience */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-gray-500 border-b border-gray-200 pb-1 mb-3 flex items-center gap-1">
                    <GraduationCap className="w-4.5 h-4.5 text-blue-700" />
                    <span>Education (CSE AI & ML)</span>
                  </h3>
                  
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between font-bold text-xs sm:text-sm">
                        <span>Sri Eshwar College of Engineering</span>
                        <span className="font-mono text-[11px] font-medium text-gray-500">2022 - 2026</span>
                      </div>
                      <p className="text-xs text-gray-650 italic mt-0.5">{degree}</p>
                      <span className="inline-block text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded mt-1">
                        Academic CGPA: {cgpa}
                      </span>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between font-bold text-xs">
                        <span>Higher Secondary Schooling</span>
                        <span className="font-mono text-[11px] font-medium text-gray-500">2020 - 2022</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">Focus: Mathematics, Computer Science applications</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-gray-500 border-b border-gray-200 pb-1 mb-3 flex items-center gap-1">
                    <Briefcase className="w-4.5 h-4.5 text-blue-700" />
                    <span>Internships & Experience</span>
                  </h3>
                  
                  <div>
                    <div className="flex justify-between font-bold text-xs sm:text-sm">
                      <span>MERN Stack Student Intern</span>
                      <span className="font-mono text-[11px] font-medium text-gray-500">Winter 2025</span>
                    </div>
                    <p className="text-xs text-indigo-700 font-semibold italic mt-0.5">Better Tomorrow</p>
                    <ul className="list-disc pl-4 space-y-1 mt-2 text-[11px] text-gray-700 leading-normal">
                      <li>Designed full-stack web architectures utilizing Express controllers and Mongo DB integrations.</li>
                      <li>Engineered validated REST APIs endpoints linking schema representations directly to view pages.</li>
                      <li>Spearheaded Git repo branches and collaborative codes reviews.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Skills, projects and Achievements */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-gray-500 border-b border-gray-200 pb-1 mb-3 flex items-center gap-1">
                    <Code className="w-4.5 h-4.5 text-blue-700" />
                    <span>Technical Capabilities</span>
                  </h3>
                  
                  <div className="space-y-2.5 text-[11px] sm:text-xs">
                    <div>
                      <span className="font-mono font-bold text-gray-600 uppercase">Languages: </span>
                      <span className="text-gray-800 text-xs">C++, Java, Python, MySQL, SQL</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-gray-600 uppercase">CS Concepts: </span>
                      <span className="text-gray-800 text-xs">Data Structures & Algorithms (DSA), OOPs, DBMS, Operating Systems, Machine Learning</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-gray-600 uppercase">Web: </span>
                      <span className="text-gray-800 text-xs">React.js, Node.js, Express.js, MongoDB, JavaScript, HTML5/CSS3</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-gray-600 uppercase">Utilities: </span>
                      <span className="text-gray-800 text-xs">Git, GitHub, VS Code, Postman, Figma, Canva, Power BI, MS Excel</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-gray-500 border-b border-gray-200 pb-1 mb-3 flex items-center gap-1">
                    <Award className="w-4.5 h-4.5 text-blue-700" />
                    <span>Notable Projects</span>
                  </h3>
                  
                  <div className="space-y-3 text-[11px] sm:text-xs">
                    <div>
                      <div className="flex justify-between font-bold text-xs">
                        <span>CropIQ (AI Crop Recommender)</span>
                        <span className="font-mono text-gray-500">Python, ML, SQL</span>
                      </div>
                      <p className="text-gray-650 mt-0.5">Configured random forest classifier evaluating soil chemicals to suggest best crop output.</p>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-xs">
                        <span>Foodie (MERN Ordering Front)</span>
                        <span className="font-mono text-gray-500">JS, HTML, Local Storage</span>
                      </div>
                      <p className="text-gray-650 mt-0.5">Engineered responsive categories routing and client-side cached food baskets.</p>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-xs">
                        <span>Sirius (Autonomous Sign Translator)</span>
                        <span className="font-mono text-gray-500">Python, OpenCV</span>
                      </div>
                      <p className="text-gray-650 mt-0.5">Real-time computer vision interpretation convert gestural hand outlines into texts.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-gray-500 border-b border-gray-200 pb-1 mb-2">Honors & Profiles</h3>
                  <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-700 leading-normal">
                    <li>Secured elite finalist spot in <strong>Sri Eshwar Coding Carnival</strong>.</li>
                    <li>Placed in the <strong>Top 6/1500 candidate scholars</strong> for DBMS SQL Carnival.</li>
                    <li>National Level elite holder in <strong>Programming in Java NPTEL (82%)</strong>.</li>
                    <li>Solved <strong>1000+ problems on SkillRack</strong> and <strong>100+ problems on LeetCode</strong>.</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Static printable foot disclaimer */}
            <div className="mt-8 border-t border-gray-250 pt-3 text-center text-[9px] text-gray-400 no-print">
              Generated digitally via AI Studio. Authenticated at vandhana.gm2024aiml@sece.ac.in.
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
