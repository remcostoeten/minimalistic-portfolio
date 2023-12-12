import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from "@/core/(database)/firebase";

export function useFirestoreCollection(collectionName) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
      const fetchedData = [];
      snapshot.forEach((doc) => {
        const item = doc.data();
        item.id = doc.id;
        fetchedData.push(item);
      });
      setData(fetchedData);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return data;
}
