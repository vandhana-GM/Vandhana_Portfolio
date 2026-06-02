import { motion } from 'motion/react';
import { Mail, Landmark, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../types';

export default function Contact() {
  const { email, college, github, linkedin, linkedinUsername, githubUsername } = portfolioData.personalInfo;

  const contactsConfig = [
    {
      id: 'contact-email',
      title: 'EMAIL ADDRESS',
      value: email,
      href: `mailto:${email}`,
      description: 'Checked daily. Direct communication pipeline.',
      icon: Mail,
      iconBg: 'bg-blue-100 dark:bg-blue-900/35',
      iconColor: 'text-blue-600 dark:text-blue-400',
      actionText: 'Send Email',
    },
    {
      id: 'contact-college',
      title: 'ACADEMIC HUB',
      value: college,
      href: null,
      description: 'Coimbatore, Tamil Nadu, India.',
      icon: Landmark,
      iconBg: 'bg-violet-100 dark:bg-violet-900/35',
      iconColor: 'text-violet-600 dark:text-violet-400',
      actionText: 'Sri Eshwar',
    },
    {
      id: 'contact-linkedin',
      title: 'LINKEDIN',
      value: linkedinUsername,
      href: linkedin,
      description: 'Professional networking and technical updates.',
      icon: Linkedin,
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/35',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      actionText: 'Connect on LinkedIn',
    },
    {
      id: 'contact-github',
      title: 'GITHUB PROFILE',
      value: `@${githubUsername}`,
      href: github,
      description: 'Explore my open source repositories and hobby products.',
      icon: Github,
      iconBg: 'bg-slate-100 dark:bg-slate-800/50',
      iconColor: 'text-slate-700 dark:text-slate-300',
      actionText: 'Follow on GitHub',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-white dark:bg-slate-900 border-t border-gray-200/50 dark:border-slate-800/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 mr-1" />
            <span>Connection Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-sans">
            Ready to secure an internship, join collaborative engineering projects, or exchange technical ideas. Reach out directly through any platform!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactsConfig.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col justify-between"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-full group flex flex-col justify-between bg-slate-50 dark:bg-slate-950/60 border border-gray-250/40 dark:border-slate-850 hover:border-blue-500/50 dark:hover:border-blue-500/40 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="w-full">
                      {/* Icon & Title */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-all group-hover:scale-105 duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-gray-400 dark:text-gray-650 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Metadata */}
                      <h5 className="font-semibold text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {item.title}
                      </h5>
                      <h4 className="mt-2 font-display font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                        {item.value}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-550 dark:text-gray-450 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-gray-200/50 dark:border-slate-850/50 pt-3 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                      <span>{item.actionText}</span>
                      <span className="ml-1 select-none">→</span>
                    </div>
                  </a>
                ) : (
                  <div
                    className="h-full group flex flex-col justify-between bg-slate-50 dark:bg-slate-950/60 border border-gray-250/40 dark:border-slate-850 p-6 rounded-2xl transition-all duration-300 cursor-default"
                  >
                    <div className="w-full">
                      {/* Icon & Title */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Metadata */}
                      <h5 className="font-semibold text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {item.title}
                      </h5>
                      <h4 className="mt-2 font-display font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-snug break-words">
                        {item.value}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-550 dark:text-gray-450 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
