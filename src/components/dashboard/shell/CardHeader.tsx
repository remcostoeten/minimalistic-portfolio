import { Button } from "@/components/ui/button"

type CardHeaderProps = {
    title?: string;
    button?: string;
}

export default function CardHeader({ title, button }: CardHeaderProps) {
    return (
        <div className="bg-dash border-b border-dash rounded-t flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
                <CodeIcon className="text-white h-6 w-6" />
                <h1 className="text-white font-semibold">{title}</h1>
                <button className="inline-flex items-center justify-center rounded-3xl text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-8 px-2 py-2 border border-white  bg-transparent text-white">{button}</button>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-orange-500 rounded-full h-3 w-3" />
                <ChevronUpIcon className="text-white h-6 w-6" />
            </div>
        </div>
    )
}

function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function ChevronUpIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m18 15-6-6-6 6" />
        </svg>
    )
}
