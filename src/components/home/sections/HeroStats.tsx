import React from 'react';
import { HeroStatsProps } from '@/types/home';

const HeroStats: React.FC<HeroStatsProps> = ({ stats, className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-6 md:gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
          <div className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;