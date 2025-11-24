import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary is Yellow with dark text
    primary: "bg-brand-primary text-brand-dark hover:bg-amber-400 focus:ring-amber-400 shadow-md shadow-amber-200",
    
    // Secondary is Dark with light text (for contrast)
    secondary: "bg-brand-dark text-white hover:bg-slate-800 focus:ring-slate-800 shadow-md",
    
    // Outline - Dark text/border for light theme visibility
    outline: "border-2 border-slate-800 text-slate-800 hover:border-brand-primary hover:text-brand-primary focus:ring-brand-primary bg-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;