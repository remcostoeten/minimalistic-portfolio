'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/core/(database)/firebase';

export default function Page() {
    const [searchString] = useSearchParams();
    const searchParams = new URLSearchParams(searchString);
    const id = searchParams.get('id');
    const [snippet, setSnippet] = useState(null);

    useEffect(() => {
        if (id) {
            const unsubscribeSnippets = onSnapshot(collection(db, 'snippets'), (snapshot) => {
                const snippetsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const selectedSnippet = snippetsData.find((s) => s.id === id);

                setSnippet(selectedSnippet);
            });

            return () => {
                unsubscribeSnippets();
            };
        }
    }, [id]);

    if (!snippet) {
        // If the snippet is not found, you can handle it here
        return <p>Snippet not found</p>;
    }

    return (
        <div className="flex flex-col gap-4 bg-[#1A1C1F] p-4 border-l border-r border-[#262626]">
            <div key={snippet.id}>
                <p>{snippet.description}</p>
            </div>
        </div>
    );
}