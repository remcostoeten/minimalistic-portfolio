import { TechnologyIcons } from '@/lib/experience';
import React from 'react';
import Icon from '../icons/icons';
import Image from 'next/image';

export default function InfiniteLogoSlider() {
    return (
        <>
            <div className="slider">
                <ul className="slide-track gap-l">
                    {TechnologyIcons.map((icon, index) => (
                        <li className="slide flex gap gap-[20px] text-theme bg-card-inner rounded-card-inner" key={index}>
                            <Image src={`/icons/${icon.icon}`} alt={icon.name} width={50} height={50} />
                            <div className="flex flex-col slide__inner">
                                <span className='text-20 font-extrabold'>{icon.name}</span>
                                <span className='text-16 text-theme-light'>{icon.description}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}