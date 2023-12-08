import { Button } from "@/components/ui/button"

type CardHeaderProps = {
    title?: string;
    button?: string;
}

export default function CardHeader({ title, button }: CardHeaderProps) {
    return (
        <div className="bg-[#1A1A1A] border-b border-[#212121] rounded-t flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
                <CodeIcon className="text-white h-6 w-6" />
                <h1 className="text-white font-semibold">{title}</h1>
                <Button className="bg-transparent border border-white text-white rounded-full">{button}</Button>
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
