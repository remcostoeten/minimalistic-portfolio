interface ContainerShellProps {
    children: React.ReactNode;
    margin?: string;
    padding?: string;
    size?: string;
}

export default function ContainerShell({ children, margin = 'mx-auto', padding = 'px-4', size = 'container' }: ContainerShellProps) {
    return (
        <div className={`${size} ${margin} ${padding}`}>
            {children}
        </div>
    );
}