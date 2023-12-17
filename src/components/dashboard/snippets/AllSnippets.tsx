'use client';
import { Badge } from "@/components/ui/badge"
import { db } from "@/core/(database)/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Component() {
    const [snippets, setSnippets] = useState([]);

    useEffect(() => {
        const unsubscribeSnippets = onSnapshot(collection(db, 'thoughts'), (snapshot) => {
            const snippetsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log(snippetsData); // Log the data to the console
            setSnippets(snippetsData);
        });
        return () => {
            unsubscribeSnippets();
        };
    }, []);

    return (
        <aside className=" w-[300px] text-white border-l-1 bg-[#121212] border-zinc-800 border-r-1 ">
            <div className="overflow-y-auto">
                <div className="p-4 space-y-4">
                    {snippets.map((snippet) => (
                        <div key={snippet.id} className="border p-4 rounded-lg space-y-2 bg-[##151817] border-neutral-800">
                            <div className="flex items-center space-x-2">
                                <TextIcon className="text-gray-400 w-6 h-6" />
                                <span className="text-sm font-semibold">{snippet.title}</span>
                            </div>
                            {/* <p className="text-gray-400 text-xs">{snippet.cpp</p> */}
                            <Badge className="text-xs" variant="secondary">
                                {snippet.categoryName}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>
        </aside >
    )
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
