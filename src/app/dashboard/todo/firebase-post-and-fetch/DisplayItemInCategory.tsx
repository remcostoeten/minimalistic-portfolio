"use client"

import { useEffect, useState } from "react"
import { db } from "@/core/(database)/firebase"
import { useEditData } from "@/hooks/useEditData"
import { DeleteForeverOutlined } from "@mui/icons-material"
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { Edit3 } from "lucide-react"
import { ImCheckmark } from "react-icons/im"
import { toast } from "sonner"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SkeletonBar from "@/components/loaders/Skeleton"

export default function DisplayItemInCategory() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingItem, setEditingItem] = useState(null)
  const [newName, setNewName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { updateData } = useEditData("items")

  useEffect(() => {
    let q = query(collection(db, "items"))
    if (selectedCategory !== "all") {
      q = query(
        collection(db, "items"),
        where("category", "==", selectedCategory)
      )
    }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() })
      })
      setItems(items)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [selectedCategory])

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "items", id))
      toast.success("Item deleted successfully.")
    } catch (error) {
      toast.error("Something went wrong.")
      console.error(error)
    }
  }

  const handleEdit = async (id: string) => {
    if (editingItem === id) {
      try {
        await updateData(id, { name: newName })
        toast.success("Item updated successfully.")
        setEditingItem(null)
      } catch (error) {
        toast.error("Something went wrong.")
        console.error(error)
      }
    } else {
      setEditingItem(id)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[450px]">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <div>
            <label>Category: </label>
            <Select
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase border ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="border divide-y  ">
              {(loading ? Array.from({ length: 15 }) : items).map(
                (item, index) => (
                  <tr key={loading ? index : item.id}>
                    <td className="py-3 px-6">
                      {loading ? (
                        <SkeletonBar height={4} />
                      ) : editingItem === item.id ? (
                        <input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td className="py-3 px-6">
                      {loading ? <SkeletonBar height={2} /> : item.price}
                    </td>
                    <td className="py-3 px-6">
                      {!loading && (
                        <>
                          <div className="flex items-center gap-2">
                            <span
                              className="p-4"
                              onClick={() => handleDelete(item.id)}
                            >
                              <DeleteForeverOutlined />
                            </span>
                            <div className="w-px h-4 bg-gray-400/50"></div>
                            <span
                              className="p-4"
                              onClick={() => handleEdit(item.id)}
                            >
                              {editingItem === item.id ? (
                                <ImCheckmark />
                              ) : (
                                <Edit3 />
                              )}
                            </span>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
