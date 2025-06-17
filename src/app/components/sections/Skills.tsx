'use client';

import React from 'react';
import { Card, Typography, Space, Progress } from 'antd';
import {
  CodeOutlined,
  ToolOutlined,
  ThunderboltOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

interface SkillCategoryProps {
  title: string;
  level: number;
  xp: number;
  icon?: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, level, xp, icon }) => (
  <div className="bg-black/80 p-4 border border-[#FFD700]/30 rounded relative overflow-hidden group hover:border-[#FFB347] transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-[#FFB347]/5 to-[#FF8C42]/5 animate-pulse group-hover:opacity-75"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFB347]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-[#FFD700] uppercase font-bold text-sm group-hover:text-[#FFB347] transition-colors duration-300 flex items-center">
        {icon && <span className="mr-2 text-[#FFB347]">{icon}</span>}
        {title}
      </h4>
      <div className="text-[#FFB347] text-xs">Level {level}</div>
    </div>
    <Progress
      percent={(xp / 100) * 100}
      showInfo={false}
      strokeColor={{
        '0%': '#FFD700',
        '100%': '#FFB347',
      }}
    />
  </div>
);

const Skills = () => {
  return (
    <Space direction="vertical" size="large" className="w-full">
      {/* Programming Languages */}
      <Card className="bg-black/70 border-[#FFD700]/30">
        <Title level={4} className="text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30">
          <span className="text-[#FFB347]"><CodeOutlined className="mr-2" /></span>PROGRAMMING LANGUAGES
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCategory title="Python" level={90} xp={90} icon="🐍" />
          <SkillCategory title="Java" level={85} xp={85} icon="☕" />
          <SkillCategory title="JavaScript" level={88} xp={88} icon="📜" />
          <SkillCategory title="TypeScript" level={85} xp={85} icon="📘" />
          <SkillCategory title="SQL" level={82} xp={82} icon="🗄️" />
          <SkillCategory title="HTML" level={95} xp={95} icon="🌐" />
          <SkillCategory title="CSS" level={92} xp={92} icon="🎨" />
        </div>
      </Card>

      {/* Development Tools */}
      <Card className="bg-black/70 border-[#FFD700]/30">
        <Title level={4} className="text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30">
          <span className="text-[#FFB347]"><ToolOutlined className="mr-2" /></span>DEVELOPMENT TOOLS
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCategory title="Git" level={88} xp={88} icon="📦" />
          <SkillCategory title="GitHub" level={88} xp={88} icon="🐙" />
          <SkillCategory title="VS Code" level={95} xp={95} icon="💻" />
          <SkillCategory title="IntelliJ" level={85} xp={85} icon="🛠️" />
          <SkillCategory title="Docker" level={82} xp={82} icon="🐳" />
          <SkillCategory title="Figma" level={85} xp={85} icon="🎨" />
        </div>
      </Card>

      {/* Frameworks */}
      <Card className="bg-black/70 border-[#FFD700]/30">
        <Title level={4} className="text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30">
          <span className="text-[#FFB347]"><ThunderboltOutlined className="mr-2" /></span>FRAMEWORKS
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCategory title="React" level={90} xp={90} icon="⚛️" />
          <SkillCategory title="Next.js" level={85} xp={85} icon="▲" />
          <SkillCategory title="Node.js" level={85} xp={85} icon="🟢" />
          <SkillCategory title="MongoDB" level={82} xp={82} icon="🍃" />
          <SkillCategory title="Firebase" level={80} xp={80} icon="🔥" />
          <SkillCategory title="AWS" level={75} xp={75} icon="☁️" />
        </div>
      </Card>

      {/* UI Libraries */}
      <Card className="bg-black/70 border-[#FFD700]/30">
        <Title level={4} className="text-[#FFD700] mb-6 pb-3 border-b-2 border-dashed border-[#FFD700]/30">
          <span className="text-[#FFB347]"><AppstoreOutlined className="mr-2" /></span>UI LIBRARIES
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCategory title="Bootstrap" level={88} xp={88} icon="🎨" />
          <SkillCategory title="Tailwind" level={92} xp={92} icon="🎨" />
          <SkillCategory title="Vercel" level={85} xp={85} icon="▲" />
          <SkillCategory title="Material UI" level={85} xp={85} icon="🎨" />
        </div>
      </Card>
    </Space>
  );
};

export default Skills; 