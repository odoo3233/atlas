import React from 'react';

interface AtlasLogoProps {
  className?: string;
  size?: number;
  variant?: 'default' | 'animated' | 'minimal';
  showText?: boolean;
}

export const AtlasLogo: React.FC<AtlasLogoProps> = ({
  className = '',
  size = 200,
  variant = 'default',
  showText = true,
}) => {
  const logoId = `atlas-logo-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${variant === 'animated' ? 'animate-atlas-fade-in' : ''}`}
      >
        <defs>
          {/* Primary gradient */}
          <linearGradient id={`${logoId}-primary`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d1810" />
            <stop offset="100%" stopColor="#d4893d" />
          </linearGradient>
          
          {/* Gold gradient for highlights */}
          <linearGradient id={`${logoId}-gold`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b3722e" />
            <stop offset="50%" stopColor="#f5c889" />
            <stop offset="100%" stopColor="#b3722e" />
          </linearGradient>
          
          {/* Radial gradient for center */}
          <radialGradient id={`${logoId}-radial`}>
            <stop offset="0%" stopColor="#f5c889" />
            <stop offset="50%" stopColor="#d4893d" />
            <stop offset="100%" stopColor="#2d1810" />
          </radialGradient>
          
          {/* Shine effect gradient */}
          <linearGradient id={`${logoId}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5c889" stopOpacity="0" />
            <stop offset="50%" stopColor="#f5c889" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f5c889" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Outer rotating circles */}
        <g className={variant === 'animated' ? 'animate-atlas-rotate' : ''}>
          {/* Outermost circle */}
          <circle
            cx="100"
            cy="100"
            r="95"
            stroke={`url(#${logoId}-gold)`}
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          
          {/* Second circle */}
          <circle
            cx="100"
            cy="100"
            r="85"
            stroke={`url(#${logoId}-primary)`}
            strokeWidth="3"
            fill="none"
          />
          
          {/* Third circle */}
          <circle
            cx="100"
            cy="100"
            r="75"
            stroke={`url(#${logoId}-gold)`}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          
          {/* Fourth circle */}
          <circle
            cx="100"
            cy="100"
            r="65"
            stroke={`url(#${logoId}-primary)`}
            strokeWidth="3"
            fill="none"
          />
        </g>
        
        {/* Center design */}
        <g className={variant === 'animated' ? 'animate-atlas-pulse' : ''}>
          {/* Center filled circle */}
          <circle
            cx="100"
            cy="100"
            r="55"
            fill={`url(#${logoId}-radial)`}
          />
          
          {/* Inner decorative circle */}
          <circle
            cx="100"
            cy="100"
            r="45"
            stroke={`url(#${logoId}-gold)`}
            strokeWidth="2"
            fill="none"
          />
          
          {/* Center point */}
          <circle
            cx="100"
            cy="100"
            r="8"
            fill="#f5c889"
            className={variant === 'animated' ? 'animate-atlas-glow' : ''}
          />
        </g>
        
        {/* Shine effect overlay */}
        {variant === 'animated' && (
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            fill={`url(#${logoId}-shine)`}
            opacity="0.3"
            className="animate-atlas-shine"
            style={{ mixBlendMode: 'overlay' }}
          />
        )}
      </svg>
      
      {/* Company name */}
      {showText && (
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold text-atlas-brown-800 dark:text-atlas-gold-300">
            شركة أطلس الشرق
          </h1>
          <p className="text-sm text-atlas-brown-600 dark:text-atlas-gold-400 tracking-wider">
            ATLAS AL SHARQ CO.
          </p>
        </div>
      )}
    </div>
  );
};

// Animated Logo Variant
export const AtlasLogoAnimated: React.FC<Omit<AtlasLogoProps, 'variant'>> = (props) => (
  <AtlasLogo {...props} variant="animated" />
);

// Minimal Logo Variant (no animations, simplified)
export const AtlasLogoMinimal: React.FC<Omit<AtlasLogoProps, 'variant'>> = (props) => (
  <AtlasLogo {...props} variant="minimal" />
);