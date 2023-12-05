'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/core/(database)/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from 'sonner';
export function NewCategory({ className }: { className?: string }) {
    const [categoryName, setCategoryName] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const newCategory = {
                name: categoryName,
            }
            await addDoc(collection(db, "categories"), newCategory)
            setCategoryName("")
            toast.success("Category added!")
        } catch (error) {
            toast.error("Something went wrong!")
            console.error(error)
        }
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <Input value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="Category Name" />
            <Button variant="ghost" type="submit">Add Category</Button>
        </form >
    )
}
