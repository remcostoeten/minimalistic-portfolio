'use client';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/core/firebase';

function useFetchFirestore(collectionName) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, collectionName));
                const documents = [];
                querySnapshot.forEach((doc) => {
                    documents.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });
                setData(documents);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collectionName]);

    return { data, error, loading };
}

export default useFetchFirestore;
