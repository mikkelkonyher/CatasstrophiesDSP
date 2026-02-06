import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 border-b border-neon-dim bg-bg/90 backdrop-blur-sm">
            <div className="h-16 flex items-center px-6 md:px-8 lg:px-12 justify-between">
                <div className="flex items-center gap-4">
                     <Link to="/" className="flex items-center gap-4" onClick={() => setMenuOpen(false)}>
                        <div className="relative">
                            <div className="w-3 h-3 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00ff88]"></div>
                            <div className="absolute inset-0 bg-neon rounded-full animate-ping opacity-20"></div>
                        </div>
                        <h1 className="text-sm sm:text-xl font-bold tracking-[0.2em] neon-glow">
                            CATASSTROPHIES DSP
                        </h1>
                     </Link>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-mono">
                    <Link to="/" className="text-neon-dim hover:text-neon transition-colors tracking-widest">PLUG-INS</Link>
                    <Link to="/download" className="text-neon-dim hover:text-neon transition-colors tracking-widest">DOWNLOAD</Link>
                    <Link to="/about" className="text-neon-dim hover:text-neon transition-colors tracking-widest">ABOUT</Link>
                </nav>

                {/* Burger button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <nav className="md:hidden border-t border-neon-dim/30 bg-bg/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4 text-sm font-mono">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="text-neon-dim hover:text-neon transition-colors tracking-widest">PLUG-INS</Link>
                    <Link to="/download" onClick={() => setMenuOpen(false)} className="text-neon-dim hover:text-neon transition-colors tracking-widest">DOWNLOAD</Link>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="text-neon-dim hover:text-neon transition-colors tracking-widest">ABOUT</a>
                </nav>
            )}
        </header>
    );
};
