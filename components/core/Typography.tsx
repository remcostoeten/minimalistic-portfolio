'use client';
import { animate, motion } from 'framer-motion';
import React from 'react';

type TypographyProps = {
    isGeist?: boolean;
    children: React.ReactNode;
}; 1

export const PageTitle = ({ children, isGeist }: TypographyProps) => (
    <motion.h1
        initial={{ opacity: 0, y: 25 }}
        transition={{
            duration: .4,
            delay: .5,
        }}
        animate={{ opacity: 1, y: 0 }}
        className={`libre stext-4xl font-medium text-gray-100 block box-border leading-6 m-0 p-0 text-left no-underline break-words antialiased ${isGeist ? 'geist' : ''}`
        }
    >
        {children}
    </motion.h1 >
);

export const SectionTitle = ({ children, isGeist }: TypographyProps) => (
    <motion.h2
        initial={{ opacity: 0, y: 25 }}
        transition={{
            duration: .4,
            delay: .6,
        }}
        animate={{ opacity: 1, y: 0 }}
        className={`libre sm;pt-20 text-[44px] sm:text-center section-title' no-underline break-words antialiased text-[#a3a3a3] ${isGeist ? 'geist' : ''}`}
    >
        {children}
    </motion.h2>
);

export const SubTitle = ({ children, isGeist }: TypographyProps) => (
    <motion.h2
        initial={{ opacity: 0, y: 25 }}
        transition={{
            duration: .4,
            delay: .6,
        }}
        animate={{ opacity: 1, y: 0 }}
        className={`libre
        text-lg font-light text-gray-100 block box-border -ml-[10px] leading-6 m-0 p-0 text-left no-underline break-words antialiased ${isGeist ? 'geist' : ''}`}
    >
        {children}
    </motion.h2>
);