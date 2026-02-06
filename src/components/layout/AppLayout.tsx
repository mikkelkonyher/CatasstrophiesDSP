import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      {/* CRT Monitor Frame */}
      <div className="relative min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] bg-bg rounded-lg border-4 border-[#1a1a1a] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
        {/* Inner glow border */}
        <div className="absolute inset-0 rounded-lg border border-neon-dim/20 pointer-events-none"></div>
        
        {/* CRT Scanlines Overlay */}
        <div className="crt-overlay pointer-events-none absolute inset-0 z-50 rounded-lg"></div>

        {/* Main Content */}
        <div className="relative z-0 min-h-full flex flex-col font-mono text-neon selection:bg-neon selection:text-bg">
          {children}
        </div>
      </div>
    </div>
  );
};
