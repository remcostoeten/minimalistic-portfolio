'use client';
import React, { useState, useEffect } from "react";
import { onSnapshot, doc, updateDoc, deleteDoc, collection } from "firebase/firestore";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { db } from "@/core/(database)/firebase";
import { Button } from "@/components/ui/button";

type Category = {
  id: string;
  categoryName: string;
};

export function CategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const fetchedCategories: Category[] = [];
      snapshot.forEach((doc) => {
        const category = doc.data() as Category;
        category.id = doc.id;
        fetchedCategories.push(category);
      });
      setCategories(fetchedCategories);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (categoryId: string) => {
    try {
      await deleteDoc(doc(db, "categories", categoryId));
      toast.success("Category deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col gap-2">
      {categories.map(category => (
        <div key={category.id}>
          <span>{category.categoryName}</span>
          <div className="flex gap-2 mt-1">
            <Button variant="secondary" onClick={() => setEditingCategoryId(category.id)} >Edit</Button>
            <Button variant="ghost" onClick={() => handleDelete(category.id)} >Delete</Button>
          </div></div>
      ))}
      {editingCategoryId && (
        <EditCategory
          categoryId={editingCategoryId}
          onClose={() => setEditingCategoryId(null)}
        />
      )}
    </div>
  );
}

interface EditCategoryProps {
  categoryId?: string;
  onClose?: () => void;
}

export default function EditCategory({ categoryId, onClose }: EditCategoryProps) {
  const [categoryName, setCategoryName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "categories", categoryId), {
        name: categoryName,
      });
      toast.success("Category updated successfully.");
      onClose();
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Input
        value={categoryName}
        onChange={e => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Update
        </button>
        <button type="button" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}
