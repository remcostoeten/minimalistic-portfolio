'use client'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { db } from "@/core/(database)/firebase"
import { DocumentData, addDoc, collection, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { toast } from "sonner"

type Category = {
  id: string;
  name: string;
}

export function NewItemInCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState<number | null>(null)
  const [itemUrl, setItemUrl] = useState("")

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const fetchedCategories: ((prevState: never[]) => never[]) | DocumentData[] = []
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
      {/* @ts-ignore */}
      <select>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <Input
        type="number" value={itemPrice ?? ''} onChange={e => setItemPrice(e.target.valueAsNumber || null)} placeholder="Price" />
      <Input
        value={itemUrl} onChange={e => setItemUrl(e.target.value)} placeholder="Item URL" />
      <button type="submit" className='btn btn-primary'>Add Item</button>
    </form >
  )
}
