import { useState, useEffect } from "react";
import { db } from "@/core/(database)/firebase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

export function useEditData(collectionName) {
    const [data, setData] = useState(null);

    const updateData = async (id, newData) => {
        try {
            await updateDoc(doc(db, collectionName, id), newData);
            toast.success("Data updated successfully.");
        } catch (error) {
            toast.error("Something went wrong.");
            console.error(error);
        }
    };

    return { data, updateData };
}