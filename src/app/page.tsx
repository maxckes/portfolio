"use client"
import React, { useState, useEffect, useRef } from 'react';
import TitleCard from './components/TitleCard';

// Add interfaces for component props
interface InfoRowProps {
  label: string;
  value: string;
}

interface SkillCategoryProps {
  title: string;
  skills: string;
}

interface ProjectCardProps {
  title: string;
  tech: string;
  date: string;
  details: string[];
}

// Modify the main component to include loading state
const ConfidentialPortfolio = () => {
  const [showTitleCard, setShowTitleCard] = useState(true);
  const [titleText, setTitleText] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fullName = 'EKARSHA SUMAJ KOTIKALAPOODI';

  // Show TitleCard for 15 seconds, then show main UI
  useEffect(() => {
    const timer = setTimeout(() => setShowTitleCard(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect for title
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

  // Matrix rain effect
  useEffect(() => {
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
      ctx.fillStyle = '#00ff00';
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
  }, []);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 100);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start mb-3">
      <div className="text-yellow-400 font-bold uppercase tracking-wider text-sm">
        {label}:
      </div>
      <div className="text-green-400 md:col-span-2 pl-0 md:pl-4">
        {value}
      </div>
    </div>
  );

  const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
    <div className="bg-green-400/10 p-4 border border-green-400 rounded">
      <h4 className="text-yellow-400 mb-2 uppercase font-bold text-sm">{title}</h4>
      <div className="text-green-400 text-sm">{skills}</div>
    </div>
  );

  const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, date, details }) => (
    <div className="bg-black/80 border-2 border-cyan-400 p-5 relative transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-cyan-400/20">
      <div className="absolute top-2 right-4 text-gray-500 text-xs">{date}</div>
      <h3 className="text-cyan-400 text-lg mb-2 font-bold">{title}</h3>
      <div className="text-orange-500 text-sm mb-4 italic">{tech}</div>
      <ul className="text-gray-300 text-sm space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="pl-4 relative">
            <span className="absolute left-0 text-green-400">▶</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );

  if (showTitleCard) {
    return <TitleCard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-green-400 font-mono relative overflow-x-hidden">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 -z-10"
      />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/5 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Classification Headers */}
      <div className="fixed top-0 w-full text-center font-bold text-red-500 bg-black/90 py-3 px-4 z-50 border-2 border-red-500 animate-pulse">
        <div className="text-sm md:text-base tracking-widest">
          ▲ CONFIDENTIAL - PERSONNEL FILE ▲
        </div>
      </div>

      <div className="fixed bottom-0 w-full text-center font-bold text-red-500 bg-black/90 py-3 px-4 z-50 border-2 border-red-500 animate-pulse">
        <div className="text-sm md:text-base tracking-widest">
          ▼ CONFIDENTIAL - HANDLE ACCORDING TO SECURITY PROTOCOLS ▼
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className={`text-center mb-10 p-8 border-4 border-double border-green-400 bg-green-400/5 relative transition-transform duration-100 ${showGlitch ? 'translate-x-1' : ''}`}>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-red-400 px-4 py-1 text-xs tracking-widest">
            AUTHORIZED PERSONNEL ONLY
          </div>
          <div className="text-yellow-400 text-lg mb-2 tracking-widest">
            FILE NO: ESK-2026-CS-CORE
          </div>
          <h1 className="text-3xl md:text-5xl my-6 animate-pulse">
            <span className="drop-shadow-lg" style={{ textShadow: '0 0 20px #00ff00' }}>
              {titleText}
            </span>
          </h1>
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold animate-bounce">
            SECURITY CLEARANCE: TECH-ALPHA
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-red-500/10 border-2 border-red-500 p-4 mb-8 text-center text-red-400 font-bold tracking-wider">
          ⚠️ THIS DOCUMENT CONTAINS CLASSIFIED TECHNICAL SPECIFICATIONS ⚠️
        </div>

        {/* Educational Credentials */}
        <div className="mb-10 p-6 border-2 border-green-400 bg-black/70 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-2xl text-yellow-400 mb-6 pb-3 border-b-2 border-dashed border-green-400">
            <span className="text-red-400">■ </span>EDUCATIONAL CREDENTIALS
          </h2>
          <div className="space-y-3">
            <InfoRow 
              label="Primary Institution" 
              value="VIT-AP University - B.Tech Computer Science Core" 
            />
            <InfoRow 
              label="Academic Standing" 
              value="CGPA: 8.64/10.0 - CLASSIFIED AS EXCELLENT" 
            />
            <InfoRow 
              label="Completion Date" 
              value="June 2026 [PROJECTED]" 
            />
            <InfoRow 
              label="Secondary Education" 
              value="Narayana Jr College - M.P.C (91%)" 
            />
            <InfoRow 
              label="Foundation Level" 
              value="Vasista E.M High School - S.S.C (99%)" 
            />
          </div>
        </div>

        {/* Specialized Coursework */}
        <div className="mb-10 p-6 border-2 border-green-400 bg-black/70 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-2xl text-yellow-400 mb-6 pb-3 border-b-2 border-dashed border-green-400">
            <span className="text-red-400">■ </span>SPECIALIZED COURSEWORK
          </h2>
          <div className="text-green-400 space-y-2">
            <div>• Object-Oriented Programming - ADVANCED PROFICIENCY</div>
            <div>• Data Structures & Algorithms - TACTICAL IMPLEMENTATION</div>
            <div>• Database Management Systems - SECURE DATA HANDLING</div>
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="mb-10 p-6 border-2 border-green-400 bg-black/70 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-2xl text-yellow-400 mb-6 pb-3 border-b-2 border-dashed border-green-400">
            <span className="text-red-400">■ </span>TECHNICAL ARSENAL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCategory 
              title="Programming Languages" 
              skills="Python • Java • JavaScript/TypeScript • SQL • HTML • CSS" 
            />
            <SkillCategory 
              title="Development Tools" 
              skills="Git/GitHub • VS Code • IntelliJ/PyCharm • Atom • Figma" 
            />
            <SkillCategory 
              title="Frameworks" 
              skills="React • Next.js • Express • Node.js" 
            />
            <SkillCategory 
              title="UI Libraries" 
              skills="Bootstrap • Tailwind • Flowbite • Shad CN UI • Material UI" 
            />
          </div>
        </div>

        {/* Classified Projects */}
        <div className="mb-10 p-6 border-2 border-green-400 bg-black/70 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-2xl text-yellow-400 mb-6 pb-3 border-b-2 border-dashed border-green-400">
            <span className="text-red-400">■ </span>CLASSIFIED PROJECTS
          </h2>
          <div className="space-y-6">
            <ProjectCard
              title="PROJECT CODENAME: CERTIFICATE-GEN"
              tech="Tech Stack: React, TypeScript, Firebase, Tailwind CSS, Git, Unix Shell"
              date="MAR 2023"
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
              details={[
                "Developed advanced NLP system for automated PDF parsing and text extraction",
                "Implemented AI-powered document analysis using Hugging Face libraries",
                "Created intelligent data manipulation and automation scripts",
                "Designed innovative solutions for complex technical challenges in AI/NLP domain",
                "Leveraged cutting-edge transformer models for enhanced document processing"
              ]}
            />
          </div>
        </div>

        {/* Organizational Affiliations */}
        <div className="mb-10 p-6 border-2 border-green-400 bg-black/70 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-2xl text-yellow-400 mb-6 pb-3 border-b-2 border-dashed border-green-400">
            <span className="text-red-400">■ </span>ORGANIZATIONAL AFFILIATIONS
          </h2>
          <div className="space-y-3">
            <InfoRow 
              label="Current Assignment" 
              value="CSI (Computer Society of India) - Active Member" 
            />
            <InfoRow 
              label="Duration" 
              value="October 2023 - Present" 
            />
            <InfoRow 
              label="Operational Focus" 
              value="Programming Excellence & Technical Innovation" 
            />
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mb-10 p-6 border-2 border-green-400 bg-black/70 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-2xl text-yellow-400 mb-6 pb-3 border-b-2 border-dashed border-green-400">
            <span className="text-red-400">■ </span>PERSONAL INTERESTS & ACTIVITIES
          </h2>
          <div className="space-y-3">
            <InfoRow 
              label="Strategic Gaming" 
              value="Engages in multi-platform gaming activities including digital, board, and outdoor games - Develops strategic thinking and team coordination skills" 
            />
            <InfoRow 
              label="Intelligence Gathering" 
              value="Regular consumption of technical articles and emerging technology news - Maintains current awareness of industry developments" 
            />
            <InfoRow 
              label="Continuous Learning" 
              value="Self-directed exploration of cutting-edge technologies - Enhances technical capabilities through independent research" 
            />
          </div>
        </div>

        {/* Final Security Notice */}
        <div className="bg-red-500/10 border-2 border-red-500 p-4 text-center text-red-400 font-bold tracking-wider">
          🔒 END OF CLASSIFIED DOCUMENT - AUTHORIZED ACCESS ONLY 🔒
        </div>
      </div>
    </div>
  );
};

export default ConfidentialPortfolio;