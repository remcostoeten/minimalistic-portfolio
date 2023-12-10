"use client"

import React, { useEffect, useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import ReactQuill from "react-quill"

import "react-quill/dist/quill.snow.css"
import { auth, db } from "@/core/(database)/firebase"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"


interface NewThoughtProps {
    content?: string
}

type Thought = {
    id: string
    title: string
    description: string
    createdAt: any
    userId: string
    subject: string
    selectedDate: Date | null
    label: string
}

export function NewThought({ content }: NewThoughtProps) {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState<Date | null>(null)
    const [description, setDescription] = useState("")
    const [label, setLabel] = useState("")
    const [thoughts, setThoughts] = useState([])
    const [loading, setLoading] = useState(false)
    const user = auth?.currentUser
    const [markdownContent, setMarkdownContent] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("user", user)
            }
            setLoading(false)
        })
        return (): void => unsubscribe()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!user) {
            return
        }

        try {
            const newThought: Thought = {
                title,
                userId: user.uid,
                description: markdownContent,
                createdAt: serverTimestamp(),
                id: "",
                selectedDate: date,
                label,
                subject: ""
            }

            const docRef = await addDoc(collection(db, "thoughts"), newThought)
            newThought.id = docRef.id

            setThoughts([newThought, ...thoughts] as any)
            setDescription("")
            setTitle("")
            setDate(null)
            setLabel("")
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
                <ReactQuill
                    placeholder="Thought content"
                    value={markdownContent}
                    className="min-h-20vh"
                    onChange={setMarkdownContent}
                />
            </form >
        </>
    )
}