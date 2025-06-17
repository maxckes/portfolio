'use client';

import React from 'react';
import { Typography, Space } from 'antd';
import { BookOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title } = Typography;

const neonCard = `
  relative overflow-hidden rounded-3xl shadow-xl
  before:content-[''] before:absolute before:inset-0 before:rounded-3xl
  before:p-[2px] before:bg-[conic-gradient(at_top_left,_#FFD700_0%,_#00FFF7_40%,_#FF00CC_80%,_#FFD700_100%)]
  before:animate-cyberpunk-border
`;
const cardBg = 'bg-gradient-to-br from-[#0a0a0f] via-[#18181c] to-[#0a0a0f]';
const cardContent = 'relative z-10 rounded-[22px] p-8 md:p-10';
const neonHeading = 'bg-gradient-to-r from-[#FFD700] via-[#00FFF7] to-[#FF00CC] bg-clip-text text-transparent drop-shadow-[0_0_12px_#FFD700] font-orbitron font-extrabold uppercase tracking-widest';
const neonLabel = 'text-xs font-bold uppercase tracking-[0.2em] text-[#00FFF7] group-hover:text-[#FFD700] transition-colors duration-200';
const neonValue = 'text-base text-[#f5f6fa] group-hover:text-[#00FFF7] transition-colors duration-200';
const neonIcon = 'text-2xl text-[#FFD700] drop-shadow-[0_0_8px_#FFD700] group-hover:text-[#00FFF7] group-hover:drop-shadow-[0_0_12px_#00FFF7] transition-colors duration-200';

const InfoRow = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
  <div className="flex items-center gap-4 py-2 group">
    {icon && <span className={neonIcon}>{icon}</span>}
    <span className={neonLabel} style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>{label}:</span>
    <span className={neonValue}>{value}</span>
  </div>
);

export default function Profile() {
  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-2 md:px-0">
      {/* Education Card */}
      <div className={neonCard + ' ' + cardBg}>
        <div className={cardContent}>
          <Title level={4} className={`!mb-6 flex items-center gap-4 text-3xl md:text-4xl ${neonHeading}`} style={{ fontFamily: 'Orbitron, Exo 2, sans-serif', fontWeight: 900 }}>
            <BookOutlined className="mr-2" /> Education
          </Title>
          <Space direction="vertical" size={0} className="w-full">
            <InfoRow label="Institution" value="VIT-AP University" icon={<BookOutlined />} />
            <InfoRow label="Standing" value="Top 5%" icon={<TrophyOutlined />} />
            <InfoRow label="Completion" value="2025 (Expected)" icon={<TrophyOutlined />} />
          </Space>
        </div>
      </div>
      {/* Gaming Stats Card */}
      <div className={neonCard + ' ' + cardBg}>
        <div className={cardContent}>
          <Title level={4} className={`!mb-6 flex items-center gap-4 text-3xl md:text-4xl ${neonHeading}`} style={{ fontFamily: 'Orbitron, Exo 2, sans-serif', fontWeight: 900 }}>
            <TrophyOutlined className="mr-2" /> Gaming Stats
          </Title>
          <Space direction="vertical" size={0} className="w-full">
            <InfoRow label="Strategic Gaming" value="Expert" icon={<TrophyOutlined />} />
            <InfoRow label="Intelligence" value="High" icon={<BookOutlined />} />
            <InfoRow label="Continuous Learning" value="Active" icon={<BookOutlined />} />
          </Space>
        </div>
      </div>
      {/* Animated cyberpunk border keyframes and font */}
      <style jsx>{`
        @keyframes cyberpunk-border {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .before\:animate-cyberpunk-border:before {
          animation: cyberpunk-border 6s linear infinite;
        }
        .font-orbitron {
          font-family: 'Orbitron', 'Exo 2', 'Rajdhani', 'Russo One', 'Audiowide', 'Electrolize', 'Noto Sans Telugu', 'Noto Sans Devanagari', Impact, Arial, sans-serif;
        }
      `}</style>
    </div>
  );
} 