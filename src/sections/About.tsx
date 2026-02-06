import React from 'react';
import MysaPhoto from '../assets/IMG_3260.jpeg';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <div className="inline-block px-3 py-1 border border-neon-dim rounded-full text-neon-dim text-xs tracking-[0.3em] bg-neon/5 mb-3">
                        CLASSIFIED
                    </div>
                    <h2 className="text-3xl font-bold text-neon mb-2">ABOUT</h2>
                    <div className="text-neon-dim text-sm tracking-widest font-mono">PERSONNEL_FILE</div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* Photo */}
                    <div className="relative group w-full max-w-[400px] shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-dim to-neon opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative bg-bg border border-neon-dim group-hover:border-neon rounded-sm overflow-hidden p-2">
                            <img src={MysaPhoto} alt="Mysa — CEO & Lead Developer" className="w-full h-auto rounded-sm" />
                        </div>
                    </div>

                    {/* Story */}
                    <div className="space-y-4 text-gray-300 font-light text-sm leading-relaxed">
                        <p>
                            Behind Catasstrophies DSP is <span className="text-neon">Mysa</span>, a Birman cat of extraordinary intellect, and her human <span className="text-neon">Mikkel Konyher</span>, whom she controls entirely through a neural-link incubator originally developed in 1987 by the reclusive Polish scientist <span className="text-neon">Dr. Stanislaw Kowalczyk</span> at the Warsaw Institute of Feline Acoustics.
                        </p>
                        <p>
                            The incubator — a modified heated cat bed lined with Soviet-era vacuum tubes — allows Mysa to transmit DSP algorithms directly into Mikkel's subconscious while he sleeps. He wakes up, opens his laptop, and types code he doesn't fully understand. Mysa supervises from her perch, intervening with a firm paw to the keyboard whenever the gain staging is off.
                        </p>
                        <p>
                            Mysa holds no formal degree but has attended over 4,000 hours of YouTube mixing tutorials by sitting on the laptop during playback. Her thesis on "Program-Dependent Compression as a Function of Nap Duration" remains unpublished due to her refusal to work with peer reviewers she considers beneath her.
                        </p>
                        <p>
                            When not developing world-class audio plugins, Mysa enjoys knocking objects off tables to study their transient response, staring at walls (research), and demanding wet food at 3 AM to fuel late-night coding sessions. Mikkel's role is limited to clicking "build", opening cans, and accepting that he will never truly understand the codebase.
                        </p>

                        <h3 className="text-neon text-xs uppercase tracking-widest mt-4 border-b border-neon-dim/30 pb-1">Roles</h3>
                        <ul className="space-y-1 font-mono text-xs text-neon-dim">
                            <li>&gt; Mysa — CEO, Lead DSP Engineer, Quality Assurance (naps)</li>
                            <li>&gt; Mikkel Konyher — Build Button Operator, Can Opener</li>
                            <li>&gt; Dr. Stanislaw Kowalczyk — Incubator Architect (retired, whereabouts unknown)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
