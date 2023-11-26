import { motion } from 'framer-motion';
import React from 'react';
import clsx from 'clsx';

type TypographyProps = {
    isGeist?: boolean;
    children: React.ReactNode;
    size?: 16 | 17 | 18 | 19 | 20;
    variant?: 'light' | 'dark';
    className?: string;
};

const motionProps = {
    initial: { opacity: 0, y: 25 },
    transition: { duration: .4, delay: .6 },
    animate: { opacity: 1, y: 0 }
};

const Typography = ({ as: Component = 'div', className, children, isGeist }: TypographyProps & { as?: keyof JSX.IntrinsicElements, className: string }) => (
    React.createElement(motion[Component], {
        ...motionProps,
        className: clsx(className, { 'geist': isGeist })
    }, children)
);

export const SectionTitle = ({ color = 'text-[#a3a3a3]', fontSize = 'text-[44px]', ...props }: TypographyProps & { color?: string, fontSize?: string }) => (
    <Typography as="h2" className={`libre ${fontSize} sm:text-center section-title no-underline break-words antialiased ${color}`} {...props} />
);

export const SubTitle = ({ color = 'text-gray-100', fontSize = 'text-lg', ...props }: TypographyProps & { color?: string, fontSize?: string }) => (
    <Typography as="h2" className={`libre ${fontSize} font-light ${color} block box-border -ml-[10px] leading-6 m-0 p-0 text-left no-underline break-words antialiased`} {...props} />
);

export const GridCardTitle = ({ color = 'text-black', fontSize = 'text-4xl', className, ...props }: TypographyProps & { color?: string, fontSize?: string }) => (
    <Typography as="h2" className={`font-bold ${color} ${fontSize} leading-9 text-center m-0 p-0 box-border antialiased ${className}`} {...props} />
);

export const Paragraph = ({ color = 'text-white', fontSize = 'text-[17px]', ...props }: TypographyProps & { color?: string, fontSize?: string }) => (
    <Typography as="p" className={`${fontSize} font-normal ${color === 'dark' ? 'text-black' : color} font-medium text-black leading-6 m-0 p-0`} {...props} />
);