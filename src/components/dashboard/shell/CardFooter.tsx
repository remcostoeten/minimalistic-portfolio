import { Button } from "@/components/ui/button";
import Link from "next/link";

type CardFooterProps = {
    href?: string;
    button?: string;

}

export default function CardFooter({ href, button }: CardFooterProps) {
    return (
        <footer className="bg-[#1a1a1a] border-dash border-t p-4 flex justify-between rounded-b">
            <div className="flex items-center space-x-6">
                <a className="flex items-center space-x-2 text-white" href="#">
                    <GitCommitIcon className="h-5 w-5" />
                    <span>Repository settings</span>
                </a>
            </div>

            <div className="flex space-x-2">
                <Link href={href}> <Button className="border bg-transparent border-white text-white flex items-center space-x-2">{button}</Button></Link>
            </div>
        </footer >
    )
}

function GitCommitIcon(props) {
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
            <circle cx="12" cy="12" r="3" />
            <line x1="3" x2="9" y1="12" y2="12" />
            <line x1="15" x2="21" y1="12" y2="12" />
        </svg>
    )
}

function ImageIcon(props) {
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
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
    )
}

function UploadIcon(props) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}