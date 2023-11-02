'use client';

import { GhostButton } from "../core/buttons";
import Flexer from "../core/layout/Flexer";

export default function Greeting() {
    return (
        <Flexer gap="10">1
            <h3 className='border-box pb-[32px] text-gray-100 block font-sans text-[28px]  leading-9 tracking-tighter whitespace-pre-wrap break-words antialiased w-[600px]'>
                Bringing ideas to life, transforming thoughts into real working examples using the latest technologies.
            </h3>
            <GhostButton>Get in touch</GhostButton>
        </Flexer>
    )
}