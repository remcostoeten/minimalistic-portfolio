'use client';
import { db } from "@/core/(database)/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FilesIcon, FolderIcon } from "lucide-react";
import Link from "next/link";
import Skeleton from "@/components/loaders/Skeleton";

export default function Component() {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribeSnippets = onSnapshot(collection(db, 'snippets'), (snapshot) => {
            const snippetsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSnippets(snippetsData);
            setLoading(false);
        });

        return () => {
            unsubscribeSnippets();
        };
    }, []);

    return (
        <aside className="flex flex-col gap-4 bg-[#1A1C1F] p-4 border-l border-r border-[#262626]">
            {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="w-[300px] flex flex-col rounded-md gap-4 text-white border-l-1 bg-[#313235] border-zinc-800 border-r-1">
                        <div className="p-4 rounded-lg space-y-2 bg-[#151817]">
                            <div className="flex items-center space-x-2">
                                <FilesIcon className="text-gray-400 w-4 h-4" />
                                <Skeleton height={4} width='100%' /> {/* Title Skeleton */}
                            </div>
                            <Skeleton height={4} width='100%' /> {/* Description Skeleton */}
                            <span className="text-xs px-3 py-2 flex rounded-md mt-4 bg-[#424344] text-white items-center space-x-2">
                                <FolderIcon className="text-yellow-400 text-xs" />
                                <Skeleton height={4} width='100%' /> {/* Subject Skeleton */}
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                snippets.map((snippet) => (
                    <div key={snippet.id} className="w-[300px] flex flex-col rounded-md gap-4 text-white border-l-1 bg-[#313235] border-zinc-800 border-r-1">
                        <div className="p-4 rounded-lg space-y-2 bg-[#151817]">
                            <div className="flex items-center space-x-2">
                                <FilesIcon className="text-gray-400 w-4 h-4" />
                                <Link href={`/snippets/${snippet.id}`} className="text-sm font-semibold">{snippet.title}</Link>                            </div>
                            <p className="text-gray-400 text-xs">{snippet.shortDesc}</p>
                            <span className="text-xs px-3 py-2 flex rounded-md mt-4 bg-[#424344] text-white items-center space-x-2">
                                <FolderIcon className="text-yellow-400 text-xs" />
                                <span className="text-neutral-300 text-sm">{snippet.subject}</span>
                            </span>
                        </div>
                    </div>
                ))
            )}
        </aside>

    );
}
function PlusIcon(props) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

function FileIcon(props) {
    return
}


function TextIcon(props) {
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
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    )
}

function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
