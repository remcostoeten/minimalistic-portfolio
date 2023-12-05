'use strict'
import React, { useState, useEffect } from 'react';
import BezierEasing from 'bezier-easing';

interface CountingNumberProps {
    start: number;
    end: number | string;
    duration: number;
    delay: number;
    className?: string;
    useFixed: boolean; // Add this prop
}
const CountingNumber: React.FC<CountingNumberProps> = ({ start, end, duration, delay, className, useFixed }) => {
    const [currentNumber, setCurrentNumber] = useState(start);

    const easing = BezierEasing(0.985, 0.9, 0.9, 1);
    const totalSteps = duration * 60;
    let currentStep = 0;

    // // Determine the number of decimal places in the end number
    // const decimalPlaces = (typeof end === 'number' ? end : parseFloat(end)).toString().split('.')[1]?.length || 0;

    useEffect(() => {
        const timeout = setTimeout(() => {
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
        }, delay * 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [start, end, duration, delay]);

    return <span className={className}>{useFixed ? currentNumber.toFixed(3) : currentNumber}</span>;
};

export default CountingNumber;