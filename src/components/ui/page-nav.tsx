import { cn } from "@/core/utillities/utils"

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <span className={cn('flex lg:max-w-[1280px] max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 page-header pb-8', className)} {...props}>
            {children}
        </span>
    );
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h1 className={cn('text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] ', className)} {...props} />;
}

function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return <span className={cn('flex flex-col gap-4 max-w-[750px] lg:max-w-[1280px] text-lg text-muted-foreground sm:text-xl w-9/12 space-y-4 mb-4', className)} {...props} />;
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription };
