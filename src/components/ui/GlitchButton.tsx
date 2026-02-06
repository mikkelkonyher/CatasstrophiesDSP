import React from 'react';

interface GlitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const GlitchButton: React.FC<GlitchButtonProps> = ({ 
    children, 
    className = '', 
    variant = 'primary',
    ...props 
}) => {
  const baseStyles = "relative px-8 py-3 font-mono font-bold tracking-wider uppercase transition-all duration-200 overflow-hidden group";
  
  const variants = {
    primary: "text-bg bg-neon hover:bg-neon-dim border border-neon hover:shadow-[0_0_15px_rgba(0,255,136,0.6)]",
    outline: "text-neon bg-transparent border border-neon hover:bg-neon/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 group-hover:glitch-shake inline-block">
        {children}
      </span>
      
      {/* Glitch Overlay on Hover */}
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12 z-0 opacity-50"></div>
    </button>
  );
};
