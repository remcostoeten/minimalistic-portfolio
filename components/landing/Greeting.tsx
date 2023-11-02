'use client';

import { GhostButton } from "../core/buttons";

export default function Greeting() {
    return (
        <div className="flex flex-col gap-9">
            <h3 className='border-box text-gray-100 block font-sans text-[28px]  leading-9 tracking-tighter whitespace-pre-wrap break-words antialiased w-[600px]'>
                Bringing ideas to life, transforming thoughts into real working examples using the latest technologies.
            </h3>
            <GhostButton>Get in touch</GhostButton>
        </div>
    )
}