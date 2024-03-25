"use client"

import { useEffect, useState } from "react"
import firebase, { db } from "@/core/(database)/firebase"
import { collection, onSnapshot, query } from "firebase/firestore"

import { FirebaseForm } from "./FirebaseForm"

type Field = {
  name?: string
  type?: string
  placeholder?: string
  options?: { id: string; name: string }[]
}

export default function CreateExpense() {
  const [categories, setCategories] = useState([])
  const [fields, setFields] = useState<Field[]>([
    { name: "amount", type: "number", placeholder: "Amount" },
    { name: "description", type: "text", placeholder: "Description" },
    { name: "category", type: "select", options: [] },
  ])

  useEffect(() => {
    const q = query(collection(db, "categories"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const categories = []
      querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() })
      })
      setFields((fields) =>
        fields.map((field) => {
          if (field.name === "category") {
            return { ...field, options: categories }
          }
          return field
        })
      )
    })

    return () => unsubscribe()
  }, [])

  return <FirebaseForm fields={fields} collectionName="expenses" />
}
