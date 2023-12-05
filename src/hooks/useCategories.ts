import { useState, useEffect } from "react";
import { db } from "@/core/(database)/firebase";
import { onSnapshot, collection } from "firebase/firestore";

export function useCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
            const newCategories = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategories(newCategories);
        });

        return () => unsubscribe();
    }, []);

    return categories;
}
