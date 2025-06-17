'use client';

import React from 'react';
import { Typography, Space } from 'antd';

const { Title, Text } = Typography;

interface AchievementProps {
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  date?: string;
}

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
        <Title level={5} className={`m-0 ${unlocked ? 'text-[#FFD700]' : 'text-gray-600'}`}>
          {title}
        </Title>
        <Text className={`text-sm ${unlocked ? 'text-[#FFB347]' : 'text-gray-500'}`}>
          {description}
        </Text>
        {unlocked && date && (
          <Text className="text-xs text-[#FFB347]/70 mt-1 block">{date}</Text>
        )}
      </div>
    </div>
  </div>
);

const Achievements = () => {
  return (
    <Space direction="vertical" size="large" className="w-full">
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
    </Space>
  );
};

export default Achievements; 