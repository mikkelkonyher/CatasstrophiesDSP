import React, { useState } from 'react';
import { GlitchButton } from '../components/ui/GlitchButton';
import BirmaCard from '../assets/Birma-Card.png';

interface ProductDetailProps {
    onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-bg border border-neon w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-[0_0_50px_rgba(0,255,136,0.1)] flex flex-col md:flex-row">
                 <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neon-dim hover:text-neon font-mono text-xl z-10"
                >
                    [X]
                </button>

                <div className="md:w-1/2 p-6 bg-black/30 flex items-center justify-center">
                    <img src={BirmaCard} alt="Birma Plugin" className="max-w-full h-auto rounded-sm shadow-lg shadow-neon/10" />
                </div>
                
                <div className="md:w-1/2 p-8 flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-neon mb-2">BIRMA</h2>
                        <div className="text-neon-dim text-sm tracking-widest font-mono">CORE_DYNAMICS_PROCESSOR</div>
                    </div>
                    
                    <div className="space-y-4 text-gray-300 font-light text-sm leading-relaxed mb-8 flex-grow">
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
                    
                    <div className="space-y-3 mt-auto">
                        <GlitchButton className="w-full">
                            DOWNLOAD INSTALLER (MAC)
                        </GlitchButton>
                        <GlitchButton variant="outline" className="w-full">
                            DOWNLOAD INSTALLER (WIN)
                        </GlitchButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProductShowcase: React.FC = () => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <section className="py-20 container mx-auto px-6">
            <div className="flex flex-col items-center">
                <div 
                    className="relative group cursor-pointer w-full max-w-[320px] mx-auto transition-transform duration-500 hover:scale-[1.02] z-20"
                    onClick={() => setShowDetail(true)}
                >
                    {/* Glowing Backdrop */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-dim to-neon opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    <div className="relative bg-bg border border-neon-dim group-hover:border-neon rounded-sm overflow-hidden p-2">
                         <img src={BirmaCard} alt="Birma Product Card" className="w-full h-auto rounded-sm" />
                         
                         {/* Hover Overlay */}
                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                             <GlitchButton className="pointer-events-none">
                                 VIEW DETAILS
                             </GlitchButton>
                         </div>
                    </div>
                    
                    <div className="text-center mt-6">
                        <h2 className="text-2xl font-bold text-white tracking-widest group-hover:text-neon transition-colors">BIRMA</h2>
                        <p className="text-neon-dim text-xs font-mono mt-2 opacity-70">CLICK CARD FOR SPECS & DOWNLOAD</p>
                    </div>
                </div>
            </div>

            {showDetail && <ProductDetail onClose={() => setShowDetail(false)} />}
        </section>
    );
};
