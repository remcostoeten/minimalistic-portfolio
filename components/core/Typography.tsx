import { ChildProps } from '@/lib/types/types';

export const PageTitle = ({ children }: ChildProps) => (
    <h1 className="text-4xl font-medium text-gray-100 block box-border leading-6 m-0 p-0 text-left no-underline break-words antialiased ">
        {children}
    </h1>
);

export const SubTitle = ({ children }: ChildProps) => (
    <h2 className="text-lg font-light text-gray-100 block box-border leading-6 m-0 p-0 text-left no-underline break-words antialiased ">
        {children}
    </h2>
);