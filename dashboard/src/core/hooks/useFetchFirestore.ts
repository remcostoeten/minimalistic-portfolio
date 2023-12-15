'use client';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/core/firebase';

interface DataState {
    loading: boolean;
    data: any[];
    error: Error | null;
}

const useFetchFirestore = (collectionName: string): DataState => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, collectionName));
                const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(fetchedData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collectionName]);

    return { loading, data, error };
};

export default useFetchFirestore;