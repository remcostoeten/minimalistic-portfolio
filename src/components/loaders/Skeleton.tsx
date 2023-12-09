import React from 'react';

type SkeletonBarProps = {
    width?: string | number;
    height?: string | number;
    additionalClasses?: string;
    dark?: boolean;
};

const SkeletonBar: React.FC<SkeletonBarProps> = ({ width = 'full', height = '32', additionalClasses = '', dark = false }) => {
    const widthClass = typeof width === 'number' ? `w-${width}` : `w-${width}`;
    const heightClass = typeof height === 'number' ? `h-${height}` : `h-${height}`;
    const darkClass = dark ? 'dark-skeleton' : '';

    return <div className={`skeleton ${widthClass} ${heightClass} ${additionalClasses} ${darkClass}`} />;
};

export default React.memo(SkeletonBar);