import React from 'react';

interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const NeonInput: React.FC<NeonInputProps> = ({ label, className = '', ...props }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label className="text-xs text-neon-dim uppercase tracking-widest pl-2 border-l-2 border-neon-dim">
                    {label}
                </label>
            )}
            <div className="relative group">
                <input 
                    className={`w-full bg-black/30 border-b-2 border-neon-dim focus:border-neon text-neon placeholder:text-neon-dim/30 p-3 outline-none font-mono transition-colors focus:bg-neon/5 ${className}`}
                    {...props}
                />
                {/* Focus Line Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-focus-within:w-full shadow-[0_0_10px_#00ff88]"></div>
            </div>
        </div>
    );
};
