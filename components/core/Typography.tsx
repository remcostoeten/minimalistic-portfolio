type TypographyProps = {
    isGeist?: boolean;
    children: React.ReactNode;
};

export const PageTitle = ({ children, isGeist }: TypographyProps) => (
    <h1 className={`text-4xl font-medium text-gray-100 block box-border leading-6 m-0 p-0 text-left no-underline break-words antialiased ${isGeist ? 'geist' : ''}`}>
        {children}
    </h1>
);

export const SubTitle = ({ children, isGeist }: TypographyProps) => (
    <h2 className={`text-lg font-light text-gray-100 block box-border -ml-[10px] leading-6 m-0 p-0 text-left no-underline break-words antialiased ${isGeist ? 'geist' : ''}`}>
        {children}
    </h2>
);