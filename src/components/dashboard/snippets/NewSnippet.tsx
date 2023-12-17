"use client"

import React, { useEffect, useState } from "react"
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore"
import "react-quill/dist/quill.snow.css"
import { auth, db } from "@/core/(database)/firebase"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"

type SnippetProps = {
    id: string
    title: string
    description?: string
    createdAt?: any
    userId: string
    subject?: string
    selectedDate?: Date | null
    label?: string
}

let ReactQuill;
if (typeof window !== 'undefined') {
    ReactQuill = require('react-quill');
}

export default function NewSnippet(): JSX.Element {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState<Date | null>(null)
    const [description, setDescription] = useState("")
    const [label, setLabel] = useState("")
    const [thoughts, setThoughts] = useState<SnippetProps[]>([])
    const [loading, setLoading] = useState(false)
    const user = auth?.currentUser
    const [markdownContent, setMarkdownContent] = useState("")
    const [category, setCategory] = useState<string>('')
    const [categories, setCategories] = useState<string[]>([])

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

        try {
            const newThought: SnippetProps = {
                id: "",
                title,
                userId: user.uid,
                description: markdownContent,
                createdAt: serverTimestamp(),
                selectedDate: date,
                label,
                subject: category
            }

            const docRef = await addDoc(collection(db, "thoughts"), newThought)
            newThought.id = docRef.id

            setThoughts([newThought, ...thoughts])
            setDescription("")
            setTitle("")
            setDate(null)
            setLabel("")
            setCategory("")
            setMarkdownContent("")
            toast.success("Thought added successfully.")
        } catch (error) {
            toast.error("Error adding thought.")
            console.error(error)
        } finally {
            setOpen(false)
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
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((category) => (
                        <option value={category}>{category}</option>
                    ))}
                </select>
                {ReactQuill && (
                    <ReactQuill
      w                  placeholder="Thought content"
                        value={markdownContent}
                        className="min-h-20vh"
                        onChange={setMarkdownContent}
                    />
                )}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    );
}