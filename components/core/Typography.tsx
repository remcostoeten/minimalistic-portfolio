import { motion } from 'framer-motion';
import React from 'react';
import clsx from 'clsx';

type TypographyProps = {
    isGeist?: boolean;
    children: React.ReactNode;
    size?: 16 | 17 | 18 | 19 | 20;
    variant?: 'light' | 'dark';
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

export const SectionTitle = (props: TypographyProps) => (
    <Typography as="h2" className="libre text-[44px] sm:text-center section-title no-underline break-words antialiased text-[#a3a3a3]" {...props} />
);

export const SubTitle = (props: TypographyProps) => (
    <Typography as="h2" className="libre text-lg font-light text-gray-100 block box-border -ml-[10px] leading-6 m-0 p-0 text-left no-underline break-words antialiased" {...props} />
);

export const GridCardTitle = (props: TypographyProps) => (
    <Typography as="h2" className="font-bold text-black text-4xl leading-9 text-center m-0 p-0 box-border antialiased" {...props} />
);

export const Paragraph = ({ children, size = 17, variant = 'light' }: TypographyProps) => (
    <Typography as="p" className={`text-[${size}px] font-normal ${variant === 'dark' ? 'text-black' : 'text-white'} font-medium leading-6 m-0 p-0`} children={children} />
);