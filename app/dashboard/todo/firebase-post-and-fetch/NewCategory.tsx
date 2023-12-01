'use client'
import { Input } from "@/components/ui/input";
import { db } from "@/core/(database)/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from 'sonner';
export function NewCategory() {
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
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="Category Name" />
            <button type="submit" className='btn btn-primary'>Add Category</button>
        </form>
    )
}
