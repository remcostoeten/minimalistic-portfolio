"use client"

import React, { useState } from "react"
import { db } from "@/core/(database)/firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
      <Input
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <button type="submit" className="btn btn-primary">
        Add category
      </button>
    </form>
  )
}
