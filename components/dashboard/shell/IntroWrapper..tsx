import React from 'react';

interface IntroWrapperProps {
    text?: string;
    title?: string;
    subtitle?: string;
}

export default function IntroWrapper({ text, title, subtitle }: IntroWrapperProps) {
    return (
        <div className="bg-[#1c1c1e] text-white p-6">
            <div className="text-3xl font-bold">
                {title}
                <span className="text-xl font-normal">/ {subtitle}</span>
            </div>
            <p className="mt-2 text-lg">
                {text}
            </p>
        </div>
    );
}
