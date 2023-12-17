"use client"

import React, { useEffect, useState } from "react"
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore"
import "react-quill/dist/quill.snow.css"
import { auth, db } from "@/core/(database)/firebase"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@nextui-org/react"
import dynamic from "next/dynamic"

type SnippetProps = {
    id: string
    title: string
    description?: string
    createdAt?: any
    userId: string
    subject?: string
    selectedDate?: Date | null
    label?: string
    shortDesc?: string
}

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

export default function NewSnippet(): JSX.Element {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState<Date | null>(null)
    const user = auth?.currentUser
    const [markdownContent, setMarkdownContent] = useState("")
    const [category, setCategory] = useState<string>('')
    const [categories, setCategories] = useState<string[]>([])
    const [shortDesc, setShortDesc] = useState<string>("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("user", user)
            }
            setLoading(false)
        })

        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, "snippet-categories"));
            setCategories(querySnapshot.docs.map(doc => doc.data().categoryName));
        };

        fetchCategories();

        return (): void => unsubscribe()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!user) {
            return
        }

        setLoading(true);
        try {
            const newThought: SnippetProps = {
                title,
                description: markdownContent,
                createdAt: serverTimestamp(),
                userId: user?.uid,
                subject: category,
                shortDesc
            };

            const docRef = await addDoc(collection(db, "snippets"), newThought);
            newThought.id = docRef.id;

            setTitle("");
            setMarkdownContent("");
            setCategory("");
            setShortDesc("");
            toast.success("Thought added successfully.");
        } catch (error) {
            console.error(error);
            toast.error("Error adding thought.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form className="flex flex-col gap-2 py-6" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    className="wysiwyg-input"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input type="text" placeholder="Short description" value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((category) => (
                        <option value={category}>{category}</option>
                    ))}
                </select>
                {ReactQuill && (
                    <ReactQuill
                        placeholder="Thought content"
                        value={markdownContent}
                        className="min-h-20vh"
                        onChange={setMarkdownContent}
                    />
                )}
                <Button variant="ghost" className="btn btn-primary" type="submit" loading={loading}>Submit</Button>
            </form>
        </>
    );
}