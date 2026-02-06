import React from 'react';
import { GlitchButton } from '../components/ui/GlitchButton';

export const Hero: React.FC = () => {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center p-8 relative">
            <div className="text-center max-w-4xl space-y-6 z-10">
                <div className="inline-block px-4 py-1 border border-neon-dim rounded-full text-neon-dim text-xs tracking-[0.3em] bg-neon/5 mb-4">
                    CATASSTROPHIES DSP
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
                    <span className="text-neon neon-glow">PURRFECT</span><br />
                    COMPRESSION
                </h1>

                <p className="text-neon-dim md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    Nine lives of headroom. Zero clipping. All claws.
                </p>

                <div className="flex gap-6 justify-center mt-8">
                    <GlitchButton>EXPLORE PLUGINS</GlitchButton>
                </div>
            </div>
        </section>
    );
};
