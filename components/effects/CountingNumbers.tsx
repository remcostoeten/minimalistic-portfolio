'use strict'
import React, { useState, useEffect } from 'react';
import BezierEasing from 'bezier-easing';

interface CountingNumberProps {
    start: number;
    end: number | string;
    duration: number;
    delay: number; // Add delay prop
    className?: string;
}

const CountingNumber: React.FC<CountingNumberProps> = ({ start, end, duration, delay, className }) => {
    const [currentNumber, setCurrentNumber] = useState(start);

    const easing = BezierEasing(0.985, 0.9, 0.9, 1);
    const totalSteps = duration * 60;
    let currentStep = 0;

    useEffect(() => {
        const timeout = setTimeout(() => { // Add timeout
            const interval = setInterval(() => {
                currentStep += 1;
                const t = currentStep / totalSteps;
                const easedT = easing(t);

                const nextValue = start + easedT * (Number(end) - start);

                if (currentStep >= totalSteps) {
                    clearInterval(interval);
                    setCurrentNumber(Number(end));
                } else {
                    setCurrentNumber(nextValue);
                }
            }, (duration * 1000) / totalSteps);
        }, delay * 1000); // Convert delay to milliseconds

        return () => {
            clearTimeout(timeout); // Clear timeout
        };
    }, [start, end, duration, delay]); // Add delay to dependency array

    return <span className={className}>{Math.round(currentNumber)}</span>;
};

export default CountingNumber;