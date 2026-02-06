import React from 'react';
import { GlitchButton } from '../components/ui/GlitchButton';
import BirmaCard from '../assets/Birmaneon.png';

export const ProductShowcase: React.FC = () => {
    return (
        <section id="plugins" className="py-20 container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto">
                {/* Card on the left */}
                <div className="relative group w-full max-w-[520px] shrink-0 transition-transform duration-500 hover:scale-[1.02]">
                    {/* Glowing Backdrop */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-dim to-neon opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

                    <div className="relative bg-bg border border-neon-dim group-hover:border-neon rounded-sm overflow-hidden p-2">
                         <img src={BirmaCard} alt="Birma Product Card" className="w-full h-auto rounded-sm" />
                    </div>
                </div>

                {/* Text on the right */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="inline-block px-3 py-1 border border-neon-dim rounded-full text-neon-dim text-xs tracking-[0.3em] bg-neon/5 mb-3">
                            BIRMA v1.0.13
                        </div>
                        <h2 className="text-3xl font-bold text-neon mb-2">BIRMA</h2>
                        <div className="text-neon-dim text-sm tracking-widest font-mono">OPTO_DYNAMICS_PROCESSOR</div>
                    </div>

                    <div className="space-y-4 text-gray-300 font-light text-sm leading-relaxed mb-8">
                        <p>
                            Birma is not just a compressor. She's an optical dynamics predator built around a T4-cell envelope follower with multi-stage release and program-dependent ratio. Set the Prowl threshold to stalk your signal and dial in Purr for full-spectrum warmth through the Silk Engine v2.2's 8x oversampled saturation with rich odd and even harmonics. Use Claw to blend parallel compression, then adjust Stalk to make up what she took. Every move calculated. Every transient accounted for.
                        </p>
                        <h3 className="text-neon text-xs uppercase tracking-widest mt-4 border-b border-neon-dim/30 pb-1">Specifications</h3>
                        <ul className="space-y-1 font-mono text-xs text-neon-dim">
                            <li>&gt; AU / VST3 Formats</li>
                            <li>&gt; 64-bit Audio Engine</li>
                            <li>&gt; Zero-Latency Operation</li>
                            <li>&gt; macOS 10.13+</li>
                        </ul>
                    </div>

                    <div id="download">
                        <GlitchButton className="w-full md:w-auto">
                            DOWNLOAD INSTALLER (MAC)
                        </GlitchButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
