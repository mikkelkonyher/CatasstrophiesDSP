import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-bg">
      {/* CRT Scanlines Overlay */}
      <div className="crt-overlay pointer-events-none absolute inset-0 z-50"></div>

      {/* Main Content */}
      <div className="relative z-0 min-h-screen flex flex-col font-mono text-neon selection:bg-neon selection:text-bg">
        {children}
      </div>
    </div>
  );
};
