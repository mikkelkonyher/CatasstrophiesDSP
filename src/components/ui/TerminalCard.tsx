import React from 'react';

interface TerminalCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`relative border border-neon-dim bg-bg/90 rounded-sm shadow-[0_0_20px_rgba(0,255,136,0.05)] overflow-hidden group hover:border-neon transition-colors duration-300 ${className}`}>
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>

        {title && (
            <div className="border-b border-neon-dim/50 bg-neon/5 p-2 px-4 flex justify-between items-center">
                <span className="text-neon font-bold tracking-widest text-sm uppercase">{title}</span>
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-neon-dim rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-neon-dim/30 rounded-full"></div>
                </div>
            </div>
        )}
        
        <div className="p-6">
            {children}
        </div>
    </div>
  );
};
