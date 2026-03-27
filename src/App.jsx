import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Layers, 
  FileText, 
  Github, 
  Twitter, 
  Mail, 
  ArrowUpRight, 
  Terminal, 
  Command,
  ChevronRight,
  Menu,
  X,
  Brain,
  Eye,
  Database,
  Code
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', onClick, icon: Icon }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-700 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:text-white",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900",
    outline: "bg-transparent text-white border border-zinc-800 hover:bg-zinc-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 font-mono">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-black border border-zinc-800 rounded-xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
    {children}
  </h2>
);

// --- Data ---

const RESEARCH_PAPERS = [
  {
    id: 1,
    title: "How LIDAR penetration in water changes with its pollution characteristics",
    conf: "AIcraft 3.1",
    authors: "A. Bhadauria, A. Jha, U. Gaur, S. Nagpal",
    abstract: "Using a 3D lidar to figure out the pollution characteristics of a given water body with the aim to study the interaction between the laser rays and the pollutants present within the water.",
    tags: ["Drone", "Remote Sensing", "Lidar"],
    link: "https://drive.google.com/file/d/1gSMGp5DeiqDkgVqtvOHKdvEIO4F_pE1R",
    code: "#"
  },
  {
    id: 2,
    title: "High Fidelity Scene Reconstruction using Gaussian Splatting",
    conf: "SIH",
    authors: "A. Bhadauria",
    abstract: "We extend LongSplat with Dynamic object masking from Nvidia's ViPE in order to create photorealistic 3D reconstruction of an environment using shaky, unposed camera footage.",
    tags: ["Gaussian Splatting", "Xmem", "Computer Vision"],
    link: "https://www.youtube.com/watch?v=SY7YY-had9c",
    code: "#"
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Reinforcement Learning Crawler",
    description: "An open-source framework for training and visualizing Neural Radiance Fields. optimized for consumer GPUs. 2.5k+ stars on GitHub.",
    role: "Maintainer",
    stack: ["PyTorch", "CUDA", "React Three Fiber"],
    link: "#"
  },
  {
    id: 2,
    title: "",
    description: "End-to-end pipeline for gaze estimation on mobile devices using lightweight CNNs, deployed to iOS and Android.",
    role: "Lead Engineer",
    stack: ["TensorFlow Lite", "Swift", "Kotlin"],
    link: "#"
  },
  {
    id: 2,
    title: "Real-time Gaze Estimation",
    description: "End-to-end pipeline for gaze estimation on mobile devices using lightweight CNNs, deployed to iOS and Android.",
    role: "Lead Engineer",
    stack: ["TensorFlow Lite", "Swift", "Kotlin"],
    link: "#"
  }
];

// --- Main Application ---

const App = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Terminal },
    { id: 'research', label: 'Research', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Hero / Intro */}
            <div className="space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 text-zinc-400 text-sm font-mono mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for collaboration
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Ankur Bhadauria
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                Computer Vision Researcher specializing in <span className="text-white">Drone Hardware</span>, <span className="text-white">Reinforcement Learning</span>, and <span className="text-white">Robotics</span>.
              </p>
              <p className="text-zinc-500 max-w-2xl">
                Currently finishing my Bachelors of Technology at Amity University. Research Intern at AIDC, previously Tech Writer at Ternoa.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="primary" icon={Mail} onClick={() => setActiveSection('contact')}>
                  Contact Me
                </Button>
                <Button variant="secondary" icon={Github} onClick={() => window.open('https://github.com/Dev-Anky07', '_blank')}>
                  GitHub
                </Button>
                <Button variant="secondary" icon={FileText} onClick={() => window.open('creativedestruction.xyz', '_blank')}>
                  Website
                </Button>
              </div>
            </div>

            {/* Stats / Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6 flex flex-col justify-between h-32 hover:border-zinc-600 transition-colors">
                <div className="flex justify-between items-start">
                  <Brain className="text-zinc-500" size={24} />
                  <span className="text-xs font-mono text-zinc-500">FOCUS</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">NeRFs</div>
                  <div className="text-sm text-zinc-400">Neural Fields</div>
                </div>
              </Card>
              <Card className="p-6 flex flex-col justify-between h-32 hover:border-zinc-600 transition-colors">
                <div className="flex justify-between items-start">
                  <Database className="text-zinc-500" size={24} />
                  <span className="text-xs font-mono text-zinc-500">IMPACT</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">450+</div>
                  <div className="text-sm text-zinc-400">Citations</div>
                </div>
              </Card>
              <Card className="p-6 flex flex-col justify-between h-32 hover:border-zinc-600 transition-colors">
                <div className="flex justify-between items-start">
                  <Code className="text-zinc-500" size={24} />
                  <span className="text-xs font-mono text-zinc-500">OPEN SOURCE</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2.5k</div>
                  <div className="text-sm text-zinc-400">GitHub Stars</div>
                </div>
              </Card>
            </div>

             {/* Featured Research Preview */}
             <div className="pt-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Selected Work</h3>
                  <button 
                    onClick={() => setActiveSection('research')}
                    className="text-sm text-zinc-500 hover:text-white flex items-center gap-1"
                  >
                    View all <ChevronRight size={14} />
                  </button>
                </div>
                <div className="space-y-4">
                  {RESEARCH_PAPERS.slice(0, 2).map((paper) => (
                    <div key={paper.id} className="group relative pl-4 border-l-2 border-zinc-800 hover:border-white transition-colors py-1 cursor-pointer">
                      <div className="text-sm font-mono text-zinc-500 mb-1">{paper.conf}</div>
                      <h4 className="text-white font-medium group-hover:underline decoration-zinc-500 underline-offset-4">
                        {paper.title}
                      </h4>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        );

      case 'research':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <SectionTitle><FileText size={20} /> Publications</SectionTitle>
            <div className="space-y-6">
              {RESEARCH_PAPERS.map((paper) => (
                <Card key={paper.id} className="p-6 group hover:border-zinc-600 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge>{paper.conf}</Badge>
                        <span className="text-zinc-500 text-sm">{paper.tags.join(" • ")}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zinc-200">
                        {paper.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                        {paper.abstract}
                      </p>
                      <div className="text-sm text-zinc-500 font-mono mb-4">
                        {paper.authors}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" className="h-8 text-xs px-3">PDF</Button>
                        <Button variant="outline" className="h-8 text-xs px-3">Code</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <SectionTitle><Layers size={20} /> Projects</SectionTitle>
            <div className="grid grid-cols-1 gap-6">
              {PROJECTS.map((project) => (
                <Card key={project.id} className="p-6 hover:bg-zinc-900/50 transition-colors">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight size={16} className="text-zinc-500" />
                        </h3>
                        <span className="text-zinc-500 text-sm">{project.role}</span>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <SectionTitle><Mail size={20} /> Get in Touch</SectionTitle>
            
            <Card className="p-8 max-w-2xl">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                I'm always interested in discussing new research collaborations, speaking opportunities, or consulting work related to Robotics, Drones and RL.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors group">
                  <div className="bg-zinc-800 p-2 rounded-md group-hover:bg-zinc-700 transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Email</div>
                    <div className="text-white font-medium">ankur.bhadauria@s.amity.edu</div>
                  </div>
                </a>

                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors group">
                   <div className="bg-zinc-800 p-2 rounded-md group-hover:bg-zinc-700 transition-colors">
                    <Twitter className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Twitter / X</div>
                    <div className="text-white font-medium">@FPVautonomy</div>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-zinc-800 bg-black/80 backdrop-blur-md z-50 flex items-center justify-between px-4">
        <div className="font-bold text-lg tracking-tighter">AC.</div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex h-screen overflow-hidden pt-16 md:pt-0">
        
        {/* Sidebar (Desktop) & Mobile Drawer */}
        <aside 
          className={`
            fixed md:relative z-40 inset-y-0 left-0 w-64 bg-black border-r border-zinc-800 transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            md:block
          `}
        >
          <div className="h-full flex flex-col p-4">
            {/* Profile Header */}
            <div className="hidden md:flex items-center gap-3 px-2 py-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold">
                AC
              </div>
              <div className="text-sm font-medium">Ankur Bhadauria</div>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200
                      ${isActive 
                        ? 'bg-zinc-900 text-white font-medium' 
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'}
                    `}
                  >
                    <Icon size={18} className={isActive ? 'text-white' : 'text-zinc-500'} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Bottom Status */}
            <div className="mt-auto px-3 py-4 border-t border-zinc-900">
              <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
                <div className="w-2 h-2 bg-zinc-800 rounded-full border border-zinc-700"></div>
                v2.0.4 • SYSTEM ONLINE
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative">
          <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
            {/* Command Bar Aesthetic (Decorative) */}
            <div className="hidden md:flex items-center gap-2 text-zinc-600 text-xs font-mono mb-8 border-b border-zinc-900 pb-4">
               <Command size={12} />
               <span>COMMAND MODE</span>
               <span className="mx-2 text-zinc-800">/</span>
               <span>{activeSection.toUpperCase()}</span>
            </div>

            {renderContent()}
          </div>
          
          {/* Faux Input Area (Chat UI aesthetic) */}
          <div className="fixed bottom-6 left-0 md:left-64 right-0 px-6 pointer-events-none z-10">
             <div className="max-w-3xl mx-auto">
                <div className="bg-black/80 backdrop-blur-xl border border-zinc-800 rounded-full p-2 flex items-center gap-3 shadow-2xl pointer-events-auto">
                  <div className="pl-3 text-zinc-500">
                    <Terminal size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Ask me about my research..." 
                    className="bg-transparent border-none text-sm text-white placeholder-zinc-600 focus:ring-0 w-full outline-none font-mono"
                    disabled
                  />
                  <div className="pr-1">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-500">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;