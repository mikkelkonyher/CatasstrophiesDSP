import React from 'react';
import { GlitchButton } from '../components/ui/GlitchButton';
import BirmaCard from '../assets/Birma-Card.png';

export const ProductShowcase: React.FC = () => {
    return (
        <section id="plugins" className="py-20 container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
                {/* Card on the left */}
                <div className="relative group w-full max-w-[320px] shrink-0 transition-transform duration-500 hover:scale-[1.02]">
                    {/* Glowing Backdrop */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-dim to-neon opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

                    <div className="relative bg-bg border border-neon-dim group-hover:border-neon rounded-sm overflow-hidden p-2">
                         <img src={BirmaCard} alt="Birma Product Card" className="w-full h-auto rounded-sm" />
                    </div>
                </div>

                {/* Text on the right */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-neon mb-2">BIRMA</h2>
                        <div className="text-neon-dim text-sm tracking-widest font-mono">CORE_DYNAMICS_PROCESSOR</div>
                    </div>

                    <div className="space-y-4 text-gray-300 font-light text-sm leading-relaxed mb-8">
                        <p>
                            Birma is not just a compressor. It's a dynamic sculpting tool designed for the modern producer.
                            Featuring our proprietary "Neural-Link" saturation algorithm, it adds warmth and grit while
                            maintaining absolute transient clarity.
                        </p>
                        <h3 className="text-neon text-xs uppercase tracking-widest mt-4 border-b border-neon-dim/30 pb-1">Specifications</h3>
                        <ul className="space-y-1 font-mono text-xs text-neon-dim">
                            <li>&gt; VST3 / AU / AAX Formats</li>
                            <li>&gt; 64-bit Audio Engine</li>
                            <li>&gt; Zero-Latency Operation</li>
                            <li>&gt; macOS 10.13+ / Windows 10+</li>
                        </ul>
                    </div>

                    <div id="download" className="space-y-3">
                        <GlitchButton className="w-full md:w-auto">
                            DOWNLOAD INSTALLER (MAC)
                        </GlitchButton>
                        <GlitchButton variant="outline" className="w-full md:w-auto">
                            DOWNLOAD INSTALLER (WIN)
                        </GlitchButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
