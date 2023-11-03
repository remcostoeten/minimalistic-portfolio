'use client';

import { motion } from "framer-motion";
import { GhostButton } from "../core/buttons";
import Flexer from "../core/layout/Flexer";

export default function Greeting() {
    return (
        <Flexer gap="10">
            <motion.h3 className='border-box pb-[32px] text-gray-100 block font-sans text-[28px]  leading-9 tracking-tighter whitespace-pre-wrap break-words antialiased w-[600px]'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100%" }}
                transition={{ delay: .7, duration: 1, type: "spring", stiffness: 100 }}
            >
                Bringing ideas to life, transforming thoughts into real working examples using the latest technologies.
            </motion.h3>
            <GhostButton>Get in touch</GhostButton>
        </Flexer>
    )
}