import React, { useState, useEffect, useRef } from 'react';
import TitleCard from './components/TitleCard';
import firespark from './assets/firespark.mov';

import { 
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconDatabase,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandBootstrap,
  IconBrandTailwind,
  IconCode,
  IconTools,
  IconBolt,
  IconPalette,
  IconBrandVercel,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandDocker,
  IconBrandAws,
  IconBrandStrava,
  IconBrandMetabrainz
} from '@tabler/icons-react';

// Add interfaces for component props
interface InfoRowProps {
  label: string;
  value: string;
  icon?: string;
}

interface SkillCategoryProps {
  title: string;
  level: number;
  xp: number;
  icon?: React.ReactNode;
}

interface ProjectCardProps {
  title: string;
  tech: string;
  date: string;
  details: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  completion: number;
}

interface AchievementProps {
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  date?: string;
}

// Modify the main component to include loading state
const ConfidentialPortfolio = () => {
  const [showTitleCard, setShowTitleCard] = useState(true);
  const [titleText, setTitleText] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedTab, setSelectedTab] = useState('profile');
  const [playerLevel, setPlayerLevel] = useState(18);
  const [playerXP, setPlayerXP] = useState(8750);
  const [playerRank, setPlayerRank] = useState('TECH-ALPHA');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fullName = 'EKARSHA SUMAJ KOTIKALAPOODI';

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Show TitleCard for 15 seconds, then show main content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitleCard(false);
      setShowMatrix(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // Typing effect for title with enhanced animation
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (i < fullName.length) {
          setTitleText(fullName.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Matrix rain effect with enhanced visuals
  useEffect(() => {
    if (!showMatrix) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#00ff00');
      gradient.addColorStop(0.5, '#FFD700');
      gradient.addColorStop(1, '#FF4500');
      ctx.fillStyle = gradient;
      
      ctx.font = fontSize + 'px monospace';

      for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [showMatrix]);

  // Enhanced glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 100);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const InfoRow: React.FC<InfoRowProps> = ({ label, value, icon }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start mb-3 group">
      <div className="text-[#FFD700] font-bold uppercase tracking-wider text-sm font-['Orbitron'] group-hover:text-[#FFB347] transition-colors duration-300 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {label}:
      </div>
      <div className="text-[#FFB347] md:col-span-2 pl-0 md:pl-4 font-['Orbitron'] group-hover:translate-x-2 transition-transform duration-300">
        {value}
      </div>
    </div>
  );

  const SkillCategory: React.FC<SkillCategoryProps> = ({ title, level, xp, icon }) => (
  <div 
    className="bg-black/80 p-4 border border-[#FFD700]/30 rounded relative overflow-hidden group hover:border-[#FFB347] transition-all duration-300"
    style={{
      transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
      transition: 'transform 0.2s ease-out'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-[#FFB347]/5 to-[#FF8C42]/5 animate-pulse group-hover:opacity-75"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFB347]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-[#FFD700] uppercase font-bold text-sm font-['Orbitron'] group-hover:text-[#FFB347] transition-colors duration-300 flex items-center">
        {icon && <span className="mr-2 text-[#FFB347]">{icon}</span>}
        {title}
      </h4>
      <div className="text-[#FFB347] text-xs font-['Orbitron']">Level {level}</div>
    </div>
    <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFB347] transition-all duration-300"
        style={{ width: `${(xp / 100) * 100}%` }}
      />
    </div>
  </div>
);

  const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, date, details, difficulty, completion }) => {
    const difficultyColors = {
      Easy: '#00ff00',
      Medium: '#FFD700',
      Hard: '#FF4500',
      Legendary: '#FF0000'
    };

    return (
      <div 
        className="bg-black/80 border-2 border-[#FFD700]/30 p-5 relative transition-all duration-300 hover:border-[#FFB347] hover:shadow-lg hover:shadow-[#FFD700]/20 group"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-[#FFB347]/5 to-[#FF8C42]/5 animate-pulse group-hover:opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFB347]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="flex justify-between items-start mb-2">
          <div className="absolute top-2 right-4 text-[#FFB347]/70 text-xs font-['Orbitron']">{date}</div>
          <div 
            className="text-xs font-['Orbitron'] px-2 py-1 rounded-full"
            style={{ 
              backgroundColor: `${difficultyColors[difficulty]}20`,
              color: difficultyColors[difficulty],
              border: `1px solid ${difficultyColors[difficulty]}40`
            }}
          >
            {difficulty}
          </div>
        </div>

        <h3 className="text-[#FFD700] text-lg mb-2 font-bold font-['Orbitron'] group-hover:text-[#FFB347] transition-colors duration-300">{title}</h3>
        <div className="text-[#FF8C42] text-sm mb-4 italic font-['Orbitron']">{tech}</div>
        
        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFB347] transition-all duration-300"
            style={{ width: `${completion}%` }}
          />
        </div>

        <ul className="text-[#FFB347]/80 text-sm space-y-2 font-['Orbitron']">
          {details.map((detail, index) => (
            <li key={index} className="pl-4 relative group-hover:translate-x-1 transition-transform duration-300">
              <span className="absolute left-0 text-[#FFD700] group-hover:text-[#FFB347] transition-colors duration-300">▶</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const Achievement: React.FC<AchievementProps> = ({ title, description, icon, unlocked, date }) => (
    <div className={`p-4 border-2 rounded-lg relative overflow-hidden transition-all duration-300 ${
      unlocked 
        ? 'border-[#FFD700]/30 bg-black/80 hover:border-[#FFB347]' 
        : 'border-gray-800/30 bg-black/40'
    }`}>
      <div className="flex items-start gap-4">
        <div className={`text-2xl ${unlocked ? 'text-[#FFD700]' : 'text-gray-600'}`}>
          {icon}
        </div>
        <div>
          <h4 className={`font-['Orbitron'] font-bold ${unlocked ? 'text-[#FFD700]' : 'text-gray-600'}`}>
            {title}
          </h4>
          <p className={`text-sm ${unlocked ? 'text-[#FFB347]' : 'text-gray-500'}`}>
            {description}
          </p>
          {unlocked && date && (
            <p className="text-xs text-[#FFB347]/70 mt-1">{date}</p>
          )}
        </div>
      </div>
    </div>
  );

  // Sidebar navigation items
  const sidebarTabs = [
    { key: 'profile', label: 'PROFILE' },
    { key: 'skills', label: 'SKILLS' },
    { key: 'projects', label: 'PROJECTS' },
    { key: 'achievements', label: 'ACHIEVEMENTS' },
    { key: 'stats', label: 'STATS' },
    { key: 'leaderboard', label: 'LEADERBOARD' },
    { key: 'boost', label: 'BOOST' },
  ];

  // Example stats
  const stats = [
    { label: 'Score', value: '8,212' },
    { label: 'Kills', value: '322' },
    { label: 'Facilities Captured', value: '40' },
    { label: 'Medals', value: '12' },
    { label: 'Certifications', value: '7' },
    { label: 'Daily Kills', value: '15' },
    { label: 'Facilities Defended', value: '9' },
  ];

  if (showTitleCard) {
    return <TitleCard />;
  }

  return (
    <div className="min-h-screen bg-black text-[#FFD700] font-['Orbitron'] relative overflow-x-hidden">
      {/* Video Background with Parallax */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
        src={firespark}
      />

      {/* Matrix Rain Effect with Enhanced Gradient */}
      {showMatrix && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 opacity-20"
        />
      )}

      {/* Enhanced Fire/Ember Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Dynamic Fire Embers */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: ['#FF4500', '#FF6347', '#DC143C', '#B22222', '#8B0000', '#FFD700'][Math.floor(Math.random() * 6)],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.2 + Math.random() * 0.5,
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
        
        {/* Enhanced Fire Glow Effects */}
        <div 
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        
        {/* Enhanced Flickering Fire Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/15 via-transparent to-orange-900/10 animate-pulse" />
        
        {/* Enhanced Metallic Sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-transparent to-red-600/5" />
      </div>

      

      <div className="flex min-h-screen relative z-10">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-[#FFD700]/20 via-[#FFB347]/10 to-black/80 border-r-2 border-[#FFD700]/30 flex flex-col items-center py-8 shadow-2xl">
          <div className="mb-8 text-2xl font-bold tracking-widest text-[#FFD700]">PROFILE</div>
          <nav className="flex flex-col gap-4 w-full px-4">
            {sidebarTabs.map(tab => (
              <button
                key={tab.key}
                className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 border-2 border-transparent hover:border-[#FFD700] hover:bg-[#FFD700]/10 ${selectedTab === tab.key ? 'bg-gradient-to-r from-[#FFD700]/30 to-[#FFB347]/30 border-[#FFD700]' : ''}`}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          {/* Sidebar stats summary */}
          <div className="mt-12 w-full px-4">
            <div className="bg-black/60 rounded-lg p-4 border border-[#FFD700]/20">
              <div className="text-[#FFD700] text-sm mb-2 font-bold">Quick Stats</div>
              <div className="grid grid-cols-2 gap-2 text-[#FFB347] text-xs">
                <div>Level</div>
                <div className="text-right">{playerLevel}</div>
                <div>XP</div>
                <div className="text-right">{playerXP}/10000</div>
                <div>Rank</div>
                <div className="text-right">{playerRank}</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-stretch bg-gradient-to-br from-black via-[#FFD700]/5 to-[#FFB347]/10 p-8 relative">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-3xl font-bold tracking-widest text-[#FFD700] drop-shadow-lg">
              EKARSHA SUMAJ KOTIKALAPOODI
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#FFD700] font-bold">Level {playerLevel}</div>
              <div className="w-48 h-3 bg-black/50 rounded-full overflow-hidden border border-[#FFD700]/30">
                <div className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFB347] transition-all duration-300" style={{ width: `${(playerXP / 10000) * 100}%` }} />
              </div>
              <div className="text-[#FFB347] text-sm font-bold">{playerXP}/10000 XP</div>
            </div>
          </div>

          <div className="flex flex-1 gap-8">
            {/* Character and Info Panel */}
            <div className="w-1/3 flex flex-col items-center">
              {/* 3D Character Placeholder */}
              <div className="w-56 h-96 bg-gradient-to-b from-[#FFD700]/20 via-[#FFB347]/10 to-black/80 border-4 border-[#FFD700]/30 rounded-2xl flex items-end justify-center shadow-xl mb-6 relative overflow-hidden">
                {/* Placeholder: Replace with 3D model viewer */}
                  <iframe width={56*4} height={96*4} title="H I T M A N - Agent 47 3D model - Sketchfab" src="https://sketchfab.com/models/8c825b3684c44f31b2d0f6e80e2ae5df/embed?autostart=1&amp;internal=1&amp;tracking=0&amp;ui_ar=0&amp;ui_infos=0&amp;ui_snapshots=1&amp;ui_stop=0&amp;ui_theatre=1&amp;ui_watermark=0"></iframe>
                <div className="absolute w-56 bottom-2 left-1/2 transform -translate-x-1/2 text-[#FFD700] font-bold text-lg bg-black px-4 py-1  border border-[#FFD700]/30">AGENT</div>
              </div>
              {/* Character Info */}
              <div className="bg-black/60 rounded-lg p-4 border border-[#FFD700]/20 w-full text-center">
                <div className="text-[#FFD700] font-bold text-lg mb-1">{playerRank}</div>
                <div className="text-[#FFB347] text-xs">Specialist in futuristic UI design and development</div>
              </div>
            </div>

            {/* Main Panels: Show previous data based on selectedTab */}
            <div className="flex-1">
              {selectedTab === 'profile' && (
                <div className="space-y-6">
                  {/* Education */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg">
                    <h2 className="text-2xl text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30 font-['Orbitron']">
                      <span className="text-[#FFB347]">🎓 </span>EDUCATION
                    </h2>
                    <div className="space-y-3">
                      <InfoRow 
                        label="Primary Institution" 
                        value="VIT-AP University - B.Tech Computer Science Core"
                        icon="🏛️"
                      />
                      <InfoRow 
                        label="Academic Standing" 
                        value="CGPA: 8.64/10.0 - CLASSIFIED AS EXCELLENT"
                        icon="⭐"
                      />
                      <InfoRow 
                        label="Completion Date" 
                        value="June 2026 [PROJECTED]"
                        icon="📅"
                      />
                    </div>
                  </div>
                  {/* Gaming Stats */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg">
                    <h2 className="text-2xl text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30 font-['Orbitron']">
                      <span className="text-[#FFB347]">🎮 </span>GAMING STATS
                    </h2>
                    <div className="space-y-3">
                      <InfoRow 
                        label="Strategic Gaming" 
                        value="Multi-platform gaming activities - Strategic thinking and team coordination"
                        icon="🎯"
                      />
                      <InfoRow 
                        label="Intelligence Gathering" 
                        value="Technical articles and emerging technology news consumption"
                        icon="📚"
                      />
                      <InfoRow 
                        label="Continuous Learning" 
                        value="Self-directed exploration of cutting-edge technologies"
                        icon="📈"
                      />
                    </div>
                  </div>
                </div>
              )}
              {selectedTab === 'skills' && (
                <div className="space-y-6">
                  {/* Programming Languages */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg">
                    <h2 className="text-2xl text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30 font-['Orbitron']">
                      <span className="text-[#FFB347]"><IconCode className="inline-block mr-2" /></span>PROGRAMMING LANGUAGES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <SkillCategory title="Python" level={90} xp={9000} icon={<IconBrandPython className="text-2xl" />} />
                      <SkillCategory title="Java" level={85} xp={8500} icon={<IconBrandStrava className="text-2xl" />} />
                      <SkillCategory title="JavaScript" level={88} xp={8800} icon={<IconBrandJavascript className="text-2xl" />} />
                      <SkillCategory title="TypeScript" level={85} xp={8500} icon={<IconBrandTypescript className="text-2xl" />} />
                      <SkillCategory title="SQL" level={82} xp={8200} icon={<IconDatabase className="text-2xl" />} />
                      <SkillCategory title="HTML" level={95} xp={9500} icon={<IconBrandHtml5 className="text-2xl" />} />
                      <SkillCategory title="CSS" level={92} xp={9200} icon={<IconBrandCss3 className="text-2xl" />} />
                    </div>
                  </div>

                  {/* Development Tools */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg">
                    <h2 className="text-2xl text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30 font-['Orbitron']">
                      <span className="text-[#FFB347]"><IconTools className="inline-block mr-2" /></span>DEVELOPMENT TOOLS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <SkillCategory title="Git" level={88} xp={8800} icon={<IconBrandGit className="text-2xl" />} />
                      <SkillCategory title="GitHub" level={88} xp={8800} icon={<IconBrandGithub className="text-2xl" />} />
                      <SkillCategory title="VS Code" level={95} xp={9500} icon={<IconBrandVscode className="text-2xl" />} />
                      <SkillCategory title="IntelliJ" level={85} xp={8500} icon={<IconBrandMetabrainz className="text-2xl" />} />
                      <SkillCategory title="Docker" level={82} xp={8200} icon={<IconBrandDocker className="text-2xl" />} />
                      <SkillCategory title="Figma" level={85} xp={8500} icon={<IconBrandFigma className="text-2xl" />} />
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg">
                    <h2 className="text-2xl text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30 font-['Orbitron']">
                      <span className="text-[#FFB347]"><IconBolt className="inline-block mr-2" /></span>FRAMEWORKS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <SkillCategory title="React" level={90} xp={9000} icon={<IconBrandReact className="text-2xl" />} />
                      <SkillCategory title="Next.js" level={85} xp={8500} icon={<IconBrandNextjs className="text-2xl" />} />
                      <SkillCategory title="Node.js" level={85} xp={8500} icon={<IconBrandNodejs className="text-2xl" />} />
                      <SkillCategory title="MongoDB" level={82} xp={8200} icon={<IconBrandMongodb className="text-2xl" />} />
                      <SkillCategory title="Firebase" level={80} xp={8000} icon={<IconBrandFirebase className="text-2xl" />} />
                      <SkillCategory title="AWS" level={75} xp={7500} icon={<IconBrandAws className="text-2xl" />} />
                    </div>
                  </div>

                  {/* UI Libraries */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg">
                    <h2 className="text-2xl text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30 font-['Orbitron']">
                      <span className="text-[#FFB347]"><IconPalette className="inline-block mr-2" /></span>UI LIBRARIES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <SkillCategory title="Bootstrap" level={88} xp={8800} icon={<IconBrandBootstrap className="text-2xl" />} />
                      <SkillCategory title="Tailwind" level={92} xp={9200} icon={<IconBrandTailwind className="text-2xl" />} />
                      <SkillCategory title="Vercel" level={85} xp={8500} icon={<IconBrandVercel className="text-2xl" />} />
                      <SkillCategory title="Material UI" level={85} xp={8500} icon={<IconBrandReact className="text-2xl" />} />
                    </div>
                  </div>
                </div>
              )}
              {selectedTab === 'projects' && (
                <div className="space-y-6">
                  <ProjectCard
                    title="PROJECT CODENAME: CERTIFICATE-GEN"
                    tech="Tech Stack: React, TypeScript, Firebase, Tailwind CSS, Git, Unix Shell"
                    date="MAR 2023"
                    difficulty="Hard"
                    completion={100}
                    details={[
                      "Engineered dynamic certificate generation system using React/TypeScript architecture",
                      "Implemented Firebase for secure authentication and real-time database operations",
                      "Designed responsive UI interface using Tailwind CSS framework",
                      "Coordinated team collaboration through Git version control protocols",
                      "Deployed system using Unix Shell environment configurations",
                      "Conducted comprehensive testing in VS Code development environment"
                    ]}
                  />
                  <ProjectCard
                    title="PROJECT CODENAME: AI-PDF-READER"
                    tech="Tech Stack: Python, Hugging Face Transformers"
                    date="MAY 2023"
                    difficulty="Legendary"
                    completion={100}
                    details={[
                      "Developed advanced NLP system for automated PDF parsing and text extraction",
                      "Implemented AI-powered document analysis using Hugging Face libraries",
                      "Created intelligent data manipulation and automation scripts",
                      "Designed innovative solutions for complex technical challenges in AI/NLP domain",
                      "Leveraged cutting-edge transformer models for enhanced document processing"
                    ]}
                  />
                </div>
              )}
              {selectedTab === 'achievements' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Achievement
                    title="Code Master"
                    description="Completed 100+ coding challenges"
                    icon="🏆"
                    unlocked={true}
                    date="Dec 2023"
                  />
                  <Achievement
                    title="AI Pioneer"
                    description="Implemented advanced AI solutions"
                    icon="🤖"
                    unlocked={true}
                    date="May 2023"
                  />
                  <Achievement
                    title="Team Leader"
                    description="Led successful project teams"
                    icon="👥"
                    unlocked={true}
                    date="Mar 2023"
                  />
                  <Achievement
                    title="Innovation Expert"
                    description="Created breakthrough solutions"
                    icon="💡"
                    unlocked={false}
                  />
                </div>
              )}
              {/* Keep the new STATS, MEMBERSHIP, BOOST cards for the other tabs */}
              {(selectedTab === 'stats' || selectedTab === 'leaderboard' || selectedTab === 'boost') && (
                <div className="flex-1 grid grid-cols-2 gap-6">
                  {/* Stats Card */}
                  <div className="col-span-2 bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg">
                    <div className="text-[#FFD700] font-bold text-xl mb-4">STATS</div>
                    <div className="grid grid-cols-3 gap-4 text-[#FFB347]">
                      {stats.map((stat, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFB347]/10 rounded-lg p-4 text-center border border-[#FFD700]/20">
                          <div className="text-lg font-bold text-[#FFD700]">{stat.value}</div>
                          <div className="text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Membership/Boost Card */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg flex flex-col items-center justify-center">
                    <div className="text-[#FFD700] font-bold text-xl mb-2">MEMBERSHIP</div>
                    <div className="text-[#FFB347] text-sm mb-4">Become a premium member for exclusive features and boosts!</div>
                    <button className="bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-black font-bold px-6 py-2 rounded-full shadow-lg border-2 border-[#FFD700]/50 hover:scale-105 transition-transform">UPGRADE</button>
                  </div>
                  {/* Boost Card */}
                  <div className="bg-black/70 rounded-xl border-2 border-[#FFD700]/30 p-6 shadow-lg flex flex-col items-center justify-center">
                    <div className="text-[#FFD700] font-bold text-xl mb-2">BOOST</div>
                    <div className="text-[#FFB347] text-sm mb-4">Activate a boost to increase your experience and performance!</div>
                    <button className="bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-black font-bold px-6 py-2 rounded-full shadow-lg border-2 border-[#FFD700]/50 hover:scale-105 transition-transform">ACTIVATE</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Final Security Notice */}
     
    </div>
  );
};

export default ConfidentialPortfolio;