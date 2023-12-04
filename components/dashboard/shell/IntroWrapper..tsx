
import React from 'react';

interface IntroWrapperProps {
    text?: string;
    title?: string;
    children?: React.ReactNode;
    subtitle?: string;
}

export default function IntroWrapper({ text, title, subtitle }: IntroWrapperProps) {
    return (
        <div className=" text-white p-6 inter">
            <div className="inter text-3xl font-bold">
                {title}
                <span className="inter text-xl font-normal">/ {subtitle}</span>
            </div>
            <p className="mt-2 text-lg">
                {text}
            </p>
        </div>
    );
}
