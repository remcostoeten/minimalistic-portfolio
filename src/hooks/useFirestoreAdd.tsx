import { collection, addDoc } from "firebase/firestore";
import { db } from "@/core/(database)/firebase";

export const useFirestoreAdd = () => {
    const addData = async (collectionName: string, data: any) => {
        try {
            const docRef = await addDoc(collection(db, collectionName), data);
            return docRef.id;
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return addData;
};