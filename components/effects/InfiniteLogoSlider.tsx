import { TechnologyIcons } from '@/lib/experience';
import React from 'react';
import Icon from '../icons/icons';
import Image from 'next/image';
export default function InfiniteLogoSlider() {
    return (
        <>
            <div className="slider">
                <div className="slide-track">
                    {/* Map over the icons data and create a slide for each icon */}
                    {TechnologyIcons.map((icon, index) => (
                        <div className="slide" key={index}>
                            <Image src={`/icons/${icon.icon}`} alt={icon.name} width={100} height={100} />                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}