import React, { useState } from 'react';

interface AtlasLogoAdvancedProps {
  className?: string;
  size?: number;
  interactive?: boolean;
  onHover?: () => void;
  onClick?: () => void;
}

export const AtlasLogoAdvanced: React.FC<AtlasLogoAdvancedProps> = ({
  className = '',
  size = 200,
  interactive = true,
  onHover,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const logoId = `atlas-logo-advanced-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div 
      className={`inline-flex flex-col items-center cursor-pointer transition-transform duration-300 ${
        isHovered && interactive ? 'scale-105' : ''
      } ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-atlas-fade-in"
      >
        <defs>
          {/* Enhanced gradients with animation */}
          <linearGradient id={`${logoId}-primary`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d1810">
              {isHovered && (
                <animate
                  attributeName="stop-color"
                  values="#2d1810;#4d3020;#2d1810"
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="100%" stopColor="#d4893d">
              {isHovered && (
                <animate
                  attributeName="stop-color"
                  values="#d4893d;#f5c889;#d4893d"
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>
          
          {/* Metallic gradient */}
          <linearGradient id={`${logoId}-metallic`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b3722e" />
            <stop offset="25%" stopColor="#f5c889" />
            <stop offset="50%" stopColor="#d4893d" />
            <stop offset="75%" stopColor="#8f5a1f" />
            <stop offset="100%" stopColor="#714610" />
          </linearGradient>
          
          {/* Filter for glow effect */}
          <filter id={`${logoId}-glow`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background glow */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill={`url(#${logoId}-primary)`}
          opacity={isHovered ? "0.3" : "0.1"}
          filter={`url(#${logoId}-glow)`}
          className="transition-opacity duration-500"
        />
        
        {/* Main logo structure */}
        <g className={`${isHovered ? 'animate-atlas-rotate' : ''}`}>
          {/* Outer ring with pattern */}
          <g>
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                cx="100"
                cy="100"
                r="85"
                stroke={`url(#${logoId}-metallic)`}
                strokeWidth="0.5"
                fill="none"
                opacity={isHovered ? 0.8 : 0.4}
                strokeDasharray="20 10"
                strokeDashoffset={i * 30}
                className="transition-opacity duration-300"
              />
            ))}
          </g>
          
          {/* Concentric circles */}
          <circle
            cx="100"
            cy="100"
            r="75"
            stroke={`url(#${logoId}-primary)`}
            strokeWidth="3"
            fill="none"
            className={isHovered ? 'animate-atlas-pulse' : ''}
          />
          
          <circle
            cx="100"
            cy="100"
            r="65"
            stroke={`url(#${logoId}-metallic)`}
            strokeWidth="2"
            fill="none"
            strokeDasharray={isHovered ? "10 5" : "none"}
            className="transition-all duration-500"
          />
        </g>
        
        {/* Center emblem */}
        <g className={isHovered ? 'animate-atlas-glow' : ''}>
          <circle
            cx="100"
            cy="100"
            r="55"
            fill={`url(#${logoId}-primary)`}
          />
          
          {/* Inner pattern */}
          <path
            d="M100 45 L120 80 L100 115 L80 80 Z"
            fill={`url(#${logoId}-metallic)`}
            opacity="0.8"
          />
          
          {/* Center point with animated pulse */}
          <circle cx="100" cy="100" r="10" fill="#f5c889">
            {isHovered && (
              <animate
                attributeName="r"
                values="10;15;10"
                dur="1.5s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </g>
        
        {/* Decorative elements */}
        {isHovered && (
          <g className="animate-atlas-fade-in">
            {[0, 90, 180, 270].map((angle) => (
              <line
                key={angle}
                x1="100"
                y1="100"
                x2="100"
                y2="30"
                stroke={`url(#${logoId}-metallic)`}
                strokeWidth="1"
                opacity="0.6"
                transform={`rotate(${angle} 100 100)`}
              />
            ))}
          </g>
        )}
      </svg>
      
      {/* Interactive text */}
      <div className={`mt-4 text-center transition-all duration-300 ${
        isHovered ? 'transform translate-y-1' : ''
      }`}>
        <h1 className={`text-2xl font-bold ${
          isHovered 
            ? 'text-atlas-gold-600 dark:text-atlas-gold-400' 
            : 'text-atlas-brown-800 dark:text-atlas-gold-300'
        } transition-colors duration-300`}>
          شركة أطلس الشرق
        </h1>
        <p className={`text-sm tracking-wider ${
          isHovered 
            ? 'text-atlas-gold-500 dark:text-atlas-gold-300' 
            : 'text-atlas-brown-600 dark:text-atlas-gold-400'
        } transition-colors duration-300`}>
          ATLAS AL SHARQ CO.
        </p>
        {isHovered && interactive && (
          <p className="text-xs text-atlas-gold-400 mt-1 animate-atlas-fade-in">
            للمعارض والمؤتمرات
          </p>
        )}
      </div>
    </div>
  );
};

// Loading Logo Component
export const AtlasLogoLoading: React.FC<{ size?: number; className?: string }> = ({ 
  size = 100, 
  className = '' 
}) => {
  const logoId = `atlas-loading-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        <defs>
          <linearGradient id={`${logoId}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d1810" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4893d" />
            <stop offset="100%" stopColor="#f5c889" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={`url(#${logoId}-gradient)`}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke={`url(#${logoId}-gradient)`}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="20 10"
        />
        
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke={`url(#${logoId}-gradient)`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="15 15"
          className="animate-spin animate-reverse"
        />
      </svg>
    </div>
  );
};