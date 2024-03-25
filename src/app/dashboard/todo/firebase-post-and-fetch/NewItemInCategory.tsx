"use client"

import React, { useEffect, useState } from "react"
import { db } from "@/core/(database)/firebase"
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
} from "firebase/firestore"
import { toast } from "sonner"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Category = {
  id: string
  name: string
}

export function NewItemInCategory() {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState<number | null>(null)
  const [itemUrl, setItemUrl] = useState("")

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const fetchedCategories:
        | ((prevState: never[]) => never[])
        | DocumentData[] = []
      snapshot.forEach((doc) => {
        const category = doc.data()
        category.id = doc.id
        fetchedCategories.push(category)
      })
      setCategories(fetchedCategories as Category[])
    })
    return (): void => unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const newItem = {
        name: itemName,
        price: itemPrice,
        url: itemUrl,
        categoryId: selectedCategoryId,
      }

      await addDoc(collection(db, "items"), newItem)
      setItemName("")
      setItemPrice(null)
      setItemUrl("")
      setSelectedCategoryId("")
      toast.success("Item added!")
    } catch (error) {
      toast.error("Something went wrong!")
      console.error(error)
    }
  }

  return (
    <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="d">Select a category</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
      />
      <Input
        type="number"
        value={itemPrice ?? ""}
        onChange={(e) => setItemPrice(e.target.valueAsNumber || null)}
        placeholder="Price"
      />
      <Input
        value={itemUrl}
        onChange={(e) => setItemUrl(e.target.value)}
        placeholder="Item URL"
      />
      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
    </form>
  )
}
