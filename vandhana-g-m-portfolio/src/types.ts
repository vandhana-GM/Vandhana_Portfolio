export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  demoType: 'text-translate' | 'food-order' | 'crop-recommend';
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  category: 'programming' | 'concepts' | 'web' | 'tools';
  level: number; // percentage e.g. 85
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Achievement {
  title: string;
  category: string;
  description: string;
  metric?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: 'advanced' | 'foundations' | 'language';
}

export interface CodingProfile {
  platform: string;
  problemsSolved: number;
  badge?: string;
  stars?: string;
  profileUrl: string;
}

export const portfolioData = {
  personalInfo: {
    name: 'Vandhana G M',
    role: 'AI & ML Student | Full Stack Developer | Aspiring Software Engineer',
    college: 'Sri Eshwar College of Engineering',
    degree: 'B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
    cgpa: '8.00 / 10',
    email: 'vandhana.gm2024aiml@sece.ac.in',
    github: 'https://github.com/vandhana-GM',
    githubUsername: 'vandhana-GM',
    linkedin: 'https://www.linkedin.com/in/vandhana-g-m-cse-aiml-177b44331/',
    linkedinUsername: 'Vandhana G M',
    aboutMe: 'I am an AI & ML student passionate about software development, machine learning, and problem-solving. I enjoy building impactful applications, exploring emerging technologies, and continuously improving my programming skills.',
  },
  skills: [
    // Programming
    { name: 'C++', category: 'programming', level: 90, iconName: 'Cpu' },
    { name: 'Java', category: 'programming', level: 85, iconName: 'Terminal' },
    { name: 'Python', category: 'programming', level: 85, iconName: 'Code' },
    { name: 'MySQL', category: 'programming', level: 80, iconName: 'Database' },
    
    // Core Concepts
    { name: 'Data Structures & Algorithms', category: 'concepts', level: 90, iconName: 'Binary' },
    { name: 'Object-Oriented Programming', category: 'concepts', level: 85, iconName: 'Box' },
    { name: 'Database Management Systems', category: 'concepts', level: 85, iconName: 'Layers' },
    { name: 'Operating Systems', category: 'concepts', level: 80, iconName: 'HardDrive' },
    { name: 'Machine Learning', category: 'concepts', level: 85, iconName: 'BrainCircuit' },

    // Web Technologies
    { name: 'HTML5 / CSS3', category: 'web', level: 90, iconName: 'Globe' },
    { name: 'JavaScript (ES6+)', category: 'web', level: 85, iconName: 'Braces' },
    { name: 'React.js', category: 'web', level: 85, iconName: 'Sparkles' },
    { name: 'Node.js & Express.js', category: 'web', level: 80, iconName: 'Server' },
    { name: 'MongoDB', category: 'web', level: 80, iconName: 'ServerCrash' },

    // Tools & Utilities
    { name: 'Git & GitHub', category: 'tools', level: 90, iconName: 'GitBranch' },
    { name: 'VS Code', category: 'tools', level: 95, iconName: 'PenTool' },
    { name: 'Postman', category: 'tools', level: 85, iconName: 'Activity' },
    { name: 'Figma', category: 'tools', level: 80, iconName: 'Figma' },
    { name: 'Canva', category: 'tools', level: 85, iconName: 'Layout' },
    { name: 'Power BI', category: 'tools', level: 75, iconName: 'BarChart3' },
    { name: 'MS Excel', category: 'tools', level: 80, iconName: 'FileSpreadsheet' },
  ] as Skill[],

  experience: [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Better Tomorrow',
      period: 'Winter 2025 - Present',
      description: [
        'Developed production-ready full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
        'Engineered secure, scalable REST APIs and seamlessly integrated frontend interfaces with backend services.',
        'Utilized Git and GitHub for daily version control, peer reviews, agile workflows, and collaborative development.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub']
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 'cropiq',
      title: 'CropIQ',
      tagline: 'AI-Based Crop Yield Recommendation System',
      description: 'An intelligent systems approach that processes real-time soil chemistry details (N, P, K, pH) and automated weather conditions (temperature, humidity, rainfall) to recommend the optimal harvest and maximize agricultural output.',
      technologies: ['Python', 'Machine Learning', 'Scikit-Learn', 'SQL', 'Pandas'],
      features: [
        'Multi-class random forest classification yielding over 95% evaluation accuracy.',
        'Precision recommendation system matching micro-climatic parameters directly to specific local crop fits.',
        'SQL-driven analytics tracking historical yield predictions and crop-cycle data.'
      ],
      demoType: 'crop-recommend',
      githubUrl: 'https://github.com/vandhana-GM/CropIQ',
      liveUrl: '#cropiq'
    },
    {
      id: 'foodie',
      title: 'Foodie',
      tagline: 'Interactive Food Catalog & Order System',
      description: 'A modern, responsive storefront built with native client technologies to facilitate effortless menu discovery, seamless food cart modifications, category sorting, and instant order checkouts.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
      features: [
        'Lightweight search filter offering real-time zero-latency category classification.',
        'Persistent client-side cart retaining order states across modern browser sessions.',
        'Fully responsive, immersive customer checkouts replicating payment gate experiences.'
      ],
      demoType: 'food-order',
      githubUrl: 'https://github.com/vandhana-GM/Foodie',
      liveUrl: '#foodie'
    },
    {
      id: 'sirius',
      title: 'Sirius',
      tagline: 'Real-time Autonomous Gesture & Sign Language Translator',
      description: 'An advanced assistive computer vision application designed to interpret human hand gesture layouts and immediately translate American Sign Language (ASL) patterns into fluent readable text.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'NumPy'],
      features: [
        'Real-time low-latency video capture pipeline built on OpenCV tracking key hand nodes.',
        'Robust classification model detecting individual static hand configurations instantly.',
        'Aide mode translating complex finger-spelled letters directly to high-contrast labels.'
      ],
      demoType: 'text-translate',
      githubUrl: 'https://github.com/vandhana-GM/Sirius',
      liveUrl: '#sirius'
    }
  ] as Project[],

  achievements: [
    {
      title: 'Finalist – Coding Carnival',
      category: 'Competitive Programming',
      description: 'Secured a spot as an elite finalist at the Sri Eshwar Coding Carnival competing in rigorous algorithm solving events.',
      metric: 'Elite Finalist'
    },
    {
      title: 'Top 6 in Code Carnival (DBMS)',
      category: 'Database Analytics',
      description: 'Ranked within the top 6 out of 1,500 students in the campus-wide DBMS Code Carnival, solving advanced SQL schemas and indexing queries.',
      metric: 'Top 6 / 1500'
    },
    {
      title: 'Elite Cert – Programming in Java (NPTEL)',
      category: 'Academics',
      description: 'Awarded Elite Certification status by securing an outstanding score of 82% in the national NPTEL examination.',
      metric: 'Elite Status (82%)'
    }
  ] as Achievement[],

  certifications: [
    { title: 'Programming in Java', issuer: 'NPTEL (IIT)', date: '2024', category: 'language' },
    { title: 'Database Management System', issuer: 'Great Learning', date: '2024', category: 'foundations' },
    { title: 'AI for Business Professionals', issuer: 'HP LIFE', date: '2024', category: 'advanced' },
    { title: 'C++ Training', issuer: 'IIT Bombay (Spoken Tutorial)', date: '2023', category: 'language' },
    { title: 'C Training', issuer: 'IIT Bombay (Spoken Tutorial)', date: '2023', category: 'language' },
    { title: 'C for Beginners', issuer: 'Great Learning', date: '2023', category: 'language' }
  ] as Certification[],

  codingProfiles: [
    {
      platform: 'SkillRack',
      problemsSolved: 1000,
      badge: 'Platinum Solver',
      stars: 'Gold Level',
      profileUrl: 'https://www.skillrack.com/profile/vandhana-GM'
    },
    {
      platform: 'LeetCode',
      problemsSolved: 100,
      badge: 'Continuous Streak',
      stars: 'Top 25% User',
      profileUrl: 'https://leetcode.com/u/vandhana-GM'
    }
  ] as CodingProfile[]
};
