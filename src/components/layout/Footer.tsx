import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neon-dim bg-bg/95 backdrop-blur-md p-4 w-full mt-auto z-30">
        <div className="flex justify-between items-center text-xs font-mono text-neon-dim uppercase tracking-wider px-4">
            <div>
                © 2026 CATASSTROPHIES DSP
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                <span>ONLINE</span>
            </div>
        </div>
    </footer>
  );
};
