import React from 'react';

// Brand Button Component
interface AtlasButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const AtlasButton: React.FC<AtlasButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 rounded-lg inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-atlas-brown-800 to-atlas-gold-600 text-white hover:from-atlas-brown-700 hover:to-atlas-gold-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-atlas-gold-500 text-atlas-brown-900 hover:bg-atlas-gold-400 shadow-md hover:shadow-lg',
    outline: 'border-2 border-atlas-gold-600 text-atlas-gold-600 hover:bg-atlas-gold-600 hover:text-white',
    ghost: 'text-atlas-brown-700 hover:bg-atlas-gold-100 hover:text-atlas-brown-900',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Brand Card Component
interface AtlasCardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const AtlasCard: React.FC<AtlasCardProps> = ({
  title,
  description,
  children,
  className = '',
  hover = true,
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-atlas-brown-900 
        border border-atlas-gold-200 dark:border-atlas-brown-700
        rounded-xl shadow-md 
        ${hover ? 'hover:shadow-xl hover:border-atlas-gold-400 transition-all duration-300' : ''}
        p-6 ${className}
      `}
    >
      {title && (
        <h3 className="text-xl font-bold text-atlas-brown-800 dark:text-atlas-gold-300 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-atlas-brown-600 dark:text-atlas-gold-400 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

// Brand Badge Component
interface AtlasBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export const AtlasBadge: React.FC<AtlasBadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-atlas-gold-100 text-atlas-brown-800 border-atlas-gold-300',
    success: 'bg-green-100 text-green-800 border-green-300',
    warning: 'bg-atlas-gold-100 text-atlas-brown-700 border-atlas-gold-400',
    error: 'bg-red-100 text-red-800 border-red-300',
  };
  
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        border ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
};

// Brand Loading Spinner
export const AtlasSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  
  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full rounded-full border-2 border-atlas-gold-200 dark:border-atlas-brown-700"></div>
        <div className="absolute w-full h-full rounded-full border-2 border-transparent border-t-atlas-gold-600 animate-spin"></div>
      </div>
    </div>
  );
};

// Brand Divider
export const AtlasDivider: React.FC<{ className?: string; gradient?: boolean }> = ({
  className = '',
  gradient = false,
}) => {
  return (
    <div
      className={`
        h-px w-full my-8
        ${gradient 
          ? 'bg-gradient-to-r from-transparent via-atlas-gold-400 to-transparent' 
          : 'bg-atlas-gold-200 dark:bg-atlas-brown-700'
        }
        ${className}
      `}
    />
  );
};

// Brand Section Header
interface AtlasSectionProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const AtlasSection: React.FC<AtlasSectionProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-atlas-brown-800 to-atlas-gold-600 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-atlas-brown-600 dark:text-atlas-gold-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-atlas-brown-800 to-atlas-gold-600 mx-auto rounded-full" />
    </div>
  );
};

// Brand Icon Button
interface AtlasIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'default' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const AtlasIconButton: React.FC<AtlasIconButtonProps> = ({
  icon,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    default: 'bg-atlas-brown-800 text-white hover:bg-atlas-brown-700 shadow-md hover:shadow-lg',
    gold: 'bg-gradient-to-br from-atlas-gold-500 to-atlas-gold-600 text-white hover:from-atlas-gold-400 hover:to-atlas-gold-500 shadow-md hover:shadow-lg',
    ghost: 'text-atlas-brown-700 hover:bg-atlas-gold-100',
  };
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};