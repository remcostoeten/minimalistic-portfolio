'use client';
import { useState, useEffect } from "react";
import { onSnapshot, doc, updateDoc, deleteDoc, collection } from "firebase/firestore";
import { toast } from "sonner";
import { db } from "@/core/(database)/firebase";
import { useCategories } from "@/hooks/useCategories";

type Item = {
  id: string;
  name: string;
  category: string;
}

export function ItemsInCategory({ className }: { className?: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const categories = useCategories();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "items"), (snapshot) => {
      const fetchedItems: Item[] = [];
      snapshot.forEach((doc) => {
        const item = doc.data() as Item;
        item.id = doc.id;
        fetchedItems.push(item);
      });
      setItems(fetchedItems);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (itemId: string) => {
    try {
      await deleteDoc(doc(db, "items", itemId));
      toast.success("Item deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <div className={className}>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{categories.find(category => category.id === item.category)?.name}</span>
          <button onClick={() => setEditingItemId(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      {editingItemId && (
        <EditItem
          itemId={editingItemId}
          onClose={() => setEditingItemId(null)}
        />
      )}
    </div>
  );


  interface EditItemProps {
    itemId: string;
    onClose: () => void;
  }


  function EditItem({ itemId, onClose }: EditItemProps) {
    const [itemName, setItemName] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const categories = useCategories();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await updateDoc(doc(db, "items", itemId), {
          name: itemName,
          category: selectedCategory,
        });
        toast.success("Item updated successfully.");
        onClose();
      } catch (error) {
        toast.error("Something went wrong.");
        console.error(error);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item name"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Update Item</button>
      </form>
    );
  }
}