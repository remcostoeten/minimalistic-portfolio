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

export const CardShellSkeleton = () => {
    return (
        <div>
            <div className="bg-dash border-b border-dash gap-2 ounded-t flex  items-center p-4">
                <SkeletonBar dark width={40} height={4} />
                <SkeletonBar dark width={20} height={8} />
                <SkeletonBar dark width={20} height={8} />
            </div>
            <div className="bg-[#1a1a1a] text-white">
                <div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-[#1a1a1a] border-dash border-t p-4 flex justify-between rounded-b skeleton-footer">
                <div className="flex items-center space-x-6">
                    <SkeletonBar dark width={20} height={8} />
                </div>
                <div className="flex space-x-2">
                    <SkeletonBar dark width={20} height={8} />
                </div>
            </footer>
        </div>
    );
};

export const ActivityStreamSkeleton = () => {
    return (
        <>
            <li className='py-4'>
                <div className='flex items-center'>
                    <span className='text-left flex flex-col gap-1 w-full'>
                        <div className='flex items-start gap-2'>
                            <SkeletonBar dark height={6} width={6} />
                            <span className='text-left flex flex-col gap-1'>
                                <span className='text-left flex flex-col gap-1 w-4/5' style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    <SkeletonBar dark height={4} additionalClasses='!w-[200px]' />
                                    <SkeletonBar dark height={4} additionalClasses='!w-[200px]' />
                                </span>
                                <div className='flex items-center flex-wrap-reverse text-[14px] gap-2 text-muted-foreground'>
                                    <span> - </span>
                                    <SkeletonBar dark height={4} width={16} />
                                </div>
                            </span>
                        </div>
                    </span>
                </div >
            </li >
        </>
    )
}

export default React.memo(SkeletonBar);