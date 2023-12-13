import { useState, useEffect } from "react";
import { db } from "@/core/(database)/firebase";
import { onSnapshot, collection } from "firebase/firestore";

export const useFirestoreCollection = (collectionName) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setData(data);
        });

        return () => {
            unsubscribe();
        };
    }, [collectionName]);

    return data;
};
