import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, Github, ExternalLink, Cpu, ShoppingBag, Radio, X, 
  Check, Play, ArrowRight, Layers, Sliders, AlertCircle, ShoppingCart 
} from 'lucide-react';
import { Project, portfolioData } from '../types';

export default function Projects() {
  const projects = portfolioData.projects;
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);

  // States for CropIQ Simulation
  const [nitrogen, setNitrogen] = useState(55);
  const [phosphorus, setPhosphorus] = useState(42);
  const [potassium, setPotassium] = useState(40);
  const [humidity, setHumidity] = useState(70);
  const [cropResult, setCropResult] = useState<string | null>(null);
  const [simulatingCrop, setSimulatingCrop] = useState(false);

  // States for Foodie Simulation
  const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; qty: number }>>([]);
  const [activeFoodCategory, setActiveFoodCategory] = useState<'all' | 'meals' | 'desserts' | 'drinks'>('all');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const foodieMenu = [
    { id: 1, name: 'Truffle Mushroom Burger', price: 12.99, category: 'meals', desc: 'Premium hand-pressed patty, truffle sauce.' },
    { id: 2, name: 'Margherita Woodfired Pizza', price: 14.50, category: 'meals', desc: 'San Marzano tomatoes, fresh mozzarella.' },
    { id: 3, name: 'Matcha Lava Fondant', price: 6.99, category: 'desserts', desc: 'Rich warm molten center, vanilla bean gelato.' },
    { id: 4, name: 'Artisan Cold Brew Coffee', price: 4.50, category: 'drinks', desc: 'Single-origin beans, slow steeped 18 hours.' },
    { id: 5, name: 'Classic Caesar Crunch', price: 9.99, category: 'meals', desc: 'Romaine hearts, crisp sourdough croutons.' },
  ];

  // States for Sirius Translator Simulation
  const [siriusGesture, setSiriusGesture] = useState<string | null>(null);
  const [simulatingSirius, setSimulatingSirius] = useState(false);
  const gestures = [
    { letter: 'A', name: 'Open Fist / Thumb Parallel' },
    { letter: 'L', name: 'Standard L-Index/Thumb Angle' },
    { letter: 'Y', name: 'Pinky & Thumb Extended (I Love You)' },
    { letter: 'C', name: 'Curved Palm Outline' }
  ];

  // Run CropIQ prediction calculation rules
  const runCropIQ = () => {
    setSimulatingCrop(true);
    setCropResult(null);
    setTimeout(() => {
      setSimulatingCrop(false);
      // Fun rule-based mock ML classifier output 
      if (nitrogen > 60 && potassium > 45) {
        setCropResult('Rice (Excellent hydration & mineral profile)');
      } else if (phosphorus > 50 && humidity < 50) {
        setCropResult('Maize / Corn (Favorable dry humidity & high phosphorus)');
      } else if (nitrogen < 35) {
        setCropResult('Lentils / Beans (Optimal nitrogen-fixing match)');
      } else {
        setCropResult('Wheat (Favorable moderate conditions)');
      }
    }, 750);
  };

  // Run Sirius Interpretation rules
  const runSiriusTranslate = (letter: string) => {
    setSimulatingSirius(true);
    setSiriusGesture(null);
    setTimeout(() => {
      setSimulatingSirius(false);
      setSiriusGesture(letter);
    }, 600);
  };

  // Add item to simulator cart
  const addToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
    });
  };

  // Calculate cart total cost
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const resetSimulators = () => {
    setCropResult(null);
    setCart([]);
    setOrderPlaced(false);
    setSiriusGesture(null);
    setNitrogen(55);
    setPhosphorus(42);
    setPotassium(40);
    setHumidity(70);
  };

  const handleOpenDemo = (project: Project) => {
    resetSimulators();
    setSelectedDemoProject(project);
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 mr-1" />
            <span>Curated Repo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-sans">
            Demonstrating engineered solutions combining artificial systems design with responsive frontends.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Pick corresponding graphic icon based on demoType
            let VisualIcon = Cpu;
            if (project.demoType === 'food-order') VisualIcon = ShoppingBag;
            if (project.demoType === 'text-translate') VisualIcon = Radio;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-gray-200/50 dark:border-slate-850 hover:border-blue-500/30 dark:hover:border-blue-500/30 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
              >
                {/* Visual Glow Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-violet-600" />
                
                {/* Tech logo display */}
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs">
                    <VisualIcon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-gray-950 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] text-gray-500 font-mono tracking-wider">
                      RELIABLE STACK
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 font-display">
                  {project.tagline}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Features list bullet pointers */}
                <div className="space-y-2.5 mb-6">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-100 dark:border-slate-850">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>



              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Simulated Interactive Sandbox Panel Modal */}
        <AnimatePresence>
          {selectedDemoProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4 py-6">
              {/* Backing Sheet backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDemoProject(null)}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              />

              {/* Central sandbox card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white dark:bg-slate-900 border border-gray-250 dark:border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative z-10"
              >
                {/* Header banner */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider bg-white/20 px-2 py-0.5 rounded">
                      In-Page Interactive Sandbox
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold mt-1">
                      {selectedDemoProject.title} Simulation
                    </h3>
                  </div>
                  <button
                    id="close-simulation-btn"
                    onClick={() => setSelectedDemoProject(null)}
                    className="p-1 px-2.2 bg-white/15 hover:bg-white/25 rounded-lg text-white transition focus:outline-none"
                    aria-label="Close Demo"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Sandbox Interface Body */}
                <div className="p-6">
                  
                  {/* CROP RECOMMENDATION SANDBOX */}
                  {selectedDemoProject.demoType === 'crop-recommend' && (
                    <div className="space-y-6">
                      <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-start space-x-3">
                        <Sliders className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-xs text-gray-900 dark:text-white">Soil & Climatology Classifier Model</h5>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Toggle soil attributes sliders to compute rule-based precision crop fits based on Scikit-Learn training parameters.</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                            <span>Nitrogen (N) Chemical level: {nitrogen} mg/kg</span>
                            <span className="text-mono font-bold text-blue-600">{nitrogen}</span>
                          </div>
                          <input 
                            type="range" min="10" max="100" value={nitrogen} 
                            onChange={(e) => setNitrogen(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                            <span>Phosphorus (P) Chemical level: {phosphorus} mg/kg</span>
                            <span className="text-mono font-bold text-purple-600">{phosphorus}</span>
                          </div>
                          <input 
                            type="range" min="10" max="100" value={phosphorus} 
                            onChange={(e) => setPhosphorus(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                            <span>Potassium (K) Chemical level: {potassium} mg/kg</span>
                            <span className="text-mono font-bold text-indigo-600">{potassium}</span>
                          </div>
                          <input 
                            type="range" min="10" max="100" value={potassium} 
                            onChange={(e) => setPotassium(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                            <span>Humidity Sensor value: {humidity}%</span>
                            <span className="text-mono font-bold text-emerald-600">{humidity}%</span>
                          </div>
                          <input 
                            type="range" min="20" max="100" value={humidity} 
                            onChange={(e) => setHumidity(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-4 justify-between">
                        <button
                          id="btn-predict-crop"
                          onClick={runCropIQ}
                          disabled={simulatingCrop}
                          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                        >
                          {simulatingCrop ? 'Predicting Fit...' : 'Run Prediction Classification'}
                        </button>

                        <div className="flex-grow w-full text-center sm:text-right">
                          <AnimatePresence mode="wait">
                            {cropResult && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="bg-emerald-500/10 border border-emerald-500/10 px-4 py-2.5 rounded-xl inline-block"
                              >
                                <p className="text-[10px] text-emerald-700 dark:text-emerald-400 uppercase font-mono">Classifier Output Solution</p>
                                <p className="font-display font-extrabold text-sm sm:text-base text-emerald-800 dark:text-emerald-300">{cropResult}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FOODIE CATOLOG SANDBOX */}
                  {selectedDemoProject.demoType === 'food-order' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-gray-150 dark:border-slate-800 pb-4">
                        <div className="flex space-x-1">
                          {['all', 'meals', 'desserts', 'drinks'].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => {
                                setActiveFoodCategory(cat as any);
                                setOrderPlaced(false);
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize ${
                                activeFoodCategory === cat
                                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 font-medium">Cart persistent state (Local)</span>
                      </div>

                      {/* Display Menu catalog list for selection */}
                      {!orderPlaced ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {foodieMenu
                            .filter((item) => activeFoodCategory === 'all' || item.category === activeFoodCategory)
                            .map((item) => (
                              <div
                                key={item.id}
                                className="border border-gray-150 dark:border-slate-800 p-3.5 rounded-xl hover:border-gray-300 transition flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-start justify-between">
                                    <h5 className="font-display font-bold text-xs text-gray-900 dark:text-white leading-normal">
                                      {item.name}
                                    </h5>
                                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                      ${item.price}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-gray-500 mt-1 leading-normal">
                                    {item.desc}
                                  </p>
                                </div>
                                <button
                                  onClick={() => addToCart(item)}
                                  className="mt-3.5 w-full py-1.5 rounded-lg bg-gray-100 hovering:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-gray-800 dark:text-white text-[11px] font-semibold flex items-center justify-center space-x-1 group"
                                >
                                  <ShoppingCart className="w-3 h-3 group-hover:scale-110 transition-transform" />
                                  <span>Add To Basket</span>
                                </button>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-8 text-center bg-emerald-500/10 border border-emerald-500/10 rounded-2xl"
                        >
                          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                            <Check className="w-6 h-6" />
                          </div>
                          <h4 className="font-display font-extrabold text-base text-emerald-800 dark:text-emerald-300">
                            Simulated Order Logged Successfully!
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            An elegant checkout event has fired! Soil inputs local state persistent updates catalog correctly.
                          </p>
                          <button
                            onClick={() => {
                              resetSimulators();
                              setOrderPlaced(false);
                            }}
                            className="mt-5 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-750"
                          >
                            New Order
                          </button>
                        </motion.div>
                      )}

                      {/* Basket summary bottom bar */}
                      {cart.length > 0 && !orderPlaced && (
                        <div className="pt-4 border-t border-gray-150 dark:border-slate-850 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-gray-500 truncate">Basket Subtotal ({cart.length} unique lines)</p>
                            <p className="text-base font-mono font-bold text-gray-900 dark:text-white">
                              ${cartTotal.toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => setOrderPlaced(true)}
                            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center space-x-1 shadow-sm transition"
                          >
                            <span>Proceed to Simulated Cashout</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                    </div>
                  )}

                  {/* SIRIUS RECOGNITION SANDBOX */}
                  {selectedDemoProject.demoType === 'text-translate' && (
                    <div className="space-y-6">
                      <div className="p-4 bg-violet-500/5 border border-violet-500/10 rounded-2xl flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-xs text-gray-900 dark:text-white">Gesture Computer Vision Emulator</h5>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Click any finger gesture setup below to simulate OpenCV bounding nodes interpretations and readTranslated output characters.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3.5">
                        {gestures.map((ges) => (
                          <button
                            key={ges.letter}
                            onClick={() => runSiriusTranslate(ges.letter)}
                            className="p-4 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 border border-gray-200 dark:border-slate-850 rounded-xl transition text-left group cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center font-display font-bold text-base group-hover:scale-105 transition-transform">
                                {ges.letter}
                              </span>
                              <span className="text-[10px] font-mono text-gray-400 scale-90">Class ID: {ges.letter.charCodeAt(0)}</span>
                            </div>
                            <h5 className="font-semibold text-xs text-gray-900 dark:text-white mt-3">{ges.letter} Gesture</h5>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{ges.name}</p>
                          </button>
                        ))}
                      </div>

                      {/* Interactive Visual Translator Camera Monitor emulation box */}
                      <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 text-center relative overflow-hidden h-40 flex flex-col justify-center items-center">
                        {/* Shimmer Scanline effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_0%,rgba(139,92,246,0.1)_50%,rgba(139,92,246,0.02)_100%)] pointer-events-none animate-[ping_4s_infinite]" />
                        
                        {simulatingSirius ? (
                          <div className="space-y-2">
                            <span className="inline-block w-6 h-6 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
                            <p className="text-[10px] text-slate-400 font-mono">TRACKING MOTION VECTORS...</p>
                          </div>
                        ) : siriusGesture ? (
                          <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="space-y-1.5"
                          >
                            <p className="text-[10px] text-emerald-400 font-semibold tracking-widest font-mono">STABLE GESTURE CLASSIFIED</p>
                            <p className="text-3xl font-display font-extrabold text-white">[{siriusGesture}]</p>
                            <p className="text-[11px] text-slate-450 font-sans">Confidence evaluation matrix: {(Math.random() * 5 + 94.5).toFixed(1)}% accuracy</p>
                          </motion.div>
                        ) : (
                          <div className="space-y-1">
                            <p className="text-xs text-slate-400">CAMERA STANDBY MODE</p>
                            <p className="text-[10px] text-slate-550 font-mono">Select a gesture template card from above to trigger interpretations</p>
                          </div>
                        )}
                      </div>

                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
