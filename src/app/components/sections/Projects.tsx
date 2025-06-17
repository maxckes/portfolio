'use client';

import React from 'react';
import { Typography, Space, Progress } from 'antd';

const { Title, Text } = Typography;

interface ProjectCardProps {
  title: string;
  tech: string;
  date: string;
  details: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  completion: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, date, details, difficulty, completion }) => {
  const difficultyColors = {
    Easy: '#00ff00',
    Medium: '#FFD700',
    Hard: '#FF4500',
    Legendary: '#FF0000'
  };

  return (
    <div className="bg-black/80 border-2 border-[#FFD700]/30 p-5 relative transition-all duration-300 hover:border-[#FFB347] hover:shadow-lg hover:shadow-[#FFD700]/20 group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-[#FFB347]/5 to-[#FF8C42]/5 animate-pulse group-hover:opacity-75"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFB347]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex justify-between items-start mb-2">
        <div className="absolute top-2 right-4 text-[#FFB347]/70 text-xs">{date}</div>
        <div 
          className="text-xs px-2 py-1 rounded-full"
          style={{ 
            backgroundColor: `${difficultyColors[difficulty]}20`,
            color: difficultyColors[difficulty],
            border: `1px solid ${difficultyColors[difficulty]}40`
          }}
        >
          {difficulty}
        </div>
      </div>

      <Title level={4} className="text-[#FFD700] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
        {title}
      </Title>
      <Text className="text-[#FF8C42] text-sm mb-4 italic block">{tech}</Text>
      
      <Progress
        percent={completion}
        showInfo={false}
        strokeColor={{
          '0%': '#FFD700',
          '100%': '#FFB347',
        }}
        className="mb-4"
      />

      <ul className="text-[#FFB347]/80 text-sm space-y-2">
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

const Projects = () => {
  return (
    <Space direction="vertical" size="large" className="w-full">
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
    </Space>
  );
};

export default Projects; 