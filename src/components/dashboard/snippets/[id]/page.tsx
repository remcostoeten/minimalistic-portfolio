'use client';

import React, { useEffect, useState } from "react"
import { addDoc, collection, getDocs, onSnapshot, serverTimestamp } from "firebase/firestore"
import { db } from "@/core/(database)/firebase";

export default function Page() {
    const [snippets, setSnippets] = useState([]);

    useEffect(() => {
        const unsubscribeSnippets = onSnapshot(collection(db, 'snippets'), (snapshot) => {
            const snippetsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSnippets(snippetsData);
        });

        return () => {
            unsubscribeSnippets();
        };
    }, []);

    return (
        <div className="flex flex-col gap-4 bg-[#1A1C1F] p-4 border-l border-r border-[#262626]">
            {snippets.map((snippet) => (
                <div key={snippet.id}>
                    <p>{snippet.description}</p>
                </div>
            ))}
        </div>
    );
}