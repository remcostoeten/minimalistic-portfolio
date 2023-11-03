import React from 'react';

type LabelProps = {
    children?: React.ReactNode;
}

const ShowcaseLabel: React.FC<LabelProps> = ({ children }) => {
    return (
        <div className='bg-[#1E1F1E] text-sm text-[#F2F5F6]  flex items-center justify-center border border-[#323205] rounded-lg px-3 py-1
        '>
            {children}
        </div>
    );
}

export default ShowcaseLabel;