'use client';
import React, { useEffect, useState } from 'react';

type Props = {
    words: string[];
    interval?: number;
};

const SwappingWords: React.FC<Props> = ({ words, interval = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [words, interval]);

    return (
        <span className="swap">
                <span className="swap__container">
                  <ul className="swap__container__list">
                    {words.map((word, index) => (
                        <li
                            key={index}
                            className={`swap__container__list__item font-light ${
                                index === currentIndex ? 'active' : ''
                            }`}
                        >
                            {word}
                        </li>
                    ))}
                </ul>
            </span>
        </span>
    );
};

export default SwappingWords;