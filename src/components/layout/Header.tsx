import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-30 border-b border-neon-dim bg-bg/90 backdrop-blur-sm h-16 flex items-center px-6 md:px-8 lg:px-12 justify-between">
            <div className="flex items-center gap-4">
                 <Link to="/" className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-3 h-3 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00ff88]"></div>
                        <div className="absolute inset-0 bg-neon rounded-full animate-ping opacity-20"></div>
                    </div>
                    <h1 className="text-xl font-bold tracking-[0.2em] neon-glow">
                        CATASSTROPHIES DSP
                    </h1>
                 </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-mono">
                <Link to="/" className="text-neon-dim hover:text-neon transition-colors tracking-widest">PLUG-INS</Link>
                <Link to="/download" className="text-neon-dim hover:text-neon transition-colors tracking-widest">DOWNLOAD</Link>
                <a href="#about" className="text-neon-dim hover:text-neon transition-colors tracking-widest">ABOUT</a>
            </nav>
        </header>
    );
};
