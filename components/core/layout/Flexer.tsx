import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FlexerProps {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    align?: 'items-stretch' | 'items-start' | 'items-end' | 'items-center' | 'items-baseline';
    justify?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly';
    children: ReactNode;
    useMotion?: boolean;
    gap?: string;
    motionProps?: any;
}
/**
 * Flexer component
 * A flexible container for aligning child items.
 * @param {FlexerProps} props - Properties to configure the Flexer component.
 * @returns {JSX.Element} A flexible container with aligned child items.
 *
 * @example
 * // To use the Flexer component, import it in your file:
 * import Flexer from './Flexer';
 *
 * // Then, you can use it in your JSX like this:
 * <Flexer direction="row" align="items-center" justify="justify-start" useMotion={true} motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
 *   <div>Your content here</div>
 * </Flexer>
 *
 * // This will create a flex container with row direction, items aligned at the center, items justified at the start, and a fade-in animation.
 */
const Flexer: React.FC<FlexerProps> = ({ direction = 'flex-col', align = 'items-stretch', justify = 'justify-start', children, useMotion = false, motionProps, gap }) => {
    const Component = useMotion ? motion.div : 'div';
    return (
        <Component className={`flex ${direction} ${align} ${justify} gap-${gap}`} {...motionProps}>
            {children}
        </Component>
    );
};

export default Flexer;