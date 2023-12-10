import { ReactNode } from 'react';

interface SectionSubHeadingProps {
  children?: ReactNode;
}

const SectionSubHeading = ({ children }: SectionSubHeadingProps) => {
  return (
    <div className='mb-10 sm:mb-0 border-b border-[#eee]/20 pb-1 sm:border-0  flex flex-col lg:flex-row justify-between lg:items-center gap-2 text-neutral-600 dark:text-neutral-400'>
      {children}
    </div>
  );
};

export default SectionSubHeading;
