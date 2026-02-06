import React from 'react';
import { Link } from 'react-router-dom';
import { GlitchButton } from '../components/ui/GlitchButton';

export const Download: React.FC = () => {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
                {/* Back link */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-neon-dim hover:text-neon transition-colors font-mono text-sm tracking-wider mb-12"
                >
                    &larr; BACK
                </Link>

                {/* Title */}
                <div className="mb-10">
                    <div className="inline-block px-3 py-1 border border-neon-dim rounded-full text-neon-dim text-xs tracking-[0.3em] bg-neon/5 mb-3">
                        FREE DOWNLOAD
                    </div>
                    <h2 className="text-3xl font-bold text-neon mb-2">BIRMA v1.0.13</h2>
                    <div className="text-neon-dim text-sm tracking-widest font-mono">OPTO_DYNAMICS_PROCESSOR</div>
                </div>

                {/* Installer Card */}
                <div className="relative group mb-10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-dim to-neon opacity-10 blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>
                    <div className="relative bg-bg border border-neon-dim rounded-sm p-8 space-y-6">
                        {/* Package Info */}
                        <div>
                            <h3 className="text-neon text-xs uppercase tracking-widest border-b border-neon-dim/30 pb-1 mb-4">Installer Package</h3>
                            <div className="font-mono text-sm text-gray-300 space-y-2">
                                                <p>&gt; <span className="text-neon">Birma v1.0.13 Installer.pkg</span></p>
                                <p className="text-neon-dim text-xs">Includes AU and VST3 plugin formats</p>
                            </div>
                        </div>

                        {/* Compatibility */}
                        <div>
                            <h3 className="text-neon text-xs uppercase tracking-widest border-b border-neon-dim/30 pb-1 mb-4">Compatibility</h3>
                            <ul className="font-mono text-sm text-gray-300 space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="text-neon">&#10003;</span> Apple Silicon (M1 / M2 / M3 / M4)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-neon">&#10003;</span> Intel Macs (x86_64)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-neon">&#10003;</span> macOS 10.13 High Sierra or later
                                </li>
                            </ul>
                        </div>

                        {/* Formats */}
                        <div>
                            <h3 className="text-neon text-xs uppercase tracking-widest border-b border-neon-dim/30 pb-1 mb-4">Plugin Formats</h3>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 border border-neon-dim text-neon-dim font-mono text-xs tracking-widest rounded-sm hover:border-neon hover:text-neon transition-colors">
                                    AU
                                </span>
                                <span className="px-4 py-2 border border-neon-dim text-neon-dim font-mono text-xs tracking-widest rounded-sm hover:border-neon hover:text-neon transition-colors">
                                    VST3
                                </span>
                            </div>
                        </div>

                        {/* Specs */}
                        <div>
                            <h3 className="text-neon text-xs uppercase tracking-widest border-b border-neon-dim/30 pb-1 mb-4">Specifications</h3>
                            <ul className="space-y-1 font-mono text-xs text-neon-dim">
                                <li>&gt; 64-bit Audio Engine</li>
                                <li>&gt; Zero-Latency Operation</li>
                                <li>&gt; Universal Binary (ARM + x86)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Download Button */}
                <a href="/Birma v1.0.13 Installer.pkg" download>
                    <GlitchButton className="w-full">
                        DOWNLOAD BIRMA v1.0.13 (MAC)
                    </GlitchButton>
                </a>

                {/* Gatekeeper Notice */}
                <div className="mt-8 border border-neon-dim/30 rounded-sm p-6 bg-neon/5">
                    <h3 className="text-neon text-xs uppercase tracking-widest mb-3 font-mono">Installation Note</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        This plugin is not yet notarized with Apple. macOS may show a security warning when you first open the installer. To allow it:
                    </p>
                    <ol className="text-gray-300 text-sm leading-relaxed space-y-2 font-mono list-decimal list-inside">
                        <li>Open <span className="text-neon">System Settings</span> &rarr; <span className="text-neon">Privacy &amp; Security</span></li>
                        <li>Scroll down to the Security section</li>
                        <li>Click <span className="text-neon">"Open Anyway"</span> next to the blocked installer message</li>
                    </ol>
                    <p className="text-neon-dim text-xs mt-3">
                        You only need to do this once. After installation the plugin will work normally.
                    </p>
                </div>
            </div>
        </section>
    );
};
