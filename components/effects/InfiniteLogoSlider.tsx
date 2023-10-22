'use client';
import { TechnologyIcons } from '@/lib/experience';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function InfiniteLogoSlider() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <div className="slider">
                <ul className="slide-track gap-l">
                    {TechnologyIcons.map((icon, index) => {
                        return (
                            <li
                                className="slide flex gap gap-[20px] text-20 text-theme bg-card-inner rounded-card-inner relative"
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image src={`/icons/${icon.icon}`} alt={icon.name} width={50} height={50} />
                                <div className="flex flex-col slide__inner">
                                    <span className='text-20 font-extrabold'>{icon.name}</span>
                                    <span className='text-16 text-theme-light'>{icon.description}</span>
                                </div>
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-[-56px] left-[16px] p-2 bg-card-inner text-theme text-sm rounded-card-inner"
                                        >
                                            Your additional message here
                                            <span className="tooltip-triangle"></span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}