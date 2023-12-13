import { useEffect, useState } from "react";
import { db } from "@/core/(database)/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function useFirestoreCollection(collectionName) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
            const items = [];
            snapshot.forEach((doc) => {
                const item = doc.data();
                item.id = doc.id;
                items.push(item);
            });
            setData(items);
        });

        // Clean up the subscription on unmount
        return () => unsubscribe();
    }, [collectionName]);

    return data;
}

export default useFirestoreCollection;